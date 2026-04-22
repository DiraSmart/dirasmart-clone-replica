import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// Spanish routes
const ES_ROUTES = [
  "/",
  "/about",
  "/blog",
  // "/blog/knx-partner-panama-automatizacion-premium", // oculto hasta terminar la certificación KNX
  "/blog/control-por-voz-alexa-google-siri",
  "/blog/cortinas-motorizadas-persianas-inteligentes",
  "/blog/automatizacion-apartamentos-panama",
  "/blog/ahorro-energia-hogar-inteligente-panama",
  "/blog/beneficios-hogar-inteligente-panama",
  "/blog/como-funciona-automatizacion-hogar",
  "/blog/shabbat-tecnologia-automatizacion-halaja",
  "/blog/wifi-empresarial-vs-domestico",
  "/blog/privacidad-hogar-inteligente-local-vs-nube",
  "/blog/seguridad-inteligente-camaras-sensores",
  "/blog/iluminacion-inteligente-ambiente-ahorro",
  "/blog/climatizacion-inteligente-tropico-panama",
  "/blog/guia-principiantes-primera-casa-inteligente",
  "/blog/smart-home-oficinas-negocios",
];

// English routes (same structure with /en prefix)
const EN_ROUTES = ES_ROUTES.map((r) => (r === "/" ? "/en" : `/en${r}`));

// All routes to pre-render
const ROUTES = [...ES_ROUTES, ...EN_ROUTES];

// Simple static file server for the dist folder
function startServer(port) {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".xml": "application/xml",
    ".txt": "text/plain",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = req.url.split("?")[0];
      let filePath = join(DIST, urlPath === "/" ? "index.html" : urlPath);

      // If file doesn't exist or is a directory, and no extension, serve index.html (SPA fallback)
      if (!urlPath.includes(".")) {
        if (!existsSync(filePath) || !filePath.endsWith(".html")) {
          filePath = join(DIST, "index.html");
        }
      }

      try {
        const data = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const PORT = 4173;
  console.log("Starting local server...");
  const server = await startServer(PORT);

  console.log("Launching browser...");
  const browser = await launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    console.log(`  Pre-rendering: ${route}`);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Wait a bit for dynamic schemas and meta tags to be injected
    await new Promise((r) => setTimeout(r, 1500));

    // Get the full rendered HTML
    const html = await page.content();

    // Determine output path
    let outPath;
    if (route === "/") {
      outPath = join(DIST, "index.html");
    } else {
      outPath = join(DIST, route + ".html");
    }

    // Ensure directory exists
    const dir = dirname(outPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outPath, html, "utf-8");
    await page.close();
  }

  console.log(`\nPre-rendered ${ROUTES.length} pages successfully!`);
  await browser.close();
  server.close();
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});

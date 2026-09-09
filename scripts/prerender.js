import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// Static page routes (same paths across languages)
const STATIC_PAGES = ["/", "/about", "/comercial", "/premium", "/reviews", "/blog"];

// Blog post slugs per language
const BLOG_SLUGS = [
  { es: "bms-sistema-gestion-edificios-comercial", en: "bms-building-management-systems" },
  { es: "bacnet-protocolo-bms-estandar-ashrae", en: "bacnet-protocol-bms-standard" },
  { es: "casa-inteligente-vs-dispositivos-inteligentes", en: "smart-devices-vs-smart-home" },
  { es: "dali-protocolo-iluminacion-futuro", en: "dali-future-of-professional-lighting" },
  { es: "zigbee-zwave-vs-wifi-smart-home", en: "zigbee-zwave-vs-wifi-smart-home" },
  { es: "knx-panama-automatizacion-premium", en: "knx-premium-automation-panama" },
  { es: "control-por-voz-alexa-google-siri", en: "voice-control-alexa-google-siri" },
  { es: "cortinas-motorizadas-persianas-inteligentes", en: "motorized-curtains-smart-blinds" },
  { es: "automatizacion-apartamentos-panama", en: "apartment-automation-panama" },
  { es: "ahorro-energia-hogar-inteligente-panama", en: "smart-home-energy-savings-panama" },
  { es: "beneficios-hogar-inteligente-panama", en: "smart-home-benefits-panama" },
  { es: "como-funciona-automatizacion-hogar", en: "how-home-automation-works" },
  { es: "shabbat-tecnologia-automatizacion-halaja", en: "shabbat-technology-automation-halacha" },
  { es: "wifi-empresarial-vs-domestico", en: "enterprise-vs-home-wifi" },
  { es: "privacidad-hogar-inteligente-local-vs-nube", en: "smart-home-privacy-local-vs-cloud" },
  { es: "seguridad-inteligente-camaras-sensores", en: "smart-security-cameras-sensors" },
  { es: "iluminacion-inteligente-ambiente-ahorro", en: "smart-lighting-ambiance-energy-savings" },
  { es: "climatizacion-inteligente-tropico-panama", en: "smart-hvac-tropical-climate-panama" },
  { es: "guia-principiantes-primera-casa-inteligente", en: "beginners-guide-first-smart-home" },
  { es: "smart-home-oficinas-negocios", en: "smart-home-offices-business" },
];

const ES_ROUTES = [...STATIC_PAGES, ...BLOG_SLUGS.map((s) => `/blog/${s.es}`)];
const EN_ROUTES = [
  ...STATIC_PAGES.map((r) => (r === "/" ? "/en" : `/en${r}`)),
  ...BLOG_SLUGS.map((s) => `/en/blog/${s.en}`),
];

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

import { blogPosts } from "../src/data/blogPosts";
import { getPageMarkdown, STATIC_MARKDOWN_PATHS } from "../src/data/pageMarkdown";

const VALID_ROUTES = new Set(["/", "/about", "/blog", "/comercial", "/premium", "/reviews", "/en", "/en/about", "/en/blog", "/en/comercial", "/en/premium", "/en/reviews"]);
const VALID_PREFIXES = ["/blog/", "/en/blog/"];

const PERMANENT_REDIRECTS: Record<string, string> = {
  "/blog/knx-partner-panama-automatizacion-premium": "/blog/knx-panama-automatizacion-premium",
  "/en/blog/knx-partner-panama-automatizacion-premium": "/en/blog/knx-premium-automation-panama",
  "/index.html": "/",
  "/en/index.html": "/en",
  // Legacy WordPress pages (pre-2026 site) still crawled by Google
  "/ofertas": "/",
  "/ofertas/": "/",
  "/info": "/about",
  "/info/": "/about",
  "/tienda": "/",
  "/tienda/": "/",
  "/carrito": "/",
  "/carrito/": "/",
  "/mi-cuenta": "/",
  "/mi-cuenta/": "/",
  "/contacto": "/comercial",
  "/contacto/": "/comercial",
  // Migration to English slugs on /en/ blog routes (2026-05-13)
  "/en/blog/knx-panama-automatizacion-premium": "/en/blog/knx-premium-automation-panama",
  "/en/blog/control-por-voz-alexa-google-siri": "/en/blog/voice-control-alexa-google-siri",
  "/en/blog/cortinas-motorizadas-persianas-inteligentes": "/en/blog/motorized-curtains-smart-blinds",
  "/en/blog/automatizacion-apartamentos-panama": "/en/blog/apartment-automation-panama",
  "/en/blog/ahorro-energia-hogar-inteligente-panama": "/en/blog/smart-home-energy-savings-panama",
  "/en/blog/beneficios-hogar-inteligente-panama": "/en/blog/smart-home-benefits-panama",
  "/en/blog/como-funciona-automatizacion-hogar": "/en/blog/how-home-automation-works",
  "/en/blog/shabbat-tecnologia-automatizacion-halaja": "/en/blog/shabbat-technology-automation-halacha",
  "/en/blog/wifi-empresarial-vs-domestico": "/en/blog/enterprise-vs-home-wifi",
  "/en/blog/privacidad-hogar-inteligente-local-vs-nube": "/en/blog/smart-home-privacy-local-vs-cloud",
  "/en/blog/seguridad-inteligente-camaras-sensores": "/en/blog/smart-security-cameras-sensors",
  "/en/blog/iluminacion-inteligente-ambiente-ahorro": "/en/blog/smart-lighting-ambiance-energy-savings",
  "/en/blog/climatizacion-inteligente-tropico-panama": "/en/blog/smart-hvac-tropical-climate-panama",
  "/en/blog/guia-principiantes-primera-casa-inteligente": "/en/blog/beginners-guide-first-smart-home",
  "/en/blog/smart-home-oficinas-negocios": "/en/blog/smart-home-offices-business",
  "/en/blog/dali-protocolo-iluminacion-futuro": "/en/blog/dali-future-of-professional-lighting",
  "/en/blog/casa-inteligente-vs-dispositivos-inteligentes": "/en/blog/smart-devices-vs-smart-home",
};

const ASSET_ORIGIN = "https://dirasmart-clone-replica.jbrande.workers.dev";

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get("Accept") || "";
  return accept.includes("text/markdown");
}

function markdownResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept",
    },
  });
}

function findPost(pathname: string): { post: (typeof blogPosts)[number]; lang: "es" | "en" } | null {
  const esMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const enMatch = pathname.match(/^\/en\/blog\/([^/]+)$/);
  const slug = esMatch?.[1] ?? enMatch?.[1];
  const lang: "es" | "en" = enMatch ? "en" : "es";
  if (!slug) return null;
  const post = blogPosts.find((p) => p.slug.es === slug || p.slug.en === slug);
  return post ? { post, lang } : null;
}

function renderPostMarkdown(post: (typeof blogPosts)[number], lang: "es" | "en"): string {
  const parts = [
    `# ${post.title[lang]}`,
    "",
    post.excerpt[lang],
    "",
    `_${post.date} · ${post.category[lang]}_`,
    "",
    post.content[lang],
  ];
  if (post.faq && post.faq.length > 0) {
    parts.push("", `## ${lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}`);
    for (const item of post.faq) {
      parts.push("", `**${item.question[lang]}**`, "", item.answer[lang]);
    }
  }
  return parts.join("\n") + "\n";
}

function renderLlmsFull(): string {
  const sections: string[] = ["# DiraSmart — full site content for AI assistants", "", "See https://dirasmart.com/llms.txt for the summary and https://dirasmart.com/sitemap.xml for the canonical URL list.", ""];
  for (const lang of ["es", "en"] as const) {
    for (const base of STATIC_MARKDOWN_PATHS) {
      const pathname = lang === "en" ? (base === "/" ? "/en" : `/en${base}`) : base;
      const md = getPageMarkdown(pathname);
      if (md) sections.push("---", "", md);
    }
  }
  for (const post of blogPosts) {
    for (const lang of ["es", "en"] as const) {
      sections.push("---", "", `URL: https://dirasmart.com${lang === "en" ? "/en" : ""}/blog/${post.slug[lang]}`, "", renderPostMarkdown(post, lang));
    }
  }
  return sections.join("\n") + "\n";
}

function isValidRoute(pathname: string): boolean {
  if (VALID_ROUTES.has(pathname)) return true;
  return VALID_PREFIXES.some((prefix) => pathname.startsWith(prefix) && pathname.length > prefix.length);
}

function trailingSlashRedirect(pathname: string): string | null {
  if (pathname === "/" || !pathname.endsWith("/")) return null;
  const trimmed = pathname.slice(0, -1);
  return isValidRoute(trimmed) ? trimmed : null;
}

function assetRequest(pathname: string, original: Request): Request {
  return new Request(new URL(pathname, ASSET_ORIGIN), original);
}

function withCharset(response: Response): Response {
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.startsWith("text/html") || contentType.includes("charset")) {
    return withAgentLinks(response);
  }
  const headers = new Headers(response.headers);
  headers.set("content-type", `${contentType}; charset=utf-8`);
  return withAgentLinks(
    new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  );
}

// RFC 8288 Link headers so AI agents/crawlers can discover llms.txt without parsing HTML.
function withAgentLinks(response: Response): Response {
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.startsWith("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.append("Link", '</llms.txt>; rel="describedby"');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname.endsWith(".workers.dev") || url.hostname === "www.dirasmart.com") {
      const destination = new URL(url.pathname + url.search, "https://dirasmart.com");
      return Response.redirect(destination.toString(), 301);
    }

    const redirectTarget = PERMANENT_REDIRECTS[url.pathname];
    if (redirectTarget) {
      return Response.redirect(new URL(redirectTarget + url.search, url.origin).toString(), 301);
    }

    // Legacy WooCommerce product/category URLs: send to the home (mid-range catalog), drop cart params.
    if (/^\/(producto|categoria-producto|product|product-category|tag|etiqueta|author|feed|wp-content|wp-json)(\/|$)/.test(url.pathname)) {
      return Response.redirect(new URL("/", url.origin).toString(), 301);
    }

    const slashRedirect = trailingSlashRedirect(url.pathname);
    if (slashRedirect) {
      return Response.redirect(new URL(slashRedirect + url.search, url.origin).toString(), 301);
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json({ name: "Cloudflare" });
    }

    if (wantsMarkdown(request) && !url.pathname.includes(".")) {
      const found = findPost(url.pathname);
      if (found) {
        return markdownResponse(renderPostMarkdown(found.post, found.lang));
      }
      const pageMd = getPageMarkdown(url.pathname);
      if (pageMd) {
        return markdownResponse(pageMd);
      }
    }

    // /llms-full.txt: every static page + every blog post as one markdown document (llmstxt.org convention).
    if (url.pathname === "/llms-full.txt") {
      return markdownResponse(renderLlmsFull());
    }

    const asset = await env.ASSETS.fetch(assetRequest(url.pathname + url.search, request));
    if (asset.status === 200) {
      return withCharset(asset);
    }

    if (!url.pathname.includes(".")) {
      if (isValidRoute(url.pathname)) {
        const prerenderedPath = url.pathname === "/" ? "/index.html" : `${url.pathname}.html`;
        const prerendered = await env.ASSETS.fetch(assetRequest(prerenderedPath, request));
        if (prerendered.status === 200) {
          return withCharset(prerendered);
        }

        return withCharset(await env.ASSETS.fetch(assetRequest("/index.html", request)));
      }

      const indexResponse = await env.ASSETS.fetch(assetRequest("/index.html", request));
      const headers = new Headers(indexResponse.headers);
      const contentType = headers.get("content-type");
      if (contentType && contentType.startsWith("text/html") && !contentType.includes("charset")) {
        headers.set("content-type", `${contentType}; charset=utf-8`);
      }
      return new Response(indexResponse.body, {
        status: 410,
        headers,
      });
    }

    return asset;
  },
} satisfies ExportedHandler;

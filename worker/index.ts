const VALID_ROUTES = new Set(["/", "/about", "/blog", "/en", "/en/about", "/en/blog"]);
const VALID_PREFIXES = ["/blog/", "/en/blog/"];

const PERMANENT_REDIRECTS: Record<string, string> = {
  "/blog/knx-partner-panama-automatizacion-premium": "/blog/knx-panama-automatizacion-premium",
  "/en/blog/knx-partner-panama-automatizacion-premium": "/en/blog/knx-panama-automatizacion-premium",
};

const ASSET_ORIGIN = "https://dirasmart-clone-replica.jbrande.workers.dev";

function isValidRoute(pathname: string): boolean {
  if (VALID_ROUTES.has(pathname)) return true;
  return VALID_PREFIXES.some((prefix) => pathname.startsWith(prefix) && pathname.length > prefix.length);
}

function assetRequest(pathname: string, original: Request): Request {
  return new Request(new URL(pathname, ASSET_ORIGIN), original);
}

function withCharset(response: Response): Response {
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.startsWith("text/html") || contentType.includes("charset")) {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set("content-type", `${contentType}; charset=utf-8`);
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

    if (url.pathname.startsWith("/api/")) {
      return Response.json({ name: "Cloudflare" });
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

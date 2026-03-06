// Valid SPA routes — update this list when adding new pages
const VALID_ROUTES = new Set(["/", "/about", "/blog"]);
const VALID_PREFIXES = ["/blog/"];

function isValidRoute(pathname: string): boolean {
  if (VALID_ROUTES.has(pathname)) return true;
  return VALID_PREFIXES.some((prefix) => pathname.startsWith(prefix) && pathname.length > prefix.length);
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);

    // Redirect workers.dev to main domain to avoid duplicate content
    if (url.hostname.endsWith(".workers.dev")) {
      const destination = new URL(url.pathname + url.search, "https://dirasmart.com");
      return Response.redirect(destination.toString(), 301);
    }

    // API routes
    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    // Serve static assets (JS, CSS, images, etc.)
    const asset = await env.ASSETS.fetch(request);
    if (asset.status === 200) {
      return asset;
    }

    // For non-file paths, check if it's a valid SPA route
    if (!url.pathname.includes(".")) {
      const indexRequest = new Request(new URL("/index.html", request.url), request);
      const indexResponse = await env.ASSETS.fetch(indexRequest);

      if (isValidRoute(url.pathname)) {
        // Valid route — serve index.html with 200
        return indexResponse;
      }

      // Unknown route — serve index.html with 410 Gone so Google removes it
      return new Response(indexResponse.body, {
        status: 410,
        headers: indexResponse.headers,
      });
    }

    return asset;
  },
} satisfies ExportedHandler;

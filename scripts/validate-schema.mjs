/**
 * Fetches live pages, extracts every JSON-LD block and checks the fields Google requires
 * for the types DiraSmart uses. Usage: node scripts/validate-schema.mjs [baseUrl]
 */
const BASE = process.argv[2] || "https://dirasmart.com";
const PAGES = ["/", "/en", "/comercial", "/premium", "/reviews", "/about", "/blog/knx-panama-automatizacion-premium"];

const problems = [];
const note = (page, msg) => problems.push(`${page}: ${msg}`);

function check(page, node, path = "$") {
  if (!node || typeof node !== "object") return;
  const t = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
  if (t.includes("FAQPage")) {
    const qs = node.mainEntity || [];
    if (!Array.isArray(qs) || qs.length === 0) note(page, `${path} FAQPage sin mainEntity`);
    qs.forEach((q, i) => {
      if (q["@type"] !== "Question" || !q.name) note(page, `${path}.mainEntity[${i}] Question sin name`);
      if (!q.acceptedAnswer?.text) note(page, `${path}.mainEntity[${i}] sin acceptedAnswer.text`);
    });
  }
  if (t.includes("LocalBusiness") || t.includes("ProfessionalService")) {
    for (const f of ["name", "address", "telephone", "url", "image"]) if (!node[f]) note(page, `${path} LocalBusiness sin ${f}`);
    if (node.aggregateRating) {
      const ar = node.aggregateRating;
      if (!ar.ratingValue || !ar.reviewCount) note(page, `${path} aggregateRating incompleto`);
      if (Array.isArray(node.review) && Number(ar.reviewCount) < node.review.filter((r) => r.publisher).length) note(page, `${path} reviewCount menor que reseñas de Google listadas`);
    }
    (node.review || []).forEach((r, i) => {
      if (!r.author?.name) note(page, `${path}.review[${i}] sin author.name`);
      if (!r.reviewRating?.ratingValue) note(page, `${path}.review[${i}] sin reviewRating`);
      if (!r.reviewBody) note(page, `${path}.review[${i}] sin reviewBody`);
    });
  }
  if (t.includes("BlogPosting")) {
    for (const f of ["headline", "datePublished", "author", "publisher", "image"]) if (!node[f]) note(page, `${path} BlogPosting sin ${f}`);
    if (node.headline && node.headline.length > 110) note(page, `${path} headline > 110 caracteres`);
  }
  if (t.includes("Service")) {
    for (const f of ["serviceType", "provider", "areaServed"]) if (!node[f]) note(page, `${path} Service sin ${f}`);
  }
  if (t.includes("BreadcrumbList")) {
    (node.itemListElement || []).forEach((it, i) => { if (!it.name || !it.item) note(page, `${path} breadcrumb[${i}] incompleto`); });
  }
}

for (const p of PAGES) {
  const url = BASE + p;
  const html = await (await fetch(url, { headers: { "User-Agent": "schema-check" } })).text();
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  blocks.forEach((b, i) => {
    let j;
    try { j = JSON.parse(b); } catch (e) { note(p, `bloque ${i} JSON inválido: ${e.message}`); return; }
    const nodes = Array.isArray(j) ? j : j["@graph"] ? j["@graph"] : [j];
    nodes.forEach((n, k) => { types.push([].concat(n["@type"]).join("+")); check(p, n, `bloque${i}${nodes.length > 1 ? `[${k}]` : ""}`); });
  });
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  if (!title) note(p, "sin <title>"); else if (title.length > 65) note(p, `title de ${title.length} caracteres (>65, Google lo corta)`);
  if (!desc) note(p, "sin meta description"); else if (desc.length > 160) note(p, `description de ${desc.length} caracteres (>160)`);
  if (h1s !== 1) note(p, `${h1s} etiquetas <h1> (debe ser 1)`);
  if (!canonical) note(p, "sin canonical");
  console.log(`${p.padEnd(45)} schemas: ${types.join(", ") || "ninguno"} | h1=${h1s} | title=${title.length}c | desc=${desc.length}c`);
}

console.log("\n" + (problems.length ? `PROBLEMAS (${problems.length}):\n- ` + problems.join("\n- ") : "Sin problemas en los campos requeridos."));

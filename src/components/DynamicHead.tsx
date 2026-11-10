import { useEffect } from "react";
import { HOME_FAQ, HOME_INTRO, HOME_FUNCTIONS } from "@/data/homeAutomation";
import { useLocation } from "react-router-dom";
import { PAGE_META_EN, PAGE_META_ES } from "@/data/pageMeta";
import { BLOG_META_TITLES } from "@/data/blogMetaTitles";

const SITE_URL = "https://dirasmart.com";

/** Strip /en prefix to get the base path */
function basePath(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

function isEnglish(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

const homeServiceSchema = (lang: "es" | "en") => ({
  "@context": "https://schema.org", "@type": "Service",
  name: lang === "es" ? "Domótica y casas inteligentes en Panamá" : "Home automation and smart homes in Panama",
  serviceType: lang === "es" ? "Diseño e instalación de domótica" : "Home automation design and installation",
  description: HOME_INTRO[lang],
  provider: { "@type": "Organization", name: "DiraSmart", url: SITE_URL, telephone: "+50765956439" },
  areaServed: { "@type": "City", name: lang === "es" ? "Ciudad de Panamá" : "Panama City" },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: lang === "es" ? "Soluciones de domótica residencial" : "Residential home automation solutions",
    itemListElement: HOME_FUNCTIONS.map(item => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item.title[lang], description: item.description[lang] } })),
  },
});
const SERVICE_SCHEMA_ES = homeServiceSchema("es");
const SERVICE_SCHEMA_EN = homeServiceSchema("en");

const homeFaqSchema = (lang: "es" | "en") => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: HOME_FAQ.map(item => ({ "@type": "Question", name: item.question[lang], acceptedAnswer: { "@type": "Answer", text: item.answer[lang] } })),
});
const FAQ_SCHEMA_ES = homeFaqSchema("es");
const FAQ_SCHEMA_EN = homeFaqSchema("en");

const COMMERCIAL_FAQ_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿A partir de qué tamaño de edificio tiene sentido instalar un BMS?", acceptedAnswer: { "@type": "Answer", text: "En la práctica, a partir de unos 3,000 m² o cuando el edificio tiene múltiples sistemas (HVAC, iluminación, accesos, energía) que hoy se operan por separado. Por debajo de eso, KNX puro o automatización por zonas suele ser más costo-efectivo que un BMS completo." } },
    { "@type": "Question", name: "Ya tenemos equipos de HVAC, control de accesos o un PMS de hotel — ¿se pueden integrar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos con protocolos abiertos (BACnet, KNX, Modbus) precisamente para integrarnos con equipos existentes en vez de reemplazarlos. Lo evaluamos en la visita técnica y, cuando el equipo lo permite, lo incorporamos al mismo panel de control central." } },
    { "@type": "Question", name: "¿Cuánto se ahorra realmente en energía con automatización comercial?", acceptedAnswer: { "@type": "Answer", text: "En proyectos comerciales típicos vemos entre 15% y 30% de reducción en el consumo de climatización, el rubro que más pesa en la factura eléctrica de hoteles y oficinas, gracias a control por ocupación, programación horaria y monitoreo en tiempo real." } },
    { "@type": "Question", name: "¿Qué pasa si ya tenemos un BMS de otro proveedor y no queremos reemplazarlo?", acceptedAnswer: { "@type": "Answer", text: "Si el sistema actual habla BACnet o un protocolo abierto, generalmente podemos integrarnos sobre él en lugar de reemplazarlo por completo. Si es un sistema propietario cerrado, evaluamos caso por caso qué conviene más al cliente." } },
    { "@type": "Question", name: "Operamos 24/7 (hotel, clínica). ¿Dan soporte fuera de horario de oficina?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para operaciones continuas ofrecemos un modelo de servicio con SLA definido y soporte directo por WhatsApp, no un ticket genérico. El monitoreo remoto nos permite detectar y resolver la mayoría de las fallas antes de que el huésped o el equipo en sitio las note." } },
    { "@type": "Question", name: "¿Cuánto tiempo toma un proyecto comercial, desde el diseño hasta la puesta en marcha?", acceptedAnswer: { "@type": "Answer", text: "Depende del alcance: una oficina o retail con automatización por zonas se resuelve en 4 a 8 semanas. Un hotel o edificio completo con BMS, KNX y DALI integrados típicamente toma de 3 a 6 meses, coordinado en paralelo con la obra eléctrica." } },
    { "@type": "Question", name: "¿Por qué KNX descentralizado y no un sistema con controlador central?", acceptedAnswer: { "@type": "Answer", text: "Porque no hay un punto único de falla ni dependencia de un fabricante. En KNX cada actuador, sensor y pantalla ejecuta su propia lógica sobre el bus: si un equipo falla, una habitación se ve afectada, no el hotel completo. Los sistemas propietarios con un procesador central (por ejemplo Control4, Crestron o Savant) se apagan por completo si ese procesador falla o la marca retira el soporte. KNX es un estándar abierto ISO/IEC 14543-3 con más de 500 fabricantes." } },
    { "@type": "Question", name: "¿Qué diferencia a DiraSmart de otros integradores de automatización en Panamá?", acceptedAnswer: { "@type": "Answer", text: "Somos KNX Partner certificado, trabajamos solo con protocolos abiertos (KNX, DALI, BACnet, Modbus) y procesamiento local, y somos un solo proveedor para automatización, red, seguridad y soporte, con contacto directo por WhatsApp y SLA definido. Cubrimos desde un local comercial hasta hoteles y edificios completos, con presupuestos de rango medio y premium." } },
    { "@type": "Question", name: "¿Trabajan con presupuestos medios o solo proyectos de gran escala?", acceptedAnswer: { "@type": "Answer", text: "Ambos. Una oficina, restaurante o local con automatización por zonas es un proyecto de rango medio que se resuelve en semanas. Un hotel o edificio con BMS, KNX y DALI integrados entra en gama alta. En los dos casos cotizamos por proyecto después de una visita técnica sin costo." } },
  ],
};

const COMMERCIAL_FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "At what building size does a BMS make sense?", acceptedAnswer: { "@type": "Answer", text: "In practice, from around 3,000 m² or when the building has multiple systems (HVAC, lighting, access, energy) currently operated separately. Below that, pure KNX or zone-based automation is usually more cost-effective than a full BMS." } },
    { "@type": "Question", name: "We already have HVAC, access control or a hotel PMS — can they be integrated?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work with open protocols (BACnet, KNX, Modbus) specifically to integrate with existing equipment instead of replacing it. We assess this during the site visit and, when the equipment supports it, bring it into the same central control panel." } },
    { "@type": "Question", name: "How much does commercial automation actually save on energy?", acceptedAnswer: { "@type": "Answer", text: "In typical commercial projects we see 15% to 30% lower HVAC consumption — the line item that weighs most on the electric bill for hotels and offices — thanks to occupancy-based control, scheduling and real-time monitoring." } },
    { "@type": "Question", name: "What if we already have a BMS from another provider and don't want to replace it?", acceptedAnswer: { "@type": "Answer", text: "If the current system speaks BACnet or another open protocol, we can usually integrate on top of it instead of replacing it entirely. If it's a closed proprietary system, we assess case by case what makes more sense for the client." } },
    { "@type": "Question", name: "We operate 24/7 (hotel, clinic). Do you support outside office hours?", acceptedAnswer: { "@type": "Answer", text: "Yes. For continuous operations we offer a service model with a defined SLA and direct WhatsApp support, not a generic ticket queue. Remote monitoring lets us catch and resolve most faults before the guest or on-site staff even notice." } },
    { "@type": "Question", name: "How long does a commercial project take, from design to commissioning?", acceptedAnswer: { "@type": "Answer", text: "It depends on scope: an office or retail space with zone-based automation is done in 4 to 8 weeks. A full hotel or building with integrated BMS, KNX and DALI typically takes 3 to 6 months, coordinated in parallel with the electrical build-out." } },
    { "@type": "Question", name: "Why decentralized KNX instead of a system with a central controller?", acceptedAnswer: { "@type": "Answer", text: "Because there is no single point of failure and no vendor dependency. In KNX every actuator, sensor and touchscreen runs its own logic on the bus: if one unit fails, one room is affected, not the whole hotel. Proprietary systems built around a central processor (for example Control4, Crestron or Savant) shut down entirely if that processor fails or the brand drops support. KNX is an open ISO/IEC 14543-3 standard with 500+ manufacturers." } },
    { "@type": "Question", name: "What sets DiraSmart apart from other automation integrators in Panama?", acceptedAnswer: { "@type": "Answer", text: "We are a certified KNX Partner, we work only with open protocols (KNX, DALI, BACnet, Modbus) and local processing, and we are a single provider for automation, networking, security and support, with direct WhatsApp contact and a defined SLA. We cover everything from a single shop to full hotels and buildings, with mid-range and premium budgets." } },
    { "@type": "Question", name: "Do you work with mid-range budgets or only large-scale projects?", acceptedAnswer: { "@type": "Answer", text: "Both. An office, restaurant or shop with zone-based automation is a mid-range project done in weeks. A hotel or building with integrated BMS, KNX and DALI is high-end. In both cases we quote per project after a free site visit." } },
  ],
};

const PREMIUM_FAQ_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué incluye el catálogo Premium de DiraSmart?", acceptedAnswer: { "@type": "Answer", text: "El mismo equipamiento KNX que instalamos en hoteles y edificios corporativos, para residencias: pantallas táctiles KNX en pared, keypads, termostatos por zona, iluminación por escenas, audio multi-room y persianas motorizadas, con marcas como Basalte, Gira, Jung, ABB, Hager, Lutron, Theben y MDT. No es un servicio distinto: es el mismo servicio DiraSmart con el nivel de producto más alto del mercado." } },
    { "@type": "Question", name: "¿Cuánto cuesta una instalación KNX en Panamá?", acceptedAnswer: { "@type": "Answer", text: "Una instalación KNX completa entra en gama alta y depende de la cantidad de puntos de control, pantallas y zonas de clima. Se define en fase de obra o remodelación integral. La consulta y la propuesta inicial no tienen costo; no publicamos tarifas fijas porque cada proyecto se dimensiona sobre planos." } },
    { "@type": "Question", name: "¿KNX necesita un servidor o controlador central?", acceptedAnswer: { "@type": "Answer", text: "No. KNX es un sistema descentralizado: la inteligencia está repartida en cada dispositivo y se comunican por un bus cableado. Un servidor local es opcional para visualización, app y escenas avanzadas, pero la casa funciona sin él. Si un equipo falla, el resto sigue operando." } },
    { "@type": "Question", name: "¿Puedo tener KNX en una casa ya construida?", acceptedAnswer: { "@type": "Answer", text: "KNX requiere bus cableado, por lo que es ideal en fase de planos, obra gris o remodelación integral. Para casas terminadas sin obra ofrecemos la alternativa inalámbrica de gama media (Zigbee, Z-Wave, WiFi) con el mismo servicio y la misma app." } },
    { "@type": "Question", name: "¿Qué marcas KNX instalan?", acceptedAnswer: { "@type": "Answer", text: "Basalte (Bélgica), Gira, Jung, Hager, Theben y MDT (Alemania), ABB i-bus KNX (Suiza) y Lutron HomeWorks (Estados Unidos). Si una marca es KNX o tiene gateway KNX, casi siempre podemos integrarla." } },
  ],
};

const PREMIUM_FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What does the DiraSmart Premium catalog include?", acceptedAnswer: { "@type": "Answer", text: "The same KNX equipment we install in hotels and corporate buildings, for residences: wall-mounted KNX touchscreens, keypads, per-zone thermostats, lighting scenes, multi-room audio and motorized blinds, with brands like Basalte, Gira, Jung, ABB, Hager, Lutron, Theben and MDT. It is not a different service: it is the same DiraSmart service with the highest product tier on the market." } },
    { "@type": "Question", name: "How much does a KNX installation cost in Panama?", acceptedAnswer: { "@type": "Answer", text: "A full KNX installation is high-end and depends on the number of control points, touchscreens and climate zones. It is defined during construction or a full remodel. The consultation and initial proposal are free; we do not publish fixed rates because every project is sized on drawings." } },
    { "@type": "Question", name: "Does KNX need a server or central controller?", acceptedAnswer: { "@type": "Answer", text: "No. KNX is a decentralized system: the intelligence is distributed across every device and they communicate over a wired bus. A local server is optional for visualization, the app and advanced scenes, but the house works without it. If one unit fails, the rest keep running." } },
    { "@type": "Question", name: "Can I have KNX in an already-built house?", acceptedAnswer: { "@type": "Answer", text: "KNX needs a wired bus, so it is ideal at the drawing, shell or full-remodel stage. For finished homes without construction work we offer the mid-range wireless alternative (Zigbee, Z-Wave, WiFi) with the same service and the same app." } },
    { "@type": "Question", name: "Which KNX brands do you install?", acceptedAnswer: { "@type": "Answer", text: "Basalte (Belgium), Gira, Jung, Hager, Theben and MDT (Germany), ABB i-bus KNX (Switzerland) and Lutron HomeWorks (United States). If a brand is KNX or has a KNX gateway, we can almost always integrate it." } },
  ],
};

const COMMERCIAL_SERVICE_SCHEMA = (en: boolean) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: en ? "Commercial Automation and Building Management Systems (BMS)" : "Automatización Comercial y Sistemas de Gestión de Edificios (BMS)",
  name: en ? "DiraSmart Commercial" : "DiraSmart Comercial",
  provider: { "@type": "LocalBusiness", name: "DiraSmart", url: SITE_URL, telephone: "+507-6595-6439" },
  areaServed: { "@type": "Country", name: en ? "Panama" : "Panamá" },
  audience: { "@type": "BusinessAudience", audienceType: en ? "Hotels, offices, restaurants, retail, gyms, clinics, museums, residential and corporate buildings" : "Hoteles, oficinas, restaurantes, retail, gimnasios, clínicas, museos, edificios residenciales y corporativos" },
  description: en
    ? "Design, installation and maintenance of automation and BMS for hotels, offices, retail and buildings in Panama with KNX (decentralized), DALI and BACnet, local processing and 24/7 SLA support."
    : "Diseño, instalación y mantenimiento de automatización y BMS para hoteles, oficinas, comercios y edificios en Panamá con KNX (descentralizado), DALI y BACnet, procesamiento local y soporte 24/7 con SLA.",
  url: `${SITE_URL}${en ? "/en" : ""}/comercial`,
});

const PREMIUM_SERVICE_SCHEMA = (en: boolean) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: en ? "Premium KNX Home Automation Installation" : "Instalación KNX Premium para Residencias",
  name: "DiraSmart Premium",
  provider: { "@type": "LocalBusiness", name: "DiraSmart", url: SITE_URL, telephone: "+507-6595-6439" },
  areaServed: { "@type": "Country", name: en ? "Panama" : "Panamá" },
  brand: ["Basalte", "Gira", "Jung", "ABB i-bus KNX", "Hager", "Lutron HomeWorks", "Theben", "MDT"].map((name) => ({ "@type": "Brand", name })),
  description: en
    ? "Wired, decentralized, cloud-free KNX installations with wall-mounted touchscreens and European brands, the same equipment used in hotels, for high-end residences in Panama."
    : "Instalaciones KNX cableadas, descentralizadas y sin nube, con pantallas en pared y marcas europeas, el mismo equipo que se usa en hoteles, para residencias de alta gama en Panamá.",
  url: `${SITE_URL}${en ? "/en" : ""}/premium`,
});

const DynamicHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const en = isEnglish(pathname);
    const base = basePath(pathname);
    const fullUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const lang = en ? "en" : "es";

    // Update <html lang>
    document.documentElement.lang = lang;

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", fullUrl);

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", fullUrl);

    // Update og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", en ? "en_US" : "es_ES");

    // --- Dynamic meta tags per page ---
    const pageMeta = en ? PAGE_META_EN[base] : PAGE_META_ES[base];

    const updateMeta = (selector: string, attr: string, value: string | null) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };

    // Update keywords for English
    if (en) {
      updateMeta('meta[name="keywords"]', "content",
        "smart home Panama,home automation company Panama,KNX Panama,KNX Partner,hotel automation Panama,BMS Panama,building automation Panama,smart home,home automation,DiraSmart,local processing,enterprise WiFi,smart security");
    } else {
      updateMeta('meta[name="keywords"]', "content",
        "casa inteligente Panamá,empresa domótica Panamá,smart home Panamá,automatización del hogar,KNX Panamá,KNX Partner,automatización hoteles Panamá,BMS Panamá,automatización edificios,hogar inteligente,DiraSmart,WiFi empresarial,procesamiento local");
    }

    if (pageMeta) {
      document.title = pageMeta.title;
      updateMeta('meta[name="description"]', "content", pageMeta.description);
      updateMeta('meta[property="og:title"]', "content", pageMeta.title);
      updateMeta('meta[property="og:description"]', "content", pageMeta.description);
      updateMeta('meta[name="twitter:title"]', "content", pageMeta.title);
      updateMeta('meta[name="twitter:description"]', "content", pageMeta.description);
    }

    // --- Hreflang tags ---
    document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());

    const addHreflang = (hreflang: string, href: string) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    };

    const setHreflang = (esBase: string, enBase: string) => {
      document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());
      const esHref = `${SITE_URL}${esBase}`;
      const enHref = `${SITE_URL}${enBase}`;
      addHreflang("es", esHref);
      addHreflang("en", enHref);
      addHreflang("x-default", esHref);
      const canonicalHref = en ? enHref : esHref;
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute("href", canonicalHref);
      const ogUrlEl = document.querySelector('meta[property="og:url"]');
      if (ogUrlEl) ogUrlEl.setAttribute("content", canonicalHref);
    };

    // Default (non-blog): paths are the same across languages
    setHreflang(
      base === "/" ? "/" : base,
      base === "/" ? "/en" : `/en${base}`
    );

    // --- Dynamic schemas ---
    document.querySelectorAll(".dynamic-schema").forEach((el) => el.remove());

    // Homepage schemas: FAQ + Service
    if (base === "/") {
      const faqSchema = en ? FAQ_SCHEMA_EN : FAQ_SCHEMA_ES;
      const serviceSchema = en ? SERVICE_SCHEMA_EN : SERVICE_SCHEMA_ES;
      [faqSchema, serviceSchema].forEach((schema) => {
        const script = document.createElement("script");
        script.className = "dynamic-schema";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    const appendSchemas = (schemas: object[]) => {
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.className = "dynamic-schema";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    };

    // Commercial page: FAQ + Service schemas
    if (base === "/comercial") {
      appendSchemas([en ? COMMERCIAL_FAQ_SCHEMA_EN : COMMERCIAL_FAQ_SCHEMA_ES, COMMERCIAL_SERVICE_SCHEMA(en)]);
    }

    // Premium page: FAQ + Service schemas
    if (base === "/premium") {
      appendSchemas([en ? PREMIUM_FAQ_SCHEMA_EN : PREMIUM_FAQ_SCHEMA_ES, PREMIUM_SERVICE_SCHEMA(en)]);
    }

    // BlogPosting schema for blog post pages
    const blogMatch = base.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const slug = blogMatch[1];
      import("@/data/blogPosts").then(({ blogPosts }) => {
        const post = blogPosts.find((p) => p.slug.es === slug || p.slug.en === slug);
        if (post) {
          // Override hreflang + canonical with language-specific blog slugs
          setHreflang(`/blog/${post.slug.es}`, `/en/blog/${post.slug.en}`);

          const title = post.title[lang];
          const excerpt = post.excerpt[lang];

          const shortTitle = BLOG_META_TITLES[post.slug.es]?.[lang] ?? title;
          document.title = shortTitle.length > 48 ? shortTitle : `${shortTitle} · DiraSmart`;
          updateMeta('meta[name="description"]', "content", excerpt.length > 158 ? excerpt.slice(0, 155).replace(/\s+\S*$/, "") + "…" : excerpt);
          updateMeta('meta[property="og:title"]', "content", shortTitle);
          updateMeta('meta[property="og:description"]', "content", excerpt);
          updateMeta('meta[property="og:type"]', "content", "article");
          updateMeta('meta[name="twitter:title"]', "content", shortTitle);
          updateMeta('meta[name="twitter:description"]', "content", excerpt);

          if (post.image) {
            const imgUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;
            updateMeta('meta[property="og:image"]', "content", imgUrl);
            updateMeta('meta[name="twitter:image"]', "content", imgUrl);
          }

          // BreadcrumbList schema
          const breadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: en ? "Home" : "Inicio", item: en ? `${SITE_URL}/en` : SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: en ? `${SITE_URL}/en/blog` : `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: title, item: fullUrl },
            ],
          };
          const breadcrumbScript = document.createElement("script");
          breadcrumbScript.className = "dynamic-schema";
          breadcrumbScript.type = "application/ld+json";
          breadcrumbScript.textContent = JSON.stringify(breadcrumb);
          document.head.appendChild(breadcrumbScript);

          if (post.faq && post.faq.length > 0) {
            const faqSchema = {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question[lang],
                acceptedAnswer: { "@type": "Answer", text: item.answer[lang] },
              })),
            };
            const faqScript = document.createElement("script");
            faqScript.className = "dynamic-schema";
            faqScript.type = "application/ld+json";
            faqScript.textContent = JSON.stringify(faqSchema);
            document.head.appendChild(faqScript);
          }

          const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: excerpt,
            inLanguage: lang,
            datePublished: post.date,
            author: { "@type": "Organization", name: "DiraSmart" },
            publisher: {
              "@type": "Organization",
              name: "DiraSmart",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
            },
            mainEntityOfPage: fullUrl,
            ...(post.image ? { image: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}` } : {}),
          };
          const script = document.createElement("script");
          script.className = "dynamic-schema";
          script.type = "application/ld+json";
          script.textContent = JSON.stringify(schema);
          document.head.appendChild(script);
        }
      });
    }
  }, [pathname]);

  return null;
};

export default DynamicHead;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://dirasmart.com";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart • Smart Home • Automatiza tu Hogar o Oficina",
    description:
      "DiraSmart: Convierte tu hogar en un espacio inteligente. Instalación profesional de automatizaciones, control local, WiFi empresarial y app personalizada en Panamá.",
  },
  "/about": {
    title: "Nosotros • DiraSmart • Casa Inteligente en Panamá",
    description:
      "Conoce al equipo detrás de DiraSmart. Somos expertos en domótica y automatización del hogar en Panamá con procesamiento 100% local.",
  },
  "/blog": {
    title: "Blog • DiraSmart • Guías de Smart Home y Domótica",
    description:
      "Artículos, guías y noticias sobre casas inteligentes, automatización del hogar, domótica y tecnología en Panamá.",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es una casa inteligente y cómo funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una casa inteligente usa tecnología de automatización para controlar luces, clima, seguridad y más desde una sola app. En DiraSmart, todo se procesa localmente sin depender de la nube, garantizando privacidad y velocidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta instalar domótica en Panamá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según el tamaño del hogar y los dispositivos. DiraSmart ofrece consultas gratuitas para diseñar una solución personalizada. Incluimos instalación profesional, app personalizada y servicio continuo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona el smart home sin internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. A diferencia de otros sistemas que dependen de la nube, DiraSmart procesa todo localmente. Si se cae tu internet, tu hogar sigue funcionando perfectamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué dispositivos son compatibles con DiraSmart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DiraSmart es compatible con más de 2500 dispositivos de marcas como Tuya, Shelly, Philips Hue, Yale, Ecobee, Sonos y protocolos como Zigbee, Z-Wave, WiFi y Bluetooth.",
      },
    },
    {
      "@type": "Question",
      name: "¿DiraSmart ofrece servicio de automatización del hogar en todo Panamá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, DiraSmart ofrece instalación profesional de smart home y domótica en todo Panamá, incluyendo Ciudad de Panamá, Costa del Este, Clayton, y más.",
      },
    },
  ],
};

const DynamicHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", fullUrl);

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", fullUrl);

    // --- Dynamic meta tags per page ---
    const pageMeta = PAGE_META[pathname];

    const updateMeta = (
      selector: string,
      attr: string,
      value: string | null
    ) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };

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
    const hreflangEs = document.createElement("link");
    hreflangEs.rel = "alternate";
    hreflangEs.hreflang = "es";
    hreflangEs.href = fullUrl;
    document.head.appendChild(hreflangEs);

    const hreflangEn = document.createElement("link");
    hreflangEn.rel = "alternate";
    hreflangEn.hreflang = "en";
    hreflangEn.href = fullUrl;
    document.head.appendChild(hreflangEn);

    const hreflangDefault = document.createElement("link");
    hreflangDefault.rel = "alternate";
    hreflangDefault.hreflang = "x-default";
    hreflangDefault.href = fullUrl;
    document.head.appendChild(hreflangDefault);

    // --- Dynamic schemas ---
    document.querySelectorAll(".dynamic-schema").forEach((el) => el.remove());

    // FAQ schema on homepage
    if (pathname === "/") {
      const faqScript = document.createElement("script");
      faqScript.className = "dynamic-schema";
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify(FAQ_SCHEMA);
      document.head.appendChild(faqScript);
    }

    // BlogPosting schema for blog post pages
    const blogMatch = pathname.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const slug = blogMatch[1];
      import("@/data/blogPosts").then(({ blogPosts }) => {
        const post = blogPosts.find((p) => p.slug === slug);
        if (post) {
          // Update meta with blog post info
          document.title = `${post.title.es} • DiraSmart Blog`;
          updateMeta('meta[name="description"]', "content", post.excerpt.es);
          updateMeta('meta[property="og:title"]', "content", post.title.es);
          updateMeta('meta[property="og:description"]', "content", post.excerpt.es);
          updateMeta('meta[property="og:type"]', "content", "article");
          updateMeta('meta[name="twitter:title"]', "content", post.title.es);
          updateMeta('meta[name="twitter:description"]', "content", post.excerpt.es);

          if (post.image) {
            const imgUrl = post.image.startsWith("http")
              ? post.image
              : `${SITE_URL}${post.image}`;
            updateMeta('meta[property="og:image"]', "content", imgUrl);
            updateMeta('meta[name="twitter:image"]', "content", imgUrl);
          }

          const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title.es,
            description: post.excerpt.es,
            datePublished: post.date,
            author: { "@type": "Organization", name: "DiraSmart" },
            publisher: {
              "@type": "Organization",
              name: "DiraSmart",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/og-image.png`,
              },
            },
            mainEntityOfPage: `${SITE_URL}${pathname}`,
            ...(post.image
              ? {
                  image: post.image.startsWith("http")
                    ? post.image
                    : `${SITE_URL}${post.image}`,
                }
              : {}),
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

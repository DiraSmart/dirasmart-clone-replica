import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://dirasmart.com";

interface PageMeta {
  title: string;
  description: string;
}

/** Strip /en prefix to get the base path */
function basePath(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

function isEnglish(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

const PAGE_META_ES: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart • Smart Home • Automatiza tu Hogar o Oficina",
    description:
      "DiraSmart: Convierte tu hogar en espacio inteligente. Instalación profesional, control local, WiFi empresarial y app personalizada en Panamá.",
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

const PAGE_META_EN: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart • Smart Home in Panama • Automate Your Home or Office",
    description:
      "DiraSmart: Turn your home into a smart space. Professional installation, local processing, enterprise WiFi and custom app in Panama.",
  },
  "/about": {
    title: "About Us • DiraSmart • Smart Home in Panama",
    description:
      "Meet the team behind DiraSmart. We are experts in home automation in Panama with 100% local processing.",
  },
  "/blog": {
    title: "Blog • DiraSmart • Smart Home & Automation Guides",
    description:
      "Articles, guides and news about smart homes, home automation, and technology in Panama.",
  },
};

const SERVICE_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Instalación de Casa Inteligente",
  provider: {
    "@type": "LocalBusiness",
    name: "DiraSmart",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Panamá" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Domótica y Smart Home",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalación Profesional de Smart Home", description: "Implementación completa de automatización del hogar con procesamiento local, WiFi empresarial y app personalizada en Panamá." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infraestructura WiFi Empresarial", description: "Cableado estructurado profesional y red WiFi empresarial con múltiples puntos de acceso para cobertura total." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguridad Inteligente", description: "Integración de cámaras, sensores de movimiento y cerraduras inteligentes con control desde una sola app." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servicio Continuo y Soporte 24/7", description: "Mantenimiento, actualizaciones de seguridad y soporte técnico continuo para tu casa inteligente." } },
    ],
  },
};

const SERVICE_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Smart Home Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "DiraSmart",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Panama" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Smart Home & Automation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Professional Smart Home Installation", description: "Complete home automation implementation with local processing, enterprise WiFi and custom app in Panama." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise WiFi Infrastructure", description: "Professional structured cabling and enterprise WiFi network with multiple access points for full coverage." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Security", description: "Integration of cameras, motion sensors and smart locks with control from a single app." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Continuous Service & 24/7 Support", description: "Maintenance, security updates and continuous technical support for your smart home." } },
    ],
  },
};

const FAQ_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto cuesta instalar un smart home en Panamá?", acceptedAnswer: { "@type": "Answer", text: "El costo varía según el tamaño de tu hogar y el alcance del proyecto. Ofrecemos desde paquetes básicos inalámbricos para apartamentos hasta sistemas KNX premium para residencias de alta gama. La consulta inicial es gratuita." } },
    { "@type": "Question", name: "¿Cuánto tiempo toma la instalación?", acceptedAnswer: { "@type": "Answer", text: "Un apartamento con dispositivos inalámbricos se instala en un solo día. Una casa completa con cableado estructurado y WiFi empresarial toma entre 2 y 3 días. Proyectos KNX en construcción nueva se coordinan con la obra." } },
    { "@type": "Question", name: "¿Funciona en apartamentos o solo en casas?", acceptedAnswer: { "@type": "Answer", text: "Ambos. Para apartamentos usamos dispositivos inalámbricos que no requieren obras ni modificar la instalación eléctrica. Todo se instala sin romper paredes y es removible si te mudas." } },
    { "@type": "Question", name: "¿Qué pasa si se va el internet?", acceptedAnswer: { "@type": "Answer", text: "Todo sigue funcionando. A diferencia de sistemas como Alexa o Google Home que dependen de la nube, DiraSmart procesa todo localmente dentro de tu hogar." } },
    { "@type": "Question", name: "¿Qué dispositivos son compatibles?", acceptedAnswer: { "@type": "Answer", text: "Más de 2,500 dispositivos de marcas como Tuya, Shelly, Philips Hue, Yale, Ecobee, Sonos, Somfy y más. Soportamos protocolos Zigbee, Z-Wave, WiFi, Bluetooth y KNX." } },
    { "@type": "Question", name: "¿Puedo usar Alexa, Google o Siri?", acceptedAnswer: { "@type": "Answer", text: "Sí, somos compatibles con los tres asistentes de voz. No te encerramos en un ecosistema. El asistente funciona como un control remoto adicional." } },
    { "@type": "Question", name: "¿Cuál es la diferencia entre DiraSmart y Alexa o Google Home?", acceptedAnswer: { "@type": "Answer", text: "Alexa y Google son asistentes de voz que envían tus datos a la nube. DiraSmart es un sistema completo de automatización con procesamiento 100% local, app personalizada, instalación profesional y soporte continuo." } },
    { "@type": "Question", name: "¿Qué es KNX y por qué importa?", acceptedAnswer: { "@type": "Answer", text: "KNX es el estándar mundial de automatización de edificios (ISO/IEC 14543-3), usado en más de 190 países. Trabajamos con KNX para instalar sistemas de grado profesional." } },
    { "@type": "Question", name: "¿Incluyen soporte después de la instalación?", acceptedAnswer: { "@type": "Answer", text: "Sí. Nuestro modelo es de servicio continuo: incluimos mantenimiento, actualizaciones de seguridad y soporte técnico." } },
    { "@type": "Question", name: "¿Y si me mudo o quiero agregar más dispositivos?", acceptedAnswer: { "@type": "Answer", text: "El sistema es completamente escalable. Puedes agregar dispositivos en cualquier momento. Los dispositivos inalámbricos son removibles y te los puedes llevar si te mudas." } },
  ],
};

const FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to install a smart home in Panama?", acceptedAnswer: { "@type": "Answer", text: "The cost varies depending on the size of your home and the scope of the project. We offer everything from basic wireless packages for apartments to premium KNX systems for high-end residences. The initial consultation is free." } },
    { "@type": "Question", name: "How long does installation take?", acceptedAnswer: { "@type": "Answer", text: "An apartment with wireless devices can be installed in a single day. A complete home with structured cabling and enterprise WiFi takes 2 to 3 days. KNX projects in new construction are coordinated with the building process." } },
    { "@type": "Question", name: "Does it work in apartments or only houses?", acceptedAnswer: { "@type": "Answer", text: "Both. For apartments, we use wireless devices that require no construction or electrical modifications. Everything is installed without breaking walls and is removable if you move." } },
    { "@type": "Question", name: "What happens if the internet goes down?", acceptedAnswer: { "@type": "Answer", text: "Everything keeps working. Unlike systems like Alexa or Google Home that depend on the cloud, DiraSmart processes everything locally inside your home." } },
    { "@type": "Question", name: "What devices are compatible?", acceptedAnswer: { "@type": "Answer", text: "Over 2,500 devices from brands like Tuya, Shelly, Philips Hue, Yale, Ecobee, Sonos, Somfy, and more. We support Zigbee, Z-Wave, WiFi, Bluetooth, and KNX protocols." } },
    { "@type": "Question", name: "Can I use Alexa, Google, or Siri?", acceptedAnswer: { "@type": "Answer", text: "Yes, we're compatible with all three voice assistants. We don't lock you into one ecosystem. The assistant works as an additional remote control." } },
    { "@type": "Question", name: "What's the difference between DiraSmart and Alexa or Google Home?", acceptedAnswer: { "@type": "Answer", text: "Alexa and Google are voice assistants that send your data to the cloud. DiraSmart is a complete automation system with 100% local processing, a custom-branded app, professional installation, and continuous support." } },
    { "@type": "Question", name: "What is KNX and why does it matter?", acceptedAnswer: { "@type": "Answer", text: "KNX is the worldwide building automation standard (ISO/IEC 14543-3), used in over 190 countries. We work with KNX to install professional-grade systems." } },
    { "@type": "Question", name: "Do you include support after installation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our model is continuous service: we include maintenance, security updates, and technical support." } },
    { "@type": "Question", name: "What if I move or want to add more devices?", acceptedAnswer: { "@type": "Answer", text: "The system is fully scalable. You can add devices at any time. Wireless devices are removable and you can take them with you if you move." } },
  ],
};

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
        "smart home,smart house,home automation,smart home Panama,home automation Panama,DiraSmart,local processing,enterprise WiFi,smart security,voice assistants");
    } else {
      updateMeta('meta[name="keywords"]', "content",
        "smart home,smart house,casa inteligente,automatizaciones,hogar inteligente,domótica,DiraSmart,automatización del hogar,control inteligente,WiFi empresarial,Panamá");
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

    const esUrl = `${SITE_URL}${base === "/" ? "/" : base}`;
    const enUrl = `${SITE_URL}${base === "/" ? "/en" : `/en${base}`}`;

    const addHreflang = (hreflang: string, href: string) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    };

    addHreflang("es", esUrl);
    addHreflang("en", enUrl);
    addHreflang("x-default", esUrl);

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

    // BlogPosting schema for blog post pages
    const blogMatch = base.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const slug = blogMatch[1];
      import("@/data/blogPosts").then(({ blogPosts }) => {
        const post = blogPosts.find((p) => p.slug === slug);
        if (post) {
          const title = post.title[lang];
          const excerpt = post.excerpt[lang];

          document.title = `${title} • DiraSmart Blog`;
          updateMeta('meta[name="description"]', "content", excerpt);
          updateMeta('meta[property="og:title"]', "content", title);
          updateMeta('meta[property="og:description"]', "content", excerpt);
          updateMeta('meta[property="og:type"]', "content", "article");
          updateMeta('meta[name="twitter:title"]', "content", title);
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

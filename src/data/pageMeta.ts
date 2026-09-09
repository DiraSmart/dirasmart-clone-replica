/**
 * Titles and meta descriptions for the static (non-blog) pages.
 * Shared by DynamicHead (client <head>) and the Cloudflare worker (markdown / agent responses)
 * so both surfaces always say the same thing.
 */
export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_META_ES: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart • Casa Inteligente en Panamá • Domótica, KNX y Automatización",
    description:
      "Empresa de casas inteligentes en Panamá. Instalación profesional, procesamiento 100% local, KNX Partner certificado, WiFi empresarial y app propia. Gama media y alta para hogares, hoteles, comercios y edificios.",
  },
  "/about": {
    title: "Nosotros • DiraSmart • Casa Inteligente y Domótica en Panamá",
    description:
      "Por qué nació DiraSmart: instalación profesional de casa inteligente en Panamá con procesamiento 100% local, protocolos KNX, Zigbee y Modbus, modo Shabbat y soporte WhatsApp directo. Sin depender de la nube.",
  },
  "/comercial": {
    title: "Comercial • DiraSmart • Automatización y BMS para Hoteles, Oficinas y Edificios en Panamá",
    description:
      "Automatización profesional y gestión de edificios (BMS) para hoteles, oficinas, restaurantes, retail, museos y edificios en Panamá. KNX Partner certificado, arquitectura descentralizada, integración BACnet y DALI, procesamiento local y soporte continuo.",
  },
  "/premium": {
    title: "Premium • DiraSmart • Instalaciones KNX de Alta Gama en Panamá (Basalte, Gira, Jung)",
    description:
      "Catálogo Premium de DiraSmart: pantallas KNX en pared y marcas europeas como Basalte, Gira, Jung y ABB, el mismo equipo que instalamos en hoteles, ahora para residencias en Panamá. KNX Partner certificado, sistema descentralizado y sin nube.",
  },
  "/reviews": {
    title: "Reseñas • DiraSmart • Opiniones de Clientes de Casa Inteligente en Panamá",
    description:
      "Reseñas reales de clientes de DiraSmart en Panamá: hogares, oficinas y residencias automatizadas con procesamiento local, KNX y soporte por WhatsApp. Calificación 5.0 en Google con 11 opiniones.",
  },
  "/blog": {
    title: "Blog • DiraSmart • Guías de Smart Home y Domótica",
    description:
      "Artículos, guías y noticias sobre casas inteligentes, automatización del hogar, domótica y tecnología en Panamá.",
  },
};

export const PAGE_META_EN: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart • Smart Home Company in Panama • Home Automation & KNX",
    description:
      "Smart home company in Panama. Professional installation, 100% local processing, certified KNX Partner, enterprise WiFi and custom app. Mid-range to high-end for homes, hotels, retail and buildings.",
  },
  "/about": {
    title: "About Us • DiraSmart • Smart Home & Home Automation in Panama",
    description:
      "Why DiraSmart exists: professional smart home installation in Panama with 100% local processing, KNX, Zigbee and Modbus protocols, Shabbat mode and direct WhatsApp support. No cloud dependency.",
  },
  "/comercial": {
    title: "Commercial • DiraSmart • Automation & BMS for Hotels, Offices & Buildings in Panama",
    description:
      "Professional automation and building management (BMS) for hotels, offices, restaurants, retail, museums and buildings in Panama. Certified KNX Partner, decentralized architecture, BACnet and DALI integration, local processing and continuous support.",
  },
  "/premium": {
    title: "Premium • DiraSmart • High-End KNX Installations in Panama (Basalte, Gira, Jung)",
    description:
      "DiraSmart Premium catalog: wall-mounted KNX touchscreens and European brands like Basalte, Gira, Jung and ABB, the same equipment we install in hotels, now for residences in Panama. Certified KNX Partner, decentralized system, no cloud.",
  },
  "/reviews": {
    title: "Reviews • DiraSmart • Smart Home Client Reviews in Panama",
    description:
      "Real reviews from DiraSmart clients in Panama: homes, offices and residences automated with local processing, KNX and WhatsApp support. Rated 5.0 on Google with 11 reviews.",
  },
  "/blog": {
    title: "Blog • DiraSmart • Smart Home & Automation Guides",
    description:
      "Articles, guides and news about smart homes, home automation, and technology in Panama.",
  },
};

/** Resolve meta for any static path, including the /en prefix. */
export function getPageMeta(pathname: string): PageMeta | undefined {
  if (pathname === "/en") return PAGE_META_EN["/"];
  if (pathname.startsWith("/en/")) return PAGE_META_EN[pathname.slice(3)];
  return PAGE_META_ES[pathname];
}

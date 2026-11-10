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
    title: "Casas inteligentes y domótica en Panamá | DiraSmart",
    description:
      "Diseño e instalación de casas inteligentes en Panamá. Domótica inalámbrica y KNX para luces, aire y cortinas, con app y soporte de DiraSmart, KNX Gold Partner.",
  },
  "/about": {
    title: "Nosotros · DiraSmart · Casa Inteligente en Panamá",
    description:
      "Por qué nació DiraSmart: casa inteligente en Panamá con procesamiento 100% local, KNX, Zigbee y Modbus, modo Shabbat y soporte directo por WhatsApp.",
  },
  "/comercial": {
    title: "Automatización y BMS para Hoteles y Edificios en Panamá",
    description:
      "Automatización de hoteles, comercios y edificios en Panamá. KNX, NETx Automation BMS y control de accesos, con integración según proyecto y soporte local.",
  },
  "/premium": {
    title: "KNX en Panamá: automatización premium | DiraSmart",
    description:
      "Diseño, instalación y programación KNX en Panamá. Iluminación, cortinas y climatización para residencias. DiraSmart, KNX Gold Partner, con soporte local.",
  },
  "/reviews": {
    title: "Reseñas de Clientes · DiraSmart Panamá",
    description:
      "Opiniones de clientes de DiraSmart en Panamá sobre instalación de domótica, automatización del hogar y soporte. Consulta las reseñas publicadas en Google.",
  },
  "/blog": {
    title: "Blog · DiraSmart · Guías de Smart Home y Domótica",
    description:
      "Artículos, guías y noticias sobre casas inteligentes, automatización del hogar, domótica y tecnología en Panamá.",
  },
};

export const PAGE_META_EN: Record<string, PageMeta> = {
  "/": {
    title: "Smart Homes & Home Automation in Panama | DiraSmart",
    description:
      "Smart home design and installation in Panama. Wireless and KNX automation for lighting, AC and curtains, with app control and support from DiraSmart.",
  },
  "/about": {
    title: "About Us · DiraSmart · Smart Homes in Panama",
    description:
      "Why DiraSmart exists: smart homes in Panama with 100% local processing, KNX, Zigbee and Modbus, Shabbat mode and direct WhatsApp support.",
  },
  "/comercial": {
    title: "Hotel, Office & Building Automation in Panama · DiraSmart",
    description:
      "Automation for hotels, commercial spaces and buildings in Panama. KNX, NETx Automation BMS and access control, with project-specific integration and local support.",
  },
  "/premium": {
    title: "KNX in Panama: Premium Home Automation | DiraSmart",
    description:
      "KNX design, installation and programming in Panama. Lighting, curtains and climate control for residences. DiraSmart, KNX Gold Partner, with local support.",
  },
  "/reviews": {
    title: "Client Reviews · DiraSmart Panama",
    description:
      "DiraSmart customer feedback on home automation installation and support in Panama. Explore customer experiences and read the reviews published on Google.",
  },
  "/blog": {
    title: "Blog · DiraSmart · Smart Home & Automation Guides",
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

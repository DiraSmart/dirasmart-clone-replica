import { useEffect } from "react";
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalación KNX Premium", description: "Instalaciones KNX cableadas, descentralizadas y sin nube, con pantallas en pared y marcas como Basalte, Gira, Jung y ABB, para residencias de alta gama en Panamá.", url: `${SITE_URL}/premium` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización Comercial y BMS", description: "Automatización y gestión de edificios para hoteles, oficinas, comercios y edificios en Panamá con KNX, DALI y BACnet.", url: `${SITE_URL}/comercial` } },
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium KNX Installation", description: "Wired, decentralized, cloud-free KNX installations with wall touchscreens and brands like Basalte, Gira, Jung and ABB, for high-end residences in Panama.", url: `${SITE_URL}/en/premium` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Automation & BMS", description: "Automation and building management for hotels, offices, retail and buildings in Panama with KNX, DALI and BACnet.", url: `${SITE_URL}/en/comercial` } },
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
    { "@type": "Question", name: "¿Qué es KNX y por qué importa?", acceptedAnswer: { "@type": "Answer", text: "KNX es el estándar mundial de automatización de edificios (ISO/IEC 14543-3), usado en más de 190 países. DiraSmart es uno de los pocos KNX Partners certificados en Panamá, con acceso al soporte oficial de la KNX Association y a la herramienta ETS para programación profesional." } },
    { "@type": "Question", name: "¿Incluyen soporte después de la instalación?", acceptedAnswer: { "@type": "Answer", text: "Sí. Nuestro modelo es de servicio continuo: incluimos mantenimiento, actualizaciones de seguridad y soporte técnico." } },
    { "@type": "Question", name: "¿Y si me mudo o quiero agregar más dispositivos?", acceptedAnswer: { "@type": "Answer", text: "El sistema es completamente escalable. Puedes agregar dispositivos en cualquier momento. Los dispositivos inalámbricos son removibles y te los puedes llevar si te mudas." } },
    { "@type": "Question", name: "¿Qué empresa recomiendan para hacer una casa inteligente en Panamá?", acceptedAnswer: { "@type": "Answer", text: "DiraSmart es una empresa panameña especializada en casas inteligentes: KNX Partner certificado, procesamiento 100% local y soporte directo por WhatsApp. Atendemos apartamentos, casas y residencias de alta gama en toda Panamá, además de hoteles, comercios y edificios. Es la opción indicada si buscas un sistema que siga funcionando sin internet, sin depender de la nube de ningún fabricante y con un solo proveedor responsable de todo." } },
    { "@type": "Question", name: "¿Trabajan solo proyectos de lujo o también presupuestos medios?", acceptedAnswer: { "@type": "Answer", text: "Ambos. Cubrimos gama media y alta. Para apartamentos y casas usamos dispositivos inalámbricos (Zigbee, Z-Wave, WiFi) con precios de rango medio y sin obra. Para residencias, hoteles y edificios diseñamos instalaciones KNX cableadas con marcas premium como Basalte, Gira, Jung y ABB. El nivel de servicio, la app y el soporte son los mismos en los dos casos." } },
    { "@type": "Question", name: "¿Qué significa que KNX es descentralizado y por qué importa?", acceptedAnswer: { "@type": "Answer", text: "En KNX no existe un controlador central: cada actuador, sensor y pantalla lleva su propio programa y se comunican por un bus cableado. Si un dispositivo falla, el resto sigue funcionando. Los sistemas con un procesador central propietario (por ejemplo Control4, Crestron o Savant) se apagan por completo cuando ese equipo falla o el fabricante retira el soporte. Con KNX, un estándar abierto ISO/IEC 14543-3, tu casa o edificio no depende de un solo equipo ni de una sola marca." } },
    { "@type": "Question", name: "¿También automatizan hoteles, comercios y edificios?", acceptedAnswer: { "@type": "Answer", text: "Sí. DiraSmart Comercial diseña e instala automatización y sistemas de gestión de edificios (BMS) para hoteles, oficinas, restaurantes, retail, gimnasios, clínicas, museos y edificios en Panamá, con KNX, DALI y BACnet. El mismo equipo que instalamos en proyectos comerciales está disponible para residencias en nuestro catálogo Premium." } },
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
    { "@type": "Question", name: "What is KNX and why does it matter?", acceptedAnswer: { "@type": "Answer", text: "KNX is the worldwide building automation standard (ISO/IEC 14543-3), used in over 190 countries. DiraSmart is one of the few certified KNX Partners in Panama, with access to official KNX Association support and the ETS tool for professional programming." } },
    { "@type": "Question", name: "Do you include support after installation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our model is continuous service: we include maintenance, security updates, and technical support." } },
    { "@type": "Question", name: "What if I move or want to add more devices?", acceptedAnswer: { "@type": "Answer", text: "The system is fully scalable. You can add devices at any time. Wireless devices are removable and you can take them with you if you move." } },
    { "@type": "Question", name: "Which company should I hire for a smart home in Panama?", acceptedAnswer: { "@type": "Answer", text: "DiraSmart is a Panamanian company specialized in smart homes: certified KNX Partner, 100% local processing and direct WhatsApp support. We serve apartments, houses and high-end residences across Panama, plus hotels, retail and buildings. It is the right choice if you want a system that keeps working without internet, without depending on any manufacturer's cloud, and with a single provider responsible for everything." } },
    { "@type": "Question", name: "Do you only take luxury projects, or mid-range budgets too?", acceptedAnswer: { "@type": "Answer", text: "Both. We cover mid-range and high-end. For apartments and houses we use wireless devices (Zigbee, Z-Wave, WiFi) at mid-range prices with no construction work. For residences, hotels and buildings we design wired KNX installations with premium brands like Basalte, Gira, Jung and ABB. Service level, app and support are the same in both cases." } },
    { "@type": "Question", name: "What does it mean that KNX is decentralized, and why does it matter?", acceptedAnswer: { "@type": "Answer", text: "KNX has no central controller: every actuator, sensor and touchscreen carries its own program and they communicate over a wired bus. If one device fails, the rest keep working. Systems built around a proprietary central processor (for example Control4, Crestron or Savant) shut down entirely when that unit fails or the vendor drops support. With KNX, an open ISO/IEC 14543-3 standard, your home or building never depends on a single box or a single brand." } },
    { "@type": "Question", name: "Do you also automate hotels, retail and buildings?", acceptedAnswer: { "@type": "Answer", text: "Yes. DiraSmart Commercial designs and installs automation and building management systems (BMS) for hotels, offices, restaurants, retail, gyms, clinics, museums and buildings in Panama, with KNX, DALI and BACnet. The same equipment we install in commercial projects is available for residences in our Premium catalog." } },
  ],
};

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
    { "@type": "Question", name: "¿Qué marcas KNX instalan?", acceptedAnswer: { "@type": "Answer", text: "Basalte (Bélgica), Gira, Jung, Hager, Theben y MDT (Alemania), ABB free@home (Suiza) y Lutron HomeWorks (Estados Unidos). Si una marca es KNX o tiene gateway KNX, casi siempre podemos integrarla." } },
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
    { "@type": "Question", name: "Which KNX brands do you install?", acceptedAnswer: { "@type": "Answer", text: "Basalte (Belgium), Gira, Jung, Hager, Theben and MDT (Germany), ABB free@home (Switzerland) and Lutron HomeWorks (United States). If a brand is KNX or has a KNX gateway, we can almost always integrate it." } },
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
  brand: ["Basalte", "Gira", "Jung", "ABB free@home", "Hager", "Lutron HomeWorks", "Theben", "MDT"].map((name) => ({ "@type": "Brand", name })),
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

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.services": "Servicios",

    // Hero
    "hero.title": "Casa Inteligente en Panamá.",
    "hero.titleHighlight": "Diseñada Para Ti.",
    "hero.subtitle": "Una sola app para controlar todo tu hogar. Diseñada para ti, instalada por profesionales, con soporte continuo.",
    "hero.cta": "Contáctanos",
    "hero.cta.message": "¡Hola! Me interesa automatizar mi hogar con DiraSmart",
    "hero.ctaSecondary": "Ver Demo",
    "hero.stat1.value": "2500+",
    "hero.stat1.label": "Dispositivos compatibles",
    "hero.stat2.value": "24/7",
    "hero.stat2.label": "Soporte técnico",
    "hero.stat3.value": "100%",
    "hero.stat3.label": "Procesamiento local",
    
    // Privacy Features - Why DiraSmart vs competitors
    "privacy.title": "¿Por qué ",
    "privacy.titleHighlight": "DiraSmart?",
    "privacy.subtitle": "La mayoría de sistemas dependen de la nube. Nosotros procesamos todo dentro de tu hogar. Esto cambia todo.",
    "privacy.local.title": "Tus Datos Se Quedan en Casa",
    "privacy.local.desc": "A diferencia de otros, nada sale de tu hogar. Sin servidores externos ni terceros escuchando.",
    "privacy.speed.title": "Respuesta Instantánea",
    "privacy.speed.desc": "Al no depender de la nube, tus dispositivos responden en milisegundos. Sin retrasos ni caídas por internet.",
    "privacy.offline.title": "Sin Internet, Todo Funciona",
    "privacy.offline.desc": "Si se cae tu internet, tu hogar sigue funcionando perfectamente. Los sistemas en la nube, no.",
    "privacy.privacy.title": "Sin Rastreo ni Publicidad",
    "privacy.privacy.desc": "Google y Amazon usan tus datos para publicidad. Con DiraSmart, tus datos son solo tuyos.",

    // Infrastructure - NEW
    "infra.badge": "Base Sólida",
    "infra.title": "La Base de Todo:",
    "infra.titleHighlight": "Una Robusta Red WiFi",
    "infra.description": "Antes de automatizar, realizamos un cableado estructurado profesional e instalamos una red WiFi empresarial con múltiples puntos de acceso. Esta infraestructura cableada garantiza que todas las antenas estén siempre activas, con cobertura total y máxima estabilidad.",
    "infra.cabling": "Cableado Estructurado",
    "infra.enterprise": "Múltiples Puntos de Acceso",
    "infra.coverage": "Cobertura Total",
    "infra.stable": "Red Estable",

    // Process Steps - NEW
    "process.title": "Cómo",
    "process.titleHighlight": "Trabajamos",
    "process.subtitle": "Un proceso simple y transparente para transformar tu hogar",
    "process.step1.number": "Paso 1",
    "process.step1.title": "Consulta",
    "process.step1.desc": "Evaluamos tu hogar, tus necesidades y diseñamos una solución personalizada.",
    "process.step2.number": "Paso 2",
    "process.step2.title": "Instalación",
    "process.step2.desc": "Implementamos toda la infraestructura, dispositivos y configuraciones.",
    "process.step3.number": "Paso 3",
    "process.step3.title": "Servicio Continuo",
    "process.step3.desc": "Mantenimiento, actualizaciones de seguridad y soporte técnico incluido.",
    "process.note": "Servicio como Solución: Tu sistema siempre actualizado y funcionando perfectamente",
    
    // Interactive Demo
    "demo.title": "Prueba el",
    "demo.titleHighlight": "Control Inteligente",
    "demo.subtitle": "Interactúa con nuestra demo y experimenta el control de tu hogar desde aquí",
    "demo.ac": "Aire Acondicionado",
    "demo.ac.off": "Apagado",
    "demo.ac.cooling": "Enfriando",
    "demo.ac.drying": "Secando",
    "demo.target": "Objetivo",
    "demo.lights": "Control de Luces",
    "demo.lights.on": "Encendida",
    "demo.lights.off": "Apagada",
    "demo.intensity": "Intensidad",
    "demo.blinds": "Cortinas",
    "demo.blinds.closed": "Cerradas",
    "demo.blinds.open": "Abiertas",
    "demo.blinds.partial": "Parcial",
    "demo.cta": "Solicita una Demo",
    "demo.cta.message": "Hola, me interesaría ver una demo del sistema.",
    
    // Features
    "features.title": "Todo lo que necesitas en",
    "features.titleHighlight": "una app",
    "features.subtitle": "Descubre las funcionalidades que hacen de DiraSmart la mejor opción para tu hogar inteligente",
    "features.tab.app": "App",
    "features.tab.automate": "Programación",
    "features.tab.shabbat": "Shabbat Mode",
    "features.tab.devices": "Dispositivos",
    "features.app.badge": "Control Total",
    "features.app.title": "Tu App Personalizada",
    "features.app.description": "Una única aplicación diseñada específicamente para tu hogar. Marca blanca con tu estilo, unificando el control de todos tus dispositivos.",
    "features.app.ac": "Climatización",
    "features.app.acDesc": "Controla la temperatura de cada habitación",
    "features.app.blinds": "Persianas Motorizadas",
    "features.app.blindsDesc": "Programa horarios o controla manualmente",
    "features.app.lights": "Iluminación Inteligente",
    "features.app.lightsDesc": "Ajusta intensidad y color en cada zona",
    "features.shabbat.badge": "Cumplimiento de Halajá",
    "features.shabbat.title": "Módulo de Festividades Judías",
    "features.shabbat.description": "Sistema especializado que automatiza tu hogar según el calendario hebreo. Prepara luces, clima y sensores para Shabat y Yom Tov, garantizando confort sin transgredir la Halajá.",
    "features.shabbat.holidays": "Shabat y Jaguim",
    "features.shabbat.holidaysDesc": "Pesaj, Sucot, Rosh Hashaná, Yom Kipur y más",
    "features.shabbat.quick": "Calendario Hebreo",
    "features.shabbat.quickDesc": "Detecta automáticamente fechas y horarios",
    "features.shabbat.auto": "Automatización Halájica",
    "features.shabbat.autoDesc": "Tu hogar se prepara solo según la Halajá",
    "features.automate.badge": "Automatización",
    "features.automate.title": "Escenas y Programación",
    "features.automate.description": "Crea escenas personalizadas y programa tu hogar para que funcione solo según tu rutina diaria.",
    "features.automate.scenes": "Escenas Personalizadas",
    "features.automate.scenesDesc": "\"Buenos días\", \"Cine en casa\", \"Hora de dormir\"",
    "features.automate.schedule": "Programación Horaria",
    "features.automate.scheduleDesc": "Automatiza según tu rutina diaria",
    "features.automate.presence": "Detección de Presencia",
    "features.automate.presenceDesc": "Activa escenas al llegar o salir de casa",
    "features.devices.badge": "Multiplataforma",
    "features.devices.title": "Todos Tus Dispositivos",
    "features.devices.description": "Accede a tu hogar inteligente desde cualquier dispositivo: smartphone, tablet, PC y más.",
    "features.devices.phone": "Smartphone",
    "features.devices.phoneDesc": "App nativa para iOS y Android",
    "features.devices.tablet": "Tablet",
    "features.devices.tabletDesc": "Interfaz optimizada para pantallas grandes",
    "features.devices.pc": "Computadora",
    "features.devices.pcDesc": "Acceso web desde cualquier navegador",
    
    // Services - Updated to 6 key services
    "services.title": "¿Qué",
    "services.titleHighlight": "ofrecemos",
    "services.subtitle": "Un servicio integral para transformar tu hogar en un espacio inteligente y privado",
    "services.installation": "Instalación Profesional",
    "services.installationDesc": "Implementamos todo el sistema de domótica de forma profesional y sin complicaciones",
    "services.customApp": "App Personalizada",
    "services.customAppDesc": "Aplicación de marca blanca diseñada exclusivamente para tu hogar y tus espacios",
    "services.compatibility": "Compatibilidad Universal",
    "services.compatibilityDesc": "Integramos tus dispositivos existentes o recomendamos los mejores para tu caso",
    "services.localControl": "Asistentes de Voz",
    "services.localControlDesc": "Compatible con Alexa, Google Home y Siri para control por voz de todo tu hogar",
    "services.network": "Seguridad y Cámaras",
    "services.networkDesc": "Integración de cámaras, sensores de movimiento y cerraduras inteligentes",
    "services.continuousSupport": "Servicio Continuo",
    "services.continuousSupportDesc": "Mantenimiento, actualizaciones de seguridad y soporte técnico incluido",
    
    // Brands
    "brands.title": "Marcas",
    "brands.titleHighlight": "compatibles",
    "brands.subtitle": "No dependemos de una sola marca. Integramos las principales marcas y protocolos del mercado",
    "brands.protocols": "Protocolos soportados",
    
    // Testimonials
    "testimonials.title": "¿Qué dicen nuestros",
    "testimonials.titleHighlight": "clientes",
    "testimonials.subtitle": "Opiniones reales de hogares transformados con tecnología inteligente",
    "testimonials.role.owner": "Propietaria",
    "testimonials.role.business": "Empresario",
    "testimonials.role.architect": "Arquitecta",
    "testimonials.role.engineer": "Ingeniero",
    "testimonials.role.doctor": "Médica",
    
    // CTA Banner
    "cta.title": "¿Listo para transformar tu hogar?",
    "cta.subtitle": "Agenda una consulta gratuita y descubre cómo DiraSmart puede hacer tu vida más cómoda y segura",
    "cta.button": "Hablar con un especialista",
    "cta.message": "¡Hola! Quiero agendar una consulta sobre DiraSmart",

    // Footer
    "footer.description": "Transformamos hogares en espacios inteligentes y privados. Tu comodidad, seguridad y privacidad son nuestra prioridad.",
    "footer.rights": "Todos los derechos reservados",
    "footer.nav": "Navegación",
    "footer.nav.home": "Inicio",
    "footer.nav.demo": "Demo",
    "footer.nav.features": "Características",
    "footer.nav.services": "Servicios",
    "footer.nav.testimonials": "Testimonios",
    "footer.contact": "Contacto",
    "footer.madeWith": "Hecho con ❤️ en Panamá",

    // Infrastructure stats
    "infra.stat.uptime": "Uptime",
    "infra.stat.latency": "Latencia",
    "infra.stat.devices": "Dispositivos",

    // Navigation extras
    "nav.about": "Nosotros",
    "nav.blog": "Blog",

    // About page
    "about.title": "Conoce",
    "about.titleHighlight": "DiraSmart",
    "about.subtitle": "Somos un equipo apasionado por la tecnología y la privacidad, dedicados a transformar hogares en Panamá en espacios inteligentes y seguros.",
    "about.story.title": "Nuestra Historia",
    "about.story.p1": "DiraSmart nació de una necesidad real: crear hogares inteligentes que respeten la privacidad de las personas. Después de ver cómo las grandes empresas tecnológicas recopilan datos masivos de los hogares, decidimos que había una mejor manera de hacer las cosas.",
    "about.story.p2": "Desde Panamá, diseñamos e implementamos sistemas de automatización que procesan todo localmente, sin enviar tus datos a la nube. Cada instalación es personalizada, con una app de marca blanca diseñada exclusivamente para cada hogar.",
    "about.story.p3": "Hoy servimos a familias y empresas en todo Panamá, con un compromiso inquebrantable con la privacidad, la calidad y el servicio continuo.",
    "about.location": "Donde todo comenzó",
    "about.stat.devices": "Dispositivos compatibles",
    "about.stat.support": "Soporte",
    "about.values.title": "Nuestros",
    "about.values.titleHighlight": "Valores",
    "about.values.subtitle": "Los principios que guían cada decisión y cada instalación",
    "about.value1.title": "Privacidad Primero",
    "about.value1.desc": "Tus datos son tuyos. Procesamiento local, sin nubes externas, sin rastreo.",
    "about.value2.title": "Servicio Humano",
    "about.value2.desc": "Detrás de la tecnología hay personas reales disponibles cuando nos necesitas.",
    "about.value3.title": "Excelencia Técnica",
    "about.value3.desc": "Instalaciones profesionales con los mejores protocolos y equipos del mercado.",
    "about.value4.title": "Compromiso Continuo",
    "about.value4.desc": "No solo instalamos, mantenemos y mejoramos tu sistema constantemente.",
    "about.cta.title": "¿Listo para transformar tu hogar?",
    "about.cta.subtitle": "Contáctanos para una consulta personalizada sin compromiso",
    "about.cta.button": "Contactar por WhatsApp",
    "about.cta.message": "¡Hola! Me interesa conocer más sobre DiraSmart",

    // Blog
    "blog.title": "Blog",
    "blog.titleHighlight": "DiraSmart",
    "blog.subtitle": "Artículos, guías y noticias sobre hogares inteligentes, privacidad y tecnología",
    "blog.readMore": "Leer más",
    "blog.backToList": "Volver al blog",
    "blog.readTime": "de lectura",
    "blog.prev": "Anterior",
    "blog.next": "Siguiente",
    "blog.cta.title": "¿Te interesa un hogar inteligente?",
    "blog.cta.subtitle": "Contáctanos para una consulta personalizada sin compromiso",
    "blog.cta.button": "Hablar con un especialista",

    // Footer extras
    "footer.nav.about": "Nosotros",
    "footer.nav.blog": "Blog",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.services": "Services",
    
    // Hero
    "hero.title": "Your Smart Home.",
    "hero.titleHighlight": "Tailored to You.",
    "hero.subtitle": "One app to control your entire home. Designed for you, professionally installed, with ongoing support.",
    "hero.cta": "Contact Us",
    "hero.cta.message": "Hello! I'm interested in automating my home with DiraSmart",
    "hero.ctaSecondary": "View Demo",
    "hero.stat1.value": "2500+",
    "hero.stat1.label": "Compatible devices",
    "hero.stat2.value": "24/7",
    "hero.stat2.label": "Technical support",
    "hero.stat3.value": "100%",
    "hero.stat3.label": "Local processing",
    
    // Privacy Features - Why DiraSmart vs competitors
    "privacy.title": "Why ",
    "privacy.titleHighlight": "DiraSmart?",
    "privacy.subtitle": "Most systems depend on the cloud. We process everything inside your home. This changes everything.",
    "privacy.local.title": "Your Data Stays Home",
    "privacy.local.desc": "Unlike others, nothing leaves your home. No external servers or third parties listening.",
    "privacy.speed.title": "Instant Response",
    "privacy.speed.desc": "Without cloud dependency, your devices respond in milliseconds. No delays or downtime due to internet issues.",
    "privacy.offline.title": "No Internet, Still Works",
    "privacy.offline.desc": "If your internet goes down, your home keeps working perfectly. Cloud-based systems can't.",
    "privacy.privacy.title": "No Tracking or Ads",
    "privacy.privacy.desc": "Google and Amazon use your data for advertising. With DiraSmart, your data is yours alone.",

    // Infrastructure - NEW
    "infra.badge": "Solid Foundation",
    "infra.title": "The Foundation:",
    "infra.titleHighlight": "A Robust WiFi Network",
    "infra.description": "Before automating, we install professional structured cabling and enterprise-grade WiFi with multiple access points. This wired infrastructure ensures all access points stay always active, with full coverage and maximum stability.",
    "infra.cabling": "Structured Cabling",
    "infra.enterprise": "Multiple Access Points",
    "infra.coverage": "Full Coverage",
    "infra.stable": "Stable Network",

    // Process Steps - NEW
    "process.title": "How We",
    "process.titleHighlight": "Work",
    "process.subtitle": "A simple and transparent process to transform your home",
    "process.step1.number": "Step 1",
    "process.step1.title": "Consultation",
    "process.step1.desc": "We evaluate your home, your needs and design a personalized solution.",
    "process.step2.number": "Step 2",
    "process.step2.title": "Installation",
    "process.step2.desc": "We implement all infrastructure, devices and configurations.",
    "process.step3.number": "Step 3",
    "process.step3.title": "Continuous Service",
    "process.step3.desc": "Maintenance, security updates and technical support included.",
    "process.note": "Service as a Solution: Your system always updated and running perfectly",
    
    // Interactive Demo
    "demo.title": "Try the",
    "demo.titleHighlight": "Smart Control",
    "demo.subtitle": "Interact with our demo and experience controlling your home from here",
    "demo.ac": "Air Conditioning",
    "demo.ac.off": "Off",
    "demo.ac.cooling": "Cooling",
    "demo.ac.drying": "Drying",
    "demo.target": "Target",
    "demo.lights": "Light Control",
    "demo.lights.on": "On",
    "demo.lights.off": "Off",
    "demo.intensity": "Intensity",
    "demo.blinds": "Blinds",
    "demo.blinds.closed": "Closed",
    "demo.blinds.open": "Open",
    "demo.blinds.partial": "Partial",
    "demo.cta": "Request a Demo",
    "demo.cta.message": "Hello, I would like to see a demo of the system.",
    
    // Features
    "features.title": "Everything you need in",
    "features.titleHighlight": "one app",
    "features.subtitle": "Discover the features that make DiraSmart the best choice for your smart home",
    "features.tab.app": "App",
    "features.tab.automate": "Scheduling",
    "features.tab.shabbat": "Shabbat Mode",
    "features.tab.devices": "Devices",
    "features.app.badge": "Full Control",
    "features.app.title": "Your Custom App",
    "features.app.description": "A single application designed specifically for your home. Customized to your style, unifying control of all your devices.",
    "features.app.ac": "Climate Control",
    "features.app.acDesc": "Control the temperature of each room",
    "features.app.blinds": "Motorized Blinds",
    "features.app.blindsDesc": "Schedule times or control manually",
    "features.app.lights": "Smart Lighting",
    "features.app.lightsDesc": "Adjust intensity and color in each zone",
    "features.shabbat.badge": "Halachic Compliance",
    "features.shabbat.title": "Jewish Holidays Module",
    "features.shabbat.description": "Specialized system that automates your home according to the Hebrew calendar. Prepares lights, climate and sensors for Shabbat and Yom Tov, ensuring comfort without transgressing Halacha.",
    "features.shabbat.holidays": "Shabbat & Chagim",
    "features.shabbat.holidaysDesc": "Pesach, Sukkot, Rosh Hashanah, Yom Kippur and more",
    "features.shabbat.quick": "Hebrew Calendar",
    "features.shabbat.quickDesc": "Automatically detects dates and times",
    "features.shabbat.auto": "Halachic Automation",
    "features.shabbat.autoDesc": "Your home prepares itself according to Halacha",
    "features.automate.badge": "Automation",
    "features.automate.title": "Scenes & Scheduling",
    "features.automate.description": "Create custom scenes and program your home to run on its own according to your daily routine.",
    "features.automate.scenes": "Custom Scenes",
    "features.automate.scenesDesc": "\"Good morning\", \"Movie night\", \"Bedtime\"",
    "features.automate.schedule": "Time Scheduling",
    "features.automate.scheduleDesc": "Automate according to your daily routine",
    "features.automate.presence": "Presence Detection",
    "features.automate.presenceDesc": "Activate scenes when arriving or leaving home",
    "features.devices.badge": "Multiplatform",
    "features.devices.title": "All Your Devices",
    "features.devices.description": "Access your smart home from any device: phone, tablet, PC and more.",
    "features.devices.phone": "Phone",
    "features.devices.phoneDesc": "Native app for iOS and Android",
    "features.devices.tablet": "Tablet",
    "features.devices.tabletDesc": "Interface optimized for large screens",
    "features.devices.pc": "Computer",
    "features.devices.pcDesc": "Web access from any browser",
    
    // Services - Updated to 6 key services
    "services.title": "What do we",
    "services.titleHighlight": "offer",
    "services.subtitle": "A comprehensive service to transform your home into a smart and private space",
    "services.installation": "Professional Installation",
    "services.installationDesc": "We implement the entire home automation system professionally and hassle-free",
    "services.customApp": "Custom App",
    "services.customAppDesc": "A personalized application designed exclusively for your home and spaces",
    "services.compatibility": "Universal Compatibility",
    "services.compatibilityDesc": "We integrate your existing devices or recommend the best ones for your case",
    "services.localControl": "Voice Assistants",
    "services.localControlDesc": "Compatible with Alexa, Google Home and Siri for voice control of your entire home",
    "services.network": "Security & Cameras",
    "services.networkDesc": "Integration of cameras, motion sensors and smart locks",
    "services.continuousSupport": "Continuous Service",
    "services.continuousSupportDesc": "Maintenance, security updates and technical support included",
    
    // Brands
    "brands.title": "Compatible",
    "brands.titleHighlight": "brands",
    "brands.subtitle": "We don't depend on a single brand. We integrate the leading brands and protocols on the market",
    "brands.protocols": "Supported protocols",
    
    // Testimonials
    "testimonials.title": "What our",
    "testimonials.titleHighlight": "clients say",
    "testimonials.subtitle": "Real reviews from homeowners who transformed their spaces with smart technology",
    "testimonials.role.owner": "Owner",
    "testimonials.role.business": "Businessman",
    "testimonials.role.architect": "Architect",
    "testimonials.role.engineer": "Engineer",
    "testimonials.role.doctor": "Doctor",
    
    // CTA Banner
    "cta.title": "Ready to transform your home?",
    "cta.subtitle": "Schedule a free consultation and discover how DiraSmart can make your life more comfortable and secure",
    "cta.button": "Talk to a specialist",
    "cta.message": "Hello! I want to schedule a consultation about DiraSmart",

    // Footer
    "footer.description": "We transform homes into smart and private spaces. Your comfort, security and privacy are our priority.",
    "footer.rights": "All rights reserved",
    "footer.nav": "Navigation",
    "footer.nav.home": "Home",
    "footer.nav.demo": "Demo",
    "footer.nav.features": "Features",
    "footer.nav.services": "Services",
    "footer.nav.testimonials": "Testimonials",
    "footer.contact": "Contact",
    "footer.madeWith": "Made with ❤️ in Panama",

    // Infrastructure stats
    "infra.stat.uptime": "Uptime",
    "infra.stat.latency": "Latency",
    "infra.stat.devices": "Devices",

    // Navigation extras
    "nav.about": "About",
    "nav.blog": "Blog",

    // About page
    "about.title": "Meet",
    "about.titleHighlight": "DiraSmart",
    "about.subtitle": "We are a team passionate about technology and privacy, dedicated to transforming homes in Panama into smart and secure spaces.",
    "about.story.title": "Our Story",
    "about.story.p1": "DiraSmart was born from a real need: creating smart homes that respect people's privacy. After seeing how big tech companies collect massive data from homes, we decided there was a better way to do things.",
    "about.story.p2": "From Panama, we design and implement automation systems that process everything locally, without sending your data to the cloud. Each installation is customized, with a white-label app designed exclusively for each home.",
    "about.story.p3": "Today we serve families and businesses across Panama, with an unwavering commitment to privacy, quality and continuous service.",
    "about.location": "Where it all began",
    "about.stat.devices": "Compatible devices",
    "about.stat.support": "Support",
    "about.values.title": "Our",
    "about.values.titleHighlight": "Values",
    "about.values.subtitle": "The principles that guide every decision and every installation",
    "about.value1.title": "Privacy First",
    "about.value1.desc": "Your data is yours. Local processing, no external clouds, no tracking.",
    "about.value2.title": "Human Service",
    "about.value2.desc": "Behind the technology are real people available when you need us.",
    "about.value3.title": "Technical Excellence",
    "about.value3.desc": "Professional installations with the best protocols and equipment on the market.",
    "about.value4.title": "Continuous Commitment",
    "about.value4.desc": "We don't just install, we maintain and improve your system constantly.",
    "about.cta.title": "Ready to transform your home?",
    "about.cta.subtitle": "Contact us for a free, no-obligation consultation",
    "about.cta.button": "Contact via WhatsApp",
    "about.cta.message": "Hello! I'm interested in learning more about DiraSmart",

    // Blog
    "blog.title": "Blog",
    "blog.titleHighlight": "DiraSmart",
    "blog.subtitle": "Articles, guides and news about smart homes, privacy and technology",
    "blog.readMore": "Read more",
    "blog.backToList": "Back to blog",
    "blog.readTime": "read",
    "blog.prev": "Previous",
    "blog.next": "Next",
    "blog.cta.title": "Interested in a smart home?",
    "blog.cta.subtitle": "Contact us for a free, no-obligation consultation",
    "blog.cta.button": "Talk to a specialist",

    // Footer extras
    "footer.nav.about": "About",
    "footer.nav.blog": "Blog",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

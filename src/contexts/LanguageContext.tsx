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
    "nav.home": "Home",
    "nav.features": "Características",
    "nav.services": "Servicios",
    
    // Hero - Updated for privacy focus
    "hero.title": "Tu Hogar Inteligente.",
    "hero.titleHighlight": "100% Privado.",
    "hero.subtitle": "Control total desde una app personalizada. Procesamiento local, sin nubes externas, funciona incluso sin internet. Tu privacidad es nuestra prioridad.",
    "hero.cta": "Ver Demo",
    "hero.ctaSecondary": "Saber más",
    "hero.stat.local": "Procesamiento Local",
    "hero.stat.latency": "Latencia",
    "hero.stat.support": "Soporte técnico",
    
    // Privacy Features - NEW
    "privacy.title": "El Cerebro de",
    "privacy.titleHighlight": "Tu Hogar",
    "privacy.subtitle": "Un sistema central privado que procesa todo localmente, garantizando velocidad instantánea y privacidad total",
    "privacy.local.title": "100% Local",
    "privacy.local.desc": "Tus datos nunca salen de tu hogar. Sin servidores externos ni dependencias de la nube.",
    "privacy.speed.title": "Velocidad Instantánea",
    "privacy.speed.desc": "Respuesta en milisegundos. Sin delays ni esperas por conexiones externas.",
    "privacy.offline.title": "Funciona Sin Internet",
    "privacy.offline.desc": "Tu hogar funciona perfectamente aunque falle la conexión a internet.",
    "privacy.privacy.title": "Privacidad Total",
    "privacy.privacy.desc": "Sin rastreo, sin minería de datos, sin terceros accediendo a tu información.",

    // Infrastructure - NEW
    "infra.badge": "Base Sólida",
    "infra.title": "La Base de Todo:",
    "infra.titleHighlight": "Conectividad Empresarial",
    "infra.description": "Antes de automatizar, instalamos una red WiFi de grado empresarial con múltiples puntos de acceso. Esta infraestructura garantiza cobertura total y estabilidad como base de todo el sistema.",
    "infra.enterprise": "WiFi Empresarial",
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
    "demo.blinds.partial": "Abierto",
    
    // Features
    "features.title": "Todo lo que necesitas en",
    "features.titleHighlight": "una app",
    "features.subtitle": "Descubre las funcionalidades que hacen de DiraSmart la mejor opción para tu hogar inteligente",
    "features.tab.app": "App",
    "features.tab.automate": "Automatiza Tu Vida",
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
    "features.automate.title": "Automatiza Tu Vida",
    "features.automate.description": "Crea escenas y rutinas personalizadas que se adaptan a tu estilo de vida.",
    "features.automate.scenes": "Escenas Personalizadas",
    "features.automate.scenesDesc": "\"Buenos días\", \"Cine en casa\", \"Hora de dormir\"",
    "features.automate.schedule": "Programación Horaria",
    "features.automate.scheduleDesc": "Automatiza según tu rutina diaria",
    "features.automate.presence": "Detección de Presencia",
    "features.automate.presenceDesc": "Activa escenas al llegar o salir de casa",
    "features.devices.badge": "Multiplataforma",
    "features.devices.title": "Todos Tus Dispositivos",
    "features.devices.description": "Accede a tu hogar inteligente desde cualquier dispositivo: celular, tablet, PC y más.",
    "features.devices.phone": "Celular",
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
    "services.localControl": "Control Local Prioritario",
    "services.localControlDesc": "Priorizamos Zigbee, Z-Wave y Matter sobre dispositivos dependientes de la nube",
    "services.network": "Infraestructura de Red",
    "services.networkDesc": "WiFi empresarial con múltiples puntos de acceso para cobertura total",
    "services.continuousSupport": "Servicio Continuo",
    "services.continuousSupportDesc": "Mantenimiento, actualizaciones de seguridad y soporte técnico incluido",
    
    // Brands
    "brands.title": "Marcas",
    "brands.titleHighlight": "compatibles",
    "brands.subtitle": "Somos agnósticos en hardware. Integramos las principales marcas y protocolos del mercado",
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
    
    // Footer
    "footer.description": "Transformamos hogares ordinarios en espacios inteligentes y privados. Tu comodidad, seguridad y privacidad son nuestra prioridad.",
    "footer.rights": "Todos los derechos reservados",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.services": "Services",
    
    // Hero - Updated for privacy focus
    "hero.title": "Your Smart Home.",
    "hero.titleHighlight": "100% Private.",
    "hero.subtitle": "Total control from a custom app. Local processing, no external clouds, works even without internet. Your privacy is our priority.",
    "hero.cta": "View Demo",
    "hero.ctaSecondary": "Learn More",
    "hero.stat.local": "Local Processing",
    "hero.stat.latency": "Latency",
    "hero.stat.support": "Technical support",
    
    // Privacy Features - NEW
    "privacy.title": "The Brain of",
    "privacy.titleHighlight": "Your Home",
    "privacy.subtitle": "A private central system that processes everything locally, ensuring instant speed and total privacy",
    "privacy.local.title": "100% Local",
    "privacy.local.desc": "Your data never leaves your home. No external servers or cloud dependencies.",
    "privacy.speed.title": "Instant Speed",
    "privacy.speed.desc": "Millisecond response. No delays or waits for external connections.",
    "privacy.offline.title": "Works Without Internet",
    "privacy.offline.desc": "Your home works perfectly even if internet connection fails.",
    "privacy.privacy.title": "Total Privacy",
    "privacy.privacy.desc": "No tracking, no data mining, no third parties accessing your information.",

    // Infrastructure - NEW
    "infra.badge": "Solid Foundation",
    "infra.title": "The Foundation:",
    "infra.titleHighlight": "Enterprise Connectivity",
    "infra.description": "Before automating, we install enterprise-grade WiFi with multiple access points. This infrastructure ensures total coverage and stability as the foundation of the entire system.",
    "infra.enterprise": "Enterprise WiFi",
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
    "demo.blinds.partial": "Open",
    
    // Features
    "features.title": "Everything you need in",
    "features.titleHighlight": "one app",
    "features.subtitle": "Discover the features that make DiraSmart the best choice for your smart home",
    "features.tab.app": "App",
    "features.tab.automate": "Automate Your Life",
    "features.tab.shabbat": "Shabbat Mode",
    "features.tab.devices": "Devices",
    "features.app.badge": "Full Control",
    "features.app.title": "Your Custom App",
    "features.app.description": "A single application designed specifically for your home. White-label with your style, unifying control of all your devices.",
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
    "features.automate.title": "Automate Your Life",
    "features.automate.description": "Create personalized scenes and routines that adapt to your lifestyle.",
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
    "services.customAppDesc": "White-label application designed exclusively for your home and spaces",
    "services.compatibility": "Universal Compatibility",
    "services.compatibilityDesc": "We integrate your existing devices or recommend the best ones for your case",
    "services.localControl": "Priority Local Control",
    "services.localControlDesc": "We prioritize Zigbee, Z-Wave and Matter over cloud-dependent devices",
    "services.network": "Network Infrastructure",
    "services.networkDesc": "Enterprise WiFi with multiple access points for total coverage",
    "services.continuousSupport": "Continuous Service",
    "services.continuousSupportDesc": "Maintenance, security updates and technical support included",
    
    // Brands
    "brands.title": "Compatible",
    "brands.titleHighlight": "brands",
    "brands.subtitle": "We are hardware agnostic. We integrate major brands and protocols in the market",
    "brands.protocols": "Supported protocols",
    
    // Testimonials
    "testimonials.title": "What our",
    "testimonials.titleHighlight": "clients say",
    "testimonials.subtitle": "Real opinions from homes transformed with smart technology",
    "testimonials.role.owner": "Owner",
    "testimonials.role.business": "Businessman",
    "testimonials.role.architect": "Architect",
    "testimonials.role.engineer": "Engineer",
    "testimonials.role.doctor": "Doctor",
    
    // Footer
    "footer.description": "We transform ordinary homes into smart and private spaces. Your comfort, security and privacy are our priority.",
    "footer.rights": "All rights reserved",
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

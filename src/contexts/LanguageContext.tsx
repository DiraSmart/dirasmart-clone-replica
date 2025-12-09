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
    
    // Hero
    "hero.title": "Controla tu hogar",
    "hero.titleHighlight": "desde un app",
    "hero.subtitle": "Transforma tu casa en un hogar inteligente. Controla luces, climatización, persianas y más desde tu smartphone, en cualquier momento y lugar.",
    "hero.cta": "Contáctanos",
    "hero.ctaSecondary": "Saber más",
    "hero.stat.homes": "Hogares conectados",
    "hero.stat.support": "Soporte técnico",
    "hero.stat.satisfaction": "Satisfacción",
    
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
    "features.app.title": "Casa Inteligente",
    "features.app.description": "Controla todos los aspectos de tu hogar desde una única aplicación intuitiva y fácil de usar.",
    "features.app.ac": "Aire Acondicionado",
    "features.app.acDesc": "Controla la temperatura de cada habitación",
    "features.app.blinds": "Persianas Motorizadas",
    "features.app.blindsDesc": "Programa horarios o controla manualmente",
    "features.app.lights": "Iluminación Inteligente",
    "features.app.lightsDesc": "Ajusta intensidad y color en cada zona",
    "features.shabbat.badge": "Calendario Judío",
    "features.shabbat.title": "Modo Shabbat",
    "features.shabbat.description": "Sistema inteligente que se adapta al calendario judío, configurando automáticamente los días importantes con solo un par de clicks.",
    "features.shabbat.holidays": "Reconoce Jaguim",
    "features.shabbat.holidaysDesc": "Detecta festividades incluso en días de semana",
    "features.shabbat.quick": "Configuración Rápida",
    "features.shabbat.quickDesc": "Todo automático con solo un par de clicks",
    "features.shabbat.auto": "Modo Automático",
    "features.shabbat.autoDesc": "Tu hogar se prepara solo para cada ocasión",
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
    
    // Services
    "services.title": "¿Qué",
    "services.titleHighlight": "ofrecemos",
    "services.subtitle": "Un servicio integral para transformar tu hogar en un espacio inteligente y conectado",
    "services.installation": "Instalación Completa",
    "services.installationDesc": "Instalamos todo el sistema de domótica en tu hogar de forma profesional",
    "services.design": "Diseño Personalizado",
    "services.designDesc": "Diseñamos soluciones adaptadas a tus necesidades específicas",
    "services.automation": "Automatización",
    "services.automationDesc": "Automatizamos todos los procesos de tu hogar inteligente",
    "services.compatibility": "Compatibilidad",
    "services.compatibilityDesc": "Integramos dispositivos de múltiples marcas y protocolos",
    "services.adaptation": "Adaptación Inteligente",
    "services.adaptationDesc": "El sistema aprende de tus hábitos y se adapta automáticamente",
    "services.access": "Acceso Universal",
    "services.accessDesc": "Controla tu hogar desde cualquier lugar del mundo",
    "services.local": "Local y Confiable",
    "services.localDesc": "Servicio local con garantía y soporte continuo",
    "services.maintenance": "Mantenimiento",
    "services.maintenanceDesc": "Mantenimiento preventivo y actualizaciones periódicas",
    "services.support": "Servicio Técnico",
    "services.supportDesc": "Soporte técnico 24/7 para resolver cualquier incidencia",
    
    // Brands
    "brands.title": "Marcas",
    "brands.titleHighlight": "compatibles",
    "brands.subtitle": "Trabajamos con las principales marcas y protocolos del mercado",
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
    "footer.description": "Transformamos hogares ordinarios en espacios inteligentes y conectados. Tu comodidad y tranquilidad son nuestra prioridad.",
    "footer.rights": "Todos los derechos reservados",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.services": "Services",
    
    // Hero
    "hero.title": "Control your home",
    "hero.titleHighlight": "from an app",
    "hero.subtitle": "Transform your house into a smart home. Control lights, climate, blinds and more from your smartphone, anytime and anywhere.",
    "hero.cta": "Contact Us",
    "hero.ctaSecondary": "Learn More",
    "hero.stat.homes": "Connected homes",
    "hero.stat.support": "Technical support",
    "hero.stat.satisfaction": "Satisfaction",
    
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
    "features.app.title": "Smart Home",
    "features.app.description": "Control all aspects of your home from a single intuitive and easy-to-use application.",
    "features.app.ac": "Air Conditioning",
    "features.app.acDesc": "Control the temperature of each room",
    "features.app.blinds": "Motorized Blinds",
    "features.app.blindsDesc": "Schedule times or control manually",
    "features.app.lights": "Smart Lighting",
    "features.app.lightsDesc": "Adjust intensity and color in each zone",
    "features.shabbat.badge": "Jewish Calendar",
    "features.shabbat.title": "Shabbat Mode",
    "features.shabbat.description": "Intelligent system that adapts to the Jewish calendar, automatically configuring important days with just a couple of clicks.",
    "features.shabbat.holidays": "Recognizes Chagim",
    "features.shabbat.holidaysDesc": "Detects holidays even on weekdays",
    "features.shabbat.quick": "Quick Setup",
    "features.shabbat.quickDesc": "Everything automatic with just a couple of clicks",
    "features.shabbat.auto": "Automatic Mode",
    "features.shabbat.autoDesc": "Your home prepares itself for each occasion",
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
    
    // Services
    "services.title": "What do we",
    "services.titleHighlight": "offer",
    "services.subtitle": "A comprehensive service to transform your home into a smart and connected space",
    "services.installation": "Complete Installation",
    "services.installationDesc": "We professionally install the entire home automation system in your home",
    "services.design": "Custom Design",
    "services.designDesc": "We design solutions tailored to your specific needs",
    "services.automation": "Automation",
    "services.automationDesc": "We automate all processes in your smart home",
    "services.compatibility": "Compatibility",
    "services.compatibilityDesc": "We integrate devices from multiple brands and protocols",
    "services.adaptation": "Smart Adaptation",
    "services.adaptationDesc": "The system learns from your habits and adapts automatically",
    "services.access": "Universal Access",
    "services.accessDesc": "Control your home from anywhere in the world",
    "services.local": "Local and Reliable",
    "services.localDesc": "Local service with warranty and ongoing support",
    "services.maintenance": "Maintenance",
    "services.maintenanceDesc": "Preventive maintenance and periodic updates",
    "services.support": "Technical Service",
    "services.supportDesc": "24/7 technical support to resolve any issue",
    
    // Brands
    "brands.title": "Compatible",
    "brands.titleHighlight": "brands",
    "brands.subtitle": "We work with leading brands and protocols in the market",
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
    "footer.description": "We transform ordinary homes into smart and connected spaces. Your comfort and peace of mind are our priority.",
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

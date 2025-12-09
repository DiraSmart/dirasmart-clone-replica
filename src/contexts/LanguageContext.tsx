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
    "hero.title": "Tu Hogar,",
    "hero.titleHighlight": "Más Inteligente",
    "hero.subtitle": "Automatiza tu hogar con la tecnología más avanzada. Control total desde tu smartphone.",
    "hero.cta": "Descubre Más",
    
    // Interactive Demo
    "demo.title": "Experimenta el Control",
    "demo.titleHighlight": "Inteligente",
    "demo.subtitle": "Interactúa con nuestros controles y descubre cómo sería manejar tu hogar inteligente",
    "demo.ac": "Aire Acondicionado",
    "demo.lights": "Iluminación",
    "demo.blinds": "Persianas",
    "demo.temperature": "Temperatura",
    "demo.humidity": "Humedad",
    "demo.off": "Apagado",
    "demo.cool": "Frío",
    "demo.dry": "Seco",
    "demo.brightness": "Brillo",
    "demo.open": "Abierto",
    
    // Features
    "features.title": "Características",
    "features.titleHighlight": "Principales",
    "features.subtitle": "Descubre todas las funcionalidades que hacen de DiraSmart la mejor opción para tu hogar inteligente",
    "features.app": "App Móvil",
    "features.appDesc": "Control total desde tu smartphone con nuestra aplicación intuitiva y fácil de usar",
    "features.shabat": "Modo Shabat",
    "features.shabatDesc": "Programación especial para respetar el Shabat con automatizaciones predefinidas",
    "features.automations": "Automatizaciones",
    "features.automationsDesc": "Crea escenas y rutinas personalizadas para automatizar tu hogar",
    "features.devices": "Dispositivos",
    "features.devicesDesc": "Compatible con múltiples protocolos y marcas de dispositivos inteligentes",
    
    // Services
    "services.title": "Nuestros",
    "services.titleHighlight": "Servicios",
    "services.subtitle": "Ofrecemos soluciones completas para transformar tu hogar en un espacio inteligente",
    
    // Brands
    "brands.title": "Compatible con",
    "brands.titleHighlight": "Tus Dispositivos",
    "brands.subtitle": "Integramos las mejores marcas y protocolos del mercado para ofrecerte una experiencia unificada",
    
    // Testimonials
    "testimonials.title": "Lo Que Dicen",
    "testimonials.titleHighlight": "Nuestros Clientes",
    "testimonials.subtitle": "Descubre las experiencias de quienes ya disfrutan de un hogar inteligente con DiraSmart",
    
    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.description": "Transformando hogares en espacios inteligentes con tecnología de vanguardia.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.services": "Services",
    
    // Hero
    "hero.title": "Your Home,",
    "hero.titleHighlight": "Smarter",
    "hero.subtitle": "Automate your home with the most advanced technology. Full control from your smartphone.",
    "hero.cta": "Discover More",
    
    // Interactive Demo
    "demo.title": "Experience",
    "demo.titleHighlight": "Smart Control",
    "demo.subtitle": "Interact with our controls and discover what it's like to manage your smart home",
    "demo.ac": "Air Conditioning",
    "demo.lights": "Lighting",
    "demo.blinds": "Blinds",
    "demo.temperature": "Temperature",
    "demo.humidity": "Humidity",
    "demo.off": "Off",
    "demo.cool": "Cool",
    "demo.dry": "Dry",
    "demo.brightness": "Brightness",
    "demo.open": "Open",
    
    // Features
    "features.title": "Main",
    "features.titleHighlight": "Features",
    "features.subtitle": "Discover all the functionalities that make DiraSmart the best choice for your smart home",
    "features.app": "Mobile App",
    "features.appDesc": "Full control from your smartphone with our intuitive and easy-to-use application",
    "features.shabat": "Shabbat Mode",
    "features.shabatDesc": "Special programming to respect Shabbat with predefined automations",
    "features.automations": "Automations",
    "features.automationsDesc": "Create custom scenes and routines to automate your home",
    "features.devices": "Devices",
    "features.devicesDesc": "Compatible with multiple protocols and smart device brands",
    
    // Services
    "services.title": "Our",
    "services.titleHighlight": "Services",
    "services.subtitle": "We offer complete solutions to transform your home into a smart space",
    
    // Brands
    "brands.title": "Compatible with",
    "brands.titleHighlight": "Your Devices",
    "brands.subtitle": "We integrate the best brands and protocols in the market to offer you a unified experience",
    
    // Testimonials
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Clients Say",
    "testimonials.subtitle": "Discover the experiences of those who already enjoy a smart home with DiraSmart",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.description": "Transforming homes into smart spaces with cutting-edge technology.",
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

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Path prefix for current language: "" for Spanish, "/en" for English */
  pathPrefix: string;
  /** Convert a base path (e.g. "/about") to the current language path */
  localePath: (path: string) => string;
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
    "testimonials.goTo": "Ir al testimonio de",
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
    "nav.commercial": "Comercial",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "a11y.skipToContent": "Saltar al contenido principal",
    "a11y.pauseAutoplay": "Pausar rotación automática",
    "a11y.resumeAutoplay": "Reanudar rotación automática",

    // Home → Commercial banner
    "home.commercialBanner.eyebrow": "¿Es para tu negocio?",
    "home.commercialBanner.title": "También automatizamos hoteles, oficinas y edificios.",
    "home.commercialBanner.subtitle": "Soluciones profesionales con KNX Partner certificado, BACnet y procesamiento local.",
    "home.commercialBanner.cta": "Ver soluciones comerciales",

    // About page
    "about.title": "La mayoría de casas ‘smart’ en Panamá se usan como",
    "about.titleHighlight": "casas comunes.",
    "about.subtitle": "Pasamos por eso. Por eso lo hacemos diferente.",

    "about.story.title": "Así nació DiraSmart",
    "about.story.intro": "La primera vez que automatizamos nuestra propia casa inteligente en Panamá, todo funcionó de maravilla… durante dos semanas.",
    "about.story.p1": "Al mes, ya nadie abría la app. Al tercer mes, volvimos a usar los interruptores físicos. Miles de dólares en sensores, luces inteligentes y AC automatizado, para terminar con una casa común y corriente.",
    "about.story.p2": "El problema no era la tecnología. Los dispositivos funcionaban. El problema era cómo estaban integrados: seis apps distintas, horarios imposibles de coordinar entre marcas, automatizaciones que se caen cuando se corta el WiFi, y soporte que responde “abre un ticket” cuando necesitas ayuda un viernes a las 4pm.",
    "about.story.p3": "Peor aún: muchas marcas deciden cerrar sus servicios en la nube y, de un día para otro, equipos que costaron cientos de dólares quedan convertidos en ladrillos. Google bloqueó su hub Revolv. Wink empezó a cobrar suscripción o apagaba todo. Insteon desapareció sin aviso. Los monitores de bebé de Kodak se apagaron cuando cerraron la app. Nest Secure fue descontinuado. La lista es larga y sigue creciendo.",
    "about.story.outro": "DiraSmart nació por eso. No vendemos gadgets sueltos. Instalamos hogares inteligentes en Panamá que realmente se usan — todos los días, por todos los que viven ahí, sin depender de la nube de ningún fabricante.",

    "about.pains.title": "Lo que suele pasar",
    "about.pains.subtitle": "Los dolores de cabeza más comunes que nos cuentan antes de contratarnos.",
    "about.pain1.title": "Mi app no funciona sin internet",
    "about.pain1.desc": "La mayoría de sistemas envía todo a servidores en EEUU o Europa. Si tu internet se cae, tu casa inteligente deja de ser inteligente.",
    "about.pain2.title": "Tengo 6 apps y ninguna habla con la otra",
    "about.pain2.desc": "Una para las luces, otra para el AC, otra para las cámaras, otra para los enchufes. Cada marca te obliga a usar su propia aplicación.",
    "about.pain3.title": "Programar horarios es una pesadilla",
    "about.pain3.desc": "Cada app tiene su propia lógica de automatizaciones. Coordinar que las luces, el AC y las persianas trabajen juntos es casi imposible sin ser programador.",
    "about.pain7.title": "Desvincular un dispositivo borra las automatizaciones",
    "about.pain7.desc": "Cambias el router, reemplazas un dispositivo o lo desvinculas de la app, y muchas marcas borran todas las automatizaciones en las que estaba incluido. Empiezas de cero.",
    "about.pain4.title": "Nadie responde cuando falla",
    "about.pain4.desc": "Instalaciones de fin de semana, soporte por email que tarda 3 días en responder — o ninguno.",
    "about.pain5.title": "La marca deja de soportar el dispositivo",
    "about.pain5.desc": "Google Revolv, Wink, Insteon, Nest Secure, los monitores de bebé Kodak. Cuando un fabricante cierra su nube, tu equipo deja de funcionar por completo — aunque esté nuevo.",
    "about.pain6.title": "No sé qué datos recogen",
    "about.pain6.desc": "Google, Amazon y fabricantes chinos procesan todo lo que pasa en tu casa. Tus rutinas, horarios y hábitos son su producto.",

    "about.solutions.title": "Así lo hacemos",
    "about.solutions.titleHighlight": "diferente",
    "about.solutions.subtitle": "Cuatro decisiones que cambian el resultado en cada instalación de smart home en Panamá.",
    "about.sol1.title": "Procesamiento local, no nube",
    "about.sol1.desc": "Todo se ejecuta dentro de tu hogar en un servidor dedicado. Si tu internet cae, las luces, el AC, las persianas y las escenas siguen funcionando sin interrupción. Y si una marca cierra sus servicios, tu casa sigue siendo tuya: no dependes de que Google, Amazon o un fabricante chino mantengan el soporte.",
    "about.sol2.title": "Modo Shabbat diseñado por quien lo vive",
    "about.sol2.desc": "Automatizaciones según calendario hebreo: luces, AC, climatización y persianas. Desarrollado en consulta con rabinos para cumplir con la Halajá, no como un modo timer genérico.",
    "about.sol3.title": "Protocolos industriales, no solo WiFi",
    "about.sol3.desc": "KNX, Zigbee, Z-Wave y Modbus: los mismos estándares de domótica que se usan en hoteles y edificios comerciales. Más estables, más rápidos, compatibles con cualquier marca seria del mercado.",
    "about.sol4.title": "Soporte por WhatsApp directo",
    "about.sol4.desc": "Cuando algo falla, lo resolvemos por WhatsApp. Sin tickets, sin filas, sin respuestas automáticas. Hablas directo con quien instaló tu sistema.",

    "about.cta.title": "¿Listo para una casa inteligente que funcione de verdad?",
    "about.cta.subtitle": "Hablemos. Sin compromiso, sin ventas forzadas.",
    "about.cta.button": "Escríbenos por WhatsApp",
    "about.cta.message": "¡Hola! Me interesa conocer más sobre DiraSmart",

    // Commercial / B2B page
    "commercial.title": "Automatización para",
    "commercial.titleHighlight": "hoteles, edificios y negocios en Panamá.",
    "commercial.subtitle": "Hoteles, oficinas, museos, retail, edificios. Diseño con KNX, integración BMS vía BACnet y procesamiento local. Soporte continuo desde Panamá.",
    "commercial.cta.primary": "Solicitar propuesta",
    "commercial.cta.secondary": "Ver sectores",

    "commercial.diff.title": "Por qué elegirnos para tu",
    "commercial.diff.titleHighlight": "proyecto comercial",
    "commercial.diff.subtitle": "No vendemos gadgets sueltos. Diseñamos infraestructura que dura años.",

    "commercial.sectors.title": "Sectores que",
    "commercial.sectors.titleHighlight": "atendemos",
    "commercial.sectors.subtitle": "Cada espacio tiene su propia lógica. Adaptamos el sistema a tu operación.",

    "commercial.process.title": "Cómo trabajamos un",
    "commercial.process.titleHighlight": "proyecto comercial",
    "commercial.process.subtitle": "Sin sorpresas, sin tickets. Coordinación directa con arquitecto, contratista y dueño.",

    "commercial.form.title": "Hablemos de tu",
    "commercial.form.titleHighlight": "proyecto",
    "commercial.form.subtitle": "Cuéntanos lo básico. Te respondemos en menos de 24 horas hábiles con preguntas o propuesta inicial.",
    "commercial.form.name": "Nombre completo",
    "commercial.form.company": "Empresa",
    "commercial.form.email": "Email corporativo",
    "commercial.form.phone": "Teléfono (opcional)",
    "commercial.form.sector": "Sector",
    "commercial.form.size": "Tamaño aproximado",
    "commercial.form.message": "Cuéntanos sobre el proyecto",
    "commercial.form.sectorPlaceholder": "Selecciona un sector",
    "commercial.form.sizePlaceholder": "Selecciona un rango",
    "commercial.form.messagePlaceholder": "Tipo de espacio, qué quisieras automatizar, plazo aproximado…",
    "commercial.form.submit": "Enviar solicitud",
    "commercial.form.submitting": "Enviando…",
    "commercial.form.success": "¡Listo! Recibimos tu solicitud. Te contactamos en menos de 24 horas hábiles.",
    "commercial.form.error": "Hubo un problema al enviar. Inténtalo de nuevo o escríbenos directo a comercial@dirasmart.com",

    "commercial.alt.title": "¿Prefieres contacto directo?",
    "commercial.alt.whatsapp": "Mensaje por WhatsApp",
    "commercial.alt.whatsappMessage": "¡Hola! Quisiera información sobre automatización comercial",

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

    // FAQ
    "faq.title": "Preguntas",
    "faq.titleHighlight": "Frecuentes",
    "faq.subtitle": "Respuestas a las dudas más comunes sobre hogares inteligentes en Panamá",
    "faq.q1": "¿Cuánto cuesta instalar un smart home en Panamá?",
    "faq.a1": "El costo varía según el tamaño de tu hogar y el alcance del proyecto. Ofrecemos desde paquetes básicos inalámbricos para apartamentos hasta sistemas KNX premium para residencias de alta gama. La consulta inicial es gratuita — evaluamos tu espacio y te presentamos opciones personalizadas.",
    "faq.q2": "¿Cuánto tiempo toma la instalación?",
    "faq.a2": "Un apartamento con dispositivos inalámbricos se instala en un solo día. Una casa completa con cableado estructurado y WiFi empresarial toma entre 2 y 3 días. Proyectos KNX en construcción nueva se coordinan con la obra.",
    "faq.q3": "¿Funciona en apartamentos o solo en casas?",
    "faq.a3": "Ambos. Para apartamentos usamos dispositivos inalámbricos que no requieren obras ni modificar la instalación eléctrica. Todo se instala sin romper paredes y es removible si te mudas.",
    "faq.q4": "¿Qué pasa si se va el internet?",
    "faq.a4": "Todo sigue funcionando. A diferencia de sistemas como Alexa o Google Home que dependen de la nube, DiraSmart procesa todo localmente dentro de tu hogar. Si se cae tu internet, tus automatizaciones, luces y aires siguen operando normalmente.",
    "faq.q5": "¿Qué dispositivos son compatibles?",
    "faq.a5": "Más de 2,500 dispositivos de marcas como Tuya, Shelly, Philips Hue, Yale, Ecobee, Sonos, Somfy y más. Soportamos protocolos Zigbee, Z-Wave, WiFi, Bluetooth y KNX.",
    "faq.q6": "¿Puedo usar Alexa, Google o Siri?",
    "faq.a6": "Sí, somos compatibles con los tres asistentes de voz. No te encerramos en un ecosistema. El asistente funciona como un control remoto adicional — tu sistema completo opera sin depender de ellos.",
    "faq.q7": "¿Cuál es la diferencia entre DiraSmart y Alexa o Google Home?",
    "faq.a7": "Alexa y Google son asistentes de voz que envían tus datos a la nube. DiraSmart es un sistema completo de automatización con procesamiento 100% local, app personalizada con tu marca, instalación profesional y soporte continuo. Puedes usar Alexa o Google junto con DiraSmart si lo deseas.",
    "faq.q8": "¿Qué es KNX y por qué importa?",
    "faq.a8": "KNX es el estándar mundial de automatización de edificios (ISO/IEC 14543-3), usado en más de 190 países. DiraSmart es uno de los pocos KNX Partners certificados en Panamá, lo que garantiza diseño profesional, programación con la herramienta oficial ETS y acceso a más de 8,000 productos compatibles de 500+ fabricantes.",
    "faq.q9": "¿Incluyen soporte después de la instalación?",
    "faq.a9": "Sí. Nuestro modelo es de servicio continuo: incluimos mantenimiento, actualizaciones de seguridad y soporte técnico. Tu sistema siempre está actualizado y funcionando perfectamente.",
    "faq.q10": "¿Y si me mudo o quiero agregar más dispositivos?",
    "faq.a10": "El sistema es completamente escalable. Puedes agregar dispositivos en cualquier momento. Los dispositivos inalámbricos son removibles y te los puedes llevar si te mudas.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.services": "Services",
    
    // Hero
    "hero.title": "Smart Home in Panama.",
    "hero.titleHighlight": "Designed For You.",
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
    "testimonials.goTo": "Go to testimonial from",
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
    "nav.commercial": "Commercial",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "a11y.skipToContent": "Skip to main content",
    "a11y.pauseAutoplay": "Pause autoplay",
    "a11y.resumeAutoplay": "Resume autoplay",

    // Home → Commercial banner
    "home.commercialBanner.eyebrow": "Is it for your business?",
    "home.commercialBanner.title": "We also automate hotels, offices and buildings.",
    "home.commercialBanner.subtitle": "Professional solutions with certified KNX Partner status, BACnet and local processing.",
    "home.commercialBanner.cta": "See commercial solutions",

    // About page
    "about.title": "Most ‘smart’ homes in Panama are used as",
    "about.titleHighlight": "regular homes.",
    "about.subtitle": "We lived through it. That’s why we do it differently.",

    "about.story.title": "Why DiraSmart exists",
    "about.story.intro": "The first time we automated our own smart home in Panama, everything worked beautifully… for two weeks.",
    "about.story.p1": "After a month, nobody opened the app. By the third month, we were back to flipping physical switches. Thousands of dollars in sensors, smart lights and automated AC, just to end up with a regular home.",
    "about.story.p2": "The problem wasn’t the technology. The devices worked. The problem was how they were integrated: six different apps, schedules impossible to coordinate across brands, automations that fall apart when WiFi drops, and support that replies “open a ticket” when you need help at 4pm on a Friday.",
    "about.story.p3": "Worse: many brands decide to shut down their cloud services and, overnight, gear that cost hundreds of dollars turns into bricks. Google killed its Revolv hub. Wink demanded a subscription or shut everything off. Insteon disappeared without notice. Kodak baby monitors went dark when they closed the app. Nest Secure was discontinued. The list is long and keeps growing.",
    "about.story.outro": "DiraSmart exists for that reason. We don’t sell standalone gadgets. We install smart homes in Panama that actually get used — every day, by everyone who lives there, without depending on any manufacturer’s cloud.",

    "about.pains.title": "What usually happens",
    "about.pains.subtitle": "The most common headaches people tell us about before hiring us.",
    "about.pain1.title": "My app doesn’t work without internet",
    "about.pain1.desc": "Most systems send everything to servers in the US or Europe. If your internet fails, your smart home stops being smart.",
    "about.pain2.title": "I have 6 apps and none talk to each other",
    "about.pain2.desc": "One for lights, another for AC, another for cameras, another for plugs. Every brand forces you into its own app.",
    "about.pain3.title": "Scheduling routines is a nightmare",
    "about.pain3.desc": "Every app has its own automation logic. Coordinating lights, AC and blinds to work together is nearly impossible without being a developer.",
    "about.pain7.title": "Unlink a device, lose all your routines",
    "about.pain7.desc": "Change your router, replace a device or unlink it from the app, and many brands wipe every automation that included it. You start from zero.",
    "about.pain4.title": "Nobody responds when it breaks",
    "about.pain4.desc": "Weekend installs, email support that takes 3 days to reply — or nothing at all.",
    "about.pain5.title": "The brand stops supporting your device",
    "about.pain5.desc": "Google Revolv, Wink, Insteon, Nest Secure, Kodak baby monitors. When a manufacturer shuts down its cloud, your gear simply stops working — even if it’s brand new.",
    "about.pain6.title": "I don’t know what data they collect",
    "about.pain6.desc": "Google, Amazon and Chinese manufacturers process everything happening in your home. Your routines, schedules and habits are their product.",

    "about.solutions.title": "How we do it",
    "about.solutions.titleHighlight": "differently",
    "about.solutions.subtitle": "Four decisions that change the outcome of every smart home install in Panama.",
    "about.sol1.title": "Local processing, not the cloud",
    "about.sol1.desc": "Everything runs inside your home on a dedicated server. If your internet fails, lights, AC, blinds and scenes keep working uninterrupted. And if a brand shuts down its services, your home is still yours: you don’t depend on Google, Amazon or a Chinese manufacturer keeping the lights on.",
    "about.sol2.title": "Shabbat mode designed by those who live it",
    "about.sol2.desc": "Automations following the Hebrew calendar: lights, AC, climate control and blinds. Developed in consultation with rabbis to comply with Halacha, not as a generic timer mode.",
    "about.sol3.title": "Industrial protocols, not just WiFi",
    "about.sol3.desc": "KNX, Zigbee, Z-Wave and Modbus: the same home automation standards used in hotels and commercial buildings. More stable, faster, compatible with any serious brand on the market.",
    "about.sol4.title": "Direct WhatsApp support",
    "about.sol4.desc": "When something fails, we fix it via WhatsApp. No tickets, no queues, no auto-replies. You talk directly to whoever installed your system.",

    "about.cta.title": "Ready for a smart home that actually works?",
    "about.cta.subtitle": "Let’s talk. No commitment, no hard sell.",
    "about.cta.button": "Message us on WhatsApp",
    "about.cta.message": "Hello! I'm interested in learning more about DiraSmart",

    // Commercial / B2B page
    "commercial.title": "Automation for",
    "commercial.titleHighlight": "hotels, buildings and businesses in Panama.",
    "commercial.subtitle": "Hotels, offices, museums, retail, condos. Designed with KNX, BMS integration over BACnet and local processing. Continuous support from Panama.",
    "commercial.cta.primary": "Request a proposal",
    "commercial.cta.secondary": "Browse sectors",

    "commercial.diff.title": "Why pick us for your",
    "commercial.diff.titleHighlight": "commercial project",
    "commercial.diff.subtitle": "We don't sell standalone gadgets. We design infrastructure that lasts for years.",

    "commercial.sectors.title": "Sectors we",
    "commercial.sectors.titleHighlight": "serve",
    "commercial.sectors.subtitle": "Every space has its own logic. We adapt the system to how you actually operate.",

    "commercial.process.title": "How we run a",
    "commercial.process.titleHighlight": "commercial project",
    "commercial.process.subtitle": "No surprises, no tickets. Direct coordination with architect, contractor and owner.",

    "commercial.form.title": "Let's talk about your",
    "commercial.form.titleHighlight": "project",
    "commercial.form.subtitle": "Give us the basics. We respond within 24 business hours with questions or an initial proposal.",
    "commercial.form.name": "Full name",
    "commercial.form.company": "Company",
    "commercial.form.email": "Work email",
    "commercial.form.phone": "Phone (optional)",
    "commercial.form.sector": "Sector",
    "commercial.form.size": "Approximate size",
    "commercial.form.message": "Tell us about the project",
    "commercial.form.sectorPlaceholder": "Pick a sector",
    "commercial.form.sizePlaceholder": "Pick a range",
    "commercial.form.messagePlaceholder": "Type of space, what you'd like to automate, approximate timeline…",
    "commercial.form.submit": "Send request",
    "commercial.form.submitting": "Sending…",
    "commercial.form.success": "Got it! We received your request and will reach out within 24 business hours.",
    "commercial.form.error": "There was a problem sending. Please try again or email us directly at comercial@dirasmart.com",

    "commercial.alt.title": "Prefer direct contact?",
    "commercial.alt.whatsapp": "Message on WhatsApp",
    "commercial.alt.whatsappMessage": "Hi! I'd like info about commercial automation",

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

    // FAQ
    "faq.title": "Frequently Asked",
    "faq.titleHighlight": "Questions",
    "faq.subtitle": "Answers to the most common questions about smart homes in Panama",
    "faq.q1": "How much does it cost to install a smart home in Panama?",
    "faq.a1": "The cost varies depending on the size of your home and the scope of the project. We offer everything from basic wireless packages for apartments to premium KNX systems for high-end residences. The initial consultation is free — we evaluate your space and present personalized options.",
    "faq.q2": "How long does installation take?",
    "faq.a2": "An apartment with wireless devices can be installed in a single day. A complete home with structured cabling and enterprise WiFi takes 2 to 3 days. KNX projects in new construction are coordinated with the building process.",
    "faq.q3": "Does it work in apartments or only houses?",
    "faq.a3": "Both. For apartments, we use wireless devices that require no construction or electrical modifications. Everything is installed without breaking walls and is removable if you move.",
    "faq.q4": "What happens if the internet goes down?",
    "faq.a4": "Everything keeps working. Unlike systems like Alexa or Google Home that depend on the cloud, DiraSmart processes everything locally inside your home. If your internet goes down, your automations, lights, and AC continue operating normally.",
    "faq.q5": "What devices are compatible?",
    "faq.a5": "Over 2,500 devices from brands like Tuya, Shelly, Philips Hue, Yale, Ecobee, Sonos, Somfy, and more. We support Zigbee, Z-Wave, WiFi, Bluetooth, and KNX protocols.",
    "faq.q6": "Can I use Alexa, Google, or Siri?",
    "faq.a6": "Yes, we're compatible with all three voice assistants. We don't lock you into one ecosystem. The assistant works as an additional remote control — your entire system operates without depending on them.",
    "faq.q7": "What's the difference between DiraSmart and Alexa or Google Home?",
    "faq.a7": "Alexa and Google are voice assistants that send your data to the cloud. DiraSmart is a complete automation system with 100% local processing, a custom-branded app, professional installation, and continuous support. You can use Alexa or Google alongside DiraSmart if you wish.",
    "faq.q8": "What is KNX and why does it matter?",
    "faq.a8": "KNX is the worldwide building automation standard (ISO/IEC 14543-3), used in over 190 countries. DiraSmart is one of the few certified KNX Partners in Panama, which guarantees professional design, programming with the official ETS tool, and access to over 8,000 compatible products from 500+ manufacturers.",
    "faq.q9": "Do you include support after installation?",
    "faq.a9": "Yes. Our model is continuous service: we include maintenance, security updates, and technical support. Your system is always up-to-date and running perfectly.",
    "faq.q10": "What if I move or want to add more devices?",
    "faq.a10": "The system is fully scalable. You can add devices at any time. Wireless devices are removable and you can take them with you if you move.",
  },
};

/** Detect language from URL pathname */
function detectLanguage(pathname: string): Language {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

/** Strip /en prefix from a pathname to get the base path */
function stripLangPrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const language = detectLanguage(location.pathname);
  const pathPrefix = language === "en" ? "/en" : "";

  const setLanguage = useCallback((lang: Language) => {
    const basePath = stripLangPrefix(location.pathname);
    const newPath = lang === "en" ? (basePath === "/" ? "/en" : `/en${basePath}`) : basePath;
    navigate(newPath);
  }, [location.pathname, navigate]);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const localePath = useCallback((path: string): string => {
    return pathPrefix + path;
  }, [pathPrefix]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, pathPrefix, localePath }}>
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

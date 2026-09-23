import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Hotel,
  Building2,
  Building,
  Landmark,
  UtensilsCrossed,
  ShoppingBag,
  Dumbbell,
  Stethoscope,
  Mail,
  MessageCircle,
  Send,
  ClipboardList,
  PencilRuler,
  HardHat,
  Wrench,
  HeartHandshake,
  Loader2,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  MonitorSmartphone,
  ShieldCheck,
  BellRing,
  BarChart3,
  ThermometerSun,
} from "lucide-react";
import { Link } from "react-router-dom";
import knxPartnerBadge from "@/assets/brands/knx-partner.png";
import bacnetLogo from "@/assets/brands/bacnet.svg";
import daliLogo from "@/assets/brands/dali.png";
import bmsLogo from "@/assets/brands/bms.png";
import bmsLogoDark from "@/assets/brands/bms-dark.png";
import { revealDelay } from "@/lib/reveal";

const WEB3FORMS_KEY = "1cd751d7-540f-4cad-8f38-00d2784ff893";

type Lang = "es" | "en";

interface Sector {
  id: string;
  icon: typeof Hotel;
  image: string;
  name: { es: string; en: string };
  desc: { es: string; en: string };
}

const SECTORS: Sector[] = [
  {
    id: "hoteles",
    icon: Hotel,
    image: "/comercial/hoteles.jpg",
    name: { es: "Hoteles", en: "Hotels" },
    desc: {
      es: "Control por habitación, gestión energética cuando el huésped sale, integración con PMS y escenas de check-in/check-out automáticas.",
      en: "Per-room control, energy management when the guest leaves, PMS integration and automated check-in/check-out scenes.",
    },
  },
  {
    id: "oficinas",
    icon: Building2,
    image: "/comercial/oficinas.jpg",
    name: { es: "Oficinas corporativas", en: "Corporate offices" },
    desc: {
      es: "Iluminación adaptativa por ocupación, climatización por zonas, salas de reuniones automatizadas e integración con control de accesos.",
      en: "Occupancy-adaptive lighting, zoned HVAC, automated meeting rooms and integration with access control.",
    },
  },
  {
    id: "edificios",
    icon: Building,
    image: "/comercial/edificios.jpg",
    name: { es: "Edificios residenciales", en: "Residential buildings" },
    desc: {
      es: "Áreas comunes, lobby, gimnasio y piscina con monitoreo central. Ahorro energético, control de iluminación exterior y reportería.",
      en: "Common areas, lobby, gym and pool with central monitoring. Energy savings, exterior lighting control and reporting.",
    },
  },
  {
    id: "museos",
    icon: Landmark,
    image: "/comercial/museos.jpg",
    name: { es: "Museos y galerías", en: "Museums & galleries" },
    desc: {
      es: "Iluminación dirigida sin UV para conservación, control de humedad y temperatura, escenas día/noche y monitoreo de salas.",
      en: "UV-free directional lighting for conservation, humidity and temperature control, day/night scenes and room monitoring.",
    },
  },
  {
    id: "restaurantes",
    icon: UtensilsCrossed,
    image: "/comercial/restaurantes.jpg",
    name: { es: "Restaurantes", en: "Restaurants" },
    desc: {
      es: "Escenas por turno (almuerzo, cena, after-hours), zonas de música independientes, control de AC por área y ambientación que acompaña la experiencia.",
      en: "Service-period scenes (lunch, dinner, after-hours), independent music zones, per-area AC control and ambiance that matches the experience.",
    },
  },
  {
    id: "retail",
    icon: ShoppingBag,
    image: "/comercial/retail.jpg",
    name: { es: "Retail y comercios", en: "Retail" },
    desc: {
      es: "Iluminación de vitrinas y temporadas, climatización de probadores, escenas de apertura y cierre, control horario centralizado.",
      en: "Window and seasonal display lighting, fitting-room climate, open/close scenes and centralized scheduling.",
    },
  },
  {
    id: "gimnasios",
    icon: Dumbbell,
    image: "/comercial/gimnasios.jpg",
    name: { es: "Gimnasios y wellness", en: "Gyms & wellness" },
    desc: {
      es: "Iluminación funcional por zona (cardio, pesas, clases), climatización inteligente, música por sala y automatización por horario operativo.",
      en: "Functional lighting per zone (cardio, weights, classes), smart climate control, per-room music and operating-hours automation.",
    },
  },
  {
    id: "clinicas",
    icon: Stethoscope,
    image: "/comercial/clinicas.jpg",
    name: { es: "Clínicas y consultorios", en: "Clinics" },
    desc: {
      es: "Iluminación adecuada para procedimientos, gestión energética por consultorio, integración con sistemas de turnos y control de accesos.",
      en: "Procedure-appropriate lighting, per-office energy management, integration with appointment systems and access control.",
    },
  },
];

interface Benefit {
  id: string;
  icon: typeof TrendingDown;
  title: { es: string; en: string };
  desc: { es: string; en: string };
}

const BENEFITS: Benefit[] = [
  {
    id: "ahorro",
    icon: TrendingDown,
    title: { es: "Hasta 30% menos consumo eléctrico", en: "Up to 30% less electricity use" },
    desc: {
      es: "Climatización e iluminación que se apagan cuando el espacio está vacío, programación por horario y desconexión de cargas inactivas.",
      en: "HVAC and lighting that turn off when the space is empty, schedule-based programming and shutdown of idle loads.",
    },
  },
  {
    id: "control-remoto",
    icon: MonitorSmartphone,
    title: { es: "Control remoto y centralizado", en: "Remote, centralized control" },
    desc: {
      es: "Operá todo el edificio desde un panel, app o desde otra ciudad. Visibilidad total sin estar en sitio.",
      en: "Run the whole building from a panel, app, or another city. Full visibility without being on-site.",
    },
  },
  {
    id: "mantenimiento",
    icon: ShieldCheck,
    title: { es: "Prevención de fallas", en: "Failure prevention" },
    desc: {
      es: "Detectá problemas antes de que afecten al cliente. El sistema avisa cuando un equipo trabaja fuera de rango antes de fallar.",
      en: "Catch problems before they reach the customer. The system flags equipment running out of range before it fails.",
    },
  },
  {
    id: "notificaciones",
    icon: BellRing,
    title: { es: "Notificaciones en tiempo real", en: "Real-time notifications" },
    desc: {
      es: "Fugas de agua, puertas abiertas fuera de horario, sobrecargas eléctricas, fallos de HVAC. Tu staff alertado en segundos.",
      en: "Water leaks, doors left open after hours, electrical overloads, HVAC failures. Your staff alerted in seconds.",
    },
  },
  {
    id: "reportes",
    icon: BarChart3,
    title: { es: "Reportes y análisis", en: "Reporting & analytics" },
    desc: {
      es: "Consumo por zona, habitación y horario. Decisiones operativas con data, no con suposiciones.",
      en: "Consumption by zone, room and time of day. Operational decisions backed by data, not guesswork.",
    },
  },
  {
    id: "confort",
    icon: ThermometerSun,
    title: { es: "Confort consistente", en: "Consistent comfort" },
    desc: {
      es: "Climatización e iluminación adaptadas al uso real del espacio. Huéspedes y clientes que no piden más porque ya está bien.",
      en: "HVAC and lighting tuned to how the space is actually used. Guests and customers who don't ask for more because it's already right.",
    },
  },
];

interface Step {
  icon: typeof ClipboardList;
  title: { es: string; en: string };
  desc: { es: string; en: string };
}

const STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: { es: "Visita técnica", en: "Site visit" },
    desc: {
      es: "Recorremos tu espacio, entendemos la operación y mapeamos la infraestructura existente.",
      en: "We tour your space, understand the operation and map existing infrastructure.",
    },
  },
  {
    icon: PencilRuler,
    title: { es: "Diseño y propuesta", en: "Design & proposal" },
    desc: {
      es: "Diseñamos la topología KNX/DALI/BACnet sobre planos, dimensionamos equipos y entregamos propuesta detallada.",
      en: "We design the KNX/DALI/BACnet topology on plans, size the equipment and deliver a detailed proposal.",
    },
  },
  {
    icon: HardHat,
    title: { es: "Coordinación", en: "Coordination" },
    desc: {
      es: "Trabajamos directo con arquitecto, contratista eléctrico y dueño durante toda la obra.",
      en: "We coordinate directly with architect, electrical contractor and owner throughout construction.",
    },
  },
  {
    icon: Wrench,
    title: { es: "Instalación", en: "Installation" },
    desc: {
      es: "Cableado bus, programación con ETS, puesta en marcha y pruebas escena por escena.",
      en: "Bus wiring, ETS programming, commissioning and scene-by-scene testing.",
    },
  },
  {
    icon: HeartHandshake,
    title: { es: "Capacitación + soporte", en: "Training + support" },
    desc: {
      es: "Entrenamos a tu staff, dejamos documentación y mantenemos el sistema con SLA continuo.",
      en: "We train your staff, leave documentation and maintain the system with continuous SLA.",
    },
  },
];

interface FaqEntry {
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

const COMMERCIAL_FAQ: FaqEntry[] = [
  {
    question: {
      es: "¿A partir de qué tamaño de edificio tiene sentido instalar un BMS?",
      en: "At what building size does a BMS make sense?",
    },
    answer: {
      es: "En la práctica, a partir de unos 3,000 m² o cuando el edificio tiene múltiples sistemas (HVAC, iluminación, accesos, energía) que hoy se operan por separado. Por debajo de eso, KNX puro o automatización por zonas suele ser más costo-efectivo que un BMS completo.",
      en: "In practice, from around 3,000 m² or when the building has multiple systems (HVAC, lighting, access, energy) currently operated separately. Below that, pure KNX or zone-based automation is usually more cost-effective than a full BMS.",
    },
  },
  {
    question: {
      es: "Ya tenemos equipos de HVAC, control de accesos o un PMS de hotel — ¿se pueden integrar?",
      en: "We already have HVAC, access control or a hotel PMS — can they be integrated?",
    },
    answer: {
      es: "Sí. Trabajamos con protocolos abiertos (BACnet, KNX, Modbus) precisamente para integrarnos con equipos existentes en vez de reemplazarlos. Lo evaluamos en la visita técnica y, cuando el equipo lo permite, lo incorporamos al mismo panel de control central.",
      en: "Yes. We work with open protocols (BACnet, KNX, Modbus) specifically to integrate with existing equipment instead of replacing it. We assess this during the site visit and, when the equipment supports it, bring it into the same central control panel.",
    },
  },
  {
    question: {
      es: "¿Cuánto se ahorra realmente en energía con automatización comercial?",
      en: "How much does commercial automation actually save on energy?",
    },
    answer: {
      es: "En proyectos comerciales típicos vemos entre 15% y 30% de reducción en el consumo de climatización, el rubro que más pesa en la factura eléctrica de hoteles y oficinas, gracias a control por ocupación, programación horaria y monitoreo en tiempo real.",
      en: "In typical commercial projects we see 15% to 30% lower HVAC consumption — the line item that weighs most on the electric bill for hotels and offices — thanks to occupancy-based control, scheduling and real-time monitoring.",
    },
  },
  {
    question: {
      es: "¿Qué pasa si ya tenemos un BMS de otro proveedor y no queremos reemplazarlo?",
      en: "What if we already have a BMS from another provider and don't want to replace it?",
    },
    answer: {
      es: "Si el sistema actual habla BACnet o un protocolo abierto, generalmente podemos integrarnos sobre él en lugar de reemplazarlo por completo — sumando sensores, zonas o funciones nuevas sin descartar la inversión existente. Si es un sistema propietario cerrado, evaluamos caso por caso qué conviene más al cliente.",
      en: "If the current system speaks BACnet or another open protocol, we can usually integrate on top of it instead of replacing it entirely — adding sensors, zones or new functions without discarding the existing investment. If it's a closed proprietary system, we assess case by case what makes more sense for the client.",
    },
  },
  {
    question: {
      es: "Operamos 24/7 (hotel, clínica). ¿Dan soporte fuera de horario de oficina?",
      en: "We operate 24/7 (hotel, clinic). Do you support outside office hours?",
    },
    answer: {
      es: "Sí. Para operaciones continuas ofrecemos un modelo de servicio con SLA definido y soporte directo por WhatsApp, no un ticket genérico. El monitoreo remoto nos permite detectar y resolver la mayoría de las fallas antes de que el huésped o el equipo en sitio las note.",
      en: "Yes. For continuous operations we offer a service model with a defined SLA and direct WhatsApp support, not a generic ticket queue. Remote monitoring lets us catch and resolve most faults before the guest or on-site staff even notice.",
    },
  },
  {
    question: {
      es: "¿Cuánto tiempo toma un proyecto comercial, desde el diseño hasta la puesta en marcha?",
      en: "How long does a commercial project take, from design to commissioning?",
    },
    answer: {
      es: "Depende del alcance: una oficina o retail con automatización por zonas se resuelve en 4 a 8 semanas. Un hotel o edificio completo con BMS, KNX y DALI integrados típicamente toma de 3 a 6 meses, coordinado en paralelo con la obra eléctrica para no generar atrasos.",
      en: "It depends on scope: an office or retail space with zone-based automation is done in 4 to 8 weeks. A full hotel or building with integrated BMS, KNX and DALI typically takes 3 to 6 months, coordinated in parallel with the electrical build-out to avoid delays.",
    },
  },
  {
    question: {
      es: "¿Por qué KNX descentralizado y no un sistema con controlador central?",
      en: "Why decentralized KNX instead of a system with a central controller?",
    },
    answer: {
      es: "Porque no hay un punto único de falla ni dependencia de un fabricante. En KNX cada actuador, sensor y pantalla ejecuta su propia lógica sobre el bus: si un equipo falla, una habitación se ve afectada, no el hotel completo. Los sistemas propietarios con un procesador central (por ejemplo Control4, Crestron o Savant) se apagan por completo si ese procesador falla o la marca retira el soporte. KNX es un estándar abierto ISO/IEC 14543-3 con más de 500 fabricantes.",
      en: "Because there is no single point of failure and no vendor dependency. In KNX every actuator, sensor and touchscreen runs its own logic on the bus: if one unit fails, one room is affected, not the whole hotel. Proprietary systems built around a central processor (for example Control4, Crestron or Savant) shut down entirely if that processor fails or the brand drops support. KNX is an open ISO/IEC 14543-3 standard with 500+ manufacturers.",
    },
  },
  {
    question: {
      es: "¿Qué diferencia a DiraSmart de otros integradores de automatización en Panamá?",
      en: "What sets DiraSmart apart from other automation integrators in Panama?",
    },
    answer: {
      es: "Somos KNX Partner certificado, trabajamos solo con protocolos abiertos (KNX, DALI, BACnet, Modbus) y procesamiento local, y somos un solo proveedor para automatización, red, seguridad y soporte, con contacto directo por WhatsApp y SLA definido. Cubrimos desde un local comercial hasta hoteles y edificios completos, con presupuestos de rango medio y premium.",
      en: "We are a certified KNX Partner, we work only with open protocols (KNX, DALI, BACnet, Modbus) and local processing, and we are a single provider for automation, networking, security and support, with direct WhatsApp contact and a defined SLA. We cover everything from a single shop to full hotels and buildings, with mid-range and premium budgets.",
    },
  },
  {
    question: {
      es: "¿Trabajan con presupuestos medios o solo proyectos de gran escala?",
      en: "Do you work with mid-range budgets or only large-scale projects?",
    },
    answer: {
      es: "Ambos. Una oficina, restaurante o local con automatización por zonas es un proyecto de rango medio que se resuelve en semanas. Un hotel o edificio con BMS, KNX y DALI integrados entra en gama alta. En los dos casos cotizamos por proyecto después de una visita técnica sin costo.",
      en: "Both. An office, restaurant or shop with zone-based automation is a mid-range project done in weeks. A hotel or building with integrated BMS, KNX and DALI is high-end. In both cases we quote per project after a free site visit.",
    },
  },
];

const Commercial = () => {
  const { t, language, localePath } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormState("submitting");
    setErrorMsg("");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    const company = (formData.get("company") as string) || (formData.get("name") as string) || "Comercial";
    formData.append("subject", `[DiraSmart Comercial] ${company}`);
    formData.append("from_name", "DiraSmart - Lead comercial");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
        setErrorMsg(json.message || "Unexpected error");
      }
    } catch (err) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : String(err));
    }
  };

  const sizeOptions: { value: string; label: { es: string; en: string } }[] = [
    { value: "<100m2", label: { es: "Menos de 100 m²", en: "Under 100 m²" } },
    { value: "100-500m2", label: { es: "100 a 500 m²", en: "100 to 500 m²" } },
    { value: "500-2000m2", label: { es: "500 a 2 000 m²", en: "500 to 2,000 m²" } },
    { value: ">2000m2", label: { es: "Más de 2 000 m²", en: "Over 2,000 m²" } },
    { value: "unsure", label: { es: "No estoy seguro", en: "Not sure yet" } },
  ];

  const lang = language as Lang;

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <span
        aria-hidden="true"
        className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 z-40 text-foreground/30 text-xs tracking-wide font-light select-none"
      >
        בּ״ה
      </span>
      <main id="main-content">
        {/* Hero with Panama skyline backdrop */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <picture>
              <source srcSet="/comercial/hero-panama.webp" type="image/webp" />
              <img
                src="/comercial/hero-panama.jpg"
                alt=""
                width={2000}
                height={1200}
                className="w-full h-full object-cover opacity-30 dark:opacity-20"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-5">
                {lang === "es" ? "DiraSmart Comercial" : "DiraSmart Commercial"}
              </p>
              <h1 className="font-bold text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground mb-7 text-balance">
                {t("commercial.title")}{" "}
                <span className="text-gradient">{t("commercial.titleHighlight")}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-[1.5] max-w-2xl mx-auto text-pretty mb-9">
                {t("commercial.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 motion-safe:transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Send aria-hidden="true" className="w-4 h-4" />
                  {t("commercial.cta.primary")}
                </a>
                <a
                  href="#sectores"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border bg-background/80 backdrop-blur text-foreground font-medium rounded-full hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {t("commercial.cta.secondary")}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sectors grid */}
        <section id="sectores" className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Sectores" : "Sectors"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.sectors.title")}{" "}
                <span className="text-gradient">{t("commercial.sectors.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.sectors.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {SECTORS.map((s, _i) => (
                <article data-reveal style={revealDelay(_i)}
                  key={s.id}
                  className="group rounded-2xl overflow-hidden border border-border/60 bg-background motion-safe:transition-shadow hover:shadow-lg flex flex-col hover-lift"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    <picture>
                      <source srcSet={s.image.replace(/\.jpg$/, ".webp")} type="image/webp" />
                      <img
                        src={s.image}
                        alt={s.name[lang]}
                        width={1200}
                        height={900}
                        loading="lazy"
                        className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                      />
                    </picture>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <s.icon aria-hidden="true" className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-lg text-foreground leading-tight">
                        {s.name[lang]}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc[lang]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits — what you gain by going smart */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Beneficios" : "Benefits"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {lang === "es" ? "Más control, menos costos, " : "More control, lower costs, "}
                <span className="text-gradient">{lang === "es" ? "mejor experiencia" : "better experience"}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {lang === "es"
                  ? "Beneficios concretos para hoteles, edificios y negocios — desde el primer mes."
                  : "Concrete benefits for hotels, buildings and businesses — from month one."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {BENEFITS.map((b, _i) => (
                <div data-reveal style={revealDelay(_i)}
                  key={b.id}
                  className="rounded-2xl border border-border/60 bg-background p-6 flex flex-col hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon aria-hidden="true" className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {b.title[lang]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Por qué DiraSmart" : "Why DiraSmart"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.diff.title")}{" "}
                <span className="text-gradient">{t("commercial.diff.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.diff.subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* BMS */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-20 mb-4 flex items-center">
                  <img
                    src={bmsLogo}
                    alt="BMS — Building Management System"
                    className="h-20 w-auto block dark:hidden"
                    loading="lazy"
                  />
                  <img
                    src={bmsLogoDark}
                    alt=""
                    aria-hidden="true"
                    className="h-20 w-auto hidden dark:block"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "BMS · Sistema central local" : "BMS · Local Central System"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Plataforma única que vive dentro del edificio y supervisa HVAC, iluminación, energía, accesos, ascensores y vida-seguridad. Procesamiento local — funciona aunque internet caiga, sin depender de la nube de un fabricante extranjero. Visibilidad total, mantenimiento predictivo, reportes para certificación y ahorro energético típico de 15–30%."
                    : "Single platform that lives inside the building and supervises HVAC, lighting, energy, access, elevators and life-safety. Local processing — works even when internet drops, no dependence on a foreign manufacturer's cloud. Total visibility, predictive maintenance, certification-ready reporting and typical 15–30% energy savings."}
                </p>
                <Link
                  to={localePath(`/blog/${lang === "es" ? "bms-sistema-gestion-edificios-comercial" : "bms-building-management-systems"}`)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {lang === "es" ? "Conoce más sobre BMS" : "Learn more about BMS"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* KNX Partner — featured with badge */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-16 mb-5 flex items-center">
                  <img
                    src={knxPartnerBadge}
                    alt="KNX Partner certified"
                    className="h-14 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "KNX Partner certificado" : "Certified KNX Partner"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Estándar mundial ISO/IEC 14543-3 para automatización de edificios, con arquitectura descentralizada: cada dispositivo ejecuta su propia lógica, sin un controlador central que pueda detener el hotel o el edificio. Diseño profesional con la herramienta oficial ETS, integración garantizada entre 500+ marcas y acceso directo al soporte de la KNX Association. La espina dorsal de proyectos comerciales premium."
                    : "ISO/IEC 14543-3 worldwide standard for building automation, with a decentralized architecture: every device runs its own logic, with no central controller that could bring the hotel or building down. Professional design with the official ETS tool, guaranteed integration across 500+ brands and direct access to KNX Association support. The backbone of premium commercial projects."}
                </p>
                <Link
                  to={localePath(`/blog/${lang === "es" ? "knx-panama-automatizacion-premium" : "knx-premium-automation-panama"}`)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {lang === "es" ? "Conoce más sobre KNX" : "Learn more about KNX"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* DALI — iluminación profesional */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-16 mb-5 flex items-center">
                  <img
                    src={daliLogo}
                    alt="DALI-2"
                    className="h-12 w-auto dark:invert"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "DALI · Iluminación profesional" : "DALI · Professional lighting"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Control digital de cada luminaria de forma individual: dimming preciso, escenas, circadian lighting (tunable white) y reporte de fallas por driver. Estándar IEC 62386, compatible con cientos de fabricantes de iluminación arquitectónica."
                    : "Digital per-luminaire control: precise dimming, scenes, circadian lighting (tunable white) and per-driver fault reporting. IEC 62386 standard, compatible with hundreds of architectural lighting manufacturers."}
                </p>
                <Link
                  to={localePath(`/blog/${lang === "es" ? "dali-protocolo-iluminacion-futuro" : "dali-future-of-professional-lighting"}`)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {lang === "es" ? "Conoce más sobre DALI" : "Learn more about DALI"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* BACnet */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-16 mb-5 flex items-center">
                  <img
                    src={bacnetLogo}
                    alt="BACnet"
                    className="h-10 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "BACnet · Protocolo abierto BMS" : "BACnet · Open BMS Protocol"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Estándar ASHRAE / ISO 16484-5 que permite integrar equipos de cualquier fabricante en el BMS — HVAC, medidores, ascensores, generadores. Especificarlo en pliegos te protege del vendor lock-in y abre competencia real en licitaciones."
                    : "ASHRAE / ISO 16484-5 standard that lets you integrate equipment from any manufacturer into the BMS — HVAC, meters, elevators, generators. Specifying it in tenders protects you from vendor lock-in and opens real competition."}
                </p>
                <Link
                  to={localePath(`/blog/${lang === "es" ? "bacnet-protocolo-bms-estandar-ashrae" : "bacnet-protocol-bms-standard"}`)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {lang === "es" ? "Conoce más sobre BACnet" : "Learn more about BACnet"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Proceso" : "Process"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.process.title")}{" "}
                <span className="text-gradient">{t("commercial.process.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.process.subtitle")}
              </p>
            </div>
            <ol className="grid md:grid-cols-5 gap-5 max-w-6xl mx-auto">
              {STEPS.map((step, i) => (
                <li data-reveal style={revealDelay(i)} key={i} className="flex flex-col p-5 rounded-2xl border border-border/60 bg-background hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      aria-hidden="true"
                      className="text-2xl font-bold text-primary/30 leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <step.icon aria-hidden="true" className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{step.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Preguntas frecuentes" : "FAQ"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {lang === "es" ? "Antes de escribirnos, " : "Before you reach out, "}
                <span className="text-gradient">{lang === "es" ? "resolvamos esto" : "let's clear this up"}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {lang === "es"
                  ? "Las preguntas que más nos hacen hoteles, oficinas y administradores de edificios."
                  : "The questions we hear most from hotels, offices and building managers."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {COMMERCIAL_FAQ.map((item, i) => (
                <div data-reveal style={revealDelay(i)}
                  key={i}
                  className="rounded-2xl border border-border/60 bg-background p-6"
                >
                  <h3 className="font-bold text-foreground mb-2 leading-snug">
                    {item.question[lang]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section
          id="contacto"
          className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/8"
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
                {lang === "es" ? "Contacto" : "Get in touch"}
              </p>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.form.title")}{" "}
                <span className="text-gradient">{t("commercial.form.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg text-pretty">
                {t("commercial.form.subtitle")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto bg-background rounded-3xl border border-border/60 p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)]"
              aria-label={t("commercial.form.title")}
            >
              {/* Honeypot — bots fill, humans never see it */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.name")} <span className="text-destructive">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.company")} <span className="text-destructive">*</span>
                  </span>
                  <input
                    type="text"
                    name="company"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="organization"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.email")} <span className="text-destructive">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    spellCheck={false}
                    inputMode="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.phone")}
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={30}
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.sector")} <span className="text-destructive">*</span>
                  </span>
                  <select
                    name="sector"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  >
                    <option value="" disabled>
                      {t("commercial.form.sectorPlaceholder")}
                    </option>
                    {SECTORS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name[lang]}
                      </option>
                    ))}
                    <option value="otros">
                      {lang === "es" ? "Otro / no estoy seguro" : "Other / not sure"}
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">
                    {t("commercial.form.size")} <span className="text-destructive">*</span>
                  </span>
                  <select
                    name="size"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors"
                  >
                    <option value="" disabled>
                      {t("commercial.form.sizePlaceholder")}
                    </option>
                    {sizeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label[lang]}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block mt-4">
                <span className="block text-sm font-medium text-foreground mb-1.5">
                  {t("commercial.form.message")} <span className="text-destructive">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  placeholder={t("commercial.form.messagePlaceholder")}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent motion-safe:transition-colors resize-y"
                />
              </label>

              {formState === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-success/10 text-success border border-success/20"
                >
                  <CheckCircle2 aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">{t("commercial.form.success")}</p>
                </div>
              )}

              {formState === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20"
                >
                  <AlertCircle aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    {t("commercial.form.error")}
                    {errorMsg ? (
                      <span className="block opacity-70 text-xs mt-1">{errorMsg}</span>
                    ) : null}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 motion-safe:transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 aria-hidden="true" className="w-4 h-4 motion-safe:animate-spin" />
                    {t("commercial.form.submitting")}
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" className="w-4 h-4" />
                    {t("commercial.form.submit")}
                  </>
                )}
              </button>
            </form>

            {/* Alt contact */}
            <div className="text-center mt-10 max-w-xl mx-auto">
              <p className="text-sm text-muted-foreground mb-4">{t("commercial.alt.title")}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                <a
                  href="mailto:comercial@dirasmart.com"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  <Mail aria-hidden="true" className="w-4 h-4" />
                  <span className="font-medium">comercial@dirasmart.com</span>
                </a>
                <a
                  href={`https://wa.me/50765956439?text=${encodeURIComponent(t("commercial.alt.whatsappMessage"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  <MessageCircle aria-hidden="true" className="w-4 h-4" />
                  <span className="font-medium">{t("commercial.alt.whatsapp")}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Commercial;

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Award,
  Network,
  Server,
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
} from "lucide-react";
import knxPartnerBadge from "@/assets/brands/knx-partner.png";
import bacnetLogo from "@/assets/brands/bacnet.svg";

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
      es: "Diseñamos la topología KNX/BACnet sobre planos, dimensionamos equipos y entregamos propuesta detallada.",
      en: "We design the KNX/BACnet topology on plans, size the equipment and deliver a detailed proposal.",
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

const Commercial = () => {
  const { t, language } = useLanguage();
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
            <img
              src="/comercial/hero-panama.jpg"
              alt=""
              className="w-full h-full object-cover opacity-30 dark:opacity-20"
              loading="eager"
              fetchPriority="high"
            />
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

        {/* Differentiators */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.diff.title")}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.diff.subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    ? "Diseño profesional con la herramienta oficial ETS, integración garantizada entre 500+ marcas KNX, y acceso al soporte de la KNX Association."
                    : "Professional design with the official ETS tool, guaranteed integration across 500+ KNX brands, and access to KNX Association support."}
                </p>
                <a
                  href="https://www.knx.org/knx-en/for-professionals/community/partners/?company=Dirasmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {lang === "es" ? "Verifícanos en el directorio oficial KNX" : "Verify us in the official KNX directory"}
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* BMS / BACnet */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-16 mb-5 flex items-center">
                  <img
                    src={bacnetLogo}
                    alt="BACnet"
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "BMS · Gestión de edificios" : "BMS · Building Management"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Integración con sistemas de gestión de edificios (BMS) vía BACnet, Modbus, M-Bus y SNMP. Conectamos HVAC comercial, control de accesos, medidores de energía y más. Tu inversión previa no se descarta — la modernizamos."
                    : "Integration with building management systems (BMS) via BACnet, Modbus, M-Bus and SNMP. We connect commercial HVAC, access control, energy meters and more. Your previous investment isn't thrown away — we modernize it."}
                </p>
              </div>

              {/* Local processing */}
              <div className="rounded-3xl border border-border/60 bg-background p-7 flex flex-col items-start">
                <div className="h-16 mb-5 flex items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Server aria-hidden="true" className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2.5">
                  {lang === "es" ? "Procesamiento local" : "Local processing"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? "Tu data y operación se quedan dentro del edificio. Funciona aunque internet caiga y no dependes de la nube de un fabricante extranjero."
                    : "Your data and operation stay inside the building. Works even when internet drops, and you don't depend on a foreign manufacturer's cloud."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors grid */}
        <section id="sectores" className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.sectors.title")}{" "}
                <span className="text-gradient">{t("commercial.sectors.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.sectors.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {SECTORS.map((s) => (
                <article
                  key={s.id}
                  className="group rounded-2xl overflow-hidden border border-border/60 bg-background motion-safe:transition-shadow hover:shadow-lg flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.name[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                    />
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

        {/* Process */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.process.title")}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("commercial.process.subtitle")}
              </p>
            </div>
            <ol className="grid md:grid-cols-5 gap-5 max-w-6xl mx-auto">
              {STEPS.map((step, i) => (
                <li key={i} className="flex flex-col p-5 rounded-2xl border border-border/60 bg-background">
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
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("commercial.form.title")}
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

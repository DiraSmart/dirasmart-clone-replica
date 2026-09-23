import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MonitorSmartphone,
  ShieldCheck,
  WifiOff,
  Award,
  Building2,
  Hotel,
  ArrowRight,
  Check,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Lightbulb,
  ThermometerSun,
  Music2,
  Blinds,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

// Brand assets
import knxPartnerBadge from "@/assets/brands/knx-partner.png";
import daliLogo from "@/assets/brands/dali.png";
import bacnetLogo from "@/assets/brands/bacnet.svg";
import lutronLogo from "@/assets/brands/lutron.png";
import hueLogo from "@/assets/brands/hue.png";
import sonosLogo from "@/assets/brands/sonos.png";
import teslaLogo from "@/assets/brands/tesla.png";
import somfyLogo from "@/assets/brands/somfy.png";
import hikvisionLogo from "@/assets/brands/hikvision.png";

const WEB3FORMS_KEY = "1cd751d7-540f-4cad-8f38-00d2784ff893";
const WHATSAPP_NUMBER = "50765956439";

type Lang = "es" | "en";

const touchscreenAreas = [
  {
    icon: Lightbulb,
    image: "/premium/panel-bedroom-button.jpg",
    title: { es: "Iluminación por escenas", en: "Lighting scenes" },
    desc: {
      es: "Buenos días, cena, cinema, noche — todas las luces de la casa en una sola pulsación.",
      en: "Good morning, dinner, cinema, night — every light in the house with a single tap.",
    },
  },
  {
    icon: ThermometerSun,
    image: "/premium/panel-thermostat-dial.jpg",
    title: { es: "Clima por habitación", en: "Per-room climate" },
    desc: {
      es: "Termostato KNX en cada zona, programación por horario, integración con AC inverter.",
      en: "KNX thermostat in every zone, scheduled programming, inverter AC integration.",
    },
  },
  {
    icon: Music2,
    image: "/premium/panel-ambient-candle.jpg",
    title: { es: "Audio multi-room", en: "Multi-room audio" },
    desc: {
      es: "Sonos, Basalte o Denon HEOS — controlados desde la misma pantalla en pared.",
      en: "Sonos, Basalte or Denon HEOS — controlled from the same wall touchscreen.",
    },
  },
  {
    icon: Blinds,
    image: "/premium/panel-loft-control.jpg",
    title: { es: "Persianas y cortinas", en: "Blinds & curtains" },
    desc: {
      es: "Motorización silenciosa con Somfy o Lutron, posiciones precisas según hora del día.",
      en: "Silent motorization with Somfy or Lutron, exact positions tuned to time of day.",
    },
  },
];

const reliabilityReasons = [
  {
    icon: ShieldCheck,
    title: { es: "Estándar ISO certificado", en: "ISO-certified standard" },
    desc: {
      es: "KNX es un protocolo abierto certificado por ISO desde hace más de 30 años. No depende de un fabricante. Si una empresa cierra, tu casa sigue funcionando.",
      en: "KNX is an open ISO-certified protocol for 30+ years. No vendor lock-in. If a company closes, your home keeps working.",
    },
  },
  {
    icon: Building2,
    title: { es: "Descentralizado, sin punto único de falla", en: "Decentralized, no single point of failure" },
    desc: {
      es: "No hay servidor ni controlador central que pueda apagar toda la casa. Cada pantalla, sensor y actuador ejecuta su propia lógica sobre el bus KNX. Si un equipo falla, el resto sigue funcionando.",
      en: "No server or central controller can shut down the whole house. Every screen, sensor and actuator runs its own logic on the KNX bus. If one unit fails, the rest keep working.",
    },
  },
  {
    icon: WifiOff,
    title: { es: "Sin nube, sin internet", en: "No cloud, no internet" },
    desc: {
      es: "Bus cableado dedicado. Si tu internet se cae, las pantallas siguen controlando todo. Si el fabricante apaga sus servidores, no te enteras.",
      en: "Dedicated wired bus. If your internet drops, the panels keep controlling everything. If the manufacturer shuts down servers, you don't even notice.",
    },
  },
  {
    icon: Award,
    title: { es: "Mismo equipo que hoteles 5★", en: "Same equipment as 5★ hotels" },
    desc: {
      es: "Las marcas en este catálogo son las que se especifican en hoteles, museos y edificios corporativos del mundo entero. No es una versión 'doméstica' rebajada.",
      en: "The brands in this catalog are specified in hotels, museums and corporate buildings worldwide. Not a watered-down 'consumer' version.",
    },
  },
];

const catalogBrands = [
  { name: "Basalte", origin: "Bélgica", focus: { es: "Pantallas y keypads", en: "Touchscreens & keypads" } },
  { name: "Gira", origin: "Alemania", focus: { es: "Esprit, Tastsensor 4", en: "Esprit, Tastsensor 4" } },
  { name: "Jung", origin: "Alemania", focus: { es: "LS 990, LS Zero", en: "LS 990, LS Zero" } },
  { name: "ABB free@home", origin: "Suiza", focus: { es: "Sistema KNX integrado", en: "Integrated KNX system" } },
  { name: "Hager", origin: "Alemania", focus: { es: "Tableros y protección", en: "Panels & protection" } },
  { name: "Lutron HomeWorks", origin: "Estados Unidos", focus: { es: "Iluminación premium", en: "Premium lighting" } },
  { name: "Theben", origin: "Alemania", focus: { es: "Termostatos y presencia", en: "Thermostats & presence" } },
  { name: "MDT", origin: "Alemania", focus: { es: "Actuadores y dimmers", en: "Actuators & dimmers" } },
];

const PREMIUM_FAQ = [
  {
    question: { es: "¿Qué incluye el catálogo Premium de DiraSmart?", en: "What does the DiraSmart Premium catalog include?" },
    answer: {
      es: "El mismo equipamiento KNX que instalamos en hoteles y edificios corporativos, para residencias: pantallas táctiles KNX en pared, keypads, termostatos por zona, iluminación por escenas, audio multi-room y persianas motorizadas, con marcas como Basalte, Gira, Jung, ABB, Hager, Lutron, Theben y MDT. No es un servicio distinto: es el mismo servicio DiraSmart con el nivel de producto más alto del mercado.",
      en: "The same KNX equipment we install in hotels and corporate buildings, for residences: wall-mounted KNX touchscreens, keypads, per-zone thermostats, lighting scenes, multi-room audio and motorized blinds, with brands like Basalte, Gira, Jung, ABB, Hager, Lutron, Theben and MDT. It is not a different service: it is the same DiraSmart service with the highest product tier on the market.",
    },
  },
  {
    question: { es: "¿Cuánto cuesta una instalación KNX en Panamá?", en: "How much does a KNX installation cost in Panama?" },
    answer: {
      es: "Una instalación KNX completa entra en gama alta y depende de la cantidad de puntos de control, pantallas y zonas de clima. Se define en fase de obra o remodelación integral. La consulta y la propuesta inicial no tienen costo; no publicamos tarifas fijas porque cada proyecto se dimensiona sobre planos.",
      en: "A full KNX installation is high-end and depends on the number of control points, touchscreens and climate zones. It is defined during construction or a full remodel. The consultation and initial proposal are free; we do not publish fixed rates because every project is sized on drawings.",
    },
  },
  {
    question: { es: "¿KNX necesita un servidor o controlador central?", en: "Does KNX need a server or central controller?" },
    answer: {
      es: "No. KNX es un sistema descentralizado: la inteligencia está repartida en cada dispositivo y se comunican por un bus cableado. Un servidor local es opcional para visualización, app y escenas avanzadas, pero la casa funciona sin él. Si un equipo falla, el resto sigue operando.",
      en: "No. KNX is a decentralized system: the intelligence is distributed across every device and they communicate over a wired bus. A local server is optional for visualization, the app and advanced scenes, but the house works without it. If one unit fails, the rest keep running.",
    },
  },
  {
    question: { es: "¿Puedo tener KNX en una casa ya construida?", en: "Can I have KNX in an already-built house?" },
    answer: {
      es: "KNX requiere bus cableado, por lo que es ideal en fase de planos, obra gris o remodelación integral. Para casas terminadas sin obra ofrecemos la alternativa inalámbrica de gama media (Zigbee, Z-Wave, WiFi) con el mismo servicio y la misma app.",
      en: "KNX needs a wired bus, so it is ideal at the drawing, shell or full-remodel stage. For finished homes without construction work we offer the mid-range wireless alternative (Zigbee, Z-Wave, WiFi) with the same service and the same app.",
    },
  },
  {
    question: { es: "¿Qué marcas KNX instalan?", en: "Which KNX brands do you install?" },
    answer: {
      es: "Basalte (Bélgica), Gira, Jung, Hager, Theben y MDT (Alemania), ABB free@home (Suiza) y Lutron HomeWorks (Estados Unidos). Si una marca es KNX o tiene gateway KNX, casi siempre podemos integrarla.",
      en: "Basalte (Belgium), Gira, Jung, Hager, Theben and MDT (Germany), ABB free@home (Switzerland) and Lutron HomeWorks (United States). If a brand is KNX or has a KNX gateway, we can almost always integrate it.",
    },
  },
];

const commercialBrandsForBridge = [
  { src: knxPartnerBadge, name: "KNX" },
  { src: daliLogo, name: "DALI" },
  { src: bacnetLogo, name: "BACnet" },
  { src: lutronLogo, name: "Lutron" },
  { src: hueLogo, name: "Hue" },
  { src: sonosLogo, name: "Sonos" },
  { src: teslaLogo, name: "Tesla" },
  { src: somfyLogo, name: "Somfy" },
  { src: hikvisionLogo, name: "Hikvision" },
];

const Premium = () => {
  const { language, localePath } = useLanguage();
  const lang = language as Lang;
  const es = lang === "es";

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormState("submitting");
    setErrorMsg("");
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    const name = (formData.get("name") as string) || "Premium";
    formData.append("subject", `[DiraSmart Premium] ${name}`);
    formData.append("from_name", "DiraSmart - Lead premium residencial");
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
        setErrorMsg(json.message || (es ? "Error inesperado." : "Unexpected error."));
      }
    } catch (err) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : String(err));
    }
  };

  const whatsappMessage = es
    ? "Hola, me interesa el catálogo Premium de DiraSmart para mi casa."
    : "Hello, I'm interested in the DiraSmart Premium catalog for my home.";

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

        {/* ───────────────── HERO ───────────────── */}
        <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <img
              src="/premium/bg-apartment.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20 dark:opacity-15"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          </div>

          <div className="container-custom px-4 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">

              {/* LEFT: copy */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-5">
                  {es ? "DiraSmart Premium" : "DiraSmart Premium"}
                </p>
                <h1 className="font-bold text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.05] tracking-[-0.02em] text-foreground mb-6 text-balance">
                  {es ? (
                    <>
                      El equipamiento de hoteles y edificios.{" "}
                      <span className="text-gradient">Ahora en tu casa.</span>
                    </>
                  ) : (
                    <>
                      The equipment from hotels and buildings.{" "}
                      <span className="text-gradient">Now in your home.</span>
                    </>
                  )}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-[1.55] max-w-xl text-pretty mb-8">
                  {es
                    ? "Pantallas KNX en pared, marcas reconocidas mundialmente, instalación cableada y descentralizada desde la obra. El mismo equipo enterprise-grade que instalamos en hoteles de Panamá, en formato residencial."
                    : "Wall-mounted KNX touchscreens, world-recognized brands, wired and decentralized installation from the construction stage. The same enterprise-grade equipment we install in Panama hotels, in residential form."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                  <a
                    href="#hablemos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
                  >
                    {es ? "Hablemos sobre tu proyecto" : "Let's talk about your project"}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-card transition-colors motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
                  >
                    {es ? "Ver catálogo de marcas" : "See brand catalog"}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <img src={knxPartnerBadge} alt="KNX Partner" className="h-8 w-auto" />
                  <span>
                    {es ? "Partner certificado KNX desde 2026" : "KNX-certified partner since 2026"}
                  </span>
                </div>
              </motion.div>

              {/* RIGHT: featured product photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative"
              >
                <div
                  className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] lg:aspect-[5/6]"
                  style={{ boxShadow: "var(--shadow-card-hover)" }}
                >
                  <img
                    src="/premium/panel-kitchen-hex.jpg"
                    alt={
                      es
                        ? "Pantalla KNX en pared de cocina premium"
                        : "KNX touchscreen on premium kitchen wall"
                    }
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {es ? "Pantalla en pared" : "Wall touchscreen"}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/70 hidden sm:inline">
                      KNX
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────────── BRIDGE A /COMERCIAL ───────────────── */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container-custom px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Hotel className="w-4 h-4 text-primary" />
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium">
                  {es ? "Mismo equipo. Mismas marcas." : "Same equipment. Same brands."}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5 text-balance">
                {es ? (
                  <>
                    Lo que instalamos en hoteles y edificios,
                    <br className="hidden md:block" /> ahora <span className="text-primary">en formato residencial</span>.
                  </>
                ) : (
                  <>
                    What we install in hotels and buildings,
                    <br className="hidden md:block" /> now <span className="text-primary">in residential form</span>.
                  </>
                )}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                {es
                  ? "Llevamos años especificando KNX, DALI y BACnet en proyectos comerciales. El catálogo Premium residencial es exactamente el mismo equipo — adaptado a una casa."
                  : "We've spent years specifying KNX, DALI and BACnet in commercial projects. The Premium residential catalog is exactly the same equipment — adapted for a home."}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 mb-10 opacity-70">
                {commercialBrandsForBridge.map((b) => (
                  <img
                    key={b.name}
                    src={b.src}
                    alt={b.name}
                    className="h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition"
                  />
                ))}
              </div>

              <Link
                to={localePath("/comercial")}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                {es ? "Ver lo que hacemos en proyectos comerciales" : "See our commercial work"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ───────────────── PANTALLAS KNX ───────────────── */}
        <section className="py-20 md:py-28">
          <div className="container-custom px-4">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
                {es ? "Pantallas KNX en pared" : "KNX wall touchscreens"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                {es ? (
                  <>
                    Adiós a buscar tu celular para{" "}
                    <span className="text-gradient">apagar la luz</span>.
                  </>
                ) : (
                  <>
                    No more searching for your phone to{" "}
                    <span className="text-gradient">turn off the lights</span>.
                  </>
                )}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {es
                  ? "Pantallas táctiles permanentes en pared, ubicadas donde realmente las necesitas: junto a la puerta, en la cabecera de la cama, en la cocina. Control directo de cada sistema de la casa."
                  : "Permanent wall touchscreens, placed where you actually need them: by the door, at the bed head, in the kitchen. Direct control of every system in the home."}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {touchscreenAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title.es}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover transition-shadow"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={area.image}
                        alt={area.title[lang]}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-background/85 backdrop-blur-md border border-border flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                        {area.title[lang]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.desc[lang]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────── UN SISTEMA QUE NO FALLA ───────────────── */}
        <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
          <div className="container-custom px-4">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-14"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
                {es ? "La promesa central" : "The core promise"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                {es ? (
                  <>
                    Un sistema <span className="text-gradient">que no falla</span>.
                  </>
                ) : (
                  <>
                    A system <span className="text-gradient">that doesn't fail</span>.
                  </>
                )}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {es
                  ? "Por qué este equipamiento funciona año tras año mientras los kits de smart home WiFi colapsan."
                  : "Why this equipment keeps working year after year while WiFi smart home kits collapse."}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {reliabilityReasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title.es}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-7"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                      {r.title[lang]}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {r.desc[lang]}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────── CATÁLOGO DE MARCAS ───────────────── */}
        <section id="catalogo" className="py-20 md:py-28">
          <div className="container-custom px-4">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
                {es ? "Catálogo Premium" : "Premium catalog"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                {es ? (
                  <>
                    Las <span className="text-gradient">marcas líderes</span> del estándar KNX mundial.
                  </>
                ) : (
                  <>
                    The <span className="text-gradient">leading brands</span> of the global KNX standard.
                  </>
                )}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                {es
                  ? "Fabricantes europeos y estadounidenses con décadas de presencia en proyectos arquitectónicos. Catálogo curado, no improvisado."
                  : "European and US manufacturers with decades of presence in architectural projects. A curated catalog, not improvised."}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {catalogBrands.map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className="bg-card p-6 md:p-8 hover:bg-muted/30 transition-colors"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {b.origin}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2 leading-tight">
                    {b.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {b.focus[lang]}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
              {es
                ? "¿Una marca específica que tienes en mente? Pregúntanos. Si es KNX o tiene gateway KNX, casi siempre podemos integrarla."
                : "A specific brand in mind? Ask us. If it's KNX or has a KNX gateway, we can almost always integrate it."}
            </p>
          </div>
        </section>

        {/* ───────────────── PREGUNTAS FRECUENTES ───────────────── */}
        <section id="faq" className="py-20 md:py-28 bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
                {es ? "Preguntas frecuentes" : "FAQ"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                {es ? (
                  <>
                    Lo que nos preguntan <span className="text-gradient">antes de decidir</span>.
                  </>
                ) : (
                  <>
                    What people ask <span className="text-gradient">before deciding</span>.
                  </>
                )}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {PREMIUM_FAQ.map((item, i) => (
                <motion.div
                  key={item.question.es}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-6"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">{item.question[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── HABLEMOS ───────────────── */}
        <section id="hablemos" className="py-20 md:py-28 bg-muted/30 border-t border-border">
          <div className="container-custom px-4">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
                {es ? "Hablemos" : "Let's talk"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                {es ? (
                  <>
                    Cuéntanos sobre tu <span className="text-gradient">proyecto</span>.
                  </>
                ) : (
                  <>
                    Tell us about your <span className="text-gradient">project</span>.
                  </>
                )}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {es
                  ? "Agenda una consulta o escríbenos directo por WhatsApp. Respondemos en menos de 24 horas."
                  : "Schedule a consultation or message us directly on WhatsApp. We reply within 24 hours."}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 max-w-5xl mx-auto">

              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-7 md:p-9"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {es ? "Agendar consulta" : "Schedule consultation"}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {es
                    ? "Para proyectos en fase de planos, obra gris o remodelación integral."
                    : "For projects at planning, construction or full remodel stage."}
                </p>

                {formState === "success" ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <CheckCircle2 className="w-12 h-12 text-primary mb-3" strokeWidth={1.5} />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {es ? "Recibido. Gracias." : "Received. Thank you."}
                    </h4>
                    <p className="text-muted-foreground max-w-sm">
                      {es
                        ? "Te contactaremos en menos de 24 horas para coordinar."
                        : "We'll be in touch within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field name="name" label={es ? "Nombre" : "Name"} required />
                      <Field name="phone" label={es ? "Teléfono / WhatsApp" : "Phone / WhatsApp"} type="tel" required />
                    </div>
                    <Field name="email" label={es ? "Correo" : "Email"} type="email" required />
                    <Field
                      name="project"
                      label={es ? "Ubicación del proyecto" : "Project location"}
                      placeholder={es ? "Costa del Este, Coronado, Punta Pacífica…" : "Costa del Este, Coronado, Punta Pacífica…"}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {es ? "Cuéntanos brevemente" : "Brief description"}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder={
                          es
                            ? "Tamaño aproximado, fase de obra, qué te interesa integrar…"
                            : "Approximate size, construction phase, what you'd like to integrate…"
                        }
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none"
                      />
                    </div>

                    {formState === "error" && (
                      <div className="flex items-start gap-2 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {es ? "Enviando…" : "Sending…"}
                        </>
                      ) : (
                        <>
                          {es ? "Enviar consulta" : "Send"}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* WHATSAPP */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 md:p-9 flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {es ? "WhatsApp directo" : "Direct WhatsApp"}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {es
                    ? "Para una conversación más rápida. Atención personalizada en horario comercial Panamá."
                    : "For a quicker conversation. Personalized attention in Panama business hours."}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
                >
                  {es ? "Escribir por WhatsApp" : "Message on WhatsApp"}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-5 pt-5 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {es ? "En línea — responde en ~12 min." : "Online — replies in ~12 min."}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
    />
  </div>
);

export default Premium;

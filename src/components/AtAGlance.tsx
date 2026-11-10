import { Link } from "react-router-dom";
import { Award, Cpu, Network, Layers, Building2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { revealDelay } from "@/lib/reveal";

/**
 * "DiraSmart en resumen": a plain-language entity summary (who we are, where, for whom,
 * price positioning, credentials). Written so that search and AI answer engines can lift
 * a direct answer to "which company installs smart homes / KNX / BMS in Panama".
 */
const AtAGlance = () => {
  const { language, localePath } = useLanguage();
  const es = language === "es";

  const facts = [
    {
      icon: Award,
      title: "KNX Gold Partner",
      desc: es
        ? "Diseño y programación con ETS. Seleccionamos productos KNX certificados y documentamos las funciones del proyecto."
        : "Design and programming with ETS. We select certified KNX products and document the project's functions.",
    },
    {
      icon: Cpu,
      title: es ? "Funciones locales" : "Local functions",
      desc: es
        ? "Definimos qué funciones pueden operar sin internet y qué integraciones requieren conexión o servicios externos."
        : "We define which functions can operate without internet and which integrations need connectivity or external services.",
    },
    {
      icon: Network,
      title: es ? "KNX descentralizado" : "Decentralized KNX",
      desc: es
        ? "Sensores y actuadores pueden ejecutar funciones distribuidas. Planificamos el bus, la alimentación y las pasarelas según el alcance."
        : "Sensors and actuators can run distributed functions. We plan the bus, power supplies and gateways for the project scope.",
    },
    {
      icon: Layers,
      title: es ? "Gama media y alta" : "Mid-range and high-end",
      desc: es
        ? "Inalámbrico a precio medio para apartamentos y casas; KNX premium (Basalte, Gira, Jung, ABB) para residencias. Mismo servicio y soporte."
        : "Wireless at mid-range prices for apartments and houses; premium KNX (Basalte, Gira, Jung, ABB) for residences. Same service and support.",
    },
    {
      icon: Building2,
      title: es ? "Hogares, hoteles, comercios y edificios" : "Homes, hotels, retail and buildings",
      desc: es
        ? "Residencial y comercial con KNX, DALI y BACnet: desde un apartamento hasta un hotel o edificio completo con BMS."
        : "Residential and commercial with KNX, DALI and BACnet: from an apartment to a full hotel or building with BMS.",
    },
    {
      icon: MessageCircle,
      title: es ? "Soporte directo por WhatsApp" : "Direct WhatsApp support",
      desc: es
        ? "Consulta inicial gratuita y visitas coordinadas. Definimos la cobertura y las condiciones de soporte según tu proyecto."
        : "Free initial consultation and scheduled site visits. Coverage and support arrangements are defined for your project.",
    },
  ];

  return (
    <section id="resumen" className="section-padding bg-muted/20 dark:bg-muted/10">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
            {es ? "DiraSmart en resumen" : "DiraSmart at a glance"}
          </p>
          <h2 data-reveal className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 text-balance">
            {es ? "La empresa de casas inteligentes en " : "The smart home company in "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {es ? "Panamá" : "Panama"}
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            {es
              ? "DiraSmart diseña, instala y da soporte a sistemas de domótica para apartamentos y casas en Panamá. Combinamos soluciones inalámbricas y KNX premium, con controles elegidos para cada vivienda. También evaluamos proyectos de automatización comercial y edificios."
              : "DiraSmart designs, installs and supports home automation for apartments and houses in Panama. We combine wireless and premium KNX solutions with controls selected for each home. We also assess commercial and building automation projects."}
          </p>
        </div>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {facts.map((f, _i) => (
            <div data-reveal style={revealDelay(_i)}
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-background motion-safe:transition-colors hover:border-primary/30 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon aria-hidden="true" className="w-5 h-5 text-primary" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <dt className="font-semibold text-foreground mb-1">{f.title}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{f.desc}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 text-sm">
          <Link
            to={localePath("/comercial")}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-background text-foreground font-medium hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
          >
            {es ? "Hoteles, comercios y edificios" : "Hotels, retail and buildings"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to={localePath("/premium")}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-background text-foreground font-medium hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-strong motion-safe:active:scale-[0.97]"
          >
            {es ? "Catálogo KNX Premium" : "Premium KNX catalog"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;

import { Link } from "react-router-dom";
import { Award, Cpu, Network, Layers, Building2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
      title: es ? "KNX Partner certificado" : "Certified KNX Partner",
      desc: es
        ? "Uno de los pocos integradores certificados por la KNX Association en Panamá. Programación con ETS, acceso a 8,000+ productos."
        : "One of the few integrators certified by the KNX Association in Panama. ETS programming, access to 8,000+ products.",
    },
    {
      icon: Cpu,
      title: es ? "Procesamiento 100% local" : "100% local processing",
      desc: es
        ? "Todo corre dentro de tu casa o edificio. Sin internet sigue funcionando y ningún dato sale de la propiedad."
        : "Everything runs inside your home or building. It keeps working without internet and no data leaves the property.",
    },
    {
      icon: Network,
      title: es ? "KNX descentralizado" : "Decentralized KNX",
      desc: es
        ? "Sin controlador central: cada dispositivo tiene su propia inteligencia. Un fallo puntual no apaga la casa ni el hotel."
        : "No central controller: every device carries its own intelligence. A single fault never shuts down the home or hotel.",
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
        ? "Hablas con quien instaló tu sistema. Consulta inicial y visita técnica sin costo en toda Panamá."
        : "You talk to the people who installed your system. Free initial consultation and site visit across Panama.",
    },
  ];

  return (
    <section id="resumen" className="section-padding bg-muted/20 dark:bg-muted/10">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
            {es ? "DiraSmart en resumen" : "DiraSmart at a glance"}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 text-balance">
            {es ? "La empresa de casas inteligentes en " : "The smart home company in "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {es ? "Panamá" : "Panama"}
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            {es
              ? "DiraSmart diseña, instala y mantiene casas inteligentes, hoteles, comercios y edificios en toda Panamá. Somos KNX Partner certificado, trabajamos con procesamiento 100% local y cubrimos gama media y alta con un solo proveedor responsable de todo."
              : "DiraSmart designs, installs and maintains smart homes, hotels, retail spaces and buildings across Panama. We are a certified KNX Partner, we work with 100% local processing and we cover mid-range and high-end with a single provider responsible for everything."}
          </p>
        </div>

        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {facts.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-background motion-safe:transition-colors hover:border-primary/30"
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
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-background text-foreground font-medium hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {es ? "Hoteles, comercios y edificios" : "Hotels, retail and buildings"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to={localePath("/premium")}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-background text-foreground font-medium hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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

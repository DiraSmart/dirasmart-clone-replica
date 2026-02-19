import {
  Wrench,
  Smartphone,
  Link,
  Mic,
  ShieldCheck,
  HeartHandshake } from
"lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const services = [
  {
    icon: Wrench,
    titleKey: "services.installation",
    descKey: "services.installationDesc",
    color: "primary"
  },
  {
    icon: Smartphone,
    titleKey: "services.customApp",
    descKey: "services.customAppDesc",
    color: "accent"
  },
  {
    icon: Link,
    titleKey: "services.compatibility",
    descKey: "services.compatibilityDesc",
    color: "primary"
  },
  {
    icon: Mic,
    titleKey: "services.localControl",
    descKey: "services.localControlDesc",
    color: "accent"
  },
  {
    icon: ShieldCheck,
    titleKey: "services.network",
    descKey: "services.networkDesc",
    color: "primary"
  },
  {
    icon: HeartHandshake,
    titleKey: "services.continuousSupport",
    descKey: "services.continuousSupportDesc",
    color: "accent"
  }];


  return (
    <section id="servicios" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'hsl(220 40% 13%)' }}>
      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-3 sm:px-4 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {t("services.title")}{" "}
            <span className="text-gradient">{t("services.titleHighlight")}</span>?
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isPrimary = service.color === "primary";
            return (
              <div
                key={service.titleKey}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 transition-all duration-400 hover:-translate-y-1 hover:shadow-md ${
                isPrimary ? "hover:border-primary/40 hover:bg-white/10" : "hover:border-accent/40 hover:bg-white/10"} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm ${
                  isPrimary ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isPrimary ? "via-primary/30" : "via-accent/30"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>);

};

export default ServicesGrid;
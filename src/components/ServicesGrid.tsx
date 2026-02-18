import {
  Wrench,
  Smartphone,
  Link,
  Radio,
  Wifi,
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
    icon: Radio,
    titleKey: "services.localControl",
    descKey: "services.localControlDesc",
    color: "accent"
  },
  {
    icon: Wifi,
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
    <section id="servicios" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-3 sm:px-4 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("services.title")}{" "}
            <span className="text-gradient">{t("services.titleHighlight")}</span>?
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) =>
          <div
            key={service.titleKey}
            className={`group relative bg-muted/20 rounded-2xl p-7 border border-border/50 hover:border-${service.color}/40 hover:bg-${service.color}/5 transition-all duration-400 hover:-translate-y-1 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
            }
            style={{ transitionDelay: `${index * 80}ms` }}>

              {/* Icon */}
              <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm ${
              service.color === "primary" ?
              "bg-primary/10 text-primary" :
              "bg-accent/10 text-accent"}`
              }>

                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>

              {/* Bottom accent line */}
              <div
              className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-${service.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesGrid;
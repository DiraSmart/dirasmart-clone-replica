import { 
  Wrench, 
  Smartphone, 
  Link, 
  Radio, 
  Wifi, 
  HeartHandshake 
} from "lucide-react";
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
      color: "primary",
    },
    {
      icon: Smartphone,
      titleKey: "services.customApp",
      descKey: "services.customAppDesc",
      color: "accent",
    },
    {
      icon: Link,
      titleKey: "services.compatibility",
      descKey: "services.compatibilityDesc",
      color: "primary",
    },
    {
      icon: Radio,
      titleKey: "services.localControl",
      descKey: "services.localControlDesc",
      color: "accent",
    },
    {
      icon: Wifi,
      titleKey: "services.network",
      descKey: "services.networkDesc",
      color: "primary",
    },
    {
      icon: HeartHandshake,
      titleKey: "services.continuousSupport",
      descKey: "services.continuousSupportDesc",
      color: "accent",
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-muted/20 dark:bg-muted/10">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-4">
            Servicios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`group bg-background rounded-xl p-6 border border-border/50 hover:border-${service.color}/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
              }`}>
                <service.icon className={`w-5 h-5 ${
                  service.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

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
import TiltCard from "./TiltCard";

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      titleKey: "services.installation",
      descKey: "services.installationDesc",
    },
    {
      icon: Smartphone,
      titleKey: "services.customApp",
      descKey: "services.customAppDesc",
    },
    {
      icon: Link,
      titleKey: "services.compatibility",
      descKey: "services.compatibilityDesc",
    },
    {
      icon: Radio,
      titleKey: "services.localControl",
      descKey: "services.localControlDesc",
    },
    {
      icon: Wifi,
      titleKey: "services.network",
      descKey: "services.networkDesc",
    },
    {
      icon: HeartHandshake,
      titleKey: "services.continuousSupport",
      descKey: "services.continuousSupportDesc",
    },
  ];

  return (
    <section id="servicios" className="section-padding section-divider bg-muted/40 dark:bg-muted/20">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">
            {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("services.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <TiltCard key={service.titleKey}>
              <div
                className={`bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-500 h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors`}>
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t(service.descKey)}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

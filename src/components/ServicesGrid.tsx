import { 
  Wrench, 
  Palette, 
  Zap, 
  Link, 
  Brain, 
  Globe, 
  MapPin, 
  Settings, 
  Headphones 
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
      icon: Palette,
      titleKey: "services.design",
      descKey: "services.designDesc",
    },
    {
      icon: Zap,
      titleKey: "services.automation",
      descKey: "services.automationDesc",
    },
    {
      icon: Link,
      titleKey: "services.compatibility",
      descKey: "services.compatibilityDesc",
    },
    {
      icon: Brain,
      titleKey: "services.adaptation",
      descKey: "services.adaptationDesc",
    },
    {
      icon: Globe,
      titleKey: "services.access",
      descKey: "services.accessDesc",
    },
    {
      icon: MapPin,
      titleKey: "services.local",
      descKey: "services.localDesc",
    },
    {
      icon: Settings,
      titleKey: "services.maintenance",
      descKey: "services.maintenanceDesc",
    },
    {
      icon: Headphones,
      titleKey: "services.support",
      descKey: "services.supportDesc",
    },
  ];

  return (
    <section id="servicios" className="section-padding section-divider bg-muted/40 dark:bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={service.titleKey}>
              <div
                className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                  <service.icon className={`w-7 h-7 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground">
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

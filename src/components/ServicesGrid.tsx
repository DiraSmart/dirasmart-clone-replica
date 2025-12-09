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
import TiltCard from "./TiltCard";

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Wrench,
      title: "Instalación Completa",
      description: "Instalamos todo el sistema de domótica en tu hogar de forma profesional",
    },
    {
      icon: Palette,
      title: "Diseño Personalizado",
      description: "Diseñamos soluciones adaptadas a tus necesidades específicas",
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Automatizamos todos los procesos de tu hogar inteligente",
    },
    {
      icon: Link,
      title: "Compatibilidad",
      description: "Integramos dispositivos de múltiples marcas y protocolos",
    },
    {
      icon: Brain,
      title: "Adaptación Inteligente",
      description: "El sistema aprende de tus hábitos y se adapta automáticamente",
    },
    {
      icon: Globe,
      title: "Acceso Universal",
      description: "Controla tu hogar desde cualquier lugar del mundo",
    },
    {
      icon: MapPin,
      title: "Local y Confiable",
      description: "Servicio local con garantía y soporte continuo",
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      description: "Mantenimiento preventivo y actualizaciones periódicas",
    },
    {
      icon: Headphones,
      title: "Servicio Técnico",
      description: "Soporte técnico 24/7 para resolver cualquier incidencia",
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            ¿Qué <span className="text-gradient">ofrecemos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un servicio integral para transformar tu hogar en un espacio inteligente y conectado
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={service.title}>
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
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
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

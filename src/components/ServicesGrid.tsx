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

const ServicesGrid = () => {
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
            ¿Qué <span className="text-accent">ofrecemos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un servicio integral para transformar tu hogar en un espacio inteligente y conectado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
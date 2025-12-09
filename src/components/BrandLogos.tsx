import { useEffect, useRef } from "react";
import { Wifi, Radio, Bluetooth, Zap, Home, Lightbulb, Thermometer, Lock, Speaker, Tv, Camera, Fan, Plug, Sun, Shield } from "lucide-react";

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: "Philips Hue", icon: Lightbulb },
    { name: "Nest", icon: Thermometer },
    { name: "SmartThings", icon: Home },
    { name: "Yale", icon: Lock },
    { name: "Sonos", icon: Speaker },
    { name: "Samsung", icon: Tv },
    { name: "Ring", icon: Camera },
    { name: "Dyson", icon: Fan },
    { name: "TP-Link", icon: Plug },
    { name: "IKEA Trådfri", icon: Sun },
    { name: "Aqara", icon: Shield },
    { name: "Lutron", icon: Lightbulb },
    { name: "Ecobee", icon: Thermometer },
    { name: "August", icon: Lock },
    { name: "Nanoleaf", icon: Sun },
  ];

  const protocols = [
    { name: "WiFi", icon: Wifi, color: "from-blue-500 to-blue-600" },
    { name: "Zigbee", icon: Radio, color: "from-green-500 to-green-600" },
    { name: "Z-Wave", icon: Zap, color: "from-purple-500 to-purple-600" },
    { name: "BLE", icon: Bluetooth, color: "from-cyan-500 to-cyan-600" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas <span className="text-gradient">compatibles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las principales marcas y protocolos del mercado
          </p>
        </div>

        {/* Brands Carousel */}
        <div className="mb-12">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate brands for infinite scroll effect */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 bg-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border min-w-[140px]"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <brand.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm text-center">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Protocols */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Protocolos soportados</h3>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-card/50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${protocol.color}`}>
                  <protocol.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-foreground">{protocol.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

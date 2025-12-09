import { useEffect, useRef } from "react";
import brandsImage from "@/assets/brands-logos.png";
import protocolsImage from "@/assets/protocols-logos.png";

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    "Google Assistant", "Amazon Alexa", "SmartThings", "Tuya", "Smartlife",
    "HomeKit", "Shelly", "Google Nest", "Ecobee", "Ring",
    "Sonos", "SwitchBot", "August", "Leviton", "Aqara",
    "Tapo", "Yale", "Xiaomi", "Philips Hue", "Reolink",
    "Insteon", "Hikvision", "Somfy", "Lutron Caseta", "Motionblinds"
  ];

  const protocols = ["KNX", "Zigbee", "Z-Wave", "Matter", "MQTT"];

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

        {/* Brands Section */}
        <div className="mb-12">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
            <img 
              src={brandsImage} 
              alt="Marcas compatibles: Google Assistant, Amazon Alexa, SmartThings, Tuya, Smartlife, HomeKit, Shelly, Google Nest, Ecobee, Ring, Sonos, SwitchBot, August, Leviton, Aqara, Tapo, Yale, Xiaomi, Philips Hue, Reolink, Insteon, Hikvision, Somfy, Lutron Caseta, Motionblinds"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Protocols Section */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Protocolos soportados</h3>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg max-w-3xl mx-auto">
            <img 
              src={protocolsImage} 
              alt="Protocolos soportados: KNX, Zigbee, Z-Wave, Matter, MQTT"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

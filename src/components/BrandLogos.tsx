import { useEffect, useRef } from "react";

// Brand logos
import zigbeeLogo from "@/assets/brands/zigbee.png";
import zwaveLogo from "@/assets/brands/zwave.png";
import somfyLogo from "@/assets/brands/somfy.png";
import sonosLogo from "@/assets/brands/sonos.png";
import switchbotLogo from "@/assets/brands/switchbot.png";
import teslaLogo from "@/assets/brands/tesla.png";
import tplinkLogo from "@/assets/brands/tplink.png";
import tuyaLogo from "@/assets/brands/tuya.png";
import unifiLogo from "@/assets/brands/unifi.png";
import yaleLogo from "@/assets/brands/yale.png";
import lgLogo from "@/assets/brands/lg.png";
import hikvisionLogo from "@/assets/brands/hikvision.png";
import alexaLogo from "@/assets/brands/alexa.png";
import hueLogo from "@/assets/brands/hue.png";
import ecobeeLogo from "@/assets/brands/ecobee.png";
import smartthingsLogo from "@/assets/brands/smartthings.png";
import shellyLogo from "@/assets/brands/shelly.png";

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: "Alexa", logo: alexaLogo },
    { name: "SmartThings", logo: smartthingsLogo },
    { name: "Philips Hue", logo: hueLogo },
    { name: "Tuya", logo: tuyaLogo },
    { name: "Shelly", logo: shellyLogo },
    { name: "Ecobee", logo: ecobeeLogo },
    { name: "Sonos", logo: sonosLogo },
    { name: "SwitchBot", logo: switchbotLogo },
    { name: "Yale", logo: yaleLogo },
    { name: "LG", logo: lgLogo },
    { name: "Hikvision", logo: hikvisionLogo },
    { name: "Somfy", logo: somfyLogo },
    { name: "Tesla", logo: teslaLogo },
    { name: "TP-Link", logo: tplinkLogo },
    { name: "UniFi", logo: unifiLogo },
  ];

  const protocols = [
    { name: "Zigbee", logo: zigbeeLogo },
    { name: "Z-Wave", logo: zwaveLogo },
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
    <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-primary/5 overflow-hidden">
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
        <div className="mb-12 -mx-4 md:-mx-8">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden px-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate brands for infinite scroll effect */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 bg-card rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border min-w-[120px] h-[100px]"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Protocols Section */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Protocolos soportados</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-w-[140px]"
              >
                <img 
                  src={protocol.logo} 
                  alt={protocol.name} 
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

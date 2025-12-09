import { useEffect, useRef } from "react";

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    "Google Assistant",
    "Amazon Alexa", 
    "SmartThings",
    "Tuya",
    "Smartlife",
    "HomeKit",
    "Shelly",
    "Google Nest",
    "Ecobee",
    "Ring",
    "Sonos",
    "SwitchBot",
    "August",
    "Leviton",
    "Aqara",
    "Tapo",
    "Yale",
    "Xiaomi",
    "Philips Hue",
    "Reolink",
    "Insteon",
    "Hikvision",
    "Somfy",
    "Lutron Caseta",
    "Motionblinds"
  ];

  const protocols = [
    { name: "KNX", color: "from-green-500 to-blue-500" },
    { name: "Zigbee", color: "from-red-500 to-pink-500" },
    { name: "Z-Wave", color: "from-blue-500 to-cyan-500" },
    { name: "Matter", color: "from-gray-700 to-gray-900" },
    { name: "MQTT", color: "from-purple-500 to-violet-600" }
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
    <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden">
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
            className="flex gap-4 overflow-hidden px-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate brands for infinite scroll effect */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 bg-card rounded-2xl px-6 py-4 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border min-w-[160px]"
              >
                <span className="font-semibold text-foreground text-sm text-center whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Protocols Section */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Protocolos soportados</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-card rounded-2xl px-8 py-4 flex items-center justify-center gap-3 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${protocol.color}`} />
                <span className="font-bold text-foreground">{protocol.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

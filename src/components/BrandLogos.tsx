import { Wifi, Radio, Bluetooth, Zap, Home, Lightbulb, Thermometer, Lock } from "lucide-react";

const BrandLogos = () => {
  const protocols = [
    { name: "WiFi", icon: Wifi, color: "from-blue-500 to-blue-600" },
    { name: "Zigbee", icon: Radio, color: "from-green-500 to-green-600" },
    { name: "Z-Wave", icon: Zap, color: "from-purple-500 to-purple-600" },
    { name: "BLE", icon: Bluetooth, color: "from-cyan-500 to-cyan-600" },
  ];

  const brands = [
    { name: "Philips Hue", icon: Lightbulb },
    { name: "Nest", icon: Thermometer },
    { name: "SmartThings", icon: Home },
    { name: "Yale", icon: Lock },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sistemas <span className="text-gradient">compatibles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con los principales protocolos y marcas del mercado
          </p>
        </div>

        {/* Protocols */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Protocolos soportados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${protocol.color}`}>
                  <protocol.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold text-foreground">{protocol.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Marcas compatibles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-card/50 rounded-xl p-4 flex items-center justify-center gap-3 border border-border/50 hover:border-primary/30 transition-all"
              >
                <brand.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{brand.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            ... y muchos más
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
import bluetoothLogo from "@/assets/brands/bluetooth.jpg";
import knxLogo from "@/assets/brands/knx.png";
import wifiLogo from "@/assets/brands/wifi.png";

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
    { name: "WiFi", logo: wifiLogo },
    { name: "Zigbee", logo: zigbeeLogo },
    { name: "Z-Wave", logo: zwaveLogo },
    { name: "Bluetooth", logo: bluetoothLogo },
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
    <section className="section-padding bg-muted/30 dark:bg-muted/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Compatibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("brands.title")} <span className="text-gradient">{t("brands.titleHighlight")}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t("brands.subtitle")}
          </p>
        </div>

        {/* Brands Carousel - 2 rows */}
        <div className="mb-8 -mx-4 md:-mx-8">
          <div 
            ref={scrollRef}
            className="flex flex-col gap-4 overflow-hidden px-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Row 1 */}
            <div className="flex gap-3">
              {[...brands.slice(0, 8), ...brands.slice(0, 8)].map((brand, index) => (
                <div
                  key={`row1-${brand.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-3 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 border border-border min-w-[80px] h-[64px]"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-3" style={{ marginLeft: '-40px' }}>
              {[...brands.slice(8), ...brands.slice(8)].map((brand, index) => (
                <div
                  key={`row2-${brand.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-3 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 border border-border min-w-[80px] h-[64px]"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Protocols Section */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">{t("brands.protocols")}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-white rounded-xl p-4 flex items-center justify-center border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <img 
                  src={protocol.logo} 
                  alt={protocol.name} 
                  className="h-8 sm:h-10 w-auto object-contain"
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

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
import bluetoothLogo from "@/assets/brands/bluetooth.png";
import wifiLogo from "@/assets/brands/wifi.svg";
import knxLogo from "@/assets/brands/knx.png";
import loraLogo from "@/assets/brands/lora.png";
import modbusLogo from "@/assets/brands/modbus.png";
import kasaLogo from "@/assets/brands/kasa.png";
import tapoLogo from "@/assets/brands/tapo.png";
import geLogo from "@/assets/brands/gel.png";
import levitonLogo from "@/assets/brands/leviton.png";
import lutronLogo from "@/assets/brands/lutron.png";
import googleNestLogo from "@/assets/brands/google-nest.png";

const BrandLogos = () => {
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
    { name: "Kasa", logo: kasaLogo },
    { name: "Tapo", logo: tapoLogo },
    { name: "GE", logo: geLogo },
    { name: "Leviton", logo: levitonLogo },
    { name: "Lutron", logo: lutronLogo },
    { name: "Google Nest", logo: googleNestLogo },
  ];

  const protocols = [
    { name: "WiFi", logo: wifiLogo },
    { name: "Zigbee", logo: zigbeeLogo },
    { name: "Z-Wave", logo: zwaveLogo },
    { name: "Bluetooth", logo: bluetoothLogo },
    { name: "KNX", logo: knxLogo },
    { name: "LoRa", logo: loraLogo },
    { name: "Modbus", logo: modbusLogo },
  ];

  const row1 = brands.slice(0, 11);
  const row2 = brands.slice(11);

  const BrandCard = ({ brand }: { brand: { name: string; logo: string } }) => (
    <div className="flex-shrink-0 bg-background dark:bg-slate-200 rounded-lg sm:rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-card border border-border/50 min-w-[72px] sm:min-w-[110px] h-[48px] sm:h-[72px]">
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-5 sm:h-9 w-auto object-contain"
        width={80}
        height={36}
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="section-padding bg-muted/30 dark:bg-muted/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("brands.title")} <span className="text-gradient">{t("brands.titleHighlight")}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t("brands.subtitle")}
          </p>
        </div>

        {/* Brands Carousel - 2 rows with CSS animation */}
        <div className="mb-8 -mx-4 md:-mx-8 space-y-2 sm:space-y-4">
          {/* Row 1 - scrolls left */}
          <div className="overflow-hidden">
            <div className="flex gap-2 sm:gap-4 animate-scroll-left hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
              {[...row1, ...row1, ...row1, ...row1].map((brand, index) => (
                <BrandCard key={`r1-${brand.name}-${index}`} brand={brand} />
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls left */}
          <div className="overflow-hidden">
            <div className="flex gap-2 sm:gap-4 animate-scroll-left hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
              {[...row2, ...row2, ...row2, ...row2].map((brand, index) => (
                <BrandCard key={`r2-${brand.name}-${index}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

        {/* Protocols Section */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">{t("brands.protocols")}</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="bg-background dark:bg-slate-200 rounded-xl px-5 py-3 flex items-center justify-center border border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <img
                  src={protocol.logo}
                  alt={protocol.name}
                  className="h-8 sm:h-10 w-auto object-contain"
                  loading="lazy"
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

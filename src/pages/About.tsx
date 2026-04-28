import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CloudOff,
  AppWindow,
  CalendarClock,
  Unlink2,
  PhoneOff,
  Eye,
  MessageCircle,
  Check,
} from "lucide-react";
import shabatModeImage from "@/assets/shabat-mode.webp";
import knxLogo from "@/assets/brands/knx-partner.png";
import zigbeeLogo from "@/assets/brands/zigbee.png";
import zwaveLogo from "@/assets/brands/zwave.png";
import modbusLogo from "@/assets/brands/modbus.png";

const ProcessSteps = lazy(() => import("@/components/ProcessSteps"));

const DEAD_BRANDS = [
  { name: "Google Revolv", year: "2016" },
  { name: "Wink Hub", year: "2020" },
  { name: "Kodak Baby Monitor", year: "2021" },
  { name: "Nest Secure", year: "2021" },
  { name: "Insteon", year: "2022" },
];

// Editorial section divider — small dot between thin hairlines
const SectionDivider = () => (
  <div aria-hidden="true" className="flex items-center justify-center pt-0 pb-0">
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-border/40" />
    <div className="mx-3 w-1.5 h-1.5 rounded-full bg-primary/60" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent via-border to-border/40" />
  </div>
);

// Simple SVG: home surrounded by devices, no cloud
const LocalDiagram = () => (
  <svg
    viewBox="0 0 280 200"
    className="w-full h-auto max-w-[320px]"
    role="img"
    aria-label="Diagrama de procesamiento local: hogar con dispositivos conectados entre sí sin nube"
  >
    {/* dashed ring suggesting self-contained */}
    <circle cx="140" cy="105" r="85" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />
    {/* connection lines from house to devices */}
    {[
      [60, 55], [220, 55], [50, 130], [230, 130], [95, 180], [185, 180],
    ].map(([cx, cy], i) => (
      <line key={i} x1="140" y1="100" x2={cx} y2={cy} stroke="hsl(var(--accent))" strokeOpacity="0.4" strokeWidth="1.2" />
    ))}
    {/* house */}
    <g>
      <polygon points="108,75 140,48 172,75" fill="hsl(var(--primary))" fillOpacity="0.25" />
      <rect x="115" y="75" width="50" height="45" rx="2" fill="hsl(var(--primary))" fillOpacity="0.18" />
      <rect x="133" y="95" width="14" height="25" fill="hsl(var(--primary))" fillOpacity="0.45" />
    </g>
    {/* device dots */}
    {[
      [60, 55], [220, 55], [50, 130], [230, 130], [95, 180], [185, 180],
    ].map(([cx, cy], i) => (
      <g key={`d${i}`}>
        <circle cx={cx} cy={cy} r="8" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="3" fill="hsl(var(--accent))" />
      </g>
    ))}
    {/* cloud crossed out top-right corner */}
    <g transform="translate(215 15)" opacity="0.35">
      <path d="M5 12 a7 7 0 0 1 14 0 a5 5 0 0 1 1 9 h-16 a5 5 0 0 1 1 -9 z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="3" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

// WhatsApp-style conversation mockup
const ChatMockup = ({ lang }: { lang: "es" | "en" }) => {
  const messages = lang === "es"
    ? [
        { from: "client", text: "¡Hola! ¿Pueden cambiar que el AC se prenda a las 8am en vez de 9am?" },
        { from: "us", text: "Listo, ajustado. Se activa a las 8:00 am desde mañana." },
        { from: "us", text: "✅", tail: true },
      ]
    : [
        { from: "client", text: "Hi! Can you change the AC to turn on at 8am instead of 9am?" },
        { from: "us", text: "Done, adjusted. Kicks in at 8:00 am starting tomorrow." },
        { from: "us", text: "✅", tail: true },
      ];

  return (
    <div className="w-full max-w-[320px] rounded-2xl border border-border/50 bg-[#0b141a] p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-xs font-bold text-white">DS</span>
        </div>
        <div>
          <p className="text-sm text-white font-medium">DiraSmart</p>
          <p className="text-[10px] text-white/50">en línea</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs ${
                m.from === "us"
                  ? "bg-[#005c4b] text-white rounded-br-sm"
                  : "bg-[#202c33] text-white/90 rounded-bl-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProtocolGrid = () => (
  <div className="grid grid-cols-2 gap-3 max-w-[280px]">
    {[
      { src: knxLogo, name: "KNX" },
      { src: zigbeeLogo, name: "Zigbee" },
      { src: zwaveLogo, name: "Z-Wave" },
      { src: modbusLogo, name: "Modbus" },
    ].map((p) => (
      <div
        key={p.name}
        className="flex items-center justify-center aspect-[3/2] rounded-xl bg-white dark:bg-slate-200 border border-border/50 p-4"
      >
        <img src={p.src} alt={p.name} className="max-h-10 w-auto object-contain" loading="lazy" />
      </div>
    ))}
  </div>
);

type SolutionVisualKey = "local" | "shabbat" | "protocols" | "whatsapp";

const SolutionVisual = ({ kind, lang }: { kind: SolutionVisualKey; lang: "es" | "en" }) => {
  switch (kind) {
    case "local":
      return <LocalDiagram />;
    case "shabbat":
      return (
        <img
          src={shabatModeImage}
          alt="Modo Shabbat en la app DiraSmart"
          width={320}
          height={380}
          loading="lazy"
          className="w-auto h-[240px] sm:h-[300px] object-contain drop-shadow-2xl"
        />
      );
    case "protocols":
      return <ProtocolGrid />;
    case "whatsapp":
      return <ChatMockup lang={lang} />;
  }
};

const About = () => {
  const { t, language } = useLanguage();

  const pains = [
    { icon: CloudOff, titleKey: "about.pain1.title", descKey: "about.pain1.desc" },
    { icon: AppWindow, titleKey: "about.pain2.title", descKey: "about.pain2.desc" },
    { icon: CalendarClock, titleKey: "about.pain3.title", descKey: "about.pain3.desc" },
    { icon: Unlink2, titleKey: "about.pain7.title", descKey: "about.pain7.desc" },
    { icon: PhoneOff, titleKey: "about.pain4.title", descKey: "about.pain4.desc" },
    { icon: Eye, titleKey: "about.pain6.title", descKey: "about.pain6.desc" },
  ];

  const solutions: Array<{
    num: string;
    titleKey: string;
    descKey: string;
    color: "primary" | "accent";
    visual: SolutionVisualKey;
  }> = [
    { num: "01", titleKey: "about.sol1.title", descKey: "about.sol1.desc", color: "primary", visual: "local" },
    { num: "02", titleKey: "about.sol2.title", descKey: "about.sol2.desc", color: "accent", visual: "shabbat" },
    { num: "03", titleKey: "about.sol3.title", descKey: "about.sol3.desc", color: "primary", visual: "protocols" },
    { num: "04", titleKey: "about.sol4.title", descKey: "about.sol4.desc", color: "accent", visual: "whatsapp" },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <span
        aria-hidden="true"
        className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 z-40 text-foreground/30 text-xs tracking-wide font-light select-none"
      >
        בּ״ה
      </span>
      <main id="main-content">
        {/* Hero — editorial */}
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
          {/* layered atmosphere */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-20 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute top-40 -left-40 w-[32rem] h-[32rem] bg-accent/12 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.08),transparent_60%)]" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-display font-semibold text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-foreground mb-8 text-balance">
                {t("about.title")}{" "}
                <span className="text-gradient">{t("about.titleHighlight")}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-[1.45] max-w-2xl mx-auto text-pretty">
                {t("about.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story — centered, direct voice */}
        <section className="pt-12 md:pt-20 pb-20 md:pb-28 relative">
          <div className="container-custom px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-10 text-balance">
                {t("about.story.title")}
              </h2>

              <p className="text-xl sm:text-2xl font-medium text-foreground leading-[1.35] mb-8 text-balance">
                {t("about.story.intro")}
              </p>

              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-[1.65]">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-accent/8 border border-primary/15 p-6 sm:p-8">
                <p className="text-lg sm:text-xl font-semibold text-foreground leading-[1.4] text-balance">
                  {t("about.story.outro")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pains — bento grid */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="max-w-3xl mb-14 text-center mx-auto">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("about.pains.title")}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("about.pains.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {/* 6 regular pains in 2-col grid (3 clean rows on desktop) */}
              {pains.map((p) => (
                <div
                  key={p.titleKey}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-background motion-safe:transition-colors hover:border-border"
                >
                  <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <p.icon aria-hidden="true" className="w-5 h-5 text-destructive" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground mb-1.5">{t(p.titleKey)}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(p.descKey)}</p>
                  </div>
                </div>
              ))}

              {/* Brand graveyard — finale, spans 2 cols on md+ */}
              <div className="md:col-span-2 relative rounded-3xl border border-border/60 bg-gradient-to-br from-destructive/5 via-muted/30 to-destructive/10 p-8 sm:p-10 overflow-hidden">
                <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div className="max-w-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-destructive/80 mb-3">
                      {language === "es" ? "Casos reales" : "Real cases"}
                    </p>
                    <h3 className="font-display font-semibold text-2xl sm:text-3xl leading-[1.15] text-foreground mb-3 text-balance">
                      {t("about.pain5.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("about.pain5.desc")}
                    </p>
                  </div>
                  {/* Dead brands list */}
                  <ul className="space-y-2.5 text-sm sm:text-base min-w-[240px]">
                    {DEAD_BRANDS.map((b) => (
                      <li key={b.name} className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-2">
                        <span className="font-medium text-foreground/80 line-through decoration-destructive/60 decoration-1">
                          {b.name}
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground tabular-nums">
                          {b.year}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Solutions — alternating split layouts with side visuals */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="max-w-3xl mb-16 lg:mb-20 text-center mx-auto">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.015em] text-foreground mb-3 text-balance">
                {t("about.solutions.title")}{" "}
                <span className="text-gradient">{t("about.solutions.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t("about.solutions.subtitle")}
              </p>
            </div>

            <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto">
              {solutions.map((s, idx) => {
                const reversed = idx % 2 === 1;
                const isPrimary = s.color === "primary";
                return (
                  <div
                    key={s.titleKey}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
                  >
                    {/* Text side */}
                    <div className={reversed ? "lg:order-2" : ""}>
                      <div className="flex items-baseline gap-4 mb-5">
                        <span
                          aria-hidden="true"
                          className={`font-display text-6xl sm:text-7xl leading-none ${
                            isPrimary ? "text-primary" : "text-accent"
                          }`}
                        >
                          {s.num}
                        </span>
                        <span className={`h-px flex-1 ${isPrimary ? "bg-primary/30" : "bg-accent/30"}`} />
                      </div>
                      <h3 className="font-display font-normal text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-[-0.015em] text-foreground mb-4 text-balance">
                        {t(s.titleKey)}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-[1.6] text-pretty">
                        {t(s.descKey)}
                      </p>
                    </div>
                    {/* Visual side */}
                    <div className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}>
                      <div className="relative">
                        <div
                          className={`absolute -inset-10 rounded-full blur-3xl ${
                            isPrimary ? "bg-primary/10" : "bg-accent/10"
                          }`}
                          aria-hidden="true"
                        />
                        <div className={`relative ${s.visual === "local" ? "text-muted-foreground" : ""}`}>
                          <SolutionVisual kind={s.visual} lang={language} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Process steps */}
        <Suspense fallback={null}>
          <ProcessSteps />
        </Suspense>

        {/* CTA — soft gradient */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          <div className="container-custom px-4 relative z-10 text-center">
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.015em] text-foreground mb-5 text-balance max-w-2xl mx-auto">
              {t("about.cta.title")}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-8">
              {t("about.cta.subtitle")}
            </p>
            <a
              href={`https://wa.me/50765956439?text=${encodeURIComponent(t("about.cta.message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 motion-safe:transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-[0_12px_30px_-12px_rgba(0,0,0,0.3)]"
            >
              <MessageCircle aria-hidden="true" className="w-5 h-5" />
              {t("about.cta.button")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;

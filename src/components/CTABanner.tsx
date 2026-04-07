import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTABanner = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "hsl(220 40% 13%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom px-4 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {t("cta.title")}
        </h2>
        <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base">
          {t("cta.subtitle")}
        </p>
        <a
          href={`https://wa.me/50765956439?text=${encodeURIComponent(t("cta.message"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          <MessageCircle className="w-5 h-5" />
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
};

export default CTABanner;

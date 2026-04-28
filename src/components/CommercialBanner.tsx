import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CommercialBanner = () => {
  const { t, localePath } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/8 via-background to-accent/8 border-y border-border/40">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-5">
            <Building2 aria-hidden="true" className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-3">
            {t("home.commercialBanner.eyebrow")}
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-[-0.015em] text-foreground mb-3 text-balance">
            {t("home.commercialBanner.title")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-7">
            {t("home.commercialBanner.subtitle")}
          </p>
          <Link
            to={localePath("/comercial")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t("home.commercialBanner.cta")}
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommercialBanner;

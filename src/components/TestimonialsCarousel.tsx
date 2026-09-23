import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { TESTIMONIALS } from "@/data/testimonials";
import { TESTIMONIAL_IMAGES } from "@/data/testimonialImages";


const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayDisabled, setAutoplayDisabled] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { t, language } = useLanguage();


  const currentTestimonials = TESTIMONIALS.map((item) => ({
    name: item.name,
    role: item.role[language],
    text: item.text[language],
    rating: item.rating,
    initial: item.initial,
    image: TESTIMONIAL_IMAGES[item.key],
  }));

  useEffect(() => {
    if (isPaused || autoplayDisabled) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonials.length, isPaused, autoplayDisabled, currentIndex]);

  const goToPrevious = useCallback(() => {
    setDir("left");
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  }, [currentTestimonials.length]);

  const goToNext = useCallback(() => {
    setDir("right");
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  }, [currentTestimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
  };

  const current = currentTestimonials[currentIndex];

  return (
    <section id="testimonios" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 md:mb-20">
          


          <h2 data-reveal className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.titleHighlight")}</span>?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
          <a
            href="https://www.google.com/maps?cid=3392890501746819804"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            {t("testimonials.googleLink")}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div
            className="relative bg-muted/20 border border-border/60 rounded-3xl p-8 md:p-12 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Large decorative number */}
            <div className="absolute top-6 right-8 text-[120px] font-black text-foreground/5 leading-none select-none" aria-hidden="true">
              "
            </div>


            <div key={currentIndex} className={dir === "right" ? "motion-safe:animate-slide-in-right" : "motion-safe:animate-slide-in-left"}>
            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium relative z-10 max-w-2xl">
              {"“"}{current.text}{"”"}
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md shrink-0"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md shrink-0">
                  <span className="text-base font-bold text-white">{current.initial}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground motion-safe:transition-[background-color,color,border-color]">

              <ChevronLeft aria-hidden="true" className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {currentTestimonials.map((testimonial, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full motion-safe:transition-[width,background-color] motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                index === currentIndex ?
                "bg-gradient-to-r from-primary to-accent w-6" :
                "bg-muted-foreground/20 hover:bg-muted-foreground/40 w-1.5"}`
                }
                aria-label={`${t("testimonials.goTo")} ${testimonial.name}`}
                aria-current={index === currentIndex ? "true" : undefined} />

              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground motion-safe:transition-[background-color,color,border-color]">

              <ChevronRight aria-hidden="true" className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={() => setAutoplayDisabled((d) => !d)}
              aria-label={autoplayDisabled ? t("a11y.resumeAutoplay") : t("a11y.pauseAutoplay")}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full px-3 py-1 motion-safe:transition-colors"
            >
              {autoplayDisabled ? <Play aria-hidden="true" className="w-3 h-3" /> : <Pause aria-hidden="true" className="w-3 h-3" />}
              <span>{autoplayDisabled ? t("a11y.resumeAutoplay") : t("a11y.pauseAutoplay")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsCarousel;
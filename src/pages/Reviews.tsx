import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ExternalLink, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, TESTIMONIALS } from "@/data/testimonials";
import { TESTIMONIAL_IMAGES } from "@/data/testimonialImages";

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} / 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
      />
    ))}
  </div>
);

const Reviews = () => {
  const { language, localePath } = useLanguage();
  const es = language === "es";

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-28 pb-14 md:pt-36 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-20 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute top-40 -left-40 w-[32rem] h-[32rem] bg-accent/12 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary/80 mb-5">
                {es ? "Reseñas de clientes" : "Client reviews"}
              </p>
              <h1 className="font-bold text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground mb-6 text-balance">
                {es ? "Lo que dicen nuestros clientes en " : "What our clients say across "}
                <span className="text-gradient">{es ? "Panamá" : "Panama"}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-[1.5] max-w-2xl mx-auto text-pretty mb-8">
                {es
                  ? "Opiniones reales de hogares, oficinas y residencias que automatizamos con procesamiento local, KNX y soporte directo por WhatsApp."
                  : "Real opinions from homes, offices and residences we automated with local processing, KNX and direct WhatsApp support."}
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/80 backdrop-blur px-5 py-2.5 mb-8">
                <span className="text-2xl font-bold text-foreground tabular-nums">{GOOGLE_RATING.value.toFixed(1)}</span>
                <Stars rating={5} />
                <span className="text-sm text-muted-foreground">
                  {GOOGLE_RATING.count} {es ? "opiniones en Google" : "reviews on Google"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 motion-safe:transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <ExternalLink aria-hidden="true" className="w-4 h-4" />
                  {es ? "Ver reseñas en Google" : "See reviews on Google"}
                </a>
                <a
                  href={`https://wa.me/50765956439?text=${encodeURIComponent(
                    es ? "¡Hola! Vi las reseñas y me interesa automatizar mi espacio con DiraSmart" : "Hi! I saw the reviews and I'm interested in automating my space with DiraSmart"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border bg-background/80 backdrop-blur text-foreground font-medium rounded-full hover:border-primary/40 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <MessageCircle aria-hidden="true" className="w-4 h-4" />
                  {es ? "Escribir por WhatsApp" : "Message on WhatsApp"}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom px-4">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto list-none p-0 m-0">
              {TESTIMONIALS.map((item, i) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                  className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-3">
                    {TESTIMONIAL_IMAGES[item.key] ? (
                      <img
                        src={TESTIMONIAL_IMAGES[item.key]}
                        alt=""
                        width={44}
                        height={44}
                        loading="lazy"
                        className="w-11 h-11 rounded-full object-cover border border-border/60"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold"
                      >
                        {item.initial}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role[language]}</p>
                    </div>
                    {item.source === "google" && (
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground border border-border/60 rounded-full px-2 py-0.5 shrink-0">
                        Google
                      </span>
                    )}
                  </div>
                  <Stars rating={item.rating} />
                  <blockquote className="text-sm text-muted-foreground leading-relaxed m-0">
                    {item.text[language]}
                  </blockquote>
                </motion.li>
              ))}
            </ul>

            <p className="text-center text-sm text-muted-foreground mt-10">
              {es ? "¿Tu proyecto es un hotel, comercio o edificio? " : "Is your project a hotel, shop or building? "}
              <Link to={localePath("/comercial")} className="text-primary font-medium hover:underline">
                {es ? "Conoce DiraSmart Comercial" : "See DiraSmart Commercial"}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;

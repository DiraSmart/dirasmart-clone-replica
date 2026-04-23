import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const { language, t, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <span aria-hidden="true" className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 z-40 text-foreground/30 text-xs tracking-wide font-light select-none">בּ״ה</span>
      <main id="main-content">
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("blog.title")} <span className="text-gradient">{t("blog.titleHighlight")}</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                {t("blog.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={localePath(`/blog/${post.slug}`)}
                  className="group rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image or gradient header */}
                  <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="flex items-center justify-center h-full">
                          <span className="relative text-white/90 text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                            {post.icon === "Home" && "🏠"}
                            {post.icon === "Cpu" && "⚙️"}
                            {post.icon === "Moon" && "🕯️"}
                            {post.icon === "Wifi" && "📡"}
                            {post.icon === "Lock" && "🔒"}
                            {post.icon === "Network" && "🌐"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category[language]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title[language]}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt[language]}
                    </p>

                    <div className="flex items-center gap-1 text-sm font-medium text-primary pt-1">
                      {t("blog.readMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;

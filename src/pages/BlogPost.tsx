import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { revealDelay } from "@/lib/reveal";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, localePath } = useLanguage();

  const postIndex = blogPosts.findIndex((p) => p.slug.es === slug || p.slug.en === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return <Navigate to={localePath("/blog")} replace />;
  }

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const commercialTopics = new Set([
    "automatizacion-hoteles-panama-guia", "bms-sistema-gestion-edificios-comercial",
    "bacnet-protocolo-bms-estandar-ashrae", "smart-home-oficinas-negocios",
    "automatizacion-restaurantes-gimnasios-clinicas-panama", "dali-protocolo-iluminacion-futuro",
  ]);
  const premiumTopics = new Set([
    "knx-panama-automatizacion-premium", "knx-vs-control4-crestron-savant",
    "knx-obra-nueva-arquitecto-electricista",
  ]);
  const servicePath = premiumTopics.has(post.slug.es) ? "/premium" : commercialTopics.has(post.slug.es) ? "/comercial" : "/";
  const es = language === "es";

  const renderInline = (text: string): (string | JSX.Element)[] => {
    const nodes: (string | JSX.Element)[] = [];
    const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let key = 0;
    while ((m = re.exec(text))) {
      if (m.index > last) nodes.push(text.slice(last, m.index));
      if (m[1] !== undefined) {
        nodes.push(<strong key={key++} className="text-foreground">{m[1]}</strong>);
      } else if (m[2] !== undefined) {
        nodes.push(<em key={key++}>{m[2]}</em>);
      }
      last = re.lastIndex;
    }
    if (last < text.length) nodes.push(text.slice(last));
    return nodes;
  };

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return;
      }
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (
        trimmed.startsWith("**") &&
        trimmed.endsWith("**") &&
        trimmed.slice(2, -2).indexOf("**") === -1
      ) {
        // Whole line wrapped in **…** — prominent bold callout paragraph
        elements.push(
          <p key={i} className="font-semibold text-foreground mt-4 mb-1">
            {trimmed.slice(2, -2)}
          </p>
        );
      } else {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed mb-3">
            {renderInline(trimmed)}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <span aria-hidden="true" className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 z-40 text-foreground/30 text-xs tracking-wide font-light select-none">בּ״ה</span>
      <main id="main-content">
        {/* Hero */}
        <section className={`pt-24 pb-0 relative overflow-hidden`}>
          <div className={`h-48 sm:h-64 md:h-80 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
            {post.image ? (
              <img
                src={post.image}
                alt={post.title[language]}
                className="w-full h-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4">
                  {post.category[language]}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight">
                  {post.title[language]}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Meta + Content */}
        <section className="pb-16 md:pb-24">
          <div className="container-custom px-4">
            <div className="max-w-3xl mx-auto">
              {/* Meta bar */}
              <div className="flex items-center gap-4 py-6 border-b border-border/50 text-sm text-muted-foreground">
                <Link to={localePath("/blog")} className="flex items-center gap-1 text-primary hover:underline">
                  <ArrowLeft className="w-4 h-4" />
                  {t("blog.backToList")}
                </Link>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min {t("blog.readTime")}
                </span>
              </div>

              {/* Article body */}
              <article className="py-8">
                {renderContent(post.content[language])}
              </article>

              {post.sources?.length ? (
                <div className="mb-8 text-sm text-muted-foreground">
                  <h2 className="font-semibold text-foreground mb-2">{es ? "Fuentes técnicas" : "Technical sources"}</h2>
                  <ul className="space-y-2">
                    {post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{source.title[language]}</a></li>)}
                  </ul>
                </div>
              ) : null}

              <aside aria-label={es ? "Servicio relacionado" : "Related service"} className="my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {servicePath === "/premium"
                    ? (es ? "¿Está planificando un proyecto KNX en Panamá?" : "Planning a KNX project in Panama?")
                    : servicePath === "/comercial"
                      ? (es ? "Automatización para su operación en Panamá" : "Automation for your business in Panama")
                      : (es ? "De la idea a su casa inteligente" : "From an idea to your smart home")}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {servicePath === "/premium"
                    ? (es ? "DiraSmart, KNX Gold Partner, diseña y programa iluminación, cortinas y climatización para obra nueva y remodelaciones. Conozca el servicio, las opciones de control y cómo preparar su proyecto." : "DiraSmart, KNX Gold Partner, designs and programs lighting, curtains and climate control for new construction and renovations. Explore the service, control options and project planning.")
                    : servicePath === "/comercial"
                      ? (es ? "Explore soluciones para hoteles, oficinas, comercios y edificios: control por zonas, gestión energética e integración BMS según los equipos e interfaces disponibles." : "Explore solutions for hotels, offices, commercial spaces and buildings: zone control, energy management and BMS integration based on available equipment and interfaces.")
                      : (es ? "Conozca nuestras soluciones inalámbricas y KNX, el proceso de instalación y el soporte para hogares en Panamá." : "Explore wireless and KNX solutions, the installation process and smart home support in Panama.")}
                </p>
                <Link to={localePath(servicePath)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  {servicePath === "/premium"
                    ? (es ? "Diseño e instalación KNX en Panamá" : "KNX design and installation in Panama")
                    : servicePath === "/comercial"
                      ? (es ? "Automatización comercial y BMS en Panamá" : "Commercial automation and BMS in Panama")
                      : (es ? "Soluciones de domótica en Panamá" : "Home automation solutions in Panama")}
                  <ArrowRight aria-hidden="true" className="w-4 h-4" />
                </Link>
              </aside>

              {/* FAQ */}
              {post.faq && post.faq.length > 0 ? (
                <div className="my-8 pt-6 border-t border-border/50">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {language === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
                  </h2>
                  <div className="space-y-4">
                    {post.faq.map((item, i) => (
                      <div data-reveal style={revealDelay(i)} key={i}>
                        <p className="font-semibold text-foreground mb-1">{item.question[language]}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.answer[language]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* CTA */}
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center my-8">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t("blog.cta.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("blog.cta.subtitle")}
                </p>
                <a
                  href="https://wa.me/50765956439?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20DiraSmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  {t("blog.cta.button")}
                </a>
              </div>

              {/* Related articles (internal linking) */}
              {(() => {
                const related = blogPosts
                  .filter((p) => p.slug.es !== post.slug.es)
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3);
                return related.length > 0 ? (
                  <div className="my-8">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      {language === "es" ? "Artículos relacionados" : "Related articles"}
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {related.map((r, _i) => (
                        <Link data-reveal style={revealDelay(_i)}
                          key={r.slug.es}
                          to={localePath(`/blog/${r.slug[language]}`)}
                          className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors hover-lift"
                        >
                          <span className="text-xs text-primary font-medium">{r.category[language]}</span>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                            {r.title[language]}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null;
              })()}

              {/* Navigation */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
                {prevPost ? (
                  <Link to={localePath(`/blog/${prevPost.slug[language]}`)} className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                      <ArrowLeft className="w-3 h-3" /> {t("blog.prev")}
                    </span>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title[language]}
                    </p>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link to={localePath(`/blog/${nextPost.slug[language]}`)} className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors text-right">
                    <span className="text-xs text-muted-foreground flex items-center justify-end gap-1 mb-1">
                      {t("blog.next")} <ArrowRight className="w-3 h-3" />
                    </span>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title[language]}
                    </p>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;

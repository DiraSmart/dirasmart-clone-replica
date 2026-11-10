import { Link } from "react-router-dom";
import { ArrowRight, Blinds, Check, Lightbulb, MapPin, Music2, ShieldCheck, Sparkles, ThermometerSun, Wifi, Cable } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HOME_INTRO, HOME_FUNCTIONS, HOME_SOLUTIONS, HOME_STEPS, HOME_COVERAGE } from "@/data/homeAutomation";

const icons = [Lightbulb, ThermometerSun, Blinds, ShieldCheck, Music2, Sparkles];

export default function HomeAutomationSolutions() {
  const { language, localePath } = useLanguage();
  const es = language === "es";
  const guides = es ? [
    ["Presupuesto", "¿Cuánto cuesta una casa inteligente?", "/blog/cuanto-cuesta-casa-inteligente-panama"],
    ["Planificación", "Cómo funciona la automatización del hogar", "/blog/como-funciona-automatizacion-hogar"],
    ["Cortinas", "Motores, controles y opciones para tu vivienda", "/blog/cortinas-motorizadas-persianas-inteligentes"],
  ] : [
    ["Budget", "How much does a smart home cost?", "/blog/smart-home-cost-panama"],
    ["Planning", "How home automation works", "/blog/how-home-automation-works"],
    ["Curtains", "Motors, controls and options for your home", "/blog/motorized-curtains-smart-blinds"],
  ];

  return (
    <section id="services" className="section-padding bg-background scroll-mt-24" aria-labelledby="home-automation-title">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">{es ? "Diseño · Instalación · Soporte" : "Design · Installation · Support"}</p>
            <h2 id="home-automation-title" className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground text-balance">{es ? "Domótica para una casa que se adapta a ti." : "Home automation that adapts to you."}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{HOME_INTRO[language]}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{es ? "Una escena de noche puede apagar las luces elegidas y cerrar las cortinas. Una de llegada puede preparar el ambiente. El proyecto define qué acciones se coordinan y qué controles prefieres usar." : "A bedtime scene can switch off selected lights and close the curtains. An arrival scene can prepare the room. The project defines which actions are coordinated and which controls you prefer to use."}</p>
            <a href="#soluciones-vivienda" className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">{es ? "Comparar wireless y KNX" : "Compare wireless and KNX"}<ArrowRight aria-hidden="true" className="w-4 h-4" /></a>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-7 gap-y-6">
            {HOME_FUNCTIONS.map((f,i)=>{
              const Icon=icons[i];
              return <div key={f.title.es} className="border-b border-border/60 pb-5"><Icon aria-hidden="true" className="h-5 w-5 text-primary mb-3" strokeWidth={1.5}/><h3 className="font-semibold text-foreground mb-2">{f.title[language]}</h3><p className="text-sm text-muted-foreground leading-relaxed">{f.description[language]}</p></div>;
            })}
          </div>
        </div>

        <div id="soluciones-vivienda" className="mt-16 sm:mt-20 scroll-mt-24">
          <div className="max-w-2xl mb-8"><p className="text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">{es ? "Dos caminos, un proyecto a tu medida" : "Two approaches, one tailored project"}</p><h2 className="font-bold text-3xl sm:text-4xl text-foreground leading-tight text-balance">{es ? "Una solución según tu vivienda." : "A solution for your home."}</h2></div>
          <div className="grid md:grid-cols-2 gap-5">
            {HOME_SOLUTIONS.map((s,i)=>{
              const Icon=i===0?Wifi:Cable;
              return <article key={s.id} className={`rounded-3xl p-6 sm:p-8 border flex flex-col ${i===0?"bg-muted/20 border-border/60":"bg-[#101c30] border-[#24344c] text-white"}`}>
                <div className="flex items-center justify-between gap-4 mb-7"><Icon aria-hidden="true" className={`w-6 h-6 ${i===0?"text-primary":"text-cyan-200"}`} strokeWidth={1.5}/><p className={`text-xs tracking-wide ${i===0?"text-muted-foreground":"text-cyan-100"}`}>{s.tag[language]}</p></div>
                <h3 className={`text-2xl font-bold mb-3 ${i===0?"text-foreground":"text-white"}`}>{s.title[language]}</h3>
                <p className={`text-sm leading-relaxed ${i===0?"text-muted-foreground":"text-slate-300"}`}>{s.description[language]}</p>
                <ul className="mt-6 mb-7 space-y-3">{s.points[language].map(p=><li key={p} className={`flex gap-3 text-sm leading-relaxed ${i===0?"text-foreground":"text-slate-200"}`}><Check aria-hidden="true" className={`w-4 h-4 shrink-0 mt-0.5 ${i===0?"text-primary":"text-cyan-200"}`}/>{p}</li>)}</ul>
                <Link to={localePath(s.path[language])} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${i===0?"text-primary":"text-cyan-200"}`}>{s.link[language]}<ArrowRight aria-hidden="true" className="w-4 h-4"/></Link>
              </article>;
            })}
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">{es ? "Así preparamos tu instalación." : "How we plan your installation."}</h2>
          <ol className="grid md:grid-cols-3 gap-7">{HOME_STEPS.map((s,i)=><li key={s.title.es} className="border-t border-border pt-5"><p aria-hidden="true" className="text-sm text-primary font-semibold mb-3">0{i+1}</p><h3 className="text-base font-semibold text-foreground mb-2">{s.title[language]}</h3><p className="text-sm leading-relaxed text-muted-foreground">{s.description[language]}</p></li>)}</ol>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex gap-4 flex-1"><MapPin aria-hidden="true" className="w-5 h-5 text-primary shrink-0 mt-1"/><div><h2 className="font-semibold text-foreground mb-2">{es ? "Instalación y soporte en Ciudad de Panamá" : "Installation and support in Panama City"}</h2><p className="text-sm leading-relaxed text-muted-foreground">{HOME_COVERAGE[language]}</p></div></div>
          <a href={`https://wa.me/50765956439?text=${encodeURIComponent(es?"Hola, quiero evaluar una instalación de domótica para mi vivienda en Panamá.":"Hello, I would like to discuss home automation for my property in Panama.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 shrink-0 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">{es ? "Consultar mi proyecto" : "Discuss my project"}<ArrowRight aria-hidden="true" className="w-4 h-4"/></a>
        </div>

        <nav aria-label={es?"Guías para preparar tu casa inteligente":"Smart home planning guides"} className="mt-10 grid md:grid-cols-3 gap-5">
          {guides.map(([label,title,path])=><Link key={path} to={localePath(path)} className="group block border-b border-border pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{label}</p><p className="text-sm font-semibold text-foreground group-hover:text-primary inline-flex items-center gap-2">{title}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0"/></p></Link>)}
        </nav>
      </div>
    </section>
  );
}

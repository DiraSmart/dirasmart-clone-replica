import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

const WEB3FORMS_KEY = "1cd751d7-540f-4cad-8f38-00d2784ff893";
const WHATSAPP_NUMBER = "50765956439";
const WHATSAPP_MESSAGE = "Hola, me interesa el servicio Premium de DiraSmart. Quisiera agendar una consulta.";

const budgetOptions = [
  "Sin presupuesto definido aún",
  "$30,000 – $60,000",
  "$60,000 – $120,000",
  "$120,000 +",
];

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "Nueva consulta /premium · DiraSmart");
    data.append("from_name", "DiraSmart Premium Landing");

    setStatus("submitting");
    setErrMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrMsg(json.message || "No pudimos enviar el formulario.");
      }
    } catch (err) {
      setStatus("error");
      setErrMsg("Error de red. Intenta de nuevo o escríbenos por WhatsApp.");
    }
  };

  return (
    <section
      id="hablemos"
      className="relative py-28 md:py-40 overflow-hidden bg-[#06080f]"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(28,184,219,0.1) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 mb-5"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            Hablemos
          </div>
          <h2
            className="text-white leading-[1.02] tracking-[-0.03em] mb-6"
            style={{
              fontFamily: "'Fraunces Variable', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
            }}
          >
            Cuéntanos sobre <span className="italic text-cyan-200">tu proyecto.</span>
          </h2>
          <p
            className="text-white/55 text-lg leading-relaxed"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
          >
            Agenda una consulta privada o escríbenos directo por WhatsApp.
            Respondemos en menos de 24 horas.
          </p>
        </motion.div>

        {/* Two-column: form + WhatsApp */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8">

          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10 border border-white/[0.06]"
            style={{
              background: "linear-gradient(165deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.005) 100%)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/70 mb-2"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Opción 1 · Recomendado
            </div>
            <h3
              className="text-2xl md:text-3xl text-white mb-6 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Agendar consulta privada
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-16">
                <CheckCircle2 className="w-12 h-12 text-cyan-300 mb-4" strokeWidth={1.5} />
                <h4
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
                >
                  Recibido. Gracias.
                </h4>
                <p
                  className="text-white/55 max-w-sm"
                  style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                >
                  Te contactaremos en menos de 24 horas para coordinar la consulta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Nombre" type="text" required />
                  <Input name="phone" label="Teléfono / WhatsApp" type="tel" required />
                </div>
                <Input name="email" label="Correo" type="email" required />
                <Input name="project" label="Ubicación del proyecto" type="text" placeholder="Ciudad de Panamá, Costa del Este…" required />

                {/* Budget select */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">
                    Rango de inversión
                  </label>
                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/90 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition appearance-none cursor-pointer"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="" disabled>Selecciona un rango…</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0a0e1a" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">
                    Cuéntanos brevemente
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tamaño del proyecto, fase de obra, qué buscas integrar…"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 text-rose-300/80 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#06080f] text-sm font-medium hover:bg-cyan-100 disabled:opacity-50 transition-all hover:shadow-[0_20px_40px_-15px_rgba(28,184,219,0.7)]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: WhatsApp option */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10 border border-white/[0.06] flex flex-col"
            style={{
              background: "linear-gradient(165deg, rgba(34,197,94,0.06) 0%, rgba(255,255,255,0.005) 100%)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/70 mb-2"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Opción 2 · Directo
            </div>
            <h3
              className="text-2xl md:text-3xl text-white mb-3 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Hablemos por WhatsApp
            </h3>
            <p
              className="text-white/55 text-sm mb-6 leading-relaxed flex-1"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Si prefieres una conversación rápida, escríbenos directo. Atención
              personalizada en horario comercial Panamá.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 hover:bg-emerald-500/25 hover:border-emerald-400/50 transition-all text-sm font-medium mb-6"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Escribir por WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="pt-6 border-t border-white/[0.06] space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70" style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}>
                  En línea ahora
                </span>
              </div>
              <div
                className="text-[11px] text-white/40"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                Tiempo medio de respuesta: <span className="text-white/70">12 minutos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition"
    />
  </div>
);

export default ContactSection;

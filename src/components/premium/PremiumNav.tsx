import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dirasmartLogo from "@/assets/dirasmart-logo.png";

const PremiumNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#0a0807]/80 backdrop-blur-xl border-b border-[#f5ecdc]/[0.06]" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-14 lg:px-20 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={dirasmartLogo}
            alt="DiraSmart"
            className="h-6 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition"
          />
          <span
            className="hidden sm:inline-flex items-center text-[10px] uppercase tracking-[0.4em] text-[#d4c5a0]/60 pl-4 ml-1 border-l border-[#f5ecdc]/[0.12]"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            Premium
          </span>
        </Link>

        <div
          className="hidden md:flex items-center gap-9 text-sm text-[#f5ecdc]/55"
          style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 400 }}
        >
          <a href="#cuando" className="hover:text-[#f5ecdc] transition-colors">
            Cuándo
          </a>
          <a href="#catalogo" className="hover:text-[#f5ecdc] transition-colors">
            Catálogo
          </a>
          <a href="#proceso" className="hover:text-[#f5ecdc] transition-colors">
            Proceso
          </a>
          <Link to="/" className="text-[#f5ecdc]/35 hover:text-[#f5ecdc]/70 transition-colors text-[12px]">
            ← Volver a DiraSmart
          </Link>
        </div>

        <a
          href="#hablemos"
          className="text-[11px] uppercase tracking-[0.28em] text-[#f5ecdc]/80 hover:text-[#e8d9b8] transition-colors border-b border-[#f5ecdc]/30 hover:border-[#e8d9b8] pb-0.5"
          style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
};

export default PremiumNav;

import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import dirasmartLogo from "@/assets/dirasmart-logo.png";
import dirasmartLogoGrey from "@/assets/dirasmart-logo-grey.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/dirasmartpty", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dirasmart", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@DiraSmart", label: "YouTube" },
  ];

  const navLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Demo", href: "#demo" },
    { label: "Características", href: "#features" },
    { label: "Servicios", href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
  ];

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: 'hsl(220 40% 13%)' }}>
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {/* Background glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom py-12 sm:py-16 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="space-y-5">
            <a href="#home" className="inline-block">
              <img
                src={dirasmartLogo}
                alt="DiraSmart Logo"
                className="h-9 sm:h-10"
              />
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span>info@dirasmart.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span>+507 6595-6439</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span>Panama City, Panama</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {currentYear} DiraSmart. {t("footer.rights")}.</p>
          <p>Hecho con ❤️ en Panamá</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

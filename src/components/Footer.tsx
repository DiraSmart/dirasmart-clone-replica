import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import dirasmartLogo from "@/assets/dirasmart-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, localePath } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/dirasmartpty", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dirasmart", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/dirasmart", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@DiraSmart", label: "YouTube" },
  ];

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: 'hsl(220 40% 13%)' }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-custom py-10 sm:py-12 px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand + Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="inline-block">
              <img
                src={dirasmartLogo}
                alt="DiraSmart - Casa Inteligente y Domótica en Panamá"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/70">
            <a href="mailto:info@dirasmart.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
              info@dirasmart.com
            </a>
            <a href="tel:+50765956439" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
              +507 6595-6439
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
              Panama City, Panama
            </span>
          </div>

          {/* Page links */}
          <div className="flex gap-4 text-sm text-white/70">
            <Link to={localePath("/about")} className="hover:text-white transition-colors">{t("nav.about")}</Link>
            <Link to={localePath("/blog")} className="hover:text-white transition-colors">{t("nav.blog")}</Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>&copy; {currentYear} DiraSmart. {t("footer.rights")}.</p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

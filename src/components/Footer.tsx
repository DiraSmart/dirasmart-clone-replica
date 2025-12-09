import { Facebook, Instagram, Linkedin } from "lucide-react";
import dirasmartLogo from "@/assets/dirasmart-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#home" className="mb-6">
            <img src={dirasmartLogo} alt="DiraSmart Logo" className="h-12" />
          </a>
          
          {/* Description */}
          <p className="text-secondary-foreground/70 max-w-lg mb-8">
            Transformamos hogares ordinarios en espacios inteligentes y conectados. 
            Tu comodidad y tranquilidad son nuestra prioridad.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-secondary-foreground/50">
          <p>© {currentYear} DiraSmart. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
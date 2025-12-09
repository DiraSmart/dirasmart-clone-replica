import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import dirasmartLogo from "@/assets/dirasmart-logo.png";
import dirasmartLogoGrey from "@/assets/dirasmart-logo-grey.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-muted dark:bg-slate-900 text-foreground">
      <div className="container-custom py-8 sm:py-12 px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#home" className="mb-4 sm:mb-6">
            <img
              src={resolvedTheme === "dark" ? dirasmartLogo : dirasmartLogoGrey}
              alt="DiraSmart Logo"
              className="h-8 sm:h-10 md:h-12"
            />
          </a>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mb-6 sm:mb-8 px-2">
            {t("footer.description")}
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-6 text-center text-muted-foreground">
          <p>
            © {currentYear} DiraSmart. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

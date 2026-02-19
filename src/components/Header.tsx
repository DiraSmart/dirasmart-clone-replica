import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import dirasmartLogo from "@/assets/dirasmart-logo.png";
import dirasmartLogoGrey from "@/assets/dirasmart-logo-grey.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const sectionLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.services"), href: "#servicios" },
  ];

  const pageLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
  ];

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={resolvedTheme === 'dark' ? dirasmartLogo : dirasmartLogoGrey}
              alt="DiraSmart Logo"
              className="h-8 sm:h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-foreground/80 hover:text-accent transition-colors font-medium ${location.pathname === link.href ? "text-accent" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSelector />
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-accent transition-colors font-medium text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-foreground/80 hover:text-accent transition-colors font-medium text-left py-2 ${location.pathname === link.href ? "text-accent" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

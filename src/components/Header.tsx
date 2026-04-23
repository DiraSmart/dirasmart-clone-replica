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
  const { t, pathPrefix, localePath } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/en";

  const sectionLinks = [
    { name: t("nav.home"), href: "#home" },
  ];

  const pageLinks = [
    { name: t("nav.about"), href: localePath("/about") },
    { name: t("nav.blog"), href: localePath("/blog") },
  ];

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = (pathPrefix || "/") + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinkClasses = "text-foreground/80 hover:text-accent motion-safe:transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        {t("a11y.skipToContent")}
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4">
            {/* Logo */}
            <Link to={pathPrefix || "/"} className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
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
                  className={navLinkClasses}
                >
                  {link.name}
                </button>
              ))}
              {pageLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`${navLinkClasses} ${isActive ? "text-accent" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <LanguageSelector />
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
              <button
                className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu aria-hidden="true" className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 px-4 border-t border-border motion-safe:animate-fade-in">
              <div className="flex flex-col gap-4">
                {sectionLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`${navLinkClasses} text-left py-2`}
                  >
                    {link.name}
                  </button>
                ))}
                {pageLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`${navLinkClasses} text-left py-2 ${isActive ? "text-accent" : ""}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

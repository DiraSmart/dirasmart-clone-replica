import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nosotros", href: "#servicios" },
    { name: "Información", href: "#features" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-secondary">
              DIRA<span className="text-accent">SMART</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-accent transition-colors font-medium text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
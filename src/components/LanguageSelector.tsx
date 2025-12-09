import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-foreground/80 hover:text-accent focus:bg-transparent active:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </Button>
  );
};

export default LanguageSelector;

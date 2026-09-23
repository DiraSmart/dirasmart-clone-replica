import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 bg-muted/50 hover:bg-muted"
    >
      <Moon className="h-5 w-5 rotate-0 scale-100 opacity-100 motion-safe:transition-[transform,opacity] motion-safe:duration-200 motion-safe:ease-out-strong dark:-rotate-90 dark:scale-75 dark:opacity-0 text-foreground" />
      <Sun className="absolute h-5 w-5 rotate-90 scale-75 opacity-0 motion-safe:transition-[transform,opacity] motion-safe:duration-200 motion-safe:ease-out-strong dark:rotate-0 dark:scale-100 dark:opacity-100 text-foreground" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
};

export default ThemeToggle;

import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button variant="outline" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
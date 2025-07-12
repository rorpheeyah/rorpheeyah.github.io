import { Moon, Sun } from 'lucide-react';
import {useTheme} from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const {isDarkMode, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-40 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
        {isDarkMode ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;

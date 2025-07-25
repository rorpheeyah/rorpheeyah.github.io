import React from 'react';
import {useNavigate} from 'react-router-dom';
import { 
  ArrowLeft, 
  Download,
  Sun,
  Moon
} from 'lucide-react';
import {useTheme} from '../contexts/ThemeContext';
import CVContent from '../components/CVContent';

const CV = () => {
  const {isDarkMode, toggleTheme} = useTheme();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Scroll to top and set page title when component mounts
  React.useEffect(() => {
    // Disable smooth scrolling globally
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // Store original values
    const originalHtmlScrollBehavior = htmlElement.style.scrollBehavior;
    const originalBodyScrollBehavior = bodyElement.style.scrollBehavior;

    // Disable smooth scrolling
    htmlElement.style.scrollBehavior = 'auto';
    bodyElement.style.scrollBehavior = 'auto';

    // Force immediate scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Set page title
    document.title = 'Math Rorpheeyah - Curriculum Vitae';

    // Show content after ensuring position
    setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    // Cleanup function - restore original scroll behavior when component unmounts
    return () => {
      htmlElement.style.scrollBehavior = originalHtmlScrollBehavior;
      bodyElement.style.scrollBehavior = originalBodyScrollBehavior;
    };
  }, []);

  // Handle back navigation
  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1); // Go back to previous page with preserved scroll
    } else {
      navigate('/'); // Fallback to home if no history
    }
  };

  // Get the logo source based on the theme
  const getLogoSrc = () => {
    return isDarkMode ? '/images/seals/ic_seal_horizontal_white_filled.png' : '/images/seals/ic_seal_horizontal_black_filled.png';
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Math_Rorpheeyah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"/>
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </button>

              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-px h-4 bg-border hidden sm:block"></div>
                <img
                    src={getLogoSrc()}
                    alt="Math Rorpheeyah"
                    className="h-6 w-auto opacity-80 transition-all duration-300 hidden sm:block"
                    key={isDarkMode ? 'dark' : 'light'} // Force re-render when the theme changes
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                  onClick={toggleTheme}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent/50"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
              </button>

              <button
                  onClick={downloadCV}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Download className="w-4 h-4"/>
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show content only when loaded */}
      {isLoaded && <CVContent/>}
    </div>
  );
};

export default CV;

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, FileText, Mail, Home, Briefcase, FolderOpen, Palette, Phone, ChevronUp } from 'lucide-react';
import {useTheme} from '../contexts/ThemeContext';

interface NavigationProps {
  onOpenCV: () => void;
}

const Navigation = ({onOpenCV}: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const {isDarkMode, toggleTheme} = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Smart go-to-top button logic
      const shouldShow = currentScrollY > 300; // Only after scrolling 300px
      const isScrollingUp = currentScrollY < lastScrollY; // Check scroll direction
      
      if (shouldShow && (isScrollingUp || currentScrollY > lastScrollY)) {
        setShowGoToTop(true);
        
        // Clear existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // Hide button after 2 seconds of no scrolling
        const newTimeout = setTimeout(() => {
          setShowGoToTop(false);
        }, 2000);
        
        setScrollTimeout(newTimeout);
      } else if (!shouldShow) {
        setShowGoToTop(false);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
          setScrollTimeout(null);
        }
      }
      
      setLastScrollY(currentScrollY);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowGoToTop(false); // Hide immediately after clicking
  };

  const handleToggleTheme = () => {
    toggleTheme();
    setIsProfileDropdownOpen(false);
  };

  const openCV = () => {
    onOpenCV();
    setIsProfileDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.hamburger-menu-container')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const profileMenuItems = [
    { icon: Home, label: 'Home', action: () => scrollToSection('hero'), section: 'hero' },
    { icon: User, label: 'About', action: () => scrollToSection('about'), section: 'about' },
    { icon: Briefcase, label: 'Experience', action: () => scrollToSection('experience'), section: 'experience' },
    { icon: FolderOpen, label: 'Projects', action: () => scrollToSection('projects'), section: 'projects' },
    { icon: Phone, label: 'Contact', action: () => scrollToSection('contact'), section: 'contact' },
  ];

  // Get logo source based on theme
  const getLogoSrc = () => {
    return isDarkMode ? '/images/seals/ic_seal_horizontal_white_filled.png' : '/images/seals/ic_seal_horizontal_black_filled.png';
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 hidden md:block ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-border/20 shadow-sm' 
          : 'bg-background/60 backdrop-blur-lg border border-border/10'
      } rounded-full px-6 py-3`}>
        <div className="flex items-center space-x-6">
          {/* Subtle Logo */}
          <div className="flex items-center space-x-3 mr-2">
            <img
              src={getLogoSrc()}
              alt="MR"
              className="h-6 w-auto opacity-100 transition-all duration-300"
              key={isDarkMode ? 'dark' : 'light'} // Force re-render when theme changes
            />
            <div className="w-px h-4 bg-border"></div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Clean Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
        isScrolled || isProfileDropdownOpen
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-sm'
            : 'bg-background/90 backdrop-blur-lg border-b border-border/10'
      }`}>
        <div className="flex items-center justify-between px-4 py-3 min-h-[60px]">
          {/* Left - Logo Only */}
          <div className="flex items-center">
            <img
              src={getLogoSrc()}
              alt="Math Rorpheeyah"
              className="h-8 w-auto opacity-100 transition-all duration-300"
              key={isDarkMode ? 'dark' : 'light'}
            />
          </div>

          {/* Right - Hamburger Menu */}
          <div className="hamburger-menu-container relative">
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProfileDropdownOpen(!isProfileDropdownOpen);
                }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/50 hover:bg-accent transition-all duration-200 active:scale-95"
            >
              {isProfileDropdownOpen ? (
                  <X className="w-5 h-5 text-foreground"/>
              ) : (
                  <Menu className="w-5 h-5 text-foreground"/>
              )}
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
                <div
                    className="absolute top-full right-0 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-lg animate-slideDown">
                <div className="p-3">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3 px-3 py-2 mb-2">
                    <img
                        src="/images/profile.png"
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center hidden">
                      <User className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Math Rorpheeyah</div>
                      <div className="text-xs text-muted-foreground">Enterprise Mobile Architect</div>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-2">
                    {/* Navigation Items */}
                    {profileMenuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          item.action();
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-accent/50 ${
                          activeSection === item.section 
                            ? 'text-primary bg-primary/10' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    ))}

                    {/* CV Button */}
                    <button
                        onClick={openCV}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                    >
                      <FileText className="w-4 h-4"/>
                      <span>View CV</span>
                    </button>

                    {/* Theme Toggle */}
                    <div className="border-t border-border/50 mt-2 pt-2">
                      <button
                          onClick={handleToggleTheme}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                      >
                        <div className="flex items-center space-x-3">
                            {isDarkMode ? (
                            <Sun className="w-4 h-4" />
                          ) : (
                            <Moon className="w-4 h-4" />
                          )}
                            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Content Spacer */}
      <div className="h-[60px] md:hidden"></div>

      {/* Smart Go to Top Button - Mobile Only */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-40 md:hidden flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 animate-fadeIn"
          aria-label="Go to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Navigation;

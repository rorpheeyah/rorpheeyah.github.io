import {IoArrowDown} from 'react-icons/io5';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {HiOutlineLocationMarker, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineAcademicCap} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';

interface HeroProps {
  onOpenCV: () => void;
}

// Simplified icon mapping for essential social links only
const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
};

const Hero = ({onOpenCV}: HeroProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const {content, loading} = usePortfolioContent();

  const heroData = content?.hero;

  useEffect(() => {
    if (heroData && heroData.titles?.length > 0) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % heroData.titles.length);
      }, 3000); // Slightly faster for better rhythm

      return () => clearInterval(interval);
    }
  }, [heroData?.titles?.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading || !heroData) {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center space-y-4">
            <div className="h-16 w-64 bg-muted/20 rounded animate-pulse"></div>
            <div className="h-8 w-48 bg-muted/20 rounded animate-pulse mx-auto"></div>
            <div className="h-6 w-80 bg-muted/20 rounded animate-pulse mx-auto"></div>
          </div>
        </section>
    );
  }

  return (
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl mx-auto text-center space-y-12">

          {/* Main content with generous spacing */}
          <div className="space-y-8">
            {/* Name - the hero of the page */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              {heroData.name}
            </h1>

            {/* Dynamic title - simplified animation */}
            <div className="h-12 flex items-center justify-center">
              {heroData.titles?.map((title, index) => (
                  <h2
                      key={index}
                      className={`absolute text-xl md:text-2xl font-normal tracking-wide transition-all duration-500 ${
                          index === currentTitleIndex
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-1'
                      }`}
                      style={{color: 'hsl(var(--muted-foreground))'}}
                  >
                    {title}
                  </h2>
              ))}
            </div>

            {/* Description - concise and impactful */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              {heroData.description}
            </p>
          </div>

          {/* Single, prominent CTA */}
          <div className="pt-4">
            <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200"
            >
              View CV
            </button>
          </div>

          {/* Minimal social links - only essential ones */}
          {heroData.socialLinks && heroData.socialLinks.length > 0 && (
              <div className="flex items-center justify-center gap-8 pt-8">
                {heroData.socialLinks.slice(0, 3).map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  if (!IconComponent) return null;

                  return (
                      <a
                          key={index}
                          href={social.href}
                          {...(social.external && {target: "_blank", rel: "noopener noreferrer"})}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                          aria-label={social.label}
                      >
                        <IconComponent className="w-6 h-6"/>
                      </a>
                  );
                })}
              </div>
          )}
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <button
              onClick={scrollToAbout}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              aria-label="Scroll to learn more"
          >
            <IoArrowDown className="w-5 h-5 animate-bounce"/>
          </button>
        </div>
      </section>
  );
};

export default Hero;

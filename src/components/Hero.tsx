import {IoArrowDown} from 'react-icons/io5';
import {FaGithub, FaLinkedin, FaEnvelope, FaArrowRight} from 'react-icons/fa';
import {HiOutlineLocationMarker, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineAcademicCap} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ['Senior Android Developer', 'Mobile Team Lead', 'Enterprise Solutions Architect'];

  // Social links data
  const socialLinks = [
    {
      href: "https://github.com/rorpheeyah",
      icon: FaGithub,
      label: "GitHub",
      external: true
    },
    {
      href: "https://linkedin.com/in/rorpheeyah",
      icon: FaLinkedin,
      label: "LinkedIn",
      external: true
    },
    {
      href: "mailto:mathrorpheeyah@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      external: false
    }
  ];

  // Key achievements data
  const achievements = [
    {
      icon: HiOutlineBriefcase,
      title: "5+ Years",
      subtitle: "Experience"
    },
    {
      icon: HiOutlineUserGroup,
      title: "Team Lead",
      subtitle: "Mobile"
    },
    {
      icon: HiOutlineAcademicCap,
      title: "Enterprise",
      subtitle: "Solutions"
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Cambodia",
      subtitle: "Phnom Penh"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // Slower transition for better readability

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
          Math Rorpheeyah
        </h1>

        {/* Dynamic title with better animation */}
        <div className="h-8 md:h-10 mb-8 flex items-center justify-center">
          {titles.map((title, index) => (
              <h2
                  key={index}
                  className={`absolute text-lg md:text-xl lg:text-2xl font-medium transition-all duration-700 ease-out ${
                      index === currentTitleIndex
                          ? 'opacity-100 translate-y-0 text-primary'
                          : 'opacity-0 translate-y-2 text-muted-foreground'
                  }`}
              >
                {title}
              </h2>
          ))}
        </div>

        {/* Value proposition */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Building enterprise-grade mobile applications with 5+ years of experience.
          Leading mobile development initiatives at <span className="text-foreground font-medium">KOSIGN</span> and
          mentoring the next generation of mobile engineers.
        </p>

        {/* Key achievements with better visual design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
              <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 hover:bg-accent/50 transition-colors duration-200">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <achievement.icon className="w-5 h-5 text-primary"/>
                </div>
                <span className="text-sm font-medium text-foreground">{achievement.title}</span>
                <span className="text-xs text-muted-foreground">{achievement.subtitle}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons with clear hierarchy */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
              to="/cv"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200"
          >
            View Resume
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
          </Link>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-transparent hover:bg-accent hover:border-primary/30 text-base font-semibold text-foreground transition-all duration-200"
          >
            About Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
              <a
                  key={index}
                  href={social.href}
                  {...(social.external && {target: "_blank", rel: "noopener noreferrer"})}
                  className="p-3 rounded-full bg-background border border-border hover:bg-accent hover:border-primary/20 transition-colors duration-200 group"
                  aria-label={social.label}
              >
                <social.icon
                    className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200"/>
              </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Available for projects
          </div>
          <p className="text-sm text-muted-foreground">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>

      {/* Simplified scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:bg-accent hover:border-primary/20 transition-colors duration-200"
            aria-label="Scroll to learn more"
        >
          <IoArrowDown className="w-4 h-4 text-muted-foreground"/>
        </button>
      </div>
    </section>
  );
};

export default Hero;

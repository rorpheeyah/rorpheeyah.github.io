import { useState, useEffect, useRef } from 'react';
import {Calendar, MapPin} from 'lucide-react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';

interface ExperienceProps {
  onOpenCV: () => void;
}

const Experience = ({onOpenCV}: ExperienceProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {content, loading, error} = usePortfolioContent();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show loading state
  if (loading) {
    return (
        <section id="experience" className="py-20 px-6" ref={sectionRef}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-10 bg-muted rounded mb-4 mx-auto max-w-md"></div>
                <div className="h-6 bg-muted rounded mx-auto max-w-2xl"></div>
              </div>
            </div>
          </div>
        </section>
    );
  }

  // Show error state
  if (error || !content) {
    return (
        <section id="experience" className="py-20 px-6" ref={sectionRef}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
              <p className="text-muted-foreground">Failed to load experience data. Please try again later.</p>
            </div>
          </div>
        </section>
    );
  }

  const experiences = content.experience;

  return (
    <section id="experience" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Building enterprise mobile solutions and leading teams across international markets.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`relative transition-all duration-1000 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}
                    style={{animationDelay: `${index * 300}ms`}}
                >
                  <div
                      className="bg-card border border-border/50 rounded-lg p-8 hover:border-border transition-colors">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <img
                              className="w-6 h-6 object-contain"
                              src={`/images/logos/${exp.logo}.png`}
                              alt={`${exp.company} logo`}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                          />
                          <span className="font-medium text-foreground">{exp.company}</span>
                        </div>
                    </div>

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:items-end">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4"/>
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4"/>
                          <span>{exp.location}</span>
                        </div>
                    </div>
                  </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Technologies - simplified */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map((tech) => (
                          <span
                              key={tech}
                              className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full"
                          >
                        {tech}
                      </span>
                      ))}
                      {exp.technologies.length > 6 && (
                          <span className="text-sm text-muted-foreground">
                            +{exp.technologies.length - 6} more
                          </span>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
            className={`mt-20 text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Interested in my detailed background and achievements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Let's connect
            </button>
            <button
                onClick={onOpenCV}
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors"
            >
              View detailed CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Experience;

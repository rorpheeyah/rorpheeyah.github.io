import { useState, useEffect, useRef } from 'react';
import {ExternalLink} from 'lucide-react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const {content, loading} = usePortfolioContent();

  // Use data from JSON only
  const educationData = content?.education?.education;

  // Philosophy data - could also be moved to JSON later
  const learningApproachData = {
    title: 'Learning & Development',
    philosophy: 'Committed to continuous learning and staying current with emerging technologies while maintaining focus on engineering fundamentals and user-centered solutions.',
    focusAreas: [
      {
        area: 'AI Integration',
        description: 'Machine learning patterns and intelligent mobile experiences'
      },
      {
        area: 'Mobile Architecture',
        description: 'Advanced Android development and cross-platform solutions'
      },
      {
        area: 'System Design',
        description: 'Scalable architectures and performance optimization'
      }
    ]
  };

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

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
        <section id="education" className="py-20 px-6" ref={sectionRef}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded mb-6 max-w-md mx-auto"></div>
                <div className="h-4 bg-muted rounded mb-4 max-w-3xl mx-auto"></div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto space-y-8 mb-20">
              {[...Array(3)].map((_, index) => (
                  <div key={index}
                       className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30">
                    <div className="animate-pulse">
                      <div className="w-14 h-14 bg-muted rounded-xl"></div>
                    </div>
                    <div className="flex-1 min-w-0 animate-pulse">
                      <div className="h-6 bg-muted rounded mb-3 max-w-md"></div>
                      <div className="h-4 bg-muted rounded mb-3 max-w-sm"></div>
                      <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-6 w-16 bg-muted rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
    );
  }

  return (
    <section id="education" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            {content?.education?.title || "Education"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            {content?.education?.subtitle || "My academic journey and professional development through formal education and specialized training programs."}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 mb-20">
          {educationData?.map((education, index) => (
              <div key={education.id || index} className="group">
                <div
                    className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30 hover:bg-background/80 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <img
                        className="w-8 h-8 object-contain"
                        src={`/images/logos/${education.logo}.png`}
                        alt={`${education.institution} logo`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
                    <span className="text-sm text-muted-foreground font-medium mt-1 lg:mt-0">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-base text-muted-foreground">{education.institution}</p>
                    {education.website && (
                        <button
                            onClick={() => handleLinkClick(education.website)}
                            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                            title={`Visit ${education.institution} website`}
                        >
                          <ExternalLink className="w-4 h-4"/>
                        </button>
                    )}
                  </div>
                  {education.skills && education.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {education.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {skill}
                        </span>
                        ))}
                      </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-32 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary/20 pl-8 mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">{learningApproachData.title}</h3>
              <blockquote className="text-lg text-muted-foreground leading-relaxed">
                {learningApproachData.philosophy}
              </blockquote>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {learningApproachData.focusAreas.map((area) => (
                    <div key={area.area} className="space-y-3">
                      <h4 className="text-lg font-medium text-foreground">{area.area}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
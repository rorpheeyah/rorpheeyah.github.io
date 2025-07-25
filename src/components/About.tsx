import React, { useState, useEffect, useRef } from 'react';
import { Code, BookOpen, Users, Trophy, Award } from 'lucide-react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';

// Icon mapping for dynamic icon rendering
const iconMap: { [key: string]: React.ComponentType<any> } = {
    Code,
    BookOpen,
    Users,
    Trophy,
    Award,
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
    const {content, loading} = usePortfolioContent();

    // Use data from JSON or fallback to default
    const aboutData = content?.about || {
        title: "About Me",
        description: "Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications with comprehensive security implementations.",
        stats: [],
        achievements: []
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

    if (loading) {
        return (
            <section id="about" className="py-20 px-6" ref={sectionRef}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="animate-pulse">
                            <div className="h-12 bg-muted rounded mb-6 max-w-md mx-auto"></div>
                            <div className="h-6 bg-muted rounded mb-4 max-w-3xl mx-auto"></div>
                            <div className="h-6 bg-muted rounded mb-4 max-w-2xl mx-auto"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[...Array(4)].map((_, index) => (
                            <div key={index}
                                 className="text-center p-6 rounded-xl bg-accent/50 backdrop-blur-sm border border-border/50">
                                <div className="animate-pulse">
                                    <div className="w-8 h-8 bg-muted rounded mx-auto mb-3"></div>
                                    <div className="h-8 bg-muted rounded mb-1"></div>
                                    <div className="h-4 bg-muted rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {aboutData.title}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {aboutData.description}
          </p>
        </div>

        {/* Stats Section */}
          {aboutData.stats && aboutData.stats.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {aboutData.stats.map((stat, index) => {
                      const IconComponent = iconMap[stat.icon] || Code;
              return (
                <div
                    key={stat.label}
                    className={`text-center p-6 rounded-xl bg-accent/50 backdrop-blur-sm border border-border/50 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary"/>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        )}

          {/* Achievements Section */}
          {aboutData.achievements && aboutData.achievements.length > 0 && (
              <div
                  className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                      {aboutData.achievements.map((achievement, index) => {
                          const IconComponent = iconMap[achievement.icon] || Award;
                          return (
                              <div
                                  key={achievement.title}
                                  className="p-6 rounded-xl border bg-background border-border/50"
                                  style={{animationDelay: `${index * 100}ms`}}
                              >
                                  <IconComponent
                                      className={`w-8 h-8 mb-4 ${achievement.highlight ? 'text-primary' : 'text-muted-foreground'}`}/>
                                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          )}
      </div>
    </section>
  );
};

export default About;

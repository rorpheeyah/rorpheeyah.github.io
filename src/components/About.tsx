import { useState, useEffect, useRef } from 'react';
import { Code, BookOpen, Users, Trophy, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Code, value: '5+', label: 'Years Experience' },
    { icon: Trophy, value: '30+', label: 'Enterprise Apps Built' },
    { icon: Users, value: '10+', label: 'Team Members Led' },
    { icon: Award, value: '1', label: 'Best Rookie Award' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best Rookie Award',
      description: 'Presented by Seol WookHwan (CEO), KOSIGN, November 2020',
      highlight: true
    },
    {
      icon: BookOpen,
      title: 'International Experience',
      description: 'One-year assignment in Busan, South Korea (2022-2023)',
      highlight: false
    },
    {
      icon: Code,
      title: 'Technical Leadership',
      description: 'Leading enterprise Android development with modern architecture patterns',
      highlight: false
    }
  ];

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

  return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications.
            Currently serving as Sub-Leader of the Mobile Department at KOSIGN, leading development initiatives and mentoring junior engineers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-xl bg-accent/50 backdrop-blur-sm border border-border/50 hover:bg-accent/70 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="p-6 rounded-xl border bg-background border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className={`w-8 h-8 mb-4 ${achievement.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

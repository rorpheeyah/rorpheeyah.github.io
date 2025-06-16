import { useState, useEffect, useRef } from 'react';
import { Code, Lightbulb, Users, Trophy, Award, BookOpen } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    // Mobile Development (Core Expertise)
    { name: 'Kotlin', category: 'language', level: 95 },
    { name: 'Java', category: 'language', level: 95 },
    { name: 'Android SDK', category: 'framework', level: 95 },
    { name: 'Jetpack Compose', category: 'framework', level: 90 },
    
    // Architecture & Patterns
    { name: 'MVVM', category: 'architecture', level: 90 },
    { name: 'Clean Architecture', category: 'architecture', level: 88 },
    { name: 'Android Architecture Components', category: 'architecture', level: 85 },
    
    // Full-Stack & Database
    { name: 'JavaScript', category: 'language', level: 75 },
    { name: 'HTML/CSS', category: 'language', level: 75 },
    { name: 'PHP', category: 'language', level: 75 },
    { name: 'SQL', category: 'database', level: 85 },
    { name: 'MySQL', category: 'database', level: 80 },
    { name: 'PostgreSQL', category: 'database', level: 75 },
    
    // Tools & Design
    { name: 'Git/GitHub/GitLab', category: 'tool', level: 90 },
    { name: 'Figma', category: 'design', level: 85 },
    { name: 'RESTful API Integration', category: 'architecture', level: 90 },
    { name: 'UI/UX Design', category: 'design', level: 80 }
  ];

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

  const getCategoryColor = (category: string) => {
    const colors = {
      language: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      framework: 'bg-green-500/10 text-green-500 border-green-500/20',
      architecture: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      database: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      tool: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      design: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-accent';
  };

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              My Journey & Education
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-accent/20 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">Bachelor of Science, Computer Science</h4>
                <p className="text-sm text-muted-foreground mb-1">Royal University of Phnom Penh</p>
                <p className="text-xs text-muted-foreground">January 2016 - November 2021</p>
              </div>
              
              <div className="p-4 bg-accent/20 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">Advanced Software Development</h4>
                <p className="text-sm text-muted-foreground mb-1">Korea Software HRD Center</p>
                <p className="text-xs text-muted-foreground">2019 - 2020</p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Full-stack application development</li>
                  <li>• Mobile application research and implementation</li>
                </ul>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium mb-1">Current Focus</p>
                  <p className="text-xs text-muted-foreground italic">
                    Exploring AI & Machine Learning integration in mobile apps, deepening Jetpack Compose expertise, 
                    and considering Master's degree in AI or mobile computing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {['language', 'framework', 'architecture', 'database', 'tool', 'design'].map((category) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <div key={category} className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 capitalize">
                      {category === 'language' ? 'Programming Languages' : 
                       category === 'framework' ? 'Frameworks & Libraries' :
                       category === 'architecture' ? 'Architecture & Patterns' :
                       category === 'database' ? 'Databases' :
                       category === 'tool' ? 'Development Tools' : 'Design & UX'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`group px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-pointer ${getCategoryColor(skill.category)}`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="flex items-center space-x-2">
                            <span>{skill.name}</span>
                            <div className="w-12 bg-current/20 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className="h-full bg-current transition-all duration-1000 ease-out"
                                style={{ 
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${index * 100}ms`
                                }}
                              ></div>
                            </div>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

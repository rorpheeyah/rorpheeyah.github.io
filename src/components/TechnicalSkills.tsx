import { useState, useEffect, useRef } from 'react';
import { Code, Lightbulb, Users, Trophy, Award, BookOpen } from 'lucide-react';

const TechnicalSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    // Mobile Development (Core Expertise)
    { name: 'Kotlin', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'Android SDK', category: 'framework' },
    { name: 'Jetpack Compose', category: 'framework' },
    
    // Architecture & Patterns
    { name: 'MVVM', category: 'architecture' },
    { name: 'Clean Architecture', category: 'architecture' },
    { name: 'Android Architecture Components', category: 'architecture' },
    
    // Full-Stack & Database
    { name: 'JavaScript', category: 'language' },
    { name: 'HTML/CSS', category: 'language' },
    { name: 'PHP', category: 'language' },
    { name: 'SQL', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    
    // Tools & Design
    { name: 'Git/GitHub/GitLab', category: 'tool' },
    { name: 'Android Studio', category: 'tool' },
    { name: 'IntelliJ IDEA', category: 'tool' },
    { name: 'Visual Studio Code', category: 'tool' },
    { name: 'Firebase', category: 'tool' },
    { name: 'Postman', category: 'tool' },
    { name: 'Figma', category: 'design' },
    { name: 'Adobe Illustrator', category: 'design' },
    { name: 'Adobe Photoshop', category: 'design' },
    { name: 'Photopea', category: 'design' },
    { name: 'RESTful API Integration', category: 'architecture' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Logo Design', category: 'creative' },
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
    <section ref={sectionRef} className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <h3 className="text-2xl font-semibold mb-8 flex items-center">
        <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
        Technical Skills
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Core Expertise */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Code className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Core Expertise</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose'].includes(skill.name)).map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <BookOpen className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Programming Languages</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => skill.category === 'language').map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Patterns */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Trophy className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Architecture & Patterns</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => skill.category === 'architecture').map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Award className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Databases</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => skill.category === 'database').map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Users className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Development Tools</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => skill.category === 'tool').map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design & Creative */}
        <div className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-5 h-5 text-primary mr-2" />
            <h4 className="text-lg font-medium text-foreground">Design & Creative</h4>
          </div>
          <div className="space-y-3">
            {skills.filter(skill => ['design', 'creative'].includes(skill.category)).map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Custom logo design, promotional banners, wedding invitations, and various print materials for clients and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
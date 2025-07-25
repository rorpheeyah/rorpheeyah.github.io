import { useState, useEffect, useRef } from 'react';
import { Code, Lightbulb, Users, Trophy, Award, BookOpen } from 'lucide-react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';

const TechnicalSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
    const {content, loading} = usePortfolioContent();

    // Use data from JSON only
    const skillsData = content?.technicalSkills;

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
            <section id="technical-skills" className="py-20 px-6" ref={sectionRef}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="animate-pulse">
                            <div className="h-8 bg-muted rounded mb-6 max-w-md mx-auto"></div>
                            <div className="h-4 bg-muted rounded mb-4 max-w-2xl mx-auto"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-background rounded-xl border border-border/50 p-6">
                                <div className="animate-pulse">
                                    <div className="h-6 bg-muted rounded mb-4"></div>
                                    <div className="space-y-3">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="h-4 bg-muted rounded"></div>
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
    <section id="technical-skills" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {skillsData?.title || "Technical Skills"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {skillsData?.subtitle || "A comprehensive overview of my technical expertise spanning mobile development, architecture patterns, and creative design."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile Development */}
            {skillsData?.skills?.mobile && skillsData.skills.mobile.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <Code className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">Mobile Development</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.mobile.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}

            {/* Security & Protection */}
            {skillsData?.skills?.security && skillsData.skills.security.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <Trophy className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">Security & Protection</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.security.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}

            {/* Backend & Database */}
            {skillsData?.skills?.backend && skillsData.skills.backend.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">Backend & Database</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.backend.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}

            {/* Frontend Development */}
            {skillsData?.skills?.frontend && skillsData.skills.frontend.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">Frontend Development</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.frontend.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}

            {/* DevOps & Tools */}
            {skillsData?.skills?.devops && skillsData.skills.devops.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <Users className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">DevOps & Tools</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.devops.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}

          {/* Design & Creative */}
            {skillsData?.skills?.design && skillsData.skills.design.length > 0 && (
                <div
                    className="bg-background rounded-xl border border-border/50 p-6 hover:border-border/80 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <Lightbulb className="w-5 h-5 text-primary mr-2"/>
                        <h4 className="text-lg font-medium text-foreground">Design & Creative</h4>
                    </div>
                    <div className="space-y-3">
                        {skillsData.skills.design.map((skill, index) => (
                            <div key={skill} className="flex items-center justify-between">
                                <span className="text-sm text-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
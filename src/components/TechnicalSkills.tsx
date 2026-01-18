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
        
        {/* Key Skills Highlight */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <h3 className="font-medium mb-2 text-primary">Core Android</h3>
            <p className="text-sm text-foreground">Kotlin, Java, MVVM, Clean Architecture, Jetpack Compose</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <h3 className="font-medium mb-2 text-primary">Security Expertise</h3>
            <p className="text-sm text-foreground">Mobile Security Architecture, Data Encryption, Financial-grade Security Solutions</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <h3 className="font-medium mb-2 text-primary">Operations</h3>
            <p className="text-sm text-foreground">Google Play Console Management, Release Management, CI/CD Implementation</p>
          </div>
        </div>
        
        {/* Industry Expertise Highlights */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-center">Industry-Specific Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card/30 rounded-lg p-5 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-medium mb-3 text-foreground">Financial Security</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Enterprise-grade security implementations for banking applications</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Financial data encryption & PCI compliance implementation</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Secure transaction processing architecture design</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/30 rounded-lg p-5 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-medium mb-3 text-foreground">Enterprise Deployment</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>On-premise security solution implementation for corporate clients</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Large-scale deployment strategies for corporate applications</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Multi-tenant architecture design for enterprise solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/30 rounded-lg p-5 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-medium mb-3 text-foreground">Cross-Cultural Development</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>International team collaboration methodologies</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Technical documentation standardization across global teams</span>
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span>Knowledge transfer protocols for international development</span>
                </li>
              </ul>
            </div>
          </div>
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
                        {skillsData.skills.mobile.map((skill, index) => {
                            const isHighlighted = ['Kotlin (Advanced)', 'Java (Advanced)', 'Jetpack Compose', 'MVVM', 'Clean Architecture'].includes(skill);
                            return (
                                <div key={skill} className="flex items-center justify-between">
                                    <span className={`text-sm ${isHighlighted ? 'text-primary font-medium' : 'text-foreground'}`}>{skill}</span>
                                </div>
                            );
                        })}
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
                        {skillsData.skills.security.map((skill, index) => {
                            const isHighlighted = ['Mobile App Security Implementation', 'Data Encryption & Protection', 'Third-party Security Libraries Integration'].includes(skill);
                            return (
                                <div key={skill} className="flex items-center justify-between">
                                    <span className={`text-sm ${isHighlighted ? 'text-primary font-medium' : 'text-foreground'}`}>{skill}</span>
                                </div>
                            );
                        })}
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
                        {skillsData.skills.devops.map((skill, index) => {
                            const isHighlighted = ['Google Play Console Management', 'App Store Deployment & Release Management', 'Firebase Integration & FCM', 'Crashlytics Implementation'].includes(skill);
                            return (
                                <div key={skill} className="flex items-center justify-between">
                                    <span className={`text-sm ${isHighlighted ? 'text-primary font-medium' : 'text-foreground'}`}>{skill}</span>
                                </div>
                            );
                        })}
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
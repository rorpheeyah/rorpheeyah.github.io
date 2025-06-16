import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

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

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const experiences = [
    {
      title: "Senior Android Developer & Sub-Leader, Mobile Department",
      company: "KOSIGN (Korea Software Innovation Global Network)",
      period: "March 2020 - Present",
      location: "Phnom Penh, Cambodia",
      type: "Full-time",
      description: "Leading development of enterprise-level Android applications utilizing Kotlin and Java. Overseeing team operations as Sub-Leader and implementing modern architecture patterns including MVVM and Clean Architecture. Pioneering adoption of Jetpack Compose across multiple projects.",
      achievements: [
        "Lead development of enterprise-level Android applications utilizing Kotlin and Java",
        "Oversee team operations as Sub-Leader of the Mobile Department",
        "Implement and optimize modern architecture patterns (MVVM, Clean Architecture)",
        "Pioneer adoption of Jetpack Compose for UI development across multiple projects",
        "Supervise project delegation and provide mentorship to junior developers",
        "Recognized with 'Best Rookie' award (November 2020)"
      ],
      technologies: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "Clean Architecture"],
      award: "Best Rookie Award - November 2020"
    },
    {
      title: "International Assignment - Business Trip",
      company: "비즈플레이 - Bizplay (KOSIGN - South Korea Division)",
      period: "October 2022 - August 2023",
      location: "Busan, South Korea",
      type: "International Assignment",
      description: "Selected for a one-year assignment to support collaboration between the Cambodian and South Korean mobile development teams. Served as liaison facilitating cross-cultural collaboration and technical communication.",
      achievements: [
        "Selected for a one-year assignment to support collaboration between Cambodian and South Korean mobile development teams",
        "Reviewed technical documents from Korean teams, analyzed project requirements, and prepared task breakdowns for the Cambodian team",
        "Inspected and verified feature behavior across web and mobile platforms to ensure consistency and alignment",
        "Worked directly with Korean developers, testers, and department heads (부장) on feature planning, QA, and production readiness",
        "Served as a liaison between teams, facilitating communication, resolving blockers, and ensuring smooth cross-cultural collaboration",
        "Participated in cross-functional meetings and contributed to strengthening partnerships between global teams"
      ],
      technologies: ["Android", "Cross-platform Development", "Team Leadership", "Technical Documentation", "International Collaboration"]
    },
    {
      title: "Web Developer",
      company: "PLAN-B Cambodia (BEONE)",
      period: "November 2018 - January 2019",
      location: "Phnom Penh, Cambodia",
      type: "Full-time",
      description: "Developed responsive web applications without third-party frameworks using custom CSS. Built backend functionality and logic using PHP for various client projects.",
      achievements: [
        "Developed responsive web applications without third-party frameworks (custom CSS)",
        "Built backend functionality and logic using PHP",
        "Created custom solutions for various client projects",
        "Gained foundational experience in full-stack web development",
        "Worked with design teams to implement responsive user interfaces"
      ],
      technologies: ["PHP", "HTML/CSS", "JavaScript", "Custom Frameworks", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-accent/20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Professional Experience
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            A journey through enterprise mobile development, international collaboration, and technical leadership in Android development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Experience card */}
                <div className="ml-20 bg-background rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-medium mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      {exp.award && (
                        <div className="flex items-center space-x-2 mt-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-yellow-600 font-medium">{exp.award}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        exp.type === 'International Assignment' 
                          ? 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/80 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable achievements */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                  >
                    <span>View Key Achievements</span>
                    {expandedItems.has(index) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {expandedItems.has(index) && (
                    <div className="mt-4 p-4 bg-accent/50 rounded-lg animate-scale-in">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-3 text-sm text-muted-foreground"
                            style={{ animationDelay: `${achIndex * 50}ms` }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in challenging projects and opportunities to create impactful mobile experiences. 
              With international experience and proven leadership skills, I'm ready for your next big project.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

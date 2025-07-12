import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Award } from 'lucide-react';

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
      logo: "ic_logo_kosign",
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
      logo: "ic_logo_bizplay",
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
      logo: "ic_logo_planb",
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
    <section id="experience" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            A journey through enterprise mobile development, international collaboration, and technical leadership.
          </p>
        </div>

        <div className="relative">
          {/* Simple timeline line - hidden on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-5 top-1 w-2 h-2 bg-primary rounded-full hidden md:block"></div>

                {/* Content */}
                <div className="md:ml-16">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <img
                          src={`/${exp.logo}.png`}
                          alt={exp.company}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      {exp.award && (
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-amber-600">{exp.award}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-1 text-sm text-muted-foreground lg:items-end lg:text-right">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 text-xs rounded-md w-fit ${
                        exp.type === 'International Assignment' 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Simple technology tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable achievements */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                  >
                    <span>View achievements</span>
                    {expandedItems.has(index) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {expandedItems.has(index) && (
                    <div className="mt-4 pl-4 border-l-2 border-gray-100">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Subtle divider */}
                {index < experiences.length - 1 && (
                  <div className="mt-12 md:ml-16 border-b border-border/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Simplified CTA */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-semibold mb-2">Ready to collaborate?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            I'm always interested in challenging projects and opportunities to create impactful mobile experiences.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Let's connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

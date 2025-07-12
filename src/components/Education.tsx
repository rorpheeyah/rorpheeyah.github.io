import { useState, useEffect, useRef } from 'react';
import {Lightbulb, ExternalLink} from 'lucide-react';

// Education data
const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    period: '2016 – 2021',
    institution: 'Royal University of Phnom Penh (RUPP)',
    logo: '/ic_logo_rupp.png',
    website: 'https://www.rupp.edu.kh',
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development']
  },
  {
    id: 2,
    degree: 'Advanced Software Development Training',
    period: '2019 – 2020',
    institution: 'Korea Software HRD Center',
    logo: '/ic_logo_hrd.png',
    website: 'https://kshrd.com.kh',
    skills: ['Full-stack Development', 'Mobile Apps', 'Software Architecture', 'Design Patterns']
  },
  {
    id: 3,
    degree: 'Professional Development Courses',
    period: '2018 – 2019',
    institution: 'CKCC (Cambodia–Korea Cooperation Center)',
    logo: '/ic_logo_ckcc.png',
    website: 'https://www.ckcc.edu.kh',
    skills: ['Java Development', 'Web Applications', 'Project Management']
  }
];

// Philosophy data
const philosophyData = {
  title: 'Learning Philosophy',
  quote: '"Technology evolves rapidly, but the fundamentals of good software engineering remain constant. I believe in continuous learning, clean code, and building solutions that truly matter to users."'
};

// Current focus data
const currentFocusData = {
  title: 'Current Focus',
  subtitle: 'Areas I\'m actively exploring and developing expertise in',
  areas: [
    {
      id: 1,
      title: 'AI & Machine Learning',
      description: 'Integration patterns, intelligent features, and ML-powered mobile experiences',
      icon: (
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
      )
    },
    {
      id: 2,
      title: 'Advanced Jetpack Compose',
      description: 'Complex animations, custom components, and performance optimization techniques',
      icon: (
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
      )
    },
    {
      id: 3,
      title: 'Mobile Computing',
      description: 'Considering advanced studies in mobile architecture and cross-platform development',
      icon: (
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
      )
    }
  ]
};

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="education" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Education
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            My academic journey and professional development through formal education and specialized training programs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 mb-20">
          {educationData.map((education) => (
              <div key={education.id} className="group">
                <div
                    className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30 hover:bg-background/80 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <img
                        src={education.logo}
                        alt={education.institution}
                        className="w-14 h-14 object-contain rounded-xl"
                    />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
                    <span className="text-sm text-muted-foreground font-medium mt-1 lg:mt-0">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-base text-muted-foreground">{education.institution}</p>
                    <button
                        onClick={() => handleLinkClick(education.website)}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                        title={`Visit ${education.institution} website`}
                    >
                      <ExternalLink className="w-4 h-4"/>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy - Scale.com inspired */}
        <div className={`mt-32 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto">
            {/* Philosophy Quote */}
            <div
                className="bg-gradient-to-br from-background/80 to-accent/20 rounded-2xl p-8 border border-border/30 backdrop-blur-sm mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary"/>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">{philosophyData.title}</h3>
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                    {philosophyData.quote}
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{currentFocusData.title}</h3>
                <p className="text-muted-foreground">{currentFocusData.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentFocusData.areas.map((area) => (
                    <div key={area.id}
                         className="group bg-background/50 rounded-xl p-6 border border-border/30 hover:bg-background/80 hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        {area.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
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
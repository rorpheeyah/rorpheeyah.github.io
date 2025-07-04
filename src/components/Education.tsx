import { useState, useEffect, useRef } from 'react';

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

  return (
    <section ref={sectionRef} className="mb-20">
      <h3 className="text-2xl font-semibold mb-12 text-center">Education</h3>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Bachelor's Degree */}
        <div className="group">
          <div className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30 hover:bg-background/80 transition-all duration-300">
            <div className="flex-shrink-0 mt-1">
              <img 
                src="/ic_logo_rupp.png" 
                alt="RUPP" 
                className="w-14 h-14 object-contain rounded-xl"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-foreground">Bachelor of Science in Computer Science</h4>
                <span className="text-sm text-muted-foreground font-medium mt-1 lg:mt-0">2016 – 2021</span>
              </div>
              <p className="text-base text-muted-foreground mb-3">Royal University of Phnom Penh (RUPP)</p>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HRD Training */}
        <div className="group">
          <div className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30 hover:bg-background/80 transition-all duration-300">
            <div className="flex-shrink-0 mt-1">
              <img 
                src="/ic_logo_hrd.png" 
                alt="HRD" 
                className="w-14 h-14 object-contain rounded-xl"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-foreground">Advanced Software Development Training</h4>
                <span className="text-sm text-muted-foreground font-medium mt-1 lg:mt-0">2019 – 2020</span>
              </div>
              <p className="text-base text-muted-foreground mb-3">Korea Software HRD Center</p>
              <div className="flex flex-wrap gap-2">
                {['Full-stack Development', 'Mobile Apps', 'Software Architecture', 'Design Patterns'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CKCC Courses */}
        <div className="group">
          <div className="flex items-start gap-6 p-8 bg-background/50 rounded-2xl border border-border/30 hover:bg-background/80 transition-all duration-300">
            <div className="flex-shrink-0 mt-1">
              <img 
                src="/ic_logo_ckcc.png" 
                alt="CKCC" 
                className="w-14 h-14 object-contain rounded-xl"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-foreground">Professional Development Courses</h4>
                <span className="text-sm text-muted-foreground font-medium mt-1 lg:mt-0">2018 – 2019</span>
              </div>
              <p className="text-base text-muted-foreground mb-3">CKCC (Cambodia–Korea Cooperation Center)</p>
              <div className="flex flex-wrap gap-2">
                {['Java Development', 'Web Applications', 'Project Management'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {skill}
                  </span>
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
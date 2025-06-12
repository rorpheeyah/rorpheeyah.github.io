
const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on responsive web design and API integration. Collaborated closely with design and product teams.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Mobile App Developer",
      company: "Startup",
      period: "2019 - 2020",
      description: "Built cross-platform mobile applications using React Native and Flutter. Implemented features from concept to deployment on both iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Firebase", "Swift"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through various roles and technologies, building innovative solutions and growing as a developer.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

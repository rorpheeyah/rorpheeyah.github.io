
const Experience = () => {
  const experiences = [
    {
      title: "Senior Android Developer & Sub-Leader, Mobile Department",
      company: "KOSIGN [Korea Software Innovation Global Network]",
      period: "March 2020 - Present",
      description: "Leading development of enterprise-level Android applications utilizing Kotlin and Java. Overseeing team operations as Sub-Leader and implementing modern architecture patterns including MVVM and Clean Architecture. Pioneering adoption of Jetpack Compose across multiple projects.",
      technologies: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "Clean Architecture"]
    },
    {
      title: "International Assignment – Business Trip",
      company: "비즈플레이 - Bizplay (KOSIGN - South Korea Division)",
      period: "October 2022 - August 2023",
      description: "Selected for a one-year assignment in Busan, South Korea to support collaboration between Cambodian and South Korean mobile development teams. Served as liaison facilitating cross-cultural collaboration and technical communication.",
      technologies: ["Android", "Cross-platform", "Team Leadership", "Technical Documentation"]
    },
    {
      title: "Web Developer",
      company: "PLAN-B Cambodia (BEONE)",
      period: "November 2018 - January 2019",
      description: "Developed responsive web applications without third-party frameworks using custom CSS. Built backend functionality and logic using PHP for various client projects.",
      technologies: ["PHP", "HTML/CSS", "JavaScript", "Custom Frameworks"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through enterprise mobile development, international collaboration, and technical leadership in Android development.
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

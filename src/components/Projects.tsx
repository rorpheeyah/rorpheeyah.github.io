
const Projects = () => {
  const projects = [
    {
      title: "Enterprise Finance Management Systems",
      description: "Led development of multiple enterprise-level Android applications including 비즈플레이 On-Premise, 비즈플레이4.0, and card-specific expense management implementations for major Korean companies.",
      technologies: ["Kotlin", "Java", "Android SDK", "MVVM", "Jetpack Compose"],
      link: "#",
      status: "Live"
    },
    {
      title: "Lumhat - Educational Mobile Platform",
      description: "Educational mobile platform with comprehensive UX research focused on optimizing educational content delivery. Designed complete UI/UX system using Figma with cross-platform functionality.",
      technologies: ["Kotlin", "Figma", "UX Research", "Cross-platform"],
      link: "https://apkpure.net/lumhat",
      status: "Live"
    },
    {
      title: "DayDo - Productivity & Task Management",
      description: "Productivity and task management system with research-based efficient task management methodologies. Features intuitive interface and RESTful API integration.",
      technologies: ["Kotlin", "RESTful API", "Figma", "Task Management"],
      link: "https://apkpure.net/daydo",
      status: "Live"
    },
    {
      title: "Business Productivity Suite",
      description: "Collection of enterprise applications including 트리플러스, 비즈캘린더, 결재함 & KT 결재함, 비즈메모, and 그린메세지 for comprehensive business workflow management.",
      technologies: ["Kotlin", "Java", "Enterprise Architecture", "Business Logic"],
      link: "#",
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of enterprise-grade mobile applications and research projects, demonstrating expertise in Android development and modern architecture patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-accent/20 rounded-xl p-6 border border-border hover:bg-accent/30 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-primary font-medium hover:underline transition-colors duration-300"
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

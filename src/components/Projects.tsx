
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "#",
      status: "Live"
    },
    {
      title: "Task Management App",
      description: "Cross-platform mobile app for team collaboration and project management with real-time updates.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      link: "#",
      status: "In Development"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "OpenWeather API"],
      link: "#",
      status: "Live"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, dark mode, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
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

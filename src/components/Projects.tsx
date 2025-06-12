
const Projects = () => {
  const projectCategories = [
    {
      title: "Finance & Corporate Management Systems",
      description: "Enterprise expense management and corporate card solutions",
      projects: [
        {
          name: "비즈플레이 On-Premise & 비즈플레이4.0",
          description: "Enterprise expense management platforms with comprehensive workflow automation",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "MVVM", "Enterprise Architecture"]
        },
        {
          name: "현대카드/삼성카드/우리카드 비즈플레이",
          description: "Card-specific expense management implementations for major Korean financial institutions",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Financial APIs", "Security"]
        },
        {
          name: "IBK법인카드/KT 법인카드",
          description: "Corporate card management systems with real-time transaction tracking",
          image: "/placeholder.svg",
          technologies: ["Java", "Kotlin", "Payment Integration"]
        },
        {
          name: "BZPEXPENSE/bzpExpenseGov",
          description: "Government and enterprise expense tracking applications",
          image: "/placeholder.svg",
          technologies: ["Android SDK", "Government Standards", "Security"]
        }
      ]
    },
    {
      title: "Business Productivity Solutions",
      description: "Comprehensive business workflow and productivity applications",
      projects: [
        {
          name: "트리플러스",
          description: "Business productivity suite with integrated workflow management",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Jetpack Compose", "Productivity Tools"]
        },
        {
          name: "비즈캘린더",
          description: "Advanced calendar management system for business scheduling",
          image: "/placeholder.svg",
          technologies: ["Java", "Calendar APIs", "Business Logic"]
        },
        {
          name: "결재함 & KT 결재함",
          description: "Approval management platforms for corporate decision workflows",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Workflow Engine", "Corporate Integration"]
        },
        {
          name: "비즈메모 & 그린메세지",
          description: "Note-taking and messaging platforms for business communication",
          image: "/placeholder.svg",
          technologies: ["Android SDK", "Real-time Messaging", "Business Tools"]
        }
      ]
    },
    {
      title: "Financial Technology Implementations",
      description: "Payment systems and financial technology solutions",
      projects: [
        {
          name: "체크페이",
          description: "Payment verification system with advanced security features",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Payment Security", "Verification APIs"]
        },
        {
          name: "뱅크노트",
          description: "Banking interface solution for streamlined financial operations",
          image: "/placeholder.svg",
          technologies: ["Java", "Banking APIs", "Financial UI/UX"]
        },
        {
          name: "WABOOKS",
          description: "Comprehensive accounting applications for business financial management",
          image: "/placeholder.svg",
          technologies: ["Android SDK", "Accounting Logic", "Data Analytics"]
        },
        {
          name: "WeBill 365",
          description: "Billing management application with automated invoice processing",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Billing Systems", "Automation"]
        }
      ]
    },
    {
      title: "Academic Research Projects",
      description: "Educational and productivity applications with research components",
      projects: [
        {
          name: "Lumhat",
          description: "Educational mobile platform optimizing content delivery through UX research",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "UX Research", "Educational Tech"],
          link: "https://apkpure.net/lumhat"
        },
        {
          name: "DayDo",
          description: "Productivity and task management system with research-based methodologies",
          image: "/placeholder.svg",
          technologies: ["Kotlin", "Task Management", "RESTful APIs"],
          link: "https://apkpure.net/daydo"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of enterprise-grade mobile applications organized by domain expertise, 
            demonstrating leadership in Android development and modern architecture patterns.
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-accent/10 rounded-2xl p-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-primary mb-4">{category.title}</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="aspect-video bg-accent/20 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center text-primary font-medium hover:underline transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            This represents selected highlights from my project portfolio. I have contributed to numerous additional 
            enterprise applications throughout my career at KOSIGN and during international assignments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, X, Code } from "lucide-react";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedCount, setDisplayedCount] = useState(16); // Progressive loading
  const sectionRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { content, loading, error } = usePortfolioContent();

  // Get project data early
  const projectCategories = content?.projectCategories || [];
  const allProjects = projectCategories.flatMap(category =>
    category?.projects?.map(project => ({
      ...project,
      categoryTitle: category.title
    })) || []
  );

  // Section visibility observer
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

  // Progressive loading observer
  useEffect(() => {
    if (!loaderRef.current || displayedCount >= allProjects.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedCount(prev => Math.min(prev + 16, allProjects.length));
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [displayedCount, allProjects.length]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Show loading state
  if (loading) {
    return (
      <section id="projects" className="py-24 px-6 lg:px-8 bg-background text-foreground" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded mb-4 mx-auto max-w-md"></div>
              <div className="h-6 bg-muted rounded mx-auto max-w-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error || !content) {
    return (
      <section id="projects" className="py-24 px-6 lg:px-8 bg-background text-foreground" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <p className="text-muted-foreground">Failed to load projects data. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  // Additional safety check for empty or invalid project categories
  if (!projectCategories || projectCategories.length === 0) {
    return (
      <section id="projects" className="py-24 px-6 lg:px-8 bg-background text-foreground" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <p className="text-muted-foreground">No projects available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  // Only show the projects up to displayedCount
  const visibleProjects = allProjects.slice(0, displayedCount);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-background text-foreground" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Projects
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A collection of Android applications I've built, maintained, and contributed to throughout my career in enterprise mobile development.
          </p>
        </div>

        {/* Projects Container - Scale AI-inspired design */}
        <div
          className="border border-border/50 rounded-2xl p-6 md:p-12 bg-card">
          <div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={project.name}
                className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openProject(project)}
              >
                <div className="flex flex-col items-center text-center">
                  {/* App Icon */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 rounded-2xl overflow-hidden bg-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-border/20 group-hover:border-border/40">
                      <img
                        src={project.remoteImage || project.image}
                        alt={project.name}
                        onError={(e) => {
                          e.currentTarget.src = project.image || "/images/placeholder.svg";
                        }}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading indicator for progressive loading */}
        {displayedCount < allProjects.length && (
          <div ref={loaderRef} className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span>Loading more projects...</span>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-border/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 rounded-xl bg-accent/60 hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-8 md:p-10 border-b border-border/30">
                <div className="flex items-start space-x-6 md:space-x-8">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-accent/50 flex items-center justify-center flex-shrink-0 border border-border/20">
                    <img
                      src={selectedProject.remoteImage || selectedProject.image}
                      alt={selectedProject.name}
                      onError={(e) => {
                        e.currentTarget.src = selectedProject.image || "/images/placeholder.svg";
                      }}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {selectedProject.name}
                    </h3>
                    <span
                      className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-3 py-1 bg-accent/50 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent/60 text-muted-foreground rounded-xl text-sm font-medium border border-border/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="flex justify-center">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View on Play Store</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;


import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rorpheeyah_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </header>

      {/* CV Content */}
      <main className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* CV Document */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            {/* CV Header */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Rorpheeyah</h1>
                  <h2 className="text-xl md:text-2xl font-light opacity-90 mb-4">Software Engineer</h2>
                  <p className="text-base opacity-80 leading-relaxed max-w-2xl">
                    Passionate software engineer with expertise in full-stack development, mobile applications, 
                    and modern web technologies. Committed to creating exceptional user experiences and innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-muted/30 p-6 border-b border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>rorpheeyah@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+60 19-339 0296</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  <a href="https://rorpheeyah.github.io/" className="hover:text-primary transition-colors">
                    rorpheeyah.github.io
                  </a>
                </div>
              </div>
            </div>

            {/* CV Body */}
            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced software engineer with a strong background in full-stack development, mobile applications, 
                  and system architecture. Proven track record of delivering high-quality solutions using modern technologies 
                  including React, Node.js, Python, and cloud platforms. Passionate about clean code, user experience, 
                  and continuous learning.
                </p>
              </section>

              {/* Technical Skills */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Next.js, Vue.js</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Python, Express.js, FastAPI, RESTful APIs, GraphQL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Mobile Development</h4>
                    <p className="text-sm text-muted-foreground">React Native, Flutter, iOS, Android</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Database & Cloud</h4>
                    <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB, Firebase, AWS, Google Cloud, Docker</p>
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Senior Software Engineer</h4>
                      <span className="text-sm text-muted-foreground">2022 - Present</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Tech Innovate Solutions</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Led development of enterprise web applications serving 10,000+ users</li>
                      <li>Architected and implemented microservices using Node.js and containerization</li>
                      <li>Mentored junior developers and established code review processes</li>
                      <li>Improved application performance by 40% through optimization techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Full Stack Developer</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2022</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Digital Solutions Corp</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Developed responsive web applications using React and TypeScript</li>
                      <li>Built RESTful APIs with Python and FastAPI</li>
                      <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                      <li>Implemented automated testing and CI/CD pipelines</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Education
                </h3>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">Bachelor of Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2016 - 2020</span>
                  </div>
                  <p className="text-primary font-medium mb-2">University of Technology Malaysia</p>
                  <p className="text-sm text-muted-foreground">Specialized in Software Engineering and Database Systems</p>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Notable Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">E-Commerce Platform</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard
                    </p>
                    <p className="text-xs text-primary">React • Node.js • PostgreSQL • Stripe API</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Mobile Task Manager</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Cross-platform mobile app for team collaboration and project management
                    </p>
                    <p className="text-xs text-primary">React Native • Firebase • Push Notifications</p>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/rorpheeyah" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rorpheeyah" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-8 text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Download className="w-5 h-5" />
              Download PDF Version
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Get a PDF copy of this CV for offline viewing
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;

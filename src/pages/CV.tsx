import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import cvPdf from '../assets/documents/cv.pdf';
import profileImage from '../assets/images/profile.png';

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Math_Rorpheeyah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Math Rorpheeyah</h1>
                  <h2 className="text-xl md:text-2xl font-light opacity-90 mb-4">Senior Android Developer | Sub-Leader Mobile Department</h2>
                  <p className="text-base opacity-80 leading-relaxed max-w-2xl">
                    Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. 
                    Serving as Sub-Leader of the Mobile Department at KOSIGN, leading development initiatives and mentoring junior engineers.
                  </p>
                </div>
                
                {/* Professional Profile Photo */}
                <div className="flex-shrink-0">
                  <div className="group relative">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500"></div>
                    
                    {/* Glass morphism container */}
                    <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                      {/* Profile image */}
                      <img
                        src={profileImage}
                        alt="Math Rorpheeyah - Senior Android Developer"
                        className="w-full h-full object-cover rounded-full ring-2 ring-white/20 hover:ring-white/40 transition-all duration-500"
                      />
                      
                      {/* Shine effect overlay */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Professional status indicator */}
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-muted/30 p-6 border-b border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:mathrorpheeyah@gmail.com" className="hover:text-primary transition-colors">
                    mathrorpheeyah@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <a href="https://linkedin.com/in/rorpheeyah" className="hover:text-primary transition-colors">
                    linkedin.com/in/rorpheeyah
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Github className="w-4 h-4 text-primary" />
                  <a href="https://github.com/rorpheeyah" className="hover:text-primary transition-colors">
                    github.com/rorpheeyah
                  </a>
                </div>
              </div>
            </div>

            {/* CV Body */}
            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. 
                  Serving as Sub-Leader of the Mobile Department at KOSIGN, I lead development initiatives and mentor junior engineers. 
                  Passionate about scalable mobile architecture, intuitive UI/UX, and the future of mobile development through AI and emerging technologies.
                </p>
              </section>

              {/* Work Experience */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Senior Android Developer & Sub-Leader, Mobile Department</h4>
                      <span className="text-sm text-muted-foreground">March 2020 - Present</span>
                    </div>
                    <p className="text-primary font-medium mb-2">KOSIGN [Korea Software Innovation Global Network] | Phnom Penh, Cambodia</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Lead development of enterprise-level Android applications utilizing Kotlin and Java</li>
                      <li>Oversee team operations as Sub-Leader of the Mobile Department</li>
                      <li>Implement and optimize modern architecture patterns (MVVM, Clean Architecture)</li>
                      <li>Pioneer adoption of Jetpack Compose for UI development across multiple projects</li>
                      <li>Supervise project delegation and provide mentorship to junior developers</li>
                      <li>Recognized with "Best Rookie" award (November 2020)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">International Assignment – Business Trip</h4>
                      <span className="text-sm text-muted-foreground">October 2022 - August 2023</span>
                    </div>
                    <p className="text-primary font-medium mb-2">비즈플레이 - Bizplay (KOSIGN - South Korea Division) | Busan, South Korea</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Selected for a one-year assignment to support collaboration between Cambodian and South Korean mobile development teams</li>
                      <li>Reviewed technical documents from Korean teams, analyzed project requirements, and prepared task breakdowns</li>
                      <li>Inspected and verified feature behavior across web and mobile platforms</li>
                      <li>Worked directly with Korean developers, testers, and department heads on feature planning and QA</li>
                      <li>Served as a liaison between teams, facilitating communication and cross-cultural collaboration</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Web Developer</h4>
                      <span className="text-sm text-muted-foreground">November 2018 - January 2019</span>
                    </div>
                    <p className="text-primary font-medium mb-2">PLAN-B Cambodia (BEONE) | Phnom Penh, Cambodia</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Developed responsive web applications without third-party frameworks (custom CSS)</li>
                      <li>Built backend functionality and logic using PHP</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Notable Projects */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Significant Projects & Contributions
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  The following represents a selection of my most active and significant projects. My complete portfolio includes additional enterprise applications and mobile contributions.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Enterprise Mobile Application Development</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Led development and maintenance of multiple enterprise-level applications including:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Finance & Corporate Management Systems</h5>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                          <li>비즈플레이 On-Premise & 비즈플레이4.0 - Enterprise expense management platforms</li>
                          <li>현대카드/삼성카드/우리카드 비즈플레이 - Card-specific expense management implementations</li>
                          <li>IBK법인카드/KT 법인카드 - Corporate card management systems</li>
                          <li>비플 법인카드/개인카드 - Card management applications</li>
                          <li>BZPEXPENSE/bzpExpenseGov - Expense tracking application</li>
                          <li>비즈플레이(KEIT) - Specialized expense tracking solution</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Business Productivity Solutions</h5>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                          <li>트리플러스 - Business productivity suite</li>
                          <li>비즈캘린더 - Calendar management system</li>
                          <li>결재함 & KT 결재함 - Approval management platforms</li>
                          <li>비즈메모 - Note-taking application for business</li>
                          <li>그린메세지 - Messaging platform</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Financial Technology Implementations</h5>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                          <li>체크페이 - Payment verification system</li>
                          <li>뱅크노트 - Banking interface solution</li>
                          <li>WABOOKS - Accounting applications</li>
                          <li>WeBill 365 - Billing management application</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      This list represents selected highlights from my project portfolio. I have contributed to numerous additional enterprise applications throughout my career.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Academic Research Projects</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Developed innovative applications with research components:
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-foreground">Lumhat - Educational mobile platform</h5>
                        <p className="text-sm text-muted-foreground mb-1">Application Download: apkpure.net/lumhat</p>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                          <li>Led UX research focused on optimizing educational content delivery</li>
                          <li>Designed comprehensive UI/UX system using Figma</li>
                          <li>Implemented cross-platform functionality (mobile and web)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground">DayDo - Productivity and task management system</h5>
                        <p className="text-sm text-muted-foreground mb-1">Application Download: apkpure.net/daydo</p>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                          <li>Researched efficient task management methodologies</li>
                          <li>Designed intuitive interface using Figma</li>
                          <li>Implemented backend connectivity through RESTful API integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Mobile Development (Core Expertise)</h4>
                    <p className="text-sm text-muted-foreground">Kotlin (Advanced), Java (Advanced), Android SDK, Jetpack Compose</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Architecture & Patterns</h4>
                    <p className="text-sm text-muted-foreground">MVVM, Clean Architecture, Android Architecture Components</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Full-Stack & Database</h4>
                    <p className="text-sm text-muted-foreground">JavaScript, HTML/CSS, PHP, SQL, MySQL, PostgreSQL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Tools & Design</h4>
                    <p className="text-sm text-muted-foreground">Git/GitHub/GitLab, Figma, RESTful API Integration</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Bachelor of Science, Computer Science</h4>
                      <span className="text-sm text-muted-foreground">January 2016 - November 2021</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Royal University of Phnom Penh</p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Advanced Software Development</h4>
                      <span className="text-sm text-muted-foreground">2019 - 2020</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Korea Software HRD Center</p>
                    <p className="text-sm text-muted-foreground">Specialized in full-stack application development and mobile application research</p>
                  </div>
                </div>
              </section>

              {/* Awards & Recognition */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Awards & Recognition
                </h3>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Best Rookie Award</h4>
                  <p className="text-sm text-muted-foreground mb-2">Presented by Seol WookHwan (CEO), KOSIGN, November 2020</p>
                  <p className="text-xs text-primary">LinkedIn Skill Assessments: Android Development, Web Development</p>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  Languages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Khmer</h4>
                    <p className="text-sm text-muted-foreground">Native</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">English</h4>
                    <p className="text-sm text-muted-foreground">Limited Working Proficiency</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Korean</h4>
                    <p className="text-sm text-muted-foreground">Basic</p>
                  </div>
                </div>
              </section>

              {/* Current Interests */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  What I'm Exploring Now
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Artificial Intelligence & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Exploring how AI can enhance mobile applications through personalization, automation, and smart user experiences.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Jetpack Compose & Android Architecture</h4>
                    <p className="text-sm text-muted-foreground">Deepening expertise in Jetpack Compose and refining best practices for scalable, maintainable UI architecture.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced Education</h4>
                    <p className="text-sm text-muted-foreground">Considering pursuing a Master's degree in AI, mobile computing, or related fields to strengthen innovation capacity.</p>
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

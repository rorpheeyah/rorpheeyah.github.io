
import { Download } from 'lucide-react';

const TraditionalCV = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      {/* Print/Download Button - Hidden in print */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-[#004E93] text-white rounded-lg font-medium hover:bg-[#004E93]/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <div className="text-center border-b-2 border-[#004E93] pb-6 mb-8">
          <h1 className="text-4xl font-bold text-[#004E93] mb-2">MATH RORPHEEYAH</h1>
          <h2 className="text-xl text-gray-700 mb-4">Senior Android Developer | Sub-Leader Mobile Department (Android)</h2>
          <p className="text-gray-600 mb-2">Based in Phnom Penh, Cambodia</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Email: mathrorpheeyah@gmail.com | rorpheeyah@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/rorpheeyah</p>
            <p>GitHub: github.com/rorpheeyah | X: x.com/rorpheeyah</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">SUMMARY</h3>
          <p className="text-gray-700 leading-relaxed">
            Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. 
            Serving as Sub-Leader of the Mobile Department at KOSIGN, I lead development initiatives and mentor junior engineers. 
            Passionate about scalable mobile architecture, intuitive UI/UX, and the future of mobile development through AI and emerging technologies.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">Senior Android Developer & Sub-Leader, Mobile Department</h4>
              <span className="text-gray-600 text-sm">March 2020 - Present</span>
            </div>
            <p className="text-[#004E93] font-medium mb-2">KOSIGN [Korea Software Innovation Global Network] | Phnom Penh, Cambodia</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
              <li>Lead development of enterprise-level Android applications utilizing Kotlin and Java</li>
              <li>Oversee team operations as Sub-Leader of the Mobile Department</li>
              <li>Implement and optimize modern architecture patterns (MVVM, Clean Architecture)</li>
              <li>Pioneer adoption of Jetpack Compose for UI development across multiple projects</li>
              <li>Supervise project delegation and provide mentorship to junior developers</li>
              <li>Recognized with "Best Rookie" award (November 2020)</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">International Assignment – Business Trip</h4>
              <span className="text-gray-600 text-sm">October 2022 - August 2023</span>
            </div>
            <p className="text-[#004E93] font-medium mb-2">비즈플레이 - Bizplay (KOSIGN - South Korea Division) | Busan, South Korea</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
              <li>Selected for a one-year assignment to support collaboration between the Cambodian and South Korean mobile development teams</li>
              <li>Reviewed technical documents from Korean teams, analyzed project requirements, and prepared task breakdowns for the Cambodia team</li>
              <li>Inspected and verified feature behavior across web and mobile platforms to ensure consistency and alignment</li>
              <li>Worked directly with Korean developers, testers, and department heads (부장) on feature planning, QA, and production readiness</li>
              <li>Served as a liaison between teams, facilitating communication, resolving blockers, and ensuring smooth cross-cultural collaboration</li>
              <li>Participated in cross-functional meetings and contributed to strengthening partnerships between global teams</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">Web Developer</h4>
              <span className="text-gray-600 text-sm">November 2018 - January 2019</span>
            </div>
            <p className="text-[#004E93] font-medium mb-2">PLAN-B Cambodia (BEONE) | Phnom Penh, Cambodia</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
              <li>Developed responsive web applications without third-party frameworks (custom CSS)</li>
              <li>Built backend functionality and logic using PHP</li>
            </ul>
          </div>
        </section>

        {/* Academic Recognitions & Awards */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">ACADEMIC RECOGNITIONS & AWARDS</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
            <li><strong>Best Rookie Award</strong> - Presented by Seol WookHwan (CEO), KOSIGN, November 2020</li>
            <li><strong>LinkedIn Skill Assessments</strong></li>
            <li style={{ listStyle: 'none', marginLeft: '20px' }}>- Android Development</li>
            <li style={{ listStyle: 'none', marginLeft: '20px' }}>- Web Development</li>
          </ul>
        </section>

        {/* Significant Projects & Contributions */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">SIGNIFICANT PROJECTS & CONTRIBUTIONS</h3>
          <p className="text-sm text-gray-600 mb-4">
            The following represents a selection of my most active and significant projects. My complete portfolio includes additional enterprise applications and technical contributions.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Enterprise Mobile Application Development</h4>
            <p className="text-sm text-gray-700 mb-3">Led development and maintenance of multiple enterprise-level applications including:</p>
            
            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Finance & Corporate Management Systems</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                <li>비즈플레이 On-Premise & 비즈플레이4.0 - Enterprise expense management platforms</li>
                <li>현대카드/삼성카드/우리카드 비즈플레이 - Card-specific expense management implementations</li>
                <li>IBK법인카드/KT 법인카드 - Corporate card management systems</li>
                <li>비플 법인카드/개인카드 - Card management applications</li>
                <li>BZPEXPENSE/bzpExpenseGov - Expense tracking application</li>
                <li>비즈플레이(KEIT) - Specialized expense tracking solution</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Business Productivity Solutions</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                <li>트리플러스 - Business productivity suite</li>
                <li>비즈캘린더 - Calendar management system</li>
                <li>결재함 & KT 결재함 - Approval management platforms</li>
                <li>비즈메모 - Note-taking application for business</li>
                <li>그린메세지 - Messaging platform</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Financial Technology Implementations</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                <li>체크페이 - Payment verification system</li>
                <li>뱅크노트 - Banking interface solution</li>
                <li>WABOOKS - Accounting applications</li>
                <li>WeBill 365 - Billing management application</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500 italic mt-3">
              This list represents selected highlights from my project portfolio. I have contributed to numerous additional enterprise applications throughout my career.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Academic Research Projects</h4>
            <p className="text-sm text-gray-700 mb-3">Developed innovative applications with research components:</p>
            
            <div className="mb-3">
              <h5 className="font-medium text-gray-800">Lumhat - Educational mobile platform</h5>
              <p className="text-sm text-gray-600 mb-1">Application Download: apkpure.net/lumhat</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                <li>Led UX research focused on optimizing educational content delivery</li>
                <li>Designed comprehensive UI/UX system using Figma</li>
                <li>Implemented cross-platform functionality (mobile and web)</li>
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="font-medium text-gray-800">DayDo - Productivity and task management system</h5>
              <p className="text-sm text-gray-600 mb-1">Application Download: apkpure.net/daydo</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                <li>Researched efficient task management methodologies</li>
                <li>Designed intuitive interface using Figma</li>
                <li>Implemented backend connectivity through RESTful API integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">EDUCATION</h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold">Bachelor of Science, Computer Science</h4>
              <span className="text-gray-600 text-sm">January 2016 - November 2021</span>
            </div>
            <p className="text-[#004E93] font-medium">Royal University of Phnom Penh</p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold">Advanced Software Development</h4>
              <span className="text-gray-600 text-sm">2019 - 2020</span>
            </div>
            <p className="text-[#004E93] font-medium mb-1">Korea Software HRD Center</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
              <li>Specialized in full-stack application development</li>
              <li>Focused on mobile application research and practical implementation</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Professional Development Courses</h4>
            <p className="text-[#004E93] font-medium mb-1">Cambodia-Korea Cooperation Center (CKCC)</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
              <li>App Development with JAVA (2018-2019)</li>
              <li>Web Application Development (2018)</li>
            </ul>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">TECHNICAL EXPERTISE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Programming Languages</h4>
              <div className="mb-3">
                <h5 className="font-medium text-gray-800 mb-1">Mobile Development (Core Expertise):</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>Kotlin (Advanced) - Primary Android development language</li>
                  <li>Java (Advanced) - Enterprise Android applications</li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="font-medium text-gray-800 mb-1">Full-Stack & Database:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>JavaScript (Intermediate) - Frontend integration & web development</li>
                  <li>HTML/CSS (Intermediate) - Web interfaces & responsive design</li>
                  <li>PHP (Intermediate) - Backend development & server logic</li>
                  <li>SQL - MySQL, PostgreSQL (Intermediate) - Database design & management</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Development Areas</h4>
              <div className="mb-3">
                <h5 className="font-medium text-gray-800 mb-1">Primary Focus:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>Android Application Development</li>
                  <li>Modern UI Implementation (Jetpack Compose)</li>
                  <li>Software Architecture Design (MVVM, Clean Architecture)</li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="font-medium text-gray-800 mb-1">Supporting Skills:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>UI/UX Design & Prototyping</li>
                  <li>RESTful API Integration</li>
                  <li>Backend System Integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Tools & Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Development Environment:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>Android SDK & Development Ecosystem</li>
                  <li>Jetpack Compose & Android Architecture Components</li>
                  <li>Git/GitHub/GitLab Version Control</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Design & Database:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-4">
                  <li>Figma (UI/UX Design)</li>
                  <li>Database Design & Implementation</li>
                  <li>Modern Development Architectures (MVVM, Clean Architecture)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Exploring Now */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">WHAT I'M EXPLORING NOW</h3>
          <p className="text-sm text-gray-700 mb-4">
            I'm continuously expanding my technical and academic knowledge with a focus on modern development trends. Currently, I'm exploring:
          </p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Artificial Intelligence & Machine Learning</h4>
              <p className="text-sm text-gray-700">Exploring how AI can enhance mobile applications through personalization, automation, and smart user experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold">Jetpack Compose & Android Architecture</h4>
              <p className="text-sm text-gray-700">Deepening my expertise in Jetpack Compose and refining best practices for scalable, maintainable UI architecture.</p>
            </div>
            <div>
              <h4 className="font-semibold">Cross-Platform Development Trends</h4>
              <p className="text-sm text-gray-700">Exploring the trade-offs between native Android development and modern cross-platform solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold">Advanced Education</h4>
              <p className="text-sm text-gray-700">Considering pursuing a Master's degree in AI, mobile computing, or related fields to strengthen my innovation capacity and long-term impact in tech.</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-[#004E93] border-b border-gray-300 pb-2 mb-4">LANGUAGES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">Khmer</h4>
              <p className="text-sm text-gray-700">(Native)</p>
            </div>
            <div>
              <h4 className="font-semibold">English</h4>
              <p className="text-sm text-gray-700">(Limited Working Proficiency)</p>
            </div>
            <div>
              <h4 className="font-semibold">Korean</h4>
              <p className="text-sm text-gray-700">(Basic)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TraditionalCV;

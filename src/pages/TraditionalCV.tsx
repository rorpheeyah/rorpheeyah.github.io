import { Download } from 'lucide-react';
import profileImg from '../assets/pf_1.png';
import styles from '../styles/cv.module.css';

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
      <div className={styles.cvRoot}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles['profile-image']}>
              <img src={profileImg} alt="Math Rorpheeyah" className="" />
            </div>
            <div className={styles['header-content']}>
              <h1 className="text-[24pt] font-bold mb-2 uppercase tracking-[1px]">Math Rorpheeyah</h1>
              <div className="job-title text-[14pt] mb-[15px] italic">
                Senior Android Developer | Sub-Leader Mobile Department (Android)
              </div>
              <div className="contact-info text-[11pt] leading-[1.3]">
                <em>Based in Phnom Penh, Cambodia</em><br />
                <em>Email:</em> <a href="mailto:mathrorpheeyah@gmail.com" className="text-black no-underline">mathrorpheeyah@gmail.com</a> | <a href="mailto:rorpheeyah@gmail.com" className="text-black no-underline">rorpheeyah@gmail.com</a><br />
                <em>LinkedIn:</em> <a href="https://www.linkedin.com/in/rorpheeyah/" className="text-black no-underline">linkedin.com/in/rorpheeyah</a><br />
                <em>GitHub:</em> <a href="https://github.com/rorpheeyah" className="text-black no-underline">github.com/rorpheeyah</a>
              </div>
            </div>
          </header>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Summary</h2>
            <div className="summary text-justify text-[11pt] leading-[1.4] mb-5">
              Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. Serving as Sub-Leader of the Mobile Department at KOSIGN, I lead development initiatives and mentor junior engineers. Passionate about scalable mobile architecture, intuitive UI/UX, and the future of mobile development through AI and emerging technologies.
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Professional Experience</h2>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">Senior Android Developer & Sub-Leader, Mobile Department</div>
              <div className="company-name italic mb-0.5 text-[11pt]">KOSIGN [Korea Software Innovation Global Network]</div>
              <div className="date-location text-[10pt] mb-2">March 2020 - Present | Phnom Penh, Cambodia</div>
              <ul className="my-2 ml-5 list-disc">
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Lead development of enterprise-level Android applications utilizing Kotlin and Java</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Oversee team operations as Sub-Leader of the Mobile Department</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Implement and optimize modern architecture patterns (MVVM, Clean Architecture)</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Pioneer adoption of Jetpack Compose for UI development across multiple projects</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Supervise project delegation and provide mentorship to junior developers</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Recognized with "Best Rookie" award (November 2020)</li>
              </ul>
            </div>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">International Assignment – Business Trip</div>
              <div className="company-name italic mb-0.5 text-[11pt]">비즈플레이 - Bizplay (KOSIGN - South Korea Division)</div>
              <div className="date-location text-[10pt] mb-2">October 2022 - August 2023 | Busan, South Korea</div>
              <ul className="my-2 ml-5 list-disc">
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Selected for a one-year assignment to support collaboration between the Cambodian and South Korean mobile development teams</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Reviewed technical documents from Korean teams, analyzed project requirements, and prepared task breakdowns for the Cambodia team</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Inspected and verified feature behavior across web and mobile platforms to ensure consistency and alignment</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Worked directly with Korean developers, testers, and department heads (부장) on feature planning, QA, and production readiness</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Served as a liaison between teams, facilitating communication, resolving blockers, and ensuring smooth cross-cultural collaboration</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Participated in cross-functional meetings and contributed to strengthening partnerships between global teams</li>
              </ul>
            </div>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">Web Developer</div>
              <div className="company-name italic mb-0.5 text-[11pt]">PLAN-B Cambodia (BEONE)</div>
              <div className="date-location text-[10pt] mb-2">November 2018 - January 2019 | Phnom Penh, Cambodia</div>
              <ul className="my-2 ml-5 list-disc">
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Developed responsive web applications without third-party frameworks (custom CSS)</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Built backend functionality and logic using PHP</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Academic Recognitions & Awards</h2>
            <ul className="awards-list mt-2">
              <li className="mb-1.5 text-[11pt]"><strong className="font-bold">Best Rookie Award</strong> - Presented by Seol WookHwan (CEO), KOSIGN, November 2020</li>
              <li className="mb-1.5 text-[11pt]"><strong className="font-bold">LinkedIn Skill Assessments</strong></li>
              <ul className="ml-5 list-disc">
                <li className="mb-1.5 text-[11pt]">Android Development</li>
                <li className="mb-1.5 text-[11pt]">Web Development</li>
              </ul>
            </ul>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Significant Projects & Contributions</h2>
            <p><em>The following represents a selection of my most active and significant projects. My complete portfolio includes additional enterprise applications and technical contributions.</em></p>
            <div className="project-section mt-4">
              <div className="project-category mb-5">
                <h3 className="text-[12pt] font-bold mt-5 mb-2.5">Enterprise Mobile Application Development</h3>
                <p>Led development and maintenance of multiple enterprise-level applications including:</p>

                <h4 className="text-[11pt] font-bold mt-[15px] mb-2 underline">Finance & Corporate Management Systems</h4>
                <ul className="project-list mt-2 ml-5 list-disc">
                  <li className="mb-0.5 text-[10pt]"><strong>비즈플레이 On-Premise & 비즈플레이4.0</strong> - Enterprise expense management platforms</li>
                  <li className="mb-0.5 text-[10pt]"><strong>현대카드/삼성카드/우리카드 비즈플레이</strong> - Card-specific expense management implementations</li>
                  <li className="mb-0.5 text-[10pt]"><strong>IBK법인카드/KT 법인카드</strong> - Corporate card management systems</li>
                  <li className="mb-0.5 text-[10pt]"><strong>비플 법인카드/개인카드</strong> - Card management applications</li>
                  <li className="mb-0.5 text-[10pt]"><strong>BZPEXPENSE/bzpExpenseGov</strong> - Expense tracking application</li>
                  <li className="mb-0.5 text-[10pt]"><strong>비즈플레이(KEIT)</strong> - Specialized expense tracking solution</li>
                </ul>

                <h4 className="text-[11pt] font-bold mt-[15px] mb-2 underline">Business Productivity Solutions</h4>
                <ul className="project-list mt-2 ml-5 list-disc">
                  <li className="mb-0.5 text-[10pt]"><strong>트리플러스</strong> - Business productivity suite</li>
                  <li className="mb-0.5 text-[10pt]"><strong>비즈캘린더</strong> - Calendar management system</li>
                  <li className="mb-0.5 text-[10pt]"><strong>결재함 & KT 결재함</strong> - Approval management platforms</li>
                  <li className="mb-0.5 text-[10pt]"><strong>비즈메모</strong> - Note-taking application for business</li>
                  <li className="mb-0.5 text-[10pt]"><strong>그린메세지</strong> - Messaging platform</li>
                </ul>

                <h4 className="text-[11pt] font-bold mt-[15px] mb-2 underline">Financial Technology Implementations</h4>
                <ul className="project-list mt-2 ml-5 list-disc">
                  <li className="mb-0.5 text-[10pt]"><strong>체크페이</strong> - Payment verification system</li>
                  <li className="mb-0.5 text-[10pt]"><strong>뱅크노트</strong> - Banking interface solution</li>
                  <li className="mb-0.5 text-[10pt]"><strong>WABOOKS</strong> - Accounting applications</li>
                  <li className="mb-0.5 text-[10pt]"><strong>WeBill 365</strong> - Billing management application</li>
                </ul>

                <p><em>This list represents selected highlights from my project portfolio. I have contributed to numerous additional enterprise applications throughout my career.</em></p>
              </div>

              <div className="project-category mb-5">
                <h3 className="text-[12pt] font-bold mt-5 mb-2.5">Academic Research Projects</h3>
                <p>Developed innovative applications with research components:</p>

                <div className="project-highlight my-2.5 p-2.5 break-inside-avoid">
                  <h4 className="mt-0 mb-1 text-[11pt] font-bold">Lumhat - Educational mobile platform</h4>
                  <p><strong>Application Download:</strong> <a href="https://apkpure.net/lumhat/org.khmeracademy.lumhat" className="text-black underline">apkpure.net/lumhat</a></p>
                  <ul className="ml-5 list-disc">
                    <li className="mb-0.5 text-[10pt]">Led UX research focused on optimizing educational content delivery</li>
                    <li className="mb-0.5 text-[10pt]">Designed comprehensive UI/UX system using Figma</li>
                    <li className="mb-0.5 text-[10pt]">Implemented cross-platform functionality (mobile and web)</li>
                  </ul>
                </div>

                <div className="project-highlight my-2.5 p-2.5 break-inside-avoid">
                  <h4 className="mt-0 mb-1 text-[11pt] font-bold">DayDo - Productivity and task management system</h4>
                  <p><strong>Application Download:</strong> <a href="https://apkpure.net/daydo/com.kshrd.daydo" className="text-black underline">apkpure.net/daydo</a></p>
                  <ul className="ml-5 list-disc">
                    <li className="mb-0.5 text-[10pt]">Researched efficient task management methodologies</li>
                    <li className="mb-0.5 text-[10pt]">Designed intuitive interface using Figma</li>
                    <li className="mb-0.5 text-[10pt]">Implemented backend connectivity through RESTful API integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Education</h2>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">Bachelor of Science, Computer Science</div>
              <div className="company-name italic mb-0.5 text-[11pt]">Royal University of Phnom Penh</div>
              <div className="date-location text-[10pt] mb-2">January 2016 - November 2021</div>
            </div>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">Advanced Software Development</div>
              <div className="company-name italic mb-0.5 text-[11pt]">Korea Software HRD Center</div>
              <div className="date-location text-[10pt] mb-2">2019 - 2020</div>
              <ul className="my-2 ml-5 list-disc">
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Specialized in full-stack application development</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Focused on mobile application research and practical implementation</li>
              </ul>
            </div>

            <div className="experience-entry mb-5 break-inside-avoid">
              <div className="position-title font-bold text-[12pt] mb-1">Professional Development Courses</div>
              <div className="company-name italic mb-0.5 text-[11pt]">Cambodia-Korea Cooperation Center (CKCC)</div>
              <ul className="my-2 ml-5 list-disc">
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">App Development with JAVA (2018-2019)</li>
                <li className="mb-1 text-[11pt] text-justify leading-[1.3]">Web Application Development (2018)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Technical Expertise</h2>

            <div className="skills-section mt-4">
              <div className="skill-group mb-4">
                <h4 className="text-[11pt] mb-1 underline">Programming Languages</h4>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Mobile Development (Core Expertise):</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">Kotlin (Advanced) - Primary Android development language</li>
                  <li className="mb-1 text-[11pt]">Java (Advanced) - Enterprise Android applications</li>
                </ul>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Full-Stack & Database:</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">JavaScript (Intermediate) - Frontend integration & web development</li>
                  <li className="mb-1 text-[11pt]">HTML/CSS (Intermediate) - Web interfaces & responsive design</li>
                  <li className="mb-1 text-[11pt]">PHP (Intermediate) - Backend development & server logic</li>
                  <li className="mb-1 text-[11pt]">SQL - MySQL, PostgreSQL (Intermediate) - Database design & management</li>
                </ul>
              </div>

              <div className="skill-group mb-4">
                <h4 className="text-[11pt] mb-1 underline">Development Areas</h4>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Primary Focus:</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">Android Application Development</li>
                  <li className="mb-1 text-[11pt]">Modern UI Implementation (Jetpack Compose)</li>
                  <li className="mb-1 text-[11pt]">Software Architecture Design (MVVM, Clean Architecture)</li>
                </ul>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Supporting Skills:</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">UI/UX Design & Prototyping</li>
                  <li className="mb-1 text-[11pt]">RESTful API Integration</li>
                  <li className="mb-1 text-[11pt]">Backend System Integration</li>
                </ul>
              </div>

              <div className="skill-group mb-4">
                <h4 className="text-[11pt] mb-1 underline">Tools & Technologies</h4>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Development Environment:</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">Android SDK & Development Ecosystem</li>
                  <li className="mb-1 text-[11pt]">Jetpack Compose & Android Architecture Components</li>
                  <li className="mb-1 text-[11pt]">Git/GitHub/GitLab Version Control</li>
                </ul>
                <p className="mb-1 text-[11pt] leading-[1.3]"><strong className="font-bold">Design & Database:</strong></p>
                <ul className="ml-5 list-disc">
                  <li className="mb-1 text-[11pt]">Figma (UI/UX Design)</li>
                  <li className="mb-1 text-[11pt]">Database Design & Implementation</li>
                  <li className="mb-1 text-[11pt]">Modern Development Architectures (MVVM, Clean Architecture)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">What I'm Exploring Now</h2>
            <p>I'm continuously expanding my technical and academic knowledge with a focus on modern development trends. Currently, I'm exploring:</p>

            <div className="interest-item my-2.5 p-2 break-inside-avoid">
              <h4 className="mt-0 mb-1 text-[11pt] font-bold">Artificial Intelligence & Machine Learning</h4>
              <p className="leading-[1.3] m-0 text-[10pt]">Exploring how AI can enhance mobile applications through personalization, automation, and smart user experiences.</p>
            </div>

            <div className="interest-item my-2.5 p-2 break-inside-avoid">
              <h4 className="mt-0 mb-1 text-[11pt] font-bold">Jetpack Compose & Android Architecture</h4>
              <p className="leading-[1.3] m-0 text-[10pt]">Deepening my expertise in Jetpack Compose and refining best practices for scalable, maintainable UI architecture.</p>
            </div>

            <div className="interest-item my-2.5 p-2 break-inside-avoid">
              <h4 className="mt-0 mb-1 text-[11pt] font-bold">Cross-Platform Development Trends</h4>
              <p className="leading-[1.3] m-0 text-[10pt]">Exploring the trade-offs between native Android development and modern cross-platform solutions.</p>
            </div>

            <div className="interest-item my-2.5 p-2 break-inside-avoid">
              <h4 className="mt-0 mb-1 text-[11pt] font-bold">Advanced Education</h4>
              <p className="leading-[1.3] m-0 text-[10pt]">Considering pursuing a Master's degree in AI, mobile computing, or related fields to strengthen my innovation capacity and long-term impact in tech.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[14pt] font-bold mt-[25px] mb-[15px] uppercase tracking-[0.5px] border-b border-black pb-[3px]">Languages</h2>
            <ul className="my-2 ml-5 list-disc">
              <li className="mb-1 text-[11pt]">Khmer (Native)</li>
              <li className="mb-1 text-[11pt]">English (Limited Working Proficiency)</li>
              <li className="mb-1 text-[11pt]">Korean (Basic)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TraditionalCV;

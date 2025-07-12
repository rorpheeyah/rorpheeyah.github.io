import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  MapPin,
  GraduationCap,
  Award,
  Code,
  Globe,
  Users,
  Zap,
  BookOpen,
  Trophy,
  Phone,
  Briefcase,
  Sun,
  Moon
} from 'lucide-react';

// React Icons for social media
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';
import {FaWhatsapp, FaXTwitter} from 'react-icons/fa6';
import {useTheme} from '../contexts/ThemeContext';

const CV = () => {
  const {isDarkMode, toggleTheme} = useTheme();

  // Get logo source based on theme
  const getLogoSrc = () => {
    return isDarkMode ? '/ic_seal_horizontal_white_filled.png' : '/ic_seal_horizontal_black_filled.png';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Math_Rorpheeyah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mathrorpheeyah@gmail.com',
      value: 'mathrorpheeyah@gmail.com',
      description: 'For project inquiries and collaborations',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+855123013045',
      value: '012 301 345',
      description: 'Direct contact for urgent matters',
    },
    {
      icon: MapPin,
      label: 'Location',
      href: 'https://maps.google.com/?q=Phnom+Penh,+Cambodia',
      value: 'Phnom Penh, Cambodia',
      description: 'Based in Cambodia',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rorpheeyah',
      value: 'linkedin.com/in/rorpheeyah',
      description: 'Professional networking and opportunities',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/rorpheeyah',
      value: 'github.com/rorpheeyah',
      description: 'Open source projects',
    },
    {
      icon: FaXTwitter,
      label: 'X',
      href: 'https://x.com/rorpheeyah',
      value: 'x.com/rorpheeyah',
      description: 'Tech discussions',
    },
    {
      icon: FaTelegram,
      label: 'Telegram',
      href: 'https://t.me/rorpheeyah',
      value: 't.me/rorpheeyah',
      description: 'Quick messaging',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rorpheeyah',
      value: 'instagram.com/rorpheeyah',
      description: 'Behind the scenes',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      href: 'https://facebook.com/rorpheeyah',
      value: 'facebook.com/rorpheeyah',
      description: 'Community updates',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/85512301345',
      value: 'wa.me/85512301345',
      description: 'Direct messaging',
    }
  ];

  const skills = {
    mobile: [
      'Kotlin (Advanced)',
      'Java (Advanced)',
      'Android SDK',
      'Jetpack Compose',
      'MVVM',
      'Clean Architecture',
      'Android Architecture Components',
    ],
    backend: [
      'RESTful API Integration',
      'PHP (Intermediate)',
      'MySQL',
      'PostgreSQL',
      'Backend System Integration',
    ],
    frontend: [
      'JavaScript (Intermediate)',
      'HTML/CSS (Intermediate)',
      'Responsive Design',
    ],
    tools: [
      'Android Studio',
      'Git/GitHub/GitLab',
      'Figma',
      'Database Design',
    ],
  };

  const experiences = [
    {
      title: 'Senior Android Developer & Sub-Leader, Mobile Department',
      company: 'KOSIGN [Korea Software Innovation Global Network]',
      location: 'Phnom Penh, Cambodia',
      period: 'March 2020 - Present',
      type: 'Full-time',
      achievements: [
        'Lead development of enterprise-level Android applications utilizing Kotlin and Java',
        'Oversee team operations as Sub-Leader of the Mobile Department',
        'Implement and optimize modern architecture patterns (MVVM, Clean Architecture)',
        'Pioneer adoption of Jetpack Compose for UI development across multiple projects',
        'Supervise project delegation and provide mentorship to junior developers',
        'Recognized with "Best Rookie" award (November 2020)'
      ],
      technologies: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Clean Architecture'],
      icon: Briefcase
    },
    {
      title: 'International Assignment – Business Trip',
      company: '비즈플레이 - Bizplay (KOSIGN - South Korea Division)',
      location: 'Busan, South Korea',
      period: 'October 2022 - August 2023',
      type: 'Assignment',
      achievements: [
        'Selected for a one-year assignment to support collaboration between the Cambodian and South Korean mobile development teams',
        'Reviewed technical documents from Korean teams, analyzed project requirements, and prepared task breakdowns for the Cambodia team',
        'Inspected and verified feature behavior across web and mobile platforms to ensure consistency and alignment',
        'Worked directly with Korean developers, testers, and department heads (부장) on feature planning, QA, and production readiness',
        'Served as a liaison between teams, facilitating communication, resolving blockers, and ensuring smooth cross-cultural collaboration',
        'Participated in cross-functional meetings and contributed to strengthening partnerships between global teams'
      ],
      technologies: ['Cross-cultural Communication', 'Project Management', 'QA Testing', 'Technical Documentation'],
      icon: Globe
    },
    {
      title: 'Web Developer',
      company: 'PLAN-B Cambodia (BEONE)',
      location: 'Phnom Penh, Cambodia',
      period: 'November 2018 - January 2019',
      type: 'Contract',
      achievements: [
        'Developed responsive web applications without third-party frameworks (custom CSS)',
        'Built backend functionality and logic using PHP'
      ],
      technologies: ['PHP', 'Custom CSS', 'Responsive Design', 'Backend Development'],
      icon: Code
    },
  ];

  const projects = [
    {
      category: 'Finance & Corporate Management Systems',
      items: [
        {
          name: '비즈플레이 On-Premise & 비즈플레이4.0',
          description: 'Enterprise expense management platforms'
        },
        {
          name: '현대카드/삼성카드/우리카드 비즈플레이',
          description: 'Card-specific expense management implementations'
        },
        {
          name: 'IBK법인카드/KT 법인카드',
          description: 'Corporate card management systems'
        },
        {
          name: '비플 법인카드/개인카드',
          description: 'Card management applications'
        },
        {
          name: 'BZPEXPENSE/bzpExpenseGov',
          description: 'Expense tracking application'
        },
        {
          name: '비즈플레이(KEIT)',
          description: 'Specialized expense tracking solution'
        }
      ]
    },
    {
      category: 'Business Productivity Solutions',
      items: [
        {
          name: '트리플러스',
          description: 'Business productivity suite'
        },
        {
          name: '비즈캘린더',
          description: 'Calendar management system'
        },
        {
          name: '결재함 & KT 결재함',
          description: 'Approval management platforms'
        },
        {
          name: '비즈메모',
          description: 'Note-taking application for business'
        },
        {
          name: '그린메세지',
          description: 'Messaging platform'
        }
      ]
    },
    {
      category: 'Financial Technology Implementations',
      items: [
        {
          name: '체크페이',
          description: 'Payment verification system'
        },
        {
          name: '뱅크노트',
          description: 'Banking interface solution'
        },
        {
          name: 'WABOOKS',
          description: 'Accounting applications'
        },
        {
          name: 'WeBill 365',
          description: 'Billing management application',
        }
      ]
    },
    {
      category: 'Academic Research Projects',
      items: [
        {
          name: 'Lumhat - Educational Platform',
          description: 'Educational mobile platform with UX research focused on optimizing educational content delivery. Cross-platform functionality (mobile and web).',
          tech: ['Kotlin', 'Figma', 'UX Research', 'Cross-platform']
        },
        {
          name: 'DayDo - Task Management',
          description: 'Productivity and task management system with research on efficient task management methodologies and RESTful API integration.',
          tech: ['Kotlin', 'RESTful API', 'Figma', 'Backend Integration']
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science, Computer Science',
      institution: 'Royal University of Phnom Penh',
      period: 'January 2016 - November 2021',
      details: 'Comprehensive computer science education with focus on software engineering principles',
      icon: GraduationCap
    },
    {
      degree: 'Advanced Software Development',
      institution: 'Korea Software HRD Center',
      period: '2019 - 2020',
      details: 'Specialized in full-stack application development and mobile application research',
      icon: BookOpen
    },
    {
      degree: 'App Development with JAVA',
      institution: 'Cambodia-Korea Cooperation Center (CKCC)',
      period: '2018-2019',
      details: 'Focused on Java application development principles and practices',
      icon: Code
    },
    {
      degree: 'Web Application Development',
      institution: 'Cambodia-Korea Cooperation Center (CKCC)',
      period: '2018',
      details: 'Web development fundamentals and modern web technologies',
      icon: Globe
    }
  ];

  const languages = [
    { name: 'Khmer', level: 'Native' },
    {name: 'English', level: 'Limited Working Proficiency'},
    {name: 'Korean', level: 'Basic'},
  ];

  const highlights = [
    {icon: Trophy, text: 'Best Rookie Award 2020'},
    {icon: Globe, text: 'International Assignment (South Korea)'},
    {icon: Users, text: 'Sub-Leader of Mobile Department'},
    {icon: Zap, text: '5+ Years Mobile Development Experience'},
    {icon: Award, text: 'LinkedIn Skill Assessments Certified'},
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                  to="/"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"/>
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </Link>

              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-px h-4 bg-border hidden sm:block"></div>
                <img
                    src={getLogoSrc()}
                    alt="Math Rorpheeyah"
                    className="h-6 w-auto opacity-80 transition-all duration-300 hidden sm:block"
                    key={isDarkMode ? 'dark' : 'light'} // Force re-render when theme changes
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                  onClick={toggleTheme}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent/50"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
              </button>

              <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Download className="w-4 h-4"/>
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-16 pb-16 bg-gradient-to-br from-primary/3 via-transparent to-primary/3">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12">
            {/* Main Info */}
            <div className="flex-1">
              {/* Mobile Layout - Centered */}
              <div className="flex flex-col items-center text-center lg:hidden mb-8">
                <div className="relative mb-6">
                  <img
                      src="/profile.png"
                      alt="Math Rorpheeyah"
                      className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                  />
                  <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-3">Math Rorpheeyah</h1>
                  <p className="text-xl text-muted-foreground mb-6">Senior Android Developer & Sub-Leader, Mobile
                    Department</p>
                  <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4"/>
                      Phnom Penh, Cambodia
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Available for opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by side */}
              <div className="hidden lg:flex items-start gap-8 mb-8">
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt="Math Rorpheeyah"
                    className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                  />
                  <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Math Rorpheeyah</h1>
                  <p className="text-xl text-muted-foreground mb-6">Senior Android Developer & Sub-Leader, Mobile
                    Department</p>
                  <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Phnom Penh, Cambodia
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Available for opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {contacts.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group"
                  >
                    <social.icon className="w-4 h-4 group-hover:text-primary transition-colors duration-200"/>
                    {social.label}
                  </a>
                ))}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {contacts.slice(3).map((social, index) => (
                      <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group"
                          title={social.label}
                      >
                        <social.icon className="w-4 h-4 group-hover:text-primary transition-colors duration-200"/>
                      </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="lg:w-80">
              <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Highlights
                </h3>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <highlight.icon className="w-4 h-4 text-primary flex-shrink-0"/>
                        <span className="text-sm text-muted-foreground">{highlight.text}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary"/>
            Summary
          </h2>
          <div className="bg-card/30 rounded-lg p-6 border border-border/50">
            <p className="text-muted-foreground leading-relaxed">
              Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications.
              Serving as Sub-Leader of the Mobile Department at KOSIGN, I lead development initiatives and mentor junior
              engineers.
              Passionate about scalable mobile architecture, intuitive UI/UX, and the future of mobile development
              through
              AI and emerging technologies.
            </p>
          </div>
        </section>

        {/* Professional Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary"/>
            Professional Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-card/30 rounded-lg p-6 border border-border/50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary"/>
                Leadership
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leading the Mobile Department as Sub-Leader, mentoring junior developers, and driving technical initiatives across multiple projects.
              </p>
            </div>

            <div className="bg-card/30 rounded-lg p-6 border border-border/50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary"/>
                Mobile Expertise
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Specialized in Android development with deep expertise in Kotlin, Java, and modern architecture patterns like MVVM and Clean Architecture.
              </p>
            </div>

            <div className="bg-card/30 rounded-lg p-6 border border-border/50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary"/>
                Global Experience
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                International assignment in South Korea, facilitating cross-cultural collaboration and gaining valuable insights into global development practices.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary"/>
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div key={index} className="bg-card/30 rounded-lg p-6 border border-border/50 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <div className="mt-3 lg:mt-0">
                    <span
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      <exp.icon className="w-3 h-3"/>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
            Key Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">{category.category}</h3>

                  <div className="space-y-4">
                  {category.items.map((project, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1 text-xs">
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 capitalize">
                  {category.replace('_', ' ')} {category === 'mobile' ? 'Development' : category === 'backend' ? '& Database' : category === 'tools' ? '& DevOps' : 'Skills'}
                </h3>

                <div className="flex flex-wrap gap-2 text-sm">
                  {skillList.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-muted/30 text-muted-foreground rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Languages */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
                Languages
              </h2>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200 group"
              >
                <contact.icon className="w-5 h-5 text-primary flex-shrink-0"/>
                <div className="flex-1">
                  <p className="font-medium text-sm">{contact.label}</p>
                  <p className="text-xs text-muted-foreground mb-1">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-12 border-t border-border/30">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            Download Complete CV
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Get a comprehensive PDF version of my curriculum vitae
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;

import React from 'react';
import {
    Mail,
    MapPin,
    GraduationCap,
    Award,
    Code,
    Globe,
    Share2,
    Users,
    Zap,
    BookOpen,
    Trophy,
    Briefcase,
    Download
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

interface CVContentProps {
    showShareButton?: boolean;
    onShare?: () => void;
}

const CVContent: React.FC<CVContentProps> = ({showShareButton = false, onShare}) => {

    const contacts = [
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:mathrorpheeyah@gmail.com',
            value: 'mathrorpheeyah@gmail.com',
            description: 'For project inquiries and collaborations',
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
        security: [
            'Mobile App Security Implementation',
            'Secure Coding Practices',
            'Data Encryption & Protection',
            'Third-party Security Libraries Integration',
            'Raonsecure Solutions (TouchEn mTranskey, mVaccine, Appiron)',
            'Stealien AppSuit',
            'Security Testing & Malware Analysis',
            'AAR Library Management & Local Maven Publishing',
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
        devops: [
            'Google Play Console Management',
            'App Store Deployment & Release Management',
            'Internal Testing & Beta Distribution',
            'App Policy Compliance & Violation Resolution',
            'Firebase Integration & FCM',
            'Crashlytics Implementation',
            'API Testing with Postman',
            'Android Studio',
            'Git/GitHub/GitLab',
            'Database Design',
        ],
        design: [
            'Figma (Advanced)',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Photopea',
            'UI/UX Design',
            'Logo Design & Branding',
            'Print Design (Business Cards, Banners, Invitations)',
            'Visual Identity Development',
            'Graphic Design for Mobile Applications',
        ],
    };

    const experiences = [
        {
            title: 'Senior Android Developer & Technical Team Lead',
            company: 'KOSIGN [Korea Software Innovation Global Network]',
            location: 'Phnom Penh, Cambodia',
            period: 'March 2020 - Present',
            type: 'Full-time',
            achievements: [
                'Lead development of enterprise-level Android applications utilizing Kotlin and Java',
                'Oversee mobile team operations and technical direction',
                'Implement and optimize modern architecture patterns (MVVM, Clean Architecture)',
                'Pioneer adoption of Jetpack Compose for UI development across multiple projects',
                'Design and implement comprehensive mobile security solutions using industry-standard enterprise solutions for data protection',
                'Manage Google Play Console operations including app deployment, testing, release management, and policy compliance',
                'Implement secure data encryption, authentication protocols, and third-party security libraries with custom AAR integration',
                'Lead security testing and validation procedures for enterprise mobile applications',
                'Oversee technical requirements for API compatibility, Firebase integration, and crash reporting systems',
                'Establish testing frameworks for notification systems and third-party integrations',
                'Provide technical leadership and mentorship to junior developers',
                'Recognized with "Best Rookie" award (November 2020)'
            ],
            icon: Briefcase
        },
        {
            title: 'Senior Android Developer - International Assignment',
            company: '비즈플레이 - Bizplay (KOSIGN - South Korea Division)',
            location: 'Busan, South Korea',
            period: 'October 2022 - August 2023',
            type: 'Full-time',
            achievements: [
                'Selected for strategic one-year international assignment to strengthen collaboration between global mobile development teams',
                'Led technical documentation analysis, project requirement planning, and task allocation for cross-border development teams',
                'Developed comprehensive security guidelines and implementation protocols for enterprise mobile applications',
                'Implemented advanced security solutions with proper integration frameworks and dependency management',
                'Conducted quality assurance and specification verification for critical Android applications',
                'Collaborated directly with senior Korean developers and department heads on feature planning and production readiness',
                'Established security testing methodologies and validation procedures against malware detection systems',
                'Served as technical liaison between international teams, resolving technical blockers and ensuring seamless knowledge transfer',
                'Facilitated cross-functional collaboration to strengthen global development partnerships'
            ],
            icon: Briefcase
        },
        {
            title: 'Web Developer',
            company: 'PLAN-B Cambodia (BEONE)',
            location: 'Phnom Penh, Cambodia',
            period: 'November 2018 - January 2019',
            type: 'Full-time',
            achievements: [
                'Developed responsive web applications without third-party frameworks (custom CSS)',
                'Built backend functionality and logic using PHP'
            ],
            icon: Briefcase
        }
    ];

    const projects = [
        {
            category: 'Enterprise Android Applications',
            items: [
                {
                    name: 'Bizplay Enterprise Suite',
                    description: 'Led development of secure expense management platform with corporate card integration for major corporations including Hyundai, Samsung, and KT, implementing advanced security protocols and authentication systems'
                },
                {
                    name: 'Financial Management Systems',
                    description: 'Architected corporate card applications and government expense tracking solutions with enterprise-grade security implementations, data encryption, and secure transaction processing'
                },
                {
                    name: 'Business Productivity Suite',
                    description: 'Designed and implemented secure business productivity applications with modern MVVM architecture, focusing on scalability, performance optimization, and secure data handling'
                }
            ]
        },
        {
            category: 'Technical Projects',
            items: [
                {
                    name: 'Lumhat Educational Platform',
                    description: 'Developed cross-platform educational application implementing modern UI patterns, optimized content delivery systems, and comprehensive user analytics'
                },
                {
                    name: 'DayDo Task Management',
                    description: 'Created productivity application featuring clean architecture implementation, advanced state management, and secure cloud synchronization'
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
        }
    ];

    const languages = [
        {name: 'Khmer', level: 'Native'},
        {name: 'English', level: 'Limited Working Proficiency'},
        {name: 'Korean', level: 'Basic'},
    ];

    const highlights = [
        {icon: Trophy, text: 'Best Rookie Award 2020'},
        {icon: Globe, text: 'International Assignment (South Korea)'},
        {icon: Users, text: 'Technical Team Lead'},
        {icon: Zap, text: '5+ Years Mobile Development Experience'},
    ];

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Math_Rorpheeyah_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
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
                                        src="/images/profile.png"
                                        alt="Math Rorpheeyah"
                                        className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                                    />
                                    <div
                                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold text-foreground mb-3">Math Rorpheeyah</h1>
                                    <p className="text-xl text-muted-foreground mb-6">Senior Android Developer</p>
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
                                        src="/images/profile.png"
                                        alt="Math Rorpheeyah"
                                        className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                                    />
                                    <div
                                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Math
                                        Rorpheeyah</h1>
                                    <p className="text-xl text-muted-foreground mb-6">Senior Android Developer</p>
                                    <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4"/>
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
                                        <social.icon
                                            className="w-4 h-4 group-hover:text-primary transition-colors duration-200"/>
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
                                            <social.icon
                                                className="w-4 h-4 group-hover:text-primary transition-colors duration-200"/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="lg:w-80">
                            <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary"/>
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
                            Senior Android Developer with 5+ years of experience creating enterprise-grade mobile
                            applications with robust security implementations. I lead development initiatives, 
                            mentor junior engineers, and specialize in modern Android architecture and security solutions.
                            My expertise spans Google Play Console management, secure coding practices, and third-party security
                            library integration for high-profile enterprise clients. Passionate about creating scalable mobile 
                            architecture, intuitive UI/UX, and the integration of AI and emerging technologies into mobile development.
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
                                Technical team lead driving development initiatives, mentoring junior engineers, 
                                and guiding strategic technical direction across multiple enterprise projects.
                            </p>
                        </div>

                        <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-4 h-4 text-primary"/>
                                Mobile & Security
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Expert in Android development with advanced proficiency in Kotlin, Java, modern
                                architecture patterns (MVVM, Clean Architecture), and enterprise-grade mobile security 
                                implementations for high-profile corporate clients.
                            </p>
                        </div>

                        <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-primary"/>
                                Global Experience
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Selected for strategic international assignment in South Korea, leading technical initiatives and
                                gaining valuable experience in global enterprise development practices and cross-cultural collaboration.
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
                            </div>
                        ))}
                    </div>
                </section>

                {/* Notable Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30">
                        Notable Projects
                    </h2>

                    <div className="space-y-8">
                        {projects.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>

                                <div className="grid grid-cols-1 gap-4">
                                    {category.items.map((project, idx) => (
                                        <div key={idx} className="bg-card/20 rounded-lg p-4 border border-border/30">
                                            <h4 className="font-medium mb-2">{project.name}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Skills */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary"/>
                        Technical Skills
                    </h2>

                    {/* Key Skills Highlight */}
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                            <h3 className="font-medium mb-2 text-primary">Core Android</h3>
                            <p className="text-sm text-foreground">Kotlin, Java, MVVM, Clean Architecture, Jetpack Compose</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                            <h3 className="font-medium mb-2 text-primary">Security Expertise</h3>
                            <p className="text-sm text-foreground">Mobile Security Implementation, Data Encryption, Enterprise Security Solutions</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                            <h3 className="font-medium mb-2 text-primary">Operations</h3>
                            <p className="text-sm text-foreground">Google Play Console Management, Release Management, CI/CD Implementation</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="space-y-3">
                                <h3 className="text-base font-semibold text-foreground">
                                    {category === 'mobile' ? 'Mobile Development' :
                                        category === 'security' ? 'Security & Protection' :
                                            category === 'backend' ? 'Backend & Database' :
                                                category === 'frontend' ? 'Frontend Development' :
                                                    category === 'devops' ? 'DevOps & Tools' :
                                                        category === 'design' ? 'Design & Creative' :
                                                            category.replace('_', ' ')}
                                </h3>

                                <ul className="space-y-1">
                                    {skillList.map((skill, index) => {
                                        // Highlight key skills
                                        const isHighlighted = ['Google Play Console Management', 'Kotlin (Advanced)', 'Java (Advanced)', 'MVVM', 'Clean Architecture', 'Mobile App Security Implementation', 'Jetpack Compose'].includes(skill);
                                        return (
                                            <li key={index}
                                                className={`text-sm flex items-start gap-2 ${isHighlighted ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                                                <span className="text-primary mt-1 text-xs">•</span>
                                                <span>{skill}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Security Implementation References - Subtle */}
                    <div className="mt-8 pt-6 border-t border-border/20">
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Security Technologies
                            References</h3>
                        <div className="text-xs text-muted-foreground space-y-1">
                            <p>• Enterprise security solutions implemented:
                                <a href="https://www.raonsecure.com/en/solution/mtranskey" target="_blank"
                                   rel="noopener noreferrer" className="text-primary hover:underline ml-1">TouchEn
                                    mTranskey</a>,
                                <a href="https://www.raonsecure.com/en/solution/mvaccine" target="_blank"
                                   rel="noopener noreferrer" className="text-primary hover:underline ml-1">mVaccine</a>,
                                <a href="https://www.raonsecure.com/en/solution/appiron" target="_blank"
                                   rel="noopener noreferrer" className="text-primary hover:underline ml-1">Appiron</a>
                            </p>
                            <p>• Mobile security suite:
                                <a href="https://stealien.com/en/products/series/mobile-app-security-solution"
                                   target="_blank" rel="noopener noreferrer"
                                   className="text-primary hover:underline ml-1">Stealien AppSuit</a>
                            </p>
                        </div>
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
            </div>

            {/* Footer */}
            <div className="border-t border-border/20 bg-muted/20 py-6">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="flex gap-3">
                            <button
                                onClick={downloadCV}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <Download className="w-4 h-4"/>
                                Download PDF
                            </button>

                            {showShareButton && onShare && (
                                <button
                                    onClick={onShare}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors"
                                >
                                    <Share2 className="w-4 h-4"/>
                                    Share CV
                                </button>
                            )}
                        </div>

                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} Math Rorpheeyah. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVContent;
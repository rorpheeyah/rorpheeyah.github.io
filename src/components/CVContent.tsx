import React, { useEffect, useState } from 'react';
import {
    Mail,
    MapPin,
    GraduationCap,
    Award,
    Code,
    Globe,
    Share2,
    Briefcase,
    Download,
    Phone,
    User,
    Calendar,
    PenTool,
    Shield,
    Server,
    Smartphone,
    Users,
    Zap
} from 'lucide-react';

// React Icons for social media
import {
    FaLinkedin,
    FaGithub,
    FaTelegram,
    FaInstagram,
    FaFacebook
} from 'react-icons/fa';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

interface CVData {
    title: string;
    subtitle: string;
    personal: {
        name: string;
        title: string;
        location: string;
        email: string;
        phone: string;
        dob: string;
        pob: string;
        gender: string;
        website: string;
        availability: string;
        profileImage: string;
    };
    contacts: Array<{
        icon: string;
        label: string;
        href: string;
        value: string;
        description: string;
    }>;
    summary: string;
    highlights: Array<{
        icon: string;
        text: string;
    }>;
    professionalOverview: Array<{
        title: string;
        icon: string;
        description: string;
    }>;
    experiences: Array<{
        title: string;
        company: string;
        location: string;
        period: string;
        type: string;
        icon: string;
        achievements: string[];
    }>;
    projects: Array<{
        category: string;
        items: Array<{
            name: string;
            description: string;
        }>;
    }>;
    skills: {
        [key: string]: string[];
    };
    education: Array<{
        degree: string;
        institution: string;
        period: string;
        details: string;
        icon: string;
    }>;
    languages: Array<{
        name: string;
        level: string;
    }>;
    downloads: {
        cv: {
            filename: string;
            path: string;
        };
    };
}

interface CVContentProps {
    showShareButton?: boolean;
    onShare?: () => void;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
    Mail,
    MapPin,
    GraduationCap,
    Award,
    Code,
    Globe,
    Share2,
    Briefcase,
    Download,
    Phone,
    User,
    Calendar,
    PenTool,
    Shield,
    Server,
    Smartphone,
    FaLinkedin,
    FaGithub,
    FaTelegram,
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaXTwitter,
    Users,
    Zap
};

const CVContent: React.FC<CVContentProps> = ({ showShareButton = false, onShare }) => {
    const [cvData, setCvData] = useState<CVData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCVData = async () => {
            try {
                const response = await fetch('/content/cv.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch CV data');
                }
                const data = await response.json();
                setCvData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCVData();
    }, []);

    if (loading) {
        return (
            <div className="pt-20 pb-20 flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !cvData) {
        return (
            <div className="pt-20 pb-20 flex flex-col justify-center items-center min-h-[60vh] text-center px-4">
                <p className="text-destructive text-lg font-medium mb-2">Failed to load CV content</p>
                <p className="text-muted-foreground">Please try refreshing the page</p>
            </div>
        );
    }

    const { personal, contacts, summary, experiences, skills, education, languages, downloads } = cvData;

    const downloadCV = () => {
        if (!downloads?.cv) return;
        const link = document.createElement('a');
        link.href = downloads.cv.path;
        link.download = downloads.cv.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="pt-16 pb-16 bg-gradient-to-br from-primary/3 via-transparent to-primary/3">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                        {/* Main Info */}
                        <div className="flex-1">
                            {/* Mobile Layout - Centered */}
                            <div className="flex flex-col items-center text-center lg:hidden mb-8">
                                <div className="relative mb-6">
                                    <img
                                        src={personal.profileImage}
                                        alt={personal.name}
                                        className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                                    />
                                    <div
                                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold text-foreground mb-3">{personal.name}</h1>
                                    <p className="text-xl text-muted-foreground mb-6">{personal.title}</p>
                                    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center justify-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {personal.location}
                                        </span>
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            {personal.availability}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout - Side by side */}
                            <div className="hidden lg:flex items-start gap-8 mb-8">
                                <div className="relative">
                                    <img
                                        src={personal.profileImage}
                                        alt={personal.name}
                                        className="w-32 h-32 rounded-xl object-cover shadow-lg ring-1 ring-border/20"
                                    />
                                    <div
                                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">{personal.name}</h1>
                                    <p className="text-xl text-muted-foreground mb-6">{personal.title}</p>
                                    <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {personal.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            {personal.availability}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                                {contacts.slice(0, 3).map((contact, index) => {
                                    const Icon = iconMap[contact.icon] || Globe;
                                    return (
                                        <a
                                            key={index}
                                            href={contact.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group"
                                        >
                                            <Icon
                                                className="w-4 h-4 group-hover:text-primary transition-colors duration-200" />
                                            {contact.label}
                                        </a>
                                    );
                                })}
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {contacts.slice(3).map((contact, index) => {
                                        const Icon = iconMap[contact.icon] || Globe;
                                        return (
                                            <a
                                                key={index}
                                                href={contact.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group"
                                                title={contact.label}
                                            >
                                                <Icon
                                                    className="w-4 h-4 group-hover:text-primary transition-colors duration-200" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Highlights - Right Side */}
                        <div className="lg:w-80">
                            <div className="border border-border rounded-xl p-6 bg-card backdrop-blur-sm shadow-sm">
                                <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" />
                                    Highlights
                                </h3>
                                {cvData.highlights && cvData.highlights.length > 0 && (
                                    <div className="space-y-4">
                                        {cvData.highlights.map((highlight, index) => {
                                            const Icon = iconMap[highlight.icon] || Award;
                                            return (
                                                <div key={index} className="flex items-start gap-3 group">
                                                    <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
                                                    <p className="text-sm text-muted-foreground leading-snug">{highlight.text}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CV Content */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">

                {/* Professional Summary */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Professional Summary
                    </h2>
                    <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                        <p className="text-muted-foreground leading-relaxed">
                            {summary}
                        </p>
                    </div>
                </section>



                {/* Work Experience */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Work Experience
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-card/30 rounded-lg p-6 border border-border/50 space-y-4">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground">{exp.period} | {exp.location}</p>
                                    </div>
                                    <div className="mt-3 lg:mt-0">
                                        <span
                                            className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                                            <Briefcase className="w-3 h-3" />
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



                {/* Technical Skills */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        Technical Skills
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="space-y-3">
                                <h3 className="text-base font-semibold text-foreground">
                                    {category}
                                </h3>

                                <ul className="space-y-1">
                                    {skillList.map((skill, index) => {
                                        return (
                                            <li key={index}
                                                className="text-sm flex items-start gap-2 text-muted-foreground">
                                                <span className="text-primary mt-1 text-xs">•</span>
                                                <span>{skill}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education & Languages */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Education */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-primary" />
                                Education
                            </h2>

                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="space-y-2">
                                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                        <p className="text-primary font-medium">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                                        {edu.details && <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/30 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                Languages
                            </h2>

                            <div className="space-y-4">
                                {languages.map((lang, index) => (
                                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/10 last:border-0">
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
                        {contacts.map((contact, index) => {
                            const Icon = iconMap[contact.icon] || Globe;
                            return (
                                <a
                                    key={index}
                                    href={contact.href}
                                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200 group"
                                >
                                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{contact.label}</p>
                                        <p className="text-xs text-muted-foreground mb-1">{contact.value}</p>
                                    </div>
                                </a>
                            );
                        })}
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
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>

                            {showShareButton && onShare && (
                                <button
                                    onClick={onShare}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors"
                                >
                                    <Share2 className="w-4 h-4" />
                                    Share CV
                                </button>
                            )}
                        </div>

                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVContent;
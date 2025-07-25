import {useState, useEffect} from 'react';

interface PortfolioContent {
    hero: {
        name: string;
        titles: string[];
        description: string;
        socialLinks: Array<{
            href: string;
            icon: string;
            label: string;
            external: boolean;
        }>;
        achievements: Array<{
            icon: string;
            title: string;
            subtitle: string;
        }>;
        availability: {
            status: string;
            responseTime: string;
        };
    };
    about: {
        title: string;
        description: string;
        stats: Array<{
            icon: string;
            value: string;
            label: string;
        }>;
        achievements: Array<{
            icon: string;
            title: string;
            description: string;
            highlight: boolean;
        }>;
    };
    experience: Array<{
        title: string;
        company: string;
        period: string;
        location: string;
        type: string;
        logo: string;
        description: string;
        achievements: string[];
        technologies: string[];
        award?: string;
    }>;
    projectCategories: Array<{
        title: string;
        description: string;
        projects: Array<{
            name: string;
            description: string;
            remoteImage: string;
            image: string;
            link: string;
            technologies: string[];
            category: string;
            featured: boolean;
        }>;
    }>;
    education: {
        title: string;
        subtitle: string;
        education: Array<{
            id?: number;
            degree: string;
            institution: string;
            period: string;
            location?: string;
            logo: string;
            website?: string;
            description?: string;
            skills?: string[];
        }>;
    };
    technicalSkills: {
        title: string;
        subtitle: string;
        skills: {
            mobile: string[];
            security: string[];
            backend: string[];
            frontend: string[];
            devops: string[];
            design: string[];
        };
    };
    personalBranding: {
        title: string;
        subtitle: string;
        description: string;
        assets: Array<{
            name: string;
            type: string;
            description: string;
            image: string;
            downloadUrl: string;
        }>;
    };
    contact: {
        title: string;
        subtitle: string;
        description: string;
        email: string;
        phone: string;
        location: string;
        status: string;
        social: Array<{
            name: string;
            url: string;
            value: string;
            description: string;
            icon: string;
        }>;
    };
}

export const usePortfolioContent = () => {
    const [content, setContent] = useState<PortfolioContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadContent = async () => {
        try {
            setLoading(true);
            setError(null);

            // Define the content files to load
            const contentFiles = [
                'hero',
                'about',
                'experience',
                'projects',
                'education',
                'skills',
                'contact',
                'branding'
            ];

            // Load all content files in parallel
            const contentPromises = contentFiles.map(async (file) => {
                const isProduction = import.meta.env.PROD;
                const url = isProduction
                    ? `/content/${file}.json`
                    : `/content/${file}.json`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}: ${response.statusText}`);
                }

                const data = await response.json();
                return {file, data};
            });

            const results = await Promise.all(contentPromises);

            // Aggregate the content into the expected structure
            const aggregatedContent: PortfolioContent = {
                hero: results.find(r => r.file === 'hero')?.data,
                about: results.find(r => r.file === 'about')?.data,
                experience: results.find(r => r.file === 'experience')?.data.experiences || [],
                projectCategories: results.find(r => r.file === 'projects')?.data.projectCategories || [],
                education: {
                    title: results.find(r => r.file === 'education')?.data.title,
                    subtitle: results.find(r => r.file === 'education')?.data.subtitle,
                    education: results.find(r => r.file === 'education')?.data.education || []
                },
                technicalSkills: results.find(r => r.file === 'skills')?.data,
                personalBranding: results.find(r => r.file === 'branding')?.data,
                contact: results.find(r => r.file === 'contact')?.data
            };

            setContent(aggregatedContent);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load portfolio content';
            setError(errorMessage);
            console.error('Portfolio content loading error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadContent();
    }, []);

    const refetch = () => {
        loadContent();
    };

    return {content, loading, error, refetch};
};
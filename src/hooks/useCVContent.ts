import {useState, useEffect} from 'react';

interface CVContent {
    title: string;
    subtitle: string;
    personal: {
        name: string;
        title: string;
        location: string;
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
        [category: string]: string[];
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
    securityReferences: {
        title: string;
        items: Array<{
            category: string;
            technologies: Array<{
                name: string;
                url: string;
            }>;
        }>;
    };
    downloads: {
        cv: {
            filename: string;
            path: string;
        };
    };
}

export const useCVContent = () => {
    const [content, setContent] = useState<CVContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                setLoading(true);
                setError(null);

                const isProduction = import.meta.env.PROD;
                const url = isProduction
                    ? `/content/cv.json`
                    : `/content/cv.json`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to load CV content: ${response.statusText}`);
                }

                const data = await response.json();
                setContent(data);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to load CV content';
                setError(errorMessage);
                console.error('CV content loading error:', err);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    const refetch = async () => {
        setLoading(true);
        setError(null);

        try {
            const isProduction = import.meta.env.PROD;
            const url = isProduction
                ? `/content/cv.json`
                : `/content/cv.json`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load CV content: ${response.statusText}`);
            }

            const data = await response.json();
            setContent(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to refresh CV content';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return {content, loading, error, refetch};
};
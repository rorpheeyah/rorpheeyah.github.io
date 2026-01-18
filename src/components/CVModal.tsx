import React from 'react';
import {
    ArrowLeft,
    Sun,
    Moon,
    Download
} from 'lucide-react';
import {useTheme} from '../contexts/ThemeContext';
import CVContent from './CVContent';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({isOpen, onClose}) => {
    const {isDarkMode, toggleTheme} = useTheme();

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.title = 'Math Rorpheeyah - Curriculum Vitae';
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            document.addEventListener('keydown', handleEscape);
            return () => {
                document.body.style.overflow = 'unset';
                document.removeEventListener('keydown', handleEscape);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Get the logo source based on the theme
    const getLogoSrc = () => {
        return isDarkMode ? '/images/seals/ic_seal_horizontal_white_filled.png' : '/images/seals/ic_seal_horizontal_black_filled.png';
    };

    // Handle downloading CV
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Math_Rorpheeyah_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full h-full bg-background overflow-y-auto">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50">
                    <div className="max-w-5xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium group"
                                >
                                    <ArrowLeft
                                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"/>
                                    <span className="hidden sm:inline">Back to Portfolio</span>
                                    <span className="sm:hidden">Back</span>
                                </button>

                                {/* Logo */}
                                <div className="flex items-center space-x-2">
                                    <div className="w-px h-4 bg-border hidden sm:block"></div>
                                    <img
                                        src={getLogoSrc()}
                                        alt="Math Rorpheeyah"
                                        className="h-6 w-auto opacity-80 transition-all duration-300 hidden sm:block"
                                        key={isDarkMode ? 'dark' : 'light'}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent/50"
                                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                >
                                    {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                                </button>

                                {/* Download Button - responsive */}
                                <button
                                    onClick={downloadCV}
                                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    title="Download CV PDF"
                                >
                                    <Download className="w-4 h-4"/>
                                    <span className="hidden sm:inline">Download PDF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CV Content */}
                <CVContent
                    showShareButton={false}
                />
            </div>
        </div>
    );
};

export default CVModal;
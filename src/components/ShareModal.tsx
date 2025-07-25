import React, {useState} from 'react';
import {
    X,
    Copy,
    Check,
    Share2
} from 'lucide-react';
import {
    FaLinkedin,
    FaXTwitter,
    FaFacebook,
    FaTelegram,
    FaWhatsapp
} from 'react-icons/fa6';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    title?: string;
    description?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
                                                   isOpen,
                                                   onClose,
                                                   url,
                                                   title = "Math Rorpheeyah - CV",
                                                   description = "Senior Android Developer & Sub-Leader, Mobile Department"
                                               }) => {
    const [copied, setCopied] = useState(false);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareOptions = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            color: 'hover:bg-blue-600',
            textColor: 'text-blue-600',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        },
        {
            name: 'X (Twitter)',
            icon: FaXTwitter,
            color: 'hover:bg-black',
            textColor: 'text-black',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            color: 'hover:bg-blue-700',
            textColor: 'text-blue-700',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            color: 'hover:bg-blue-500',
            textColor: 'text-blue-500',
            url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            color: 'hover:bg-green-600',
            textColor: 'text-green-600',
            url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
        }
    ];

    const handleShare = (shareUrl: string) => {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full max-w-md bg-background rounded-xl shadow-2xl border border-border">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <div className="flex items-center gap-2">
                            <Share2 className="w-5 h-5 text-primary"/>
                            <h2 className="text-lg font-semibold">Share CV</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                        >
                            <X className="w-4 h-4"/>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {/* Copy Link */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                Copy Link
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={url}
                                    readOnly
                                    className="flex-1 px-3 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <button
                                    onClick={copyToClipboard}
                                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4"/>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4"/>
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Social Sharing */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-3 block">
                                Share on Social Media
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {shareOptions.map((option) => (
                                    <button
                                        key={option.name}
                                        onClick={() => handleShare(option.url)}
                                        className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 group ${option.color} hover:text-white`}
                                    >
                                        <option.icon
                                            className={`w-5 h-5 ${option.textColor} group-hover:text-white transition-colors`}/>
                                        <span className="font-medium text-sm group-hover:text-white transition-colors">
                                            {option.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0">
                        <p className="text-xs text-muted-foreground text-center">
                            Share my CV with your network or copy the link for later
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
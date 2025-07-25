import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaWhatsapp,
  FaXTwitter
} from 'react-icons/fa6';
import {Mail, MapPin} from 'lucide-react';
import {usePortfolioContent} from '../hooks/usePortfolioContent';
import React from "react";

interface ContactProps {
  onOpenCV: () => void;
}

// Icon mapping for dynamic icon rendering
const iconMap: { [key: string]: React.ComponentType<any> } = {
  email: Mail,
  location: MapPin,
  linkedin: FaLinkedin,
  github: FaGithub,
  telegram: FaTelegram,
  instagram: FaInstagram,
  facebook: FaFacebook,
  whatsapp: FaWhatsapp,
  twitter: FaXTwitter,
};

const Contact = ({onOpenCV}: ContactProps) => {
  const {content, loading} = usePortfolioContent();

  // Use data from JSON only
  const contactData = content?.contact;

  if (loading) {
    return (
        <section id="contact" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded mb-6 max-w-md mx-auto"></div>
                <div className="h-4 bg-muted rounded mb-4 max-w-2xl mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg">
                    <div className="animate-pulse">
                      <div className="w-5 h-5 bg-muted rounded"></div>
                    </div>
                    <div className="flex-1 animate-pulse">
                      <div className="h-4 bg-muted rounded mb-1"></div>
                      <div className="h-3 bg-muted rounded"></div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
    );
  }

  if (!contactData) {
    return (
        <section id="contact" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-muted-foreground">Contact data not available.</p>
            </div>
          </div>
        </section>
    );
  }

  // Use JSON data only for social links
  const contacts = contactData?.social?.map(social => ({
    icon: social.icon,
    label: social.name,
    href: social.url,
    value: social.value,
    description: social.description,
  })) || [];

  // Function to get status color and text based on status
  const getStatusConfig = (status: string) => {
    const statusLower = status.toLowerCase();

    if (statusLower.includes('available') || statusLower.includes('open')) {
      return {
        bgColor: 'bg-green-500/10',
        textColor: 'text-green-600',
        dotColor: 'bg-green-500',
        text: status || 'Available for opportunities'
      };
    } else if (statusLower.includes('busy') || statusLower.includes('occupied')) {
      return {
        bgColor: 'bg-red-500/10',
        textColor: 'text-red-600',
        dotColor: 'bg-red-500',
        text: status
      };
    } else if (statusLower.includes('learning') || statusLower.includes('studying')) {
      return {
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-600',
        dotColor: 'bg-blue-500',
        text: status
      };
    } else if (statusLower.includes('selective') || statusLower.includes('limited')) {
      return {
        bgColor: 'bg-yellow-500/10',
        textColor: 'text-yellow-600',
        dotColor: 'bg-yellow-500',
        text: status
      };
    } else {
      // Default to available
      return {
        bgColor: 'bg-green-500/10',
        textColor: 'text-green-600',
        dotColor: 'bg-green-500',
        text: status || 'Available for opportunities'
      };
    }
  };

  const statusConfig = getStatusConfig(contactData?.status || '');

  return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {contactData?.title || "Get In Touch"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {contactData?.subtitle || "Ready to discuss your next project?"}
            </p>
          </div>

          {/* Status Card */}
          <div className="mb-12 flex justify-center">
            <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig.bgColor} ${statusConfig.textColor} text-sm`}>
              <div className={`w-2 h-2 ${statusConfig.dotColor} rounded-full`}></div>
              {statusConfig.text}
            </div>
          </div>

          {/* Contact Information - CV Style Grid */}
          <div className="mb-16">
            <h3 className="text-center text-2xl font-bold mb-6 pb-2 border-b border-border/30">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact, index) => {
                const IconComponent = iconMap[contact.icon] || Mail;
                return (
                  <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200 group"
                  >
                    <IconComponent className="w-5 h-5 text-primary flex-shrink-0"/>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{contact.label}</p>
                      <p className="text-xs text-muted-foreground mb-1">{contact.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Response time */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Response time: Usually within 24 hours
            </p>
          </div>

          {/* Footer */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/10">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Math Rorpheeyah
              </p>
              <button
                  onClick={onOpenCV}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 bg-muted/30 hover:bg-muted/50 hover:border-border/60 text-sm font-medium text-foreground hover:text-foreground/90 transition-all duration-200"
              >
                View CV
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"/>
              </button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;

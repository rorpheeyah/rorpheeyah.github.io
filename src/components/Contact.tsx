import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaWhatsapp
} from 'react-icons/fa6';
import {Link} from 'react-router-dom';

const Contact = () => {
  const contacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:mathrorpheeyah@gmail.com',
      description: 'Direct contact'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rorpheeyah',
      description: 'Professional networking'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/rorpheeyah',
      description: 'Open source projects'
    },
    {
      icon: FaXTwitter,
      label: 'X',
      href: 'https://x.com/rorpheeyah',
      description: '@rorpheeyah'
    },
    {
      icon: FaTelegram,
      label: 'Telegram',
      href: 'https://t.me/rorpheeyah',
      description: 'Quick messaging'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/855012301345',
      description: 'Chat directly'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rorpheeyah',
      description: 'Behind the scenes'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      href: 'https://facebook.com/rorpheeyah',
      description: 'Connect & updates'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next mobile project? Let's connect and build something amazing together.
          </p>
        </div>

        {/* Status Card */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Available for projects
          </div>
        </div>

        {/* Contact Grid */}
        <div className="mb-12">
          {/* Mobile: Icons only */}
          <div className="grid grid-cols-4 gap-4 md:hidden">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                  <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-xl border border-border/30 hover:border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-200 flex items-center justify-center"
                      title={`${contact.label} - ${contact.description}`}
                  >
                    <IconComponent
                        className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-200"/>
                  </a>
              );
            })}
          </div>

          {/* Desktop: Full cards with text */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                  <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-6 rounded-xl border border-border/30 hover:border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-200 text-center"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                          className="w-12 h-12 rounded-lg bg-muted/40 group-hover:bg-muted/60 flex items-center justify-center transition-all duration-200">
                        <IconComponent
                            className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-200"/>
                      </div>
                      <div>
                        <div
                            className="font-medium text-foreground mb-1 group-hover:text-foreground/90 transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {contact.description}
                        </div>
                      </div>
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

      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/10">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Math Rorpheeyah
          </p>
          <Link
              to="/cv"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 bg-muted/30 hover:bg-muted/50 hover:border-border/60 text-sm font-medium text-foreground hover:text-foreground/90 transition-all duration-200"
          >
            View Resume
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

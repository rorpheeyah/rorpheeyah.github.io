import { Mail, Linkedin, Github, X, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mathrorpheeyah@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rorpheeyah'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rorpheeyah'
    },
    {
      icon: X,
      label: 'X',
      href: 'https://x.com/rorpheeyah'
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'http://t.me/rorpheeyah'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rorpheeyah'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a conversation about Android development and mobile technology.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">{contact.label}</span>
              </a>
            );
          })}
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Math Rorpheeyah
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { Mail, Linkedin, Github, X } from 'lucide-react';

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
      label: 'X (Twitter)',
      href: 'https://x.com/rorpheeyah'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a conversation about Android development and mobile technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">{contact.label}</h3>
              </a>
            );
          })}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground">
            © 2025 Math Rorpheeyah. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

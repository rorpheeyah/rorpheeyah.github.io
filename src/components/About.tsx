
const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 
    'Python', 'Java', 'Swift', 'Kotlin', 'React Native',
    'Flutter', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with expertise in full-stack development, 
            mobile applications, and modern web technologies. I love turning complex problems 
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With years of experience in software development, I've worked on diverse projects 
              ranging from web applications to mobile apps. I'm constantly learning and adapting 
              to new technologies to deliver cutting-edge solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that 
              make a difference. When I'm not coding, you can find me exploring new technologies, 
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium hover:bg-accent/80 transition-colors duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

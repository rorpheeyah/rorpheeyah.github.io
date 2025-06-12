
const About = () => {
  const skills = [
    'Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'MVVM', 
    'Clean Architecture', 'JavaScript', 'PHP', 'SQL', 'MySQL',
    'PostgreSQL', 'Git', 'Figma', 'RESTful APIs', 'UI/UX Design'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Senior Android Developer with 5+ years of experience building enterprise-grade mobile applications. 
            Serving as Sub-Leader of the Mobile Department at KOSIGN, I lead development initiatives and mentor junior engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Passionate about scalable mobile architecture, intuitive UI/UX, and the future of mobile development 
              through AI and emerging technologies. I specialize in Kotlin and Java for enterprise Android applications, 
              with expertise in modern architecture patterns like MVVM and Clean Architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that make a difference. 
              I'm also exploring AI integration in mobile applications and considering advanced education in AI and mobile computing.
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

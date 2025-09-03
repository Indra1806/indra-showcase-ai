const About = () => {
  return (
    <section id="about" className="py-section px-6 bg-background">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe that mistakes are the greatest teachers in life. Every error, 
                every failure, and every misstep is an opportunity to learn, grow, and 
                become better than before.
              </p>
              <p>
                Through my journey in technology and content creation, I've embraced 
                this philosophy wholeheartedly. My GitHub repositories, YouTube channel, 
                and blog are testaments to this continuous learning process.
              </p>
              <p>
                I'm passionate about sharing knowledge, building meaningful projects, 
                and connecting with fellow learners who understand that the path to 
                mastery is paved with lessons learned from our experiences.
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 hover-lift">
            <h3 className="text-xl font-medium mb-4 text-card-foreground">
              Learning Philosophy
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Every mistake is a stepping stone to mastery
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Continuous improvement through practice and reflection
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Sharing knowledge to help others on their journey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Building projects that solve real problems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
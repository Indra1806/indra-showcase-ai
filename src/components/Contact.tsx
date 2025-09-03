import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Youtube, Globe, Mail, MessageCircle, Rocket, User } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
  title: "LinkedIn",
  description: "Connect with me and explore my journey",
  icon: User,
  url: "https://www.linkedin.com/in/indrasenareddybala",
  buttonText: "Visit LinkedIn"
},
    {
      title: "GitHub",
      description: "Explore my repositories and contributions",
      icon: Github,
      url: "https://github.com/Indra1806",
      buttonText: "Follow on GitHub"
    },
    {
      title: "Blog",
      description: "Read about my experiences and insights",
      icon: Rocket,
      url: "https://www.18Slicesofme.blogspot.com",
      buttonText: "Read Blog"
    }
  ];

  return (
    <section id="contact" className="py-section px-6 bg-background">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow learners, share experiences, 
            and learn from each other's mistakes and successes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover-lift bg-card border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <contact.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-medium text-card-foreground">
                  {contact.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {contact.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full hover-lift"
                  asChild
                >
                  <a href={contact.url} target="_blank" rel="noopener noreferrer">
                    {contact.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* Contact Card */}
    <div className="text-center">
      <Card className="bg-card border border-border shadow-md rounded-lg p-6">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-accent-foreground" />
          </div>
          <CardTitle className="text-xl font-medium text-card-foreground">
            Start a Conversation
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="default"
            size="lg"
            className="w-full hover-lift"
            asChild
          >
            <a
              href="mailto:indrasena1807@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>

    {/* Substack Embed */}
    <div className="bg-white border border-muted rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <h3 className="text-xl font-semibold text-foreground mb-2">Subscribe For Newsletter</h3>
      <p className="text-muted-foreground mb-4">
      </p>
      <iframe
        src="https://18slicesofme.substack.com/embed"
        width="100%"
        height="215"
        style={{ border: "1px solid #2dec27ff", background: "red" }}
        frameBorder="0"
        scrolling="no"
        className="rounded-md"
      />
    </div>

  </div>
</div>
       
</div>
    </section>
  );
};

export default Contact;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Youtube, Globe, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      title: "GitHub",
      description: "Explore my repositories and contributions",
      icon: Github,
      url: "https://github.com/Indra1806",
      buttonText: "Follow on GitHub"
    },
    {
      title: "YouTube",
      description: "Watch my learning journey and tutorials",
      icon: Youtube,
      url: "https://www.youtube.com/@18slicesofme",
      buttonText: "Subscribe"
    },
    {
      title: "Blog",
      description: "Read about my experiences and insights",
      icon: Globe,
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
        
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-card border-border">
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
                <a href="mailto:contact@indrasena.dev">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
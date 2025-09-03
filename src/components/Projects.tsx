import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A minimalistic portfolio showcasing my journey as a developer and content creator.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Indra1806",
    liveUrl: "#",
  },
  {
    title: "Learning Resources",
    description: "Curated collection of resources and tutorials for fellow developers learning from mistakes.",
    technologies: ["Documentation", "Tutorials", "Best Practices"],
    githubUrl: "https://github.com/Indra1806",
    liveUrl: "https://www.18Slicesofme.blogspot.com",
  },
  {
    title: "Code Experiments",
    description: "Various coding experiments and prototypes exploring new technologies and concepts.",
    technologies: ["JavaScript", "Python", "Web APIs"],
    githubUrl: "https://github.com/Indra1806",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-section px-6 bg-accent/50">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            Projects & Experiments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects that represent my learning journey, each one teaching me 
            valuable lessons and helping me grow as a developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-card-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.liveUrl !== "#" && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover-lift"
            asChild
          >
            <a href="https://github.com/Indra1806" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
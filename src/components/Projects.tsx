import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Description } from "@radix-ui/react-toast";

const projects = [
  {
    title: "Smart Email Classifier - Final Year Project",
    description: "An AI-powered email classifier that categorizes emails into different folders based on their content using NLP techniques.",
    technologies: ["Python", "NLP", "Machine Learning", "Flask"],
    githubUrl: "",
  },
  {
    title: "Productify - Ultimate Productivity Platform",
    description: "A complete, production-grade full-stack web application built with modern technologies. Productify is the ultimate productivity platform for modern teams, featuring task management, project collaboration, and real-time updates.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    title: "Custom Data Generator Web App",
    description: "dataset_generator is a modular Python toolkit designed to automate the creation of synthetic datasets for machine learning experiments, prototyping, and testing. It supports customizable schema definitions, realistic data generation using libraries like Faker, and export options for CSV, JSON, and database formats.",
    technologies: ["Python", "Faker", "Pandas", "Flask"],
    githubUrl: "https://github.com/Indra1806/dataset_generator",
  },
  {
    title: "Voice Cloning Pipeline",
    description: "Migrated from Colab to VS Code, staged dependency installs, CLI support, and output handling.",
    technologies: ["Documentation", "Tutorials", "Best Practices"],
  },
  {
    title: "Image Background Removal Project",
    description: "A Python-based project that utilizes machine learning to automatically remove backgrounds from images, providing a clean and transparent output.",
    technologies: ["Python", "Machine Learning", "OpenCV", "Flask"],
    githubUrl: "https://github.com/Indra1806/Picture_bgrm",    
  },
  {
    title: "SMS Spam Filter",
    description: "Machine learning project for classifying SMS messages as spam or ham. Includes preprocessing (tokenization, stemming), TF-IDF feature extraction, Naive Bayes/Logistic Regression models, and a simple API for inference.",
    technologies: ["Python", "Scikit-learn", "Pkl", "NLP", "Flask", "Dockerfile"],
    githubUrl: "https://github.com/Indra1806/sms-spam-filter",
    liveUrl: "https://indra1806-sms-spam-filter-appapp-8mj2ck.streamlit.app/",
  },
  {
    title: "E-commerce Sales Dashboard",
    description: "E-commerce Sales Dashboard is an end-to-end data analysis and visualization project built using Python in Google Colab. It leverages interactive dashboards to reveal insights from transactional sales data—uncovering patterns across revenue, customer segments, geographic distribution, and product performance.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Dash"],
    githubUrl: "https://github.com/Indra1806/Ecommerce-Sales-Dashboard",
    liveUrl: "https://indra1806.github.io/Ecommerce-Sales-Dashboard/",
  },
  {
    title:"Index of Economic Freedom 2022 – Data Analytics & Tableau Dashboard Project",
    description: "Analyzed global economic freedom data, created interactive Tableau dashboards, and documented insights on GitHub.",
    technologies: ["Tableau", "Data Visualization", "GitHub", "Kanban"],
    githubUrl: "https://github.com/Indra1806/Index-of-Economic-Freedom-2022-Data-Analysis-Project",
    liveUrl: "https://public.tableau.com/app/profile/indra1806/viz/IndexofEconomicFreedom2022-Dashboard_16795676960670/Dashboard1",
  },
  {
    title: "WateerDrop - Fullstack Water Delivery App",
    description: "A full-stack water delivery application built with React, Node.js, and MongoDB. Features include user authentication, product management, order processing, and an admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Indra1806/WATEERDROP",
    liveUrl: "https://wateerdrop.netlify.app/",
  }
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
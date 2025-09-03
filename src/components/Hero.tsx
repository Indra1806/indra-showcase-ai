import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Youtube, Globe } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-6">
      <div className="max-w-content mx-auto text-center">
        <div className="fade-in">
          <h1 className="hero-text mb-6">
            Indrasena Reddy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            A learner from mistakes
          </p>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technology, creativity, and continuous learning through code and content.
          </p>
        </div>
        
        <div className="fade-in-delay flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            variant="default"
            size="lg"
            className="hover-lift px-8 py-3"
            asChild
          >
            <a href="https://github.com/Indra1806" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="hover-lift px-8 py-3"
            asChild
          >
            <a href="https://www.youtube.com/@18slicesofme" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 mr-2" />
              YouTube Channel
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="hover-lift px-8 py-3"
            asChild
          >
            <a href="https://www.18Slicesofme.blogspot.com" target="_blank" rel="noopener noreferrer">
              <Globe className="w-5 h-5 mr-2" />
              Blog
            </a>
          </Button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="fade-in-delay text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce group-hover:animate-none transition-all duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
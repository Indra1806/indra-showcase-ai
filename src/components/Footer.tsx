const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Indrasena Reddy. Built with curiosity and continuous learning.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              "A learner from mistakes" • Always growing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
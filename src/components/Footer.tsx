const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&lt;</span>
              PSB
              <span className="text-primary">/&gt;</span>
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Piyush Singh Bhati
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-muted-foreground">
              Built with passion at{" "}
              <span className="text-primary">IIT Jodhpur</span>
            </span>
          </div>

          <div className="font-mono text-xs text-muted-foreground/50">
            // Design is a side project
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

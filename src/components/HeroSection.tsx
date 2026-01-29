import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/quadcopter-demo.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20 z-10" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px] animate-pulse-glow z-10" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <p className="section-heading mb-6">Robotics Engineer & AI Developer</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Piyush </span>
            <span className="text-gradient">Singh Bhati</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-4 font-light">
            Building the future at the intersection of
          </p>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-foreground mb-8 font-medium">
            <span className="text-primary">Autonomous Systems</span>
            <span className="text-muted-foreground mx-3">×</span>
            <span className="text-electric-blue">Artificial Intelligence</span>
          </p>

          <p className="max-w-xl mx-auto text-muted-foreground mb-10 font-mono text-sm">
            IIT Jodhpur • B.Tech CSE • CGPA: 8.75
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Piyush2005-code"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card glow-border hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/piyush-singh-bhati-5a074929a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card glow-border hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:piyush.bhati680@gmail.com"
              className="p-3 glass-card glow-border hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border bg-background/50 text-foreground font-mono text-sm rounded hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <span className="font-mono text-xs text-muted-foreground -rotate-90 origin-center whitespace-nowrap">
          scroll to explore
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

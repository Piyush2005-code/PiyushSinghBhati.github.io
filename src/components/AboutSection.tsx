import quadcopterHero from "@/assets/quadcopter-hero.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-electric-blue/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative glass-card glow-border p-4 overflow-hidden">
              <img
                src={quadcopterHero}
                alt="Quadcopter CAD Design"
                className="w-full h-auto rounded object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded">
                <p className="font-mono text-xs text-primary">// Quadcopter Design Project</p>
                <p className="text-sm text-muted-foreground mt-1">Custom UAV CAD Model</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-heading">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Engineering the <span className="text-gradient">Future of Flight</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an undergraduate <span className="text-foreground">Computer Science and Engineering</span> student 
                at <span className="text-primary">IIT Jodhpur</span>, driven by a passion for robotics, 
                autonomous systems, and fixed-wing UAV design.
              </p>
              <p>
                My work sits at the intersection of <span className="text-foreground">physics-based modeling</span>, 
                <span className="text-foreground"> CFD-driven simulation</span>, and 
                <span className="text-foreground"> data-driven optimization</span>—bridging theoretical 
                foundations with real-world engineering applications.
              </p>
              <p>
                From designing complete CAD models of aircraft wings achieving lift coefficients 
                above <span className="text-primary font-mono">8.12</span> to building GPU-accelerated 
                voice assistants, I thrive on solving complex, multidisciplinary challenges.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-primary font-mono">8.75</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-mono">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-mono">8.12</p>
                <p className="text-sm text-muted-foreground mt-1">Max CL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

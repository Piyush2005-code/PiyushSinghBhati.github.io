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
              Engineering <span className="text-gradient">Intelligent Systems</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an undergraduate <span className="text-foreground">Computer Science and Engineering</span> student 
                at <span className="text-primary">IIT Jodhpur</span>, passionate about 
                <span className="text-foreground">Applied Deep Learning</span> and building 
                <span className="text-foreground">AI systems</span> that solve real problems.
              </p>
              <p>
                I've applied machine learning to <span className="text-foreground">real-world engineering</span>—using 
                neural surrogate models to accelerate physical simulations and optimize design workflows 
                that traditionally rely on computationally expensive methods.
              </p>
              <p>
                Currently exploring <span className="text-foreground">Embedded Systems</span> and 
                <span className="text-foreground"> Operating Systems</span>—the low-level foundations 
                that fascinate me. My goal is to work on <span className="text-primary">AI inference 
                on compute-constrained resources</span> and <span className="text-primary">AI-focused robotics</span>, 
                where intelligent systems meet hardware limitations.
              </p>
              <p>
                I also have a natural <span className="text-foreground">passion for design</span>—an intuition 
                for form and aesthetics that has so far found expression through 
                <span className="text-foreground">CAD modeling</span>, but extends to how I approach 
                building anything visual.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-primary font-mono">8.75</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-mono">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
                at <span className="text-primary">IIT Jodhpur</span>, focused on building 
                <span className="text-foreground"> intelligent systems</span>—from Large Language Models and 
                GPU-accelerated inference pipelines to multimodal AI architectures.
              </p>
              <p>
                My core expertise lies in <span className="text-foreground">Deep Learning</span>, 
                <span className="text-foreground"> LLM engineering</span>, and 
                <span className="text-foreground"> real-time AI systems</span>. I've built RAG-based voice 
                assistants with vLLM, natural language interfaces for data visualization, and 
                ML-powered scheduling algorithms.
              </p>
              <p>
                Beyond software, I'm drawn to applying AI where it meets the 
                <span className="text-foreground">physical world</span>—using 
                <span className="text-primary">neural surrogate models</span> to accelerate engineering simulations, 
                physics-informed networks for robotics, and ML-driven optimization for real-world systems.
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

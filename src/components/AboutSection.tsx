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
                at <span className="text-primary">IIT Jodhpur</span>, with a growing foundation in
                <span className="text-foreground"> Artificial Intelligence</span>, systems engineering, and intelligent physical systems.
              </p>
              <p>
                I've built <span className="text-foreground">scalable AI and LLM-powered applications</span>—including
                real-time GPU-optimized voice assistants, RAG pipelines, and computer vision models such as
                <span className="text-foreground"> YOLOv8</span> and <span className="text-foreground">U-Net</span>—alongside
                core systems work spanning OS scheduling simulators and
                <span className="text-foreground"> ARM64 unikernel design</span> for ML inference on embedded devices.
              </p>
              <p>
                Currently exploring <span className="text-foreground">operating systems</span>, embedded firmware,
                and low-level systems with the goal of building
                <span className="text-primary"> thoughtfully designed AI-systems</span> for constrained hardware.
                I also have a keen passion for <span className="text-foreground">design</span>, expressed through
                <span className="text-foreground"> CAD modelling</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

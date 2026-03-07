import portrait from "@/assets/Portrait.png";

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
                src={portrait}
                alt="System Architecture Diagram"
                className="w-full h-auto rounded object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded">
                <p className="font-mono text-xs text-primary">// AI Systems Engineering</p>
                <p className="text-sm text-muted-foreground mt-1">Building Infrastructure for ML Workloads</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-heading">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Engineering <span className="text-gradient">AI Systems</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I am an undergraduate <span className="text-foreground">Computer Science</span> student
                at <span className="text-primary">IIT Jodhpur</span> focused on
                <span className="text-foreground"> AI systems</span>, operating systems, and computer architecture.
              </p>
              <p>
                My work explores how modern AI workloads interact with hardware and system software.
                I build infrastructure for machine learning including
                <span className="text-foreground"> GPU-accelerated inference pipelines</span>,
                <span className="text-foreground"> lightweight operating systems for ML workloads</span>, and
                <span className="text-foreground"> distributed AI systems</span>.
              </p>
              <p>
                My interests include <span className="text-primary">ML systems</span>,
                <span className="text-foreground"> GPU architecture</span>,
                <span className="text-foreground"> AI inference infrastructure</span>, and
                <span className="text-primary"> operating system design</span> for high-performance computing environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

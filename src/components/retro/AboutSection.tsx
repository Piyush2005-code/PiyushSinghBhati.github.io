import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import quadcopterHero from "@/assets/quadcopter-hero.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.3) 0%, transparent 70%)' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur-3xl opacity-50" />
            
            {/* Main image container */}
            <div className="relative neon-card p-2 overflow-hidden group">
              {/* Animated border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-border rounded" />
              </div>
              
              <img
                src={quadcopterHero}
                alt="Quadcopter CAD Design"
                className="w-full h-auto rounded object-cover"
              />
              
              {/* Overlay info */}
              <div className="absolute bottom-2 left-2 right-2 p-4 bg-background/90 backdrop-blur-sm rounded">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-primary">DESIGN_PROJECT.CAD</span>
                </div>
                <p className="text-sm text-muted-foreground">Custom UAV CAD Model</p>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -bottom-6 -right-6 neon-card p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-3xl font-display font-bold text-primary">8.75</div>
              <div className="text-xs font-mono text-muted-foreground">CGPA</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="section-label">// ABOUT</span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              ENGINEERING{" "}
              <span className="text-gradient-neon">INTELLIGENT</span>
              <br />
              <span className="text-gradient-warm">SYSTEMS</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm an undergraduate{" "}
                <span className="text-foreground font-medium">Computer Science and Engineering</span> student
                at <span className="text-primary">IIT Jodhpur</span>, passionate about{" "}
                <span className="text-foreground font-medium">Applied Deep Learning</span> and building{" "}
                <span className="text-foreground font-medium">AI systems</span> that solve real problems.
              </p>
              
              <p>
                I've applied machine learning to{" "}
                <span className="text-foreground font-medium">real-world engineering</span>—using
                neural surrogate models to accelerate physical simulations and optimize design workflows
                that traditionally rely on computationally expensive methods.
              </p>
              
              <p>
                Currently exploring{" "}
                <span className="text-foreground font-medium">Embedded Systems</span> and{" "}
                <span className="text-foreground font-medium">Operating Systems</span>—the low-level foundations
                that fascinate me. My goal is to work on{" "}
                <span className="text-primary">AI inference on compute-constrained resources</span> and{" "}
                <span className="text-accent">AI-focused robotics</span>,
                where intelligent systems meet hardware limitations.
              </p>
              
              <p>
                I also have a natural{" "}
                <span className="text-foreground font-medium">passion for design</span>—an intuition
                for form and aesthetics that has so far found expression through{" "}
                <span className="text-foreground font-medium">CAD modeling</span>, but extends to how I approach
                building anything visual.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-4xl font-display font-bold text-primary">5+</div>
                <div className="text-sm font-mono text-muted-foreground mt-1">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-4xl font-display font-bold text-accent">3+</div>
                <div className="text-sm font-mono text-muted-foreground mt-1">AI Systems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
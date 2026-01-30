import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import quadcopterHero from "@/assets/quadcopter-hero.png";
import TiltCard from "./TiltCard";
import ParallaxSection from "./ParallaxSection";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const statsY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.3) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ rotateY: imageRotate }}
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur-3xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Main image container with tilt */}
            <TiltCard className="relative" glowColor="primary" intensity={8}>
              <div className="neon-card p-2 overflow-hidden group">
                {/* Animated border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-border rounded" />
                </div>
                
                <img
                  src={quadcopterHero}
                  alt="Quadcopter CAD Design"
                  className="w-full h-auto rounded object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay info */}
                <motion.div 
                  className="absolute bottom-2 left-2 right-2 p-4 bg-background/90 backdrop-blur-sm rounded"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <motion.span 
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-mono text-xs text-primary">DESIGN_PROJECT.CAD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Custom UAV CAD Model</p>
                </motion.div>
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </TiltCard>

            {/* Floating stats with parallax */}
            <ParallaxSection speed={0.3} direction="down">
              <motion.div
                className="absolute -bottom-6 -right-6 neon-card p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px hsl(165 100% 50% / 0.4)" }}
              >
                <motion.div 
                  className="text-3xl font-display font-bold text-primary"
                  animate={{ textShadow: ["0 0 10px hsl(165 100% 50% / 0.5)", "0 0 20px hsl(165 100% 50% / 0.8)", "0 0 10px hsl(165 100% 50% / 0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  8.75
                </motion.div>
                <div className="text-xs font-mono text-muted-foreground">CGPA</div>
              </motion.div>
            </ParallaxSection>
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
              <motion.span 
                className="text-gradient-neon inline-block"
                whileHover={{ scale: 1.05 }}
              >
                INTELLIGENT
              </motion.span>
              <br />
              <motion.span 
                className="text-gradient-warm inline-block"
                whileHover={{ scale: 1.05 }}
              >
                SYSTEMS
              </motion.span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                I'm an undergraduate{" "}
                <span className="text-foreground font-medium">Computer Science and Engineering</span> student
                at <motion.span className="text-primary inline-block" whileHover={{ scale: 1.1 }}>IIT Jodhpur</motion.span>, passionate about{" "}
                <span className="text-foreground font-medium">Applied Deep Learning</span> and building{" "}
                <span className="text-foreground font-medium">AI systems</span> that solve real problems.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                I've applied machine learning to{" "}
                <span className="text-foreground font-medium">real-world engineering</span>—using
                neural surrogate models to accelerate physical simulations and optimize design workflows
                that traditionally rely on computationally expensive methods.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Currently exploring{" "}
                <span className="text-foreground font-medium">Embedded Systems</span> and{" "}
                <span className="text-foreground font-medium">Operating Systems</span>—the low-level foundations
                that fascinate me. My goal is to work on{" "}
                <motion.span className="text-primary inline-block" whileHover={{ scale: 1.05 }}>AI inference on compute-constrained resources</motion.span> and{" "}
                <motion.span className="text-accent inline-block" whileHover={{ scale: 1.05 }}>AI-focused robotics</motion.span>,
                where intelligent systems meet hardware limitations.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                I also have a natural{" "}
                <span className="text-foreground font-medium">passion for design</span>—an intuition
                for form and aesthetics that has so far found expression through{" "}
                <span className="text-foreground font-medium">CAD modeling</span>, but extends to how I approach
                building anything visual.
              </motion.p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-default"
              >
                <motion.div 
                  className="text-4xl font-display font-bold text-primary"
                  animate={{ textShadow: ["0 0 0px", "0 0 15px hsl(165 100% 50% / 0.5)", "0 0 0px"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5+
                </motion.div>
                <div className="text-sm font-mono text-muted-foreground mt-1">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-default"
              >
                <motion.div 
                  className="text-4xl font-display font-bold text-accent"
                  animate={{ textShadow: ["0 0 0px", "0 0 15px hsl(300 100% 65% / 0.5)", "0 0 0px"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  3+
                </motion.div>
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

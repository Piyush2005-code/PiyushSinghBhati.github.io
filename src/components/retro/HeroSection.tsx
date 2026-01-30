import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import GlitchText from "./GlitchText";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden crt-screen">
      {/* Video Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{ filter: 'saturate(0.3) contrast(1.2)' }}
        >
          <source src="/videos/quadcopter-demo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-10" />

      {/* Animated neon orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] z-10"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.15) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] z-10"
        style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.1) 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content with parallax */}
      <motion.div 
        className="relative z-20 container mx-auto px-6 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal label */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 neon-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(165 100% 50% / 0.3)" }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              <GlitchText text="Robotics Engineer • AI Developer" glitchOnHover />
            </span>
          </motion.div>

          {/* Name with enhanced glitch effect */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-foreground">PIYUSH </span>
            <span 
              className="text-gradient-neon glitch relative"
              data-text="SINGH BHATI"
            >
              SINGH BHATI
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-3 font-light">
              Building the future at the intersection of
            </p>
            <p className="text-xl md:text-2xl font-display tracking-wide">
              <motion.span 
                className="text-primary neon-text-subtle inline-block"
                whileHover={{ scale: 1.05, textShadow: "0 0 30px hsl(165 100% 50% / 0.8)" }}
              >
                ARTIFICIAL INTELLIGENCE
              </motion.span>
              <span className="text-muted-foreground mx-4">×</span>
              <motion.span 
                className="text-accent neon-text-subtle inline-block"
                whileHover={{ scale: 1.05, textShadow: "0 0 30px hsl(300 100% 65% / 0.8)" }}
              >
                ROBOTIC SYSTEMS
              </motion.span>
            </p>
          </motion.div>

          {/* Stats bar with hover effects */}
          <motion.div
            className="flex items-center justify-center gap-8 mb-10 font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { label: "IIT Jodhpur", highlight: false },
              { label: "B.Tech CSE", highlight: true },
              { label: "CGPA:", value: "8.75", highlight: true },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {i === 0 && <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                <span className={stat.highlight ? "text-primary" : "text-muted-foreground"}>
                  {stat.label}
                </span>
                {stat.value && <span className="text-primary">{stat.value}</span>}
                {i < 2 && <div className="h-4 w-px bg-border ml-6" />}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links with magnetic effect */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {[
              { href: "https://github.com/Piyush2005-code", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/piyush-singh-bhati-5a074929a", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:piyush.bhati680@gmail.com", icon: Mail, label: "Email" },
            ].map((link) => (
              <MagneticButton key={link.label} href={link.href}>
                <div className="group p-4 neon-card hover:border-primary/60 transition-all duration-300">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </MagneticButton>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <MagneticButton href="#projects">
              <span className="retro-btn-filled">View Projects</span>
            </MagneticButton>
            <MagneticButton href="#contact">
              <span className="retro-btn">Contact Me</span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <motion.div 
          className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-[10px] text-muted-foreground -rotate-90 origin-center whitespace-nowrap tracking-[0.3em]">
          SCROLL
        </span>
        <motion.div 
          className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Right side status */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0px hsl(165 100% 50%)", "0 0 15px hsl(165 100% 50%)", "0 0 0px hsl(165 100% 50%)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="w-2 h-2 rounded-full bg-accent/50" />
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;

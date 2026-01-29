import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden crt-screen">
      {/* Video Background with CRT effect */}
      <div className="absolute inset-0 z-0">
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
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-10" />

      {/* Animated neon orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] z-10"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.15) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] z-10"
        style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.1) 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
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
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              Robotics Engineer • AI Developer
            </span>
          </motion.div>

          {/* Name with glitch effect */}
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
              <span className="text-primary neon-text-subtle">ARTIFICIAL INTELLIGENCE</span>
              <span className="text-muted-foreground mx-4">×</span>
              <span className="text-accent neon-text-subtle">ROBOTIC SYSTEMS</span>
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex items-center justify-center gap-8 mb-10 font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">IIT Jodhpur</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-primary">B.Tech CSE</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">CGPA:</span>
              <span className="text-primary">8.75</span>
            </div>
          </motion.div>

          {/* Social Links */}
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
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-4 neon-card hover:border-primary/60 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="retro-btn-filled"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="retro-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

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
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <span className="font-mono text-[10px] text-muted-foreground -rotate-90 origin-center whitespace-nowrap tracking-[0.3em]">
          SCROLL
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Right side status */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-accent/50" />
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;
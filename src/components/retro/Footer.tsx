import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/30 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.5) 0%, transparent 70%)' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold">
              <span className="text-primary">&lt;</span>
              PSB
              <span className="text-primary">/&gt;</span>
            </span>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Piyush Singh Bhati
            </span>
          </div>

          {/* Built at */}
          <motion.div
            className="font-mono text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Built with passion at{" "}
            <span className="text-primary">IIT Jodhpur</span>
          </motion.div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground/50">
              SYSTEM_ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
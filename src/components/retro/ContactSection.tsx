import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "piyush.bhati680@gmail.com",
    href: "mailto:piyush.bhati680@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8005857122",
    href: "tel:+918005857122",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "IIT Jodhpur, Rajasthan, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Piyush2005-code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/piyush-singh-bhati-5a074929a",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.3) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              LET'S{" "}
              <span className="text-gradient-neon">CONNECT</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interested in collaborating on robotics, autonomous systems, or AI projects?
              I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Info Cards */}
              <TiltCard className="neon-card p-8" glowColor="primary" intensity={5}>
                <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="p-3 bg-primary/10 rounded border border-primary/20 group-hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <item.icon className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div>
                            <p className="text-xs font-mono text-muted-foreground mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-foreground group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </motion.a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="p-3 bg-primary/10 rounded border border-primary/20"
                            whileHover={{ scale: 1.1 }}
                          >
                            <item.icon className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div>
                            <p className="text-xs font-mono text-muted-foreground mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-foreground">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </TiltCard>

              {/* Social Links */}
              <TiltCard className="neon-card p-6" glowColor="accent" intensity={5}>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <MagneticButton key={link.label} href={link.href}>
                      <motion.div
                        className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-background/50 border border-border/50 rounded hover:border-primary/40 hover:bg-primary/5 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                      </motion.div>
                    </MagneticButton>
                  ))}
                </div>
              </TiltCard>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TiltCard 
                className="neon-card p-10 h-full flex flex-col justify-center items-center text-center relative overflow-hidden"
                glowColor="primary"
                intensity={8}
              >
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-primary/10"
                      style={{ width: 150 + ring * 50, height: 150 + ring * 50 }}
                      animate={{ 
                        scale: [1, 1.1, 1], 
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 8 + ring * 2, 
                        repeat: Infinity,
                        delay: ring * 0.5
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="w-20 h-20 mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px hsl(165 100% 50% / 0.2)", 
                      "0 0 40px hsl(165 100% 50% / 0.4)", 
                      "0 0 20px hsl(165 100% 50% / 0.2)"
                    ],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Send className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4 relative z-10">
                  Ready to Collaborate?
                </h3>
                
                <p className="text-muted-foreground mb-8 relative z-10">
                  Whether it's a research project, internship opportunity, or just a tech discussion—I'd love to hear from you.
                </p>

                <MagneticButton href="mailto:piyush.bhati680@gmail.com?subject=Portfolio Inquiry">
                  <span className="retro-btn-filled relative z-10">
                    Send Email
                  </span>
                </MagneticButton>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

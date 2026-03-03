import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-heading">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build <span className="text-gradient">Something Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on robotics, autonomous systems, or AI projects? 
              I'm always open to discussing new opportunities and ideas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card glow-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:piyush.bhati680@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground">piyush.bhati680@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground">IIT Jodhpur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card glow-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Piyush2005-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-background/50 border border-border/50 rounded hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/piyush-singh-bhati-5a074929a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-background/50 border border-border/50 rounded hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message CTA */}
            <div className="glass-card glow-border p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's a research project, internship opportunity, or just a tech discussion—I'd love to hear from you.
                </p>
                <a
                  href="mailto:piyush.bhati680@gmail.com?subject=Portfolio Inquiry"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

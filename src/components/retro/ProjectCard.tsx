import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  achievements?: string[];
  index: number;
  isInView: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  images,
  tags,
  github,
  achievements,
  index,
  isInView,
}: ProjectCardProps) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Images */}
      <div className={isReversed ? "lg:order-2" : ""}>
        {images.length > 0 ? (
          <div className={`grid ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
            {images.map((img, i) => (
              <TiltCard
                key={i}
                className={`neon-card overflow-hidden ${images.length === 1 ? 'aspect-video' : ''}`}
                glowColor={i % 2 === 0 ? "primary" : "accent"}
                intensity={8}
              >
                <div className="relative group h-full">
                  <img
                    src={img}
                    alt={`${title} - ${i + 1}`}
                    className={`w-full ${images.length === 1 ? 'h-full' : 'h-44'} object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  {/* Scan line effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </TiltCard>
            ))}
          </div>
        ) : (
          <TiltCard className="neon-card p-16 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30"
                animate={{ 
                  boxShadow: ["0 0 0px hsl(165 100% 50% / 0)", "0 0 30px hsl(165 100% 50% / 0.3)", "0 0 0px hsl(165 100% 50% / 0)"],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="font-mono text-3xl text-primary">&lt;/&gt;</span>
              </motion.div>
              <p className="text-muted-foreground font-mono text-sm">
                SOFTWARE_PROJECT
              </p>
            </div>
          </TiltCard>
        )}
      </div>

      {/* Content */}
      <div className={isReversed ? "lg:order-1" : ""}>
        <motion.div 
          className="flex items-center gap-3 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <motion.span 
            className="w-8 h-px bg-primary"
            animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        </motion.div>
        
        <motion.h3 
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Achievements */}
        {achievements && (
          <ul className="space-y-3 mb-6">
            {achievements.map((achievement, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-3 text-sm text-muted-foreground group cursor-default"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="text-primary font-mono text-lg leading-none mt-0.5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                >
                  ›
                </motion.span>
                <span className="group-hover:text-foreground transition-colors">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-primary border border-primary/20 rounded-sm cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.4 + i * 0.03 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                borderColor: "hsl(165 100% 50% / 0.6)",
                backgroundColor: "hsl(165 100% 50% / 0.1)"
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ x: 5 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Github className="w-4 h-4" />
            </motion.div>
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

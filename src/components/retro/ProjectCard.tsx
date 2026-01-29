import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
              <motion.div
                key={i}
                className={`neon-card overflow-hidden group ${
                  images.length === 1 ? 'aspect-video' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`${title} - ${i + 1}`}
                  className={`w-full ${images.length === 1 ? 'h-full' : 'h-44'} object-cover group-hover:scale-105 transition-transform duration-700`}
                />
                {/* Scan line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="neon-card p-16 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="font-mono text-3xl text-primary">&lt;/&gt;</span>
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                SOFTWARE_PROJECT
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={isReversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-primary" />
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Achievements */}
        {achievements && (
          <ul className="space-y-3 mb-6">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-primary font-mono text-lg leading-none mt-0.5">›</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-primary border border-primary/20 rounded-sm hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              {tag}
            </span>
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
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
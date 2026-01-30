import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

const GlitchText = ({ text, className = "", glitchOnHover = false }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(!glitchOnHover);
  const [displayText, setDisplayText] = useState(text);
  
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    if (!isGlitching) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, isGlitching]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onHoverStart={() => glitchOnHover && setIsGlitching(true)}
      onHoverEnd={() => {
        if (glitchOnHover) {
          setIsGlitching(false);
          setDisplayText(text);
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
      
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-primary opacity-70"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
        animate={isGlitching ? {
          x: [-2, 2, -2, 0],
          opacity: [0.7, 0.5, 0.7, 0],
        } : {}}
        transition={{ duration: 0.2, repeat: isGlitching ? Infinity : 0, repeatType: "reverse" }}
      >
        {displayText}
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-accent opacity-70"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
        animate={isGlitching ? {
          x: [2, -2, 2, 0],
          opacity: [0.7, 0.5, 0.7, 0],
        } : {}}
        transition={{ duration: 0.2, repeat: isGlitching ? Infinity : 0, repeatType: "reverse", delay: 0.05 }}
      >
        {displayText}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;

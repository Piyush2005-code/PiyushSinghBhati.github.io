import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.5,
  direction = "up" 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * factor, -100 * speed * factor]);
  const ySpring = useSpring(y, { damping: 20, stiffness: 100 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: ySpring }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
  intensity?: number;
}

const TiltCard = ({ 
  children, 
  className = "", 
  glowColor = "primary",
  intensity = 15 
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useTransform(y, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(x, [0, 1], [-intensity, intensity]);
  
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const glowHsl = glowColor === "primary" 
    ? "165 100% 50%" 
    : "300 100% 65%";

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      
      {/* Dynamic spotlight glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, hsl(${glowHsl} / 0.15) 0%, transparent 50%)`
          ),
        }}
      />
      
      {/* Edge glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit opacity-0"
        style={{
          boxShadow: `0 0 30px hsl(${glowHsl} / 0.3), inset 0 0 30px hsl(${glowHsl} / 0.05)`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TiltCard;

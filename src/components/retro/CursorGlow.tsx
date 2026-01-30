import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(165 100% 50% / 0.15) 0%, hsl(165 100% 50% / 0.05) 30%, transparent 70%)",
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Secondary accent glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-[200px] h-[200px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(300 100% 65% / 0.1) 0%, transparent 60%)",
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] w-2 h-2 rounded-full bg-primary"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 10px hsl(165 100% 50% / 0.8), 0 0 20px hsl(165 100% 50% / 0.4)",
        }}
        animate={{
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CursorGlow;

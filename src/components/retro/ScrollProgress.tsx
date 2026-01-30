import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          opacity,
          background: "linear-gradient(90deg, hsl(165 100% 50%), hsl(300 100% 65%))",
          boxShadow: "0 0 10px hsl(165 100% 50% / 0.5), 0 0 20px hsl(165 100% 50% / 0.3)",
        }}
      />
      
      {/* Side progress indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 z-50">
        <motion.div
          className="w-1 h-32 bg-border/30 rounded-full overflow-hidden"
        >
          <motion.div
            className="w-full bg-primary rounded-full origin-top"
            style={{
              scaleY: scrollYProgress,
              boxShadow: "0 0 10px hsl(165 100% 50% / 0.8)",
            }}
          />
        </motion.div>
        <motion.span 
          className="font-mono text-[10px] text-muted-foreground"
          style={{ opacity }}
        >
          <motion.span>
            {scrollYProgress.get() > 0 ? Math.round(scrollYProgress.get() * 100) : 0}%
          </motion.span>
        </motion.span>
      </div>
    </>
  );
};

export default ScrollProgress;

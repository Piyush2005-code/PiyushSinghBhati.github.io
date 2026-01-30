import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Cpu, Database, Cog, Terminal, Box } from "lucide-react";
import TiltCard from "./TiltCard";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: "primary" | "accent";
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming",
    skills: ["C", "C++", "Python", "TypeScript", "React"],
    color: "primary",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Robotics & Simulation",
    skills: ["Fixed-Wing Aerodynamics", "CFD Workflows", "CAD Modeling", "ANSYS Fluent"],
    color: "accent",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Machine Learning",
    skills: ["Physics-Informed Models", "Surrogate Modeling", "NeuralFoil", "Deep Learning"],
    color: "primary",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Systems",
    skills: ["Operating Systems", "Scheduling Algorithms", "Real-Time Systems"],
    color: "accent",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Tools & DevOps",
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "VS Code"],
    color: "primary",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "AI & LLMs",
    skills: ["vLLM", "RAG", "LangChain", "GPU Inference", "Agentic AI"],
    color: "accent",
  },
];

const courses = [
  "Data Structures & Algorithms",
  "Linear Algebra & O.D.E",
  "Probability & Stochastic Processes",
  "Introduction to Computer Science",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(165 100% 50% / 0.3) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            SKILLS &{" "}
            <span className="text-gradient-neon">TECH</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard 
                className="neon-card p-6 h-full" 
                glowColor={category.color}
                intensity={10}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <motion.div 
                    className={`p-3 rounded ${category.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-accent/10 text-accent border-accent/20'} border transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-mono bg-background/50 text-muted-foreground border border-border/50 rounded-sm cursor-default ${category.color === 'primary' ? 'hover:border-primary/40 hover:text-primary' : 'hover:border-accent/40 hover:text-accent'} transition-all duration-200`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="section-label">// FOUNDATION</span>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Relevant Coursework
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {courses.map((course, index) => (
              <motion.span
                key={course}
                className="px-5 py-2.5 font-mono text-sm neon-card text-muted-foreground cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -3,
                  boxShadow: "0 0 25px hsl(165 100% 50% / 0.3)"
                }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

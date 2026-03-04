import { Code, Cpu, Database, Cog, Terminal, Box } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming",
    skills: ["C", "C++", "Python", "TypeScript", "React"],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Robotics & Simulation",
    skills: ["Multi-rotor Dynamics", "CFD Simulations", "CAD Modeling", "ANSYS Fluent", "Electronics"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Machine Learning",
    skills: ["Deep Learning", "ANNs", "CNNs(YOLO, U-Net)", "Sequence-to-Sequence models"],
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Systems",
    skills: ["Operating Systems", "Scheduling Algorithms", "Real-Time Systems"],
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Tools & DevOps",
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "VS Code"],
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "AI & LLMs",
    skills: ["vLLM", "RAG", "LangChain", "GPU Inference", "Agentic AI"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-heading">Technical Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card glow-border p-6 hover:bg-card/90 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-background/50 text-muted-foreground border border-border/50 rounded hover:border-primary/30 hover:text-primary transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="mt-16 text-center">
          <p className="section-heading">Academic Foundation</p>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Data Structures & Algorithms",
              "Linear Algebra & O.D.E",
              "Probability & Stochastic Processes",
              "Introduction to Computer Science"
            ].map((course) => (
              <span
                key={course}
                className="px-4 py-2 text-sm font-mono bg-card border border-border/50 text-muted-foreground rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

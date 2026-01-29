import { ExternalLink, Github } from "lucide-react";
import jarvisInterface from "@/assets/jarvis-interface.png";
import llmChartGenerator from "@/assets/llm-chart-generator.png";
import osScheduler from "@/assets/os-scheduler.png";
import wingCad from "@/assets/wing-cad.png";
import wingDrawing from "@/assets/wing-drawing.png";
import pressureContours from "@/assets/pressure-contours.png";
import cfdSimulation from "@/assets/cfd-simulation.png";
import quadcopterIsometric from "@/assets/quadcopter-isometric.png";
import quadcopterFront from "@/assets/quadcopter-front.png";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  achievements?: string[];
}

const projects: Project[] = [
  // AI Projects at the top
  {
    title: "JARVIS Voice Assistant",
    subtitle: "2025 • AI/ML Project",
    description:
      "Engineered a real-time voice assistant with sub-second latency leveraging GPU-accelerated inference pipelines. Built end-to-end ML infrastructure supporting real-time audio processing, natural language understanding, and context-aware response generation.",
    images: [jarvisInterface],
    tags: ["NVIDIA AudioFlamingo3", "vLLM", "RAG", "Docker", "Kubernetes", "PyTorch"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Implemented GPU inference on NVIDIA A5000 with sub-second latency using optimized CUDA kernels",
      "Deployed containerized ML inference stack supporting 500+ concurrent users with 98% uptime",
      "Integrated Retrieval-Augmented Generation (RAG) for context-aware, knowledge-grounded responses",
      "Built real-time audio processing pipeline using AudioFlamingo3 for voice-to-text transcription",
    ],
  },
  {
    title: "LLM-Based Chart Generation Web App",
    subtitle: "2025 • Deep Learning Project",
    description:
      "Built an automated chart generation pipeline that uses Large Language Models to analyze uploaded PDF documents and generate meaningful data visualizations. Leverages NLP for document understanding and automated insight extraction.",
    images: [llmChartGenerator],
    tags: ["LLMs", "NLP", "PDF Parsing", "React", "Node.js", "Data Visualization"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Implemented LLM-based document parsing using transformer architectures for semantic understanding",
      "Built NLP pipeline for extracting structured data from unstructured PDF content",
      "Designed automated chart selection algorithm using ML-based data type classification",
      "Created responsive frontend-backend workflow with real-time data visualization rendering",
    ],
  },
  // CAD Project in the middle
  {
    title: "Fixed-Wing STOL Aircraft Wing Design",
    subtitle: "Inter IIT Tech Meet 14.0",
    description:
      "Researched fixed-wing flight dynamics and evaluated high-lift wing configurations. Applied physics-informed, CFD-aware neural networks (NeuralFoil) to optimize airfoil geometries under realistic constraints, combining ML with aerodynamic simulation.",
    images: [wingCad, wingDrawing, pressureContours, cfdSimulation],
    tags: ["NeuralFoil", "CFD", "ANSYS Fluent", "Physics-Informed ML", "CAD", "Aerodynamics"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Applied Physics-Informed Neural Networks (NeuralFoil) for airfoil geometry optimization",
      "Trained surrogate ML models on CFD simulation data for rapid design iteration",
      "Achieved maximum lift coefficient of 8.1258 through ML-assisted optimization",
      "Validated ML predictions through iterative CFD simulations in ANSYS Fluent",
    ],
  },
  {
    title: "Quadcopter CAD Design & Development",
    subtitle: "Personal Project • Robotics",
    description:
      "Complete design and development of a custom quadcopter with detailed CAD modeling, structural analysis, and component integration for autonomous flight capabilities.",
    images: [quadcopterIsometric, quadcopterFront],
    tags: ["CAD", "UAV Design", "Fusion 360", "Robotics", "Autonomous Systems"],
    achievements: [
      "Designed full assembly CAD model with structural optimization",
      "Optimized frame geometry for payload capacity and flight stability",
      "Implemented modular component design for easy maintenance and upgrades",
    ],
  },
  {
    title: "OS Scheduling Algorithm Simulator",
    subtitle: "2025 • Systems Programming",
    description:
      "Implemented classical OS scheduling algorithms with interactive UI-based visualization. Features real-time Gantt chart generation for analyzing scheduling behavior and algorithm comparison.",
    images: [osScheduler],
    tags: ["React", "TypeScript", "Electron", "Algorithm Visualization", "Operating Systems"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Implemented FCFS, Round Robin, and Priority scheduling algorithms with configurable parameters",
      "Built real-time Gantt chart visualization for process scheduling analysis",
      "Created interactive UI for comparing algorithm performance metrics",
      "Developed desktop application using Electron for cross-platform support",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-heading">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects & <span className="text-gradient">Research</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Images */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {project.images.length > 0 ? (
                  <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className={`glass-card glow-border overflow-hidden group ${
                          project.images.length === 1 ? 'aspect-video' : ''
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - ${i + 1}`}
                          className={`w-full ${project.images.length === 1 ? 'h-full' : 'h-40'} object-cover group-hover:scale-105 transition-transform duration-500`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="glass-card glow-border p-12 flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="font-mono text-2xl text-primary">&lt;/&gt;</span>
                      </div>
                      <p className="text-muted-foreground font-mono text-sm">
                        Software Project
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="font-mono text-sm text-primary mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Achievements */}
                {project.achievements && (
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-mono mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

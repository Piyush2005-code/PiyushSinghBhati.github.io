import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[250px] opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(300 100% 65% / 0.3) 0%, transparent 70%)' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            FEATURED{" "}
            <span className="text-gradient-neon">WORK</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
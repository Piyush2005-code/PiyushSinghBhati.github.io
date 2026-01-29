import { ExternalLink, Github } from "lucide-react";
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
    title: "Fixed-Wing STOL Aircraft Wing Design",
    subtitle: "Inter IIT Tech Meet 14.0",
    description:
      "Researched fixed-wing flight dynamics and evaluated high-lift wing configurations. Applied physics-informed, CFD-aware neural networks (NeuralFoil) to optimize airfoil geometries under realistic constraints.",
    images: [wingCad, wingDrawing, pressureContours, cfdSimulation],
    tags: ["CFD", "ANSYS Fluent", "NeuralFoil", "CAD", "Aerodynamics"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Achieved maximum lift coefficient of 8.1258",
      "Designed complete end-to-end CAD model",
      "Validated through iterative CFD simulations",
    ],
  },
  {
    title: "Quadcopter CAD Design & Development",
    subtitle: "Personal Project",
    description:
      "Complete design and development of a custom quadcopter with detailed CAD modeling, structural analysis, and component integration for autonomous flight capabilities.",
    images: [quadcopterIsometric, quadcopterFront],
    tags: ["CAD", "UAV Design", "Fusion 360", "Robotics"],
    achievements: [
      "Full assembly CAD model",
      "Optimized for payload capacity",
      "Modular component design",
    ],
  },
  {
    title: "JARVIS Voice Assistant",
    subtitle: "2025",
    description:
      "Engineered a real-time voice assistant using GPU-accelerated inference pipelines with containerized deployment infrastructure supporting concurrent user interaction.",
    images: [],
    tags: ["NVIDIA AudioFlamingo3", "vLLM", "RAG", "Docker", "Kubernetes"],
    github: "https://github.com/Piyush2005-code",
    achievements: [
      "Real-time GPU-accelerated inference",
      "Containerized microservices architecture",
      "Scalable concurrent user support",
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
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className="glass-card glow-border overflow-hidden group"
                      >
                        <img
                          src={img}
                          alt={`${project.title} - ${i + 1}`}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
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

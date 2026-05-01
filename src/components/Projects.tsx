import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Download,
  Smartphone,
  Star,
  Layers,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import OpenSource from "./OpenSource";

/* ================= TYPES ================= */

type ProjectType = "featured" | "practice";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features?: string[];
  github?: string;
  live?: string;
  playStore?: string;
  downloads?: string;
  type: ProjectType;
  icon: React.ElementType;
}

interface ProjectCategory {
  name: string;
  type: ProjectType;
  icon: React.ElementType;
}

/* ================= CATEGORIES ================= */

const projectCategories: ProjectCategory[] = [
  {
    name: "Featured Projects",
    type: "featured",
    icon: Star,
  },
  {
    name: "Practice Projects",
    type: "practice",
    icon: Layers,
  },
];

/* ================= DATA ================= */

const projects: Project[] = [
  {
    title: "12th Objective Quiz",
    description:
      "An educational app that helps Class 12 students prepare for exams using mock tests and study notes, while providing a competitive environment to stay motivated.",
    tech: [
      "Flutter",
      "Firebase",
      "BLoC State Management",
      "Google Authentication",
      "Razorpay",
      "In-App Purchases",
      "Google AdMob",
      "PDF Viewer",
    ],
    features: [
      "Mock Tests",
      "Study Notes (PDF)",
      "Leaderboards",
      "Performance Analytics",
      "Battle (Online and Group)",
      "Subscriptions & Coupons",
      "Profile",
      "Multi Language",
      "Push Notifications",
      "Admin-controlled Content",
    ],
    downloads: "200K+",
    playStore:
      "https://play.google.com/store/apps/details?id=com.quiz.objectives12th",
    type: "featured",
    icon: Smartphone,
  },
  {
    title: "MGit (Git in C)",
    description:
      "mgit is a lightweight, custom version control system written in C. It replicates the core functionality of standard Git, allowing users to initialize repositories, stage changes, create commits, manage branches, and view repository history.",
    tech: ["C Programming", "File I/O"],
    features: [
      "mgit init",
      "mgit config",
      "mgit add",
      "mgit unstage",
      "mgit commit",
      "mgit log",
      "mgit status",
      "mgit checkout",
      "mgit branch",
      "mgit restore",
      "mgit help",
    ],
    github: "https://github.com/mohit-2003/mgit",
    type: "featured",
    icon: Github,
  },
  {
    title: "KMRL InsightVault (SIH 2025)",
    description:
      "An AI-powered document intelligence and workflow automation platform for Kochi Metro Rail Limited (KMRL). It centralizes, reads, summarizes, classifies, and routes organizational documents — helping teams make faster, data-driven decisions.",
    tech: [
      "React",
      "Express",
      "Tailwind CSS",
      "shadcn/ui",
      "PostgreSQL",
      "AWS S3",
      "Tesseract OCR",
      "LLM (Gemini)",
    ],
    features: [
      "Document Management",
      "AI Summarization & Classification",
      "OCR",
      "Document Routing",
      "Department Dashboards",
      "Knowledge Repository",
      "Search & Filter",
      "Authentication & Role Management",
    ],
    github: "https://github.com/mohit-2003/KMLR-SIH-25080",
    type: "featured",
    icon: Github,
  },
  {
    title: "Insta Clone",
    description:
      "A fully functional Instagram clone with post uploads, likes, comments, and user authentication using Firebase backend.",
    tech: ["Flutter", "Firebase", "Cloud Storage"],
    github: "https://github.com/mohit-2003/Insta-Clone",
    type: "practice",
    icon: Github,
  },
  {
    title: "Google Keep Notes Clone",
    description:
      "A notes application with Google Sign-In authentication and real-time syncing using Firebase Cloud Firestore.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    github: "https://github.com/mohit-2003/Google-Keep-Notes-Clone",
    type: "practice",
    icon: Github,
  },
  {
    title: "Youtube Clone",
    description:
      "A YouTube Clone web application built with React that mimics the core layout and functionality of YouTube.",
    tech: ["React", "Material UI", "Styled Components"],
    github: "https://github.com/mohit-2003/Youtube-Clone-React",
    type: "practice",
    icon: Github,
  },
  {
    title: "Amazon Clone",
    description:
      "This is a mobile e-commerce app built with Flutter that replicates the core interface and shopping experience of the Amazon mobile app. It includes screens such as home, product listings, product detail views, cart functionality, and basic navigation — all designed with Flutter widgets and layouts. Users can browse products, view product details, add items to a cart, and interact with UI components similar to the Amazon shopping app.",
    tech: ["Flutter", "Dart", "Provider (State Management)"],
    github: "https://github.com/mohit-2003/Amazon-Clone-Flutter",
    type: "practice",
    icon: Github,
  },
  {
    title: "Facebook Clone",
    description:
      "FB Clone (Flutter) is a mobile app built with Flutter that aims to replicate the user interface and structure of the Facebook app. It serves as a starting point for learning and building social app UI in Flutter, featuring screens like login, feed layout, and basic navigation patterns similar to Facebook.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/mohit-2003/fb_clone",
    type: "practice",
    icon: Github,
  },
];

/* ================= CARD ================= */

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-xl flex flex-col card-hover"
  >
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 rounded-lg bg-primary/10">
        <project.icon className="text-primary" size={24} />
      </div>

      <div className="flex items-center gap-2">
        {project.github && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
              >
                <Github size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent>View on GitHub</TooltipContent>
          </Tooltip>
        )}

        {project.live && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
              >
                <ExternalLink size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent>View Live Demo</TooltipContent>
          </Tooltip>
        )}

        {project.playStore && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
              >
                <Smartphone size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent>View on Play Store</TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>

    <h3 className="text-lg font-display font-semibold mb-2">{project.title}</h3>

    <p className="text-sm text-muted-foreground mb-4 flex-gr.ow">
      {project.description}
    </p>

    {/* Features */}
    {project.features && (
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.features.map((feature) => (
          <span
            key={feature}
            className="px-1.5 py-0.5 text-[0.6rem] rounded bg-accent/10 text-accent"
          >
            {feature}
          </span>
        ))}
      </div>
    )}

    {project.downloads && (
      <div className="flex items-center gap-2 mb-4 text-sm text-primary">
        <Download size={16} />
        <span>{project.downloads} downloads</span>
      </div>
    )}

    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

/* ================= MAIN ================= */

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const activeType = projectCategories[activeCategory].type;
  const filteredProjects = projects.filter(
    (project) => project.type === activeType
  );

  return (
    <TooltipProvider delayDuration={100}>
      <section id="projects" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="section-container">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest block">
              Projects
            </span>
            <h2 className="section-title mt-3">
              Things I’ve <span className="gradient-text-static">built</span>
            </h2>
          </motion.div>

          {/* Toggle Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-3 mb-12"
          >
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "glass hover:bg-secondary"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
        {/* Open Source Projects */}
        <OpenSource isInView={isInView} />
      </section>
    </TooltipProvider>
  );
};

export default Projects;

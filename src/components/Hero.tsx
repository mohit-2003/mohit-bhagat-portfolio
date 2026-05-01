import { motion, type Variants, type Easing } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const easeOut: Easing = [0.33, 1, 0.68, 1];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const MouseFollowParticles = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
      delay: Math.random() * 2,
    }));
    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Mouse glow effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          left: `calc(${mousePos.x}% - 12rem)`,
          top: `calc(${mousePos.y}% - 12rem)`,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Floating particles that react to mouse */}
      {particles.map((particle) => {
        const distX = (mousePos.x - particle.x) * 0.3;
        const distY = (mousePos.y - particle.y) * 0.3;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              x: distX,
              y: distY,
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              x: { type: "spring", damping: 50, stiffness: 100 },
              y: { type: "spring", damping: 50, stiffness: 100 },
              scale: { duration: 3, repeat: Infinity, delay: particle.delay },
              opacity: { duration: 3, repeat: Infinity, delay: particle.delay },
            }}
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:itsmohitbhagat@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mohit-bhagat-614592201",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/mohit-2003", label: "GitHub" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Mouse Follow Particles */}
      <MouseFollowParticles />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 animated-bg" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Open to Work Badge - LinkedIn Style */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-3 px-1 py-1 pr-5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MB</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-green-400 text-sm font-semibold">
                  #OpenToWork
                </span>
                <span className="text-xs text-muted-foreground">
                  Software Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Mohit Bhagat</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              <span className="text-foreground font-medium">
                Software Developer
              </span>{" "}
              & <span className="text-foreground font-medium">Founder</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Creating reliable software from
            <span className="text-primary font-semibold"> Idea</span> to
            <span className="text-primary font-semibold"> Production</span>.
            Driven by
            <span className="text-primary font-semibold"> Problem-Solving</span>
            , and and real-world results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary gap-2 group">
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="social-icon p-3 rounded-full glass"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

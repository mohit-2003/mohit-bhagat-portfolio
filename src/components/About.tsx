import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, GraduationCap, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Experienced in React, Next.js, and Flutter",
    },
    {
      icon: GraduationCap,
      title: "MCA Student",
      description: "University of Delhi (Expected 2027)",
    },
    {
      icon: Rocket,
      title: "Founder",
      description: "Our Smart Study - 1.5M+ downloads",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Solving real-world problems with code",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="section-title">
            Passionate about building{" "}
            <span className="gradient-text-static">exceptional</span> products
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-medium">
                Full Stack Developer
              </span>{" "}
              who enjoys building fast, user-friendly web and mobile
              applications. I work with modern JavaScript frameworks and focus
              on writing clean code with thoughtful design to solve real
              problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m also the{" "}
              <span className="text-foreground font-medium">
                Founder of Our Smart Study
              </span>
              , an ed-tech platform with multiple apps that have crossed
              <span className="text-primary font-medium">
                {" "}
                1.5M+ total downloads
              </span>{" "}
              on the Play Store, helping students prepare effectively for exams.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my{" "}
              <span className="text-foreground font-medium">MCA</span> from{" "}
              <span className="text-foreground font-medium">
                University of Delhi
              </span>
              , continuously expanding my technical knowledge.
            </p>

            {/* Stats */}
            {/* <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <div className="text-3xl font-display font-bold text-primary">
                  200K+
                </div>
                <div className="text-sm text-muted-foreground">
                  App Downloads
                </div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

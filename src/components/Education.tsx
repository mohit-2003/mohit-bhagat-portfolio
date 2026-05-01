import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, BookOpen, School } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  current?: boolean;
  type: "master" | "bachelor" | "highschool";
  description?: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Delhi",
    period: "Expected 2027",
    current: true,
    score: "9.27 SGPA",
    type: "master",
    description: "Focused on core computer science and software development.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tilka Manjhi Bhagalpur University",
    period: "2024",
    score: "72.14%",
    type: "bachelor",
    description: "Developed a strong base in programming and computer science.",
  },
  {
    degree: "Class XII - Science",
    institution: "BSEB (Bihar School Examination Board)",
    period: "2020",
    score: "84.2%",
    type: "highschool",
    description: "Focused on Mathematics, Physics, and Chemistry.",
  },
];

const degreeConfig = {
  master: {
    badge: "Masters",
    badgeClass:
      "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30",
    icon: GraduationCap,
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  bachelor: {
    badge: "Bachelors",
    badgeClass:
      "bg-gradient-to-r from-primary/20 to-cyan-500/20 text-primary border border-primary/30",
    icon: BookOpen,
    iconBg: "bg-gradient-to-br from-primary to-cyan-500",
  },
  highschool: {
    badge: "High School",
    badgeClass:
      "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30",
    icon: School,
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
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
            Education
          </span>
          <h2 className="section-title">
            My <span className="gradient-text-static">academic</span> journey
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-amber-500 hidden sm:block" />

          {education.map((item, index) => {
            const config = degreeConfig[item.type];
            const Icon = config.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative mb-12 last:mb-0 sm:flex ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 hidden sm:block z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                    className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={22} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`sm:w-[calc(50%-40px)] ${
                    isEven ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl relative overflow-hidden group"
                  >
                    {/* Decorative gradient */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${config.iconBg} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
                    />

                    {/* Header with Badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`sm:hidden w-10 h-10 rounded-xl ${config.iconBg} flex items-center justify-center`}
                        >
                          <Icon className="text-white" size={18} />
                        </div>
                        <div>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.badgeClass}`}
                          >
                            {config.badge}
                          </span>
                        </div>
                      </div>
                      {item.current && (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-medium flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          Currently Pursuing
                        </motion.span>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-lg font-display font-semibold mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {item.institution}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} className="text-primary" />
                        {item.period}
                      </span>
                      {item.score && (
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          <Award size={14} />
                          {item.score}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Acuvisor Insurance Brokers Pvt Ltd",
    location: "Jaipur, Rajasthan",
    type: "Remote",
    period: "Jun 2024 – Jul 2025",
    description: [
      "Designed and implemented end-to-end frontend flows for multiple insurance categories including motor, pet and term insurance — covering quote, product listing, KYC, proposal, payment, and policy generation.",
      "Built a responsive user dashboard with features to view and update profiles, access policies, and manage policy history",
      "Integrated AcuBunny, an AI-powered insurance chatbot, to provide product recommendations and personalized assistance within the application.",
    ],
    isCurrent: false,
  },
  {
    title: "Founder",
    company: "Our Smart Study",
    location: "Remote",
    type: "Ed-Tech",
    period: "Oct 2020 – Present",
    description: [
      "Founded an ed-tech platform with multiple educational apps achieving 1.5M+ downloads on Play Store.",
      "Designed and launched the app 12th Objective Quiz (mentioned in Projects), which has 200K+ downloads on the Play Store.",
      "Built end-to-end features including mock test engine, notes section, leaderboard, and performance analytics for students.",
      "Integrated payment gateway, coupon system, subscription flow, and in-app ads to enable monetization.",
    ],
    isCurrent: true,
  },
  {
    title: "Intern",
    company: "Acuvisor Insurance Brokers Pvt Ltd",
    location: "Jaipur, Rajasthan",
    type: "Onsite",
    period: "Feb 2023 – Jul 2023",
    description: [
      "Built and integrated end-to-end APIs for Health and Personal Accident insurance flows, covering quote, proposal, payment, kyc and policy generation using React.js.",
      "Optimized the large proposal form page where Formik caused all fields to re-render on each input, often hanging the site; replaced it with React Hook Form and modularized the form to prevent full re-renders and ensure smooth user experience.",
      "Implemented WebSocket connections to display real-time API progress and product updates, and refactored the frontend codebase with a scalable structure and consistent coding standards to support future product integrations.",
    ],
  },
];

const ExperienceCard = ({
  exp,
  index,
  isInView,
}: {
  exp: ExperienceItem;
  index: number;
  isInView: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className={`relative flex items-start gap-8 mb-12 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

      {/* Content Card */}
      <div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:pr-8" : "md:pl-8"
        }`}
      >
        <div className="glass p-6 rounded-xl card-hover">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {exp.isCurrent && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl font-display font-semibold">
                {exp.title}
              </h3>
              <p className="text-primary font-medium">{exp.company}</p>
            </div>
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="text-primary" size={20} />
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {exp.location}
            </span>
            <span className="px-2 py-0.5 rounded bg-secondary text-xs">
              {exp.type}
            </span>
          </div>

          {/* Expandable Description */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm text-muted-foreground group"
          >
            <span>{isOpen ? "Hide details" : "View responsibilities"}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown
                size={16}
                className="text-primary group-hover:text-primary/80"
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-4">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
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
            Experience
          </span>
          <h2 className="section-title">
            Where I've <span className="gradient-text-static">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.title}`}
              exp={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

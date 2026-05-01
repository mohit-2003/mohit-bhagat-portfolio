import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const OpenSource = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-display font-semibold text-center mb-8">
        Open Source Contributions
      </h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass p-6 rounded-xl card-hover">
          <div className="flex items-center gap-3 mb-3">
            <Github className="text-primary" size={20} />
            <h4 className="font-semibold">RefineJS</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Contributed by fixing a bug; PR #6701 merged
          </p>
          <a
            href="https://github.com/refinedev/refine/pull/6701"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View PR <ExternalLink size={12} />
          </a>
        </div>
        <div className="glass p-6 rounded-xl card-hover">
          <div className="flex items-center gap-3 mb-3">
            <Star className="text-primary" size={20} />
            <h4 className="font-semibold">GSSOC 2024</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Contributed to picwise.co as part of GirlScript Summer of Code 2024
          </p>
          <span className="text-xs text-muted-foreground">
            2 pull requests successfully merged
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenSource;

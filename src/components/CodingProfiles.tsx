import { motion } from "framer-motion";
import { CodingProfile } from "./Skills";

const CodingProfiles = ({
  isInView,
  codingProfiles,
}: {
  isInView: boolean;
  codingProfiles: CodingProfile[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <h3 className="text-xl font-display font-semibold mb-6">
        Coding Profiles
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="glass px-5 py-4 rounded-xl hover:bg-secondary transition-colors group flex items-center gap-4"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={profile.icon}
                alt={profile.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="text-left">
              <span className="font-medium group-hover:text-primary transition-colors block">
                {profile.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {profile.handle}
              </span>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold ${profile.color}`}
            >
              {profile.solved} solved
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default CodingProfiles;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "itsmohitbhagat@gmail.com",
      href: "mailto:itsmohitbhagat@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohit-bhagat",
      href: "https://linkedin.com/in/mohit-bhagat-614592201",
    },
    { icon: MapPin, label: "Location", value: "Delhi - India", href: null },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohit-2003",
      color: "hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohit-bhagat-614592201",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
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
            Contact
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text-static">connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass p-6 rounded-xl text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    className="font-medium hover:text-primary transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Connect with me:
                </span>
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300 ${item.color}`}
                      aria-label={item.label}
                    >
                      <item.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="mailto:itsmohitbhagat@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary gap-2"
                >
                  <MessageCircle size={18} />
                  Say Hello
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline gap-2"
                >
                  <ExternalLink size={16} />
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

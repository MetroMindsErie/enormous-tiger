import { Target, Mail } from "lucide-react";
import { motion } from "motion/react";
import tigerLogo from "../assets/tiger-logo.png";
import { trackEvent } from "../lib/analytics";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="relative rounded-full overflow-hidden shadow-lg shadow-orange-600/20 border-2 border-orange-600/30 bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <img
                    src={tigerLogo}
                    alt="Enormous Tiger"
                    className="w-10 h-10 object-contain p-1.5"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-12 h-12 text-orange-600/20" strokeWidth={1} />
                </motion.div>
              </div>
              <span className="text-zinc-100 uppercase tracking-wider">Enormous Tiger</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Precision product evaluation backed by 30+ years of military and emergency response experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-zinc-100 uppercase tracking-wider text-sm mb-4">Categories</h4>
            <ul className="space-y-2">
              {["Camping", "Fishing", "Workout", "Trucks", "Running"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href="#" className="text-zinc-500 hover:text-orange-600 text-sm transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-zinc-100 uppercase tracking-wider text-sm mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
              <Mail className="w-4 h-4 text-orange-600" />
              <a
                href="mailto:info@enormoustiger.com"
                className="hover:text-orange-600 transition-colors"
                onClick={() => trackEvent("click_contact_email")}
              >
                info@enormoustiger.com
              </a>
            </div>
            <p className="text-zinc-600 text-xs uppercase tracking-wide">
              Field-tested. Mission-proven. Data-driven.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="pt-8 border-t border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-zinc-600 text-sm text-center">
            © 2025 Enormous Tiger. All rights reserved. | Operational since 1995
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
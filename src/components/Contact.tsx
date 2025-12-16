import { motion } from "motion/react";
import { Mail, MapPin, Target } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("submit_contact_form", {
      name: formData.name,
      email: formData.email
    });
    // Handle form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-zinc-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-orange-600"></div>
            <Target className="w-6 h-6 text-orange-600" />
            <div className="h-1 w-12 bg-orange-600"></div>
          </div>
          <h2 className="text-zinc-100 mb-4">Contact Intelligence</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have questions about our assessments or need gear recommendations for specific operational environments? 
            Reach out to our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-zinc-100 text-xl uppercase tracking-wider mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a 
                    href="mailto:intel@enormoustiger.com" 
                    className="text-zinc-300 hover:text-orange-600 transition-colors"
                  >
                    intel@enormoustiger.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Based In
                  </p>
                  <p className="text-zinc-300">
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-orange-600 uppercase tracking-wide text-sm mb-3">
                Assessment Requests
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We're constantly expanding our assessment library. If you have a specific product category 
                or regional gear requirement you'd like us to evaluate, let us know. We prioritize assessments 
                based on operational demand.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zinc-400 text-sm uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-orange-600 transition-colors resize-none"
                  placeholder="Tell us about your inquiry or assessment request..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider transition-colors rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

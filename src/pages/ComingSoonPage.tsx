import { motion } from "motion/react";
import { useEffect } from "react";
import { trackPageView } from "../lib/analytics";

interface ComingSoonPageProps {
  title: string;
  description: string;
  path: string;
  imageSrc?: string;
}

export function ComingSoonPage({ title, description, path, imageSrc = "/coming-soon-hero.png" }: ComingSoonPageProps) {
  useEffect(() => {
    trackPageView(path);
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="min-h-screen relative flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-8 md:px-16 max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-[#f97316] uppercase tracking-widest text-sm font-bold mb-4">
          Coming Soon
        </p>
        <div className="w-12 h-px bg-[#f97316] mb-6" />
        <p className="text-gray-200 text-lg leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
}

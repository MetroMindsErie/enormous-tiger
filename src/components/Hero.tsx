import { Target, ArrowRight, Shield, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import tigerLogo from "../assets/tiger-logo.png";
import { trackEvent } from "../lib/analytics";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    trackEvent("view_hero");
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden" id="mission">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
      
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950/50 to-transparent"></div>
      
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-orange-600/10 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 border border-orange-600/10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo and branding */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Large Logo with effects */}
            <div className="relative mb-8">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-orange-600/20 blur-3xl rounded-full scale-150"></div>
              
              {/* Animated target rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Target className="w-[500px] h-[500px] text-orange-600" strokeWidth={0.5} />
              </motion.div>
              
              {/* Rotating target */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Target className="w-96 h-96 text-orange-600/10" strokeWidth={1.5} />
              </motion.div>
              
              {/* Main logo - rounded with shadow */}
              <motion.div
                className="relative rounded-full overflow-hidden shadow-2xl shadow-orange-600/30 border-4 shadow-orange-600/30 border- border-orange-00/30"
                animate={{ 
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 25px 50px -12px rgba(234, 88, 12, 0.3)",
                    "0 25px 50px -12px rgba(234, 88, 12, 0.5)",
                    "0 25px 50px -12px rgba(234, 88, 12, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-full flex items-center justify-center w-[380px] h-[380px] md:w-[428px] md:h-[428px] p-8">
                  <img
                    src={tigerLogo}
                    alt="Enormous Tiger Logo"
                    className="w-60 h-60 md:w-72 md:h-72 object-contain rounded-full border-4 border-orange-600/30 drop-shadow-xl"
                    style={{ backgroundClip: "padding-box" }}
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Title */}
            <motion.h1
              className="text-center lg:text-left text-zinc-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ENORMOUS TIGER
            </motion.h1>
            
            <motion.p
              className="text-orange-600 text-xl md:text-2xl uppercase tracking-wider text-center lg:text-left mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Mission-Critical Product Intelligence
            </motion.p>
            
            {/* Stats */}
            <motion.div
              className="flex gap-6 flex-wrap justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 px-6 py-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 text-2xl">30+</span>
                </div>
                <p className="text-zinc-400 text-sm uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 px-6 py-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 text-2xl">500+</span>
                </div>
                <p className="text-zinc-400 text-sm uppercase tracking-wide">Products Tested</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Mission statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl opacity-20 blur"></div>
              
              <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 md:p-10">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange-600 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-orange-600 rounded-br-2xl"></div>
                
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="h-1 w-12 bg-orange-600"></div>
                  <h2 className="text-orange-600 uppercase tracking-wider">
                    Mission Statement
                  </h2>
                </motion.div>
                
                <motion.p
                  className="text-zinc-300 leading-relaxed text-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Enormous Tiger delivers market research and product recommendations with the precision of a mission-critical operation. Leveraging over thirty years of experience in high-stakes military and emergency response, Enormous Tiger applies a unique, uncompromising standard to evaluating products and services.
                </motion.p>
                
                <motion.p
                  className="text-zinc-400 leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  We bypass marketing claims to provide clients with data-driven insights focused on reliability, durability, and operational effectiveness—ensuring you invest only in products that stand up to the most demanding real-world conditions.
                </motion.p>
                
                <motion.button
                  className="group bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider flex items-center gap-3 transition-all duration-300 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Our Intel</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-orange-600 rounded-full p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-orange-600 rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
import { motion } from "motion/react";
import { Shield, Target, Zap, Award, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { trackPageView } from "../lib/analytics";

export function MethodologyPage() {
  useEffect(() => {
    trackPageView("/methodology");
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    {
      icon: Zap,
      title: "Performance",
      description: "Performance is precisely assessed by evaluating use in live operational environments, ensuring every product meets or exceeds its designated specification baseline."
    },
    {
      icon: Shield,
      title: "Durability & Build Quality",
      description: "Our assessment involves analyzing material integrity, component endurance, and resistance to degradation across the entire lifecycle."
    },
    {
      icon: Target,
      title: "Ease of Use & Ergonomics",
      description: "We address the functionally tested by users across all proficiency levels to guarantee rapid, widespread assessment."
    },
    {
      icon: Award,
      title: "Features & Innovation",
      description: "Each feature is assessed for its measurable operational value, and verifiable real-world utility, not merely its commercial appeal."
    },
    {
      icon: TrendingUp,
      title: "Value",
      description: "This final number brings together all the technical details and practical issues to form a firm recommendation for buying and using the product."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-orange-600 mb-4 mx-auto"></div>
            <h1 className="text-zinc-100 mb-4">Our Intelligence Methodology</h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Our approach involves a precise and systematic evaluation of every product, a methodology built on a foundation of more than 30 years of accumulated knowledge derived from the intense operational requirements of military and emergency response.
          </p>
        </motion.div>

        {/* Law of Effective Presence */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl opacity-20 blur"></div>
          <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange-600 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-orange-600 rounded-br-2xl"></div>
            
            <h2 className="text-orange-600 uppercase tracking-wider mb-6 text-center">
              The Enormous Tiger "Law of Effective Presence"
            </h2>
            <p className="text-zinc-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              By providing the highest quality assessments, we empower you to make informed decisions that result in having the equipment and capability you need, and delivered at the best possible value.
            </p>
          </div>
        </motion.div>

        {/* 5-Metric Assessment Framework */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-zinc-100 text-center uppercase tracking-wider mb-3">
            5-Metric Assessment Framework
          </h2>
          <div className="h-1 w-20 bg-orange-600 mb-12 mx-auto"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-orange-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <metric.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-zinc-100 uppercase tracking-wider text-sm">
                    {metric.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assessment Process */}
        <motion.div
          className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-zinc-100 uppercase tracking-wider mb-3">
            Our Assessment Process
          </h2>
          <div className="h-1 w-20 bg-orange-600 mb-8"></div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Field Deployment
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Every product undergoes extensive field testing in real operational environments. We don't rely on manufacturer claims or laboratory conditions—our assessments are based on actual use in demanding scenarios across diverse climate zones.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Regional Validation
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Products are assessed in the specific environmental conditions where they'll be deployed. Arctic cold, tropical humidity, desert heat—we test gear in the exact conditions it will face to ensure operational readiness when it matters most.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Multi-User Validation
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Products are assessed by operators with varying skill levels to ensure consistent performance across all user proficiencies. This guarantees that our recommendations work for both novices and experts.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Lifecycle Analysis
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We track products through their entire operational lifecycle, monitoring degradation patterns, maintenance requirements, and long-term reliability to provide accurate durability assessments.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Data-Driven Recommendations
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Our final assessments combine quantitative measurements with qualitative operational feedback to deliver firm, actionable recommendations that you can trust when making purchase decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

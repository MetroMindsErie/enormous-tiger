import { motion } from "motion/react";
import { ArrowLeft, Target, Shield, Zap, Wrench, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "../components/hooks/useInView";

export function MethodologyPage() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);

  const metrics = [
    {
      id: 1,
      name: "Performance",
      icon: Target,
      color: "text-orange-600",
      question: "Does it actually work well?",
      description: "How effectively and efficiently the product completes its core function under test conditions.",
      details: "We measure raw performance through controlled field trials, stress tests, and real-world usage scenarios. Every product must prove it can execute its primary function at or above manufacturer specifications."
    },
    {
      id: 2,
      name: "Durability & Build Quality",
      icon: Shield,
      color: "text-blue-500",
      question: "Will it break quickly?",
      description: "The quality of materials, expected lifespan, resilience to wear and tear, and general construction.",
      details: "Products undergo extended use trials, environmental stress testing, and material analysis. We evaluate construction quality, component durability, and resistance to degradation over time."
    },
    {
      id: 3,
      name: "Ease of Use & Ergonomics",
      icon: Zap,
      color: "text-green-500",
      question: "Is it simple to live with?",
      description: "How intuitive and comfortable the product is to set up, operate, and maintain in daily life.",
      details: "We assess setup complexity, learning curve, daily operation, maintenance requirements, and ergonomic design. Products are tested by users with varying experience levels to ensure broad accessibility."
    },
    {
      id: 4,
      name: "Features & Innovation",
      icon: Wrench,
      color: "text-purple-500",
      question: "Does it have the things I need?",
      description: "The variety and utility of the included features, especially when compared to competitors in the same price range.",
      details: "We evaluate feature completeness, innovation, competitive positioning, and real-world utility. Each feature is tested for practical value rather than marketing appeal."
    },
    {
      id: 5,
      name: "Value Proposition",
      icon: TrendingUp,
      color: "text-yellow-500",
      question: "Is it worth the money?",
      description: "The final assessment of whether the product's quality, features, and performance justify its price tag.",
      details: "We analyze cost vs. performance, competitive pricing, long-term ownership costs, and overall return on investment. This metric synthesizes all other factors into a final recommendation."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <motion.div
        className="bg-zinc-900 border-b-4 border-orange-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-400 hover:text-orange-600 transition-colors mb-6"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Return to Base</span>
          </motion.button>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <motion.h1
                className="text-zinc-100 mb-3 uppercase tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Intelligence Methodology
              </motion.h1>
              <motion.div
                className="h-1 w-20 bg-orange-600 mb-4"
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.p
                className="text-zinc-400 max-w-3xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Every product we evaluate undergoes rigorous testing across five critical metrics. This standardized framework ensures objective, data-driven recommendations you can trust.
              </motion.p>
            </div>
            <motion.div
              className="bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-2" />
              <p className="text-zinc-500 text-xs uppercase tracking-wide text-center">
                30+ Years<br />Experience
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Section */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-zinc-100 uppercase tracking-wider mb-4">
              The 5 Core Metrics
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Our evaluation framework cuts through marketing hype to deliver objective intelligence on what matters most.
            </p>
          </motion.div>

          <div className="space-y-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`${metric.color} flex-shrink-0`}>
                        <Icon className="w-12 h-12" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-zinc-100 text-2xl uppercase tracking-wide">
                            {index + 1}. {metric.name}
                          </h3>
                          <span className="text-zinc-600 text-sm uppercase tracking-wider">
                            Metric {index + 1}/5
                          </span>
                        </div>
                        <p className={`${metric.color} text-lg mb-4 italic`}>
                          "{metric.question}"
                        </p>
                        <p className="text-zinc-300 mb-4 text-lg">
                          {metric.description}
                        </p>
                        <div className="bg-zinc-800/50 border-l-4 border-orange-600 p-4">
                          <p className="text-zinc-400 leading-relaxed">
                            {metric.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scoring System */}
          <motion.div
            className="mt-16 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-zinc-100 text-2xl uppercase tracking-wider mb-6 text-center">
              Scoring System
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-lg text-center">
                <div className="text-3xl text-green-500 mb-2">9.0 - 10.0</div>
                <div className="text-zinc-400 uppercase text-sm tracking-wide">Elite Performance</div>
                <p className="text-zinc-600 text-xs mt-2">Best-in-class, mission-critical excellence</p>
              </div>
              <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-lg text-center">
                <div className="text-3xl text-orange-600 mb-2">7.0 - 8.9</div>
                <div className="text-zinc-400 uppercase text-sm tracking-wide">Recommended</div>
                <p className="text-zinc-600 text-xs mt-2">Solid performance, reliable operation</p>
              </div>
              <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-lg text-center">
                <div className="text-3xl text-red-500 mb-2">Below 7.0</div>
                <div className="text-zinc-400 uppercase text-sm tracking-wide">Not Recommended</div>
                <p className="text-zinc-600 text-xs mt-2">Significant limitations or concerns</p>
              </div>
            </div>
            <p className="text-zinc-400 text-center leading-relaxed">
              Each metric is scored on a 10-point scale based on objective testing data, field trials, and comparative analysis. The overall product rating is calculated as a weighted average across all five metrics.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={() => navigate("/")}
              className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider transition-colors rounded-lg inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Tested Products
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

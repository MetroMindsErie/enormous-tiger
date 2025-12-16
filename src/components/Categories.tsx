import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../lib/analytics";
import { Target, MapPin } from "lucide-react";

export function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      key: "hunting_knives",
      name: "Hunting Knives",
      description: "Premium folding knives assessed through rigorous field trials. Every blade evaluated for lock strength, edge retention, and operational reliability across all climate zones.",
      productCount: 4,
      regionalNote: "All-Region Assessment",
      image: "/assets/knives/category-hero.jpg"
    }
  ];

  const handleCategoryClick = (categoryKey: string) => {
    trackEvent("click_category", { category: categoryKey });
    navigate(`/category/${categoryKey}`);
  };

  return (
    <section className="py-20 bg-zinc-950" id="categories">
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
          <h2 className="text-zinc-100 mb-4">Assessed Equipment Categories</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Precision assessments of mission-critical gear. Each category represents products vetted through extensive operational field testing in real-world conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              className="group bg-zinc-900 border border-zinc-800 hover:border-orange-600/50 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleCategoryClick(category.key)}
            >
              <div className="relative aspect-[21/9] overflow-hidden bg-zinc-800">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="w-32 h-32 text-orange-600/20" strokeWidth={1} />
                </div>
                
                {/* Regional Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-zinc-950/90 backdrop-blur-sm border border-orange-600/30 px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-600 text-xs uppercase tracking-wider">
                    {category.regionalNote}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-zinc-100 text-2xl">{category.name}</h3>
                  <span className="bg-orange-600/10 text-orange-600 px-4 py-2 text-sm uppercase tracking-wider border border-orange-600/30 rounded-lg">
                    {category.productCount} Products
                  </span>
                </div>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <motion.button
                  className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-3 uppercase text-sm tracking-wider transition-colors inline-flex items-center gap-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Assessments
                  <span className="text-lg">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Categories with Regional Focus */}
        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-zinc-100 text-xl uppercase tracking-wider mb-3">
              Expanding Regional Assessment Library
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-6">
              Future categories currently under rigorous field assessment across diverse operational environments. We're vetting equipment for cold-weather operations, humid tropical conditions, and high-heat desert environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-zinc-800/30 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Under Assessment
              </div>
              <p className="text-zinc-300 mb-2">Cold-Weather Gear</p>
              <p className="text-zinc-500 text-xs">Arctic & Sub-Arctic Operations</p>
            </div>
            
            <div className="bg-zinc-800/30 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Under Assessment
              </div>
              <p className="text-zinc-300 mb-2">Tactical Equipment</p>
              <p className="text-zinc-500 text-xs">Home Defense & EDC</p>
            </div>
            
            <div className="bg-zinc-800/30 border border-zinc-800 rounded-lg p-6 text-center">
              <div className="text-orange-600 uppercase tracking-wide text-sm mb-2">
                Under Assessment
              </div>
              <p className="text-zinc-300 mb-2">Surveillance Systems</p>
              <p className="text-zinc-500 text-xs">All-Weather Monitoring</p>
            </div>
          </div>

          <p className="text-orange-600 text-sm uppercase tracking-wide text-center">
            Only Vetted Products Make The Cut • Real Experience, Real Recommendations
          </p>
        </motion.div>
      </div>
    </section>
  );
}

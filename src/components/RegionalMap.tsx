import { motion } from "motion/react";
import { useState } from "react";
import { Snowflake, Sun, Droplets, Wind, MapPin } from "lucide-react";
import { trackEvent } from "../lib/analytics";

interface Region {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  conditions: string[];
  comingSoon?: boolean;
}

const regions: Region[] = [
  {
    id: "northern",
    name: "Northern US",
    icon: Snowflake,
    color: "from-blue-600 to-cyan-600",
    description: "Arctic & Sub-Arctic Operations",
    conditions: ["Extreme cold (-40°F)", "Heavy snow", "Ice conditions", "Short daylight hours"],
    comingSoon: true
  },
  {
    id: "southern",
    name: "Southern US",
    icon: Sun,
    color: "from-orange-600 to-yellow-600",
    description: "High-Heat Desert Operations",
    conditions: ["Extreme heat (110°F+)", "Low humidity", "Intense UV", "Minimal shade"],
    comingSoon: true
  },
  {
    id: "atlantic",
    name: "Atlantic/Caribbean",
    icon: Droplets,
    color: "from-teal-600 to-blue-600",
    description: "Humid Tropical Environments",
    conditions: ["High humidity (80%+)", "Heavy rainfall", "Salt exposure", "Tropical storms"],
    comingSoon: true
  },
  {
    id: "midwest",
    name: "Midwest/Plains",
    icon: Wind,
    color: "from-amber-600 to-orange-600",
    description: "Variable Continental Climate",
    conditions: ["Extreme temperature swings", "High winds", "Tornadic activity", "Rapid weather changes"],
    comingSoon: true
  }
];

export function RegionalMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId);
    trackEvent("select_region", { region: regionId });
  };

  const selectedData = regions.find(r => r.id === selectedRegion);

  return (
    <section className="py-20 bg-zinc-950" id="regional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-orange-600"></div>
            <MapPin className="w-6 h-6 text-orange-600" />
            <div className="h-1 w-12 bg-orange-600"></div>
          </div>
          <h2 className="text-zinc-100 mb-4">Regional Intelligence</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Mission-critical gear assessments tailored to specific operational environments. Each region demands different equipment capabilities—we've field-tested the gear that performs when conditions are at their worst.
          </p>
        </motion.div>

        {/* Regional Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => {
            const Icon = region.icon;
            const isSelected = selectedRegion === region.id;
            
            return (
              <motion.div
                key={region.id}
                className={`relative bg-zinc-900 border-2 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
                  isSelected 
                    ? "border-orange-600 shadow-lg shadow-orange-600/20" 
                    : "border-zinc-800 hover:border-orange-600/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleRegionSelect(region.id)}
              >
                {/* Coming Soon Badge */}
                {region.comingSoon && (
                  <div className="absolute top-3 right-3 bg-orange-600 text-zinc-950 px-3 py-1 text-xs uppercase tracking-wider rounded-full z-10">
                    Coming Soon
                  </div>
                )}

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-10`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${region.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-zinc-950" />
                    </div>
                    <h3 className="text-zinc-100 text-lg uppercase tracking-wide">
                      {region.name}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-4">{region.description}</p>
                  
                  <div className="space-y-2">
                    {region.conditions.slice(0, 2).map((condition, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                        <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                        <span>{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Region Details */}
        {selectedData && (
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`bg-gradient-to-br ${selectedData.color} p-4 rounded-lg`}>
                <selectedData.icon className="w-8 h-8 text-zinc-950" />
              </div>
              <div>
                <h3 className="text-zinc-100 text-2xl uppercase tracking-wide mb-1">
                  {selectedData.name}
                </h3>
                <p className="text-zinc-400">{selectedData.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-orange-600 uppercase tracking-wide text-sm mb-3">
                  Operational Conditions
                </h4>
                <ul className="space-y-2">
                  {selectedData.conditions.map((condition, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedData.comingSoon && (
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
                  <h4 className="text-orange-600 uppercase tracking-wide text-sm mb-3">
                    Regional Assessment In Progress
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Our team is currently conducting extensive field trials in {selectedData.name.toLowerCase()} conditions. Regional-specific gear assessments will be available soon.
                  </p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wide">
                    Only Vetted Products Make The Cut
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <p className="text-zinc-500 text-sm text-center">
                <span className="text-orange-600">Currently Available:</span> Hunting Knives (All-Region Assessment) • 
                <span className="text-zinc-400 ml-2">Additional regional categories under field assessment</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zinc-400 mb-6">
            Region-specific assessments ensure you're equipped for the exact conditions you'll face.
          </p>
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-3 uppercase tracking-wider transition-colors rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackEvent("click_view_categories");
              document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Current Assessments
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

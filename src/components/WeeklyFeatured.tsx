import { ProductCard } from "./ProductCard";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useRef } from "react";

export function WeeklyFeatured() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const featuredProducts = [
    {
      id: 1,
      name: "Summit Pro Tent",
      category: "CAMPING",
      rating: 9.4,
      image: "https://images.unsplash.com/photo-1627820988643-8077d82eed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Field-tested in extreme conditions. Withstood 60mph winds and sustained heavy rain. Mission-ready shelter.",
      durability: "EXTREME",
      reliability: "PROVEN",
      price: "$449"
    },
    {
      id: 2,
      name: "TactiCast Pro Rod",
      category: "FISHING",
      rating: 9.1,
      image: "https://images.unsplash.com/photo-1601776945824-880c978dd931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwZ2VhciUyMGxha2V8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Precision engineering meets battlefield durability. Carbon fiber construction tested across 15,000+ casts.",
      durability: "HIGH",
      reliability: "VERIFIED",
      price: "$289"
    },
    {
      id: 3,
      name: "Endurance Trail Runner X",
      category: "RUNNING",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1711466067057-d1bd10183924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbCUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "500-mile torture test completed. Superior ankle support and shock absorption in hostile terrain.",
      durability: "VERIFIED",
      reliability: "PROVEN",
      price: "$179"
    }
  ];

  return (
    <section ref={ref} className="bg-zinc-950 py-16 md:py-24" id="weekly">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Calendar className="w-8 h-8 text-orange-600" />
          <div>
            <h2 className="text-zinc-100 uppercase tracking-wider">
              Weekly Recon
            </h2>
            <p className="text-zinc-500 text-sm uppercase tracking-wide">
              Week of Nov 17, 2025 • Camping Essentials
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="h-1 bg-orange-600 mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: "80px" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
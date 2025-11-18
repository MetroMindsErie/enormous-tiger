import { CategoryCard } from "./CategoryCard";
import { Tent, Fish, Dumbbell, Truck, Mountain, Footprints } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useRef } from "react";

interface CategoryGridProps {
  onCategoryClick?: (categoryKey: string) => void;
}

export function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const categories = [
    {
      id: 1,
      name: "Camping",
      key: "camping",
      icon: Tent,
      count: 47,
      image: "https://images.unsplash.com/photo-1627820988643-8077d82eed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Fishing",
      key: "fishing",
      icon: Fish,
      count: 35,
      image: "https://images.unsplash.com/photo-1601776945824-880c978dd931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwZ2VhciUyMGxha2V8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Workout",
      key: "workout",
      icon: Dumbbell,
      count: 52,
      image: "https://images.unsplash.com/photo-1662386392766-9edacc1318fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXF1aXBtZW50JTIwd2VpZ2h0c3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Trucks",
      key: "trucks",
      icon: Truck,
      count: 29,
      image: "https://images.unsplash.com/photo-1730816602059-85368f614683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMG9mZnJvYWR8ZW58MXx8fHwxNzYzMzM4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Outdoor",
      key: "outdoor",
      icon: Mountain,
      count: 63,
      image: "https://images.unsplash.com/photo-1704278483849-cc87b257d568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMG1pbGl0YXJ5JTIwZ2VhcnxlbnwxfHx8fDE3NjMzMzgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "Running",
      key: "running",
      icon: Footprints,
      count: 41,
      image: "https://images.unsplash.com/photo-1711466067057-d1bd10183924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbCUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section ref={ref} className="bg-zinc-900 py-16 md:py-24 border-t border-zinc-800" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-zinc-100 uppercase tracking-wider mb-2">
            All Categories
          </h2>
          <motion.div
            className="h-1 bg-orange-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard 
                category={category} 
                onClick={() => onCategoryClick?.(category.key)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
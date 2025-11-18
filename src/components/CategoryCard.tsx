import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
  count: number;
  image: string;
}

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = category.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-zinc-950 border border-zinc-800 hover:border-orange-600/50 transition-all duration-300 overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-800">
        <motion.div
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <ImageWithFallback
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="bg-orange-600 p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-zinc-950" strokeWidth={2.5} />
              </motion.div>
              <div>
                <h3 className="text-zinc-100 uppercase tracking-wider">
                  {category.name}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide">
                  {category.count} Products Tested
                </p>
              </div>
            </div>
            
            <motion.div
              className="text-orange-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
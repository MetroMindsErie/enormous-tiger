import { Shield, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  durability: string;
  reliability: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group bg-zinc-900 border border-zinc-800 hover:border-orange-600/50 transition-all duration-300 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          className="absolute top-4 left-4 bg-orange-600 text-zinc-950 px-3 py-1 uppercase tracking-wider text-xs"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {product.category}
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 bg-zinc-950/90 text-orange-600 px-3 py-1 backdrop-blur-sm"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-sm">RATING:</span> {product.rating}/10
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-zinc-100 mb-3">
          {product.name}
        </h3>
        
        <p className="text-zinc-400 mb-6 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex gap-4 mb-6">
          <motion.div
            className="flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4 text-orange-600" />
            <span className="text-zinc-500">DURABILITY:</span>
            <span className="text-zinc-300">{product.durability}</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-zinc-500">RELIABILITY:</span>
            <span className="text-zinc-300">{product.reliability}</span>
          </motion.div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <span className="text-orange-600">
            {product.price}
          </span>
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-2 uppercase text-sm tracking-wider transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            <motion.span
              className="absolute inset-0 bg-orange-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View Intel</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
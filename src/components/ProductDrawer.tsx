import { motion } from "motion/react";
import { X, Shield, Zap, Star, Check, ExternalLink, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "./ui/drawer";
import { trackEvent } from "../lib/analytics";

interface ProductDetails {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  durability: string;
  reliability: string;
  price: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  testResults: { metric: string; score: string; description: string }[];
  affiliateLink: string;
}

interface ProductDrawerProps {
  product: ProductDetails | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDrawer({ product, open, onClose }: ProductDrawerProps) {
  if (!product) return null;

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] bg-zinc-900 border-zinc-800">
        <div className="overflow-y-auto max-h-[85vh]">
          <DrawerHeader className="sticky top-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 z-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <DrawerTitle className="text-zinc-100 text-left mb-2">
                  {product.name}
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  Detailed product information and specifications for {product.name}
                </DrawerDescription>
                <div className="flex items-center gap-4">
                  <span className="bg-orange-600 text-zinc-950 px-3 py-1 text-xs uppercase tracking-wider">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                    <span className="text-zinc-300">{product.rating}/10</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </DrawerHeader>

          <div className="p-6 space-y-8">
            {/* Hero Image */}
            <motion.div
              className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              className="flex items-center justify-between gap-4 p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                  Mission-Tested Price
                </p>
                <p className="text-orange-600 text-2xl">{product.price}</p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-3 uppercase tracking-wider flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => trackEvent("click_buy_now", { product_id: product.id })}
                >
                  <ExternalLink className="w-4 h-4" />
                  Buy Now
                </motion.button>
                <motion.button
                  className="border border-zinc-700 hover:border-orange-600 text-zinc-300 hover:text-orange-600 px-4 py-3 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => trackEvent("click_share_product", { product_id: product.id })}
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Mission Metrics */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">
                    Durability
                  </span>
                </div>
                <p className="text-zinc-100 text-xl">{product.durability}</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">
                    Reliability
                  </span>
                </div>
                <p className="text-zinc-100 text-xl">{product.reliability}</p>
              </div>
            </motion.div>

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-zinc-100 uppercase tracking-wider mb-3">
                Field Assessment
              </h3>
              <div className="h-1 w-20 bg-orange-600 mb-4"></div>
              <p className="text-zinc-300 leading-relaxed">{product.fullDescription}</p>
            </motion.div>

            {/* Test Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-zinc-100 uppercase tracking-wider mb-3">
                Performance Metrics
              </h3>
              <div className="h-1 w-20 bg-orange-600 mb-4"></div>
              <div className="space-y-4">
                {product.testResults.map((test, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800/30 border-l-4 border-orange-600 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-100 uppercase tracking-wide text-sm">
                        {test.metric}
                      </span>
                      <span className="text-orange-600">{test.score}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{test.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-zinc-100 uppercase tracking-wider mb-3">
                Technical Specifications
              </h3>
              <div className="h-1 w-20 bg-orange-600 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800/30 border border-zinc-800 p-3 rounded"
                  >
                    <span className="text-zinc-500 text-sm uppercase tracking-wide block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-zinc-200">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pros and Cons */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div>
                <h3 className="text-zinc-100 uppercase tracking-wider mb-3">
                  Strengths
                </h3>
                <div className="h-1 w-20 bg-orange-600 mb-4"></div>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-300">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-zinc-100 uppercase tracking-wider mb-3">
                  Limitations
                </h3>
                <div className="h-1 w-20 bg-orange-600 mb-4"></div>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-300">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="sticky bottom-0 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 p-6 -mx-6 -mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <motion.button
                className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                Purchase from Verified Supplier
              </motion.button>
              <p className="text-zinc-500 text-xs text-center mt-3 uppercase tracking-wide">
                30-Day Field Test Guarantee • Free Tactical Shipping
              </p>
            </motion.div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
import { motion } from "motion/react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { useCart } from "../contexts/CartContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { trackEvent } from "../lib/analytics";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, itemCount, totalPrice } = useCart();

  const handleCheckout = () => {
    trackEvent("begin_checkout", { 
      items_count: itemCount,
      total_value: totalPrice,
      currency: "USD"
    });
    onCheckout();
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] bg-zinc-900 border-zinc-800">
        <DrawerHeader className="border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-orange-600" />
              <DrawerTitle className="text-zinc-100">
                Mission Gear ({itemCount})
              </DrawerTitle>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DrawerHeader>

        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
          {items.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ShoppingBag className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 uppercase tracking-wide mb-2">
                No Equipment Selected
              </p>
              <p className="text-zinc-600 text-sm">
                Add tactical gear to begin your mission
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-zinc-800/30 border border-zinc-800 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-zinc-100 text-sm uppercase tracking-wide truncate">
                        {item.name}
                      </h4>
                      <p className="text-zinc-500 text-xs uppercase mt-1">
                        {item.category}
                      </p>
                      <p className="text-orange-600 mt-2">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-2">
                      <motion.button
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 p-2 rounded transition-colors"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="text-zinc-100 w-8 text-center">
                        {item.quantity}
                      </span>
                      <motion.button
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 p-2 rounded transition-colors"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <motion.button
                      className="text-red-500 hover:text-red-400 p-2 transition-colors"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-zinc-800 p-6 bg-zinc-900/95 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400 uppercase tracking-wide text-sm">
                Total Mission Cost
              </span>
              <span className="text-orange-600 text-2xl">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <motion.button
              className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

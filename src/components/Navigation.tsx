import { useState, useEffect } from "react";
import { Target, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import tigerLogo from "figma:asset/c67e8358351626e91bf8845a70f230e994cd4ec6.png";

interface NavigationProps {
  onLogoClick?: () => void;
}

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Weekly Recon", href: "#weekly" },
    { name: "Categories", href: "#categories" },
    { name: "Mission", href: "#mission" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-orange-600/30 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-12 h-12">
              {/* Tiger Logo - Rounded */}
                <div className="relative rounded-full overflow-hidden shadow-lg shadow-orange-600/20 border-2 border-orange-600/30 bg-zinc-950">
                  <img
                    src={tigerLogo}
                    alt="Enormous Tiger"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
              {/* Animated Target Ring Behind */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-16 h-16 text-orange-600/20" strokeWidth={1} />
              </motion.div>
            </div>
            <span className="text-zinc-100 uppercase tracking-wider">
              Enormous Tiger
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-orange-600 uppercase tracking-wider text-sm transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-2 uppercase text-sm tracking-wider transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-100 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-zinc-950 border-t border-zinc-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-zinc-400 hover:text-orange-600 uppercase tracking-wider text-sm transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-950 px-6 py-3 uppercase text-sm tracking-wider transition-colors">
                Subscribe
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
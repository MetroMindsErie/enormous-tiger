import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { trackEvent } from "../../lib/analytics";

interface AffiliateLinkProps {
  merchant: string;
  url: string;
  productId: number;
  productName: string;
  price: string;
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
}

export function AffiliateLink({
  merchant,
  url,
  productId,
  productName,
  price,
  variant = 'primary',
  className = ''
}: AffiliateLinkProps) {
  
  const handleClick = () => {
    // Track outbound affiliate click
    trackEvent('affiliate_click', {
      product_id: productId,
      product_name: productName,
      merchant: merchant,
      price: price,
      timestamp: new Date().toISOString()
    });

    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-4 text-base",
    secondary: "border-2 border-orange-600 hover:bg-orange-600/10 text-orange-600 px-6 py-3 text-sm",
    compact: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-4 py-2 text-xs"
  };

  const merchantLogos: Record<string, string> = {
    cabelas: "🎯",
    amazon: "📦",
    'bass-pro': "🎣",
    rei: "⛰️",
    backcountry: "🏔️"
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${variants[variant]} ${className} rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      rel="noopener noreferrer sponsored"
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-600"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-lg">{merchantLogos[merchant]}</span>
        <span>Check Price at {merchant.replace('-', ' ')}</span>
        <ExternalLink className="w-4 h-4" />
      </span>
    </motion.button>
  );
}

import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function FTCDisclosure({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <p className="text-zinc-600 text-xs">
        <strong>Disclosure:</strong> We earn from qualifying purchases.{' '}
        <a href="/disclosure" className="text-orange-600 hover:underline">
          Full Details
        </a>
      </p>
    );
  }

  return (
    <motion.div
      className="bg-zinc-900 border-l-4 border-orange-600 p-6 rounded-lg my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start gap-3">
        <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-zinc-100 uppercase tracking-wide mb-2">
            Affiliate Disclosure
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-3">
            Enormous Tiger is a participant in affiliate programs including Amazon Associates, 
            Cabela's Outfitter Club, and Bass Pro Shops. When you purchase through our links, 
            we earn a commission at no additional cost to you.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Our recommendations are based on 30+ years of field experience and rigorous testing. 
            We never accept payment for positive reviews and maintain complete editorial independence. 
            Affiliate earnings support our testing operations and allow us to provide free, 
            unbiased product intelligence.
          </p>
          <a
            href="/disclosure"
            className="text-orange-600 hover:text-orange-500 text-sm uppercase tracking-wide mt-3 inline-block"
          >
            Read Full Disclosure Policy →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

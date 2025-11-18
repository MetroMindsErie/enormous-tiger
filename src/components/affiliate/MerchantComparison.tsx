import { motion } from "motion/react";
import { Check, TruckIcon, Shield, Zap } from "lucide-react";
import { AffiliateLink } from "./AffiliateLink";
import type { AffiliateLink as AffiliateLinkType } from "../../types/affiliate";

interface MerchantComparisonProps {
  productId: number;
  productName: string;
  affiliateLinks: AffiliateLinkType[];
}

export function MerchantComparison({ productId, productName, affiliateLinks }: MerchantComparisonProps) {
  const getMerchantBenefits = (merchant: string) => {
    const benefits: Record<string, string[]> = {
      cabelas: ["Field & Stream Rewards", "Free Ship $50+", "Price Match"],
      amazon: ["Prime 2-Day Ship", "Easy Returns", "Reviews"],
      'bass-pro': ["Pro Points", "In-Store Pickup", "Expert Support"],
      rei: ["Member Dividend", "Lifetime Guarantee", "Rental Program"],
      backcountry: ["Expert Advice", "Price Match", "Free Returns"]
    };
    return benefits[merchant] || [];
  };

  const getStockBadge = (availability: string) => {
    const badges = {
      'in-stock': { text: 'In Stock', color: 'text-green-500 border-green-500' },
      'low-stock': { text: 'Low Stock', color: 'text-yellow-500 border-yellow-500' },
      'pre-order': { text: 'Pre-Order', color: 'text-blue-500 border-blue-500' },
      'out-of-stock': { text: 'Out of Stock', color: 'text-red-500 border-red-500' }
    };
    return badges[availability] || badges['in-stock'];
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-orange-600" />
        <h3 className="text-zinc-100 uppercase tracking-wider">
          Verified Suppliers
        </h3>
      </div>
      <div className="h-1 w-20 bg-orange-600 mb-8" />

      <div className="space-y-4">
        {affiliateLinks.map((link, index) => {
          const stockBadge = getStockBadge(link.availability);
          const benefits = getMerchantBenefits(link.merchant);

          return (
            <motion.div
              key={link.merchant}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Merchant Info */}
                <div>
                  <h4 className="text-zinc-100 uppercase tracking-wide mb-2">
                    {link.merchant.replace('-', ' ')}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-orange-600 text-2xl">{link.price}</span>
                    {link.memberDiscount && (
                      <span className="text-green-500 text-xs uppercase bg-green-500/10 px-2 py-1 rounded">
                        {link.memberDiscount} Member
                      </span>
                    )}
                  </div>
                  <div className={`inline-block border px-3 py-1 rounded text-xs uppercase ${stockBadge.color}`}>
                    {stockBadge.text}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <Check className="w-4 h-4 text-orange-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                  {link.shippingInfo && (
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                      <TruckIcon className="w-4 h-4 text-orange-600" />
                      <span>{link.shippingInfo}</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2">
                  <AffiliateLink
                    merchant={link.merchant}
                    url={link.url}
                    productId={productId}
                    productName={productName}
                    price={link.price}
                    variant="primary"
                  />
                  {link.primeEligible && (
                    <div className="flex items-center gap-2 text-blue-400 text-xs justify-center">
                      <Zap className="w-3 h-3" />
                      <span>Prime Eligible</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Affiliate Disclosure */}
      <div className="mt-6 p-4 bg-zinc-800/30 border-l-4 border-orange-600 rounded">
        <p className="text-zinc-500 text-xs leading-relaxed">
          <strong className="text-zinc-400 uppercase">DISCLOSURE:</strong> Enormous Tiger earns commission from qualifying purchases through these links. Pricing and availability verified within 24 hours. Your purchase supports our mission-critical testing operations at no additional cost to you.
        </p>
      </div>
    </div>
  );
}

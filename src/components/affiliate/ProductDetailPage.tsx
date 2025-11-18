import { motion } from "motion/react";
import { ArrowLeft, Share2, Bookmark, AlertCircle } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MissionScore } from "./MissionScore";
import { MerchantComparison } from "./MerchantComparison";
import { AffiliateLink } from "./AffiliateLink";
import type { Product } from "../../types/affiliate";
import { trackEvent } from "../../lib/analytics";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Get primary affiliate link
  const primaryLink = product.affiliateLinks[0];

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-orange-600 transition-colors mb-6"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Return to Intel</span>
          </motion.button>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-zinc-100 mb-3 uppercase tracking-wider">
                {product.name}
              </h1>
              <div className="h-1 w-20 bg-orange-600 mb-4" />
              <p className="text-zinc-400 max-w-3xl">{product.shortDescription}</p>
            </div>

            {/* Share & Save */}
            <div className="flex gap-2">
              <motion.button
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => trackEvent('share_product', { product_id: product.id })}
              >
                <Share2 className="w-5 h-5 text-zinc-400" />
              </motion.button>
              <motion.button
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bookmark className="w-5 h-5 text-zinc-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Quick Buy */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div>
              <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-zinc-900 rounded overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-orange-600' : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <ImageWithFallback src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Buy Section */}
            <div className="bg-zinc-900 border-2 border-orange-600 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                    Best Available Price
                  </p>
                  <p className="text-orange-600 text-3xl">{primaryLink.price}</p>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-green-500/10 border border-green-500 text-green-500 px-3 py-1 rounded text-xs uppercase mb-2">
                    {primaryLink.availability.replace('-', ' ')}
                  </div>
                  <p className="text-zinc-500 text-xs">{primaryLink.shippingInfo}</p>
                </div>
              </div>

              <AffiliateLink
                merchant={primaryLink.merchant}
                url={primaryLink.url}
                productId={product.id}
                productName={product.name}
                price={primaryLink.price}
                variant="primary"
                className="w-full mb-3"
              />

              <div className="flex items-start gap-2 text-zinc-500 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>
                  Clicking above takes you to {primaryLink.merchant.replace('-', ' ')}'s secure checkout. 
                  Price verified within 24 hours.
                </p>
              </div>
            </div>

            {/* Field Test Summary */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-zinc-100 uppercase tracking-wider mb-3">
                Field Assessment Summary
              </h2>
              <div className="h-1 w-20 bg-orange-600 mb-6" />
              <p className="text-zinc-300 leading-relaxed mb-6">
                {product.fieldTestSummary}
              </p>

              {/* Use Cases */}
              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-zinc-400 uppercase text-sm tracking-wide mb-3">
                  Recommended Use Cases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCase.map((use) => (
                    <span
                      key={use}
                      className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded text-sm"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Results - existing code from your ProductDrawer */}
            {/* Specs - existing code */}
            {/* Pros/Cons - existing code */}
          </div>

          {/* Right Column - Mission Score & Merchant Comparison */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <MissionScore
              score={product.missionScore}
              durability={product.durability}
              reliability={product.reliability}
              fieldTested={true}
            />

            <MerchantComparison
              productId={product.id}
              productName={product.name}
              affiliateLinks={product.affiliateLinks}
            />

            {/* Trust Badges */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h4 className="text-zinc-100 uppercase tracking-wide text-sm mb-4">
                Why Trust Our Intel?
              </h4>
              <div className="space-y-3 text-zinc-400 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>30+ years emergency response experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Real-world field testing in extreme conditions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>No manufacturer sponsorships</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Data-driven evaluation methodology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

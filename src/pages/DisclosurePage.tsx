import { motion } from "motion/react";
import { Shield, AlertTriangle } from "lucide-react";

export function DisclosurePage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      <div className="bg-zinc-900 border-b-4 border-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-zinc-100 mb-4 uppercase tracking-wider">
            Affiliate Disclosure & Editorial Policy
          </h1>
          <div className="h-1 w-20 bg-orange-600" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
              <h2 className="text-zinc-100 uppercase tracking-wider">Our Commitment</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Enormous Tiger operates with the same integrity standards we applied during 30+ years 
              of military and emergency response operations. Every recommendation is based on extensive 
              field testing, data analysis, and real-world performance evaluation.
            </p>
          </section>

          <section>
            <h3 className="text-zinc-100 uppercase tracking-wide mb-3">Affiliate Relationships</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We maintain affiliate partnerships with the following merchants:
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• Amazon Associates</li>
              <li>• Cabela's Outfitter Club</li>
              <li>• Bass Pro Shops</li>
              <li>• REI Co-op</li>
              <li>• Backcountry</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              When you click our links and make a purchase, we earn a commission. This comes at 
              <strong className="text-zinc-300"> no additional cost to you</strong> - you pay the 
              same price whether you use our links or visit the merchant directly.
            </p>
          </section>

          <section>
            <h3 className="text-zinc-100 uppercase tracking-wide mb-3">Editorial Independence</h3>
            <div className="space-y-3 text-zinc-400">
              <p>✓ We NEVER accept payment for positive reviews</p>
              <p>✓ We NEVER allow manufacturers to edit our evaluations</p>
              <p>✓ We test products in real-world conditions, not controlled labs</p>
              <p>✓ We report failures and weaknesses honestly</p>
              <p>✓ Commission rates DO NOT influence our ratings</p>
            </div>
          </section>

          <section className="bg-zinc-800/30 border-l-4 border-orange-600 p-6 rounded">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-zinc-100 uppercase tracking-wide mb-2">Important Note</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Enormous Tiger is a research and recommendation service. We DO NOT sell products 
                  directly, process payments, or handle shipping. All transactions occur on the 
                  merchant's website. Pricing and availability are verified within 24 hours but 
                  may change without notice.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-zinc-100 uppercase tracking-wide mb-3">How We Test</h3>
            <p className="text-zinc-400 leading-relaxed">
              Our evaluation methodology combines quantitative testing (durability, performance metrics, 
              longevity) with qualitative assessment (usability, design, real-world effectiveness). 
              Products undergo field trials ranging from 30 to 180 days depending on category.
            </p>
          </section>

          <section>
            <h3 className="text-zinc-100 uppercase tracking-wide mb-3">Questions?</h3>
            <p className="text-zinc-400 leading-relaxed">
              Contact us at{' '}
              <a href="mailto:disclosure@enormoustiger.com" className="text-orange-600 hover:underline">
                disclosure@enormoustiger.com
              </a>
            </p>
          </section>

          <footer className="text-zinc-600 text-xs pt-6 border-t border-zinc-800">
            Last updated: January 2025
          </footer>
        </div>
      </div>
    </div>
  );
}

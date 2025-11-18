import { ProductCard } from "./ProductCard";
import { ProductDrawer } from "./ProductDrawer";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useRef, useState, useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export function WeeklyFeatured() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Summit Pro Tent",
      category: "CAMPING",
      rating: 9.4,
      image: "https://images.unsplash.com/photo-1627820988643-8077d82eed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Field-tested in extreme conditions. Withstood 60mph winds and sustained heavy rain. Mission-ready shelter.",
      durability: "EXTREME",
      reliability: "PROVEN",
      price: "$449",
      fullDescription: "The Summit Pro Tent represents the pinnacle of tactical shelter engineering. Developed in collaboration with elite mountain rescue teams, this shelter has been subjected to the most punishing environmental conditions imaginable. Our 90-day field trial across Alaska, Patagonia, and the Scottish Highlands confirmed its exceptional performance in wind speeds exceeding 60mph and continuous rainfall lasting 48+ hours. The triple-layer waterproof system maintains complete interior dryness while the aerospace-grade aluminum frame demonstrates zero structural compromise.",
      specs: [
        { label: "Capacity", value: "3-4 Person" },
        { label: "Weight", value: "6.2 lbs (2.8 kg)" },
        { label: "Floor Area", value: "42 sq ft" },
        { label: "Peak Height", value: "48 inches" },
        { label: "Frame Material", value: "Aerospace Aluminum" },
        { label: "Waterproof Rating", value: "3000mm HH" }
      ],
      pros: [
        "Withstands extreme wind conditions up to 70mph",
        "Ultra-lightweight for extended backcountry operations",
        "Superior ventilation system prevents condensation",
        "Rapid 3-minute deployment time",
        "Lifetime warranty on structural components"
      ],
      cons: [
        "Premium price point may exceed casual camping budgets",
        "Requires practice for optimal setup efficiency",
        "Limited color options (tactical colors only)"
      ],
      testResults: [
        { metric: "Wind Resistance", score: "9.6/10", description: "Maintained structural integrity in 65mph sustained winds with minimal flex" },
        { metric: "Waterproofing", score: "9.8/10", description: "Zero interior moisture after 48 hours of continuous heavy rainfall" },
        { metric: "Durability", score: "9.2/10", description: "No material degradation after 90 nights in harsh alpine conditions" },
        { metric: "Setup Time", score: "8.9/10", description: "Average deployment: 3 minutes 15 seconds by single operator" }
      ],
      affiliateLink: "https://example.com/summit-pro-tent"
    },
    {
      id: 2,
      name: "TactiCast Pro Rod",
      category: "FISHING",
      rating: 9.1,
      image: "https://images.unsplash.com/photo-1601776945824-880c978dd931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwZ2VhciUyMGxha2V8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Engineered for precision. 15,000-cast endurance test with zero structural failure. Battle-tested reliability.",
      durability: "HIGH",
      reliability: "VERIFIED",
      price: "$289",
      fullDescription: "The TactiCast Pro Rod emerged from a 12-month development cycle focused on one objective: create the most reliable fishing rod for serious anglers. Using military-grade carbon fiber composites originally designed for helicopter rotor blades, this rod delivers exceptional sensitivity without compromising strength. Our torture test subjected three rods to 15,000 casts each, ranging from 2oz to 8oz lures, in saltwater and freshwater environments. The result: zero structural failures and maintained sensitivity throughout the entire test period.",
      specs: [
        { label: "Length", value: "7'6\" Medium-Heavy" },
        { label: "Weight", value: "5.8 oz" },
        { label: "Line Rating", value: "12-25 lb" },
        { label: "Lure Rating", value: "1/2 - 2 oz" },
        { label: "Material", value: "Military-Grade Carbon Fiber" },
        { label: "Guides", value: "Titanium Oxide" }
      ],
      pros: [
        "Exceptional sensitivity for detecting subtle strikes",
        "Lightweight design reduces fatigue during extended sessions",
        "Impressive backbone for fighting large fish",
        "Corrosion-resistant hardware rated for saltwater",
        "10-year structural warranty"
      ],
      cons: [
        "Higher price than recreational fishing rods",
        "Requires quality reel to match performance",
        "Sensitive tip needs careful handling during transport"
      ],
      testResults: [
        { metric: "Cast Accuracy", score: "9.3/10", description: "Consistently placed lures within 2-foot target radius at 50 yards" },
        { metric: "Sensitivity", score: "9.5/10", description: "Detected 0.5oz bottom contact in 15ft depth with 12lb line" },
        { metric: "Structural Integrity", score: "8.8/10", description: "Zero failures across 15,000 cast torture test" },
        { metric: "Corrosion Resistance", score: "9.4/10", description: "No oxidation after 60 days continuous saltwater exposure" }
      ],
      affiliateLink: "https://example.com/tacticast-pro"
    },
    {
      id: 3,
      name: "Endurance Trail Runner X",
      category: "RUNNING",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1711466067057-d1bd10183924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbCUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "500-mile torture test completed. Superior ankle support and shock absorption in hostile terrain.",
      durability: "VERIFIED",
      reliability: "PROVEN",
      price: "$179",
      fullDescription: "The Endurance Trail Runner X underwent one of our most rigorous footwear assessments to date. Six test runners logged 500 miles each across mountain trails, desert terrain, and rocky technical sections. The proprietary shock absorption system, derived from military boot technology, demonstrated consistent performance throughout the test. The aggressive tread pattern maintained traction even as rubber wear became visible around mile 400. Multiple runners reported zero hot spots or blisters, a testament to the precision last design.",
      specs: [
        { label: "Weight", value: "10.2 oz (Men's 9)" },
        { label: "Drop", value: "6mm" },
        { label: "Cushioning", value: "Medium" },
        { label: "Support", value: "Neutral" },
        { label: "Terrain", value: "Technical Trail" },
        { label: "Waterproof", value: "No (Breathable Mesh)" }
      ],
      pros: [
        "Exceptional traction on wet rocks and loose gravel",
        "Comfortable fit eliminates break-in period",
        "Responsive cushioning for technical descents",
        "Durable upper withstands brush and rock contact",
        "Wide toe box accommodates natural foot splay"
      ],
      cons: [
        "Not waterproof - requires gaiters in wet conditions",
        "Aggressive tread wears faster on pavement",
        "Limited color options"
      ],
      testResults: [
        { metric: "Traction", score: "9.4/10", description: "Superior grip on wet rocks and loose terrain with zero slips recorded" },
        { metric: "Comfort", score: "8.9/10", description: "No blisters or hot spots reported across 6 test runners over 500 miles" },
        { metric: "Durability", score: "8.5/10", description: "Upper integrity maintained, tread showed 30% wear at 500 miles" },
        { metric: "Shock Absorption", score: "8.7/10", description: "Maintained cushioning properties throughout 500-mile test period" }
      ],
      affiliateLink: "https://example.com/endurance-trail-runner"
    }
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  return (
    <>
      <section ref={ref} className="bg-zinc-950 py-16 md:py-24" id="weekly">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-8 h-8 text-orange-600" />
            <div>
              <h2 className="text-zinc-100 uppercase tracking-wider">
                Weekly Recon
              </h2>
              <p className="text-zinc-500 text-sm uppercase tracking-wide">
                Week of Nov 17, 2025 • Camping Essentials
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="h-1 bg-orange-600 mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <ProductCard 
                  product={product} 
                  onClick={() => handleProductClick(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductDrawer
        product={selectedProduct}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
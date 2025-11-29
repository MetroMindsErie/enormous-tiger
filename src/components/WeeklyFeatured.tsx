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
      id: 701,
      name: "Benchmade North Fork",
      category: "HUNTING KNIVES",
      rating: 8.5,
      image: "/assets/knives/northfork-v1.png",
      description: "Best all-around folder. Premium S30V steel with AXIS lock delivers exceptional lock strength and superior one-handed field usability.",
      durability: "EXCEPTIONAL",
      reliability: "PROVEN",
      price: "$185",
      fullDescription: "The Benchmade North Fork represents the pinnacle of tactical folder engineering. Utilizing premium S30V stainless steel with a hardness rating of 58-60 HRC, this knife delivers exceptional edge retention through extended field-dressing operations. The proprietary AXIS lock mechanism provides near-fixed-blade strength while maintaining ambidextrous one-handed operation—a critical safety feature in field conditions. G10 handles maintain superior grip even when wet or bloody, proving their superiority over traditional materials in real-world hunting scenarios.",
      specs: [
        { label: "Blade Steel", value: "S30V Premium Stainless" },
        { label: "Hardness Rating", value: "58-60 HRC" },
        { label: "Lock Type", value: "AXIS Lock (Proprietary)" },
        { label: "Handle Material", value: "G10 / Micarta" },
        { label: "Blade Length", value: "2.97 inches" },
        { label: "Weight", value: "2.72 oz" }
      ],
      pros: [
        "Premium S30V steel with excellent edge retention for field-dressing tasks",
        "Exceptional AXIS lock strength provides near-fixed-blade reliability",
        "Ambidextrous one-handed opening and closing for field safety",
        "G10/Micarta handles maintain grip in wet or bloody conditions",
        "Advanced steel options and superior handle materials"
      ],
      cons: [
        "High initial cost compared to entry-level folders",
        "Requires understanding of AXIS lock mechanism for optimal use",
        "Premium features may be unnecessary for casual users"
      ],
      testResults: [
        { metric: "Core Performance Efficacy", score: "9.0/10", description: "Premium stainless steel with excellent skinning geometry. Superior edge retention through field-dressing tasks." },
        { metric: "Durability & Build Quality", score: "8.5/10", description: "G10/Micarta handles with exceptional AXIS lock strength. Near-fixed-blade reliability." },
        { metric: "Usability & Ergonomics", score: "9.0/10", description: "Ambidextrous, fast one-handed opening/closing. Major safety advantage in field operations." },
        { metric: "Feature Set & Innovation", score: "9.0/10", description: "Advanced steel options and superior handle materials. Industry-leading lock technology." },
        { metric: "Value Proposition", score: "7.0/10", description: "High initial cost justified by excellent lifetime value and durability." }
      ],
      affiliateLink: "https://example.com/benchmade-north-fork"
    },
    {
      id: 704,
      name: "Havalon Piranta",
      category: "HUNTING KNIVES",
      rating: 8.0,
      image: "/assets/knives/havalon-v1.jpg",
      description: "Best for precision skinning. Surgical-grade replaceable blades provide unbeatable sharpness for detail work with no field sharpening required.",
      durability: "MODERATE",
      reliability: "PROVEN",
      price: "$45",
      fullDescription: "The Havalon Piranta represents innovative thinking in hunting knife design. Utilizing surgical-grade replaceable scalpel blades, this system provides literally perfect sharpness for precision detail work like caping and skinning. The disposable blade concept eliminates field sharpening entirely—simply swap the blade when needed. While the thin scalpel blade can snap under improper use, the ultra-lightweight design and surgical precision make this the top choice for hunters prioritizing clean, precise cuts over heavy-duty utility.",
      specs: [
        { label: "Blade Type", value: "Replaceable Surgical Scalpel" },
        { label: "Blade Material", value: "Stainless Surgical Steel" },
        { label: "Lock Type", value: "Liner Lock" },
        { label: "Handle Material", value: "Polymer Composite" },
        { label: "Blade Length", value: "2.75 inches" },
        { label: "Weight", value: "2.9 oz" }
      ],
      pros: [
        "Surgical-grade sharpness provides unbeatable precision for detail work",
        "Replaceable blade system eliminates need for field sharpening",
        "Ultra-lightweight design reduces carry fatigue",
        "Low initial cost with excellent value proposition",
        "Innovative disposable blade concept maximizes convenience"
      ],
      cons: [
        "Thin scalpel blade can snap under improper heavy-duty use",
        "Requires carrying replacement blades for extended operations",
        "Thin handles less comfortable during prolonged use compared to traditional folders"
      ],
      testResults: [
        { metric: "Core Performance Efficacy", score: "9.0/10", description: "Surgical sharpness with no need to sharpen. Perfect efficacy for precision cutting tasks." },
        { metric: "Durability & Build Quality", score: "6.0/10", description: "Lock is secure, but thin scalpel blade can snap. Trade-off for surgical precision." },
        { metric: "Usability & Ergonomics", score: "7.0/10", description: "Super light design, but thin handles cause fatigue during extended use." },
        { metric: "Feature Set & Innovation", score: "10.0/10", description: "Revolutionary disposable surgical blade system. Industry-leading innovation." },
        { metric: "Value Proposition", score: "8.0/10", description: "Low initial cost with recurring blade replacement. Excellent value for precision work." }
      ],
      affiliateLink: "https://example.com/havalon-piranta"
    },
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
    // remove focus from the triggering element before opening drawer
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
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
                Week of Jan 27, 2025 • Tactical Folders
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
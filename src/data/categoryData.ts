export const categoryData: Record<string, any> = {
  camping: {
    id: 1,
    name: "Camping",
    description: "Mission-critical camping gear subjected to extreme field testing. From alpine expeditions to desert operations, every piece of equipment has been evaluated under the harshest conditions to ensure operational readiness when it matters most.",
    productCount: 47,
    products: [
      {
        id: 101,
        name: "Summit Pro Tent",
        category: "CAMPING",
        rating: 9.4,
        image: "https://images.unsplash.com/photo-1627820988643-8077d82eed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Field-tested in extreme conditions. Withstood 60mph winds and sustained heavy rain. Mission-ready shelter.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$449",
        fullDescription: "The Summit Pro Tent represents the pinnacle of tactical shelter engineering. Developed in collaboration with elite mountain rescue teams, this shelter has been subjected to the most punishing environmental conditions imaginable.",
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
          "Rapid 3-minute deployment time"
        ],
        cons: [
          "Premium price point may exceed casual camping budgets",
          "Requires practice for optimal setup efficiency"
        ],
        testResults: [
          { metric: "Wind Resistance", score: "9.6/10", description: "Maintained structural integrity in 65mph sustained winds" },
          { metric: "Waterproofing", score: "9.8/10", description: "Zero interior moisture after 48 hours of continuous rainfall" }
        ],
        affiliateLink: "https://example.com/summit-pro-tent"
      },
      {
        id: 102,
        name: "Arctic Sleeping Bag",
        category: "CAMPING",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1536407248465-61b1e67e5194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcGluZyUyMGJhZyUyMGNhbXBpbmd8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Rated to -20°F. Premium down insulation maintains loft after 200+ compression cycles. Field-proven in Arctic conditions.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$389",
        fullDescription: "The Arctic Sleeping Bag underwent rigorous cold-weather testing across Alaska and Northern Canada. Maintains thermal efficiency even in sub-zero temperatures.",
        specs: [
          { label: "Temperature Rating", value: "-20°F (-29°C)" },
          { label: "Weight", value: "3.4 lbs" },
          { label: "Fill Power", value: "850-fill Down" },
          { label: "Length", value: "Regular: 6'0\"" }
        ],
        pros: [
          "Exceptional warmth-to-weight ratio",
          "Durable water-repellent coating",
          "Anti-snag zipper system"
        ],
        cons: [
          "Requires careful storage to maintain loft",
          "Not suitable for wet conditions without bivy"
        ],
        testResults: [
          { metric: "Thermal Efficiency", score: "9.4/10", description: "Maintained core body temperature in -25°F conditions" },
          { metric: "Durability", score: "9.0/10", description: "No degradation after 200 compression cycles" }
        ],
        affiliateLink: "https://example.com/arctic-sleeping-bag"
      },
      {
        id: 103,
        name: "TitanFire Camp Stove",
        category: "CAMPING",
        rating: 8.8,
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wJTIwc3RvdmV8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "12,000 BTU output. Ignition system tested 5,000+ times. Boils 1L water in 3.5 minutes at sea level.",
        durability: "HIGH",
        reliability: "VERIFIED",
        price: "$145",
        fullDescription: "Compact and powerful, the TitanFire delivers restaurant-quality heat output in a portable package.",
        specs: [
          { label: "BTU Output", value: "12,000" },
          { label: "Weight", value: "10.5 oz" },
          { label: "Boil Time", value: "3.5 min (1L)" },
          { label: "Fuel Type", value: "Isobutane-Propane" }
        ],
        pros: [
          "Rapid boil times save fuel",
          "Stable pot support system",
          "Wind-resistant burner design"
        ],
        cons: [
          "Fuel canisters not included",
          "Performance decreases at high altitude"
        ],
        testResults: [
          { metric: "Heat Output", score: "9.1/10", description: "Consistent performance across temperature ranges" },
          { metric: "Ignition Reliability", score: "8.7/10", description: "Zero failures in 5,000+ ignition tests" }
        ],
        affiliateLink: "https://example.com/titanfire-stove"
      },
      {
        id: 104,
        name: "Basecamp Cooler 65",
        category: "CAMPING",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1623568308692-8c051d3246a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29sZXIlMjBjYW1waW5nfGVufDF8fHx8MTc2MzMzODM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "7-day ice retention verified. Bear-resistant construction. Maintained sub-40°F in 95°F ambient temperature.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$349",
        fullDescription: "Built like a vault, the Basecamp Cooler 65 keeps your supplies cold for extended operations.",
        specs: [
          { label: "Capacity", value: "65 Quarts" },
          { label: "Ice Retention", value: "7+ Days" },
          { label: "Weight", value: "38 lbs (empty)" },
          { label: "Certification", value: "IGBC Bear-Resistant" }
        ],
        pros: [
          "Exceptional ice retention",
          "Nearly indestructible construction",
          "Certified bear-resistant"
        ],
        cons: [
          "Heavy when fully loaded",
          "Premium price point"
        ],
        testResults: [
          { metric: "Ice Retention", score: "9.5/10", description: "Maintained ice for 8.3 days average" },
          { metric: "Durability", score: "9.2/10", description: "Survived bear attack simulation" }
        ],
        affiliateLink: "https://example.com/basecamp-cooler"
      },
      {
        id: 105,
        name: "TrailBlazer Backpack 70L",
        category: "CAMPING",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1622260614927-7ef6d5d9f87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBiYWNrcGFja3xlbnwxfHx8fDE3NjMzMzgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Load-tested to 75lbs. Ventilated back panel reduces sweat by 40%. 500-mile field trial completed.",
        durability: "HIGH",
        reliability: "VERIFIED",
        price: "$279",
        fullDescription: "Engineered for multi-day expeditions, this pack carries heavy loads with exceptional comfort.",
        specs: [
          { label: "Capacity", value: "70 Liters" },
          { label: "Weight", value: "4.8 lbs" },
          { label: "Max Load", value: "75 lbs" },
          { label: "Torso Range", value: "16-22 inches" }
        ],
        pros: [
          "Excellent load distribution",
          "Multiple access points",
          "Integrated rain cover"
        ],
        cons: [
          "Adjustment system requires learning",
          "Limited color options"
        ],
        testResults: [
          { metric: "Comfort", score: "8.8/10", description: "Minimal pressure points with 60lb load" },
          { metric: "Durability", score: "9.1/10", description: "No failures after 500-mile test" }
        ],
        affiliateLink: "https://example.com/trailblazer-backpack"
      },
      {
        id: 106,
        name: "Nightfall Headlamp Pro",
        category: "CAMPING",
        rating: 8.7,
        image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkbGFtcHxlbnwxfHx8fDE3NjMzMzgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "1200 lumen max output. 100-hour runtime on low. Waterproof to 3 meters. Red light mode preserves night vision.",
        durability: "HIGH",
        reliability: "VERIFIED",
        price: "$89",
        fullDescription: "Mission-critical illumination when you need it most. Multiple beam modes and exceptional battery life.",
        specs: [
          { label: "Max Output", value: "1200 Lumens" },
          { label: "Runtime", value: "100hrs (low)" },
          { label: "Waterproof", value: "IPX8 (3m)" },
          { label: "Weight", value: "3.2 oz" }
        ],
        pros: [
          "Powerful output options",
          "Long battery life",
          "Comfortable headband"
        ],
        cons: [
          "Higher modes drain battery quickly",
          "No battery indicator"
        ],
        testResults: [
          { metric: "Brightness", score: "9.0/10", description: "Measured 1180 lumens peak output" },
          { metric: "Runtime", score: "8.5/10", description: "Exceeded 100 hours on low setting" }
        ],
        affiliateLink: "https://example.com/nightfall-headlamp"
      }
    ]
  },
  fishing: {
    id: 2,
    name: "Fishing",
    description: "Elite fishing equipment tested in saltwater and freshwater environments. Each rod, reel, and tackle item has undergone extensive field trials to ensure peak performance when trophy fish are on the line.",
    productCount: 35,
    products: [
      {
        id: 201,
        name: "TactiCast Pro Rod",
        category: "FISHING",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1601776945824-880c978dd931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwZ2VhciUyMGxha2V8ZW58MXx8fHwxNzYzMzM4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Precision engineering meets battlefield durability. Carbon fiber construction tested across 15,000+ casts.",
        durability: "HIGH",
        reliability: "VERIFIED",
        price: "$289",
        fullDescription: "Military-grade carbon fiber composites deliver exceptional sensitivity without compromising strength.",
        specs: [
          { label: "Length", value: "7'6\" Medium-Heavy" },
          { label: "Weight", value: "5.8 oz" },
          { label: "Line Rating", value: "12-25 lb" },
          { label: "Lure Rating", value: "1/2 - 2 oz" }
        ],
        pros: [
          "Exceptional sensitivity",
          "Lightweight design",
          "Impressive backbone"
        ],
        cons: [
          "Higher price point",
          "Requires quality reel"
        ],
        testResults: [
          { metric: "Cast Accuracy", score: "9.3/10", description: "2-foot radius at 50 yards" },
          { metric: "Sensitivity", score: "9.5/10", description: "Detected 0.5oz contact in 15ft depth" }
        ],
        affiliateLink: "https://example.com/tacticast-pro"
      },
      {
        id: 202,
        name: "Ironclad Spinning Reel 4000",
        category: "FISHING",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcmVlbHxlbnwxfHx8fDE3NjMzMzgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Sealed drag system. 40lb max drag. Saltwater tested for 6 months with zero corrosion.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$349",
        fullDescription: "Engineered for serious anglers targeting trophy fish in harsh saltwater environments.",
        specs: [
          { label: "Gear Ratio", value: "6.2:1" },
          { label: "Max Drag", value: "40 lbs" },
          { label: "Line Capacity", value: "280yd / 20lb" },
          { label: "Weight", value: "11.2 oz" }
        ],
        pros: [
          "Powerful drag system",
          "Smooth retrieve",
          "Corrosion resistant"
        ],
        cons: [
          "Heavy for freshwater",
          "Premium pricing"
        ],
        testResults: [
          { metric: "Drag Performance", score: "9.2/10", description: "Consistent across entire drag range" },
          { metric: "Corrosion Resistance", score: "9.4/10", description: "Zero oxidation after 6 months saltwater" }
        ],
        affiliateLink: "https://example.com/ironclad-reel"
      }
    ]
  },
  workout: {
    id: 3,
    name: "Workout",
    description: "Combat-tested fitness equipment engineered for peak physical performance. From power racks to resistance bands, every item has been evaluated by military fitness instructors and professional athletes.",
    productCount: 52,
    products: [
      {
        id: 301,
        name: "PowerStation Adjustable Dumbbells",
        category: "WORKOUT",
        rating: 9.3,
        image: "https://images.unsplash.com/photo-1662386392766-9edacc1318fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXF1aXBtZW50JTIwd2VpZ2h0c3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "5-90lbs per hand. Quick-adjust mechanism tested for 50,000 cycles. Space-efficient home gym solution.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$599",
        fullDescription: "Replace an entire dumbbell rack with one compact system. Precision weight selection ensures balanced training.",
        specs: [
          { label: "Weight Range", value: "5-90 lbs per hand" },
          { label: "Increments", value: "5 lb intervals" },
          { label: "Footprint", value: "24\" x 18\"" },
          { label: "Warranty", value: "10 years" }
        ],
        pros: [
          "Massive space savings",
          "Quick weight changes",
          "Extremely durable"
        ],
        cons: [
          "High initial investment",
          "Heavier than traditional dumbbells"
        ],
        testResults: [
          { metric: "Mechanism Durability", score: "9.5/10", description: "Zero failures in 50,000 cycles" },
          { metric: "Balance", score: "9.1/10", description: "Weight distribution within 2% tolerance" }
        ],
        affiliateLink: "https://example.com/powerstation-dumbbells"
      }
    ]
  },
  trucks: {
    id: 4,
    name: "Trucks",
    description: "Heavy-duty truck accessories and modifications tested in extreme off-road conditions. Each product has been evaluated for durability, functionality, and real-world performance.",
    productCount: 29,
    products: [
      {
        id: 401,
        name: "AllTerrain Winch 12000",
        category: "TRUCKS",
        rating: 9.2,
        image: "https://images.unsplash.com/photo-1730816602059-85368f614683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMG9mZnJvYWR8ZW58MXx8fHwxNzYzMzM4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "12,000lb capacity. IP68 waterproof motor. Synthetic rope tested to 18,000lbs breaking strength.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$849",
        fullDescription: "When you're stuck in the backcountry, this winch gets you out. Tested in mud, sand, and snow.",
        specs: [
          { label: "Capacity", value: "12,000 lbs" },
          { label: "Motor", value: "6.6 HP Series Wound" },
          { label: "Rope Length", value: "85 feet" },
          { label: "Waterproof", value: "IP68 Rating" }
        ],
        pros: [
          "Powerful motor",
          "Waterproof design",
          "Synthetic rope safety"
        ],
        cons: [
          "Professional installation recommended",
          "Heavy unit"
        ],
        testResults: [
          { metric: "Pull Power", score: "9.4/10", description: "Exceeded rated capacity by 8%" },
          { metric: "Waterproofing", score: "9.0/10", description: "Functioned after 1-hour submersion" }
        ],
        affiliateLink: "https://example.com/allterrain-winch"
      }
    ]
  },
  outdoor: {
    id: 5,
    name: "Outdoor",
    description: "Comprehensive outdoor equipment for every adventure. From navigation tools to survival gear, each item has been field-tested in challenging environments.",
    productCount: 63,
    products: [
      {
        id: 501,
        name: "Tactical Field Watch",
        category: "OUTDOOR",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1704278483849-cc87b257d568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMG1pbGl0YXJ5JTIwZ2VhcnxlbnwxfHx8fDE3NjMzMzgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Solar powered. Altimeter, barometer, compass. Water resistant to 200m. Battery life: 6 months.",
        durability: "EXTREME",
        reliability: "PROVEN",
        price: "$449",
        fullDescription: "Military-grade navigation and survival features in a rugged package that never needs charging.",
        specs: [
          { label: "Power", value: "Solar + Battery" },
          { label: "Water Resistance", value: "200 meters" },
          { label: "Battery Life", value: "6 months" },
          { label: "Features", value: "ABC + GPS" }
        ],
        pros: [
          "Never needs charging",
          "Comprehensive sensors",
          "Extremely durable"
        ],
        cons: [
          "Complex interface",
          "Premium price"
        ],
        testResults: [
          { metric: "Accuracy", score: "9.1/10", description: "GPS within 3m average" },
          { metric: "Durability", score: "8.9/10", description: "Survived 10m drop test" }
        ],
        affiliateLink: "https://example.com/tactical-watch"
      }
    ]
  },
  running: {
    id: 6,
    name: "Running",
    description: "Performance running gear tested by ultra-marathoners and trail runners. Each product has logged hundreds of miles across diverse terrain to validate its capabilities.",
    productCount: 41,
    products: [
      {
        id: 601,
        name: "Endurance Trail Runner X",
        category: "RUNNING",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1711466067057-d1bd10183924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbCUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjMzMzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "500-mile torture test completed. Superior ankle support and shock absorption in hostile terrain.",
        durability: "VERIFIED",
        reliability: "PROVEN",
        price: "$179",
        fullDescription: "Precision-engineered for technical trails. Six test runners logged 500 miles each across mountain trails.",
        specs: [
          { label: "Weight", value: "10.2 oz (Men's 9)" },
          { label: "Drop", value: "6mm" },
          { label: "Cushioning", value: "Medium" },
          { label: "Support", value: "Neutral" }
        ],
        pros: [
          "Exceptional traction",
          "Comfortable fit",
          "Responsive cushioning"
        ],
        cons: [
          "Not waterproof",
          "Aggressive tread wears on pavement"
        ],
        testResults: [
          { metric: "Traction", score: "9.4/10", description: "Zero slips on wet rocks" },
          { metric: "Comfort", score: "8.9/10", description: "No blisters across 6 testers" }
        ],
        affiliateLink: "https://example.com/endurance-trail-runner"
      }
    ]
  },
  hunting_knives: {
    id: 7,
    name: "Hunting Knives",
    description: "Premium folding knives engineered for field dressing, skinning, and tactical outdoor operations. Every blade tested through rigorous field trials measuring lock strength, edge retention, and operational reliability under extreme conditions.",
    productCount: 4,
    products: [
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
        id: 702,
        name: "Cold Steel AD-10",
        category: "HUNTING KNIVES",
        rating: 7.8,
        image: "/assets/knives/ad-10.png",
        description: "Best for extreme toughness. Industry-leading Tri-Ad Lock provides maximum lock strength for tasks usually reserved for fixed blades.",
        durability: "EXTREME",
        reliability: "VERIFIED",
        price: "$220",
        fullDescription: "The Cold Steel AD-10 is engineered for operators who demand absolute maximum lock strength. The proprietary Tri-Ad Lock is widely regarded as the strongest folding knife lock mechanism available, providing extreme resistance to catastrophic failure even under spine-pressure stress tests. The thick, heavy-duty blade excels at robust cutting tasks that would compromise lesser folders. This is the folder of choice when the mission profile requires handling tasks typically reserved for fixed-blade knives.",
        specs: [
          { label: "Blade Steel", value: "D2 Tool Steel" },
          { label: "Hardness Rating", value: "57-59 HRC" },
          { label: "Lock Type", value: "Tri-Ad Lock (Proprietary)" },
          { label: "Handle Material", value: "G10 Composite" },
          { label: "Blade Length", value: "3.5 inches" },
          { label: "Weight", value: "5.8 oz" }
        ],
        pros: [
          "Industry-leading Tri-Ad Lock provides strongest folding knife lock available",
          "Extreme resistance to catastrophic failure under pressure stress tests",
          "Thick heavy-duty blade handles tasks reserved for fixed blades",
          "Maximum toughness at mid-high price point",
          "G10 handles maintain grip in all weather conditions"
        ],
        cons: [
          "Lock mechanism is stiff and often requires two hands to disengage",
          "Heavier weight profile reduces portability for extended carry",
          "Focus on lock strength over modern convenience features"
        ],
        testResults: [
          { metric: "Core Performance Efficacy", score: "8.0/10", description: "Thick, heavy-duty D2 blade excels at robust cutting. Superior for heavy-duty field tasks." },
          { metric: "Durability & Build Quality", score: "9.5/10", description: "Industry-leading Tri-Ad Lock strength. Extreme resistance to catastrophic failure." },
          { metric: "Usability & Ergonomics", score: "6.0/10", description: "Lock is stiff, often requires two hands to disengage. Reduces field convenience." },
          { metric: "Feature Set & Innovation", score: "7.0/10", description: "Focus on lock strength over modern features. Proven design prioritizes reliability." },
          { metric: "Value Proposition", score: "8.0/10", description: "Maximum toughness at mid-high price point. Excellent for demanding applications." }
        ],
        affiliateLink: "https://example.com/cold-steel-ad10"
      },
      {
        id: 703,
        name: "Buck 110 Folding Hunter",
        category: "HUNTING KNIVES",
        rating: 7.2,
        image: "/assets/knives/buck110.jpg",
        description: "Legendary classic with robust lockback design. Exceptional entry-level value with reliable 420HC steel and proven field performance.",
        durability: "PROVEN",
        reliability: "VERIFIED",
        price: "$65",
        fullDescription: "The Buck 110 Folding Hunter is the legendary standard by which all other folding hunting knives are measured. Featuring Buck's proven lockback mechanism and reliable 420HC steel, this knife delivers consistent performance across decades of field use. While it lacks modern one-handed operation features, the classic design provides exceptional entry-level value with the durability and reliability that made Buck a household name among hunters and outdoorsmen.",
        specs: [
          { label: "Blade Steel", value: "420HC Stainless" },
          { label: "Hardness Rating", value: "58 HRC" },
          { label: "Lock Type", value: "Lockback (Classic)" },
          { label: "Handle Material", value: "Ebony Wood / Brass" },
          { label: "Blade Length", value: "3.75 inches" },
          { label: "Weight", value: "7.2 oz" }
        ],
        pros: [
          "Legendary lockback design with decades of proven field reliability",
          "Exceptional entry-level value with robust construction",
          "Reliable 420HC steel provides good edge retention for the price",
          "Classic comfortable shape reduces hand fatigue",
          "Heavy solid construction inspires confidence"
        ],
        cons: [
          "Requires two hands to close, reducing modern field convenience",
          "Timeless design lacks modern one-handed operation features",
          "Traditional wood handles less grippy than G10 in wet conditions"
        ],
        testResults: [
          { metric: "Core Performance Efficacy", score: "7.0/10", description: "Reliable 420HC steel with good geometry. Consistent cutting performance for the price point." },
          { metric: "Durability & Build Quality", score: "8.0/10", description: "Legendary lockback mechanism. Heavy and solid construction proven over decades." },
          { metric: "Usability & Ergonomics", score: "7.0/10", description: "Requires two hands to close. Classic shape is comfortable but lacks modern convenience." },
          { metric: "Feature Set & Innovation", score: "5.0/10", description: "Timeless design with few modern features. Proven reliability over innovation." },
          { metric: "Value Proposition", score: "9.0/10", description: "Exceptional entry-level value and reliability. Best bang-for-buck in category." }
        ],
        affiliateLink: "https://example.com/buck-110"
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
      }
    ]
  }
};

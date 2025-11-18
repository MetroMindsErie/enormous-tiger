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
  }
};

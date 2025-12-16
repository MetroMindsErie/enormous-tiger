export const categoryData: Record<string, any> = {
  hunting_knives: {
    id: 7,
    name: "Hunting Knives",
    description: "Premium folding knives engineered for field dressing, skinning, and tactical outdoor operations. Every blade assessed through rigorous field trials measuring lock strength, edge retention, and operational reliability under extreme conditions.",
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
          { metric: "Performance", score: "9.0/10", description: "S30V steel delivers exceptional edge retention through extended field-dressing operations. Superior cutting geometry for skinning tasks." },
          { metric: "Durability & Build Quality", score: "8.5/10", description: "AXIS lock provides near-fixed-blade strength. G10/Micarta handles maintain grip in wet/bloody conditions. Premium construction throughout." },
          { metric: "Ease of Use & Ergonomics", score: "9.0/10", description: "Ambidextrous one-handed operation critical for field safety. Fast deployment and closure. Comfortable grip during extended use." },
          { metric: "Features & Innovation", score: "9.0/10", description: "Industry-leading AXIS lock technology. Premium steel options and handle materials exceed competitive folders at this price point." },
          { metric: "Value", score: "7.0/10", description: "Premium pricing justified for serious hunters requiring fixed-blade reliability in folder format. Excellent lifetime durability." }
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
          { metric: "Performance", score: "8.0/10", description: "Thick D2 blade excels at robust cutting tasks. Superior for heavy-duty field work typically requiring fixed blades." },
          { metric: "Durability & Build Quality", score: "9.5/10", description: "Industry-leading Tri-Ad Lock provides strongest folding mechanism available. Extreme resistance to catastrophic failure under spine pressure." },
          { metric: "Ease of Use & Ergonomics", score: "6.0/10", description: "Stiff lock often requires two hands to disengage. Heavier weight reduces convenience during extended carry." },
          { metric: "Features & Innovation", score: "7.0/10", description: "Focus on maximum lock strength over modern convenience features. Proven design prioritizes reliability above all else." },
          { metric: "Value", score: "8.0/10", description: "Mid-high pricing delivers maximum toughness for demanding applications requiring absolute lock reliability." }
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
          { metric: "Performance", score: "7.0/10", description: "Reliable 420HC steel with good cutting geometry. Consistent performance for general hunting tasks at entry-level price point." },
          { metric: "Durability & Build Quality", score: "8.0/10", description: "Legendary lockback mechanism proven over decades. Heavy and solid construction inspires confidence despite dated design." },
          { metric: "Ease of Use & Ergonomics", score: "7.0/10", description: "Requires two hands to close safely. Classic shape is comfortable but lacks modern convenience." },
          { metric: "Features & Innovation", score: "5.0/10", description: "Timeless design with few modern features. Proven reliability prioritized over innovation or convenience enhancements." },
          { metric: "Value", score: "9.0/10", description: "Exceptional entry-level value. Best bang-for-buck introduces new hunters to quality folders at minimal investment." }
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
          { metric: "Performance", score: "9.0/10", description: "Surgical-grade sharpness unmatched for precision skinning and caping. Perfect efficacy for detail work with no field sharpening needed." },
          { metric: "Durability & Build Quality", score: "6.0/10", description: "Liner lock secure but thin scalpel blade can snap under improper heavy-duty use. Intentional trade-off for surgical precision." },
          { metric: "Ease of Use & Ergonomics", score: "7.0/10", description: "Ultra-light design but thin handles cause fatigue during prolonged skinning. Blade replacement system simple but requires carrying spares." },
          { metric: "Features & Innovation", score: "10.0/10", description: "Revolutionary disposable surgical blade system eliminates sharpening entirely. Industry-leading innovation for precision hunters." },
          { metric: "Value", score: "8.0/10", description: "Low initial cost with recurring blade expenses. Excellent value for hunters prioritizing surgical precision over heavy-duty utility." }
        ],
        affiliateLink: "https://example.com/havalon-piranta"
      }
    ]
  }
};

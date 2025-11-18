export const products = {
  1: {
    id: 1,
    name: "Cold-Weather Emergency Survival Blanket",
    category: "SURVIVAL",
    rating: 9.2,
    missionScore: 92,
    image: "https://example.com/blanket-main.jpg",
    images: [
      "https://example.com/blanket-main.jpg",
      "https://example.com/blanket-folded.jpg",
      "https://example.com/blanket-size.jpg",
      "https://example.com/blanket-action.jpg"
    ],
    shortDescription: "Military-grade thermal retention. Field-tested in Arctic conditions down to -40°F.",
    fullDescription: "The Cold-Weather Emergency Survival Blanket underwent 60-day Arctic field trials...",
    durability: "EXTREME",
    reliability: "PROVEN",
    fieldTestSummary: "Deployed in 15 genuine emergency scenarios across Alaska, Montana, and Northern Canada. Maintained 90%+ heat retention in sustained -35°F conditions. Zero material degradation after 45 days continuous outdoor exposure.",
    useCase: [
      "Winter Emergency Preparedness",
      "Vehicle Emergency Kit",
      "Backcountry Survival",
      "Disaster Relief",
      "Search & Rescue Operations"
    ],
    affiliateLinks: [
      {
        merchant: "cabelas",
        url: "https://cabelas.com/product?tag=enormoustiger-20",
        price: "$24.99",
        availability: "in-stock",
        shippingInfo: "Free shipping $50+",
        memberDiscount: "5% off"
      },
      {
        merchant: "amazon",
        url: "https://amazon.com/dp/EXAMPLE?tag=enormoustiger-20",
        price: "$26.95",
        availability: "in-stock",
        shippingInfo: "Prime 2-day",
        primeEligible: true
      },
      {
        merchant: "bass-pro",
        url: "https://basspro.com/product?affid=enormoustiger",
        price: "$24.99",
        availability: "low-stock",
        shippingInfo: "Free ship-to-store"
      }
    ],
    specs: [
      { label: "Size (Unfolded)", value: "84\" × 52\"" },
      { label: "Weight", value: "2.1 oz" },
      { label: "Material", value: "Aluminized Polyethylene" },
      { label: "Temperature Rating", value: "-40°F to 140°F" },
      { label: "Heat Retention", value: "90% body heat" },
      { label: "Windproof", value: "Yes" },
      { label: "Waterproof", value: "Yes" },
      { label: "Reusable", value: "Yes (with care)" }
    ],
    pros: [
      "Exceptional heat retention verified in Arctic conditions",
      "Ultra-lightweight and compact for emergency kits",
      "Dual-side: reflective for warmth, non-reflective for signaling",
      "Waterproof and windproof construction",
      "Large enough for full-body coverage",
      "Reusable with proper handling"
    ],
    cons: [
      "Material can tear if snagged on sharp objects",
      "Produces noise when moving (crinkle effect)",
      "Requires practice to deploy efficiently in high-stress situations"
    ],
    testResults: [
      {
        metric: "Heat Retention",
        score: "9.4/10",
        description: "Maintained core body temperature in -35°F ambient for 4+ hours"
      },
      {
        metric: "Durability",
        score: "8.7/10",
        description: "Withstood 45 days outdoor exposure with minimal degradation"
      },
      {
        metric: "Deployment Speed",
        score: "9.0/10",
        description: "Average unfold time: 8 seconds by trained operator"
      },
      {
        metric: "Packability",
        score: "9.8/10",
        description: "Compresses to 4\"×3\"×1\" - fits in any emergency kit"
      }
    ]
  }
};

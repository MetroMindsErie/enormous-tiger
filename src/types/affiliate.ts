export interface AffiliateLink {
  merchant: 'cabelas' | 'amazon' | 'bass-pro' | 'rei' | 'backcountry';
  url: string;
  price: string;
  availability: 'in-stock' | 'low-stock' | 'pre-order' | 'out-of-stock';
  shippingInfo: string;
  primeEligible?: boolean;
  memberDiscount?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  missionScore: number; // 0-100 tactical effectiveness rating
  image: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  durability: string;
  reliability: string;
  // Affiliate links to different merchants
  affiliateLinks: AffiliateLink[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  testResults: { metric: string; score: string; description: string }[];
  fieldTestSummary: string;
  useCase: string[];
  alternatives?: {
    productId: number;
    name: string;
    comparison: string;
  }[];
}

// Simple Google Analytics v4 wrapper
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  interface ImportMetaEnv {
    readonly VITE_GA_ID?: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export function initAnalytics(measurementId: string) {
  if (!measurementId) return;
  
  // Check if already initialized by checking for script tag
  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (existingScript) return;
  
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  
  // Inject script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  
  gtag('js', new Date());
  gtag('config', measurementId); // REMOVED send_page_view: false
  
}

export function trackPageView(path: string, title?: string) {
  const id = import.meta.env.VITE_GA_ID;
  if (!window.gtag || !id) return;
  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path
  });
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (!window.gtag) return;
  window.gtag('event', name, params);
}

// Enhanced affiliate tracking
export function trackAffiliateClick(params: {
  product_id: number;
  product_name: string;
  merchant: string;
  price: string;
  category: string;
  placement: 'product_page' | 'comparison_table' | 'quick_buy' | 'merchant_grid';
}) {
  if (!window.gtag) return;
  
  // Track as conversion event
  window.gtag('event', 'affiliate_click', {
    ...params,
    currency: 'USD',
    value: parseFloat(params.price.replace(/[^0-9.]/g, '')),
  });

  // Also track as custom dimension
  window.gtag('event', 'click', {
    event_category: 'Outbound Link',
    event_label: `${params.merchant} - ${params.product_name}`,
    value: parseFloat(params.price.replace(/[^0-9.]/g, '')),
  });
}

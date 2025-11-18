// Simple Google Analytics v4 wrapper
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  interface ImportMetaEnv {
    readonly VITE_GA_ID?: string;
    readonly DEV?: boolean;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export function initAnalytics(measurementId: string) {
  if (!measurementId) {
    console.warn('⚠️ No measurement ID provided');
    return;
  }

  const isDebug = import.meta.env.DEV || typeof window !== "undefined" && new URLSearchParams(window.location.search).has("debug_mode");

  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (existingScript) {
    console.log('ℹ️ GA script already loaded');
    return;
  }

  console.log('🚀 Loading GA script for:', measurementId);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    console.log('📤 gtag called:', args);
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => {
    console.log('✅ GA script loaded successfully');
    // After GTAG script loads, send a test/debug event in dev/debug mode to appear in DebugView
    try {
      // config again to ensure GA library has measurement id (includes debug_mode flag when appropriate)
      window.gtag('config', measurementId, isDebug ? { debug_mode: true } : {});
      if (isDebug) {
        window.gtag('event', 'gtag_debug_init', { debug_mode: true, method: 'script_onload' });
        console.log('🐞 Sent debug init event (debug_mode=true)');
      }
    } catch (e) {
      console.warn('⚠️ gtag call failed after load', e);
    }
  };
  script.onerror = () => console.error('❌ Failed to load GA script');
  document.head.appendChild(script);

  gtag('js', new Date());
  // initial config; include debug_mode as well so hits pushed before script load are marked
  gtag('config', measurementId, isDebug ? { debug_mode: true } : {});

  console.log('✅ GA initialized with ID:', measurementId);
}

function isGtagReady() {
  return typeof window.gtag !== 'undefined';
}

export function trackPageView(path: string, title?: string) {
  const id = import.meta.env.VITE_GA_ID;
  if (!isGtagReady() || !id) {
    console.warn('⚠️ Cannot track page view - gtag not ready or id missing');
    return;
  }

  const isDebug = import.meta.env.DEV || new URLSearchParams(window.location.search).has("debug_mode");
  const payload: Record<string, any> = {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path
  };
  if (isDebug) payload.debug_mode = true;

  console.log('📄 Page view:', path, { debug: isDebug });
  window.gtag('event', 'page_view', payload);
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (!isGtagReady()) {
    console.warn('⚠️ Cannot track event - gtag not ready');
    return;
  }
  const isDebug = import.meta.env.DEV || new URLSearchParams(window.location.search).has("debug_mode");
  const payload = isDebug ? { ...params, debug_mode: true } : params;
  console.log('🎯 Event:', name, params, { debug: isDebug });
  window.gtag('event', name, payload);
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

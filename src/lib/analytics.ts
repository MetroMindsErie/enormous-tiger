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
  gtag('config', measurementId, { send_page_view: false });
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

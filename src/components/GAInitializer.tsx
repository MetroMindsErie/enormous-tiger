import { useEffect } from "react";
import { initAnalytics, trackPageView } from "../lib/analytics";

export function GAInitializer() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_ID;
    
    if (measurementId) {
      initAnalytics(measurementId);
      
      // Send initial page view after a brief delay to ensure GA is loaded
      setTimeout(() => {
        trackPageView(window.location.pathname);
      }, 1000);
    } else {
      console.warn('VITE_GA_ID not found in environment variables');
    }
  }, []);

  return null;
}

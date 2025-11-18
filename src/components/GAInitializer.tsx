import { useEffect } from "react";
import { initAnalytics, trackPageView } from "../lib/analytics";

export function GAInitializer() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_ID;
    
    console.log('🔍 GA Initializer - VITE_GA_ID:', measurementId);
    
    if (measurementId) {
      console.log('✅ Initializing Google Analytics...');
      initAnalytics(measurementId);
      
      // Send initial page view after a brief delay
      setTimeout(() => {
        console.log('📊 Sending initial page view...');
        trackPageView(window.location.pathname);
      }, 1000);
    } else {
      console.error('❌ VITE_GA_ID not found! Check your .env file.');
    }
  }, []);

  return null;
}

import { useEffect } from "react";
import { initAnalytics } from "../lib/analytics";

export function GAInitializer() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_ID;
    if (measurementId) {
      initAnalytics(measurementId);
      console.log('Google Analytics initialized:', measurementId);
    } else {
      console.warn('VITE_GA_ID not found in environment variables');
    }
  }, []);

  return null;
}

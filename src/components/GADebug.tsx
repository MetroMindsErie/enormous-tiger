import { useEffect, useState } from "react";

export function GADebug() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const checkGA = () => {
      const results = [];
      
      results.push(`window.gtag exists: ${typeof window.gtag !== 'undefined'}`);
      results.push(`window.dataLayer exists: ${typeof window.dataLayer !== 'undefined'}`);
      results.push(`dataLayer length: ${window.dataLayer?.length || 0}`);
      results.push(`VITE_GA_ID: ${import.meta.env.VITE_GA_ID || 'NOT SET'}`);
      
      const gaScript = document.querySelector('script[src*="googletagmanager"]');
      results.push(`GA script loaded: ${!!gaScript}`);
      
      setLogs(results);
    };

    checkGA();
    setTimeout(checkGA, 2000);
  }, []);

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-zinc-900 border border-orange-600 p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="text-orange-600 font-bold mb-2">GA Debug</h3>
      <div className="space-y-1 text-zinc-300 font-mono">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
      <button
        onClick={() => {
          console.log('Testing GA event...');
          window.gtag?.('event', 'test_event', { test: 'manual_click' });
          alert('Test event sent! Check GA4 Real-time reports.');
        }}
        className="mt-2 bg-orange-600 text-zinc-950 px-3 py-1 rounded text-xs w-full"
      >
        Send Test Event
      </button>
    </div>
  );
}

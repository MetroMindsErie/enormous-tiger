import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { Navigation } from "./components/Navigation";
import { GAInitializer } from "./components/GAInitializer";
import { SEOHead } from "./components/SEOHead";
import { GADebug } from "./components/GADebug";
import { useEffect } from "react";
import { trackPageView } from "./lib/analytics";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <GAInitializer />
      <SEOHead />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryKey" element={<CategoryPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GADebug />
    </div>
  );
}

export default function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}
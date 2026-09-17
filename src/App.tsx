import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import { AffiliateOverridesProvider } from "./contexts/AffiliateOverridesContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CategoryProductsProvider } from "./contexts/CategoryProductsContext";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { AdminPage } from "./pages/AdminPage";
import { ShopPage } from "./pages/ShopPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";
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
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/young-athletes-military" element={<ComingSoonPage title="Young Athletes & Military" description="Curated gear and training resources for young athletes and military personnel — built for performance, discipline, and resilience. Full content dropping soon." path="/young-athletes-military" />} />
        <Route path="/over-50" element={<ComingSoonPage title="Over 50" description="Fitness and wellness picks tailored for those over 50 — smart, sustainable, and built to keep you moving. Content coming soon." path="/over-50" />} />
        <Route path="/bodyPower" element={<ComingSoonPage title="Body Power" description="Strength, power, and performance gear handpicked for serious training. In-depth reviews and top picks on the way." path="/bodyPower" />} />
        <Route path="/the-science" element={<ComingSoonPage title="The Science" description="Evidence-based breakdowns of the fitness gear and supplements that actually work. Deep dives coming soon." path="/the-science" imageSrc="/science-coming-soon.png" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GADebug />
    </div>
  );
}

export default function App() {
  return (
    <SessionProvider>
      <AffiliateOverridesProvider>
        <CategoriesProvider>
          <CategoryProductsProvider>
            <AppContent />
          </CategoryProductsProvider>
        </CategoriesProvider>
      </AffiliateOverridesProvider>
    </SessionProvider>
  );
}
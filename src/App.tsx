import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WeeklyFeatured } from "./components/WeeklyFeatured";
import { CategoryGrid } from "./components/CategoryGrid";
import { CategoryPage } from "./components/CategoryPage";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { categoryData } from "./data/categoryData";
import { GAInitializer } from "./components/GAInitializer";
import { SEOHead } from "./components/SEOHead";
import { trackEvent, trackPageView } from "./lib/analytics";
import { GADebug } from "./components/GADebug";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryKey: string) => {
    trackEvent("select_category", { category_key: categoryKey });
    setSelectedCategory(categoryKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    trackEvent("return_home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Page view on category change
  useEffect(() => {
    trackPageView(selectedCategory ? `/category/${selectedCategory}` : "/");
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <GAInitializer />
      <SEOHead selectedCategory={selectedCategory} categoryData={categoryData} />
      <Navigation onLogoClick={handleBackToHome} />
      {selectedCategory ? (
        <CategoryPage
          category={categoryData[selectedCategory]}
          onBack={handleBackToHome}
        />
      ) : (
        <>
          <Hero />
          <WeeklyFeatured />
          <CategoryGrid onCategoryClick={handleCategoryClick} />
          <Footer />
        </>
      )}

      {/* TEMPORARY DEBUG WIDGET */}
      <GADebug />
    </div>
  );
}
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WeeklyFeatured } from "./components/WeeklyFeatured";
import { CategoryGrid } from "./components/CategoryGrid";
import { CategoryPage } from "./components/CategoryPage";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { categoryData } from "./data/categoryData";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
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
    </div>
  );
}
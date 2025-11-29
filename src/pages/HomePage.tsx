import { Hero } from "../components/Hero";
import { WeeklyFeatured } from "../components/WeeklyFeatured";
import { CategoryGrid } from "../components/CategoryGrid";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSession } from "../contexts/SessionContext";

export function HomePage() {
  const navigate = useNavigate();
  const { saveScrollPosition, getScrollPosition } = useSession();

  useEffect(() => {
    const savedPosition = getScrollPosition("/");
    if (savedPosition > 0) {
      setTimeout(() => window.scrollTo(0, savedPosition), 100);
    }

    const handleScroll = () => {
      saveScrollPosition("/", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryKey: string) => {
    navigate(`/category/${categoryKey}`);
  };

  return (
    <>
      <Hero />
      <WeeklyFeatured />
      <CategoryGrid onCategoryClick={handleCategoryClick} />
      <Footer />
    </>
  );
}

import { useParams, useNavigate, Navigate } from "react-router-dom";
import { categoryData } from "../data/categoryData";
import { CategoryPage as CategoryPageComponent } from "../components/CategoryPage";
import { useSession } from "../contexts/SessionContext";
import { useEffect } from "react";

export function CategoryPage() {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const navigate = useNavigate();
  const { trackCategoryVisit, saveScrollPosition, getScrollPosition } = useSession();

  const category = categoryKey ? categoryData[categoryKey] : null;

  useEffect(() => {
    if (categoryKey && category) {
      trackCategoryVisit(categoryKey);
      
      const savedPosition = getScrollPosition(`/category/${categoryKey}`);
      if (savedPosition > 0) {
        setTimeout(() => window.scrollTo(0, savedPosition), 100);
      }

      const handleScroll = () => {
        saveScrollPosition(`/category/${categoryKey}`, window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [categoryKey, category]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const handleBack = () => {
    navigate("/");
  };

  return <CategoryPageComponent category={category} onBack={handleBack} />;
}

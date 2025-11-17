import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WeeklyFeatured } from "./components/WeeklyFeatured";
import { CategoryGrid } from "./components/CategoryGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <Hero />
      <WeeklyFeatured />
      <CategoryGrid />
      <Footer />
    </div>
  );
}
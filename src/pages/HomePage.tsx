import { Hero } from "../components/Hero";
import { Categories } from "../components/Categories";
import { RegionalMap } from "../components/RegionalMap";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { trackPageView } from "../lib/analytics";

export function HomePage() {
  useEffect(() => {
    trackPageView("/");
  }, []);

  return (
    <>
      <Hero />
      <RegionalMap />
      <Categories />
      <Contact />
      <Footer />
    </>
  );
}

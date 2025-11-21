import { motion } from "motion/react";
import { ArrowLeft, SlidersHorizontal, Grid3x3, List, Search } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProductDrawer } from "./ProductDrawer";
import { useState, useRef, useEffect } from "react";
import { useInView } from "./hooks/useInView";
import { trackEvent } from "../lib/analytics";

interface CategoryData {
  id: number;
  name: string;
  description: string;
  productCount: number;
  products: any[];
}

interface CategoryPageProps {
  category: CategoryData;
  onBack: () => void;
}

export function CategoryPage({ category, onBack }: CategoryPageProps) {
  const ref = useRef<HTMLSectionElement | null>(null);
  const isInView = useInView(ref);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("rating");
  const [filterPrice, setFilterPrice] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleProductClick = (product: any) => {
    trackEvent("view_product_drawer", { product_id: product.id, category: category.name });
    // blur the focused element so it won't remain focused while root becomes aria-hidden
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  // Filter and sort products
  const filteredProducts = category.products
    .filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Price filter
      if (filterPrice !== "all") {
        const price = parseInt(product.price.replace("$", ""));
        if (filterPrice === "under200" && price >= 200) return false;
        if (filterPrice === "200to400" && (price < 200 || price > 400)) return false;
        if (filterPrice === "over400" && price <= 400) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "priceLow") {
        const priceA = parseInt(a.price.replace("$", ""));
        const priceB = parseInt(b.price.replace("$", ""));
        return priceA - priceB;
      }
      if (sortBy === "priceHigh") {
        const priceA = parseInt(a.price.replace("$", ""));
        const priceB = parseInt(b.price.replace("$", ""));
        return priceB - priceA;
      }
      return 0;
    });

  useEffect(() => { trackEvent("change_sort", { category: category.name, sort_by: sortBy }); }, [sortBy]);
  useEffect(() => { trackEvent("change_price_filter", { category: category.name, price_filter: filterPrice }); }, [filterPrice]);
  useEffect(() => { if (searchQuery) trackEvent("search_products", { category: category.name, query: searchQuery }); }, [searchQuery]);
  useEffect(() => { trackEvent("change_view_mode", { category: category.name, view_mode: viewMode }); }, [viewMode]);

  return (
    <>
      <div className="min-h-screen bg-zinc-950 pt-20">
        {/* Header */}
        <motion.div
          className="bg-zinc-900 border-b-4 border-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-zinc-400 hover:text-orange-600 transition-colors mb-6"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm">Return to Base</span>
            </motion.button>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <motion.h1
                  className="text-zinc-100 mb-3 uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {category.name}
                </motion.h1>
                <motion.div
                  className="h-1 w-20 bg-orange-600 mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.p
                  className="text-zinc-400 max-w-3xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {category.description}
                </motion.p>
              </div>
              <motion.div
                className="bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-zinc-500 text-sm uppercase tracking-wide mb-1">
                  Tested Products
                </p>
                <p className="text-orange-600 text-3xl">{category.productCount}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Controls */}
        <div className="bg-zinc-900/50 border-b border-zinc-800 sticky top-20 z-40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search tactical gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 text-zinc-300 pl-11 pr-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors uppercase text-sm tracking-wide"
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors uppercase text-sm tracking-wide cursor-pointer"
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                  </select>
                </div>

                {/* Price Filter */}
                <select
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded focus:outline-none focus:border-orange-600 transition-colors uppercase text-sm tracking-wide cursor-pointer"
                >
                  <option value="all">All Prices</option>
                  <option value="under200">Under $200</option>
                  <option value="200to400">$200 - $400</option>
                  <option value="over400">Over $400</option>
                </select>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded p-1">
                  <motion.button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-orange-600 text-zinc-950"
                        : "text-zinc-400 hover:text-zinc-300"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-orange-600 text-zinc-950"
                        : "text-zinc-400 hover:text-zinc-300"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <List className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery || filterPrice !== "all") && (
              <motion.div
                className="flex items-center gap-2 mt-3 flex-wrap"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-zinc-500 text-sm uppercase tracking-wide">
                  Active Filters:
                </span>
                {searchQuery && (
                  <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1 rounded text-sm flex items-center gap-2">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-orange-600 hover:text-orange-500"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filterPrice !== "all" && (
                  <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1 rounded text-sm flex items-center gap-2">
                    Price: {filterPrice === "under200" ? "Under $200" : filterPrice === "200to400" ? "$200-$400" : "Over $400"}
                    <button
                      onClick={() => setFilterPrice("all")}
                      className="text-orange-600 hover:text-orange-500"
                    >
                      ×
                    </button>
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Products Grid/List */}
        <section ref={ref} className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-zinc-500 text-lg uppercase tracking-wide">
                  No products match your criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setFilterPrice("all");
                  }}
                  className="mt-4 text-orange-600 hover:text-orange-500 uppercase text-sm tracking-wider"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductDrawer
        product={selectedProduct}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
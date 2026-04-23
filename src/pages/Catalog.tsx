import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/mock-data";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Catalog = () => {
  const [cat, setCat] = useState("All goods");
  const [sort, setSort] = useState("Featured");

  return (
    <SiteLayout>
      <div className="container py-8 space-y-6">
        <div className="panel-lg p-6 md:p-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">Catalog</h1>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search 1,200+ titles…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 rounded-full bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Featured</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
              <option>Newest</option>
              <option>Top rated</option>
            </select>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  cat === c
                    ? "px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white shadow-pill"
                    : "px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground transition"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...products, ...products].map((p, i) => (
            <ProductCard key={`${p.id}-${i}`} product={p} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 pt-4">
          <button className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={
                n === 1
                  ? "h-10 w-10 grid place-items-center rounded-full bg-gradient-primary text-white shadow-pill text-sm font-semibold"
                  : "h-10 w-10 grid place-items-center rounded-full bg-card border border-border hover:bg-muted text-sm"
              }
            >
              {n}
            </button>
          ))}
          <button className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border hover:bg-muted">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Catalog;

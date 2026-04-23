import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { ProductCard } from "@/components/site/ProductCard";
import { products, news, articles, categories } from "@/lib/mock-data";
import { Search, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [activeCat, setActiveCat] = useState("All goods");
  return (
    <SiteLayout>
      <div className="container py-6 md:py-10 space-y-10">
        <HeroCarousel />

        {/* News + Articles */}
        <section className="grid gap-6 lg:grid-cols-2">
          {[
            { title: "Latest news", items: news.slice(0, 4), link: "/news" },
            { title: "Latest articles", items: articles.slice(0, 4), link: "/articles" },
          ].map((block) => (
            <div key={block.title} className="panel-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold">{block.title}</h2>
                <Link to={block.link} className="chip bg-accent text-accent-foreground hover:bg-primary hover:text-white transition">
                  See all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <ul className="divide-y divide-border">
                {block.items.map((it: any) => (
                  <li key={it.slug}>
                    <Link
                      to={`${block.link}/${it.slug}`}
                      className="flex items-center gap-3 py-3 group"
                    >
                      <div className="text-[11px] text-muted-foreground flex items-center gap-1 w-24 shrink-0">
                        <Calendar className="h-3 w-3" /> {it.date.split(",")[0]}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition line-clamp-1">
                        {it.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Search + categories */}
        <section className="panel-lg p-6 md:p-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              placeholder="Search games, accounts, gift cards…"
              className="w-full pl-12 pr-5 py-4 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={
                  activeCat === c
                    ? "px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white shadow-pill"
                    : "px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground transition"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section>
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Featured games</h2>
              <p className="text-sm text-muted-foreground">Hand-picked deals, verified delivery.</p>
            </div>
            <Link to="/catalog" className="hidden sm:inline-flex chip bg-accent text-accent-foreground hover:bg-primary hover:text-white transition">
              View catalog <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default Home;

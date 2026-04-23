import { SiteLayout } from "@/components/site/SiteLayout";
import { products } from "@/lib/mock-data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PillTabs } from "@/components/site/PillTabs";
import { useState } from "react";
import { ChevronRight, Star, Shield, Zap, MessageCircle, Gift } from "lucide-react";

type Tab = "about" | "payment" | "cashback" | "faq";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) ?? products[0];
  const [tab, setTab] = useState<Tab>("about");
  const navigate = useNavigate();

  if (!slug) return null;
  if (!products.find((p) => p.slug === slug)) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold">Product not found</h1>
          <p className="text-muted-foreground mt-2">It may have been removed or the link is invalid.</p>
          <Link to="/catalog" className="mt-6 inline-block px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
            Back to catalog
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container py-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/catalog" className="hover:text-primary">Catalog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.title}</span>
        </nav>

        {/* Hero banner */}
        <div className="relative h-64 md:h-80 rounded-[1.75rem] overflow-hidden">
          <img src={product.cover} alt={product.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Overlapping content */}
        <div className="relative grid gap-6 lg:grid-cols-[1fr_320px] -mt-16 px-2">
          <div className="panel-lg p-6 md:p-8 relative">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="chip bg-accent text-accent-foreground">{product.type}</span>
              <span className="chip bg-accent text-accent-foreground">{product.region}</span>
              <span className="chip bg-muted text-muted-foreground">{product.platform}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">{product.title}</h1>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /> {product.rating}</span>
              <span>·</span>
              <span>{product.category}</span>
            </div>

            <div className="mt-6">
              <PillTabs<Tab>
                tabs={[
                  { value: "about", label: "About" },
                  { value: "payment", label: "Payment" },
                  { value: "cashback", label: "Cashback" },
                  { value: "faq", label: "FAQ" },
                ]}
                value={tab}
                onChange={setTab}
              />
            </div>

            <div className="mt-6 prose prose-sm max-w-none animate-fade-in">
              {tab === "about" && (
                <>
                  <p className="text-foreground/80">{product.shortDesc}</p>
                  <h3 className="font-display font-semibold text-base mt-5">How delivery works</h3>
                  <ol className="space-y-2 mt-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">1.</strong> Create your order — we open a private purchase chat.</li>
                    <li><strong className="text-foreground">2.</strong> Pay via bank transfer or Binance P2P, then attach proof in chat.</li>
                    <li><strong className="text-foreground">3.</strong> Admin verifies and delivers your license — reveal it from My Orders.</li>
                  </ol>
                </>
              )}
              {tab === "payment" && (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>We accept <strong className="text-foreground">Bank transfer</strong> and <strong className="text-foreground">Binance P2P</strong>.</p>
                  <p>Reference code is generated when you create the order. Attach your proof of payment inside the order chat.</p>
                </div>
              )}
              {tab === "cashback" && (
                <p className="text-sm text-muted-foreground">Earn <strong className="text-foreground">3% cashback</strong> on every verified purchase, redeemable on your next order.</p>
              )}
              {tab === "faq" && (
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Is this legit?</strong> Yes — over 12,400 verified deliveries.</li>
                  <li><strong className="text-foreground">When do I get my license?</strong> Usually within 30 minutes of proof verification.</li>
                  <li><strong className="text-foreground">Refunds?</strong> Yes, covered by our warranty if delivery fails.</li>
                </ul>
              )}
            </div>

            {/* Floating price chip */}
            <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3">
              <div className="text-right">
                {product.oldPrice && (
                  <div className="text-xs line-through text-muted-foreground">${product.oldPrice.toFixed(2)}</div>
                )}
                <div className="font-display text-2xl font-bold">${product.price.toFixed(2)}</div>
              </div>
              <button
                onClick={() => navigate(`/orders/new?product=${product.slug}`)}
                className="px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill hover:scale-105 transition"
              >
                Create Order
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="panel p-5">
              <h3 className="font-display font-semibold text-sm mb-3">Order info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Avg delivery 30 min</li>
                <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Full warranty included</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> Live chat with admin</li>
                <li className="flex items-center gap-2"><Gift className="h-4 w-4 text-primary" /> 3% cashback on next order</li>
              </ul>
            </div>
            <div className="panel p-5 md:hidden">
              <div className="flex items-end justify-between">
                <div>
                  {product.oldPrice && (
                    <div className="text-xs line-through text-muted-foreground">${product.oldPrice.toFixed(2)}</div>
                  )}
                  <div className="font-display text-2xl font-bold">${product.price.toFixed(2)}</div>
                </div>
                <button
                  onClick={() => navigate(`/orders/new?product=${product.slug}`)}
                  className="px-5 py-2.5 rounded-full bg-gradient-primary text-white font-semibold shadow-pill"
                >
                  Create Order
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ProductDetails;

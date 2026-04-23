import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { orders } from "@/lib/mock-data";
import { StatusBadge } from "@/components/site/StatusBadge";
import { Copy, MessageCircle, KeyRound, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const MyOrders = () => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setRevealed((s) => ({ ...s, [id]: !s[id] }));
  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied`);
  };

  return (
    <SiteLayout>
      <div className="container py-8 space-y-6 max-w-5xl">
        <div className="panel-lg p-6 md:p-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">My orders</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage purchases, chat with admin, reveal licenses.</p>
          </div>
          <Link to="/account/profile" className="hidden sm:inline-block px-4 py-2 rounded-full text-sm bg-muted hover:bg-accent transition">
            Profile
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="panel-lg p-12 text-center">
            <h3 className="font-display text-xl font-bold">No orders yet</h3>
            <p className="text-sm text-muted-foreground mt-1">Browse the catalog to make your first purchase.</p>
            <Link to="/catalog" className="mt-5 inline-block px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
              Browse catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="panel p-5 md:p-6 flex flex-col md:flex-row gap-5 items-start">
                <img src={o.product.cover} alt={o.product.title} className="h-24 w-24 md:h-28 md:w-28 rounded-2xl object-cover shrink-0" />
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-lg truncate">{o.product.title}</h3>
                      <div className="text-xs text-muted-foreground mt-0.5">{o.createdAt}</div>
                    </div>
                    <StatusBadge status={o.status} />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-display font-bold">${o.amount.toFixed(2)}</span>
                    <button onClick={() => copy(o.ref, "Reference")} className="chip bg-muted hover:bg-accent transition">
                      <span className="font-mono">{o.ref}</span> <Copy className="h-3 w-3" />
                    </button>
                  </div>

                  {o.status === "DELIVERED" && o.license ? (
                    <div className="mt-4 panel p-4 bg-success/5 border border-success/20">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 text-sm font-medium text-success">
                          <KeyRound className="h-4 w-4" /> License key
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => toggle(o.id)} className="chip bg-card border border-border">
                            {revealed[o.id] ? <><EyeOff className="h-3 w-3" /> Hide</> : <><Eye className="h-3 w-3" /> Reveal license</>}
                          </button>
                          {revealed[o.id] && (
                            <button onClick={() => copy(o.license!, "License")} className="chip bg-gradient-primary text-white shadow-pill">
                              <Copy className="h-3 w-3" /> Copy
                            </button>
                          )}
                        </div>
                      </div>
                      {revealed[o.id] && (
                        <div className="mt-3 px-4 py-3 rounded-xl bg-background-soft font-mono text-sm tracking-wider break-all animate-scale-in">
                          {o.license}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-4">
                      <Link
                        to={`/account/orders/${o.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill"
                      >
                        <MessageCircle className="h-4 w-4" /> Open purchase chat
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SiteLayout>
  );
};

export default MyOrders;

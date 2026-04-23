import { Link } from "react-router-dom";
import { Mail, Shield, CreditCard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-header text-header-foreground">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center text-white font-display font-bold">G</div>
            <span className="font-display text-lg font-semibold">Gamers<span className="gradient-text">Unlimited</span></span>
          </div>
          <p className="mt-3 text-sm text-header-muted leading-relaxed">
            Verified game accounts and licenses with chat-first delivery and full warranty.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-header-muted">
            <CreditCard className="h-4 w-4" /> Secure payments · Bank · Binance P2P
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-header-muted">
            <li><Link to="/catalog" className="hover:text-white">Catalog</Link></li>
            <li><Link to="/news" className="hover:text-white">News</Link></li>
            <li><Link to="/articles" className="hover:text-white">Articles</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-header-muted">
            <li><Link to="/help" className="hover:text-white">Help center</Link></li>
            <li><Link to="/warranty" className="hover:text-white">Warranty</Link></li>
            <li><Link to="/contacts" className="hover:text-white">Contacts</Link></li>
            <li><Link to="/partnership" className="hover:text-white">Partnership</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Stay in the loop</h4>
          <p className="text-sm text-header-muted mb-3">Sales, drops, and tips.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder:text-header-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
              Join
            </button>
          </form>
          <div className="mt-4 flex items-center gap-2 text-xs text-header-muted">
            <Shield className="h-4 w-4" /> SSL encrypted · Refund warranty
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-header-muted">
          <span>© 2026 Gamers Unlimited. All rights reserved.</span>
          <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> support@gamersunlimited.store</span>
        </div>
      </div>
    </footer>
  );
};

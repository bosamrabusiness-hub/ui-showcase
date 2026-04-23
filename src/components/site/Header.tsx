import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "My purchases", to: "/account/orders" },
  { label: "News", to: "/news" },
  { label: "Articles", to: "/articles" },
  { label: "Reviews", to: "/reviews" },
  { label: "Warranty", to: "/warranty" },
  { label: "Contacts", to: "/contacts" },
  { label: "Partnership", to: "/partnership" },
  { label: "Help", to: "/help" },
];

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 bg-gradient-header text-header-foreground">
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-pill grid place-items-center text-white font-display font-bold">
            G
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Gamers<span className="gradient-text">Unlimited</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "nav-pill",
                isActive(item.to)
                  ? "nav-pill-active"
                  : "text-header-muted hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 transition">
            <Globe className="h-4 w-4" /> EN
          </button>
          <Link
            to="/auth/login"
            className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 transition"
          >
            Sign in
          </Link>
        </div>

        <button
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-header animate-fade-in">
          <nav className="container py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm",
                  isActive(item.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-header-muted hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/auth/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm bg-white/10 mt-2"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

import { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ListOrdered, Package, LogOut, Bell, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/orders", label: "Orders queue", icon: ListOrdered },
  { to: "/admin/products", label: "Products", icon: Package },
];

export const AdminLayout = ({ children, title }: { children: ReactNode; title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-sidebar text-sidebar-foreground">
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-sidebar-border">
        <Link to="/admin" className="px-5 py-5 flex items-center gap-2 border-b border-sidebar-border">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary text-white grid place-items-center font-display font-bold">G</div>
          <span className="font-display font-semibold">Admin <span className="text-sidebar-foreground/60 text-xs ml-1">/ GU</span></span>
        </Link>
        <nav className="p-3 space-y-1 flex-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition",
                  isActive ? "bg-gradient-primary text-white shadow-pill" : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white"
                )
              }
            >
              <it.icon className="h-4 w-4" /> {it.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => navigate("/admin/login")}
          className="m-3 inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/70"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 bg-background text-foreground">
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <h1 className="font-display font-semibold">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative h-9 w-9 grid place-items-center rounded-full bg-muted hover:bg-accent">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-primary text-white text-[10px] font-semibold grid place-items-center">3</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-primary text-white grid place-items-center text-xs font-semibold">A</div>
          </div>
        </header>
        <main className="flex-1 p-5 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

import { AdminLayout } from "@/components/admin/AdminLayout";
import { adminQueue } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Package, DollarSign, ArrowRight } from "lucide-react";
import { StatusBadge } from "@/components/site/StatusBadge";

const AdminDashboard = () => (
  <AdminLayout title="Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      {[
        { icon: Package, label: "Open orders", value: "18", trend: "+12%" },
        { icon: Clock, label: "Avg SLA", value: "23m", trend: "-4m" },
        { icon: DollarSign, label: "Revenue today", value: "$3,420", trend: "+18%" },
        { icon: TrendingUp, label: "Conversion", value: "76%", trend: "+3%" },
      ].map((s) => (
        <div key={s.label} className="panel p-5">
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center"><s.icon className="h-5 w-5 text-primary" /></div>
            <span className="chip bg-success/15 text-success text-[10px]">{s.trend}</span>
          </div>
          <div className="mt-3 font-display text-2xl font-bold">{s.value}</div>
          <div className="text-xs text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>

    <div className="panel-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold">Recent queue</h2>
        <Link to="/admin/orders" className="chip bg-accent text-accent-foreground hover:bg-primary hover:text-white transition">
          See all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <ul className="divide-y divide-border">
        {adminQueue.slice(0, 5).map((q) => (
          <li key={q.id}>
            <Link to={`/admin/orders/${q.id}`} className="flex items-center gap-3 py-3 hover:bg-muted/40 rounded-xl px-2 -mx-2 transition">
              <div className="font-mono text-xs text-muted-foreground w-24">{q.ref}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{q.product}</div>
                <div className="text-xs text-muted-foreground">{q.buyer}</div>
              </div>
              <StatusBadge status={q.status} />
              <div className="font-display font-bold text-sm w-20 text-right">${q.amount.toFixed(2)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </AdminLayout>
);

export default AdminDashboard;

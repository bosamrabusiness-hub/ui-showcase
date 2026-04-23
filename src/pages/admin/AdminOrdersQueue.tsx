import { AdminLayout } from "@/components/admin/AdminLayout";
import { adminQueue } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Search, Filter, Clock, FileBadge } from "lucide-react";
import { StatusBadge } from "@/components/site/StatusBadge";
import { cn } from "@/lib/utils";

const slaBadge = (m: number) => {
  if (m === 0) return { cls: "bg-muted text-muted-foreground", label: "—" };
  if (m < 15) return { cls: "bg-success/15 text-success", label: `${m}m` };
  if (m < 45) return { cls: "bg-warning/15 text-warning", label: `${m}m` };
  return { cls: "bg-destructive/15 text-destructive", label: `${m}m` };
};

const AdminOrdersQueue = () => (
  <AdminLayout title="Orders queue">
    <div className="panel-lg p-5 mb-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input className="w-full pl-11 pr-4 py-3 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Search ref, buyer, product…" />
        </div>
        <select className="px-4 py-3 rounded-full bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option>All statuses</option>
          <option>PENDING_PAYMENT</option>
          <option>PROOF_UPLOADED</option>
          <option>UNDER_REVIEW</option>
          <option>APPROVED</option>
          <option>DELIVERED</option>
        </select>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>
    </div>

    <div className="panel-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-3">Ref</th>
              <th className="text-left px-4 py-3">Buyer</th>
              <th className="text-left px-4 py-3">Product</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Proofs</th>
              <th className="text-left px-4 py-3">SLA</th>
              <th className="text-right px-4 py-3">Amount</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {adminQueue.map((q) => {
              const sla = slaBadge(q.slaMinutes);
              return (
                <tr key={q.id} className="hover:bg-muted/30 transition">
                  <td className="px-4 py-3 font-mono text-xs">{q.ref}</td>
                  <td className="px-4 py-3">{q.buyer}</td>
                  <td className="px-4 py-3 font-medium">{q.product}</td>
                  <td className="px-4 py-3"><StatusBadge status={q.status} /></td>
                  <td className="px-4 py-3"><span className="chip bg-muted"><FileBadge className="h-3 w-3" /> {q.proofs}</span></td>
                  <td className="px-4 py-3"><span className={cn("chip", sla.cls)}><Clock className="h-3 w-3" /> {sla.label}</span></td>
                  <td className="px-4 py-3 text-right font-display font-bold">${q.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">
                    <Link to={`/admin/orders/${q.id}`} className="px-3 py-1.5 rounded-full bg-gradient-primary text-white text-xs font-semibold shadow-pill">
                      Open
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default AdminOrdersQueue;

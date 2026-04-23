import { AdminLayout } from "@/components/admin/AdminLayout";
import { products } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Plus, Edit3, Search } from "lucide-react";

const AdminProducts = () => (
  <AdminLayout title="Products">
    <div className="panel-lg p-5 mb-5 flex flex-col md:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input className="w-full pl-11 pr-4 py-3 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Search products…" />
      </div>
      <Link to="/admin/products/new" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
        <Plus className="h-4 w-4" /> New product
      </Link>
    </div>

    <div className="panel-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Slug</th>
            <th className="text-left px-4 py-3">Type</th>
            <th className="text-right px-4 py-3">Price</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-muted/30 transition">
              <td className="px-4 py-3 flex items-center gap-3">
                <img src={p.cover} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <span className="font-medium">{p.title}</span>
              </td>
              <td className="px-4 py-3 font-mono text-xs">{p.slug}</td>
              <td className="px-4 py-3"><span className="chip bg-accent text-accent-foreground">{p.type}</span></td>
              <td className="px-4 py-3 text-right font-display font-bold">${p.price.toFixed(2)}</td>
              <td className="px-4 py-3 text-right">
                <Link to={`/admin/products/${p.slug}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted hover:bg-accent text-xs font-semibold transition">
                  <Edit3 className="h-3 w-3" /> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AdminLayout>
);

export default AdminProducts;

import { AdminLayout } from "@/components/admin/AdminLayout";
import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/mock-data";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

const AdminProductEdit = () => {
  const { slug } = useParams();
  const isNew = slug === "new" || !slug;
  const product = isNew ? null : products.find((p) => p.slug === slug);

  return (
    <AdminLayout title={isNew ? "New product" : `Edit · ${product?.title ?? ""}`}>
      <Link to="/admin/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
        <ArrowLeft className="h-4 w-4" /> Products
      </Link>

      <form
        onSubmit={(e) => { e.preventDefault(); toast.success(isNew ? "Product created" : "Product saved"); }}
        className="grid gap-5 lg:grid-cols-[1fr_320px]"
      >
        <div className="space-y-5">
          <div className="panel-lg p-6 space-y-4">
            <h3 className="font-display font-bold">Basic info</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Title</label>
                <input defaultValue={product?.title} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Slug</label>
                <input defaultValue={product?.slug} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm font-mono" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Price (USD)</label>
                <input type="number" step="0.01" defaultValue={product?.price} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Old price</label>
                <input type="number" step="0.01" defaultValue={product?.oldPrice} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Description</label>
              <textarea rows={4} defaultValue={product?.shortDesc} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
            </div>
          </div>

          <div className="panel-lg p-6 space-y-4">
            <h3 className="font-display font-bold">Delivery</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <select defaultValue={product?.type} className="px-4 py-3 rounded-xl bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Offline account</option>
                <option>Online account</option>
                <option>Gift card</option>
                <option>Subscription</option>
              </select>
              <select defaultValue={product?.region} className="px-4 py-3 rounded-xl bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Region Free</option>
                <option>EU</option>
                <option>US</option>
                <option>Asia</option>
              </select>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="panel-lg p-5">
            <h3 className="font-display font-bold mb-3">Cover image</h3>
            {product ? (
              <img src={product.cover} alt="" className="rounded-xl object-cover aspect-square w-full" />
            ) : (
              <div className="aspect-square rounded-xl bg-background-soft grid place-items-center text-xs text-muted-foreground">Upload cover</div>
            )}
            <button type="button" className="mt-3 w-full px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-accent transition">
              Replace image
            </button>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
            <Save className="h-4 w-4" /> {isNew ? "Create product" : "Save changes"}
          </button>
        </aside>
      </form>
    </AdminLayout>
  );
};

export default AdminProductEdit;

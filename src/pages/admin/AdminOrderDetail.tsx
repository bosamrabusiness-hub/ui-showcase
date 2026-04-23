import { AdminLayout } from "@/components/admin/AdminLayout";
import { useParams } from "react-router-dom";
import { adminQueue, products } from "@/lib/mock-data";
import { StatusBadge } from "@/components/site/StatusBadge";
import { useState } from "react";
import { Check, X, KeyRound, FileText, ShieldAlert, Eye } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const AdminOrderDetail = () => {
  const { id } = useParams();
  const order = adminQueue.find((o) => o.id === id) ?? adminQueue[0];
  const product = products[0];

  const [dialog, setDialog] = useState<null | "approve" | "reject" | "deliver">(null);
  const [reason, setReason] = useState("");
  const [license, setLicense] = useState("");

  const close = () => { setDialog(null); setReason(""); setLicense(""); };

  return (
    <AdminLayout title={`Order ${order.ref}`}>
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {/* Buyer + summary */}
          <div className="panel-lg p-5 md:p-6">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <h2 className="font-display text-xl font-bold">{order.product}</h2>
                <div className="text-xs text-muted-foreground mt-0.5">Buyer · {order.buyer}</div>
              </div>
              <StatusBadge status={order.status} />
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div className="panel p-3"><div className="text-xs text-muted-foreground">Reference</div><div className="font-mono">{order.ref}</div></div>
              <div className="panel p-3"><div className="text-xs text-muted-foreground">Amount</div><div className="font-display font-bold">${order.amount.toFixed(2)}</div></div>
              <div className="panel p-3"><div className="text-xs text-muted-foreground">SLA</div><div>{order.slaMinutes || "—"}m</div></div>
              <div className="panel p-3"><div className="text-xs text-muted-foreground">Proofs</div><div>{order.proofs}</div></div>
            </div>
          </div>

          {/* Proof viewer */}
          <div className="panel-lg p-5 md:p-6">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> Proof viewer</h3>
            {order.proofs === 0 ? (
              <div className="panel p-8 text-center">
                <ShieldAlert className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <div className="text-sm font-medium">No proof uploaded</div>
                <div className="text-xs text-muted-foreground">Buyer hasn't sent payment proof yet.</div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-[1fr_240px] gap-4">
                <div className="panel aspect-video bg-background-soft grid place-items-center">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div className="text-xs text-muted-foreground mt-2">receipt.pdf preview</div>
                  </div>
                </div>
                <div className="panel p-4 text-sm space-y-2">
                  <div className="flex items-center justify-between"><span className="text-muted-foreground text-xs">File</span><span>receipt.pdf</span></div>
                  <div className="flex items-center justify-between"><span className="text-muted-foreground text-xs">Size</span><span>188 KB</span></div>
                  <div className="flex items-center justify-between"><span className="text-muted-foreground text-xs">Uploaded</span><span>09:32</span></div>
                  <button className="w-full mt-2 px-3 py-2 rounded-full bg-gradient-primary text-white text-xs font-semibold shadow-pill flex items-center justify-center gap-1">
                    <Eye className="h-3.5 w-3.5" /> Open
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Chat thread */}
          <div className="panel-lg p-5 md:p-6">
            <h3 className="font-display font-semibold mb-4">Conversation</h3>
            <div className="space-y-3 text-sm max-h-72 overflow-y-auto">
              {[
                { from: "system", text: "Order created", time: "09:11" },
                { from: "admin", text: "Send the receipt when ready.", time: "09:14" },
                { from: "buyer", text: "Done! Uploading now.", time: "09:31" },
                { from: "buyer", text: "[receipt.pdf]", time: "09:32" },
              ].map((m, i) => (
                <div key={i} className={cn("flex", m.from === "buyer" ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[70%] px-3 py-2 rounded-2xl text-sm",
                    m.from === "buyer" ? "bg-gradient-primary text-white shadow-pill rounded-br-md" :
                    m.from === "admin" ? "bg-muted rounded-bl-md" :
                    "bg-accent text-accent-foreground text-xs italic")}>
                    {m.text} <span className={cn("ml-2 text-[10px]", m.from === "buyer" ? "text-white/70" : "text-muted-foreground")}>{m.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <input placeholder="Reply to buyer…" className="flex-1 px-4 py-2.5 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              <button className="px-4 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">Send</button>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          {/* Actions */}
          <div className="panel-lg p-5">
            <h3 className="font-display font-semibold mb-3">Actions</h3>
            <div className="space-y-2">
              <button onClick={() => setDialog("approve")} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-success text-success-foreground text-sm font-semibold">
                <Check className="h-4 w-4" /> Approve
              </button>
              <button onClick={() => setDialog("reject")} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-destructive text-destructive-foreground text-sm font-semibold">
                <X className="h-4 w-4" /> Reject with reason
              </button>
              <button onClick={() => setDialog("deliver")} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
                <KeyRound className="h-4 w-4" /> Deliver license
              </button>
            </div>
          </div>

          {/* Audit log */}
          <div className="panel-lg p-5">
            <h3 className="font-display font-semibold mb-3 flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-warning" /> Audit log</h3>
            <ul className="space-y-2 text-xs">
              {[
                "09:11 · Order created",
                "09:32 · Proof uploaded by buyer",
                "09:33 · Status → UNDER_REVIEW",
                "09:40 · Admin opened proof",
              ].map((l) => (
                <li key={l} className="text-muted-foreground"><span className="font-mono">{l}</span></li>
              ))}
            </ul>
          </div>

          <div className="panel p-5 text-xs text-muted-foreground">
            Sensitive actions are logged with admin ID and timestamp.
          </div>
        </aside>
      </div>

      {/* Dialogs */}
      {dialog && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 animate-fade-in" onClick={close}>
          <div className="w-full max-w-md panel-lg p-6 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {dialog === "approve" && (
              <>
                <h3 className="font-display text-lg font-bold">Approve order?</h3>
                <p className="text-sm text-muted-foreground mt-1">Confirms payment was received. Buyer is notified.</p>
                <textarea placeholder="Optional internal note" rows={3} className="mt-4 w-full px-3 py-2 rounded-xl bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <div className="mt-5 flex gap-2 justify-end">
                  <button onClick={close} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm">Cancel</button>
                  <button onClick={() => { toast.success("Order approved"); close(); }} className="px-4 py-2 rounded-full bg-success text-success-foreground text-sm font-semibold">Approve</button>
                </div>
              </>
            )}
            {dialog === "reject" && (
              <>
                <h3 className="font-display text-lg font-bold">Reject proof</h3>
                <p className="text-sm text-muted-foreground mt-1">Reason is required and will be visible to the buyer.</p>
                <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason for rejection" rows={4} className="mt-4 w-full px-3 py-2 rounded-xl bg-background-soft border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <div className="mt-5 flex gap-2 justify-end">
                  <button onClick={close} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm">Cancel</button>
                  <button disabled={!reason.trim()} onClick={() => { toast.success("Proof rejected — buyer notified"); close(); }} className="px-4 py-2 rounded-full bg-destructive text-destructive-foreground text-sm font-semibold disabled:opacity-50">Reject</button>
                </div>
              </>
            )}
            {dialog === "deliver" && (
              <>
                <h3 className="font-display text-lg font-bold">Deliver license</h3>
                <p className="text-sm text-muted-foreground mt-1">Enter the license code. Idempotent: re-running shows the existing record.</p>
                <input value={license} onChange={(e) => setLicense(e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" className="mt-4 w-full px-3 py-3 rounded-xl bg-background-soft border border-border text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-primary" />
                <div className="mt-5 flex gap-2 justify-end">
                  <button onClick={close} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm">Cancel</button>
                  <button disabled={!license.trim()} onClick={() => { toast.success("License delivered to buyer"); close(); }} className="px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill disabled:opacity-50">Confirm deliver</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminOrderDetail;

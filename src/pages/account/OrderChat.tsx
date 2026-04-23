import { SiteLayout } from "@/components/site/SiteLayout";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { orders } from "@/lib/mock-data";
import { StatusBadge } from "@/components/site/StatusBadge";
import { Copy, Paperclip, Send, Bell, Lock, ArrowLeft, FileCheck2, Building2, Bitcoin, Trash2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Msg = {
  id: string;
  from: "buyer" | "admin" | "system";
  text?: string;
  attachment?: { name: string; size: string; type: string };
  time: string;
};

const OrderChat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = useMemo(() => orders.find((o) => o.id === id) ?? orders[1], [id]);

  // Per spec: DELIVERED order -> redirect to My Orders
  useEffect(() => {
    if (order.status === "DELIVERED") {
      toast.info("Order delivered — redirecting to My Orders");
      const t = setTimeout(() => navigate("/account/orders"), 600);
      return () => clearTimeout(t);
    }
  }, [order.status, navigate]);

  const [messages, setMessages] = useState<Msg[]>([
    { id: "m1", from: "system", text: "Order created. Please complete payment and attach proof here.", time: "09:11" },
    { id: "m2", from: "admin", text: "Hi! I'll handle your order. Send the payment receipt when ready.", time: "09:14" },
    { id: "m3", from: "buyer", text: "Done! Uploading receipt now.", time: "09:31" },
    ...(order.status !== "PENDING_PAYMENT"
      ? [{ id: "m4", from: "buyer" as const, attachment: { name: "receipt.pdf", size: "188 KB", type: "PDF" }, time: "09:32" }]
      : []),
    ...(order.status === "UNDER_REVIEW"
      ? [{ id: "m5", from: "system" as const, text: "Proof received — under review.", time: "09:33" }]
      : []),
    ...(order.status === "REJECTED_NEEDS_PROOF"
      ? [{ id: "m6", from: "admin" as const, text: "The receipt is unreadable. Please re-attach a clearer image.", time: "09:38" }]
      : []),
  ]);
  const [text, setText] = useState("");
  const [rail, setRail] = useState<"bank" | "binance">("bank");
  const [uploading, setUploading] = useState(false);

  const send = () => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { id: `m${Date.now()}`, from: "buyer", text, time: "now" }]);
    setText("");
  };

  const onUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setMessages((m) => [...m, { id: `m${Date.now()}`, from: "buyer", attachment: { name: "proof.png", size: "412 KB", type: "PNG" }, time: "now" }]);
      toast.success("Proof sent");
    }, 1200);
  };

  return (
    <SiteLayout>
      <div className="container py-6 max-w-6xl space-y-5">
        <Link to="/account/orders" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> My orders
        </Link>

        {/* Summary */}
        <div className="panel-lg p-5 md:p-6 flex flex-col md:flex-row items-start gap-5">
          <img src={order.product.cover} alt="" className="h-20 w-20 rounded-2xl object-cover" />
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="font-display text-xl md:text-2xl font-bold">{order.product.title}</h1>
                <div className="text-xs text-muted-foreground mt-0.5">{order.createdAt}</div>
              </div>
              <StatusBadge status={order.status} />
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm items-center">
              <span className="font-display font-bold">${order.amount.toFixed(2)}</span>
              <button
                onClick={() => { navigator.clipboard.writeText(order.ref); toast.success("Reference copied"); }}
                className="chip bg-muted hover:bg-accent transition"
              >
                <span className="font-mono">{order.ref}</span> <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {/* Payment instructions */}
            {order.status === "PENDING_PAYMENT" || order.status === "REJECTED_NEEDS_PROOF" ? (
              <div className="panel-lg p-5 md:p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <h2 className="font-display font-bold">Payment instructions</h2>
                  <div className="inline-flex p-1 rounded-full bg-muted">
                    <button onClick={() => setRail("bank")} className={cn("px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition", rail === "bank" ? "bg-gradient-primary text-white shadow-pill" : "text-muted-foreground")}>
                      <Building2 className="h-4 w-4" /> Bank
                    </button>
                    <button onClick={() => setRail("binance")} className={cn("px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition", rail === "binance" ? "bg-gradient-primary text-white shadow-pill" : "text-muted-foreground")}>
                      <Bitcoin className="h-4 w-4" /> Binance P2P
                    </button>
                  </div>
                </div>

                {order.status === "REJECTED_NEEDS_PROOF" && (
                  <div className="mb-4 panel p-3 bg-destructive/10 border border-destructive/30 flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium text-destructive">Proof was rejected</div>
                      <div className="text-muted-foreground">Reason: receipt is unreadable. Please attach a clearer image in the chat below.</div>
                    </div>
                  </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  {rail === "bank" ? (
                    <>
                      <div className="panel p-3"><div className="text-xs text-muted-foreground">Bank</div><div className="font-medium">DBS · 0123-456-789</div></div>
                      <div className="panel p-3"><div className="text-xs text-muted-foreground">Beneficiary</div><div className="font-medium">Gamers Unlimited Pte</div></div>
                    </>
                  ) : (
                    <>
                      <div className="panel p-3"><div className="text-xs text-muted-foreground">Binance ID</div><div className="font-medium font-mono">112-983-440</div></div>
                      <div className="panel p-3"><div className="text-xs text-muted-foreground">Network</div><div className="font-medium">USDT (TRC20)</div></div>
                    </>
                  )}
                  <div className="panel p-3"><div className="text-xs text-muted-foreground">Amount</div><div className="font-display font-bold">${order.amount.toFixed(2)}</div></div>
                  <div className="panel p-3 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Reference</div>
                      <div className="font-mono font-medium">{order.ref}</div>
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(order.ref); toast.success("Reference copied"); }} className="h-8 w-8 grid place-items-center rounded-full bg-muted hover:bg-accent">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Important: include the reference code in your transfer description, then attach the receipt below in chat.</p>
              </div>
            ) : (
              <div className="panel p-4 flex items-center gap-3 bg-info/10 border border-info/20">
                <FileCheck2 className="h-5 w-5 text-info shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">Proof received</div>
                  <div className="text-muted-foreground text-xs">Our team is verifying your payment.</div>
                </div>
              </div>
            )}

            {/* Chat */}
            <div className="panel-lg flex flex-col h-[560px]">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-bold">Purchase chat</h2>
                <span className="text-xs text-muted-foreground">Admin · usually replies in minutes</span>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((m) => {
                  if (m.from === "system") {
                    return (
                      <div key={m.id} className="text-center">
                        <span className="chip bg-muted text-muted-foreground text-[11px]">{m.text} · {m.time}</span>
                      </div>
                    );
                  }
                  const mine = m.from === "buyer";
                  return (
                    <div key={m.id} className={cn("flex gap-2.5", mine ? "justify-end" : "justify-start")}>
                      {!mine && <div className="h-8 w-8 rounded-full bg-gradient-primary text-white grid place-items-center text-xs font-semibold shrink-0">A</div>}
                      <div className={cn("max-w-[75%] rounded-2xl px-4 py-2.5 text-sm", mine ? "bg-gradient-primary text-white rounded-br-md shadow-pill" : "bg-muted text-foreground rounded-bl-md")}>
                        {m.text && <div>{m.text}</div>}
                        {m.attachment && (
                          <div className={cn("flex items-center gap-3 px-3 py-2 rounded-xl mt-1", mine ? "bg-white/15" : "bg-card")}>
                            <div className={cn("h-9 w-9 rounded-lg grid place-items-center font-mono text-[10px] font-bold", mine ? "bg-white/20 text-white" : "bg-accent text-accent-foreground")}>
                              {m.attachment.type}
                            </div>
                            <div className="text-xs">
                              <div className={cn("font-medium", mine ? "text-white" : "text-foreground")}>{m.attachment.name}</div>
                              <div className={cn(mine ? "text-white/70" : "text-muted-foreground")}>{m.attachment.size}</div>
                            </div>
                          </div>
                        )}
                        <div className={cn("text-[10px] mt-1", mine ? "text-white/70" : "text-muted-foreground")}>{m.time}</div>
                      </div>
                      {mine && <div className="h-8 w-8 rounded-full bg-foreground text-background grid place-items-center text-xs font-semibold shrink-0">Y</div>}
                    </div>
                  );
                })}
                {uploading && (
                  <div className="flex justify-end">
                    <div className="bg-muted rounded-2xl px-4 py-3 text-xs text-muted-foreground flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full border-2 border-primary border-t-transparent animate-spin" /> Uploading proof…
                    </div>
                  </div>
                )}
              </div>

              {/* Composer */}
              <div className="border-t border-border p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={onUpload}
                    disabled={uploading}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-primary hover:text-white transition disabled:opacity-60"
                  >
                    <Paperclip className="h-4 w-4" /> Attach payment proof
                  </button>
                  <button
                    onClick={onUpload}
                    disabled={uploading}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill disabled:opacity-60"
                  >
                    Send proof
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Write a message…"
                    className="flex-1 px-4 py-3 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <button onClick={() => setText("")} className="h-10 w-10 grid place-items-center rounded-full bg-muted hover:bg-accent">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button onClick={send} className="h-10 w-10 grid place-items-center rounded-full bg-gradient-primary text-white shadow-pill">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            {/* Notifications */}
            <div className="panel p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /> Notifications</h3>
                <span className="chip bg-gradient-primary text-white text-[10px] shadow-pill">2 new</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" /><div><div className="font-medium">Admin replied</div><div className="text-xs text-muted-foreground">2 min ago</div></div></li>
                <li className="flex gap-2"><div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" /><div><div className="font-medium">Status changed to {order.status}</div><div className="text-xs text-muted-foreground">5 min ago</div></div></li>
                <li className="flex gap-2"><div className="h-2 w-2 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" /><div><div className="font-medium">Order created</div><div className="text-xs text-muted-foreground">22 min ago</div></div></li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="panel p-5">
              <h3 className="font-display font-semibold mb-3">Timeline</h3>
              <ol className="relative border-l border-border ml-2 space-y-4">
                {[
                  { t: "Order created", on: true },
                  { t: "Payment proof uploaded", on: order.status !== "PENDING_PAYMENT" },
                  { t: "Under review", on: ["UNDER_REVIEW", "APPROVED", "DELIVERED"].includes(order.status) },
                  { t: "Approved", on: ["APPROVED", "DELIVERED"].includes(order.status) },
                  { t: "Delivered", on: order.status === "DELIVERED" },
                ].map((s, i) => (
                  <li key={i} className="ml-4">
                    <span className={cn("absolute -left-[7px] h-3 w-3 rounded-full border-2", s.on ? "bg-primary border-primary" : "bg-card border-border")} />
                    <div className={cn("text-sm", s.on ? "font-medium" : "text-muted-foreground")}>{s.t}</div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Delivery */}
            <div className="panel p-5">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2"><Lock className="h-4 w-4 text-muted-foreground" /> Delivery</h3>
              <div className="px-4 py-6 rounded-2xl bg-background-soft text-center">
                <Lock className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                <div className="text-sm font-medium">License locked</div>
                <div className="text-xs text-muted-foreground mt-1">Available in My Orders once delivered.</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
};

export default OrderChat;

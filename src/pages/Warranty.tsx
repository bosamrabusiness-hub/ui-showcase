import { SiteLayout } from "@/components/site/SiteLayout";
import { Shield, Check, Clock, RefreshCw } from "lucide-react";

const items = [
  { icon: Shield, title: "Full coverage", text: "Every order is covered for the lifetime of the account." },
  { icon: Check, title: "Verified delivery", text: "We confirm activation works before closing your case." },
  { icon: Clock, title: "30-min average", text: "Delivery typically completes within 30 minutes of proof." },
  { icon: RefreshCw, title: "Easy refunds", text: "If we can't deliver, you get a full refund — no questions." },
];

const Warranty = () => (
  <SiteLayout>
    <div className="container py-8 space-y-6 max-w-4xl">
      <div className="panel-lg p-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Warranty</h1>
        <p className="mt-2 text-muted-foreground">Buy with confidence — every order is protected.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="panel p-6">
            <div className="h-12 w-12 rounded-2xl bg-accent grid place-items-center mb-4">
              <it.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
      <div className="panel-lg p-8">
        <h2 className="font-display text-xl font-bold mb-3">How to claim</h2>
        <ol className="space-y-3 text-sm text-muted-foreground">
          <li><strong className="text-foreground">1.</strong> Open the order in My Orders.</li>
          <li><strong className="text-foreground">2.</strong> Click "Open purchase chat" and describe the issue.</li>
          <li><strong className="text-foreground">3.</strong> Our admin investigates and either re-delivers or refunds.</li>
        </ol>
      </div>
    </div>
  </SiteLayout>
);

export default Warranty;

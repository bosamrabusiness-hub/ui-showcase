import { SiteLayout } from "@/components/site/SiteLayout";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How does delivery work?", a: "After payment, attach your proof inside the order chat. Admin verifies and sends your license. You reveal it from My Orders." },
  { q: "What payment methods do you accept?", a: "Bank transfer and Binance P2P. Both options are shown on the order page with a unique reference code." },
  { q: "Is my purchase covered by warranty?", a: "Yes — every order includes our full warranty for the lifetime of the account." },
  { q: "How long until I receive my license?", a: "Typical delivery time is under 30 minutes after we verify your payment proof." },
  { q: "Can I get a refund?", a: "If we cannot deliver, you receive a full refund. Contact support from inside the order chat." },
  { q: "Do I need to create an account?", a: "Yes — your orders, chat, and license reveal all live in your account." },
];

const Help = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <div className="container py-8 max-w-3xl space-y-6">
        <div className="panel-lg p-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Help center</h1>
          <p className="mt-2 text-muted-foreground">Answers to common questions.</p>
          <div className="relative mt-5 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search articles…"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>
        <div className="panel-lg p-2">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 hover:bg-muted/50 rounded-xl transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="mt-3 text-sm text-muted-foreground animate-fade-in">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default Help;

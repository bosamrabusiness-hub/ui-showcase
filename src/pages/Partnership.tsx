import { SiteLayout } from "@/components/site/SiteLayout";
import { Handshake, TrendingUp, Users, Zap } from "lucide-react";

const Partnership = () => (
  <SiteLayout>
    <div className="container py-8 max-w-5xl space-y-6">
      <div className="panel-lg p-8 md:p-12 text-center bg-gradient-pink-glow">
        <h1 className="font-display text-3xl md:text-5xl font-bold">Partner with us</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Streamers, communities, and resellers — earn up to 12% on every verified delivery.
        </p>
        <button className="mt-6 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill hover:scale-105 transition">
          Apply now
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: TrendingUp, title: "Up to 12%", text: "Tiered revenue share" },
          { icon: Users, title: "150k+ buyers", text: "Active monthly audience" },
          { icon: Zap, title: "Instant tracking", text: "Real-time analytics dashboard" },
          { icon: Handshake, title: "Dedicated PM", text: "Personal account manager" },
        ].map((b) => (
          <div key={b.title} className="panel p-5 text-center">
            <div className="h-12 w-12 mx-auto rounded-2xl bg-accent grid place-items-center mb-3">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="font-display font-semibold">{b.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{b.text}</div>
          </div>
        ))}
      </div>
    </div>
  </SiteLayout>
);

export default Partnership;

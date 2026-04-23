import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const Contacts = () => (
  <SiteLayout>
    <div className="container py-8 max-w-5xl space-y-6">
      <div className="panel-lg p-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Contacts</h1>
        <p className="mt-2 text-muted-foreground">We reply within 1 business hour, 7 days a week.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, title: "Email", text: "support@gamersunlimited.store" },
            { icon: MessageCircle, title: "Live chat", text: "Available in your Order page" },
            { icon: Clock, title: "Hours", text: "24/7 — even weekends" },
            { icon: MapPin, title: "HQ", text: "Singapore · Remote-first" },
          ].map((c) => (
            <div key={c.title} className="panel p-5 flex gap-4">
              <div className="h-11 w-11 rounded-2xl bg-accent grid place-items-center shrink-0">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
        <form className="panel-lg p-6 md:p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-display text-xl font-bold">Send us a message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Name" />
            <input type="email" className="px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Email" />
          </div>
          <input className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Subject" />
          <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="How can we help?" />
          <button className="px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
            Send message
          </button>
        </form>
      </div>
    </div>
  </SiteLayout>
);

export default Contacts;

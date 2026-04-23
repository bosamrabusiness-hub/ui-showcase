import { SiteLayout } from "@/components/site/SiteLayout";
import { reviews } from "@/lib/mock-data";
import { Star } from "lucide-react";

const Reviews = () => (
  <SiteLayout>
    <div className="container py-8 space-y-6">
      <div className="panel-lg p-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Customer reviews</h1>
        <p className="mt-2 text-muted-foreground">Real feedback from verified buyers.</p>
        <div className="mt-4 inline-flex items-center gap-2 chip bg-accent text-accent-foreground">
          <Star className="h-4 w-4 fill-warning text-warning" /> 4.8 / 5 average · 12,400+ reviews
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[...reviews, ...reviews].map((r, i) => (
          <div key={`${r.id}-${i}`} className="panel p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary text-white grid place-items-center font-display font-semibold">
                  {r.user.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{r.user}</div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground mb-2">{r.product}</div>
            <p className="text-sm text-foreground/85">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </SiteLayout>
);

export default Reviews;

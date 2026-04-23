import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

interface Item { slug: string; title: string; excerpt: string; date: string; cover: string; category: string; }

export const EditorialList = ({
  title,
  subtitle,
  items,
  basePath,
}: {
  title: string;
  subtitle: string;
  items: Item[];
  basePath: string;
}) => {
  return (
    <SiteLayout>
      <div className="container py-8 space-y-6">
        <div className="panel-lg p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.slug}
              to={`${basePath}/${it.slug}`}
              className="panel overflow-hidden group hover:-translate-y-1 hover:shadow-card-hover transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={it.cover} alt={it.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="chip bg-accent text-accent-foreground">{it.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {it.date}</span>
                </div>
                <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{it.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

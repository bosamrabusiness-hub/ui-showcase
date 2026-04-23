import { SiteLayout } from "@/components/site/SiteLayout";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

interface Item { slug: string; title: string; date: string; cover: string; category: string; excerpt: string; }

export const EditorialDetail = ({
  items,
  basePath,
  notFoundLabel,
}: {
  items: Item[];
  basePath: string;
  notFoundLabel: string;
}) => {
  const { slug } = useParams();
  const item = items.find((i) => i.slug === slug);

  if (!item) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold">{notFoundLabel}</h1>
          <Link to={basePath} className="mt-6 inline-block px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
            Back
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container py-6 max-w-3xl">
        <Link to={basePath} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <article className="panel-lg overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden">
            <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="chip bg-accent text-accent-foreground">{item.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">{item.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{item.excerpt}</p>
            <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
              <p>This is a sample editorial body. The full layout supports rich content including paragraphs, lists, quotes, and embedded media.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                "We deliver licenses through a chat-first verification flow that keeps every step transparent."
              </blockquote>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </article>
      </div>
    </SiteLayout>
  );
};

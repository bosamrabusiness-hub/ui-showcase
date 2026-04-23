import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/lib/mock-data";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group relative panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.cover}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.discount && (
            <div className="absolute top-3 left-3 chip bg-gradient-primary text-white shadow-pill">
              -{product.discount}%
            </div>
          )}
          <div className="absolute top-3 right-3 chip bg-black/55 text-white backdrop-blur-sm">
            <Star className="h-3 w-3 fill-warning text-warning" /> {product.rating}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-1.5">
          <span>{product.category}</span>
          <span>·</span>
          <span>{product.platform}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display font-semibold text-base leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.shortDesc}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-xs line-through text-muted-foreground">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <Link
            to={`/orders/new?product=${product.slug}`}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-primary text-white shadow-pill hover:shadow-card-hover transition-all"
          >
            BUY
          </Link>
        </div>
      </div>
    </article>
  );
};

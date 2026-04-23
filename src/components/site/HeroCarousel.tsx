import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroes } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const HeroCarousel = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroes.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (n: number) => setIdx((idx + n + heroes.length) % heroes.length);

  return (
    <div className="relative aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] overflow-hidden rounded-[1.75rem] panel-lg">
      {heroes.map((h, i) => (
        <div
          key={h.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <img src={h.image} alt={h.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end max-w-2xl">
            <span className="chip bg-gradient-primary text-white shadow-pill w-fit mb-3">{h.tag}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {h.title}
            </h1>
            <p className="mt-2 text-white/80 text-sm sm:text-base">{h.subtitle}</p>
            <div className="mt-5 flex gap-3">
              <Link to="/catalog" className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill hover:scale-105 transition">
                Shop now
              </Link>
              <Link to="/news" className="px-5 py-2.5 rounded-full bg-white/15 text-white text-sm font-semibold backdrop-blur-sm hover:bg-white/25 transition">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => go(-1)}
        className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition"
        aria-label="Prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {heroes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";

interface PillTabsProps<T extends string> {
  tabs: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
}

export function PillTabs<T extends string>({ tabs, value, onChange, className }: PillTabsProps<T>) {
  return (
    <div className={cn("inline-flex p-1 rounded-full bg-muted/70 backdrop-blur-sm", className)}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            onClick={() => onChange(t.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              active
                ? "bg-gradient-primary text-white shadow-pill"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

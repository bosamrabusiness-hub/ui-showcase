import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const AuthLayout = ({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) => (
  <div className="min-h-screen grid lg:grid-cols-2">
    <div className="hidden lg:block relative overflow-hidden bg-gradient-header">
      <div className="absolute inset-0 bg-gradient-pink-glow" />
      <div className="relative z-10 h-full flex flex-col p-12 text-white">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center font-display font-bold">G</div>
          <span className="font-display text-lg font-semibold">Gamers<span className="gradient-text">Unlimited</span></span>
        </Link>
        <div className="mt-auto">
          <h2 className="font-display text-4xl font-bold leading-tight max-w-md">
            Verified delivery, <span className="gradient-text">chat-first</span>.
          </h2>
          <p className="mt-3 text-white/70 max-w-md">
            12,400+ deliveries · 4.8★ average · Full warranty included.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
      <div className="w-full max-w-sm">
        <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center text-white font-display font-bold">G</div>
          <span className="font-display text-lg font-semibold">Gamers<span className="gradient-text">Unlimited</span></span>
        </Link>
        <h1 className="font-display text-2xl md:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        <div className="mt-6">{children}</div>
        {footer && <div className="mt-6 text-sm text-center text-muted-foreground">{footer}</div>}
      </div>
    </div>
  </div>
);

import { SiteLayout } from "@/components/site/SiteLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const OrderBridge = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/account/orders/ord_002"), 1400);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <SiteLayout>
      <div className="container py-20 max-w-md text-center">
        <div className="panel-lg p-10">
          <div className="h-12 w-12 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin mb-4" />
          <h1 className="font-display text-xl font-bold">Creating your order…</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Setting up your purchase chat for <span className="font-mono">{params.get("product") ?? "your item"}</span>.
          </p>
          <div className="mt-6 space-y-2">
            <div className="h-3 rounded-full skeleton-shimmer" />
            <div className="h-3 rounded-full skeleton-shimmer w-4/5" />
            <div className="h-3 rounded-full skeleton-shimmer w-3/5" />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default OrderBridge;

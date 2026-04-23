import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const OrderCreated = () => (
  <SiteLayout>
    <div className="container py-16 max-w-lg text-center">
      <div className="panel-lg p-10 animate-scale-in">
        <CheckCircle2 className="h-14 w-14 text-success mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold">Order created</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Your purchase chat is ready. Continue there to complete payment and attach proof.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/account/orders/ord_002" className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
            Go to purchase chat
          </Link>
          <Link to="/catalog" className="px-5 py-2.5 rounded-full bg-muted text-foreground text-sm font-semibold hover:bg-accent transition">
            Back to catalog
          </Link>
        </div>
      </div>
    </div>
  </SiteLayout>
);

export default OrderCreated;

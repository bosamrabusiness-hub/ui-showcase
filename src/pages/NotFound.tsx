import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";

const NotFound = () => (
  <SiteLayout>
    <div className="container py-24 text-center">
      <div className="font-display text-7xl md:text-9xl font-bold gradient-text">404</div>
      <h1 className="mt-2 font-display text-2xl md:text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="mt-6 inline-block px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
        Back home
      </Link>
    </div>
  </SiteLayout>
);

export default NotFound;

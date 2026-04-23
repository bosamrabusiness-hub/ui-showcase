import { Gift } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingSupport = () => (
  <Link
    to="/help"
    className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary text-white grid place-items-center shadow-float animate-pulse-ring hover:scale-105 transition-transform z-30"
    aria-label="Need help?"
  >
    <Gift className="h-6 w-6" />
  </Link>
);

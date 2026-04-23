import { Link, useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-header text-white p-6">
      <div className="absolute inset-0 bg-gradient-pink-glow pointer-events-none" />
      <div className="relative w-full max-w-sm panel-lg p-8 bg-card text-foreground">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary text-white grid place-items-center font-display font-bold">G</div>
          <span className="font-display font-semibold">Admin Console</span>
        </div>
        <h1 className="font-display text-2xl font-bold flex items-center gap-2"><Lock className="h-5 w-5 text-primary" /> Sign in</h1>
        <p className="text-sm text-muted-foreground mt-1">Restricted area. Audit-logged.</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/admin/orders"); }}>
          <input className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Admin email" />
          <input type="password" className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Password" />
          <button className="w-full px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
            Sign in
          </button>
        </form>
        <Link to="/" className="block mt-4 text-xs text-center text-muted-foreground hover:text-primary">← Back to store</Link>
      </div>
    </div>
  );
};

export default AdminLogin;

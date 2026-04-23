import { AuthLayout } from "@/components/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your orders and license reveal."
      footer={<>Don't have an account? <Link to="/auth/register" className="text-primary font-medium">Create one</Link></>}
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/account/orders"); }}>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Email</label>
          <input type="email" required className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="you@email.com" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground">Password</label>
            <Link to="/auth/forgot-password" className="text-xs text-primary">Forgot?</Link>
          </div>
          <input type="password" required className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="••••••••" />
        </div>
        <button className="w-full px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;

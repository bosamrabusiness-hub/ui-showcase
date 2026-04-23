import { AuthLayout } from "@/components/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start buying with verified, chat-first delivery."
      footer={<>Already have an account? <Link to="/auth/login" className="text-primary font-medium">Sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/auth/login"); }}>
        <input className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Display name" />
        <input type="email" className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Email" />
        <input type="password" className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Password" />
        <p className="text-xs text-muted-foreground">By signing up you agree to our Terms and Privacy Policy.</p>
        <button className="w-full px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
          Create account
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;

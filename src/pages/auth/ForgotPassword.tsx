import { AuthLayout } from "@/components/auth/AuthLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll email you a secure reset link."
      footer={<><Link to="/auth/login" className="text-primary font-medium">Back to sign in</Link></>}
    >
      {!sent ? (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input type="email" required className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="you@email.com" />
          <button className="w-full px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
            Send reset link
          </button>
        </form>
      ) : (
        <div className="panel p-6 text-center animate-scale-in">
          <CheckCircle2 className="h-10 w-10 text-success mx-auto mb-3" />
          <h3 className="font-display font-semibold text-lg">Check your email</h3>
          <p className="mt-1 text-sm text-muted-foreground">If an account exists, a reset link is on its way.</p>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;

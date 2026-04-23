import { AuthLayout } from "@/components/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Set a new password"
      subtitle="Choose a strong password you haven't used before."
      footer={<><Link to="/auth/login" className="text-primary font-medium">Back to sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/auth/login"); }}>
        <input type="password" className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="New password" />
        <input type="password" className="w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Confirm new password" />
        <button className="w-full px-5 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-pill">
          Update password
        </button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;

import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const [name, setName] = useState("Marcus L.");
  return (
    <SiteLayout>
      <div className="container py-8 max-w-2xl space-y-5">
        <div className="panel-lg p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-primary text-white grid place-items-center font-display font-bold text-xl">
              {name.charAt(0)}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">{name}</h1>
              <p className="text-sm text-muted-foreground">marcus@example.com</p>
            </div>
          </div>
        </div>

        <form
          className="panel-lg p-6 md:p-8 space-y-4"
          onSubmit={(e) => { e.preventDefault(); toast.success("Profile saved"); }}
        >
          <h2 className="font-display font-bold flex items-center gap-2"><User className="h-4 w-4" /> Account details</h2>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Email</label>
            <input value="marcus@example.com" disabled className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-muted-foreground" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Display name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl bg-background-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
          </div>
          <div className="flex gap-3 pt-2">
            <button className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-pill">
              Save changes
            </button>
            <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-foreground text-sm font-semibold hover:bg-accent transition">
              <LogOut className="h-4 w-4" /> Logout
            </Link>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
};

export default Profile;

import { cn } from "@/lib/utils";
import type { OrderStatus } from "@/lib/mock-data";
import { Check, Clock, Upload, AlertTriangle, ShieldCheck, PackageCheck } from "lucide-react";

const config: Record<OrderStatus, { label: string; cls: string; icon: typeof Check }> = {
  PENDING_PAYMENT: { label: "Pending payment", cls: "bg-warning/15 text-warning border-warning/30", icon: Clock },
  PROOF_UPLOADED: { label: "Proof uploaded", cls: "bg-info/15 text-info border-info/30", icon: Upload },
  UNDER_REVIEW: { label: "Under review", cls: "bg-info/15 text-info border-info/30", icon: ShieldCheck },
  REJECTED_NEEDS_PROOF: { label: "Needs new proof", cls: "bg-destructive/15 text-destructive border-destructive/30", icon: AlertTriangle },
  APPROVED: { label: "Approved", cls: "bg-success/15 text-success border-success/30", icon: Check },
  DELIVERED: { label: "Delivered", cls: "bg-success/15 text-success border-success/30", icon: PackageCheck },
};

export const StatusBadge = ({ status, className }: { status: OrderStatus; className?: string }) => {
  const { label, cls, icon: Icon } = config[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border", cls, className)}>
      <Icon className="h-3.5 w-3.5" /> {label}
    </span>
  );
};

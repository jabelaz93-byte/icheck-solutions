import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ---------- Tag: who does a workflow step ---------- */

export type StepKind = "automated" | "ai" | "human";

const tagStyles: Record<StepKind, { className: string; label: string }> = {
  automated: { className: "bg-blue-600", label: "Automated" },
  ai: { className: "bg-teal-700", label: "AI-powered" },
  human: { className: "bg-ink", label: "Human-checked" },
};

export function Tag({
  kind,
  children,
  className,
}: {
  kind: StepKind;
  children?: ReactNode;
  className?: string;
}) {
  const style = tagStyles[kind];
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-chip px-[9px] py-[3px] text-[11px] font-bold tracking-[0.02em] text-white",
        style.className,
        className,
      )}
    >
      {children ?? style.label}
    </span>
  );
}

/* ---------- StatusChip: patient verification status ---------- */

export type PatientStatus =
  | "eligible"
  | "newPlan"
  | "notEligible"
  | "insufficient"
  | "action"
  | "none";

export const statusMeta: Record<
  PatientStatus,
  { label: string; fill: string; dot: string }
> = {
  eligible: {
    label: "Eligible",
    fill: "bg-status-eligible",
    dot: "before:bg-status-eligible",
  },
  newPlan: {
    label: "New Plan",
    fill: "bg-status-new-plan",
    dot: "before:bg-status-new-plan",
  },
  notEligible: {
    label: "Not Eligible",
    fill: "bg-status-not-eligible",
    dot: "before:bg-status-not-eligible",
  },
  insufficient: {
    label: "Insufficient",
    fill: "bg-status-insufficient",
    dot: "before:bg-status-insufficient",
  },
  action: {
    label: "Client Action",
    fill: "bg-status-action",
    dot: "before:bg-status-action",
  },
  none: {
    label: "No Action Required",
    fill: "bg-status-none",
    dot: "before:bg-status-none",
  },
};

export function StatusChip({
  status,
  className,
}: {
  status: PatientStatus;
  className?: string;
}) {
  const meta = statusMeta[status];
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-chip px-[9px] py-[3px] text-[11px] font-bold text-white",
        meta.fill,
        className,
      )}
    >
      {meta.label}
    </span>
  );
}

/* ---------- AnnouncementPill: one per page, above the hero ---------- */

export function AnnouncementPill({
  badge,
  children,
  href,
}: {
  badge: string;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <span className="rounded-full bg-ink px-2.5 py-[3px] text-[11px] font-bold tracking-[0.08em] text-white">
        {badge}
      </span>
      {children}
    </>
  );
  const classes =
    "inline-flex items-center gap-2.5 rounded-full border border-rule-strong bg-white py-1.5 pr-3.5 pl-1.5 text-[13px] text-ink";
  return href ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <span className={classes}>{content}</span>
  );
}

/* ---------- FilterChip: toggle inside product UI ---------- */

export function FilterChip({
  pressed = false,
  className,
  type = "button",
  ...props
}: { pressed?: boolean } & ComponentProps<"button">) {
  return (
    <button
      type={type}
      aria-pressed={pressed}
      className={cn(
        "inline-flex items-center rounded-chip border px-3 py-1.5 text-xs",
        pressed
          ? "border-ink bg-ink font-bold text-white"
          : "border-line bg-white text-ink",
        className,
      )}
      {...props}
    />
  );
}

/* ---------- Highlight: key fact inside product UI copy ---------- */

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="bg-highlight px-[3px]">{children}</span>;
}

/* ---------- LiveBadge ---------- */

export function LiveBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-chip bg-ink px-2.5 py-1 text-xs font-bold text-white before:size-[7px] before:rounded-full before:bg-teal-300">
      {children}
    </span>
  );
}

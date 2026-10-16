import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./Button";
import {
  FilterChip,
  Highlight,
  LiveBadge,
  type PatientStatus,
  StatusChip,
  statusMeta,
  Tag,
} from "./Labels";

/* ---------- ProductCard: floating white UI card ---------- */

export function ProductCard({
  title,
  meta,
  tone = "cool",
  className,
  children,
}: {
  title?: ReactNode;
  meta?: ReactNode;
  /** cool = on Ocean/Mixed art, warm = on Sunset art, flat = on paper. */
  tone?: "cool" | "warm" | "flat";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card bg-white text-[13px] leading-[1.55] text-ink",
        tone === "cool" && "shadow-float",
        tone === "warm" && "shadow-warm",
        tone === "flat" && "border border-line",
        className,
      )}
    >
      {(title || meta) && (
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-line px-[18px] py-3">
          {title && (
            <span className="font-display text-sm font-semibold">{title}</span>
          )}
          {meta}
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------- VerificationQueue: the hero table mockup ---------- */

export type QueueRow = {
  time: string;
  patient: string;
  plan: string;
  status: PatientStatus;
  result: string;
  selected?: boolean;
};

export const sampleQueue: QueueRow[] = [
  { time: "8:30", patient: "Patient A.", plan: "PPO", status: "eligible", result: "Snapshot · written back" },
  { time: "9:00", patient: "Patient B.", plan: "PPO", status: "newPlan", result: "Full PDF in progress", selected: true },
  { time: "9:45", patient: "Patient C.", plan: "HMO", status: "notEligible", result: "Root cause flagged" },
  { time: "10:15", patient: "Patient D.", plan: "PPO", status: "action", result: "Phone verification" },
  { time: "11:00", patient: "Patient E.", plan: "PPO", status: "eligible", result: "QA checked by a person" },
];

const rowGrid = "grid grid-cols-[64px_1.1fr_0.8fr_1fr_1.3fr] items-center gap-2.5 px-[18px]";

export function VerificationQueue({
  rows = sampleQueue,
  title = "Verification queue",
  count = "Today · 42 appointments",
}: {
  rows?: QueueRow[];
  title?: string;
  count?: string;
}) {
  return (
    <ProductCard
      title={
        <span className="flex items-center gap-2.5">
          {title}
          <span className="rounded-chip bg-blue-100 px-2 py-0.5 font-sans text-xs font-normal">
            {count}
          </span>
        </span>
      }
      meta={<LiveBadge>Live · syncs every 15 min</LiveBadge>}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className={cn(rowGrid, "border-b border-line py-2.5 text-left text-[11px] uppercase tracking-[0.1em]")}>
              <th scope="col" className="font-normal">Appt</th>
              <th scope="col" className="font-normal">Patient</th>
              <th scope="col" className="font-normal">Plan</th>
              <th scope="col" className="font-normal">Status</th>
              <th scope="col" className="font-normal">iCheck</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={`${row.time}-${row.patient}`}
                className={cn(rowGrid, "border-b border-[#f2f4f7] py-[11px] last:border-b-0", row.selected && "bg-[#f3f7ff]")}
              >
                <td>{row.time}</td>
                <td className={cn(row.selected && "font-bold")}>{row.patient}</td>
                <td>{row.plan}</td>
                <td>
                  <StatusChip status={row.status} />
                </td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mx-[18px] mt-3.5 mb-[18px] rounded-[10px] border border-line px-3.5 py-3">
        Ask iCheck about this patient's coverage…
      </p>
    </ProductCard>
  );
}

/* ---------- AssistantPanel: AI explains one patient ---------- */

export function AssistantPanel({ className }: { className?: string }) {
  return (
    <ProductCard className={cn("flex flex-col", className)}>
      <div className="flex flex-1 flex-col gap-3 p-[18px]">
        <div className="flex items-center justify-between">
          <span className="font-display text-[15px] font-semibold">
            iCheck Assistant
          </span>
          <span className="rounded-chip bg-blue-100 px-2 py-0.5 text-[11px]">
            Patient B.
          </span>
        </div>
        <p className="m-0 font-bold">What we found</p>
        <p className="m-0">
          New PPO plan on file since the last visit. Coverage is{" "}
          <Highlight>active</Highlight>, patient match confirmed, waiting
          periods and age limits checked.
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Tag kind="human">Snapshot · under 2 min</Tag>
          <span className="rounded-chip bg-blue-100 px-2 py-[3px] text-[11px]">
            Full PDF · within 2 hrs
          </span>
        </div>
        <p className="mt-1.5 mb-0 font-bold">Next step</p>
        <p className="m-0">
          New plan created and attached to the patient profile. Remaining
          benefits updated in the PMS.
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-2.5">
          <span className="text-xs">Sent to QA sample</span>
          <ButtonLink href="#how" variant="accent" size="sm">
            Write back to PMS
          </ButtonLink>
        </div>
      </div>
    </ProductCard>
  );
}

/* ---------- StatusBoard: six statuses at a glance ---------- */

const boardOrder: PatientStatus[] = [
  "eligible",
  "newPlan",
  "notEligible",
  "insufficient",
  "action",
  "none",
];

export function StatusBoard({ className }: { className?: string }) {
  return (
    <ProductCard
      tone="warm"
      title="Patient status board"
      meta={<span className="text-[11px]">Updated daily</span>}
      className={cn("w-full max-w-[420px]", className)}
    >
      <div className="p-[18px]">
        <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 text-xs font-bold">
          {boardOrder.map((s) => (
            <li
              key={s}
              className={cn(
                "flex items-center gap-2 rounded-lg bg-blue-100 p-2.5 before:size-2 before:flex-none before:rounded-[2px]",
                statusMeta[s].dot,
              )}
            >
              {statusMeta[s].label}
            </li>
          ))}
        </ul>
        <p className="mt-3 mb-0">
          Cancelled appointments removed, new insurance from notes picked up,
          and an end-of-day status update sent to your team.
        </p>
      </div>
    </ProductCard>
  );
}

/* ---------- QueueFilters: FilterChip row used inside product UI ---------- */

export function QueueFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      <FilterChip pressed>Today's appointments</FilterChip>
      <FilterChip>Same-day</FilterChip>
      <FilterChip>Needs action</FilterChip>
      <FilterChip>Denials</FilterChip>
    </div>
  );
}

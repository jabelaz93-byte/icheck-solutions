import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { type StepKind, Tag } from "./Labels";

/* ---------- FeatureList: square-bullet benefits beside an ArtPanel ---------- */

export type Feature = { title: string; detail: string };

export function FeatureList({
  items,
  className,
}: {
  items: Feature[];
  className?: string;
}) {
  return (
    <ul className={cn("m-0 flex list-none flex-col gap-[22px] p-0", className)}>
      {items.map((item) => (
        <li key={item.title} className="grid grid-cols-[14px_1fr] gap-2.5">
          <span aria-hidden="true" className="mt-[7px] size-[7px] bg-ink" />
          <div>
            <p className="m-0 text-[15px] font-bold">{item.title}</p>
            <p className="mt-1 mb-0 text-sm leading-relaxed">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- StatRow: big thin numbers between hairlines ---------- */

export type Stat = { value: string; label: string };

export function StatRow({
  stats,
  onDark = false,
  className,
}: {
  stats: Stat[];
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] border-t",
        onDark ? "border-white/60" : "border-ink",
        className,
      )}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "pt-3.5 pr-3",
            i > 0 &&
              cn("border-l pl-3", onDark ? "border-white/25" : "border-rule-strong"),
          )}
        >
          <p className="m-0 font-display text-[clamp(2rem,4vw,3rem)] font-extralight leading-none tracking-[-0.03em]">
            {stat.value}
          </p>
          <p className="mt-2 mb-0 text-[13px]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- QuoteHighlight: statement with one marked phrase ---------- */

export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="bg-blue-600 px-1.5 text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
      {children}
    </span>
  );
}

export function QuoteHighlight({
  children,
  source,
  role,
  className,
}: {
  /** The statement. Wrap the key phrase in <Mark>. */
  children: ReactNode;
  source: string;
  role?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "m-0 flex flex-wrap items-end justify-between gap-10",
        className,
      )}
    >
      <blockquote className="m-0 min-w-0 flex-[1_1_560px] font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-[1.2] tracking-[-0.03em]">
        {children}
      </blockquote>
      <figcaption className="flex-[0_1_260px] border-t border-ink pt-3.5 text-[13px] leading-normal">
        <strong>{source}</strong>
        {role && (
          <>
            <br />
            {role}
          </>
        )}
      </figcaption>
    </figure>
  );
}

/* ---------- StepList: the official workflow ---------- */

export type Step = { title: string; kind: StepKind };

export const workflowSteps: Step[] = [
  { title: "Pick up tickets", kind: "automated" },
  { title: "Prioritize by appointment", kind: "automated" },
  { title: "Find the patient's plan", kind: "ai" },
  { title: "Read coverage into your form", kind: "ai" },
  { title: "PDF & QA audit", kind: "human" },
  { title: "Write back to your PMS", kind: "automated" },
];

export function StepList({
  steps = workflowSteps,
  className,
}: {
  steps?: Step[];
  className?: string;
}) {
  return (
    <ol className={cn("m-0 flex list-none flex-col p-0", className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="grid grid-cols-[40px_1fr_auto] items-baseline gap-2 border-t border-rule-strong py-3.5 last:border-b"
        >
          <span className="font-display">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-bold">{step.title}</span>
          <Tag kind={step.kind} />
        </li>
      ))}
    </ol>
  );
}

/* ---------- TeamCard ---------- */

export function TeamCard({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  /** Path under /public, e.g. "/team/paul.jpg". */
  photo: string;
}) {
  return (
    <figure className="m-0">
      <Image
        src={photo}
        alt={name}
        width={600}
        height={750}
        className="aspect-[4/5] w-full rounded-chip object-cover object-top"
      />
      <figcaption>
        <p className="mt-3 mb-0 font-bold">{name}</p>
        <p className="mt-0.5 mb-0 text-[13px]">{role}</p>
      </figcaption>
    </figure>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Uppercase label above headings and in footer columns. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "m-0 text-[11px] font-bold uppercase tracking-[0.16em]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Sora 300 headline. Wrap ONE phrase in <strong> to set it at 600:
 * <Heading>Checked by people, <strong>to the standard you set</strong></Heading>
 */
const headingSizes = {
  section: "text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.04em]",
  display: "text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.02] tracking-[-0.045em]",
  hero: "text-[clamp(2.6rem,6.6vw,5.5rem)] leading-none tracking-[-0.045em]",
};

export function Heading({
  as: Tag = "h2",
  hero = false,
  size,
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  /** Shorthand for size="hero". */
  hero?: boolean;
  size?: keyof typeof headingSizes;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "m-0 font-display font-light text-balance [&_strong]:font-semibold",
        headingSizes[size ?? (hero ? "hero" : "section")],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({
  large = false,
  children,
  className,
}: {
  /** Hero and closing call-to-action copy. */
  large?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-[18px] max-w-[600px] leading-[1.65]",
        large ? "text-[clamp(1rem,1.5vw,1.15rem)]" : "text-[15px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Eyebrow + Heading + Lede, with an optional illustration at the top right. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  illustration,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  illustration?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-start justify-between gap-6",
        className,
      )}
    >
      <div className="max-w-[640px]">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <Heading>{title}</Heading>
        {lede && <Lede>{lede}</Lede>}
      </div>
      {illustration}
    </div>
  );
}

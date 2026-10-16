import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./Button";

/* ---------- TrialBanner: navy band with art streaks ---------- */

export function TrialBanner({
  title = (
    <>
      Try iCheck <strong>risk-free</strong> for 2 weeks
    </>
  ),
  body = "Run a full trial on your own data before committing to anything. No cost, no obligation.",
  ctaLabel = "Start free trial",
  ctaHref = "#contact",
  className,
}: {
  title?: ReactNode;
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center gap-6 overflow-hidden rounded-chip bg-navy p-[clamp(24px,4vw,40px)] text-white",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute top-0 right-0 h-full w-[70%] [mask-image:linear-gradient(90deg,transparent,#000_40%)]"
      >
        <defs>
          <filter id={`band-${id}`} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.004 0.02" numOctaves={3} seed={3} />
            <feDisplacementMap in="SourceGraphic" scale={200} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter={`url(#band-${id})`}>
          <rect x="300" y="60" width="900" height="70" fill="#2f8cf0" />
          <rect x="250" y="130" width="950" height="60" fill="#f3a64b" />
          <rect x="350" y="190" width="850" height="50" fill="#ec6fae" />
          <rect x="400" y="20" width="800" height="40" fill="#2bd4c4" />
        </g>
      </svg>
      <div className="relative min-w-0 flex-[1_1_360px]">
        <p className="m-0 font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-light leading-[1.15] tracking-[-0.03em] [&_strong]:font-semibold">
          {title}
        </p>
        <p className="mt-2.5 mb-0 max-w-[460px] text-sm leading-relaxed">{body}</p>
      </div>
      <ButtonLink href={ctaHref} variant="inverse" size="sm" className="relative">
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}

/* ---------- FeatureCard: capability card with icon ---------- */

export function FeatureCard({
  icon,
  iconTone = "blue",
  title,
  children,
}: {
  icon: ReactNode;
  iconTone?: "blue" | "teal" | "navy";
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-feature border border-line bg-white p-7">
      <div
        className={cn(
          "flex size-11 items-center justify-center rounded-xl text-white",
          iconTone === "blue" && "bg-blue-600",
          iconTone === "teal" && "bg-teal-700",
          iconTone === "navy" && "bg-navy",
        )}
      >
        {icon}
      </div>
      <h3 className="mt-[18px] mb-2 font-display text-xl font-semibold">{title}</h3>
      <p className="m-0 text-[15px] leading-relaxed">{children}</p>
    </div>
  );
}

/* ---------- Icons: 24px stroke icons, currentColor ---------- */

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Icons = {
  search: () => (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  ),
  document: () => (
    <svg {...iconProps}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M10 12h6M10 16h6" />
    </svg>
  ),
  alert: () => (
    <svg {...iconProps}>
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  payment: () => (
    <svg {...iconProps}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  patient: () => (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  ),
  trend: () => (
    <svg {...iconProps}>
      <path d="M4 19h16" />
      <path d="M6 15l4-4 3 3 5-6" />
    </svg>
  ),
  cloud: () => (
    <svg {...iconProps}>
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 9.5 4.25 4.25 0 0 0 7 18z" />
    </svg>
  ),
  lock: () => (
    <svg {...iconProps}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  check: () => (
    <svg {...iconProps}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
};

/* ---------- InkIllustration: etched black drawings ---------- */

const TOOTH =
  "M100 40 C 86 28, 66 22, 50 26 C 30 31, 20 50, 22 74 C 24 98, 34 114, 40 130 C 46 148, 48 174, 54 198 C 58 214, 74 216, 78 200 C 82 184, 86 162, 92 152 C 96 146, 104 146, 108 152 C 114 162, 118 184, 122 200 C 126 216, 142 214, 146 198 C 152 174, 154 148, 160 130 C 166 114, 176 98, 178 74 C 180 50, 170 31, 150 26 C 134 22, 114 28, 100 40 Z";

export function InkTooth({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      width="150"
      height="170"
      viewBox="0 0 200 230"
      fill="none"
      className={className}
    >
      <defs>
        <clipPath id={`tooth-${id}`}>
          <path d={TOOTH} />
        </clipPath>
        <pattern
          id={`hatch-${id}`}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(38)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#111111" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect x="104" y="0" width="100" height="230" fill={`url(#hatch-${id})`} clipPath={`url(#tooth-${id})`} />
      <rect x="40" y="150" width="120" height="80" fill={`url(#hatch-${id})`} clipPath={`url(#tooth-${id})`} opacity="0.6" />
      <path d={TOOTH} stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M46 52 C 40 66, 40 84, 46 100" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      <path d="M176 8 L176 30 M165 19 L187 19 M186 46 L186 58 M180 52 L192 52" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 140 C 18 132, 14 120, 4 118 M12 168 C 26 160, 22 146, 10 142" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function InkBurst({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="170"
      height="150"
      viewBox="0 0 220 190"
      fill="none"
      stroke="#111111"
      strokeLinecap="round"
      className={className}
    >
      <path d="M110 95 C 80 60, 40 50, 12 62" strokeWidth="5" />
      <path d="M110 95 C 120 55, 150 20, 190 14" strokeWidth="3.5" />
      <path d="M110 95 C 150 90, 185 110, 208 140" strokeWidth="6" />
      <path d="M110 95 C 95 130, 70 160, 40 178" strokeWidth="3" />
      <path d="M110 95 C 130 125, 140 150, 150 182" strokeWidth="2.2" />
      <path d="M110 95 C 70 98, 40 112, 18 126" strokeWidth="2" />
      <path d="M110 95 C 100 60, 96 34, 100 6" strokeWidth="2.6" />
      <circle cx="110" cy="95" r="12" fill="#111111" />
      <circle cx="190" cy="14" r="4" fill="#111111" />
      <circle cx="40" cy="178" r="5" fill="#111111" />
      <circle cx="208" cy="140" r="4" fill="#111111" />
      <circle cx="12" cy="62" r="3" fill="#111111" />
    </svg>
  );
}

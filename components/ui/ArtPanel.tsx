import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";

export type ArtPalette = "ocean" | "sunset" | "mixed";

type Blob = { cx: number; cy: number; rx: number; ry: number; fill: string };

const palettes: Record<ArtPalette, { base: string; blobs: Blob[] }> = {
  ocean: {
    base: "#dcebfb",
    blobs: [
      { cx: 680, cy: 120, rx: 320, ry: 200, fill: "#1450c8" },
      { cx: 160, cy: 480, rx: 340, ry: 180, fill: "#2bd4c4" },
      { cx: 560, cy: 520, rx: 300, ry: 160, fill: "#7a5fd8" },
      { cx: 140, cy: 100, rx: 260, ry: 160, fill: "#9cd2fa" },
      { cx: 420, cy: 300, rx: 200, ry: 130, fill: "#f6fbff" },
    ],
  },
  sunset: {
    base: "#fde8cf",
    blobs: [
      { cx: 120, cy: 120, rx: 300, ry: 200, fill: "#ec6fae" },
      { cx: 640, cy: 160, rx: 300, ry: 180, fill: "#f3a64b" },
      { cx: 420, cy: 520, rx: 380, ry: 160, fill: "#ffd27a" },
      { cx: 80, cy: 520, rx: 220, ry: 140, fill: "#c94a2c" },
      { cx: 420, cy: 300, rx: 200, ry: 120, fill: "#fff7ee" },
    ],
  },
  mixed: {
    base: "#e7eefb",
    blobs: [
      { cx: 110, cy: 450, rx: 300, ry: 200, fill: "#0d3a9e" },
      { cx: 370, cy: 550, rx: 280, ry: 120, fill: "#2f8cf0" },
      { cx: 500, cy: 100, rx: 280, ry: 130, fill: "#9cd2fa" },
      { cx: 720, cy: 350, rx: 250, ry: 190, fill: "#f3a64b" },
      { cx: 620, cy: 560, rx: 200, ry: 100, fill: "#ec6fae" },
      { cx: 250, cy: 100, rx: 200, ry: 100, fill: "#2bd4c4" },
      { cx: 560, cy: 250, rx: 150, ry: 100, fill: "#fff4e6" },
      { cx: 50, cy: 80, rx: 160, ry: 110, fill: "#7a5fd8" },
    ],
  },
};

/** A free-floating marbled blob, used as decoration at section edges. */
export function ArtBlob({
  palette = "ocean",
  seed = 2,
  className,
}: {
  palette?: Exclude<ArtPalette, "mixed">;
  seed?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const fills =
    palette === "ocean"
      ? ["#2f8cf0", "#2bd4c4", "#7a5fd8"]
      : ["#f3a64b", "#ec6fae", "#ffd27a"];
  return (
    <svg aria-hidden="true" viewBox="0 0 400 500" className={className}>
      <defs>
        <filter id={`blob-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves={3} seed={seed} />
          <feDisplacementMap in="SourceGraphic" scale={120} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#blob-${id})`}>
        <ellipse cx="200" cy="250" rx="145" ry="195" fill={fills[0]} />
        <ellipse cx="205" cy="175" rx="90" ry="115" fill={fills[1]} />
        <ellipse cx="200" cy="345" rx="85" ry="85" fill={fills[2]} />
      </g>
    </svg>
  );
}

/**
 * Marbled, painterly background made with an SVG turbulence filter.
 * Put white product cards inside it; never place text directly on the art.
 * Change `seed` for a different painting.
 */
export function ArtPanel({
  palette = "ocean",
  seed = 5,
  grain = false,
  minHeight = 320,
  className,
  children,
}: {
  palette?: ArtPalette;
  seed?: number;
  grain?: boolean;
  /** Minimum height in px. */
  minHeight?: number;
  className?: string;
  children?: ReactNode;
}) {
  const id = useId().replace(/:/g, "");
  const { base, blobs } = palettes[palette];
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-chip p-[clamp(24px,4vw,64px)]",
        className,
      )}
      style={{ minHeight }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <defs>
          <filter
            id={`flow-${id}`}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.008"
              numOctaves={4}
              seed={seed}
            />
            <feDisplacementMap
              in="SourceGraphic"
              scale={240}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation={2} />
          </filter>
          {grain && (
            <filter id={`grain-${id}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves={2}
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          )}
        </defs>
        <rect width="800" height="600" fill={base} />
        <g filter={`url(#flow-${id})`}>
          {blobs.map((b) => (
            <ellipse
              key={`${b.cx}-${b.cy}`}
              cx={b.cx}
              cy={b.cy}
              rx={b.rx}
              ry={b.ry}
              fill={b.fill}
            />
          ))}
        </g>
        {grain && (
          <rect
            width="800"
            height="600"
            filter={`url(#grain-${id})`}
            opacity={0.35}
            style={{ mixBlendMode: "overlay" }}
          />
        )}
      </svg>
      <div className="relative w-full">{children}</div>
    </div>
  );
}

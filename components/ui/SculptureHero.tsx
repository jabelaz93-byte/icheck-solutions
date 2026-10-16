import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArtPanel } from "./ArtPanel";

export type Callout = {
  /** Point on the sculpture, in % of the image box. */
  x: number;
  y: number;
  /** Where the label's right edge sits, in % from the image's left. */
  labelX: number;
  eyebrow: string;
  text: string;
  dark?: boolean;
};

export const heroCallouts: Callout[] = [
  { x: 48, y: 30, labelX: 41, eyebrow: "Eligibility", text: "Active · new PPO plan" },
  { x: 34, y: 47, labelX: 24, eyebrow: "Patient match", text: "Confirmed" },
  {
    x: 50,
    y: 69,
    labelX: 30,
    eyebrow: "D1110 · Prophylaxis",
    text: "Preventive · covered 100%",
    dark: true,
  },
];

function CalloutMark({ c }: { c: Callout }) {
  return (
    <>
      <div
        className="absolute border-t-[1.5px] border-dashed border-ink"
        style={{ left: `${c.labelX}%`, top: `${c.y}%`, width: `${c.x - c.labelX}%` }}
      />
      <span
        className="absolute -mt-[5px] -ml-[5px] size-2.5 rounded-full bg-ink shadow-[0_0_0_3px_#ffffff]"
        style={{ left: `${c.x}%`, top: `${c.y}%` }}
      />
      <div
        className={cn(
          "absolute -translate-y-1/2 whitespace-nowrap rounded-btn px-[11px] py-[7px] text-xs leading-[1.35] shadow-[0_12px_30px_rgb(10_31_77/0.25)]",
          c.dark ? "bg-ink text-white" : "bg-white text-ink",
        )}
        style={{ right: `${100 - c.labelX}%`, top: `${c.y}%` }}
      >
        <span className="block text-[10px] uppercase tracking-[0.12em]">
          {c.eyebrow}
        </span>
        <strong>{c.text}</strong>
      </div>
    </>
  );
}

/**
 * Hero stage: a marbled ArtPanel holding product UI, with a marble bust that
 * rises out of the panel's top edge and carries annotation callouts.
 * On narrow screens the bust sits above the panel and the callouts hide.
 */
export function SculptureHero({
  sculpture = "/art/david.png",
  sculptureAlt = "Michelangelo's David, marble bust",
  callouts = heroCallouts,
  footnote,
  children,
}: {
  sculpture?: string;
  sculptureAlt?: string;
  callouts?: Callout[];
  /** Small card near the base of the bust. */
  footnote?: ReactNode;
  /** Product UI shown inside the art panel, on the left. */
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none relative z-[3] mx-auto -mb-1.5 aspect-[2473/2675] w-[78%] md:absolute md:right-[clamp(0px,4vw,64px)] md:bottom-0 md:mx-0 md:mb-0 md:w-[min(44%,680px)]">
        <Image
          src={sculpture}
          alt={sculptureAlt}
          fill
          sizes="(min-width: 768px) 680px, 78vw"
          preload
          className="object-contain drop-shadow-[0_30px_40px_rgb(10_31_77/0.35)]"
        />
        <div className="hidden md:block">
          {callouts.map((c) => (
            <CalloutMark key={c.eyebrow} c={c} />
          ))}
          {footnote && (
            <div className="absolute right-[2%] bottom-[7%] whitespace-nowrap rounded-[10px] bg-white px-3.5 py-2.5 text-xs leading-[1.45] shadow-[0_16px_40px_rgb(10_31_77/0.3)]">
              {footnote}
            </div>
          )}
        </div>
      </div>
      <ArtPanel
        palette="mixed"
        seed={11}
        grain
        minHeight={560}
      >
        <div className="max-w-[min(56%,720px)] text-left max-md:max-w-none">{children}</div>
      </ArtPanel>
    </div>
  );
}

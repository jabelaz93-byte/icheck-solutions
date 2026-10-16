"use client";

import {
  type MouseEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";

/**
 * Slide-in panel built on the native <dialog> element, so focus is trapped,
 * Escape closes it and the page behind becomes inert. Clicking the backdrop
 * or any link inside also closes it.
 */
export function Drawer({
  open,
  onClose,
  title,
  side = "right",
  id,
  className,
  children,
}: {
  open: boolean;
  onClose: () => void;
  /** Accessible name; shown at the top of the panel. */
  title: string;
  side?: "right" | "left";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    const target = event.target as HTMLElement;
    // Backdrop clicks land on the <dialog> itself; link clicks navigate away.
    if (target === event.currentTarget || target.closest("a")) onClose();
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Escape is handled natively by <dialog>; the click only closes on backdrop or links.
    <dialog
      ref={ref}
      id={id}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleClick}
      className={cn(
        "fixed inset-y-0 m-0 h-dvh max-h-none w-[min(86vw,380px)] max-w-none border-0 bg-paper p-0 text-ink shadow-[0_0_60px_rgb(10_31_77/0.3)]",
        "transition-[translate,display,overlay] transition-discrete duration-300 ease-out",
        "backdrop:bg-ink/40 backdrop:transition-opacity backdrop:duration-300",
        side === "right"
          ? "right-0 left-auto translate-x-full open:translate-x-0 starting:open:translate-x-full"
          : "right-auto left-0 -translate-x-full open:translate-x-0 starting:open:-translate-x-full",
        className,
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-rule px-6 py-[18px]">
          <p id={titleId} className="m-0 font-display text-base font-semibold">
            {title}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-btn text-ink"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </dialog>
  );
}

export type NavItem = { href: string; label: string };

/** Hamburger button plus a Drawer holding the site menu and call-to-action buttons. */
export function MobileMenu({
  links,
  actions,
  className,
}: {
  links: NavItem[];
  /** Buttons shown at the bottom of the drawer. */
  actions: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label="Open menu"
        className="flex size-11 items-center justify-center rounded-btn border border-ink text-ink"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      <Drawer
        id={drawerId}
        open={open}
        onClose={() => setOpen(false)}
        title="Menu"
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-6 pt-4 pb-8">
          <ul className="m-0 list-none p-0">
            {links.map((link, i) => (
              <li key={link.href} className="border-b border-rule">
                <a
                  href={link.href}
                  className="flex items-baseline gap-4 py-4 font-display text-[1.6rem] font-light tracking-[-0.03em] text-ink no-underline"
                >
                  <span className="font-sans text-xs font-bold tracking-normal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-2.5 pt-8 [&>*]:w-full">
            {actions}
          </div>
        </nav>
      </Drawer>
    </div>
  );
}

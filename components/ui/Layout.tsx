import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./Button";
import { MobileMenu, type NavItem } from "./Drawer";
import { Eyebrow } from "./Typography";

/** Page wrapper with the dashed vertical rails that frame the content column. */
export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[calc(100%-32px)] lg:w-[80vw] -translate-x-1/2 border-x border-dashed border-ink"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export type SectionTone = "paper" | "sand" | "navy" | "white";

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-transparent text-ink",
  sand: "bg-sand text-ink",
  navy: "bg-navy text-white",
  white: "bg-white text-ink",
};

/** Full-width band with a centered page-width container (80% of the screen on desktop) and standard padding. */
export function Section({
  id,
  tone = "paper",
  divider = false,
  flushBottom = false,
  className,
  innerClassName,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  divider?: boolean;
  /** Drop the bottom padding (when the next block continues the section). */
  flushBottom?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        toneClasses[tone],
        divider && "border-t border-rule",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-page px-6 pt-[clamp(56px,8vw,104px)]",
          flushBottom ? "pb-0" : "pb-[clamp(56px,8vw,104px)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

const navLinks: NavItem[] = [
  { href: "#platform", label: "Platform" },
  { href: "#how", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#team", label: "Company" },
];

/** Sticky site header; its bottom border spans the full screen width. */
export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-paper/90 backdrop-blur-md">
    <nav
      aria-label="Main"
      className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3.5 px-6 py-[18px]"
    >
      <div className="flex flex-wrap items-center gap-[30px]">
        <Link href="/" aria-label="iCheck Solutions home">
          <Image
            src="/brand/icheck-logo-black.png"
            alt="iCheck Solutions"
            width={1200}
            height={580}
            className="h-[34px] w-auto"
            preload
          />
        </Link>
        <ul className="m-0 hidden list-none flex-wrap gap-[22px] p-0 text-sm lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink no-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden flex-wrap items-center gap-2.5 lg:flex">
        <ButtonLink href="#contact" variant="ghost" size="sm">
          Contact sales
        </ButtonLink>
        <ButtonLink href="#contact" variant="secondary" size="sm">
          Book a demo
        </ButtonLink>
        <ButtonLink href="#contact" variant="primary" size="sm">
          Start free trial
        </ButtonLink>
      </div>
      <MobileMenu
        className="lg:hidden"
        links={[...navLinks, { href: "#contact", label: "Contact sales" }]}
        actions={
          <>
            <ButtonLink href="#contact" variant="primary">
              Start free trial
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Book a demo
            </ButtonLink>
            <ButtonLink href="tel:+14696109328" variant="ghost">
              Call +1 (469) 610-9328
            </ButtonLink>
          </>
        }
      />
    </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule-strong text-[13px] leading-[1.9]">
      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-7 px-6 pt-14 pb-6">
        <div>
          <Image
            src="/brand/icheck-logo-black.png"
            alt="iCheck Solutions"
            width={1200}
            height={580}
            className="h-8 w-auto"
          />
        </div>
        <div>
          <Eyebrow className="mb-1.5">Platform</Eyebrow>
          <a href="#platform" className="block text-ink no-underline">Insurance verification</a>
          <a href="#platform" className="block text-ink no-underline">Full-service RCM</a>
          <a href="#how" className="block text-ink no-underline">How it works</a>
          <a href="#security" className="block text-ink no-underline">Security</a>
        </div>
        <div>
          <Eyebrow className="mb-1.5">Company</Eyebrow>
          <a href="#team" className="block text-ink no-underline">About us</a>
          <a href="#contact" className="block text-ink no-underline">Free trial</a>
          <a href="mailto:info@ichecksolutions.com" className="block text-ink no-underline">info@ichecksolutions.com</a>
        </div>
        <address className="not-italic">
          <Eyebrow className="mb-1.5">USA</Eyebrow>
          7300 State Hwy 121 Ste 300
          <br />
          McKinney, TX 75070
          <br />
          <a href="tel:+14696109328" className="text-ink no-underline">+1 (469) 610-9328</a>
        </address>
        <address className="not-italic">
          <Eyebrow className="mb-1.5">India</Eyebrow>
          801 &amp; 802, Manjeera Majestic
          <br />
          Opp. JNTU, KPHB
          <br />
          Hyderabad, India
        </address>
      </div>
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-2.5 border-t border-rule px-6 pt-4 pb-7 text-xs">
        <span>© iCheck Solutions</span>
        <span>ichecksolutions.com</span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "inverse"
  | "onDark";
export type ButtonSize = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn border font-sans font-bold leading-tight no-underline transition-transform duration-150 hover:-translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "border-ink bg-ink text-white",
  secondary: "border-ink bg-transparent text-ink",
  accent: "border-blue-600 bg-blue-600 text-white",
  ghost: "border-transparent bg-transparent text-ink",
  inverse: "border-white bg-white text-ink",
  onDark: "border-white/60 bg-transparent text-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-[22px] py-[13px] text-[15px]",
  sm: "px-4 py-[9px] text-sm",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

/** Action button. Use ButtonLink for navigation. */
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

/** Link styled as a button. Internal paths use next/link; mailto:, tel: and external URLs use <a>. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  ...props
}: CommonProps & { href: string } & Omit<ComponentProps<"a">, "href">) {
  const classes = buttonClasses(variant, size, className);
  if (href.startsWith("/")) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}

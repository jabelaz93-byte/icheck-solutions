import { type ComponentProps, type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";

const fieldClasses =
  "rounded-btn border border-rule-strong bg-white px-3.5 py-3 font-sans text-[15px] font-normal text-ink focus:border-ink";

function FieldShell({
  label,
  hint,
  id,
  children,
  className,
}: {
  label: string;
  hint?: string;
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-[13px] font-bold">
        {label}
      </label>
      {children}
      {hint && (
        <span id={`${id}-hint`} className="text-xs">
          {hint}
        </span>
      )}
    </div>
  );
}

/** Labeled text input for demo and free-trial forms. */
export function TextField({
  label,
  hint,
  className,
  id,
  ...props
}: { label: string; hint?: string } & ComponentProps<"input">) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell label={label} hint={hint} id={fieldId} className={className}>
      <input
        id={fieldId}
        aria-describedby={hint ? `${fieldId}-hint` : undefined}
        className={fieldClasses}
        {...props}
      />
    </FieldShell>
  );
}

export const practiceSoftware = [
  "Open Dental",
  "Dentrix",
  "CareStack",
  "Denticon",
  "Other",
];

/** Labeled select; defaults to the supported practice-management systems. */
export function SelectField({
  label,
  hint,
  options = practiceSoftware,
  className,
  id,
  ...props
}: {
  label: string;
  hint?: string;
  options?: string[];
} & ComponentProps<"select">) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell label={label} hint={hint} id={fieldId} className={className}>
      <select
        id={fieldId}
        aria-describedby={hint ? `${fieldId}-hint` : undefined}
        className={fieldClasses}
        {...props}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </FieldShell>
  );
}

export function TextArea({
  label,
  hint,
  className,
  id,
  ...props
}: { label: string; hint?: string } & ComponentProps<"textarea">) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell label={label} hint={hint} id={fieldId} className={className}>
      <textarea
        id={fieldId}
        rows={4}
        aria-describedby={hint ? `${fieldId}-hint` : undefined}
        className={fieldClasses}
        {...props}
      />
    </FieldShell>
  );
}

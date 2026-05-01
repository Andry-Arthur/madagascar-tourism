import type { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-muted">{children}</div>
    </div>
  );
}


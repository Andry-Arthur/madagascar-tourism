import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}


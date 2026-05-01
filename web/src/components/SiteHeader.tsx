import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-semibold tracking-tight">
          Madagascar Tourism Hub
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <a className="hover:text-foreground" href="#visa">
            Visa
          </a>
          <a className="hover:text-foreground" href="#guided">
            Guided tourism
          </a>
          <a className="hover:text-foreground" href="#stay">
            Stay
          </a>
          <a className="hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}


import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
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

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs font-semibold text-muted sm:hidden">
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#visa"
          >
            Visa
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#guided"
          >
            Guided tourism
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#stay"
          >
            Stay
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}


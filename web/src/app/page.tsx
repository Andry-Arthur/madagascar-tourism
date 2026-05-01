import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { dma, outboundLinks, visaSteps } from "@/lib/content";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
            <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-[color:var(--accent-2)]/12 blur-3xl" />
          </div>
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                🇲🇬 Main tourism hub for Madagascar
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Plan your Madagascar trip with clear visa guidance and a trusted
                local guide.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                This is a simple, infographic-first platform. It explains the
                basics of visiting Madagascar and highlights {dma.name} as a
                reliable option for guided tourism.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                  href="#guided"
                >
                  Explore guided tourism
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium hover:bg-black/5"
                  href="#visa"
                >
                  Visa basics
                </a>
              </div>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image
                    src="/hero-art.svg"
                    alt="Decorative infographic background"
                    width={1200}
                    height={600}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="visa"
          eyebrow="Visa"
          title="Visa basics (high level, traveler-friendly)"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight">
                Quick disclaimer
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Visa rules and fees can change. This page is for orientation
                only. Before booking, always verify with official channels
                (embassy/consulate or the official e-visa portal).
              </p>
              <div className="mt-5 rounded-xl border border-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Official sources
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  <li>
                    <a
                      className="font-medium text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                      href="https://evisamada-mg.com/en/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Madagascar eVisa portal
                    </a>
                    <span className="text-muted"> (official online application)</span>
                  </li>
                  <li className="text-muted">
                    Be cautious with third‑party “e‑visa” websites that add extra
                    fees.
                  </li>
                </ul>
              </div>
              <div className="mt-5 rounded-xl border border-border bg-black/2 p-4 text-sm leading-6 text-muted">
                Tip: Save your application confirmation and keep a copy of your
                travel details accessible on arrival.
              </div>
            </div>
            <div className="grid gap-4">
              {visaSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                    <div>
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="guided"
          eyebrow="Guided tourism"
          title={`Why travel with ${dma.name}`}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Less logistics, more trip">
              A good guide coordinates transport, timing, and local logistics so
              you can focus on parks, nature, and culture.
            </Card>
            <Card title="Local knowledge">
              Spot the right routes, seasons, and highlights with someone who
              knows Madagascar beyond the map.
            </Card>
            <Card title="Confidence and safety">
              Getting help with language, etiquette, and practical decisions
              reduces stress—especially on multi-stop itineraries.
            </Card>
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-white p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  {dma.tagline}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Reach out directly to plan a guided trip across Madagascar.
                </p>
              </div>
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                href="#contact"
              >
                Contact {dma.name} 🇲🇬
              </a>
            </div>
          </div>
        </Section>

        <Section id="stay" eyebrow="Stay" title="Example rentals (third‑party) 🇲🇬">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight">
                Airbnb host
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                The listings below are external links. Prices and availability
                are managed by Airbnb.
              </p>
              <a
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium hover:bg-black/5"
                href={outboundLinks.airbnbHost.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {outboundLinks.airbnbHost.title}
              </a>
            </div>
            <div className="grid gap-4">
              {outboundLinks.airbnbRooms.map((room) => (
                <a
                  key={room.href}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition-colors hover:bg-black/2"
                  href={room.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="grid grid-cols-5 gap-0">
                    <div className="col-span-2 bg-black/2">
                      <Image
                        src={room.imageSrc}
                        alt={room.imageAlt}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="col-span-3 p-5">
                      <p className="text-sm font-semibold">{room.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {room.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
                        View on Airbnb →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title={`Contact ${dma.name} 🇲🇬`}>
          <div className="rounded-2xl border border-border bg-white p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  WhatsApp
                </p>
                <a
                  className="mt-2 inline-flex text-sm font-semibold text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                  href={`https://wa.me/${dma.contact.whatsappE164Digits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dma.contact.whatsappDisplay}
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Fastest way to coordinate routes, timing, and logistics.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </p>
                <a
                  className="mt-2 inline-flex break-all text-sm font-semibold text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                  href={`mailto:${dma.contact.email}`}
                >
                  {dma.contact.email}
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Share your dates, cities, and interests to get a trip plan.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6 text-sm leading-6 text-muted">
              Visa information on this site is informational only and may be
              outdated. Always verify requirements and fees using official
              sources before you travel.
            </div>
          </div>
        </Section>

        <footer className="border-t border-border py-10">
          <div className="mx-auto w-full max-w-6xl px-5 text-sm text-muted sm:px-8">
            © {new Date().getFullYear()} Madagascar Tourism Hub.
          </div>
        </footer>
      </main>
    </div>
  );
}

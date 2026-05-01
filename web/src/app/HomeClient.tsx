"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { dma, outboundLinks, visaSteps } from "@/lib/content";
import { I18nProvider, useI18n } from "@/components/I18nProvider";
import { detectBrowserLanguage, type Language } from "@/lib/i18n";
import { FlagMG, IconMail, IconWhatsapp } from "@/components/icons";

function PageInner() {
  const { t } = useI18n();

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
                  <span className="inline-flex items-center gap-2">
                    <FlagMG className="h-4 w-6" />
                    {t("hero_kicker")}
                  </span>
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t("hero_title")}
                </h1>
                <p className="mt-5 text-lg leading-8 text-muted">{t("hero_body")}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                    href="#guided"
                  >
                    {t("hero_cta_guided")}
                  </a>
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium hover:bg-black/5"
                    href="#visa"
                  >
                    {t("hero_cta_visa")}
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

        <Section id="visa" eyebrow={t("visa_eyebrow")} title={t("visa_title")}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight">
                {t("visa_disclaimer_title")}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {t("visa_disclaimer_body")}
              </p>
              <div className="mt-5 rounded-xl border border-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("visa_sources_title")}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  <li>
                    <a
                      className="font-medium text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                      href="https://evisamada-mg.com/en/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("visa_sources_ev_portal")}
                    </a>
                    <span className="text-muted"> (official online application)</span>
                  </li>
                  <li className="text-muted">{t("visa_sources_thirdparty")}</li>
                </ul>
              </div>
              <div className="mt-5 rounded-xl border border-border bg-black/2 p-4 text-sm leading-6 text-muted">
                {t("visa_tip")}
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
          eyebrow={t("guided_eyebrow")}
          title={`${t("guided_title_prefix")} ${dma.name}`}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title={t("guided_card1_title")}>{t("guided_card1_body")}</Card>
            <Card title={t("guided_card2_title")}>{t("guided_card2_body")}</Card>
            <Card title={t("guided_card3_title")}>{t("guided_card3_body")}</Card>
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-white p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight">{dma.tagline}</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {t("guided_cta_body")}
                </p>
              </div>
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                href="#contact"
              >
                <span className="inline-flex items-center gap-2">
                  <FlagMG className="h-4 w-6" />
                  {t("guided_cta_button")}
                </span>
              </a>
            </div>
          </div>
        </Section>

        <Section id="stay" eyebrow={t("stay_eyebrow")} title={t("stay_title")}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight">
                {t("stay_host_title")}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{t("stay_host_body")}</p>
              <a
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-medium hover:bg-black/5"
                href={outboundLinks.airbnbHost.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("stay_host_button")}
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
                  <div className="flex flex-col sm:grid sm:grid-cols-5 sm:gap-0">
                    <div className="aspect-[4/3] bg-black/2 sm:aspect-auto sm:col-span-2">
                      <Image
                        src={room.imageSrc}
                        alt={room.imageAlt}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5 sm:col-span-3">
                      <p className="text-sm font-semibold">{room.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {room.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
                        {t("stay_card_cta")}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow={t("contact_eyebrow")}
          title={`${t("contact_title_prefix")} ${dma.name}`}
        >
          <div className="rounded-2xl border border-border bg-white p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("contact_whatsapp")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                  href={`https://wa.me/${dma.contact.whatsappE164Digits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsapp className="h-4 w-4" />
                  {dma.contact.whatsappDisplay}
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t("contact_whatsapp_hint")}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("contact_email")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 break-all text-sm font-semibold text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                  href={`mailto:${dma.contact.email}`}
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  {dma.contact.email}
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t("contact_email_hint")}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6 text-sm leading-6 text-muted">
              {t("disclaimer_footer")}
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

export function HomeClient() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    setLang(detectBrowserLanguage());
  }, []);

  return (
    <I18nProvider language={lang}>
      <PageInner />
    </I18nProvider>
  );
}


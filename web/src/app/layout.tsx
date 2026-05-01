import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Madagascar Tourism Hub",
    template: "%s • Madagascar Tourism Hub",
  },
  description:
    "Visa guidance and guided tourism in Madagascar, with DMA tourisme as your trusted local operator.",
  applicationName: "Madagascar Tourism Hub",
  openGraph: {
    title: "Madagascar Tourism Hub",
    description:
      "Visa guidance and guided tourism in Madagascar, with DMA tourisme as your trusted local operator.",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Madagascar Tourism Hub",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

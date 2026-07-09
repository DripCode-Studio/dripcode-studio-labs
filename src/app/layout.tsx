import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://labs.dripcodestudio.com";
const ogImage = `${siteUrl}/images/main-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DripCode Studio Labs",
    template: "%s — DripCode Studio Labs",
  },
  description:
    "We build tools that work harder than anyone on your team. Engineering, automation, and systems from DripCode Studio.",
  openGraph: {
    type: "website",
    siteName: "DripCode Studio Labs",
    title: "DripCode Studio Labs",
    description:
      "We build tools that work harder than anyone on your team. Engineering, automation, and systems from DripCode Studio.",
    url: siteUrl,
    images: [{ url: ogImage, width: 1119, height: 495 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DripCode Studio Labs",
    description:
      "We build tools that work harder than anyone on your team.",
    images: [ogImage],
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
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

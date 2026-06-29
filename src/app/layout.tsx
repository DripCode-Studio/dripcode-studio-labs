import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DripCode Output Platform",
  description:
    "A studio of systems, tools, and production builds. We experiment in the lab, we execute for clients.",
  openGraph: {
    title: "DripCode Output Platform",
    description:
      "A studio of systems, tools, and production builds. We experiment in the lab, we execute for clients.",
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

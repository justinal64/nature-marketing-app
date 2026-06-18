import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WildLens — Identify Anything in the Wild",
  description:
    "Point your camera at any plant, bird, insect, or snake. WildLens identifies it instantly. Coming soon to iOS and Android.",
  openGraph: {
    title: "WildLens — Identify Anything in the Wild",
    description:
      "Point your camera at any plant, bird, insect, or snake. WildLens identifies it instantly. Coming soon to iOS and Android.",
    url: "https://wildlensapp.com",
    siteName: "WildLens",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "WildLens — Identify Anything in the Wild",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WildLens — Identify Anything in the Wild",
    description:
      "Point your camera at any plant, bird, insect, or snake. WildLens identifies it instantly. Coming soon to iOS and Android.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
          <Nav />
          {children}
        </body>
    </html>
  );
}

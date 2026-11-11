
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Singh | Developer & AI Enthusiast",
    template: "%s | Ayush Singh",
  },

  description:
    "I'm Ayush Singh, a Computer Engineering student exploring software development and AI. Discover my projects, skills and what I'm building.",

  keywords: [
    "Ayush Singh",
    "Developer Portfolio",
    "Computer Engineering",
    "AI Enthusiast",
    "Web Development",
    "Artificial Intelligence",
    "FindIt",
    "Cyclone Shield",
  ],

  authors: [{ name: "Ayush Singh" }],
  creator: "Ayush Singh",

  openGraph: {
    title: "Ayush Singh | Developer & AI Enthusiast",
    description:
      "Explore my projects, experiments and journey into software development and AI.",
    type: "website",
    locale: "en_IN",
    siteName: "Ayush Singh Portfolio",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1648,
        height: 928,
        alt: "Ayush Singh — Curiosity, compiled.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Singh | Developer & AI Enthusiast",
    description:
      "Explore my projects, experiments and journey into software development and AI.",
    images: ["/opengraph-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

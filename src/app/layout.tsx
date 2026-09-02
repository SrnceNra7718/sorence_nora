import type { Metadata } from "next";
import localFont from "next/font/local";
// Global CSS is handled by Next.js at build time and has no TypeScript module declaration.
// @ts-expect-error -- Next.js processes this side-effect stylesheet import.
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/space-grotesk/space-grotesk-variable.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/inter-variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../public/fonts/jetbrains-mono/jetbrains-mono-400.woff2",
      weight: "100 800",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorence Nora — Frontend Web Developer",
  description:
    "Sorence Nora is a frontend web developer based in the Philippines, specializing in modern, responsive web applications built with React, Next.js and TypeScript.",
  openGraph: {
    title: "Sorence Nora — Frontend Web Developer",
    description:
      "Frontend web developer based in the Philippines, specializing in modern, responsive web applications.",
    type: "website",
    url: "https://sorence-nora.vercel.app",
    images: [
      {
        url: "https://sorence-nora.vercel.app/forGSearch.png",
        width: 1200,
        height: 630,
        alt: "Sorence Nora — Frontend Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorence Nora — Frontend Web Developer",
    description:
      "Frontend web developer based in the Philippines, specializing in modern, responsive web applications.",
    images: ["https://sorence-nora.vercel.app/forGSearch.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="uPh6m1Ga-x4ihr9btRQjfsVvir3KUKTCA3u4MJstUco"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

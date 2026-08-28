import type { Metadata } from "next";
import localFont from "next/font/local";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorence Nora — Frontend Web Developer",
    description:
      "Frontend web developer based in the Philippines, specializing in modern, responsive web applications.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%2308090B'/%3E%3Ctext x='32' y='42' font-family='monospace' font-size='26' fill='%23E8A33D' text-anchor='middle'%3ESN%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
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

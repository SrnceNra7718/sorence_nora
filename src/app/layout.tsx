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
  metadataBase: new URL("https://sorence-nora.vercel.app"),
  title: "Sorence Nora — Frontend Web Developer & Software Developer",
  description:
    "Frontend web developer from the Philippines building modern, responsive web applications with React, Next.js, and TypeScript. Portfolio of projects and frontend development work.",
  keywords: [
    "Sorence Nora",
    "Frontend Web Developer",
    "Web Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "developer portfolio",
    "responsive web developer",
    "modern web developer",
    "frontend development",
    "web application development",
    "React.js development",
    "Next.js development",
    "TypeScript development",
    "Tailwind CSS development",
    "responsive web applications",
    "responsive web design",
    "web development portfolio",
    "frontend developer Philippines",
    "web developer Philippines",
    "software developer Philippines",
    "developer portfolio Philippines",
  ],
  authors: [{ name: "Sorence Nora" }],
  creator: "Sorence Nora",
  publisher: "Sorence Nora",
  openGraph: {
    title: "Sorence Nora — Frontend Web Developer & Software Developer",
    description:
      "Frontend web developer from the Philippines building modern, responsive web applications with React, Next.js, and TypeScript.",
    type: "website",
    url: "https://sorence-nora.vercel.app",
    siteName: "Sorence Nora",
    locale: "en_PH",
    images: [
      {
        url: "https://sorence-nora.vercel.app/forProject_Section/scs.png",
        width: 1200,
        height: 630,
        alt: "Sorence Nora — Frontend Web Developer from the Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorence Nora — Frontend Web Developer & Software Developer",
    description:
      "Frontend web developer from the Philippines building modern, responsive web applications with React, Next.js, and TypeScript.",
    images: ["https://sorence-nora.vercel.app/forProject_Section/scs.png"],
  },
  icons: {
    icon: "/favicon-v2.png",
    apple: "/favicon-v2.png",
  },
  alternates: {
    canonical: "https://sorence-nora.vercel.app",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0&display=swap"
        />
        <meta name="google-site-verification" content="uPh6m1Ga-x4ihr9btRQjfsVvir3KUKTCA3u4MJstUco" />
        <meta name="theme-color" content="#08090b" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

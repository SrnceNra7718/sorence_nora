import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorence Nora",
  description: "Sorence's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="uPh6m1Ga-x4ihr9btRQjfsVvir3KUKTCA3u4MJstUco"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

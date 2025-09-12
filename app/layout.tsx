import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";

// Google Fonts
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haruki Anime Journal - Tokyo Anime Guide",
  description: "Explore Japan's incredible anime meccas with 100+ hidden gems from 300+ Japanese Anime Otaku",
  openGraph: {
    title: "Haruki Anime Journal - Tokyo Anime Guide",
    description: "Explore Japan's incredible anime meccas",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
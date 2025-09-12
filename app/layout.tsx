import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
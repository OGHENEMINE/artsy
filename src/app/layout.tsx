import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARSTY",
  description:
    "Discover and shop unique artworks from talented artists on ARTSY – where creativity meets commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth tracking-wider ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {children}
      </body>
    </html>
  );
}

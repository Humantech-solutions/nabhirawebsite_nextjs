import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../src/styles/theme.css";
import "../src/styles/fonts.css";
import "../src/styles/tailwind.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabhira Technologies | Digital Transformation & AI Solutions",
  description: "Digital Transformation & AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased`}
      >
        <Navbar />
        <main className="flex-grow pt-[80px] md:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

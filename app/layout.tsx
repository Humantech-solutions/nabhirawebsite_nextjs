import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../src/styles/theme.css";
import "../src/styles/fonts.css";
import "../src/styles/tailwind.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { siteConfig } from "../src/config/site";

import { constructMetadata, getOrganizationSchema, getWebsiteSchema } from "../src/lib/seo";
import { Schema } from "../src/components/SEO/Schema";

export const viewport: Viewport = {
  themeColor: "#11253e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased"
      >
        <Schema jsonLd={getOrganizationSchema()} />
        <Schema jsonLd={getWebsiteSchema()} />
        <header>
          <Navbar />
        </header>
        <main id="main-content" className="flex-grow pt-[80px] md:pt-[80px]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

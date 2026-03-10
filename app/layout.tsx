import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../src/styles/theme.css";
import "../src/styles/fonts.css";
import "../src/styles/tailwind.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { siteConfig } from "../src/config/site";
import { constructMetadata, getSiteSchema } from "../src/lib/seo";

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
  const siteSchema = getSiteSchema();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body
        className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased"
      >
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

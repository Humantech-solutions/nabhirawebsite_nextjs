import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../src/styles/theme.css";
import "../src/styles/fonts.css";
import "../src/styles/tailwind.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { siteConfig } from "../src/config/site";
import { constructMetadata, getSiteSchema } from "../src/lib/seo";
import { getSiteChrome } from "../src/lib/wordpress";

export const viewport: Viewport = {
  themeColor: "#11253e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = getSiteSchema();
  const siteChrome = await getSiteChrome();
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body
        className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased"
      >
        <header className="relative z-[9999]">
          <Navbar data={siteChrome} />
        </header>
        <main id="main-content" className="flex-grow pt-[80px] md:pt-[80px]">
          {children}
        </main>
        <footer>
          <Footer data={siteChrome} />
        </footer>
      </body>
    </html>
  );
}

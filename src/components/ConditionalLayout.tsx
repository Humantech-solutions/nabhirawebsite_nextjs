"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="flex-grow pt-[80px] md:pt-[80px]">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <ChatWidget />
    </>
  );
}

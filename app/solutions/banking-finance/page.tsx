import BankingFinance from "@/src/pages_migrated/industries/BankingFinance";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('banking-finance');
  return constructMetadata({
    title: page?.title || "Banking & Finance Solutions",
    description: "Specialized technology solutions for the banking and financial services sector.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('banking-finance');
  return <BankingFinance wordpressData={wordpressData} />;
}

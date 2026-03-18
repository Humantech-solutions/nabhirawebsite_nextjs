import BankingFinance from "@/src/pages_migrated/industries/BankingFinance";
import { getPageBySlug } from "@/src/lib/wordpress";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('banking-finance') || await getPageBySlug('banking-financial-services');
  return constructMetadata({
    title: page?.title || "Banking & Finance",
    description: "Digital transformation solutions for the banking and financial services industry.",
  });
}

export default async function Page() {
  const wordpressData = await getPageBySlug('banking-finance') || await getPageBySlug('banking-financial-services');
  return <BankingFinance wordpressData={wordpressData} />;
}

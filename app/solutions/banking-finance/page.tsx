import BankingFinance from "@/src/pages_migrated/BankingFinance";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('banking-finance');
  return <BankingFinance wordpressData={wordpressData} />;
}

import BankingFinance from "../../../src/pages_migrated/industries/BankingFinance";
import { getPageBySlug } from "@/src/lib/wordpress";

export default async function Page() {
  const wordpressData = await getPageBySlug('banking-finance');
  return <BankingFinance wordpressData={wordpressData} />;
}

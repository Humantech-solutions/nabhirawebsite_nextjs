import BankingFinance from "../../../src/pages_migrated/industries/BankingFinance";
import { getPageBySlug } from "../../../src/lib/wordpress";

export default async function BankingFinancePage() {
  const wordpressData = await getPageBySlug("banking-financial-services");
  return <BankingFinance wordpressData={wordpressData} />;
}

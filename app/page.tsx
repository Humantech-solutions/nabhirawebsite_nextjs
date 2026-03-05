import { Hero } from "../src/components/Hero";
import { BigThinkers } from "../src/components/BigThinkers";
import { LatestThinking, WhatsNew } from "../src/components/GridSection";
import { Capabilities } from "../src/components/Capabilities";
import { Industries } from "../src/components/Industries";
import { WithNabhira } from "../src/components/WithNabhira";
import { SuccessStories } from "../src/components/SuccessStories";
import { Clients } from "../src/components/Clients";
import { LimitlessTogether } from "../src/components/Footer";
import { getHomePage } from "@/src/lib/wordpress";

export default async function Home() {
  const homeData = await getHomePage();
  const fields = homeData?.homePageFields;
  const global = homeData?.globalSettings;
  const heroData = global?.heroSlides;
  const wnData = fields?.withNabhira;

  return (
    <div className="bg-white min-h-screen">
      <Hero data={heroData} />
      <WithNabhira data={wnData} />
      <Capabilities data={fields?.capabilities} />
      <Industries data={fields?.industries} />
      <BigThinkers data={fields?.bigThinkers} />
      <WhatsNew data={{ 
        newsPosts: homeData?.newsPosts,
        settings: homeData?.settings
      }} />
      <Clients data={fields?.clients} />
      <SuccessStories data={fields?.successStories} />
      <LimitlessTogether data={global?.limitlessTogether} />
    </div>
  );
}

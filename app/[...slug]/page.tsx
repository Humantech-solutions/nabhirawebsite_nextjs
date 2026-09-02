import {
  getPageBySlug,
  getAllPages,
  getSitemapData,
  getCareerPosts,
  getNews,
  getAllPosts,
  getSiteChrome,
  getCaseStudies,
  getTestimonials,
  getServices,
  getSolutions,
  getIndustries,
  getServiceBySlug,
  getSolutionBySlug,
  getIndustryBySlug
} from "@/src/lib/wordpress";
import { getRecruitProJobs } from "@/src/lib/recruitpro";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";
import { Hero } from "@/src/components/Hero";
import { LimitlessTogether } from "@/src/components/LimitlessTogether";
import { Sitemap } from "@/src/components/Sitemap";

// Core Page Templates
import About from "@/src/pages_migrated/about/About";
import Contact from "@/src/pages_migrated/Contact";
import Careers from "@/src/pages_migrated/Careers";
import Leadership from "@/src/pages_migrated/about/Leadership";
import Partners from "@/src/pages_migrated/about/Partners";
import Clients from "@/src/pages_migrated/about/Clients";
import Awards from "@/src/pages_migrated/about/Awards";
import LifeAtHutech from "@/src/pages_migrated/about/LifeAtHutech";
import News from "@/src/pages_migrated/resources/News";
import Blogs from "@/src/pages_migrated/resources/Blogs";
import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";

// Generic Fallback Templates
import ServiceTemplate from "@/src/pages_migrated/ServiceTemplate";
import SolutionTemplate from "@/src/pages_migrated/SolutionTemplate";
import IndustryTemplate from "@/src/pages_migrated/IndustryTemplate";

// Dedicated Industry Components
import BankingFinance from "@/src/pages_migrated/industries/BankingFinance";
import GovernmentPSU from "@/src/pages_migrated/industries/GovernmentPSU";
import HealthcarePharma from "@/src/pages_migrated/industries/HealthcarePharma";
import ManufacturingAutomotive from "@/src/pages_migrated/industries/ManufacturingAutomotive";
import MediaEntertainment from "@/src/pages_migrated/industries/MediaEntertainment";
import RetailConsumer from "@/src/pages_migrated/industries/RetailConsumer";

// Dedicated Solution Components
import AILMS from "@/src/pages_migrated/solutions/AILMS";
import PolicyEngine from "@/src/pages_migrated/solutions/PolicyEngine";
import CloudInfra from "@/src/pages_migrated/solutions/CloudInfra";
import ERP from "@/src/pages_migrated/solutions/ERP";
import HRMS from "@/src/pages_migrated/solutions/HRMS";
import EnterprisePOS from "@/src/pages_migrated/solutions/EnterprisePOS";
import DataFoundation from "@/src/pages_migrated/solutions/DataFoundation";
import AIConsulting from "@/src/pages_migrated/solutions/AIConsulting";
import LMS from "@/src/pages_migrated/solutions/LMS";
import POS from "@/src/pages_migrated/solutions/POS";
import RetailPOS from "@/src/pages_migrated/solutions/RetailPOS";

// Dedicated Service Components
import CloudTransformation from "@/src/pages_migrated/services/cloud/CloudTransformation";
import CloudAdvisory from "@/src/pages_migrated/services/cloud/CloudAdvisory";
import CloudMigration from "@/src/pages_migrated/services/cloud/CloudMigration";
import CloudModernization from "@/src/pages_migrated/services/cloud/CloudModernization";
import CloudNativeDevelopment from "@/src/pages_migrated/services/cloud/CloudNativeDevelopment";
import CloudSecurityGovernance from "@/src/pages_migrated/services/cloud/CloudSecurityGovernance";
import CloudFinancialManagement from "@/src/pages_migrated/services/cloud/CloudFinancialManagement";
import DataEngineering from "@/src/pages_migrated/services/data/DataEngineering";
import DataAnalyticsSolution from "@/src/pages_migrated/services/data/DataAnalyticsSolution";
import DataAnalytics from "@/src/pages_migrated/services/data/DataAnalytics";
import DataGovernance from "@/src/pages_migrated/services/data/DataGovernance";
import ArtificialIntelligence from "@/src/pages_migrated/services/ai/ArtificialIntelligence";
import AIEngineering from "@/src/pages_migrated/services/ai/AIEngineering";
import AgenticAI from "@/src/pages_migrated/services/ai/AgenticAI";
import IntelligentAutomation from "@/src/pages_migrated/services/ai/IntelligentAutomation";

// Component Maps for precise fallback resolution
const solutionComponentMap: Record<string, React.ComponentType<any>> = {
  "enterprise-pos": EnterprisePOS,
  "ailms": AILMS,
  "ai-lms": AILMS,
  "policy-engine": PolicyEngine,
  "cloud-infra": CloudInfra,
  "erp": ERP,
  "hrms": HRMS,
  "data-foundation": DataFoundation,
  "ai-consulting": AIConsulting,
  "lms": LMS,
  "pos": POS,
  "retail-pos": RetailPOS,
};

const serviceComponentMap: Record<string, React.ComponentType<any>> = {
  "cloud-transformation": CloudTransformation,
  "cloud-advisory": CloudAdvisory,
  "cloud-migration": CloudMigration,
  "cloud-modernization": CloudModernization,
  "cloud-native-development": CloudNativeDevelopment,
  "cloud-security-governance": CloudSecurityGovernance,
  "cloud-financial-management": CloudFinancialManagement,
  "data-engineering": DataEngineering,
  "data-analytics-solution": DataAnalyticsSolution,
  "data-analytics": DataAnalytics,
  "data-governance": DataGovernance,
  "artificial-intelligence": ArtificialIntelligence,
  "ai-engineering": AIEngineering,
  "agentic-ai": AgenticAI,
  "intelligent-automation": IntelligentAutomation,
};

const industryComponentMap: Record<string, React.ComponentType<any>> = {
  "banking-finance": BankingFinance,
  "banking-and-finance": BankingFinance,
  "retail-consumer": RetailConsumer,
  "manufacturing-automotive": ManufacturingAutomotive,
  "healthcare-pharma": HealthcarePharma,
  "government-psu": GovernmentPSU,
  "media-entertainment": MediaEntertainment,
};

export async function generateStaticParams() {
  const routesSet = new Set<string>();

  // 1. Core dedicated static routes
  const corePages = [
    "about",
    "about/leadership",
    "about/partners",
    "about/clients",
    "about/awards",
    "about/life-at-hutech",
    "leadership",
    "partners",
    "clients",
    "awards",
    "life-at-hutech",
    "contact",
    "careers",
    "sitemap",
  ];
  corePages.forEach((p) => routesSet.add(p));

  // 2. All Solution code components
  Object.keys(solutionComponentMap).forEach((slug) =>
    routesSet.add(`solutions/${slug}`)
  );

  // 3. All Service code components
  Object.keys(serviceComponentMap).forEach((slug) =>
    routesSet.add(`services/${slug}`)
  );

  // 4. All Industry code components
  Object.keys(industryComponentMap).forEach((slug) =>
    routesSet.add(`industries/${slug}`)
  );

  // 5. Dynamic WordPress Pages, Services, Solutions, Industries
  try {
    const [wpPages, wpServices, wpSolutions, wpIndustries] = await Promise.all([
      getAllPages().catch(() => []),
      getServices().catch(() => []),
      getSolutions().catch(() => []),
      getIndustries().catch(() => []),
    ]);

    (wpPages || []).forEach((p: any) => {
      const cleanUri = p.uri ? p.uri.replace(/^\/|\/$/g, "") : p.slug;
      if (cleanUri && cleanUri !== "home") routesSet.add(cleanUri);
    });

    (wpServices || []).forEach((s: any) => {
      if (s.slug) routesSet.add(`services/${s.slug}`);
    });

    (wpSolutions || []).forEach((s: any) => {
      if (s.slug) routesSet.add(`solutions/${s.slug}`);
    });

    (wpIndustries || []).forEach((i: any) => {
      if (i.slug) routesSet.add(`industries/${i.slug}`);
    });
  } catch (err) {
    console.warn("[generateStaticParams] WordPress fetch error:", err);
  }

  return Array.from(routesSet).map((route) => ({
    slug: route.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug.join('/');
  const firstSlug = slug[0];
  const restSlug = slug.slice(1).join('/');
  
  let page = null;
  if (firstSlug === "services") {
    page = await getServiceBySlug(restSlug);
  } else if (firstSlug === "solutions") {
    page = await getSolutionBySlug(restSlug);
  } else if (firstSlug === "industries") {
    page = await getIndustryBySlug(restSlug);
  } else {
    page = await getPageBySlug(slugString);
  }
  
  if (page) {
    return constructMetadata({
      title: page.title || page.name || "Hutech Solutions Technologies",
      description: page.content?.replace(/<[^>]+>/g, '').substring(0, 160) || "Hutech Solutions Technologies",
    });
  }

  // Check if a dedicated code component exists for this slug
  const hasCodePage =
    (firstSlug === "services" && !!serviceComponentMap[restSlug]) ||
    (firstSlug === "solutions" && !!solutionComponentMap[restSlug]) ||
    (firstSlug === "industries" && !!industryComponentMap[restSlug]);

  if (hasCodePage) {
    const targetSlug = restSlug || firstSlug || "";
    const formattedSlug = targetSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return constructMetadata({
      title: `${formattedSlug} | Hutech Solutions Technologies`,
      description: `${formattedSlug} - High-impact enterprise technology solutions by Hutech Solutions.`,
    });
  }
  
  return constructMetadata({ title: "Page Not Found" });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugString = slug.join('/');
  const firstSlug = slug[0];
  const restSlug = slug.slice(1).join('/');

  let page = null;
  if (firstSlug === "services") {
    page = await getServiceBySlug(restSlug);
  } else if (firstSlug === "solutions") {
    page = await getSolutionBySlug(restSlug);
  } else if (firstSlug === "industries") {
    page = await getIndustryBySlug(restSlug);
  } else {
    page = await getPageBySlug(slugString);
  }

  // 1. Handle Solutions Route
  if (firstSlug === "solutions") {
    // If page exists in WordPress, use dynamic SolutionTemplate
    if (page) {
      return <SolutionTemplate wordpressData={page} />;
    }
    // If not in WordPress, check if we have a dedicated code component
    const SolutionComponent = solutionComponentMap[restSlug];
    if (SolutionComponent) {
      return <SolutionComponent wordpressData={null} />;
    }
    // Neither in WP nor in code -> 404
    notFound();
  }

  // 2. Handle Services Route
  if (firstSlug === "services") {
    // If page exists in WordPress, use dynamic ServiceTemplate
    if (page) {
      return <ServiceTemplate wordpressData={page} />;
    }
    // If not in WordPress, check if we have a dedicated code component
    const ServiceComponent = serviceComponentMap[restSlug];
    if (ServiceComponent) {
      return <ServiceComponent wordpressData={null} />;
    }
    // Neither in WP nor in code -> 404
    notFound();
  }

  // 3. Handle Industries Route
  if (firstSlug === "industries") {
    // If page exists in WordPress, use dynamic IndustryTemplate
    if (page) {
      return <IndustryTemplate wordpressData={page} />;
    }
    // If not in WordPress, check if we have a dedicated code component
    const IndustryComponent = industryComponentMap[restSlug];
    if (IndustryComponent) {
      return <IndustryComponent wordpressData={null} />;
    }
    // Neither in WP nor in code -> 404
    notFound();
  }

  if (!page) {
    notFound();
  }

  const nativeTemplate = page.template?.templateName || "Default";
  const acfTemplateRaw = page.pageRoutingSettings?.nextjsTemplate;
  const acfTemplate = Array.isArray(acfTemplateRaw) ? acfTemplateRaw[0] : acfTemplateRaw;
  const activeTemplate = (acfTemplate || nativeTemplate).toLowerCase().trim();

  // Template Routing Matrix
  if (activeTemplate === "about") {
    return <About wordpressData={page} />;
  }
  
  if (activeTemplate === "contact") {
    return <Contact wordpressData={page} />;
  }
  
  if (activeTemplate === "careers") {
    const recruitProJobs = (await getRecruitProJobs()) || [];
    const wpJobsRaw = (await getCareerPosts()) || [];
    const allJobs = [...recruitProJobs, ...wpJobsRaw];
    return <Careers wordpressData={page} allJobs={allJobs} />;
  }
  
  if (activeTemplate === "leadership") {
    return <Leadership wordpressData={page} />;
  }
  
  if (activeTemplate === "partners") {
    return <Partners wordpressData={page} />;
  }
  
  if (activeTemplate === "clients") {
    const fields = page.clientsPageFields;
    const testimonials = await getTestimonials(
      fields?.testimonialCount || 3,
      fields?.testimonialCategory?.nodes?.map((n: any) => n.databaseId) || []
    );
    return <Clients wordpressData={page} testimonials={testimonials} />;
  }
  
  if (activeTemplate === "awards") {
    return <Awards wordpressData={page} />;
  }

  if (activeTemplate === "life-at-hutech" || activeTemplate === "life at hutech") {
    return <LifeAtHutech wordpressData={page} />;
  }
  
  if (activeTemplate === "news") {
    const newsData = await getNews();
    return <News wordpressData={page} newsData={newsData} />;
  }
  
  if (activeTemplate === "blogs") {
    const posts = await getAllPosts();
    const siteChrome = await getSiteChrome();
    return <Blogs wordpressData={page} posts={posts} siteChrome={siteChrome} />;
  }
  
  if (activeTemplate === "case studies") {
    const studies = await getCaseStudies();
    return <CaseStudies wordpressData={page} studies={studies} />;
  }

  // --- DEFAULT TEMPLATE FALLBACK ---
  const hasHero = !!(page.globalSettings?.heroSlides?.heroS1Title || page.globalSettings?.heroSlides?.heroS1ImageUrl || page.globalSettings?.heroSlides?.heroS1Image?.node?.sourceUrl);
  const hasLimitless = !!page.globalSettings?.limitlessTogether;
  
  const isSitemap = slugString.toLowerCase().includes("sitemap") || page.title.toLowerCase() === "sitemap";
  const sitemapData = isSitemap ? await getSitemapData() : null;

  return (
    <div className="bg-white min-h-screen">
      {hasHero && <Hero data={page.globalSettings.heroSlides} heightClass="h-[400px] md:h-[520px]" />}
      
      <main className={`pb-24 ${hasHero ? 'pt-16' : 'pt-32'}`}>
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          {!hasHero && <h1 className="text-4xl font-bold text-[#11253e] mb-12">{page.title}</h1>}
          <div 
            className="prose prose-slate max-w-none text-[#11253e] font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page.content || "" }} 
          />
          {isSitemap && sitemapData && (
            <Sitemap data={sitemapData} />
          )}
        </div>
      </main>

      {hasLimitless && <LimitlessTogether data={page.globalSettings.limitlessTogether} />}
    </div>
  );
}

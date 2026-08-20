import { getPageBySlug, getAllPages, getSitemapData, getCareerPosts, getNews, getAllPosts, getSiteChrome, getCaseStudies, getTestimonials } from "@/src/lib/wordpress";
import { getRecruitProJobs } from "@/src/lib/recruitpro";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/src/lib/seo";
import { Metadata } from "next";
import { Hero } from "@/src/components/Hero";
import { LimitlessTogether } from "@/src/components/LimitlessTogether";
import { Sitemap } from "@/src/components/Sitemap";

// Import UI Templates
import About from "@/src/pages_migrated/about/About";
import Contact from "@/src/pages_migrated/Contact";
import Careers from "@/src/pages_migrated/Careers";
import Leadership from "@/src/pages_migrated/about/Leadership";
import Partners from "@/src/pages_migrated/about/Partners";
import Clients from "@/src/pages_migrated/about/Clients";
import Awards from "@/src/pages_migrated/about/Awards";
import News from "@/src/pages_migrated/resources/News";
import Blogs from "@/src/pages_migrated/resources/Blogs";
import CaseStudies from "@/src/pages_migrated/resources/CaseStudies";

export async function generateStaticParams() {
  const pages = await getAllPages();
  // Filter out slugs that already have dedicated hardcoded directories in /app
  const excludeSlugs = [
    'about', 'contact', 'careers', 'leadership', 
    'partners', 'clients', 'awards', 'industries', 
    'resources', 'solutions', 'home'
  ];
  
  return pages
    .filter((page: any) => page && page.uri)
    .map((page: any) => {
      // Split the uri into an array of segments (e.g., "/parent/child/" -> ["parent", "child"])
      const slugArray = page.uri.split('/').filter(Boolean);
      return {
        slug: slugArray,
      };
    })
    .filter((param) => {
      const firstSlug = param.slug[0];
      // Exclude it if it belongs to a hardcoded root folder
      return firstSlug && !excludeSlugs.includes(firstSlug);
    });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug.join('/');
  const page = await getPageBySlug(slugString);
  
  if (!page) {
    return constructMetadata({ title: "Page Not Found" });
  }
  
  return constructMetadata({
    title: page.title,
    description: page.content?.replace(/<[^>]+>/g, '').substring(0, 160) || "Nabhira Technologies",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugString = slug.join('/');
  const page = await getPageBySlug(slugString);

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

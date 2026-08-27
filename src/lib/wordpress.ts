// Use 127.0.0.1 instead of localhost to avoid IPv6 resolution issues on Windows
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace(
  "localhost",
  "127.0.0.1",
);

// Set this to true to temporarily stop all WordPress API calls and only use static data
const FORCE_STATIC_FALLBACK = false;

import {
  blogPosts,
  caseStudies,
  newsItems,
  events,
  jobs,
  slugify,
} from "../data/migrated_data";
import { mergeACFData } from "./utils";

export async function fetchGraphQL(query: string, variables = {}) {
  if (!WORDPRESS_API_URL || FORCE_STATIC_FALLBACK) {
    return {
      data: null,
      errors: [
        {
          message: FORCE_STATIC_FALLBACK
            ? "Bypassing fetch as FORCE_STATIC_FALLBACK is enabled"
            : "WORDPRESS_API_URL missing",
        },
      ],
    };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  let retries = 3;
  let lastError;

  while (retries > 0) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const res = await fetch(WORDPRESS_API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
        next: { revalidate: 60 },
        signal: controller.signal,
      });

      clearTimeout(id);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `HTTP Error ${res.status}: ${res.statusText} - ${errorText}`,
        );
      }

      const json = await res.json();

      if (json.errors) {
        console.error(
          "[WPGraphQL GraphQL ERROR]:",
          JSON.stringify(json.errors, null, 2),
        );
        return json; // Return GraphQL errors normally
      }

      return json; // Success!
    } catch (error: any) {
      lastError = error;
      retries -= 1;

      if (retries > 0) {
        console.warn(
          `[WPGraphQL FETCH RETRY] ${error.message || "Failed"}. Retrying in 2s...`,
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }

  // If we exhaust all retries:
  console.error(
    `[WPGraphQL FATAL ERROR] URL: ${WORDPRESS_API_URL} failed after 3 retries. Error: ${lastError?.message}`,
  );

  // Return a structured error so it doesn't crash the caller
  return {
    data: null,
    errors: [
      {
        message: `Failed to connect to WordPress API at ${WORDPRESS_API_URL}. Falling back to static data.`,
      },
    ],
  };
}

export const GLOBAL_SETTINGS_FRAGMENT = `
  fragment GlobalSettingsFields on Page {
    id
    globalSettings {
      heroSlides {
        heroS1Title
        heroS1Desc
        heroS1Image { node { sourceUrl } }
        heroS1ImageUrl
        heroS1VideoUrl
        heroS1Button { url title }
        heroS2Title
        heroS2Desc
        heroS2Image { node { sourceUrl } }
        heroS2ImageUrl
        heroS2VideoUrl
        heroS2Button { url title }
        heroS3Title
        heroS3Desc
        heroS3Image { node { sourceUrl } }
        heroS3ImageUrl
        heroS3VideoUrl
        heroS3Button { url title }
      }
      limitlessTogether {
        ltTitle
        ltImage { node { sourceUrl } }
        ltImageUrl
        ltP1
        ltP2
        ltP3
        ltQ1
        ltA1
        ltQ2
        ltA2
        ltQ3
        ltA3
        ltQ4
        ltA4
      }
    }
  }
`;

export async function getGlobalSettings() {
  const query = (uri: string) => `
    ${GLOBAL_SETTINGS_FRAGMENT}
    query GetGlobalSettings {
      page(id: "${uri}", idType: URI) {
        ...GlobalSettingsFields
      }
    }
  `;

  // Try multiple common pages where global settings might be attached
  const uris = ["/", "/home/", "/contact/"];

  for (const uri of uris) {
    const response = await fetchGraphQL(query(uri));
    const settings = response?.data?.page?.globalSettings;
    if (settings && settings.heroSlides) {
      return settings;
    }
  }

  return null;
}

export const CONTACT_PAGE_FIELDS_FRAGMENT = `
  fragment ContactPageFields on Page {
    contactPageFields {
      heroSection {
        heroTitle
        heroDescription
        heroImage { node { sourceUrl } }
      }
      contactInformationSection {
        ciTitle
        ciDescription
        hqSection {
          icon
          iconImg { node { sourceUrl } }
          title
          line1
          line2
          line3
          mapUrl
        }
        emailSection {
          icon
          iconImg { node { sourceUrl } }
          title
          email1
          email2
        }
        phoneSection {
          icon
          iconImg { node { sourceUrl } }
          title
          phone1
          phone2
        }
      }
      regionalPresenceSection {
        rpTitle
        region1 {
          name
          address
        }
        region2 {
          name
          address
        }
      }
      globalPresenceSection {
        gpTitle
        gpSubtitle
        gpIcon
        gpIconImg { node { sourceUrl } }
      }
    }
  }
`;

export const CAREERS_PAGE_FIELDS_FRAGMENT = `
  fragment CareersPageFields on Page {
    careersPageSettings {
      culture1Title
      culture1Desc
      culture2Title
      culture2Desc
      culture3Title
      culture3Desc
      internshipProgrammeLabel
      internshipProgrammeIconType
      internshipProgrammeLucide
      internshipProgrammeImage { node { sourceUrl mediaItemUrl } }
      internshipImage { node { sourceUrl mediaItemUrl } }
      internshipBadgeTop
      internshipBadgeBottom
      internshipTitle
      internshipDesc
      internshipTrack1IconType
      internshipTrack1Lucide
      internshipTrack1Image { node { sourceUrl mediaItemUrl } }
      internshipTrack1Name
      internshipTrack1Duration
      internshipTrack2IconType
      internshipTrack2Lucide
      internshipTrack2Image { node { sourceUrl mediaItemUrl } }
      internshipTrack2Name
      internshipTrack2Duration
      internshipTrack3IconType
      internshipTrack3Lucide
      internshipTrack3Image { node { sourceUrl mediaItemUrl } }
      internshipTrack3Name
      internshipTrack3Duration
      internshipTrack4IconType
      internshipTrack4Lucide
      internshipTrack4Image { node { sourceUrl mediaItemUrl } }
      internshipTrack4Name
      internshipTrack4Duration
      careerAdvantageLabel
      advantageTitle
      advantage1
      advantage1IconType
      advantage1Lucide
      advantage1Image { node { sourceUrl mediaItemUrl } }
      advantage2
      advantage2IconType
      advantage2Lucide
      advantage2Image { node { sourceUrl mediaItemUrl } }
      advantage3
      advantage3IconType
      advantage3Lucide
      advantage3Image { node { sourceUrl mediaItemUrl } }
      advantage4
      advantage4IconType
      advantage4Lucide
      advantage4Image { node { sourceUrl mediaItemUrl } }
      advantage5
      advantage5IconType
      advantage5Lucide
      advantage5Image { node { sourceUrl mediaItemUrl } }
      advantage6
      advantage6IconType
      advantage6Lucide
      advantage6Image { node { sourceUrl mediaItemUrl } }
      openPositionsTitle
      openPositionsDesc
      applyNowBtnText
      applyNowLinkType
      applyNowInternalLink {
        nodes {
          ... on Page {
            uri
          }
          ... on Post {
            uri
          }
        }
      }
      applyNowExternalLink
      downloadBrochureBtnText
      downloadBrochureFile { node { mediaItemUrl } }
      talkToTalentBtnText
      talkToTalentLinkType
      talkToTalentInternalLink {
        nodes {
          ... on Page {
            uri
          }
          ... on Post {
            uri
          }
        }
      }
        talkToTalentExternalLink
    }
  }
`;

export const ABOUT_PAGE_FIELDS_FRAGMENT = `
  fragment AboutPageFields on Page {
    aboutUs {
      storyTitle
      storyContentP1
      storyContentP2
      storyImage { node { sourceUrl mediaItemUrl } }
      visionLabel
      missionLabel
      valuesSectionTitle
      v1Title
      v1Desc
      v1IconType
      v1Lucide
      v1Image { node { sourceUrl mediaItemUrl } }
      v2Title
      v2Desc
      v2IconType
      v2Lucide
      v2Image { node { sourceUrl mediaItemUrl } }
      v3Title
      v3Desc
      v3IconType
      v3Lucide
      v3Image { node { sourceUrl mediaItemUrl } }
      v4Title
      v4Desc
      v4IconType
      v4Lucide
      v4Image { node { sourceUrl mediaItemUrl } }
      v5Title
      v5Desc
      v5IconType
      v5Lucide
      v5Image { node { sourceUrl mediaItemUrl } }
      v6Title
      v6Desc
      v6IconType
      v6Lucide
      v6Image { node { sourceUrl mediaItemUrl } }
      stat1Value
      stat1Label
      stat2Value
      stat2Label
      stat3Value
      stat3Label
      stat4Value
      stat4Label
    }
  }
`;

export const LEADERSHIP_PAGE_FIELDS_FRAGMENT = `
  fragment LeadershipPageFields on Page {
    leadershipPage {
      leader1Name
      leader1Role
      leader1Bio
      leader1Image { node { sourceUrl mediaItemUrl } }
      leader1LinkedinUrl
      leader1LinkedinIconType
      leader1LinkedinLucide
      leader1LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader1MailUrl
      leader1MailIconType
      leader1MailLucide
      leader1MailImage { node { sourceUrl mediaItemUrl } }
      leader2Name
      leader2Role
      leader2Bio
      leader2Image { node { sourceUrl mediaItemUrl } }
      leader2LinkedinUrl
      leader2LinkedinIconType
      leader2LinkedinLucide
      leader2LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader2MailUrl
      leader2MailIconType
      leader2MailLucide
      leader2MailImage { node { sourceUrl mediaItemUrl } }
      leader3Name
      leader3Role
      leader3Bio
      leader3Image { node { sourceUrl mediaItemUrl } }
      leader3LinkedinUrl
      leader3LinkedinIconType
      leader3LinkedinLucide
      leader3LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader3MailUrl
      leader3MailIconType
      leader3MailLucide
      leader3MailImage { node { sourceUrl mediaItemUrl } }
      leader4Name
      leader4Role
      leader4Bio
      leader4Image { node { sourceUrl mediaItemUrl } }
      leader4LinkedinUrl
      leader4LinkedinIconType
      leader4LinkedinLucide
      leader4LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader4MailUrl
      leader4MailIconType
      leader4MailLucide
      leader4MailImage { node { sourceUrl mediaItemUrl } }
      leader5Name
      leader5Role
      leader5Bio
      leader5Image { node { sourceUrl mediaItemUrl } }
      leader5LinkedinUrl
      leader5LinkedinIconType
      leader5LinkedinLucide
      leader5LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader5MailUrl
      leader5MailIconType
      leader5MailLucide
      leader5MailImage { node { sourceUrl mediaItemUrl } }
      leader6Name
      leader6Role
      leader6Bio
      leader6Image { node { sourceUrl mediaItemUrl } }
      leader6LinkedinUrl
      leader6LinkedinIconType
      leader6LinkedinLucide
      leader6LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader6MailUrl
      leader6MailIconType
      leader6MailLucide
      leader6MailImage { node { sourceUrl mediaItemUrl } }
      leader7Name
      leader7Role
      leader7Bio
      leader7Image { node { sourceUrl mediaItemUrl } }
      leader7LinkedinUrl
      leader7LinkedinIconType
      leader7LinkedinLucide
      leader7LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader7MailUrl
      leader7MailIconType
      leader7MailLucide
      leader7MailImage { node { sourceUrl mediaItemUrl } }
      leader8Name
      leader8Role
      leader8Bio
      leader8Image { node { sourceUrl mediaItemUrl } }
      leader8LinkedinUrl
      leader8LinkedinIconType
      leader8LinkedinLucide
      leader8LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader8MailUrl
      leader8MailIconType
      leader8MailLucide
      leader8MailImage { node { sourceUrl mediaItemUrl } }
      leader9Name
      leader9Role
      leader9Bio
      leader9Image { node { sourceUrl mediaItemUrl } }
      leader9LinkedinUrl
      leader9LinkedinIconType
      leader9LinkedinLucide
      leader9LinkedinImage { node { sourceUrl mediaItemUrl } }
      leader9MailUrl
      leader9MailIconType
      leader9MailLucide
      leader9MailImage { node { sourceUrl mediaItemUrl } }
      advisorsTitle
      advisorsDescription
    }
  }
`;

export const PARTNERS_PAGE_FIELDS_FRAGMENT = `
  fragment PartnersPageFields on Page {
    partnersPageFields {
      partner_ta_subtitle
      partner_ta_title
      partner_ta_desc
      partner_ta_1_name
      partner_ta_1_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_2_name
      partner_ta_2_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_3_name
      partner_ta_3_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_4_name
      partner_ta_4_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_5_name
      partner_ta_5_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_6_name
      partner_ta_6_logo { node { sourceUrl mediaItemUrl } }
      partner_ta_7_name
      partner_ta_7_logo { node { sourceUrl mediaItemUrl } }
      partner_ev_title
      partner_ev_desc
      partner_ev_1_title
      partner_ev_1_desc
      partner_ev_1IconType
      partner_ev_1Lucide
      partner_ev_1Image { node { sourceUrl mediaItemUrl } }
      partner_ev_2_title
      partner_ev_2_desc
      partner_ev_2IconType
      partner_ev_2Lucide
      partner_ev_2Image { node { sourceUrl mediaItemUrl } }
      partner_ev_3_title
      partner_ev_3_desc
      partner_ev_3IconType
      partner_ev_3Lucide
      partner_ev_3Image { node { sourceUrl mediaItemUrl } }
      partner_ev_4_title
      partner_ev_4_desc
      partner_ev_4IconType
      partner_ev_4Lucide
      partner_ev_4Image { node { sourceUrl mediaItemUrl } }
      partner_cta_subtitle
      partner_cta_title
      partner_cta_desc
      partner_cta_s1_val
      partner_cta_s1_label
      partner_cta_s2_val
      partner_cta_s2_label
      partner_cta_s3_val
      partner_cta_s3_label
      partner_cta_centerIconType
      partner_cta_centerLucide
      partner_cta_centerImage { node { sourceUrl mediaItemUrl } }
      partner_cta_center_label
      partner_cta_o1_label
      partner_cta_o1_color
      partner_cta_o2_label
      partner_cta_o2_color
      partner_cta_o3_label
      partner_cta_o3_color
      partner_cta_o4_label
      partner_cta_o4_color
      partner_cta_o5_label
      partner_cta_o5_color
      partner_cta_o6_label
      partner_cta_o6_color
      partner_cta_o7_label
      partner_cta_o7_color
    }
  }
`;

export const CLIENTS_PAGE_FIELDS_FRAGMENT = `
  fragment ClientsPageFields on Page {
    clientsPageFields {
      stat1Value
      stat1Label
      stat1IconType
      stat1Lucide
      stat1Image { node { sourceUrl mediaItemUrl } }
      stat2Value
      stat2Label
      stat2IconType
      stat2Lucide
      stat2Image { node { sourceUrl mediaItemUrl } }
      stat3Value
      stat3Label
      stat3IconType
      stat3Lucide
      stat3Image { node { sourceUrl mediaItemUrl } }
      stat4Value
      stat4Label
      stat4IconType
      stat4Lucide
      stat4Image { node { sourceUrl mediaItemUrl } }
      clientGridSubtitle
      clientGridTitle
      clientGridDesc
      client1Logo { node { sourceUrl mediaItemUrl } }
      client1Industry
      client1HoverColor
      client1Url
      client2Logo { node { sourceUrl mediaItemUrl } }
      client2Industry
      client2HoverColor
      client2Url
      client3Logo { node { sourceUrl mediaItemUrl } }
      client3Industry
      client3HoverColor
      client3Url
      client4Logo { node { sourceUrl mediaItemUrl } }
      client4Industry
      client4HoverColor
      client4Url
      client5Logo { node { sourceUrl mediaItemUrl } }
      client5Industry
      client5HoverColor
      client5Url
      client6Logo { node { sourceUrl mediaItemUrl } }
      client6Industry
      client6HoverColor
      client6Url
      client7Logo { node { sourceUrl mediaItemUrl } }
      client7Industry
      client7HoverColor
      client7Url
      client8Logo { node { sourceUrl mediaItemUrl } }
      client8Industry
      client8HoverColor
      client8Url
      industrySubtitle
      industryTitle
      ind1Label
      ind1Count
      ind1Color
      ind2Label
      ind2Count
      ind2Color
      ind3Label
      ind3Count
      ind3Color
      ind4Label
      ind4Count
      ind4Color
      ind5Label
      ind5Count
      ind5Color
      ind6Label
      ind6Count
      ind6Color
      testimonialSubtitle
      testimonialTitle
            ctaSubtitle
      ctaTitle
      ctaDesc
      ctaBtn1Text
      ctaBtn1Url
      ctaBtn2Text
      ctaBtn2Url
    }
  }
`;

export const AWARDS_PAGE_FIELDS_FRAGMENT = `
  fragment AwardsPageFields on Page {
    awardsPageFields {
      awardTimelineTitle
      award1Year
      award1Org
      award1Title
      award1Desc
      award1IconType
      award1Lucide
      award1Image { node { sourceUrl mediaItemUrl } }
      award2Year
      award2Org
      award2Title
      award2Desc
      award2IconType
      award2Lucide
      award2Image { node { sourceUrl mediaItemUrl } }
      award3Year
      award3Org
      award3Title
      award3Desc
      award3IconType
      award3Lucide
      award3Image { node { sourceUrl mediaItemUrl } }
      award4Year
      award4Org
      award4Title
      award4Desc
      award4IconType
      award4Lucide
      award4Image { node { sourceUrl mediaItemUrl } }
      award5Year
      award5Org
      award5Title
      award5Desc
      award5IconType
      award5Lucide
      award5Image { node { sourceUrl mediaItemUrl } }
      award6Year
      award6Org
      award6Title
      award6Desc
      award6IconType
      award6Lucide
      award6Image { node { sourceUrl mediaItemUrl } }
      award7Year
      award7Org
      award7Title
      award7Desc
      award7IconType
      award7Lucide
      award7Image { node { sourceUrl mediaItemUrl } }
      award8Year
      award8Org
      award8Title
      award8Desc
      award8IconType
      award8Lucide
      award8Image { node { sourceUrl mediaItemUrl } }
      award9Year
      award9Org
      award9Title
      award9Desc
      award9IconType
      award9Lucide
      award9Image { node { sourceUrl mediaItemUrl } }
      award10Year
      award10Org
      award10Title
      award10Desc
      award10IconType
      award10Lucide
      award10Image { node { sourceUrl mediaItemUrl } }
      impactTitle
      impactDesc
    }
  }
`;

export const SERVICE_PAGE_FIELDS_FRAGMENT = `
  fragment ServicePageFields on Page {
    serviceFields {
      introHeading
      introParagraph
      introSubParagraph
      approachImage { node { sourceUrl mediaItemUrl } }
      approachTitle
      approachSubtitle
      approachDescription
      approachPoint1
      approachPoint2
      approachPoint3
      approachPoint4
      approachPoint5
      approachPoint6
      approachPoint7
      approachPoint8
      approachPoint9
      approachPoint10
      approachQuote
      methodologyTitle
      methodologySubtitle
      methodologyDescription
      methodologyStep1Title
      methodologyStep1Subtitle
      methodologyStep1Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep1Points
      methodologyStep2Title
      methodologyStep2Subtitle
      methodologyStep2Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep2Points
      methodologyStep3Title
      methodologyStep3Subtitle
      methodologyStep3Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep3Points
      methodologyStep4Title
      methodologyStep4Subtitle
      methodologyStep4Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep4Points
      methodologyStep5Title
      methodologyStep5Subtitle
      methodologyStep5Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep5Points
      methodologyStep6Title
      methodologyStep6Subtitle
      methodologyStep6Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep6Points
      methodologyStep7Title
      methodologyStep7Subtitle
      methodologyStep7Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep7Points
      methodologyStep8Title
      methodologyStep8Subtitle
      methodologyStep8Icon { node { sourceUrl mediaItemUrl } }
      methodologyStep8Points
      methodologyQuote
      toolsTitle
      toolsSubtitle
      toolsDescription
      toolsInsight
      toolsItem1Icon { node { sourceUrl mediaItemUrl } }
      toolsItem1Text
      toolsItem2Icon { node { sourceUrl mediaItemUrl } }
      toolsItem2Text
      toolsItem3Icon { node { sourceUrl mediaItemUrl } }
      toolsItem3Text
      toolsItem4Icon { node { sourceUrl mediaItemUrl } }
      toolsItem4Text
      toolsItem5Icon { node { sourceUrl mediaItemUrl } }
      toolsItem5Text
      toolsImage { node { sourceUrl mediaItemUrl } }
      toolsQuote
      valuePropTitle
      valuePropSubtitle
      valuePropItem1Title
      valuePropItem1Desc
      valuePropItem2Title
      valuePropItem2Desc
      valuePropItem3Title
      valuePropItem3Desc
      valuePropItem4Title
      valuePropItem4Desc
      valuePropItem5Title
      valuePropItem5Desc
      valuePropItem6Title
      valuePropItem6Desc
      ctaHeading
      ctaDescription
      ctaButtonText
      ctaButtonLink
    }
  }
`;

export async function getPageBySlug(slug: string) {
  // Ensure slug is properly formatted as a URI
  const formattedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  const finalSlug = formattedSlug.endsWith("/")
    ? formattedSlug
    : `${formattedSlug}/`;

  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT}
    ${CONTACT_PAGE_FIELDS_FRAGMENT}
    ${CAREERS_PAGE_FIELDS_FRAGMENT}
    ${ABOUT_PAGE_FIELDS_FRAGMENT}
    ${LEADERSHIP_PAGE_FIELDS_FRAGMENT}
    ${PARTNERS_PAGE_FIELDS_FRAGMENT}
    ${CLIENTS_PAGE_FIELDS_FRAGMENT}
    ${AWARDS_PAGE_FIELDS_FRAGMENT}
    query GetPageBySlug($id: ID!, $idType: PageIdType!) {

      page(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
        template {
          templateName
        }
        pageRoutingSettings {
          nextjsTemplate
        }
        featuredImage { node { sourceUrl } } 
        ...GlobalSettingsFields
        ...ContactPageFields
        ...CareersPageFields
        ...AboutPageFields
        ...LeadershipPageFields
        ...PartnersPageFields
        ...ClientsPageFields
        ...AwardsPageFields
      }
    }

  `;

  const variables = {
    id: finalSlug,
    idType: "URI",
  };

  const response = await fetchGraphQL(query, variables);

  let page = response?.data?.page;

  // Try fallback without trailing slash if primary fails
  if (!page) {
    const fallbackVariables = { id: formattedSlug, idType: "URI" };
    const fallbackResponse = await fetchGraphQL(query, fallbackVariables);
    page = fallbackResponse?.data?.page;
  }

  // Final fallback: query by slug directly via the pages connection
  if (!page) {
    // We construct a query to search by name (slug) and get the first node
    const slugQuery = `
      ${GLOBAL_SETTINGS_FRAGMENT}
      ${CONTACT_PAGE_FIELDS_FRAGMENT}
      ${CAREERS_PAGE_FIELDS_FRAGMENT}
      ${ABOUT_PAGE_FIELDS_FRAGMENT}
      ${LEADERSHIP_PAGE_FIELDS_FRAGMENT}
      ${PARTNERS_PAGE_FIELDS_FRAGMENT}
      ${CLIENTS_PAGE_FIELDS_FRAGMENT}
      ${AWARDS_PAGE_FIELDS_FRAGMENT}
      query GetPageBySlugName($name: String!) {
        pages(where: { name: $name }, first: 1) {
          nodes {
            id
            title
            content
            slug
            uri
            date
            template {
              templateName
            }
            pageRoutingSettings {
              nextjsTemplate
            }
            featuredImage { node { sourceUrl } } 
            ...GlobalSettingsFields
            ...ContactPageFields
            ...CareersPageFields
            ...AboutPageFields
            ...LeadershipPageFields
            ...PartnersPageFields
            ...ClientsPageFields
            ...AwardsPageFields
          }
        }
      }
    `;
    const slugName = slug.replace(/^\/|\/$/g, ""); // strip slashes for 'name' argument
    const finalFallbackResponse = await fetchGraphQL(slugQuery, {
      name: slugName,
    });
    if (finalFallbackResponse?.data?.pages?.nodes?.length > 0) {
      page = finalFallbackResponse.data.pages.nodes[0];
    }
  }

  if (page) {
    const globalFallback = await getGlobalSettings();
    if (globalFallback) {
      page.globalSettings = mergeACFData(page.globalSettings, globalFallback);
    }
  }

  // Fallback for known static pages if WP is down
  if (!page) {
    if (slug === "/about" || slug === "about") {
      return {
        title: "About Hutech Solutions",
        content:
          "Hutech Solutions Technologies is an architectural powerhouse...",
        slug: "about",
        uri: "/about",
      };
    }
  }

  return page;
}

export async function getAllPages() {
  const query = `
    query GetAllPages {
      pages(first: 100) {
        nodes {
          title
          slug
          uri
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    return response?.data?.pages?.nodes || [];
  } catch (error) {
    console.error("Error fetching all pages:", error);
    return [];
  }
}

export interface SitemapLink {
  name: string;
  path: string;
}

export async function getSitemapData(): Promise<SitemapLink[]> {
  const [
    pages,
    services,
    industries,
    solutions,
    caseStudies,
    events,
    news,
    careers,
  ] = await Promise.all([
    getAllPages(),
    getServices(),
    getIndustries(),
    getSolutions(),
    getCaseStudies(),
    getEvents(),
    getNews(),
    getCareerPosts(),
  ]);

  const allLinks: SitemapLink[] = [];

  pages.forEach((p: any) => {
    if (p.uri && p.title) allLinks.push({ name: p.title, path: p.uri });
  });

  services.forEach((s: any) => {
    if (s.slug && s.title)
      allLinks.push({ name: s.title, path: `/services/${s.slug}` });
  });

  industries.forEach((i: any) => {
    if (i.slug && i.title)
      allLinks.push({ name: i.title, path: `/industries/${i.slug}` });
  });

  solutions.forEach((sol: any) => {
    if (sol.slug && sol.title)
      allLinks.push({ name: sol.title, path: `/solutions/${sol.slug}` });
  });

  caseStudies.forEach((c: any) => {
    if (c.slug && c.title)
      allLinks.push({
        name: c.title,
        path: `/resources/case-studies/${c.slug}`,
      });
  });

  events.forEach((e: any) => {
    if (e.slug && e.title)
      allLinks.push({ name: e.title, path: `/resources/events/${e.slug}` });
  });

  news.forEach((n: any) => {
    if (n.slug && n.title)
      allLinks.push({ name: n.title, path: `/resources/news/${n.slug}` });
  });

  careers.forEach((c: any) => {
    if (c.slug && c.title)
      allLinks.push({ name: c.title, path: `/careers/${c.slug}` });
  });

  // Remove duplicates based on path
  const seen = new Set();
  const uniqueLinks: SitemapLink[] = [];

  allLinks.forEach((link) => {
    const p =
      link.path.endsWith("/") && link.path !== "/"
        ? link.path.slice(0, -1)
        : link.path;
    if (!seen.has(p)) {
      seen.add(p);
      uniqueLinks.push(link);
    }
  });

  return uniqueLinks;
}

export async function getHomePage() {
  const pageFieldsFragment = `
    databaseId
    id
    title
    content
    slug
    uri
    homePageFields {
      withNabhira {
        wnTitle
        wnI1Cat
        wnI1Title
        wnI1Desc
        wnI1Image { node { sourceUrl } }
        wnI1ImageUrl
        wnI2Cat
        wnI2Title
        wnI2Desc
        wnI2Image { node { sourceUrl } }
        wnI2ImageUrl
        wnI3Cat
        wnI3Title
        wnI3Desc
        wnI3Image { node { sourceUrl } }
        wnI3ImageUrl
      }
      capabilities {
        cTitle
        cDesc
      }
      industries {
        iTitle
        iDesc
      }
      bigThinkers {
        bSecTitle
        bTitle
        bAuthor
        bBtnText
        bBtnUrl
        bImage { node { sourceUrl } }
        bImageUrl
      }
      clients {
        clTitle
        clI1Name
        clI1Logo { node { sourceUrl } }
        clI1LogoUrl
        clI2Name
        clI2Logo { node { sourceUrl } }
        clI2LogoUrl
        clI3Name
        clI3Logo { node { sourceUrl } }
        clI3LogoUrl
        clI4Name
        clI4Logo { node { sourceUrl } }
        clI4LogoUrl
        clI5Name
        clI5Logo { node { sourceUrl } }
        clI5LogoUrl
        clCl6Name
        clCl6Logo { node { sourceUrl } }
        clCl6LogoUrl
      }
      gridHeaders {
        ltHeaderTitle
        ltHeaderDesc
      }
      successTitle
      successDesc
      successCount
    }
    globalSettings {
      heroSlides {
        heroS1Title
        heroS1Desc
        heroS1Image { node { sourceUrl } }
        heroS1ImageUrl
        heroS1VideoUrl
        heroS1Button { url title }
        heroS2Title
        heroS2Desc
        heroS2Image { node { sourceUrl } }
        heroS2ImageUrl
        heroS2VideoUrl
        heroS2Button { url title }
        heroS3Title
        heroS3Desc
        heroS3Image { node { sourceUrl } }
        heroS3ImageUrl
        heroS3VideoUrl
        heroS3Button { url title }
      }
      limitlessTogether {
        ltTitle
        ltImage { node { sourceUrl } }
        ltImageUrl
        ltP1
        ltP2
        ltP3
        ltQ1
        ltA1
        ltQ2
        ltA2
        ltQ3
        ltA3
        ltQ4
        ltA4
      }
    }
  `;

  const queryByUri = (uri: string) => `
    query GetHomePageByUri {
      page(id: "${uri}", idType: URI) {
        ${pageFieldsFragment}
        # Fetch What's New settings separately to avoid killing the whole query if fields are missing
        whatSNewSettings1 {
          sectionTitle
          sectionSubtitle
          filterBy
          filterCategory { nodes { slug name } }
          filterTag { nodes { slug name } }
          postsCount
        }
      }
      thinkingPosts: posts(where: {categoryName: "Thinking"}, first: 6) {
        nodes {
          title
          categories { nodes { name } }
          featuredImage { node { sourceUrl } } 
          uri
        }
      }
    }
  `;

  try {
    let page = null;
    let thinkingPosts = [];

    // Try root URI first
    let response = await fetchGraphQL(queryByUri("/"));

    if (response?.errors) {
      console.warn(
        "DEBUG [getHomePage]: Primary query failed, retrying without optional sections...",
      );
      const fallbackSafeQuery = `
        query GetHomePageSafe {
          page(id: "/", idType: URI) { ${pageFieldsFragment} }
        }
      `;
      response = await fetchGraphQL(fallbackSafeQuery);
    }

    page = response?.data?.page;
    thinkingPosts = response?.data?.thinkingPosts?.nodes || [];

    // Fallback URI lookups if needed
    if (!page) {
      response = await fetchGraphQL(queryByUri("/home/"));
      page = response?.data?.page;
      thinkingPosts = response?.data?.thinkingPosts?.nodes || thinkingPosts;
    }

    if (!page) {
      console.error(
        '[getHomePage ERROR]: No page data found for "/" or "/home/". Falling back to static data.',
      );
      // Return a structured static object instead of null to allow the page to render
      return {
        homePageFields: {},
        globalSettings: {},
        newsPosts: blogPosts.slice(0, 3).map((post) => ({
          title: post.title,
          date: post.date,
          featuredImage: { node: { sourceUrl: post.image } },
          uri: `/resources/blogs/${post.id}`,
        })),
        thinkingPosts: blogPosts.slice(0, 6).map((post) => ({
          title: post.title,
          featuredImage: { node: { sourceUrl: post.image } },
          uri: `/resources/blogs/${post.id}`,
        })),
      };
    }

    // Process What's New settings
    const rawSettings = page?.whatSNewSettings1;
    const whatsNewSettings = {
      wnTitle: rawSettings?.sectionTitle || "What's New",
      wnSubtitle:
        rawSettings?.sectionSubtitle ||
        "The current and future news from Hutech Solutions and around the world.",
      wnFilterBy: rawSettings?.filterBy || "category",
      wnCategory: rawSettings?.filterCategory || { nodes: [] },
      wnTag: rawSettings?.filterTag || { nodes: [] },
      wnPostsCount: rawSettings?.postsCount || 10,
    };

    // Fetch News Posts
    const filterBy = whatsNewSettings.wnFilterBy;
    const postsCount = Math.min(
      Math.max(whatsNewSettings.wnPostsCount || 3, 1),
      12,
    );
    // Extract filter values (handles multiple checkboxes/selections)
    let filterValues: string[] = [];
    if (filterBy === "tag") {
      filterValues =
        whatsNewSettings.wnTag?.nodes
          ?.map((n: any) => n.slug || n.name)
          .filter(Boolean) || [];
    } else {
      filterValues =
        whatsNewSettings.wnCategory?.nodes
          ?.map((n: any) => n.slug || n.name)
          .filter(Boolean) || [];
    }

    // Build where clause using slug-compatible args:
    // - categoryName accepts a comma-separated list of slugs (WPGraphQL)
    // - tag accepts a single slug; for multiple tags join with comma
    // (categoryIn / tagIn expect integer term IDs — not slugs — so they are avoided)
    let whereClause: string;
    if (filterValues.length > 0) {
      if (filterBy === "tag") {
        // WPGraphQL `tag` arg accepts a single slug string
        whereClause = `tag: ${JSON.stringify(filterValues[0])}`;
      } else {
        // WPGraphQL `categoryName` accepts a comma-separated slug string for OR filtering
        whereClause = `categoryName: ${JSON.stringify(filterValues.join(","))}`;
      }
    } else {
      // No filter configured — default fallback labels
      whereClause =
        filterBy === "tag" ? 'tag: "featured"' : 'categoryName: "news"';
    }

    const postsQuery = `
      query GetWhatsNewPosts {
        posts(where: { ${whereClause} }, first: ${postsCount}) {
          nodes {
            title
            date
            slug
            featuredImage { node { sourceUrl } } 
            uri
          }
        }
      }
    `;

    const postsResponse = await fetchGraphQL(postsQuery);
    let newsPosts = postsResponse?.data?.posts?.nodes || [];

    // Only use the no-filter fallback when NO category/tag was configured at all
    if (newsPosts.length === 0 && filterValues.length === 0) {
      const fallbackPostsResponse = await fetchGraphQL(
        `query { posts(first: ${postsCount}) { nodes { title date featuredImage { node { sourceUrl } }  uri } } }`,
      );
      newsPosts = fallbackPostsResponse?.data?.posts?.nodes || [];
    }

    return {
      ...page,
      newsPosts,
      thinkingPosts,
      settings: {
        ...whatsNewSettings,
        wnPostsCount: whatsNewSettings.wnPostsCount,
      },
    };
  } catch (error) {
    console.error("[WPGraphQL FETCH ERROR]:", error);

    // Return a minimal valid object that satisfies the UI requirements
    // This allows the Hero and other components to use their own defaults
    return {
      homePageFields: {},
      globalSettings: {},
      newsPosts: blogPosts.slice(0, 3).map((post) => ({
        title: post.title,
        date: post.date,
        featuredImage: { node: { sourceUrl: post.image } },
        uri: `/resources/blogs/${post.id}`,
      })),
      thinkingPosts: blogPosts.slice(0, 6).map((post) => ({
        title: post.title,
        featuredImage: { node: { sourceUrl: post.image } },
        uri: `/resources/blogs/${post.id}`,
      })),
    };
  }
}

export async function getServices() {
  const query = `
    query GetServices {
      services(first: 100) {
        nodes {
          id
          title
          excerpt
          slug
          serviceCategories {
            nodes {
              name
              slug
            }
          }
          featuredImage { node { sourceUrl } } 
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    return response?.data?.services?.nodes || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getSolutions() {
  const query = `
    query GetSolutions {
      solutions(first: 100) {
        nodes {
          id
          title
          slug
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    return response?.data?.solutions?.nodes || [];
  } catch (error) {
    console.error("Error fetching solutions:", error);
    return [];
  }
}

export async function getIndustries() {
  const query = `
    query GetIndustries {
      industries(first: 100) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage { node { sourceUrl } } 
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    return response?.data?.industries?.nodes || [];
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
}

export async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          date
          slug
          featuredImage { node { sourceUrl } } 
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          blogPostSettings {
            authorRole
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    const posts = response?.data?.posts?.nodes;

    if (!posts || posts.length === 0) {
      console.warn(
        "DEBUG [getAllPosts]: No posts found or fetch failed. Using static fallback data.",
      );
      return blogPosts.map((post) => ({
        id: post.id.toString(),
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        slug: post.id.toString(),
        featuredImage: { node: { sourceUrl: post.image } },
        author: { node: { name: post.author } },
        categories: { nodes: [{ name: post.category }] },
      }));
    }

    return posts;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return blogPosts.map((post) => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      slug: post.id.toString(),
      featuredImage: { node: { sourceUrl: post.image } },
      author: { node: { name: post.author } },
      categories: { nodes: [{ name: post.category }] },
    }));
  }
}

export async function getPostBySlug(slug: string) {
  console.log(`[getPostBySlug] Attempting to find post with slug: "${slug}"`);

  // Strategy 1: Find in the list of all posts (more reliable for matching)
  try {
    const allPosts = await getAllPosts();
    console.log(`[getPostBySlug] allPosts count: ${allPosts.length}`);
    const foundPost = allPosts.find(
      (p: any) =>
        p.slug === slug ||
        p.slug === slug.toLowerCase() ||
        p.id?.toString() === slug,
    );

    if (foundPost) {
      console.log(
        `[getPostBySlug] Post found in allPosts list for: ${slug}. Fetching full content...`,
      );
      // Re-fetch by ID to get the full "content" field since getAllPosts might be trimmed
      const fullPost = await getPostById(foundPost.id);
      if (fullPost) return fullPost;

      console.log(
        `[getPostBySlug] getPostById failed, returning foundPost as fallback for: ${slug}`,
      );
      return foundPost;
    }
  } catch (err) {
    console.error("[getPostBySlug] Error searching in allPosts:", err);
  }

  // Strategy 2: Direct GraphQL query by slug (fallback)
  const query = `
    query GetPostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        databaseId
        title
        content
        date
        slug
        excerpt
        featuredImage { node { sourceUrl } } 
        author { node { name } }
        categories { nodes { name slug } }
        blogPostSettings {
          authorRole
        }
      }
    }
  `;

  try {
    const variables = { id: slug, idType: "SLUG" };
    const response = await fetchGraphQL(query, variables);

    if (response?.data?.post) {
      console.log(
        `[getPostBySlug] Post found via direct SLUG query for: ${slug}`,
      );
      return response.data.post;
    }

    // Strategy 3: Try URI as last resort - try to find it first from all posts
    console.log(`[getPostBySlug] Trying URI/DatabaseId fallback for: ${slug}`);
  } catch (error) {
    console.error(`[getPostBySlug] Exception for ${slug}:`, error);
  }

  console.log(`[getPostBySlug] No post found for slug: ${slug}`);
  return null;
}

// ─── DATE HELPERS ─────────────────────────────────────────────────────────────

/**
 * Formats a date string (ISO or WP format) into a human-readable "X days ago" string.
 */
function formatDateToDaysAgo(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());

  const diffHrs = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffHrs < 1) return "Just now";
  if (diffHrs < 24) return `${diffHrs} ${diffHrs === 1 ? "hr" : "hrs"} ago`;

  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;

  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  const months = Math.floor(diffDays / 30);
  if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }

  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

// ─── CAREERS CPT ─────────────────────────────────────────────────────────────

/**
 * Fetches all published job openings from the WordPress Careers CPT.
 * Falls back to the static jobs array from migrated_data.ts if WP is unavailable.
 */
export async function getCareerPosts() {
  const query = `
    query GetCareerPosts {
      careers(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          slug
          title
          date
          careerJobOpeningDetails {
            careerDepartment
            careerLocation
            careerType
            careerExperience
            careerJobId
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    const nodes = response?.data?.careers?.nodes;

    if (!nodes || nodes.length === 0) {
      console.warn(
        "[getCareerPosts]: No careers found or fetch failed. Using static fallback.",
      );
      return jobs.map((job: any) => ({
        id: job.id,
        slug: slugify(job.title, job.location),
        title: job.title,
        department: job.department,
        location: job.location,
        type: job.type,
        experience: job.experience,
        posted: job.posted,
        description: "",
      }));
    }

    // Normalize to the same shape the UI expects
    return nodes.map((node: any) => ({
      id: node.slug, // use slug as id so /careers/[id] routes work
      slug: node.slug,
      title: node.title,
      department: node.careerJobOpeningDetails?.careerDepartment || "",
      location: node.careerJobOpeningDetails?.careerLocation || "",
      type: node.careerJobOpeningDetails?.careerType || "Full-time",
      experience: node.careerJobOpeningDetails?.careerExperience || "",
      jobId: node.careerJobOpeningDetails?.careerJobId || "",
      posted: formatDateToDaysAgo(node.date), // Use published date
    }));
  } catch (error) {
    console.error("[getCareerPosts] Error:", error);
    return null;
  }
}

/**
 * Fetches a single job opening by slug from the WordPress Careers CPT.
 * Returns null if not found (caller should fall back to static data).
 */
export async function getCareerPostBySlug(slug: string) {
  const query = `
    query GetCareerBySlug($id: ID!) {
      career(id: $id, idType: SLUG) {
        id
        slug
        title
        date
        content
        careerJobOpeningDetails {
          careerDepartment
          careerLocation
          careerType
          careerExperience
          careerJobId
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, { id: slug });
    const node = response?.data?.career;

    if (!node) {
      console.warn(
        `[getCareerPostBySlug]: No career found for slug "${slug}".`,
      );
      return null;
    }

    return {
      id: node.id || node.slug,
      slug: node.slug,
      title: node.title,
      date: node.date,
      department:
        node.careerJobOpeningDetails?.careerDepartment || "Engineering",
      location:
        node.careerJobOpeningDetails?.careerLocation ||
        "Hutech Solutions Technologies",
      type: node.careerJobOpeningDetails?.careerType || "Full-time",
      experience: node.careerJobOpeningDetails?.careerExperience || "",
      jobId: node.careerJobOpeningDetails?.careerJobId || "",
      posted: formatDateToDaysAgo(node.date),
      content: node.content || "",
    };
  } catch (error) {
    console.error(`[getCareerPostBySlug] Error for slug "${slug}":`, error);
    return null;
  }
}

// Helper to fetch full post data by ID
async function getPostById(id: string) {
  const query = `
    query GetPostById($id: ID!) {
      post(id: $id, idType: ID) {
        id
        databaseId
        title
        content
        date
        slug
        excerpt
        featuredImage { node { sourceUrl } } 
        author { node { name } }
        categories { nodes { name slug } }
        blogPostSettings {
          authorRole
        }
      }
    }
  `;
  const response = await fetchGraphQL(query, { id });
  return response?.data?.post || null;
}

/**
 * Fetch all events for the events listing page.
 */
export async function getEvents() {
  const query = `
    query GetEvents {
      events(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage { node { sourceUrl } } 
          eventFields {
            eventDate
            eventStartDate
            eventStartTime
            eventEndDate
            eventEndTime
            eventLocation
            eventExternalUrl
            eventButtonText
            eventButtonTextAlt
            eventType
            eventBannerImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    const nodes = response?.data?.events?.nodes || [];

    if (nodes.length === 0) {
      return events.map((node: any) => ({
        id: node.id || node.slug,
        slug: node.slug || slugify(node.title, node.location),
        title: node.title,
        excerpt: node.description || node.title,
        date: node.date,
        startDate: node.date,
        endDate: node.date,
        location: node.location || "Global",
        content: node.description || "",
        image: node.image || "/images/placeholder.jpg",
        externalUrl: null,
        buttonText: "Register Now",
        eventType: "Flagship Event",
      }));
    }

    return nodes.map((node: any) => ({
      id: node.id,
      slug: node.slug,
      title: node.title,
      excerpt: node.excerpt,
      date: node.eventFields?.eventDate || node.date,
      startDate:
        node.eventFields?.eventStartDate && node.eventFields?.eventStartTime
          ? `${node.eventFields.eventStartDate.split("T")[0]}T${node.eventFields.eventStartTime}`
          : node.eventFields?.eventStartDate,
      endDate:
        node.eventFields?.eventEndDate && node.eventFields?.eventEndTime
          ? `${node.eventFields.eventEndDate.split("T")[0]}T${node.eventFields.eventEndTime}`
          : node.eventFields?.eventEndDate,
      location: node.eventFields?.eventLocation || "Global",
      content: node.content || "",
      image:
        node.eventFields?.eventBannerImage?.node?.sourceUrl ||
        node.featuredImage?.node?.sourceUrl ||
        "/images/placeholder.jpg",
      externalUrl: node.eventFields?.eventExternalUrl || null,
      buttonText:
        node.eventFields?.eventButtonText ||
        node.eventFields?.eventButtonTextAlt,
      eventType:
        node.eventFields?.eventType ||
        (node.eventFields?.eventExternalUrl
          ? "External Event"
          : "Flagship Event"),
    }));
  } catch (error) {
    console.error("[getEvents] Error:", error);
    return events.map((node: any) => ({
      id: node.id || node.slug,
      slug: node.slug || slugify(node.title, node.location),
      title: node.title,
      excerpt: node.description || node.title,
      date: node.date,
      startDate: node.date,
      endDate: node.date,
      location: node.location || "Global",
      content: node.description || "",
      image: node.image || "/images/placeholder.jpg",
      externalUrl: null,
      buttonText: "Register Now",
      eventType: "Flagship Event",
    }));
  }
}

/**
 * Fetch a single event by its slug.
 */
export async function getEventBySlug(slug: string) {
  const query = `
    query GetEventBySlug($id: ID!) {
      event(id: $id, idType: SLUG) {
        id
        title
        content
        date
        slug
        featuredImage { node { sourceUrl } } 
        eventFields {
          eventDate
          eventStartDate
          eventStartTime
          eventEndDate
          eventEndTime
          eventLocation
          eventExternalUrl
          eventButtonText
          eventButtonTextAlt
          eventType
          eventBannerImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, { id: slug });
    const node = response?.data?.event;

    if (!node) {
      console.warn(`[getEventBySlug]: No event found for slug "${slug}".`);
      return null;
    }

    return {
      id: node.id,
      title: node.title,
      slug: node.slug,
      date: node.eventFields?.eventDate || node.date,
      startDate:
        node.eventFields?.eventStartDate && node.eventFields?.eventStartTime
          ? `${node.eventFields.eventStartDate.split("T")[0]}T${node.eventFields.eventStartTime}`
          : node.eventFields?.eventStartDate,
      endDate:
        node.eventFields?.eventEndDate && node.eventFields?.eventEndTime
          ? `${node.eventFields.eventEndDate.split("T")[0]}T${node.eventFields.eventEndTime}`
          : node.eventFields?.eventEndDate,
      location: node.eventFields?.eventLocation || "Global",
      content: node.content || "",
      excerpt: node.excerpt || "",
      image:
        node.eventFields?.eventBannerImage?.node?.sourceUrl ||
        node.featuredImage?.node?.sourceUrl ||
        "/images/placeholder.jpg",
      externalUrl: node.eventFields?.eventExternalUrl || null,
      buttonText: node.eventFields?.eventButtonText,
      eventType:
        node.eventFields?.eventType ||
        (node.eventFields?.eventExternalUrl
          ? "External Event"
          : "Flagship Event"),
    };
  } catch (error) {
    console.error(`[getEventBySlug] Error for slug "${slug}":`, error);
    return null;
  }
}

/**
 * News Queries
 * Uses WordPress REST API directly.
 * NOTE: To switch to WPGraphQL, register the 'news' CPT in functions.php with:
 *   'show_in_graphql'     => true,
 *   'graphql_single_name' => 'newsItem',
 *   'graphql_plural_name' => 'newsItems',
 */

const WP_BASE_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "http://localhost/wordpress";

/**
 * Strips the site name suffix from a scraped page title.
 * News sites append site/section names after separators like:
 *   "Article Title | Bengaluru News - Times of India"
 *   "Article Title — BBC News"
 *   "Article Title · Reuters"
 */
function cleanTitle(
  rawTitle: string | undefined,
  siteName?: string,
): string | undefined {
  if (!rawTitle) return undefined;
  let title = rawTitle.trim();

  // If we know the og:site_name, try to strip it and anything after the last separator
  if (siteName) {
    // Remove "| Site Name" or "- Site Name" or "— Site Name" at the end
    const escaped = siteName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    title = title
      .replace(new RegExp(`[|\\-—·]\\s*${escaped}.*$`, "i"), "")
      .trim();
  }

  // Strip trailing section/site name after the LAST strong separator (|, —, ·)
  // Only strip if the suffix is short (< 60 chars = likely a site name, not part of the title)
  const pipeIdx = title.lastIndexOf(" | ");
  const dashIdx = title.lastIndexOf(" — ");
  const bulletIdx = title.lastIndexOf(" · ");
  const sepIdx = Math.max(pipeIdx, dashIdx, bulletIdx);

  if (sepIdx > 0) {
    const suffix = title.slice(sepIdx + 3);
    if (suffix.length < 60) {
      title = title.slice(0, sepIdx).trim();
    }
  }

  // Also strip trailing "- Short Suffix" only if suffix is <= 40 chars
  const lastDash = title.lastIndexOf(" - ");
  if (lastDash > 0) {
    const suffix = title.slice(lastDash + 3);
    if (suffix.length <= 40) {
      title = title.slice(0, lastDash).trim();
    }
  }

  return title || rawTitle.trim();
}

/**
 * Fetches Open Graph / meta metadata from an external URL.
 * Used to auto-populate title, source, and date for external news links.
 * Results are cached by Next.js for 24 hours (revalidate: 86400).
 */
async function fetchExternalMeta(
  url: string,
): Promise<{ title?: string; source?: string; date?: string }> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Nabhirabot/1.0)" },
      next: { revalidate: 86400 }, // cache for 24 hrs
    });
    if (!res.ok) return {};
    const html = await res.text();

    // og:title (preferred — usually already clean)
    const ogTitle =
      html.match(
        /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ||
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i,
      )?.[1];

    // <title> fallback — often contains site name suffix
    const htmlTitle = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1];

    // article:published_time or date meta
    const ogDate =
      html.match(
        /<meta[^>]+property=["']article:published_time["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ||
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']article:published_time["']/i,
      )?.[1] ||
      html.match(
        /<meta[^>]+name=["']date["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ||
      html.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1];

    // og:site_name
    const ogSource =
      html.match(
        /<meta[^>]+property=["']og:site_name["'][^>]+content=["']([^"']+)["']/i,
      )?.[1] ||
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:site_name["']/i,
      )?.[1];

    // Use og:title if available (cleaner), fall back to <title> and strip suffix
    const rawTitle = ogTitle || htmlTitle;
    const title = cleanTitle(rawTitle, ogSource?.trim());

    return {
      title,
      source: ogSource?.trim(),
      date: ogDate?.trim(),
    };
  } catch {
    return {};
  }
}

/**
 * Enriches a mapped news item with external URL metadata,
 * only filling in fields that aren't already set manually in ACF.
 * For external news items, the external OG title is always preferred.
 */
async function enrichWithExternalMeta(item: any): Promise<any> {
  if (!item.externalUrl) return item;

  const needsSource = !item.source || item.source === "";
  const needsDate = !item.date || item.date === "";
  // For external items: ALWAYS try to get the real article title from OG metadata
  // The WordPress post title (e.g., "Test News") is just a placeholder

  const meta = await fetchExternalMeta(item.externalUrl);

  // Derive source from domain if og:site_name isn't available
  const domainSource = (() => {
    try {
      const hostname = new URL(item.externalUrl).hostname.replace("www.", "");
      return hostname.split(".")[0].replace(/\b\w/g, (c) => c.toUpperCase());
    } catch {
      return undefined;
    }
  })();

  return {
    ...item,
    // External title always wins over the WordPress post title (which is just a placeholder)
    title: meta.title || item.title,
    // ACF-entered source wins; otherwise use OG site_name or domain
    source: needsSource
      ? meta.source || domainSource || item.source
      : item.source,
    // ACF-entered date wins; otherwise use OG article:published_time
    date: needsDate ? meta.date || item.date : item.date,
  };
}

function mapNewsPost(post: any) {
  // ACF fields are registered as top-level fields via register_rest_field in functions.php
  // They can also appear under post.acf if ACF REST API is enabled in ACF settings
  const externalUrl =
    post.news_external_url || post.acf?.news_external_url || null;
  const acfSource = post.news_source || post.acf?.news_source || "";
  const acfDate = post.news_date || post.acf?.news_date || "";
  const mediaContact =
    post.news_media_contact ||
    post.acf?.news_media_contact ||
    "press@nabhira.tech";
  const acfVideoFile =
    post.news_video_file || post.acf?.news_video_file || null;
  const acfVideoUrl = post.news_video_url || post.acf?.news_video_url || null;
  const videoUrl = acfVideoFile || acfVideoUrl;

  // For internal news: use "Hutech Solutions News" and today's WordPress post date as fallbacks
  // For external news: leave empty so enrichWithExternalMeta can fill from OG metadata
  const source = acfSource || (externalUrl ? "" : "Hutech Solutions News");
  const date = acfDate || post.date; // WordPress post date = publish date (today for new posts)

  return {
    id: post.id,
    title: post.title?.rendered || "",
    slug: post.slug,
    date,
    source,
    externalUrl,
    mediaContact,
    videoUrl,
    excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "",
    content: post.content?.rendered || "",
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/images/placeholder.jpg",
  };
}

export async function getNews(): Promise<any[]> {
  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/news?per_page=100&orderby=date&order=desc&_embed`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) {
      console.error(
        `[getNews] REST API returned ${res.status}: ${res.statusText}`,
      );
      return newsItems.map((item: any) => ({
        ...item,
        slug: item.slug || String(item.id),
      }));
    }
    const posts: any[] = await res.json();
    if (!posts || posts.length === 0) {
      return newsItems.map((item: any) => ({
        ...item,
        slug: item.slug || String(item.id),
      }));
    }
    const mapped = posts.map(mapNewsPost);

    // Enrich external news items with OG metadata in parallel
    const enriched = await Promise.all(mapped.map(enrichWithExternalMeta));

    // Sort by publication date descending — latest first
    return enriched.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  } catch (error) {
    console.error("[getNews] Error fetching news:", error);
    return newsItems.map((item: any) => ({
      ...item,
      slug: item.slug || String(item.id),
    }));
  }
}

export async function getNewsBySlug(slug: string): Promise<any | null> {
  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/news?slug=${slug}&_embed`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    const posts: any[] = await res.json();
    if (!posts.length) return null;
    return mapNewsPost(posts[0]);
  } catch (error) {
    console.error(`[getNewsBySlug] Error for slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch all case studies for the case studies listing page.
 */
export async function getCaseStudies() {
  const query = `
    query GetCaseStudies {
      caseStudies(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          featuredImage { node { sourceUrl } } 
          caseStudyTags {
            nodes {
              name
            }
          }
          caseStudyFields {
            clientName
            clientIndustry
            impactMetric
            highlight1
            highlight2
            highlight3
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    const nodes = response?.data?.caseStudies?.nodes || [];

    return nodes.map((node: any) => ({
      id: node.id,
      slug: node.slug,
      title: node.title,
      subtitle: node.caseStudyFields?.executiveSummaryTitle || "",
      client: node.caseStudyFields?.clientName || "",
      industry: node.caseStudyFields?.clientIndustry || "",
      image: node.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
      impact: node.caseStudyFields?.impactMetric || "",
      tags:
        node.caseStudyTags?.nodes?.map((t: any) => t.name) ||
        [node.caseStudyFields?.clientIndustry].filter(Boolean) ||
        [],
    }));
  } catch (error) {
    console.error("[getCaseStudies] Error:", error);
    return [];
  }
}

/**
 * Fetch a single case study by its slug.
 */
export async function getCaseStudyBySlug(slug: string) {
  const query = `
    query GetCaseStudyBySlug($id: ID!) {
      caseStudy(id: $id, idType: SLUG) {
        id
        title
        slug
        content
        date
        featuredImage { node { sourceUrl } } 
        caseStudyFields {
          clientName
          clientIndustry
          impactMetric
          highlight1
          highlight2
          highlight3
          executiveSummaryTitle
          executiveSummary
          customerBackgroundTitle
          customerBackground
          challengeMainTitle
          challengeDescription
          challenge1Title
          challenge1Description
          challenge2Title
          challenge2Description
          challenge3Title
          challenge3Description
          challenge4Title
          challenge4Description
          challenge5Title
          challenge5Description
          challenge6Title
          challenge6Description
          challenge7Title
          challenge7Description
          challenge8Title
          challenge8Description
          solutionMainTitle
          solutionDescription
          solution1Title
          solution1Description
          solution1Items
          solution2Title
          solution2Description
          solution2Items
          solution3Title
          solution3Description
          solution3Items
          solution4Title
          solution4Description
          solution4Items
          solution5Title
          solution5Description
          solution5Items
          solution6Title
          solution6Description
          solution6Items
          solution7Title
          solution7Description
          solution7Items
          solution8Title
          solution8Description
          solution8Items
          solution9Title
          solution9Description
          solution9Items
          solution10Title
          solution10Description
          solution10Items
          impactMainTitle
          impactIntro
          result1Title
          result1Description
          result1Metrics
          result2Title
          result2Description
          result2Metrics
          result3Title
          result3Description
          result3Metrics
          result4Title
          result4Description
          result4Metrics
          result5Title
          result5Description
          result5Metrics
          result6Title
          result6Description
          result6Metrics
          result7Title
          result7Description
          result7Metrics
          result8Title
          result8Description
          result8Metrics
          result9Title
          result9Description
          result9Metrics
          quoteText
          quoteAuthor
          ctaTitle
          ctaDescription
          ctaButton1Text
          ctaButton1Url
          ctaButton2Text
          ctaButton2Url
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, { id: slug });
    const node = response?.data?.caseStudy;

    if (!node) {
      console.warn(
        `[getCaseStudyBySlug]: No case study found for slug "${slug}".`,
      );
      return null;
    }

    return {
      id: node.id,
      title: node.title,
      slug: node.slug,
      content: node.content,
      ...node.caseStudyFields,
      image: node.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
    };
  } catch (error) {
    console.error(`[getCaseStudyBySlug] Error for slug "${slug}":`, error);
    return null;
  }
}

export const GET_TESTIMONIALS_ALL = `
  query GetTestimonials($first: Int = 10) {
    testimonials(first: $first) {
      nodes {
        title
        content
        excerpt
        featuredImage { node { sourceUrl } } 
        testimonialFields {
          quote
          author
          companyOrRole
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS_BY_CATEGORY = `
  query GetTestimonialsByCategory($first: Int = 10, $categoryIn: [Int]) {
    testimonialCategories(where: { include: $categoryIn }) {
      nodes {
        testimonials(first: $first) {
          nodes {
            title
            content
            excerpt
            featuredImage { node { sourceUrl } } 
            testimonialFields {
              quote
              author
              companyOrRole
            }
          }
        }
      }
    }
  }
`;

export async function getTestimonials(count = 10, categoryIds = []) {
  if (categoryIds && categoryIds.length > 0) {
    const variables = { first: count, categoryIn: categoryIds };
    const response = await fetchGraphQL(
      GET_TESTIMONIALS_BY_CATEGORY,
      variables,
    );
    const nodes: any[] = [];
    const categories = response?.data?.testimonialCategories?.nodes || [];
    categories.forEach((cat: any) => {
      if (cat.testimonials && cat.testimonials.nodes) {
        nodes.push(...cat.testimonials.nodes);
      }
    });
    const uniqueNodes = Array.from(
      new Map(nodes.map((item) => [item.title, item])).values(),
    );
    return uniqueNodes.slice(0, count);
  } else {
    const variables = { first: count };
    const response = await fetchGraphQL(GET_TESTIMONIALS_ALL, variables);
    return response?.data?.testimonials?.nodes || [];
  }
}

export const GET_AWARDS = `
  query GetAwards($first: Int = 100) {
    awards(first: $first) {
      nodes {
        id
        title
        awardFields {
          awardYear
          awardOrg
          awardDesc
          awardIconType
          awardLucide
          awardImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export async function getAwards() {
  const response = await fetchGraphQL(GET_AWARDS);
  return response?.data?.awards?.nodes || [];
}

export interface SiteChromeData {
  menus: any;
  header: any;
  footer: any;
  social: any;
}

export async function getSiteChrome(): Promise<SiteChromeData | null> {
  const REST_URL = WORDPRESS_API_URL
    ? WORDPRESS_API_URL.replace("/graphql", "/wp-json/nabhira/v1/site-chrome")
    : "http://127.0.0.1/wordpress/wp-json/nabhira/v1/site-chrome";

  if (FORCE_STATIC_FALLBACK) return null;

  try {
    const res = await fetch(REST_URL, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[WP] Could not fetch site chrome. HTTP ${res.status}`);
      return null;
    }

    const raw = await res.json();
    const rawMenus = raw?.menus || {};

    const cleanMenuUrl = (url: string): string => {
      if (!url) return "#";
      if (url.startsWith("/") || url.startsWith("#")) return url;
      try {
        const parsedUrl = new URL(url);
        const wpApiHost = WORDPRESS_API_URL
          ? new URL(WORDPRESS_API_URL).hostname
          : "127.0.0.1";
        if (
          parsedUrl.hostname === wpApiHost ||
          parsedUrl.hostname === "localhost" ||
          parsedUrl.hostname === "127.0.0.1"
        ) {
          let path = parsedUrl.pathname + parsedUrl.search;
          if (path.startsWith("/wordpress/"))
            path = path.replace("/wordpress/", "/");
          else if (path === "/wordpress") path = "/";
          return path;
        }
        return url;
      } catch (e) {
        return url;
      }
    };

    const transformMenuUrls = (menu: any[]): any[] => {
      if (!Array.isArray(menu)) return menu;
      return menu.map((item) => ({
        ...item,
        url: cleanMenuUrl(item.url),
        children: item.children ? transformMenuUrls(item.children) : [],
      }));
    };

    const cleanedMenus: any = {};
    for (const key of Object.keys(rawMenus)) {
      cleanedMenus[key] = transformMenuUrls(rawMenus[key]);
    }

    return {
      menus: cleanedMenus,
      header: raw?.header || {},
      footer: raw?.footer || {},
      social: raw?.social || {},
    };
  } catch (err: any) {
    console.warn("[WP] getSiteChrome() failed:", err?.message || err);
    return null;
  }
}

export const SOLUTION_PAGE_FIELDS_FRAGMENT = `
  fragment SolutionPageFields on Solution {
    solutionPageSettings {
      solHeroTag
      solHeroTagIcon { node { sourceUrl mediaItemUrl } }
      solHeroTitle
      solHeroDesc
      solHeroCta1Text
      solHeroCta1Link {
        nodes {
          ... on ContentNode {
            uri
          }
        }
      }
      solStatsTitle
      solStat1Value
      solStat1Label
      solStat2Value
      solStat2Label
      solStat3Value
      solStat3Label
      solStat4Value
      solStat4Label
      solStat5Value
      solStat5Label
      solStat6Value
      solStat6Label
      solOverviewTag
      solOverviewHeading
      solOverviewPara1
      solOverviewPara2
      solOverviewPara3
      solChallengeHeading
      solChallenge1Icon { node { sourceUrl mediaItemUrl } }
      solChallenge1Title
      solChallenge1Desc
      solChallenge2Icon { node { sourceUrl mediaItemUrl } }
      solChallenge2Title
      solChallenge2Desc
      solChallenge3Icon { node { sourceUrl mediaItemUrl } }
      solChallenge3Title
      solChallenge3Desc
      solChallenge4Icon { node { sourceUrl mediaItemUrl } }
      solChallenge4Title
      solChallenge4Desc
      solChallenge5Icon { node { sourceUrl mediaItemUrl } }
      solChallenge5Title
      solChallenge5Desc
      solChallenge6Icon { node { sourceUrl mediaItemUrl } }
      solChallenge6Title
      solChallenge6Desc
      solDetailHeading
      solDetailSubheading
      solDetailPara1
      solDetailPara2
      solDetailPara3
      solDetailCtaText
      solDetailCtaLink {
        nodes {
          ... on ContentNode {
            uri
          }
        }
      }
      solDetailImage { node { sourceUrl mediaItemUrl } }
      solFeaturesHeading
      solFeature1Icon { node { sourceUrl mediaItemUrl } }
      solFeature1Title
      solFeature1Desc
      solFeature2Icon { node { sourceUrl mediaItemUrl } }
      solFeature2Title
      solFeature2Desc
      solFeature3Icon { node { sourceUrl mediaItemUrl } }
      solFeature3Title
      solFeature3Desc
      solFeature4Icon { node { sourceUrl mediaItemUrl } }
      solFeature4Title
      solFeature4Desc
      solFeature5Icon { node { sourceUrl mediaItemUrl } }
      solFeature5Title
      solFeature5Desc
      solFeature6Icon { node { sourceUrl mediaItemUrl } }
      solFeature6Title
      solFeature6Desc
      solFeature7Icon { node { sourceUrl mediaItemUrl } }
      solFeature7Title
      solFeature7Desc
      solFeature8Icon { node { sourceUrl mediaItemUrl } }
      solFeature8Title
      solFeature8Desc
      solFeature9Icon { node { sourceUrl mediaItemUrl } }
      solFeature9Title
      solFeature9Desc
      solInnovationTag
      solInnovationHeading
      solInnovation1Icon { node { sourceUrl mediaItemUrl } }
      solInnovation1Title
      solInnovation1Desc
      solInnovation2Icon { node { sourceUrl mediaItemUrl } }
      solInnovation2Title
      solInnovation2Desc
      solInnovation3Icon { node { sourceUrl mediaItemUrl } }
      solInnovation3Title
      solInnovation3Desc
      solInnovation4Icon { node { sourceUrl mediaItemUrl } }
      solInnovation4Title
      solInnovation4Desc
      solInnovation5Icon { node { sourceUrl mediaItemUrl } }
      solInnovation5Title
      solInnovation5Desc
      solInnovation6Icon { node { sourceUrl mediaItemUrl } }
      solInnovation6Title
      solInnovation6Desc
      solBenefitsTag
      solBenefitsHeading
      solBenefit1Icon { node { sourceUrl mediaItemUrl } }
      solBenefit1Title
      solBenefit1Desc
      solBenefit2Icon { node { sourceUrl mediaItemUrl } }
      solBenefit2Title
      solBenefit2Desc
      solBenefit3Icon { node { sourceUrl mediaItemUrl } }
      solBenefit3Title
      solBenefit3Desc
      solBenefit4Icon { node { sourceUrl mediaItemUrl } }
      solBenefit4Title
      solBenefit4Desc
      solBenefit5Icon { node { sourceUrl mediaItemUrl } }
      solBenefit5Title
      solBenefit5Desc
      solBenefit6Icon { node { sourceUrl mediaItemUrl } }
      solBenefit6Title
      solBenefit6Desc
      solCtaHeading
      solCtaDesc
      solCtaBtnText
      solCtaBtnLink {
        nodes {
          ... on ContentNode {
            uri
          }
        }
      }
    }
  }
`;

export async function getServiceBySlug(slug: string) {
  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT.replace('on Page', 'on Service')}
    ${SERVICE_PAGE_FIELDS_FRAGMENT.replace('on Page', 'on Service')}
    query GetServiceBySlug($id: ID!, $idType: ServiceIdType!) {
      service(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
        featuredImage { node { sourceUrl } }
        ...GlobalSettingsFields
        ...ServicePageFields
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, {
      id: slug,
      idType: 'SLUG'
    });

    const page = response?.data?.service || null;
    if (page) {
      const globalFallback = await getGlobalSettings();
      if (globalFallback) {
        page.globalSettings = mergeACFData(page.globalSettings, globalFallback);
      }
    }
    return page;
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return null;
  }
}

export async function getIndustryBySlug(slug: string) {
  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT.replace('on Page', 'on Industry')}
    query GetIndustryBySlug($id: ID!, $idType: IndustryIdType!) {
      industry(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
        featuredImage { node { sourceUrl } }
        ...GlobalSettingsFields
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, {
      id: slug,
      idType: 'SLUG'
    });

    const page = response?.data?.industry || null;
    if (page) {
      const globalFallback = await getGlobalSettings();
      if (globalFallback) {
        page.globalSettings = mergeACFData(page.globalSettings, globalFallback);
      }
    }
    return page;
  } catch (error) {
    console.error('Error fetching industry by slug:', error);
    return null;
  }
}

export async function getSolutionBySlug(slug: string) {
  const query = `
    ${SOLUTION_PAGE_FIELDS_FRAGMENT}
    query GetSolutionBySlug($id: ID!, $idType: SolutionIdType!) {
      solution(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
        featuredImage { node { sourceUrl } }
        ...SolutionPageFields
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, {
      id: slug,
      idType: 'SLUG'
    });

    const page = response?.data?.solution || null;
    if (page) {
      const globalFallback = await getGlobalSettings();
      if (globalFallback) {
        page.globalSettings = mergeACFData(page.globalSettings, globalFallback);
      }
    }
    return page;
  } catch (error) {
    console.error('Error fetching solution by slug:', error);
    return null;
  }
}

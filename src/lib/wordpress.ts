// Use 127.0.0.1 instead of localhost to avoid IPv6 resolution issues on Windows
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace('localhost', '127.0.0.1');

// Set this to true to temporarily stop all WordPress API calls and only use static data
const FORCE_STATIC_FALLBACK = false;

import { blogPosts, caseStudies, newsItems } from "../data/migrated_data";

export async function fetchGraphQL(query: string, variables = {}) {
  if (!WORDPRESS_API_URL || FORCE_STATIC_FALLBACK) {
    return { 
      data: null, 
      errors: [{ message: FORCE_STATIC_FALLBACK ? "Bypassing fetch as FORCE_STATIC_FALLBACK is enabled" : "WORDPRESS_API_URL missing" }] 
    };
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  
  try {
    // We wrapped this in a short timeout or just a normal catch
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: 'no-store',
      signal: controller.signal
    });

    clearTimeout(id);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[WPGraphQL FETCH ERROR]: Status ${res.status}`, errorText);
      return { errors: [{ message: `HTTP Error ${res.status}: ${res.statusText}` }] };
    }

    const json = await res.json();
    
    if (json.errors) {
      console.error('[WPGraphQL GraphQL ERROR]:', JSON.stringify(json.errors, null, 2));
      return json;
    }

    return json;
  } catch (error: any) {
    // Log once but don't blow up
    if (error.name === 'AbortError') {
      console.error(`[WPGraphQL TIMEOUT] URL: ${WORDPRESS_API_URL} timed out after 3s`);
    } else {
      console.error(`[WPGraphQL CONNECTION ERROR] URL: ${WORDPRESS_API_URL} - ${error.message || 'Fetch failed'}`);
    }
    
    // Return a structured error so it doesn't crash the caller
    return { 
      data: null,
      errors: [{ message: `Failed to connect to WordPress API at ${WORDPRESS_API_URL}. Falling back to static data.` }] 
    };
  }
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
  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT}
    query GetGlobalSettings {
      page(id: "/contact/", idType: URI) {
        ...GlobalSettingsFields
      }
    }
  `;
  const response = await fetchGraphQL(query);
  return response?.data?.page?.globalSettings || null;
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
      visionTitle
      visionDescription
      visionIconType
      visionLucide
      visionImage { node { sourceUrl mediaItemUrl } }
      missionLabel
      missionTitle
      missionDescription
      missionIconType
      missionLucide
      missionImage { node { sourceUrl mediaItemUrl } }
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
      test1Quote
      test1Author
      test1Company
      test1Color
      test2Quote
      test2Author
      test2Company
      test2Color
      test3Quote
      test3Author
      test3Company
      test3Color
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
      impactTitle
      impactDesc
    }
  }
`;

export async function getPageBySlug(slug: string) {
  // Ensure slug is properly formatted as a URI
  const formattedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const finalSlug = formattedSlug.endsWith('/') ? formattedSlug : `${formattedSlug}/`;

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
    idType: 'URI',
  };

  const response = await fetchGraphQL(query, variables);
  
  // Try fallback without trailing slash if primary fails
  if (!response?.data?.page) {
    const fallbackVariables = { id: formattedSlug, idType: 'URI' };
    const fallbackResponse = await fetchGraphQL(query, fallbackVariables);
    if (fallbackResponse?.data?.page) return fallbackResponse.data.page;
  }

  const page = response?.data?.page;

  // Fallback for known static pages if WP is down
  if (!page) {
    if (slug === '/about' || slug === 'about') {
      return {
        title: "About Nabhira",
        content: "Nabhira Technologies is an architectural powerhouse...",
        slug: "about",
        uri: "/about",
      };
    }
  }

  return page;
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
        cC1Label
        cC1Icon
        cC1IconImg { node { sourceUrl } }
        cC2Label
        cC2Icon
        cC2IconImg { node { sourceUrl } }
        cC3Label
        cC3Icon
        cC3IconImg { node { sourceUrl } }
      }
      industries {
        iTitle
        iDesc
        iI1Name
        iI1Icon
        iI1IconImg { node { sourceUrl } }
        iI2Name
        iI2Icon
        iI2IconImg { node { sourceUrl } }
        iI3Name
        iI3Icon
        iI3IconImg { node { sourceUrl } }
        iI4Name
        iI4Icon
        iI4IconImg { node { sourceUrl } }
        iI5Name
        iI5Icon
        iI5IconImg { node { sourceUrl } }
        iI6Name
        iI6Icon
        iI6IconImg { node { sourceUrl } }
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
      successStories {
        sTitle
        sDesc
        sI1Title
        sI1Author
        sI1Role
        sI2Title
        sI2Author
        sI2Role
        sI3Title
        sI3Author
        sI3Role
        sI4Title
        sI4Author
        sI4Role
      }
      gridHeaders {
        ltHeaderTitle
        ltHeaderDesc
      }
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
      console.warn('DEBUG [getHomePage]: Primary query failed, retrying without optional sections...');
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
      console.error('[getHomePage ERROR]: No page data found for "/" or "/home/". Falling back to static data.');
      // Return a structured static object instead of null to allow the page to render
      return {
        homePageFields: {},
        globalSettings: {},
        newsPosts: blogPosts.slice(0, 3).map(post => ({
          title: post.title,
          date: post.date,
          featuredImage: { node: { sourceUrl: post.image } },
          uri: `/resources/blogs/${post.id}`
        })),
        thinkingPosts: blogPosts.slice(0, 6).map(post => ({
          title: post.title,
          featuredImage: { node: { sourceUrl: post.image } },
          uri: `/resources/blogs/${post.id}`
        }))
      };
    }

    // Process What's New settings
    const rawSettings = page?.whatSNewSettings1;
    const whatsNewSettings = {
      wnTitle: rawSettings?.sectionTitle || "What's New",
      wnSubtitle: rawSettings?.sectionSubtitle || "The current and future news from Nabhira and around the world.",
      wnFilterBy: rawSettings?.filterBy || 'category',
      wnCategory: rawSettings?.filterCategory || { nodes: [] },
      wnTag: rawSettings?.filterTag || { nodes: [] },
      wnPostsCount: rawSettings?.postsCount || 10,
    };
    
    // Fetch News Posts
    const filterBy = whatsNewSettings.wnFilterBy;
    const postsCount = Math.min(Math.max(whatsNewSettings.wnPostsCount || 3, 1), 12);
    // Extract filter values (handles multiple checkboxes/selections)
    let filterValues: string[] = [];
    if (filterBy === 'tag') {
      filterValues = whatsNewSettings.wnTag?.nodes?.map((n: any) => n.slug || n.name).filter(Boolean) || [];
    } else {
      filterValues = whatsNewSettings.wnCategory?.nodes?.map((n: any) => n.slug || n.name).filter(Boolean) || [];
    }

    // Build where clause using slug-compatible args:
    // - categoryName accepts a comma-separated list of slugs (WPGraphQL)
    // - tag accepts a single slug; for multiple tags join with comma
    // (categoryIn / tagIn expect integer term IDs — not slugs — so they are avoided)
    let whereClause: string;
    if (filterValues.length > 0) {
      if (filterBy === 'tag') {
        // WPGraphQL `tag` arg accepts a single slug string
        whereClause = `tag: ${JSON.stringify(filterValues[0])}`;
      } else {
        // WPGraphQL `categoryName` accepts a comma-separated slug string for OR filtering
        whereClause = `categoryName: ${JSON.stringify(filterValues.join(','))}`;
      }
    } else {
      // No filter configured — default fallback labels
      whereClause = filterBy === 'tag' ? 'tag: "featured"' : 'categoryName: "news"';
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
      const fallbackPostsResponse = await fetchGraphQL(`query { posts(first: ${postsCount}) { nodes { title date featuredImage { node { sourceUrl } } uri } } }`);
      newsPosts = fallbackPostsResponse?.data?.posts?.nodes || [];
    }

    return {
      ...page,
      newsPosts,
      thinkingPosts,
      settings: {
        ...whatsNewSettings,
        wnPostsCount: whatsNewSettings.wnPostsCount
      }
    };
  } catch (error) {
    console.error('[WPGraphQL FETCH ERROR]:', error);
    
    // Return a minimal valid object that satisfies the UI requirements
    // This allows the Hero and other components to use their own defaults
    return {
      homePageFields: {},
      globalSettings: {},
      newsPosts: blogPosts.slice(0, 3).map(post => ({
        title: post.title,
        date: post.date,
        featuredImage: { node: { sourceUrl: post.image } },
        uri: `/resources/blogs/${post.id}`
      })),
      thinkingPosts: blogPosts.slice(0, 6).map(post => ({
        title: post.title,
        featuredImage: { node: { sourceUrl: post.image } },
        uri: `/resources/blogs/${post.id}`
      }))
    };
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
          featuredImage {
            node {
              sourceUrl
            }
          }
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
      console.warn('DEBUG [getAllPosts]: No posts found or fetch failed. Using static fallback data.');
      return blogPosts.map(post => ({
        id: post.id.toString(),
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        slug: post.id.toString(),
        featuredImage: { node: { sourceUrl: post.image } },
        author: { node: { name: post.author } },
        categories: { nodes: [{ name: post.category }] }
      }));
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return blogPosts.map(post => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      slug: post.id.toString(),
      featuredImage: { node: { sourceUrl: post.image } },
      author: { node: { name: post.author } },
      categories: { nodes: [{ name: post.category }] }
    }));
  }
}

export async function getPostBySlug(slug: string) {
  console.log(`[getPostBySlug] Attempting to find post with slug: "${slug}"`);
  
  // Strategy 1: Find in the list of all posts (more reliable for matching)
  try {
    const allPosts = await getAllPosts();
    console.log(`[getPostBySlug] allPosts count: ${allPosts.length}`);
    const foundPost = allPosts.find((p: any) => 
      p.slug === slug || 
      p.slug === slug.toLowerCase() || 
      p.id?.toString() === slug
    );
    
    if (foundPost) {
      console.log(`[getPostBySlug] Post found in allPosts list for: ${slug}. Fetching full content...`);
      // Re-fetch by ID to get the full "content" field since getAllPosts might be trimmed
      const fullPost = await getPostById(foundPost.id);
      if (fullPost) return fullPost;

      console.log(`[getPostBySlug] getPostById failed, returning foundPost as fallback for: ${slug}`);
      return foundPost;
    }
  } catch (err) {
    console.error('[getPostBySlug] Error searching in allPosts:', err);
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
    const variables = { id: slug, idType: 'SLUG' };
    const response = await fetchGraphQL(query, variables);
    
    if (response?.data?.post) {
      console.log(`[getPostBySlug] Post found via direct SLUG query for: ${slug}`);
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
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  
  const diffHrs = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffHrs < 1) return 'Just now';
  if (diffHrs < 24) return `${diffHrs} ${diffHrs === 1 ? 'hr' : 'hrs'} ago`;
  
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }
  
  const months = Math.floor(diffDays / 30);
  if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }
  
  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
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
            careerPosted
            careerDescription
          }
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query);
    const nodes = response?.data?.careers?.nodes;

    if (!nodes || nodes.length === 0) {
      console.warn('[getCareerPosts]: No careers found or fetch failed. Using static fallback.');
      return null; // caller will use static fallback
    }

    // Normalize to the same shape the UI expects
    return nodes.map((node: any) => ({
      id: node.slug,           // use slug as id so /careers/[id] routes work
      slug: node.slug,
      title: node.title,
      department: node.careerJobOpeningDetails?.careerDepartment || '',
      location: node.careerJobOpeningDetails?.careerLocation || '',
      type: node.careerJobOpeningDetails?.careerType || 'Full-time',
      posted: formatDateToDaysAgo(node.date), // Use published date
      salary: 'Competitive',   // kept for backward compat with JobDetails
      description: node.careerJobOpeningDetails?.careerDescription || '',
    }));
  } catch (error) {
    console.error('[getCareerPosts] Error:', error);
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
        careerJobOpeningDetails {
          careerDepartment
          careerLocation
          careerType
          careerPosted
          careerDescription
        }
      }
    }
  `;

  try {
    const response = await fetchGraphQL(query, { id: slug });
    const node = response?.data?.career;

    if (!node) {
      console.warn(`[getCareerPostBySlug]: No career found for slug "${slug}".`);
      return null;
    }

    return {
      id: node.id || node.slug,
      slug: node.slug,
      title: node.title,
      date: node.date,
      department: node.careerJobOpeningDetails?.careerDepartment || 'Engineering',
      location: node.careerJobOpeningDetails?.careerLocation || 'Nabhira Technologies',
      type: node.careerJobOpeningDetails?.careerType || 'Full-time',
      posted: formatDateToDaysAgo(node.date),
      salary: 'Competitive',
      description: node.careerJobOpeningDetails?.careerDescription || '',
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


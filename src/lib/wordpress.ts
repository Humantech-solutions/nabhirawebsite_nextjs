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
    const id = setTimeout(() => controller.abort(), 3000); // 3 second timeout

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




export async function getPageBySlug(slug: string) {
  // Ensure slug is properly formatted as a URI
  const formattedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const finalSlug = formattedSlug.endsWith('/') ? formattedSlug : `${formattedSlug}/`;

  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT}
    ${CONTACT_PAGE_FIELDS_FRAGMENT}
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
      console.error('[getHomePage ERROR]: No page data found for "/" or "/home/"');
      return null;
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
    const postsCount = Math.max(whatsNewSettings.wnPostsCount || 0, 12);
    // Extract filter values (handles multiple checkboxes/selections)
    let filterValues: string[] = [];
    if (filterBy === 'tag') {
      filterValues = whatsNewSettings.wnTag?.nodes?.map((n: any) => n.slug || n.name).filter(Boolean) || [];
    } else {
      filterValues = whatsNewSettings.wnCategory?.nodes?.map((n: any) => n.slug || n.name).filter(Boolean) || [];
    }

    const postsQuery = `
      query GetWhatsNewPosts {
        posts(where: {
          ${filterValues.length > 0 
            ? (filterBy === 'tag' ? `tagIn: ${JSON.stringify(filterValues)}` : `categoryIn: ${JSON.stringify(filterValues)}`)
            : (filterBy === 'tag' ? 'tag: "Featured"' : 'categoryName: "News"')
          }
        }, first: ${postsCount}) {
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

    if (newsPosts.length === 0) {
      const fallbackPostsResponse = await fetchGraphQL(`query { posts(first: ${postsCount}) { nodes { title date featuredImage { node { sourceUrl } } uri } } }`);
      newsPosts = fallbackPostsResponse?.data?.posts?.nodes || [];
    }

    return {
      ...page,
      newsPosts,
      thinkingPosts,
      settings: whatsNewSettings
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


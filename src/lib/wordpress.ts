// Use 127.0.0.1 instead of localhost to avoid IPv6 resolution issues on Windows
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace('localhost', '127.0.0.1');

export async function fetchGraphQL(query: string, variables = {}) {
  if (!WORDPRESS_API_URL) {
    throw new Error('WORDPRESS_API_URL environment variable is missing');
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: 'no-store',
    });

    const json = await res.json();
    
    // Ensure data exists even if null
    return {
      data: json.data || null,
      errors: json.errors || null
    };
  } catch (error) {
    console.error('[fetchGraphQL Exception]:', error);
    return { data: null, errors: [error] };
  }
}

export const GLOBAL_SETTINGS_FRAGMENT = `
  fragment GlobalSettingsFields on Page {
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
      page(id: "/", idType: URI) {
        ...GlobalSettingsFields
      }
    }
  `;
  const response = await fetchGraphQL(query);
  return response?.data?.page?.globalSettings || null;
}

export async function getPageBySlug(slug: string) {
  // Ensure slug is properly formatted as a URI
  const formattedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const finalSlug = formattedSlug.endsWith('/') ? formattedSlug : `${formattedSlug}/`;

  const query = `
    ${GLOBAL_SETTINGS_FRAGMENT}
    query GetPageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
        ...GlobalSettingsFields
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

  return response?.data?.page;
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
    console.error('[getHomePage ERROR]:', error);
    return null;
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
    return response?.data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  console.log(`[getPostBySlug] Attempting to find post with slug: "${slug}"`);
  
  // Strategy 1: Find in the list of all posts (more reliable for matching)
  try {
    const allPosts = await getAllPosts();
    console.log(`[getPostBySlug] allPosts count: ${allPosts.length}`);
    const foundPost = allPosts.find((p: any) => p.slug === slug || p.slug === slug.toLowerCase());
    
    if (foundPost) {
      console.log(`[getPostBySlug] Post found in allPosts list for: ${slug}. Fetching full content...`);
      // Re-fetch by ID to get the full "content" field since getAllPosts might be trimmed
      return await getPostById(foundPost.id);
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

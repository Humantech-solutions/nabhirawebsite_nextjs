// Use 127.0.0.1 instead of localhost to avoid IPv6 resolution issues on Windows
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace('localhost', '127.0.0.1');

export async function fetchGraphQL(query: string, variables = {}) {
  if (!WORDPRESS_API_URL) {
    throw new Error('WORDPRESS_API_URL environment variable is missing');
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const res = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: 'no-store', // Disable caching to ensure we see fresh updates from local WordPress during local dev/testing
  });

  const json = await res.json();
  
  if (json.errors) {
    console.error('[WPGraphQL ERROR]:', JSON.stringify(json.errors, null, 2));
    return json;
  }

  return json;
}

export async function getPageBySlug(slug: string) {
  const query = `
    query GetPageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        id
        title
        content
        slug
        uri
        date
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
    }
  `;

  const variables = {
    id: slug,
    idType: 'URI',
  };

  const response = await fetchGraphQL(query, variables);
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
        wn_title: wnTitle
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
    whatsNewSettings {
      wnSecTitle
      wnSecSubtitle
      wnSecFilterBy
      wnSecCategory {
        nodes {
          name
          slug
        }
      }
      wnSecTag {
        nodes {
          name
          slug
        }
      }
      wnSecPostsCount
    }
  `;

  const queryByUri = (uri: string) => `
    query GetHomePageByUri {
      page(id: "${uri}", idType: URI) {
        ${pageFieldsFragment}
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
    // Try root URI first
    let response = await fetchGraphQL(queryByUri("/"));
    let page = response?.data?.page;
    let thinkingPosts = response?.data?.thinkingPosts?.nodes;

    // Fallback lookups
    if (!page) {
      console.warn('DEBUG [getHomePage]: No page data found for URI "/". Trying URI "/home/"...');
      response = await fetchGraphQL(queryByUri("/home/"));
      page = response?.data?.page;
      thinkingPosts = response?.data?.thinkingPosts?.nodes || thinkingPosts;
    }

    if (!page) {
      console.error('DEBUG [getHomePage]: Failed to find home page by URI "/" and "/home/".');
      return null;
    }

    console.log('DEBUG [getHomePage]: Found page with slug:', page.slug, 'URI:', page.uri);

    // Get What's New settings from ACF
    const rawSettings = page?.whatsNewSettings;
    
    // Map new unique names back to the expected properties
    const whatsNewSettings = {
      wnTitle: rawSettings?.wnSecTitle || "What's New",
      wnSubtitle: rawSettings?.wnSecSubtitle || "The current and future news from Nabhira and around the world.",
      wnFilterBy: rawSettings?.wnSecFilterBy || 'category',
      wnCategory: rawSettings?.wnSecCategory || { nodes: [] },
      wnTag: rawSettings?.wnSecTag || { nodes: [] },
      wnPostsCount: rawSettings?.wnSecPostsCount || 3,
    };
    
    const filterBy = whatsNewSettings.wnFilterBy;
    const postsCount = whatsNewSettings.wnPostsCount;
    
    // Extract filter value from taxonomy connection (handles checkboxes)
    let filterValue = '';
    if (filterBy === 'tag') {
      const tagNode = whatsNewSettings.wnTag?.nodes?.[0];
      filterValue = tagNode?.slug || tagNode?.name || '';
    } else {
      const catNode = whatsNewSettings.wnCategory?.nodes?.[0];
      filterValue = catNode?.slug || catNode?.name || '';
    }

    // fallback if no category/tag is selected
    if (!filterValue) {
      filterValue = filterBy === 'tag' ? 'Featured' : 'News';
    }

    // Build dynamic posts query based on filter settings
    const whereClause = filterBy === 'tag'
      ? `tag: "${filterValue}"`
      : `categoryName: "${filterValue}"`;

    const postsQuery = `
      query GetWhatsNewPosts {
        posts(where: {${whereClause}}, first: ${postsCount}) {
          nodes {
            title
            date
            featuredImage { node { sourceUrl } }
            uri
          }
        }
      }
    `;

    const postsResponse = await fetchGraphQL(postsQuery);
    let newsPosts = postsResponse?.data?.posts?.nodes || [];

    // Fallback: If no posts found with filter, fetch latest posts
    if (newsPosts.length === 0) {
      const fallbackQuery = `
        query GetLatestPosts {
          posts(first: ${postsCount}) {
            nodes {
              title
              date
              featuredImage { node { sourceUrl } }
              uri
            }
          }
        }
      `;
      const fallbackResponse = await fetchGraphQL(fallbackQuery);
      newsPosts = fallbackResponse?.data?.posts?.nodes || [];
    }

    return {
      ...page,
      newsPosts,
      thinkingPosts
    };
  } catch (error) {
    console.error('[WPGraphQL FETCH ERROR]:', error);
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
            }
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

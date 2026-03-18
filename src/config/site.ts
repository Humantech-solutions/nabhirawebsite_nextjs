export const siteConfig = {
  name: "Nabhira Technologies",
  description: "Global pioneer in Cloud-first intelligence, Data-driven engineering, and Agentic AI solutions.",
  url: "https://nabhira.com", // Replace with actual production URL
  ogImage: "https://nabhira.com/og-image.png",
  links: {
    twitter: "https://twitter.com/nabhira",
    linkedin: "https://linkedin.com/company/nabhira",
  },
  mainNav: [
    { title: "ABOUT US", href: "/about" },
    { title: "SERVICES", href: "/solutions/cloud-transformation" },
    { title: "SOLUTIONS", href: "/solutions/pos" },
    { title: "INDUSTRIES", href: "/industries/banking-finance" },
    { title: "RESOURCES", href: "/resources/blogs" },
    { title: "CAREERS", href: "/careers" },
    { title: "CONTACT US", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;

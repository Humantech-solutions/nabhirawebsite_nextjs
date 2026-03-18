export const navigationConfig = {
  mainNav: [
    { label: "ABOUT US", key: "ABOUT US" },
    { label: "SERVICES", key: "SERVICES" },
    { label: "SOLUTIONS", key: "SOLUTIONS" },
    { label: "INDUSTRIES", key: "INDUSTRIES" },
    { label: "RESOURCES", key: "RESOURCES" },
    { label: "CAREERS", key: "CAREERS", href: "/careers" },
    { label: "CONTACT US", key: "CONTACT US", href: "/contact" }
  ],
  menuData: {
    "SERVICES": {
      type: "mega" as const,
      columns: [
        {
          title: "CLOUD TRANSFORMATION",
          href: "/solutions/cloud-transformation",
          items: [
            { label: "Cloud Advisory", href: "/solutions/cloud-advisory" },
            { label: "Cloud Migration", href: "/solutions/cloud-migration" },
            { label: "Cloud Modernization", href: "/solutions/cloud-modernization" },
            { label: "Cloud-native Development", href: "/solutions/cloud-native-development" },
            { label: "Cloud Security & Governance", href: "/solutions/cloud-security-governance" },
            { label: "Cloud Financial Management", href: "/solutions/cloud-financial-management" }
          ]
        },
        {
          title: "DATA FOUNDATION",
          href: "/solutions/data-foundation",
          items: [
            { label: "Data Engineering", href: "/solutions/data-engineering" },
            { label: "Data Analytics", href: "/solutions/data-analytics-solution" },
            { label: "Data Governance", href: "/solutions/data-governance" }
          ]
        },
        {
          title: "AI ACCELERATION",
          href: "/solutions/artificial-intelligence",
          items: [
            { label: "AI Engineering", href: "/solutions/ai-engineering" },
            { label: "Agentic AI", href: "/solutions/agentic-ai" },
            { label: "Intelligent Automation", href: "/solutions/intelligent-automation" }
          ]
        }
      ]
    },
    "SOLUTIONS": {
      type: "simple" as const,
      items: [
        { label: "AI Powered Point of Sales App", href: "/solutions/enterprise-pos" },
        { label: "AI based LMS system", href: "/solutions/ailms" },
        { label: "Policy Engine System", href: "/solutions/policy-engine" },
        { label: "Cloud Infra Deployment and Monitoring", href: "/solutions/cloud-infra" },
        { label: "WorkbookNow ERP", href: "/solutions/erp" },
        { label: "HRMS and Payroll Solutions", href: "/solutions/hrms" }
      ]
    },
    "INDUSTRIES": {
      type: "simple" as const,
      items: [
        { label: "Banking & Financial Services", href: "/industries/banking-finance" },
        { label: "Retail & Consumer Goods", href: "/industries/retail-consumer" },
        { label: "Manufacturing & Automotive", href: "/industries/manufacturing-automotive" },
        { label: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
        { label: "Government & PSUs", href: "/industries/government-psu" },
        { label: "Media & Entertainment", href: "/industries/media-entertainment" }
      ]
    },
    "RESOURCES": {
      type: "simple" as const,
      items: [
        { label: "Blogs", href: "/resources/blogs" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "In the News", href: "/resources/news" },
        { label: "Events", href: "/resources/events" }
      ]
    },
    "ABOUT US": {
      type: "simple" as const,
      items: [
        { label: "About Nabhira", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Partners Ecosystem", href: "/partners" },
        { label: "Our Clients", href: "/clients" },
        { label: "Awards", href: "/awards" }
      ]
    }
  },
  footerLinks: {
    services: [
      { label: "Cloud Advisory", href: "/services/cloud-advisory" },
      { label: "Cloud Migration", href: "/services/cloud-migration" },
      { label: "Cloud Modernization", href: "/services/cloud-modernization" },
      { label: "Cloud-native Development", href: "/services/cloud-native-development" },
      { label: "Cloud Security & Governance", href: "/services/cloud-security-governance" },
      { label: "Cloud Financial Management", href: "/services/cloud-financial-management" },
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "Data Analytics", href: "/services/data-analytics-solution" },
      { label: "Data Governance", href: "/services/data-governance" },
      { label: "AI Engineering", href: "/services/ai-engineering" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Intelligent Automation", href: "/solutions/intelligent-automation" }
    ],
    industries: [
      { label: "Banking & Financial Services", href: "/industries/banking-finance" },
      { label: "Retail & Consumer Goods", href: "/industries/retail-consumer" },
      { label: "Manufacturing & Automotive", href: "/industries/manufacturing-automotive" },
      { label: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
      { label: "Media & Entertainment", href: "/industries/media-entertainment" },
      { label: "Government & PSUs", href: "/industries/government-psu" }
    ],
    solutions: [
      { label: "AI Powered Point of Sales App", href: "/solutions/enterprise-pos" },
      { label: "AI based LMS System", href: "/solutions/ailms" },
      { label: "Policy Engine System", href: "/solutions/policy-engine" },
      { label: "Cloud Infra Deployment and Monitoring", href: "/solutions/cloud-infra" },
      { label: "WorkbookNow ERP", href: "/solutions/erp" },
      { label: "HRMS and Payroll Solutions", href: "/solutions/hrms" }
    ],
    resources: [
      { label: "About Nabhira", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Partners Ecosystem", href: "/partners" },
      { label: "Awards", href: "/awards" },
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "In the News", href: "/resources/news" },
      { label: "Events", href: "/resources/events" }
    ]
  },
  socialLinks: [
    { name: "LinkedIn", href: "#", platform: "linkedin" },
    { name: "X", href: "https://x.com/NabhiraTech", platform: "x" },
    { name: "YouTube", href: "https://www.youtube.com/@NabhiraTechnologies", platform: "youtube" },
    { name: "Instagram", href: "https://www.instagram.com/nabhira_technologies/", platform: "instagram" },
    { name: "Facebook", href: "#", platform: "facebook" }
  ]
};


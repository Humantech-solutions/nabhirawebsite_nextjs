// Consolidated data for dynamic routes

export const jobs = [
  {
    id: "sr-architect-001",
    title: "Senior AI Solutions Architect",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "Competitive",
    posted: "2 days ago"
  },
  {
    id: "digital-strat-002",
    title: "Principal Digital Strategist",
    department: "Consulting",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "Competitive",
    posted: "5 days ago"
  },
  {
    id: "cloud-eng-003",
    title: "Cloud Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Bengaluru",
    type: "Full-time",
    salary: "Competitive",
    posted: "1 week ago"
  },
  {
    id: "ux-designer-004",
    title: "Senior UX Designer",
    department: "Design",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "Competitive",
    posted: "3 days ago"
  },
  {
    id: "data-sci-005",
    title: "Lead Data Scientist",
    department: "Data & AI",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "Competitive",
    posted: "1 week ago"
  }
];

export const events = [
  {
    id: 1,
    title: "Nabhira Architecture Summit 2026",
    date: "March 15-16, 2026",
    time: "09:00 AM - 06:00 PM",
    location: "Marina Bay Financial Centre, Singapore",
    type: "Flagship Event",
    description: "Our annual flagship summit bringing together the brightest minds in digital architecture. Join us for two days of intensive workshops, keynote sessions from industry titans, and networking opportunities that will shape the next decade of enterprise technology.",
    image: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Webinar: Architecting Autonomous Enterprises",
    date: "Feb 28, 2026",
    time: "03:00 PM - 04:30 PM",
    location: "Online / Virtual",
    type: "Webinar",
    description: "Explore the transition from automated to autonomous enterprises. This webinar dives deep into Agentic AI frameworks and how they integrate into existing legacy architectures to drive unprecedented efficiency.",
    image: "https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Cloud & Data Expo 2026",
    date: "April 05, 2026",
    time: "10:00 AM - 05:00 PM",
    location: "ExCeL London, UK",
    type: "Conference",
    description: "Visit the Nabhira pavilion at the world's largest Cloud & Data expo. Our architects will be presenting live on stage about the future of multi-cloud mesh architectures and decentralized data governance.",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f1?auto=format&fit=crop&q=80&w=1200"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Rise of Agentic AI: Beyond Simple Automation",
    excerpt: "How autonomous agents are redefining enterprise productivity by making decisions in complex environments.",
    author: "Dr. Arvan Nabhira",
    date: "Feb 20, 2026",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">The landscape of Artificial Intelligence is undergoing a seismic shift. We are moving beyond the era of passive chatbots and simple automation into the age of Agentic AI—systems capable of autonomous reasoning, goal-setting, and execution within complex, real-world environments.</p>
      
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">Understanding Agency</h2>
      <p className="mb-6">Unlike traditional AI that requires constant prompting, agentic systems are designed with 'agency'—the ability to decompose high-level objectives into actionable steps. For Nabhira Technologies, this represents the ultimate architectural challenge: building the digital nervous systems that allow these agents to interact securely with legacy enterprise data.</p>
      
      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-4 my-12 italic text-xl text-[#11253e]/80 bg-[#f99d1c]/5">
        "The true power of AI isn't in its ability to predict the next word, but in its potential to navigate the next business crisis autonomously."
      </blockquote>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Architectural Imperative</h2>
      <p className="mb-6">To support agentic workflows, enterprises must rethink their data fabrics. Data can no longer be static; it must be 'agent-ready'. This involves creating semantic layers that agents can traverse without human intervention, ensuring that every decision made by the AI is grounded in verifiable corporate truth.</p>
      
      <p className="mb-6">As we look toward 2027, the firms that will lead are those that have built the architectural foundation today for the autonomous agents of tomorrow.</p>
    `
  },
  {
    id: 2,
    title: "Cloud Sovereignty: Navigating Data Residency in 2026",
    excerpt: "Why global enterprises are shifting towards localized cloud architectures to meet emerging regulatory demands.",
    author: "Sarah Chen",
    date: "Feb 15, 2026",
    category: "Cloud Strategy",
    image: "https://images.unsplash.com/photo-1586448911122-f74aa8e3e4b6?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">In 2026, the 'cloud' is no longer a monolithic global entity. It has become a fragmented landscape of sovereign regions, each governed by its own set of data residency laws and security requirements. For the modern CTO, navigating this complexity is the primary hurdle to global expansion.</p>
      
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The New Geography of Data</h2>
      <p className="mb-6">National borders have returned to the digital realm. Governments are increasingly demanding that data generated within their territory stays within their territory. This has led to the rise of 'Cloud Sovereignty'—a strategy where infrastructure is localized but managed through a unified global control plane.</p>
      
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">Strategic Implementation</h2>
      <p className="mb-6">At Nabhira Technologies, we advocate for a 'Sovereign-by-Design' approach. This means architecting applications from day one to be location-aware, with automated data routing that ensures compliance without sacrificing performance or developer velocity.</p>
      
      <p className="mb-6">The transition to sovereign cloud architectures is not just a compliance checkbox; it is a competitive advantage for enterprises that want to build deep trust in the markets they serve.</p>
    `
  },
  {
    id: 3,
    title: "Data Fabrics vs. Data Meshes: Choosing Your Architecture",
    excerpt: "A deep dive into the architectural paradigms shaping the next generation of data-driven enterprises.",
    author: "Marcus Thorne",
    date: "Feb 10, 2026",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">The debate between Data Fabrics and Data Meshes is not just technical—it's philosophical. One prioritizes centralized intelligence through a unified metadata layer, while the other prioritizes decentralized ownership through domain-driven design. Which one is right for your organization?</p>
      
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Data Fabric: Centralized Connectivity</h2>
      <p className="mb-6">A Data Fabric uses AI-driven metadata to create a virtualized layer over disparate data sources. It's ideal for organizations that need a single source of truth but have data scattered across multiple clouds and on-premise systems.</p>
      
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Data Mesh: Decentralized Empowerment</h2>
      <p className="mb-6">In contrast, a Data Mesh treats data as a product. Ownership is pushed to the business units that create the data. This model is best for large, complex organizations where centralized teams have become a bottleneck to innovation.</p>
      
      <p className="mb-6">Conclusion: Most successful enterprises are moving toward a hybrid 'Fabric-Mesh' approach, utilizing the connectivity of the fabric with the governance and ownership of the mesh.</p>
    `
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Global Bank: Cloud Modernization",
    client: "Tier 1 Investment Bank",
    industry: "Banking & Financial Services",
    impact: "60% Reduction in OPEX",
    tags: ["Cloud", "Finance"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    challenge: "The client was struggling with fragmented legacy infrastructure across 12 countries, leading to significant operational overhead and slow deployment cycles for new financial products.",
    solution: "We implemented a multi-region cloud-native architecture using Kubernetes and a unified data fabric. This allowed for centralized governance while maintaining localized data residency compliance.",
    results: [
      "Migrated 400+ applications to the new architecture with zero downtime.",
      "Achieved a 60% reduction in annual infrastructure maintenance costs.",
      "Reduced time-to-market for new digital features from 4 months to 2 weeks."
    ],
    quote: "Nabhira didn't just move us to the cloud; they re-architected how we do business. Their precision and engineering depth were critical to our success.",
    quoteAuthor: "Chief Technology Officer, Tier 1 Investment Bank"
  },
  {
    id: 2,
    title: "Retail Giant: AI Supply Chain",
    client: "Fortune 500 Retailer",
    industry: "Retail & Consumer Goods",
    impact: "40% Inventory Optimization",
    tags: ["AI", "Retail"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1600",
    challenge: "Inaccurate demand forecasting was leading to overstocking in some regions and stockouts in others, resulting in millions in lost revenue and excessive warehouse costs.",
    solution: "We deployed an Agentic AI solution that integrated real-time sales data, weather patterns, and social sentiment to provide hyper-local demand predictions and automated inventory rebalancing.",
    results: [
      "40% reduction in average inventory holding costs.",
      "15% increase in on-shelf availability during peak seasons.",
      "Automated 80% of routine procurement decisions."
    ],
    quote: "The intelligence Nabhira built into our supply chain has transformed our bottom line and allowed our teams to focus on strategic growth rather than manual firefighting.",
    quoteAuthor: "VP of Operations, Global Retail Group"
  },
  {
    id: 3,
    title: "Smart Factory: Edge Intelligence",
    client: "Global Automotive OEM",
    industry: "Manufacturing & Automotive",
    impact: "Zero Unplanned Downtime",
    tags: ["IoT", "Manufacturing"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    challenge: "Frequent unplanned downtime in the assembly line was costing the client approximately $50,000 per hour. Existing preventative maintenance was reactive and inefficient.",
    solution: "We implemented an Edge AI monitoring system that processes vibration and thermal data directly at the source. Machine learning models predict component failures before they occur.",
    results: [
      "Achieved zero unplanned downtime over a 12-month period.",
      "Extended the lifecycle of critical machinery by an average of 30%.",
      "Reduced maintenance labor costs by 25% through predictive scheduling."
    ],
    quote: "Nabhira's edge intelligence solution has made our factory truly smart. The predictive capabilities have become the backbone of our operational excellence.",
    quoteAuthor: "Director of Manufacturing Engineering, Automotive OEM"
  }
];

export const newsItems = [
  {
    id: 1,
    date: "Feb 10, 2026",
    source: "Bloomberg Technology",
    title: "Nabhira Technologies Announces Expansion into Southeast Asian Markets",
    link: "/resources/news/1",
    image: "https://images.unsplash.com/photo-1542241617-956c329d6404?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">SINGAPORE — Nabhira Technologies, the architectural consulting powerhouse, today announced a multi-year expansion plan into the Southeast Asian (SEA) markets, starting with a new regional headquarters in Singapore.</p>
      
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">The move comes as SEA experiences a surge in demand for high-end digital architecture and AI-native enterprise transformation. Nabhira’s CEO, Dr. Arvan Nabhira, stated that the region's unique blend of emerging fintech and manufacturing hubs provides the ideal environment for the firm's signature "minimalist" architectural approach.</p>
      
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">Regional Hub Strategy</h2>
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">"Southeast Asia is no longer just a manufacturing hub; it's a global center for digital innovation," said Dr. Nabhira during the press conference at the Marina Bay Financial Centre. "Our presence here will allow us to partner more closely with local leaders to build the resilient digital infrastructure required for the next decade of growth."</p>
      
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">The Singapore office will serve as a center of excellence for Cloud Sovereignty and Agentic AI, employing over 200 senior architects and consultants by the end of 2026.</p>
    `
  },
  {
    id: 2,
    date: "Jan 25, 2026",
    source: "Financial Times",
    title: "The Architecture of Tomorrow: Why Nabhira is Leading the AI-Native Revolution",
    link: "/resources/news/2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">LONDON — In the crowded field of enterprise consulting, one firm is standing out for its refusal to use buzzwords. Nabhira Technologies has built its reputation on a rigorous, architectural approach to Artificial Intelligence.</p>
      
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">The Financial Times explores how Nabhira’s "First Principles Architecture" is helping Fortune 500 companies move past the pilot phase of AI. While others focus on models, Nabhira focuses on the data fabric that feeds them.</p>
      
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">A Different Kind of Consultant</h2>
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">Industry analysts suggest that Nabhira’s success lies in its deep engineering roots. Unlike traditional management consultancies, Nabhira doesn't just provide strategies; they design the digital nervous systems that execute them.</p>
      
      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-6 my-12 italic text-2xl text-[#11253e] bg-gray-50">
        "Nabhira is the architect that builds the cathedral, not just the contractor that lays the bricks." — Senior Analyst, FT Intelligence.
      </blockquote>
    `
  },
  {
    id: 3,
    date: "Dec 12, 2025",
    source: "Business Insider",
    title: "Top 50 Cloud Companies to Watch in 2026",
    link: "/resources/news/3",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">NEW YORK — Business Insider has released its annual list of the 'Top 50 Cloud Companies to Watch', and Nabhira Technologies has claimed a top-five spot for the first time.</p>
      
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">The list highlights companies that are fundamentally changing how enterprises utilize cloud computing. Nabhira was praised for its pioneering work in multi-cloud mesh architectures and decentralized data governance.</p>
      
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">The Multi-Cloud Advantage</h2>
      <p className="mb-6 text-[#11253e]/70 leading-relaxed">The recognition comes after a year of record growth for Nabhira, which saw its global client base expand by 40%. The firm’s proprietary "Nabhira Mesh" framework has become the gold standard for enterprises looking to avoid vendor lock-in while maintaining high performance across disparate cloud providers.</p>
    `
  }
];

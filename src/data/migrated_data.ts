// Consolidated data for dynamic routes

export function slugify(title: string, location: string): string {
  const citySlug = location
    .split(/[,\/]/)
    .map(part => part.trim().split(/\s+/)[0].toLowerCase())
    .filter(Boolean)
    .join("-");
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `${titleSlug}-${citySlug}`;
}

export const jobs = [
  {
    id: "NBR-001",
    title: "Senior AI Solutions Architect",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "8+ yrs",
    posted: "2 days ago"
  },
  {
    id: "NBR-002",
    title: "Principal Digital Strategist",
    department: "Consulting",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "6-8 yrs",
    posted: "5 days ago"
  },
  {
    id: "NBR-003",
    title: "Cloud Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Bengaluru",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 week ago"
  },
  {
    id: "NBR-004",
    title: "Senior Product Designer (UX/UI)",
    department: "Design",
    location: "Singapore",
    type: "Full-time",
    experience: "5-7 yrs",
    posted: "3 days ago"
  },
  {
    id: "NBR-005",
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "London, UK",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 day ago"
  }
].map(job => ({ ...job, slug: slugify(job.title, job.location) }));


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
  },
  {
    id: 4,
    title: "Modernization Is Now a Survival Strategy",
    excerpt: "Why organizations are shifting from 'Buy & Use' to 'Build & Use' in the age of AI.",
    author: "Dr. Arvan Nabhira",
    date: "Mar 01, 2026",
    category: "AI Modernization",
    image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbW9kZXJuaXphdGlvbiUyMGNvcnBvcmF0ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDU1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1200",
    content: `
      <p className="mb-6 font-medium text-xl">Artificial Intelligence is not just another technology wave. It is fundamentally different from previous shifts like the internet, cloud, or smartphones. It is fundamentally reshaping how organizations operate, moving from rigid systems to intelligent, adaptive workflows.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">1. AI Is Being Adopted at Unprecedented Speed</h2>
      <p className="mb-6">AI adoption is happening faster than any previous technology revolution. The internet took years to reach mass adoption. Smartphones took nearly a decade to become universal. AI tools have reached billions of users in just a few months. Why? Because the infrastructure is already in place: Internet, Smartphones, and Mature Cloud Ecosystems.</p>
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWRvcHRpb24lMjBzcGVlZCUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzI0NTU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Rapid AI Adoption" className="w-full object-cover" />
      </div>
      <p className="mb-6">Unlike earlier transitions that required building foundational infrastructure, AI is riding on top of an already connected world. So now businesses do not have 10-15 years to adapt. They may have 2-3 years.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">2. AI Demands Fundamental Business Redesign</h2>
      <p className="mb-6">Past technology transitions were additive (Mainframe to client-server, On-premise to cloud). AI is different. It challenges the very structure of how organizations operate: Customer journeys, Employee roles, Decision-making processes, and Operating models. Traditional enterprise systems are deterministic. AI is non-deterministic; it produces probabilistic outcomes. This forces a shift in mindset from rigid control to managed intelligence.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">3. Legacy Systems: The Cleanup Is Mandatory</h2>
      <p className="mb-6">Most large enterprises run on decades-old legacy systems that are expensive to maintain, contain undocumented code, and create cybersecurity risks. For years, modernization was postponed due to cost and complexity. Now AI changes the equation.</p>
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMG1vZGVybml6YXRpb24lMjBjb2RlJTIwY29tcGxleGl0eXxlbnwxfHx8fDE3NzI0NTU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Legacy Code Complexity" className="w-full object-cover" />
      </div>
      <p className="mb-6">AI tools can analyze legacy code, assist in refactoring, and accelerate migration. The “house in order” approach is mandatory now. Enterprises cannot build intelligent systems on top of chaotic foundations.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">4. The Shift from “Buy” to “Build”</h2>
      <p className="mb-6">Historically, enterprises preferred buying enterprise software. But AI changes development economics. With AI-assisted coding, development becomes faster and customization cheaper. This shifts the balance from “buy” to “build.” Companies will increasingly create tailored applications aligned with their exact workflows rather than adapting their processes to generic software.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">5. The Rise of Agentic Interfaces</h2>
      <p className="mb-6">We are moving toward a model where core enterprise platforms become “systems of record” and on top of them sit intelligent, agentic interfaces. Complexity is hidden, AI agents orchestrate workflows, and users interact through conversational interfaces.</p>
      <div className="my-8 rounded-xl overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1764549906172-0153db0825bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFnZW50JTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJpc3RpYyUyMGh1bWFuJTIwY29tcHV0ZXIlMjBpbnRlcmFjdGlvbnxlbnwxfHx8fDE3NzI0NTU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="AI Agent Interface" className="w-full object-cover" />
      </div>
      <p className="mb-6">Instead of navigating multiple dashboards and forms, users may simply instruct AI agents to execute tasks. This is a profound simplification of enterprise experience.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">6. The Real Problem: The Deployment Gap</h2>
      <p className="mb-6">While AI models are advancing rapidly, enterprises struggle with implementation. This creates a deployment gap. The gap is not technological; it is organizational. Challenges include resistance to change, lack of retrained talent, and weak governance. AI models may be powerful, but without transformation in workflows and culture, they remain unused.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">7. Talent Transformation Is Massive</h2>
      <p className="mb-6">AI does not simply eliminate jobs; it transforms them. We will see the rise of AI engineers, auditors, and governance specialists. At the same time, existing roles will evolve. This demands large-scale reskilling and continuous learning models. The workforce transition may be one of the largest retraining efforts in corporate history.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">8. Brownfield vs. Greenfield Productivity</h2>
      <p className="mb-6">Much of today’s AI productivity discussion focuses on “greenfield” scenarios. But most enterprises are brownfield: legacy applications, complex integrations, and technical debt. True AI productivity gains will come from modernizing and optimizing these existing environments.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">9. Avoiding “Fake Productivity”</h2>
      <p className="mb-6">AI tools can create the illusion of productivity: faster content creation and code generation. But speed alone does not equal value. Real productivity requires quality controls, explainability, governance, and measurable business impact.</p>

      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">10. What Actually Matters for AI Success</h2>
      <p className="mb-6">For AI to truly deliver value, enterprises must focus on First-Principle Thinking (redesign processes), AI understanding business-specific data, and Agnostic Architecture (avoid lock-in).</p>

      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-4 my-12 italic text-xl text-[#11253e] bg-[#f99d1c]/5">
        "Enterprises that treat AI as a side project will struggle. Those that treat it as a full-scale transformation with speed, clarity and discipline will lead."
      </blockquote>
      
      <p className="mb-6 font-bold text-lg">AI is already reshaping business. The only real question is: Is Your Organization Ready to Adapt and Execute Fast Enough in this AI-Led Modernization Era?</p>
    `
  }
];

export const caseStudies = [
  {
    id: 1,
    slug: "global-bank-cloud-modernization",
    title: "Real-Time Fraud Detection Platform",
    client: "Leading Indian Retail Bank",
    industry: "Banking & Financial Services",
    impact: "Fraud Detection in Milliseconds",
    tags: ["Cloud", "Finance", "Banking"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    challenge: "A leading retail bank faced rising fraud incidents across card payments, ATM withdrawals and digital banking transactions. The existing fraud detection system relied on batch-based processing, identifying fraudulent activity several hours after transactions were completed.",
    solution: "Our team implemented a real-time fraud detection platform leveraging streaming data architecture and machine learning models. The new platform analyzes transactions within milliseconds, enabling the bank to detect suspicious activity instantly and prevent financial losses.",
    results: [
      "Fraud detection time improved from hours to milliseconds.",
      "False alerts reduced by 30%, improving customer experience.",
      "Fraud investigation teams became more productive with real-time monitoring tools.",
      "Positioned the bank for long-term digital growth with scalable AI-driven risk management."
    ],
    quote: "The real-time fraud detection platform transformed our risk management capabilities. Nabhira's expertise in streaming architecture and machine learning enabled us to protect our customers while enhancing their banking experience.",
    quoteAuthor: "Head of Engineering, Leading Indian Bank",
    executiveSummary: "A leading retail bank in India partnered with Nabhira Technologies to modernize its fraud detection infrastructure and implement a real-time transaction monitoring platform. The bank was experiencing rising fraud incidents across multiple channels including card payments, ATM withdrawals and digital banking transactions. The existing batch-based fraud detection system identified fraudulent activity several hours after completion, resulting in significant financial losses and customer dissatisfaction. Nabhira implemented a comprehensive real-time fraud detection platform leveraging streaming data architecture, machine learning models and event-driven processing to detect and prevent fraud within milliseconds of transaction initiation.",
    customerBackground: "The customer is a leading retail bank in India serving millions of customers across urban and rural markets. The bank operates an extensive network of branches, ATMs and digital banking channels including mobile banking, online payments and card services. With the rapid growth of digital banking adoption in India, the bank experienced exponential increases in transaction volumes across all channels. This growth brought new challenges in fraud prevention, customer protection and regulatory compliance. The organization sought to build a modern fraud detection platform capable of real-time transaction monitoring, AI-driven fraud detection, scalable event-driven architecture and faster fraud investigation workflows while reducing false positives that impacted customer experience.",
    detailedChallenges: [
      {
        title: "Delayed Fraud Detection",
        description: "Fraud detection processes were batch-oriented and ran every few hours, resulting in delayed responses and inability to prevent fraudulent transactions in real-time."
      },
      {
        title: "Increasing Digital Transactions",
        description: "The rapid growth of mobile banking, online payments and card transactions increased fraud risk and created challenges in monitoring high-volume transaction flows."
      },
      {
        title: "Fragmented Data Ecosystem",
        description: "Transaction data originated from multiple systems including ATM networks, card payment gateways, mobile banking platforms and online banking systems, creating data integration challenges."
      },
      {
        title: "Inefficient Rule-Based Systems",
        description: "Legacy rule-based systems produced high false positives, leading to unnecessary transaction declines and customer dissatisfaction while missing sophisticated fraud patterns."
      }
    ],
    solutionSections: [
      {
        title: "Real-Time Event Streaming Architecture",
        description: "A real-time event streaming architecture was implemented to process transactions as they occur. The platform integrates transaction streams, applies fraud detection algorithms and generates alerts instantly.",
        items: [
          "Streaming platform for high-volume transaction ingestion",
          "Event-driven architecture for real-time processing",
          "Integration with all banking channels and payment systems",
          "Scalable infrastructure to handle peak transaction volumes"
        ]
      },
      {
        title: "Data Ingestion and Processing",
        description: "The platform ingests transaction data from multiple banking channels and processes them in real-time using stream processing engines.",
        items: [
          "Real-time ingestion from ATM networks",
          "Card payment gateway integration",
          "Mobile banking transaction streams",
          "Online banking system connectivity",
          "Stream processing engines for instant transaction analysis"
        ]
      },
      {
        title: "Machine Learning Fraud Detection",
        description: "Advanced machine learning models were deployed to identify fraud patterns and anomalies in real-time transaction flows.",
        items: [
          "Fraud detection models trained on historical transaction data",
          "Behavioral analytics analyzing customer spending patterns",
          "Anomaly detection comparing transactions with historical behavior",
          "Continuous model training and improvement"
        ]
      },
      {
        title: "Fraud Detection Capabilities",
        description: "The platform combines multiple fraud detection techniques including rule-based detection, behavioral analytics and machine learning models.",
        items: [
          "Rule-based detection for known fraud patterns",
          "Detection of rapid multiple transactions and unusual purchases",
          "Identification of transactions from suspicious locations",
          "Behavioral analysis of spending habits and device usage",
          "ML-driven anomaly detection for sophisticated fraud schemes"
        ]
      },
      {
        title: "Data Platform and Analytics",
        description: "A comprehensive data platform was built to store historical transaction data and enable fraud pattern analysis.",
        items: [
          "Data lake for storing transaction history",
          "Real-time fraud monitoring dashboards",
          "Analytics tools for fraud investigation teams",
          "Visualization layer for fraud pattern analysis"
        ]
      }
    ],
    detailedResults: [
      {
        title: "Real-Time Fraud Prevention",
        description: "The platform enabled instant fraud detection and prevention, transforming the bank's risk management capabilities.",
        impacts: [
          "Fraud detection time improved from hours to milliseconds",
          "Real-time transaction blocking for suspicious activities",
          "Immediate customer notifications for potential fraud"
        ]
      },
      {
        title: "Enhanced Customer Experience",
        description: "Advanced machine learning models significantly reduced false positives, improving legitimate transaction approval rates.",
        impacts: [
          "30% reduction in false alerts",
          "Fewer legitimate transaction declines",
          "Improved customer satisfaction and trust"
        ]
      },
      {
        title: "Operational Efficiency",
        description: "Real-time monitoring tools and automated fraud detection increased fraud investigation team productivity.",
        impacts: [
          "Faster fraud investigation workflows",
          "Automated fraud pattern recognition",
          "Reduced manual review requirements"
        ]
      },
      {
        title: "Scalable Digital Banking Platform",
        description: "The platform positioned the bank for long-term digital growth with modern fraud prevention capabilities.",
        impacts: [
          "Scalable architecture supporting transaction volume growth",
          "AI-driven risk management capabilities",
          "Improved regulatory compliance",
          "Foundation for future digital banking innovation"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "multi-brand-ecommerce-platform-on-aws",
    title: "Multi-Brand Ecommerce Platform on AWS",
    client: "Leading Southeast Asian Retail Group",
    industry: "Retail & Ecommerce",
    impact: "Scaled platform to handle 5x Peak Traffic",
    tags: ["Cloud", "Ecommerce", "AWS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    challenge: "A leading multi-brand retail chain headquartered in Indonesia faced significant challenges with their legacy on-premise infrastructure. The system struggled with limited scalability during peak sales, multi-country expansion complexity across Southeast Asia, fragmented retail and supply chain systems operating in silos and slow deployment cycles that hindered innovation and new brand launches.",
    solution: "Nabhira Technologies designed and implemented a comprehensive cloud-native ecommerce platform on AWS. The solution included migration from on-premise to AWS cloud infrastructure, multi-brand ecommerce portals with regional localization, store management applications for omnichannel operations and integrated supply chain management systems.",
    results: [
      "5x increase in peak traffic handling capacity with near-zero downtime during promotional events.",
      "60% faster deployment cycles and reduced infrastructure provisioning from weeks to minutes.",
      "35% reduction in infrastructure management costs with lower operational overhead.",
      "40% improvement in website performance leading to higher customer engagement and conversion rates."
    ],
    quote: "Nabhira Technologies transformed our digital commerce infrastructure from a limiting factor into a competitive advantage. The solution Nabhira built enabled us to scale across Southeast Asia while delivering superior customer experience.",
    quoteAuthor: "CIO, Southeast Asian Retail Group",
    executiveSummary: "A leading multi-brand retail chain headquartered in Indonesia partnered with Nabhira Technologies to modernize its digital commerce ecosystem and expand its presence across Southeast Asia. The company manages and markets several international fashion and apparel brands across markets including Indonesia, Vietnam, Philippines, Cambodia and Singapore. The organization needed a scalable and resilient digital platform capable of supporting multiple brand storefronts, omnichannel retail operations and integrated supply chain management.",
    customerBackground: "The customer is a leading Indonesian retail conglomerate specializing in fashion and apparel distribution for globally recognized brands. The company operates both physical retail outlets and digital commerce platforms across Southeast Asia. With growing consumer demand for online retail and omnichannel experiences, the organization sought to strengthen its digital capabilities and create a unified platform capable of managing multi-brand ecommerce storefronts, inventory and supply chain operations, store management and retail analytics and cross-border commerce across multiple Southeast Asian markets.",
    detailedChallenges: [
      {
        title: "Legacy On-Premise Infrastructure",
        description: "The existing ecommerce and retail systems were hosted on on-premise data centers, which created challenges in scalability, maintenance and operational costs."
      },
      {
        title: "Limited Scalability During Peak Sales",
        description: "Seasonal campaigns, promotional events and brand launches caused traffic spikes, resulting in system performance degradation and slower customer experiences."
      },
      {
        title: "Multi-Country Expansion Complexity",
        description: "Expanding ecommerce operations across Southeast Asian markets required a platform capable of supporting multi-currency, localization and regional logistics integrations."
      },
      {
        title: "Fragmented Retail and Supply Chain Systems",
        description: "Existing systems for store operations, ecommerce and supply chain management operated in silos, limiting real-time visibility into inventory and fulfillment."
      },
      {
        title: "Slow Deployment and Innovation Cycles",
        description: "Infrastructure provisioning and software deployments required manual intervention, slowing down the launch of new features and brands."
      }
    ],
    solutionSections: [
      {
        title: "Cloud Migration Strategy",
        description: "The project began with a structured migration of applications from on-premise infrastructure to AWS, ensuring minimal disruption to existing retail operations.",
        items: [
          "Assessment of legacy systems and application architecture",
          "Cloud readiness evaluation",
          "Migration planning and phased deployment strategy",
          "Data migration and system modernization"
        ]
      },
      {
        title: "AWS Cloud Architecture",
        description: "The new platform was built using AWS cloud infrastructure to ensure high availability, scalability and operational efficiency.",
        items: [
          "Amazon EC2 for scalable application hosting",
          "Amazon RDS for managed relational database services",
          "Amazon S3 for secure and scalable storage of product images and digital assets",
          "Amazon CloudFront for global content delivery and improved customer experience",
          "AWS Auto Scaling to handle peak traffic during promotional campaigns",
          "AWS Load Balancer for application reliability and high availability",
          "AWS CloudWatch for monitoring and operational visibility"
        ]
      },
      {
        title: "Retail Cloud Architecture",
        description: "A scalable AWS infrastructure diagram connecting web and mobile users to retail, supply chain, and logistics systems.",
        showDiagram: true
      },
      {
        title: "Architecture Component Breakdown",
        description: "The platform architecture is organized into four key layers, each serving specific functions within the retail ecosystem.",
        hasComponentBreakdown: true,
        components: [
          {
            category: "Edge & Security",
            items: [
              "Amazon Route 53 - DNS and traffic routing",
              "Amazon CloudFront - Content delivery network",
              "AWS WAF - Web application firewall",
              "AWS Shield - DDoS protection"
            ]
          },
          {
            category: "Compute Layer",
            items: [
              "Amazon EC2 - Scalable compute instances",
              "AWS Auto Scaling - Dynamic capacity management",
              "Elastic Load Balancer - Traffic distribution"
            ]
          },
          {
            category: "Data Persistence",
            items: [
              "Amazon RDS - Relational database service",
              "Amazon S3 - Object storage for media assets",
              "Amazon ElastiCache - In-memory data caching"
            ]
          },
          {
            category: "External Integrations",
            items: [
              "Payment Gateway - Secure payment processing",
              "Logistics API - Shipping and delivery integration",
              "ERP System - Enterprise resource planning connectivity"
            ]
          }
        ]
      }
    ],
    detailedResults: [
      {
        title: "Improved Scalability",
        description: "The cloud-native architecture allows the platform to automatically scale during peak sales periods, ensuring consistent performance even during high traffic events.",
        impacts: [
          "5x increase in peak traffic handling capacity",
          "Near-zero downtime during promotional events"
        ]
      },
      {
        title: "Faster Time-to-Market",
        description: "Cloud infrastructure and automated deployment pipelines enabled faster feature releases and brand launches.",
        impacts: [
          "60% faster deployment cycles",
          "Reduced infrastructure provisioning time from weeks to minutes"
        ]
      },
      {
        title: "Operational Cost Optimization",
        description: "Migrating from on-premise infrastructure to AWS reduced hardware management costs and improved resource utilization.",
        impacts: [
          "35% reduction in infrastructure management costs",
          "Lower operational overhead"
        ]
      },
      {
        title: "Enhanced Customer Experience",
        description: "The new ecommerce platform provides faster page loads, seamless checkout experiences, and improved reliability across Southeast Asian markets.",
        impacts: [
          "40% improvement in website performance",
          "Higher customer engagement and conversion rates"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "fresh-food-hyperlocal-delivery-platform",
    title: "Hyperlocal Delivery Platform",
    client: "Large Fresh Food Retail Chain",
    industry: "Retail & Ecommerce",
    impact: "Processes 9,000 Daily Orders",
    tags: ["Cloud", "Retail", "Logistics"],
    image: "https://images.unsplash.com/photo-1609952578538-3d454550301d?auto=format&fit=crop&q=80&w=1080",
    challenge: "A leading fresh food and vegetable hyperlocal retail chain in South India needed to rapidly launch a digital commerce platform capable of delivering fresh groceries to customers within 30 minutes. With an extensive network of 750 franchise stores and an average of 9,000 orders per day, the retailer required a highly scalable and reliable technology platform to support real-time inventory management, fast order processing and hyperlocal logistics.",
    solution: "Nabhira Technologies adopted a cloud-native development approach leveraging AWS cloud services to design and deploy an integrated retail platform within three months. The solution included a Store POS system, Ecommerce portal, Order Management system and Supply Chain platform, enabling seamless coordination between online ordering, in-store operations and delivery logistics.",
    results: [
      "Digital platform launched within three months meeting aggressive timeline.",
      "Successfully supports 9,000 daily orders with ability to scale during peak demand.",
      "Average delivery time maintained within 30 minutes across 750 franchise stores.",
      "Real-time inventory synchronization reduced manual processes in store operations."
    ],
    quote: "Nabhira Technologies delivered a comprehensive cloud-native platform that transformed our business model. The integrated system enabled us to launch hyperlocal delivery across 750 stores within three months, delivering fresh food to customers in 30 minutes while efficiently managing thousands of daily orders.",
    quoteAuthor: "Zonal Sales Head, Fresh Food Retail Chain",
    executiveSummary: "A leading fresh food and vegetable hyperlocal retail chain in South India partnered with Nabhira Technologies to rapidly launch a digital commerce platform capable of delivering fresh groceries to customers within 30 minutes. With an extensive network of 750 franchise stores and an average of 9,000 orders per day, the retailer required a highly scalable and reliable technology platform to support real-time inventory management, fast order processing and hyperlocal logistics. To meet aggressive timelines, Nabhira Technologies adopted a cloud-native development approach leveraging AWS cloud services to design and deploy an integrated retail platform within three months.",
    customerBackground: "The customer is a large fresh food and vegetable retail chain operating across South India, with a strong presence through franchise-based neighborhood stores. The company specializes in delivering fresh produce, groceries and daily essentials to local communities. With the rapid growth of online grocery ordering and hyperlocal delivery services, the retailer recognized the need to modernize its operations and offer customers a seamless digital ordering experience with fast delivery times. The organization operates approximately 750 franchise retail stores, which serve as local fulfillment centers for hyperlocal deliveries.",
    detailedChallenges: [
      {
        title: "Rapid Digital Launch Requirement",
        description: "The company needed to launch a fully functional ecommerce and delivery platform within three months, enabling customers to order groceries online and receive deliveries within 30 minutes."
      },
      {
        title: "Large Distributed Store Network",
        description: "With 750 franchise stores, the retailer required a system capable of managing store-level inventory, order routing and delivery logistics across multiple cities."
      },
      {
        title: "Real-Time Inventory Synchronization",
        description: "Fresh food retail requires real-time stock visibility, as inventory changes frequently due to perishability and daily replenishment cycles."
      },
      {
        title: "High Order Volume",
        description: "The platform needed to support approximately 9,000 daily orders, with the ability to scale during peak demand periods such as weekends and promotions."
      }
    ],
    solutionSections: [
      {
        title: "Cloud-Native Architecture on AWS",
        description: "The platform was built using AWS cloud services, ensuring high availability, performance and scalability.",
        items: [
          "Amazon EC2 for scalable application hosting",
          "Amazon RDS for secure and managed relational databases",
          "Amazon S3 for storing product images and digital assets",
          "Amazon CloudFront for fast content delivery",
          "AWS Auto Scaling for handling peak order volumes",
          "Elastic Load Balancer for high availability and traffic distribution"
        ]
      },
      {
        title: "Store POS System",
        description: "A modern cloud-connected POS system was developed for franchise stores to support daily retail operations. The POS system ensures that store inventory and online availability remain synchronized.",
        items: [
          "Real-time billing and checkout",
          "Inventory updates across stores",
          "Integration with ecommerce orders",
          "Store-level reporting and analytics"
        ]
      }
    ],
    detailedResults: [
      {
        title: "Rapid Time-to-Market",
        description: "The cloud-native development approach enabled the platform to be delivered within three months, meeting the retailer's aggressive launch timeline.",
        impacts: [
          "Digital platform launched within planned schedule",
          "Rapid onboarding of 750 franchise stores",
          "Enabled immediate digital commerce capabilities"
        ]
      },
      {
        title: "High Transaction Scalability",
        description: "The platform successfully supports around 9,000 daily orders, with the ability to scale during peak demand periods.",
        impacts: [
          "Reliable order processing across all stores",
          "Seamless handling of high traffic events",
          "Automatic scaling during peak demand"
        ]
      }
    ]
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

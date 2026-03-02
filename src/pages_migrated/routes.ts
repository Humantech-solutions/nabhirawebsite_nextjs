import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./Home";
import About from "./About";
import Leadership from "./Leadership";
import Partners from "./Partners";
import Awards from "./Awards";
import Careers from "./Careers";
import JobDetails from "./JobDetails";
import Contact from "./Contact";
import BankingFinance from "./BankingFinance";
import RetailConsumer from "./RetailConsumer";
import ManufacturingAutomotive from "./ManufacturingAutomotive";
import HealthcarePharma from "./HealthcarePharma";
import GovernmentPSU from "./GovernmentPSU";
import MediaEntertainment from "./MediaEntertainment";
import Blogs from "./Blogs";
import CaseStudies from "./CaseStudies";
import CaseStudyDetail from "./CaseStudyDetail";
import News from "./News";
import NewsDetail from "./NewsDetail";
import Events from "./Events";
import EventDetail from "./EventDetail";
import BlogDetail from "./BlogDetail";
import CloudTransformation from "./CloudTransformation";
import DataAnalytics from "./DataAnalytics";
import ArtificialIntelligence from "./ArtificialIntelligence";

import POSSolution from "./solutions/POS";
import LMSSolution from "./solutions/LMS";
import PolicyEngineSolution from "./solutions/PolicyEngine";
import CloudInfraSolution from "./solutions/CloudInfra";
import ERPSolution from "./solutions/ERP";
import HRMSSolution from "./solutions/HRMS";
import CloudAdvisory from "./solutions/CloudAdvisory";
import CloudMigration from "./solutions/CloudMigration";
import CloudModernization from "./solutions/CloudModernization";
import CloudNativeDevelopment from "./solutions/CloudNativeDevelopment";
import CloudSecurityGovernance from "./solutions/CloudSecurityGovernance";
import CloudFinancialManagement from "./solutions/CloudFinancialManagement";
import DataEngineering from "./solutions/DataEngineering";
import DataFoundation from "./solutions/DataFoundation";
import DataGovernance from "./solutions/DataGovernance";
import AIConsulting from "./solutions/AIConsulting";
import AgenticAI from "./solutions/AgenticAI";
import IntelligentAutomation from "./solutions/IntelligentAutomation";
import AIEngineering from "./solutions/AIEngineering";
import DataAnalyticsSolution from "./solutions/DataAnalyticsSolution";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "leadership",
        Component: Leadership,
      },
      {
        path: "partners",
        Component: Partners,
      },
      {
        path: "awards",
        Component: Awards,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "resources",
        children: [
          {
            path: "blogs",
            children: [
              {
                index: true,
                Component: Blogs,
              },
              {
                path: ":id",
                Component: BlogDetail,
              }
            ]
          },
          {
            path: "case-studies",
            children: [
              {
                index: true,
                Component: CaseStudies,
              },
              {
                path: ":id",
                Component: CaseStudyDetail,
              }
            ]
          },
          {
            path: "news",
            children: [
              {
                index: true,
                Component: News,
              },
              {
                path: ":id",
                Component: NewsDetail,
              }
            ]
          },
          {
            path: "events",
            children: [
              {
                index: true,
                Component: Events,
              },
              {
                path: ":id",
                Component: EventDetail,
              }
            ]
          },
        ]
      },
      {
        path: "solutions",
        children: [
          {
            path: "cloud-transformation",
            Component: CloudTransformation,
          },
          {
            path: "data-analytics",
            Component: DataAnalytics,
          },
          {
            path: "artificial-intelligence",
            Component: ArtificialIntelligence,
          },
          {
            path: "pos",
            Component: POSSolution,
          },
          {
            path: "lms",
            Component: LMSSolution,
          },
          {
            path: "policy-engine",
            Component: PolicyEngineSolution,
          },
          {
            path: "cloud-infra",
            Component: CloudInfraSolution,
          },
          {
            path: "erp",
            Component: ERPSolution,
          },
          {
            path: "hrms",
            Component: HRMSSolution,
          },
          {
            path: "cloud-advisory",
            Component: CloudAdvisory,
          },
          {
            path: "cloud-migration",
            Component: CloudMigration,
          },
          {
            path: "cloud-modernization",
            Component: CloudModernization,
          },
          {
            path: "cloud-native-development",
            Component: CloudNativeDevelopment,
          },
          {
            path: "cloud-security-governance",
            Component: CloudSecurityGovernance,
          },
          {
            path: "cloud-financial-management",
            Component: CloudFinancialManagement,
          },
          {
            path: "data-engineering",
            Component: DataEngineering,
          },
          {
            path: "data-foundation",
            Component: DataFoundation,
          },
          {
            path: "data-governance",
            Component: DataGovernance,
          },
          {
            path: "ai-consulting",
            Component: AIConsulting,
          },
          {
            path: "agentic-ai",
            Component: AgenticAI,
          },
          {
            path: "intelligent-automation",
            Component: IntelligentAutomation,
          },
          {
            path: "ai-engineering",
            Component: AIEngineering,
          },
          {
            path: "data-analytics-solution",
            Component: DataAnalyticsSolution,
          }
        ]
      },
      {
        path: "industries",
        children: [
          {
            path: "banking-finance",
            Component: BankingFinance,
          },
          {
            path: "retail-consumer",
            Component: RetailConsumer,
          },
          {
            path: "manufacturing-automotive",
            Component: ManufacturingAutomotive,
          },
          {
            path: "healthcare-pharma",
            Component: HealthcarePharma,
          },
          {
            path: "government-psu",
            Component: GovernmentPSU,
          },
          {
            path: "media-entertainment",
            Component: MediaEntertainment,
          },
        ]
      },
      {
        path: "careers",
        children: [
          {
            index: true,
            Component: Careers,
          },
          {
            path: ":id",
            Component: JobDetails,
          }
        ]
      }
    ]
  }
]);
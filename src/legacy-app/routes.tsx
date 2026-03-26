"use client";

import { createBrowserRouter } from "react-router";

import { Layout } from "../pages_migrated/components/Layout";

// Rebuild: Triggering fresh compilation
// ─── Top-level pages ───
import Home from "../pages_migrated/Home";
import Contact from "../pages_migrated/Contact";
import Careers from "../pages_migrated/Careers";
import JobDetails from "../pages_migrated/JobDetails";
import Solutions from "../pages_migrated/Solutions";

// ─── About Us ───
import About from "../pages_migrated/about/About";
import Leadership from "../pages_migrated/about/Leadership";
import Partners from "../pages_migrated/about/Partners";
import Awards from "../pages_migrated/about/Awards";
import Clients from "../pages_migrated/about/Clients";

// ─── Services > Cloud ───
import CloudTransformation from "../pages_migrated/services/cloud/CloudTransformation";
import CloudAdvisory from "../pages_migrated/services/cloud/CloudAdvisory";
import CloudMigration from "../pages_migrated/services/cloud/CloudMigration";
import CloudModernization from "../pages_migrated/services/cloud/CloudModernization";
import CloudNativeDevelopment from "../pages_migrated/services/cloud/CloudNativeDevelopment";
import CloudSecurityGovernance from "../pages_migrated/services/cloud/CloudSecurityGovernance";
import CloudFinancialManagement from "../pages_migrated/services/cloud/CloudFinancialManagement";

// ─── Services > Data ───
import DataAnalytics from "../pages_migrated/services/data/DataAnalytics";
import DataEngineering from "../pages_migrated/services/data/DataEngineering";
import DataAnalyticsSolution from "../pages_migrated/services/data/DataAnalyticsSolution";
import DataGovernance from "../pages_migrated/services/data/DataGovernance";

// ─── Services > AI ───
import ArtificialIntelligence from "../pages_migrated/services/ai/ArtificialIntelligence";
import AIEngineering from "../pages_migrated/services/ai/AIEngineering";
import AgenticAI from "../pages_migrated/services/ai/AgenticAI";

// ─── Solutions ───
import POSSolution from "../pages_migrated/solutions/POS";
import LMSSolution from "../pages_migrated/solutions/LMS";
import PolicyEngineSolution from "../pages_migrated/solutions/PolicyEngine";
import EnterprisePOSSolution from "../pages_migrated/solutions/EnterprisePOS";
import CloudInfraSolution from "../pages_migrated/solutions/CloudInfra";
import AILMSSolution from "../pages_migrated/solutions/AILMS";
import ERPSolution from "../pages_migrated/solutions/ERP";
import HRMSSolution from "../pages_migrated/solutions/HRMS";
import DataFoundation from "../pages_migrated/solutions/DataFoundation";
import AIConsulting from "../pages_migrated/solutions/AIConsulting";
import IntelligentAutomation from "../pages_migrated/solutions/IntelligentAutomation";
import RetailPOS from "../pages_migrated/solutions/RetailPOS";

// ─── Industries ───
import BankingFinance from "../pages_migrated/industries/BankingFinance";
import RetailConsumer from "../pages_migrated/industries/RetailConsumer";
import ManufacturingAutomotive from "../pages_migrated/industries/ManufacturingAutomotive";
import HealthcarePharma from "../pages_migrated/industries/HealthcarePharma";
import GovernmentPSU from "../pages_migrated/industries/GovernmentPSU";
import MediaEntertainment from "../pages_migrated/industries/MediaEntertainment";

// ─── Resources ───
// Forcing fresh parse of all page imports
import Blogs from "../pages_migrated/resources/Blogs";
import BlogDetail from "../pages_migrated/resources/BlogDetail";
import CaseStudies from "../pages_migrated/resources/CaseStudies";
import CaseStudyDetail from "../pages_migrated/resources/CaseStudyDetail";
import News from "../pages_migrated/resources/News";
import NewsDetail from "../pages_migrated/resources/NewsDetail";
import Events from "../pages_migrated/resources/Events";
import EventDetail from "../pages_migrated/resources/EventDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // ─── Top-level ───
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
      {
        path: "careers",
        children: [
          { index: true, Component: Careers },
          { path: ":id", Component: JobDetails },
        ]
      },

      // ─── About Us ───
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "partners", Component: Partners },
      { path: "awards", Component: Awards },
      { path: "clients", Component: Clients },

      // ─── Services ───
      {
        path: "services",
        children: [
          { path: "cloud-transformation", Component: CloudTransformation },
          { path: "cloud-advisory", Component: CloudAdvisory },
          { path: "cloud-migration", Component: CloudMigration },
          { path: "cloud-modernization", Component: CloudModernization },
          { path: "cloud-native-development", Component: CloudNativeDevelopment },
          { path: "cloud-security-governance", Component: CloudSecurityGovernance },
          { path: "cloud-financial-management", Component: CloudFinancialManagement },
          { path: "data-analytics", Component: DataAnalytics },
          { path: "data-engineering", Component: DataEngineering },
          { path: "data-analytics-solution", Component: DataAnalyticsSolution },
          { path: "data-governance", Component: DataGovernance },
          { path: "ai-engineering", Component: AIEngineering },
          { path: "agentic-ai", Component: AgenticAI },
          { path: "artificial-intelligence", Component: ArtificialIntelligence },
        ]
      },

      // ─── Solutions ───
      {
        path: "solutions",
        children: [
          { index: true, Component: Solutions },
          { path: "cloud-transformation", Component: CloudTransformation },
          { path: "data-analytics", Component: DataAnalytics },
          { path: "artificial-intelligence", Component: ArtificialIntelligence },
          { path: "pos", Component: POSSolution },
          { path: "lms", Component: LMSSolution },
          { path: "policy-engine", Component: PolicyEngineSolution },
          { path: "enterprise-pos", Component: EnterprisePOSSolution },
          { path: "cloud-infra", Component: CloudInfraSolution },
          { path: "ailms", Component: AILMSSolution },
          { path: "erp", Component: ERPSolution },
          { path: "hrms", Component: HRMSSolution },
          { path: "cloud-advisory", Component: CloudAdvisory },
          { path: "cloud-migration", Component: CloudMigration },
          { path: "cloud-modernization", Component: CloudModernization },
          { path: "cloud-native-development", Component: CloudNativeDevelopment },
          { path: "cloud-security-governance", Component: CloudSecurityGovernance },
          { path: "cloud-financial-management", Component: CloudFinancialManagement },
          { path: "data-engineering", Component: DataEngineering },
          { path: "data-foundation", Component: DataFoundation },
          { path: "data-governance", Component: DataGovernance },
          { path: "ai-consulting", Component: AIConsulting },
          { path: "agentic-ai", Component: AgenticAI },
          { path: "intelligent-automation", Component: IntelligentAutomation },
          { path: "ai-engineering", Component: AIEngineering },
          { path: "data-analytics-solution", Component: DataAnalyticsSolution },
          { path: "retail-pos", Component: RetailPOS },
        ]
      },

      // ─── Industries ───
      {
        path: "industries",
        children: [
          { path: "banking-finance", Component: BankingFinance },
          { path: "retail-consumer", Component: RetailConsumer },
          { path: "manufacturing-automotive", Component: ManufacturingAutomotive },
          { path: "healthcare-pharma", Component: HealthcarePharma },
          { path: "government-psu", Component: GovernmentPSU },
          { path: "media-entertainment", Component: MediaEntertainment },
        ]
      },

      // ─── Resources ───
      {
        path: "resources",
        children: [
          {
            path: "blogs",
            children: [
              { index: true, Component: Blogs },
              { path: ":id", Component: BlogDetail },
            ]
          },
          {
            path: "case-studies",
            children: [
              { index: true, Component: CaseStudies },
              { path: ":id", Component: CaseStudyDetail },
            ]
          },
          {
            path: "news",
            children: [
              { index: true, Component: News },
              { path: ":id", Component: NewsDetail },
            ]
          },
          {
            path: "events",
            children: [
              { index: true, Component: Events },
              { path: ":id", Component: EventDetail },
            ]
          },
        ]
      },
    ]
  }
]);
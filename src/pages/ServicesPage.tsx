import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Layout, 
  Figma, 
  Globe, 
  TrendingUp,
  Search,
  Code2,
  ShoppingBag,
  Zap,
  RefreshCw,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItem {
  id: string;
  category: 'Website Design' | 'Visual Design' | 'CMS Platforms' | 'SEO & Digital Marketing';
  title: string;
  description: string;
  expectedOutcome: string;
  idealClient: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const ALL_SERVICES_LIST: ServiceItem[] = [
  // Website Design
  {
    id: 'sd-1',
    category: 'Website Design',
    title: 'Custom Website Design',
    description: 'Bespoke, strategic website design engineered to position your business as an industry authority and turn passive visitors into high-value clients.',
    expectedOutcome: '2x to 4x Increase in Visitor Engagement & Inquiry Rates',
    idealClient: 'B2B enterprises, professional service firms, and luxury brands.',
    deliverables: [
      'Bespoke Figma Wireframes & Interactive Prototypes',
      'Custom Brand Palette & Typography System',
      'Mobile-First Responsive Layout Architecture',
      'High-Converting Copywriting Structure',
      'Custom Graphic Asset & Visual Icon Creation'
    ],
    icon: <Layout className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'sd-2',
    category: 'Website Design',
    title: 'Website Redesign',
    description: 'Transform an outdated, slow, or low-converting existing website into a modern, high-performance sales engine with zero downtime.',
    expectedOutcome: 'Immediate Bounce Rate Reduction & 150%+ Conversion Improvement',
    idealClient: 'Established businesses with existing traffic whose current site fails to convert.',
    deliverables: [
      'Full UX & Conversion Funnel Audit of Existing Site',
      'Modern UI Redesign with Premium Aesthetics',
      'Content Restructuring & Value Prop Refinement',
      'SEO Migration Guarantee (Zero Traffic Loss)',
      'Speed & Core Web Vitals Overhaul'
    ],
    icon: <RefreshCw className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'sd-3',
    category: 'Website Design',
    title: 'High-Converting Landing Pages',
    description: 'Single-focused landing pages built specifically for ad campaigns, product reveals, and high-ticket lead generation.',
    expectedOutcome: 'Maximize Paid Ad ROI & Double Lead Capture Rates',
    idealClient: 'Marketing agencies, SaaS products, and campaign managers.',
    deliverables: [
      'Persuasive Conversion Copywriting Framework',
      'High-Impact Visual Hero & Social Proof Modules',
      'Rapid Load Speed (<0.5s Index)',
      'CRM & Email Automation Integration'
    ],
    icon: <Zap className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'sd-4',
    category: 'Website Design',
    title: 'Executive Portfolio Websites',
    description: 'Showcase websites for executives, consultants, and specialists wanting to command top-tier rates.',
    expectedOutcome: 'Higher Project Retainers & Global Industry Authority',
    idealClient: 'Keynote speakers, agency founders, consultants, and creators.',
    deliverables: [
      'Bespoke Personal Brand Identity',
      'Interactive Case Study Showcase Engine',
      'Direct Calendar Scheduling Integration',
      'Media Press Kit & Speaker Reel Layouts'
    ],
    icon: <UserCheck className="w-5 h-5 text-[#111827]" />
  },

  // Visual Design
  {
    id: 'vd-1',
    category: 'Visual Design',
    title: 'UI/UX Application Design',
    description: 'Intuitive, research-backed user interface and experience design for SaaS products, web applications, and mobile platforms.',
    expectedOutcome: 'Frictionless User Workflows & Higher Product Retention',
    idealClient: 'SaaS founders, tech startups, and product teams building complex software.',
    deliverables: [
      'User Persona & Journey Mapping',
      'Interactive Figma Prototypes with Motion',
      'Comprehensive Design Systems & Component Libraries',
      'Usability Testing & Wireframing',
      'Developer Handoff Documentation'
    ],
    icon: <Figma className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'vd-2',
    category: 'Visual Design',
    title: 'Brand System & Visual Identity',
    description: 'Complete visual identity guidelines including typography, color palettes, icon sets, and UI token scales.',
    expectedOutcome: 'Unified Brand Consistency Across All Digital Touchpoints',
    idealClient: 'Emerging brands and companies undergoing major repositioning.',
    deliverables: [
      'Logo Mark & Typography Tokens',
      'Color Palette System with WCAG Accessibility Standards',
      'Brand Style Guide Documentation',
      'Custom Iconography & Vector Illustrations'
    ],
    icon: <Sparkles className="w-5 h-5 text-[#111827]" />
  },

  // CMS Platforms
  {
    id: 'cp-1',
    category: 'CMS Platforms',
    title: 'Wix Studio Engineering',
    description: 'Advanced, responsive Wix Studio website design utilizing custom CSS breakpoint logic, Velo scripting, and fluid animations.',
    expectedOutcome: 'Easy In-House Content Editing with Enterprise-Grade UI Design',
    idealClient: 'Businesses seeking seamless content control without relying on developers.',
    deliverables: [
      'Pixel-Perfect Wix Studio Layout Construction',
      'Custom Velo JavaScript Functionalities',
      'Mobile Breakpoint Optimization',
      'CMS Database Collections & Dynamic Repeaters'
    ],
    icon: <Globe className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'cp-2',
    category: 'CMS Platforms',
    title: 'Shopify & eCommerce Storefronts',
    description: 'Bespoke online stores built for fast mobile browsing, slide-out cart drawers, and frictionless 1-click checkout.',
    expectedOutcome: 'Reduced Cart Abandonment & Higher Average Order Value (AOV)',
    idealClient: 'D2C fashion brands, boutique retailers, and digital merchants.',
    deliverables: [
      'Custom Shopify Theme Customization & Development',
      'Slide-Out Quick Cart Drawer',
      'Product Customizer & Variant Selector UI',
      'Klaviyo Email Flow Integrations'
    ],
    icon: <ShoppingBag className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'cp-3',
    category: 'CMS Platforms',
    title: 'WordPress & Elementor Pro',
    description: 'Scalable corporate WordPress websites built on custom theme frameworks or Elementor Pro with security hardening.',
    expectedOutcome: 'Maximum Content Scalability & Powerful Custom Functionality',
    idealClient: 'Corporations, legal practices, and media publications.',
    deliverables: [
      'Custom WordPress Theme Setup',
      'Security Hardening & Automated Backups',
      'Speed Optimization & Caching Configuration',
      'Custom Post Types & Advanced Custom Fields (ACF)'
    ],
    icon: <Code2 className="w-5 h-5 text-[#111827]" />
  },

  // SEO & Digital Marketing
  {
    id: 'seo-1',
    category: 'SEO & Digital Marketing',
    title: 'SEO & Performance Overhaul',
    description: 'On-page SEO optimization, technical site audits, schema markup implementation, and Core Web Vitals speed acceleration.',
    expectedOutcome: 'Higher Organic Search Ranking & Sub-Second Page Load Speed',
    idealClient: 'Companies seeking sustainable organic traffic without relying on paid ads.',
    deliverables: [
      'Keyword Research & On-Page Meta Strategy',
      'Technical SEO Audit & Broken Link Fixes',
      'Google Core Web Vitals Optimization (95+ Score)',
      'Schema Structured Data Markup'
    ],
    icon: <Search className="w-5 h-5 text-[#111827]" />
  },
  {
    id: 'seo-2',
    category: 'SEO & Digital Marketing',
    title: 'Conversion Rate Funnel Optimization',
    description: 'A/B testing, heatmap analysis, and UI refactoring designed to eliminate friction points in your sales funnel.',
    expectedOutcome: 'Higher Conversion Percentages from Existing Visitor Traffic',
    idealClient: 'Websites with steady traffic that are struggling to capture leads.',
    deliverables: [
      'User Behavior & Heatmap Analysis',
      'Form & CTA Placement Restructuring',
      'A/B Split Test Variant Mockups',
      'Conversion Analytics Setup'
    ],
    icon: <TrendingUp className="w-5 h-5 text-[#111827]" />
  }
];

const getShortCTALabel = (title: string) => {
  if (title.toLowerCase().includes('custom website design') || title === 'Website Design') return 'Discuss Website Design';
  if (title.toLowerCase().includes('redesign')) return 'Discuss Website Redesign';
  if (title.toLowerCase().includes('ui/ux')) return 'Discuss UI/UX Design';
  if (title.toLowerCase().includes('landing')) return 'Discuss Landing Pages';
  if (title.toLowerCase().includes('business website')) return 'Discuss Business Website';
  if (title.toLowerCase().includes('portfolio')) return 'Discuss Portfolio Website';
  if (title.toLowerCase().includes('shopify') || title.toLowerCase().includes('ecommerce') || title.toLowerCase().includes('store')) return 'Discuss eCommerce Store';
  if (title.toLowerCase().includes('brand')) return 'Discuss Brand System';
  if (title.toLowerCase().includes('wix')) return 'Discuss Wix Studio';
  if (title.toLowerCase().includes('wordpress')) return 'Discuss WordPress';
  if (title.toLowerCase().includes('seo')) return 'Discuss SEO Services';
  if (title.toLowerCase().includes('conversion') || title.toLowerCase().includes('funnel')) return 'Discuss Funnel Optimization';
  return `Discuss ${title.replace(' Custom', '').replace(' Application Design', '')}`;
};

export const ServicesPage: React.FC = () => {
  const { openDiscoveryModal } = useNavigation();
  const [activeTab, setActiveTab] = useState<'Website Design' | 'Visual Design' | 'CMS Platforms' | 'SEO & Digital Marketing'>('Website Design');

  const categories = [
    'Website Design',
    'Visual Design',
    'CMS Platforms',
    'SEO & Digital Marketing'
  ] as const;

  const filteredServices = ALL_SERVICES_LIST.filter(srv => srv.category === activeTab);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* SERVICES HERO */}
      <section className="pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#111827]" />
            Capabilities & Expertise
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
            Services Engineered for <span className="text-gradient">Business Growth</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every capability is tailored to elevate brand authority, resolve conversion bottlenecks, and deliver measurable return on investment.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-full text-xs font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#F2ECE7] text-[#111827] border-[#F2ECE7] shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#111827] inline-block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Filtered Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((srv) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-3xl p-7 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Clean Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-[#F2ECE7] flex items-center justify-center font-bold">
                      {srv.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                      {srv.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Key Expected Outcome */}
                  <div className="pt-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      ✓ Expected Outcome:
                    </span>
                    <span>{srv.expectedOutcome}</span>
                  </div>

                  {/* Ideal Client Profile */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
                    <span className="font-semibold text-slate-900 dark:text-white block">
                      Ideal For:
                    </span>
                    <p>{srv.idealClient}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      Key Deliverables:
                    </span>
                    <div className="space-y-1.5">
                      {srv.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={openDiscoveryModal}
                    className="w-fit px-6 py-3.5 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-xs sm:text-sm transition-all flex items-center justify-start sm:justify-center gap-2 shadow-sm active:scale-95"
                  >
                    <span>{getShortCTALabel(srv.title)}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#111827] shrink-0" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

    </div>
  );
};

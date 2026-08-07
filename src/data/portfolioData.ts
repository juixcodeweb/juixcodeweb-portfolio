import { 
  Project, 
  Service, 
  Testimonial, 
  ProcessStep, 
  PartnerPrinciple, 
  TechSkill, 
  FAQItem 
} from '../types';

import heroDashboardImg from '../assets/images/juixcode_hero_dashboard_1785871783074.jpg';
import ecommerceImg from '../assets/images/juixcode_project_ecommerce_1785871795198.jpg';
import aiSaasImg from '../assets/images/juixcode_project_ai_saas_1785871806962.jpg';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'NexusAI — Intelligent Workflow Automation Platform',
    slug: 'nexus-ai-automation',
    platform: 'Framer',
    industry: 'Artificial Intelligence & SaaS',
    category: 'AI',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png',
    shortDescription: 'A modern conversion-engineered web application and marketing platform built for an enterprise AI workflow engine.',
    year: '2025',
    client: 'Nexus Systems Inc.',
    featured: true,
    caseStudy: {
      overview: 'NexusAI required a complete brand overhaul and digital presence. Their previous website was overly technical, struggled to convert high-value enterprise leads, and suffered from slow load times.',
      myRole: 'Lead UI/UX Designer & Web Developer',
      toolsUsed: ['Framer', 'Figma', 'React', 'Tailwind CSS', 'GSAP'],
      clientGoal: 'Reposition the brand for enterprise decision-makers and increase qualified demo inquiries by 200%.',
      challenge: 'Communicate complex multi-agent AI capabilities in plain, compelling language while creating a high-converting web funnel for demo bookings without overwhelming non-technical buyers.',
      solution: 'We designed an intuitive interface featuring interactive live feature sandbox previews, real-time interactive ROI calculators, and a seamless demo request flow.',
      designProcess: [
        'In-depth competitor analysis & positioning strategy',
        'Information architecture mapping for enterprise decision-makers',
        'Interactive Figma wireframing and motion design prototyping',
        'Custom web component engineering with smooth micro-interactions',
        'A/B testing lead forms & page performance optimization'
      ],
      finalResult: 'An award-winning, sleek SaaS web experience that immediately positioned NexusAI as an industry leader and skyrocketed conversion rates within 30 days of launch.',
      technologiesUsed: ['Framer', 'React', 'Tailwind CSS', 'GSAP', 'NextJS', 'Google Analytics 4'],
      keyOutcomes: [
        { label: 'Demo Request Lift', value: '+310%', subtext: 'In the first 60 days post-launch' },
        { label: 'Page Load Speed', value: '0.4s', subtext: '99/100 Google Lighthouse score' },
        { label: 'Pipeline Generated', value: '$2.8M', subtext: 'Qualified inbound enterprise leads' }
      ],
      galleryScreenshots: [
        {
          title: 'Interactive Feature Playground',
          caption: 'Allows prospective clients to test prompt workflows live in the browser before requesting a custom demo.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png'
        },
        {
          title: 'Enterprise ROI Calculator',
          caption: 'Visual slider interface demonstrating automated hours saved and estimated annual cost reduction.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png'
        }
      ],
      liveUrl: 'https://nexusai.example.com',
      clientFeedback: {
        quote: 'Juixcodeweb transformed our digital footprint entirely. Our lead conversion rates tripled within 60 days of launch, and top enterprise clients constantly compliment our interface.',
        author: 'Elena Rostova',
        role: 'Chief Marketing Officer at Nexus Systems'
      }
    }
  },
  {
    id: 'proj-2',
    title: 'Aura Luxury Atelier — High-End Fashion eCommerce',
    slug: 'aura-luxury-ecommerce',
    platform: 'Shopify',
    industry: 'Fashion & Luxury Retail',
    category: 'eCommerce',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png',
    shortDescription: 'A bespoke, minimalist eCommerce website designed to evoke quiet luxury, driving high average order values.',
    year: '2025',
    client: 'Aura Atelier Paris',
    featured: true,
    caseStudy: {
      overview: 'Aura Atelier needed a web store that mirrored the tactile elegance of their physical Parisian showroom while optimizing cart checkout speed across mobile devices.',
      myRole: 'E-Commerce UX Specialist & Developer',
      toolsUsed: ['Shopify Liquid', 'Figma', 'Tailwind CSS', 'JavaScript'],
      clientGoal: 'Double mobile cart conversions and elevate brand perception to support higher price points.',
      challenge: 'High cart abandonment rate on mobile devices, alongside sluggish image loading that diluted the premium feel of high-resolution lookbooks.',
      solution: 'Engineered a lightning-fast custom Shopify storefront with fluid slide-out cart drawers, high-resolution progressive image loading, and micro-interactions for product customizer options.',
      designProcess: [
        'Luxurious minimalist design system development',
        'Mobile-first checkout funnel restructuring',
        '3D interactive product viewer prototyping',
        'Shopify custom theme engineering',
        'Global CDN image asset acceleration'
      ],
      finalResult: 'A effortless, sensory shopping experience that elevated brand perception and increased mobile cart completion rates dramatically.',
      technologiesUsed: ['Shopify Liquid', 'Tailwind CSS', 'JavaScript', 'Figma', 'Klaviyo'],
      keyOutcomes: [
        { label: 'Mobile Conversion', value: '+185%', subtext: 'Streamlined 1-click checkout' },
        { label: 'Average Order Value', value: '$840', subtext: 'Up from $520 previously' },
        { label: 'Page Speed Index', value: '98/100', subtext: 'Optimized high-res media' }
      ],
      galleryScreenshots: [
        {
          title: 'Lookbook Grid & Quick Add',
          caption: 'Seamless slide-over panel allowing instant size selection without breaking the visual browsing flow.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png'
        }
      ],
      liveUrl: 'https://auraluxury.example.com',
      clientFeedback: {
        quote: 'Juixcodeweb understands luxury design like no other agency. The site looks stunning on mobile, and our sales revenue expanded by 140% in quarter one.',
        author: 'Jean-Luc Moreau',
        role: 'Founder & Creative Director, Aura Atelier'
      }
    }
  },
  {
    id: 'proj-3',
    title: 'PulseMetrics — Clinical Analytics Dashboard',
    slug: 'pulse-metrics-healthcare',
    platform: 'Figma',
    industry: 'Healthcare & HealthTech',
    category: 'Healthcare',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
    shortDescription: 'HIPAA-compliant, high-density analytics platform for hospital network resource management and patient metrics.',
    year: '2024',
    client: 'PulseHealth Systems',
    featured: true,
    caseStudy: {
      overview: 'PulseHealth needed a unified dashboard to synthesize telemetry data from over 40 hospital locations into clear actionable visualizations for medical directors.',
      myRole: 'Product Designer & React Engineer',
      toolsUsed: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'D3.js'],
      clientGoal: 'Reduce medical director alert triage time and establish a HIPAA-compliant UI design system.',
      challenge: 'Dense medical data overwhelmed users, causing delayed decision-making during critical care monitoring shifts.',
      solution: 'Created an ergonomic, accessible dashboard design with customizable widget grids, high-contrast color coding for clinical alerts, and instant filtering.',
      designProcess: [
        'Clinical workflow observation & user research',
        'High-density UI component library design',
        'Accessibility compliance audit (WCAG AAA)',
        'React state architecture & socket real-time updates'
      ],
      finalResult: 'Reduced clinical alert response time by 45% and established a scalable design system for future hospital suite modules.',
      technologiesUsed: ['React', 'D3.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      keyOutcomes: [
        { label: 'Decision Time Reduction', value: '45%', subtext: 'Faster clinical alert identification' },
        { label: 'User Satisfaction', value: '98%', subtext: 'Audited across 350+ medical staff' },
        { label: 'Data Latency', value: '<50ms', subtext: 'Real-time telemetry streaming' }
      ],
      galleryScreenshots: [
        {
          title: 'Live Ward Monitoring Matrix',
          caption: 'Color-coded patient status cards with rapid filter toggle controls.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png'
        }
      ],
      liveUrl: 'https://pulsemetrics.example.com',
      clientFeedback: {
        quote: 'Juixcodeweb managed to make complex health analytics simple, elegant, and rock-solid reliable. Remarkable work.',
        author: 'Dr. Marcus Vance',
        role: 'Chief Medical Information Officer'
      }
    }
  },
  {
    id: 'proj-4',
    title: 'Vanguard Properties — Luxury Real Estate Marketplace',
    slug: 'vanguard-real-estate',
    platform: 'WordPress',
    industry: 'Real Estate & Property Development',
    category: 'Real Estate',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816897/Atelierform_Real_estate_xae5vy.png',
    shortDescription: 'An immersive digital portal showcasing multi-million dollar architectural estates with 4K virtual tours.',
    year: '2025',
    client: 'Vanguard International',
    featured: false,
    caseStudy: {
      overview: 'Vanguard wanted an ultra-exclusive property showcase platform to attract international buyers for off-market architectural masterpieces.',
      myRole: 'Website Designer & WordPress Developer',
      toolsUsed: ['WordPress', 'Elementor', 'Figma', 'GSAP'],
      clientGoal: 'Capture high-intent international private estate buyers and increase viewing bookings.',
      challenge: 'High bounce rate from buyers due to generic listing templates and lack of immersive property story-telling.',
      solution: 'Built a cinematic web experience with interactive floorplan hot-spots, full-bleed gallery carousels, and instant private viewing request scheduling.',
      designProcess: [
        'Luxury market positioning analysis',
        'Interactive floorplan SVG overlay mapping',
        'Bespoke booking modal integration',
        'Performance optimization for 4K video background loops'
      ],
      finalResult: 'Secured 32 high-value property inquiries within 2 weeks of launching the renewed portal.',
      technologiesUsed: ['WordPress', 'Elementor Custom', 'JavaScript', 'GSAP', 'CSS3'],
      keyOutcomes: [
        { label: 'Listing Engagement', value: '+240%', subtext: 'Average session duration 6.5 mins' },
        { label: 'Private Tour Bookings', value: '32', subtext: 'First 14 days post launch' },
        { label: 'Global Traffic Share', value: '42%', subtext: 'International luxury buyers' }
      ],
      galleryScreenshots: [
        {
          title: 'Cinematic Property Hero View',
          caption: 'Smooth video transitions and floorplan hotspots.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816897/Atelierform_Real_estate_xae5vy.png'
        }
      ],
      liveUrl: 'https://vanguardestates.example.com'
    }
  },
  {
    id: 'proj-5',
    title: 'Apex Peak Fitness — Hybrid Coaching Platform',
    slug: 'apex-fitness-coaching',
    platform: 'Wix Studio',
    industry: 'Health, Fitness & Coaching',
    category: 'Fitness',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816947/Bianca_7ytf_gq0ygn.png',
    shortDescription: 'High-energy landing page and custom member portal for an elite athletic conditioning team.',
    year: '2024',
    client: 'Apex Athletic Club',
    featured: false,
    caseStudy: {
      overview: 'Apex needed a high-impact website to launch their hybrid digital membership program and elite 1-on-1 coaching subscriptions.',
      myRole: 'UI/UX Designer & Wix Studio Developer',
      toolsUsed: ['Wix Studio', 'Velo JS', 'Figma', 'Stripe'],
      clientGoal: 'Automate member onboarding and scale monthly recurring subscriptions.',
      challenge: 'Low conversion on old landing page and manual client onboarding that consumed hours of trainer time every week.',
      solution: 'Designed a high-octane dark theme website with interactive quiz onboarding, instant workout preview videos, and automated Stripe billing.',
      designProcess: [
        'Dynamic conversion copy structuring',
        'Interactive 3-step fitness goal finder quiz',
        'Stripe subscription portal integration',
        'High-contrast motion typography animations'
      ],
      finalResult: 'Added 450+ new monthly recurring subscribers in the first month of campaign launch.',
      technologiesUsed: ['Wix Studio', 'Velo JS', 'JavaScript', 'Stripe API'],
      keyOutcomes: [
        { label: 'New Subscriptions', value: '+450', subtext: 'In month 1 alone' },
        { label: 'Onboarding Automation', value: '100%', subtext: 'Zero manual staff setup required' },
        { label: 'Conversion Rate', value: '8.4%', subtext: 'Cold traffic to trial conversion' }
      ],
      galleryScreenshots: [
        {
          title: 'Interactive Fitness Goal Quiz',
          caption: 'Guides prospective members to their ideal training tier in under 60 seconds.',
          imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
        }
      ]
    }
  },
  {
    id: 'proj-6',
    title: 'Maison Culinary — Michelin-Star Restaurant Web Experience',
    slug: 'maison-culinary-restaurant',
    platform: 'Squarespace',
    industry: 'Hospitality & Dining',
    category: 'Restaurants',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'An atmospheric, sensual online dining portal with seamless table reservation integration and seasonal tasting menus.',
    year: '2025',
    client: 'Maison Restaurant Group',
    featured: false,
    caseStudy: {
      overview: 'Maison Culinary wanted a web presence as refined as their Michelin-starred tasting menus, driving direct table bookings instead of third-party commission apps.',
      myRole: 'Website Designer & Custom Developer',
      toolsUsed: ['Squarespace', 'CSS3', 'JavaScript', 'OpenTable API'],
      clientGoal: 'Shift reservations to direct website bookings to save on third-party platform fees.',
      challenge: 'High reliance on third-party booking platforms resulting in steep commission fees and loss of guest relationship management.',
      solution: 'Crafted a bespoke editorial website featuring interactive seasonal tasting menu guides, direct OpenTable API booking integration, and gift card purchasing.',
      designProcess: [
        'Gastronomic visual storytelling & imagery selection',
        'Editorial typography pairing',
        'Direct OpenTable reservation API integration',
        'Mobile optimization for instant same-day bookings'
      ],
      finalResult: 'Shifted 68% of total reservations to direct web bookings, saving $14,000 in monthly platform commissions.',
      technologiesUsed: ['Squarespace Custom', 'JavaScript', 'OpenTable API', 'Tailwind CSS'],
      keyOutcomes: [
        { label: 'Direct Booking Share', value: '68%', subtext: 'Shifted away from third-party apps' },
        { label: 'Monthly Commission Saved', value: '$14,000', subtext: 'Direct revenue retention' },
        { label: 'Table Occupancy', value: '96%', subtext: 'Fully booked 3 weeks in advance' }
      ],
      galleryScreenshots: [
        {
          title: 'Tasting Menu & Wine Pairing View',
          caption: 'Elegant interactive menu cards with sommelier recommendations.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
        }
      ]
    }
  },
  {
    id: 'proj-7',
    title: 'Dr. Sarah Jenkins — Executive Leadership Coach',
    slug: 'sarah-jenkins-coaching',
    platform: 'WordPress',
    industry: 'Executive Coaching & Mentorship',
    category: 'Coaching',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Authority-building personal brand hub and keynotes booking portal for a Fortune 500 leadership mentor.',
    year: '2024',
    client: 'Dr. Sarah Jenkins Inc.',
    featured: false,
    caseStudy: {
      overview: 'Dr. Jenkins needed a website that reflected her prestige as an advisor to C-suite executives and top keynote speaker.',
      myRole: 'Brand Strategist & WordPress Developer',
      toolsUsed: ['WordPress', 'Elementor Pro', 'Figma', 'Calendly'],
      clientGoal: 'Establish market authority and command higher keynote speaking rates.',
      challenge: 'Outdated website failed to convey corporate authority, resulting in lower speaking fees and disorganized inquiry management.',
      solution: 'Built a sleek, high-trust personal brand website featuring video keynote sizzle reels, downloadable speaker press kits, and an automated inquiry portal.',
      designProcess: [
        'Personal brand authority positioning',
        'Keynote speaker press kit asset packaging',
        'Calendly enterprise integration',
        'Social proof testimonial highlight strategy'
      ],
      finalResult: 'Increased average keynote fee by 60% and secured 12 new Fortune 500 coaching retainers within 90 days.',
      technologiesUsed: ['WordPress', 'Elementor Pro', 'CSS3', 'Velo', 'Calendly'],
      keyOutcomes: [
        { label: 'Keynote Fee Lift', value: '+60%', subtext: 'Established top-tier market position' },
        { label: 'Corporate Retainers', value: '12 New', subtext: 'Signed within 90 days' },
        { label: 'Inquiry Conversion', value: '+210%', subtext: 'From qualified executive visitors' }
      ],
      galleryScreenshots: [
        {
          title: 'Keynote Speaker Hub',
          caption: 'Includes downloadable PDF one-sheets and high-definition speech trailers.',
          imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
        }
      ]
    }
  },
  {
    id: 'proj-8',
    title: 'JuixCode Creator — Modern Web Design Educator Brand',
    slug: 'juixcode-creator-brand',
    platform: 'Wix Studio',
    industry: 'Personal Brand & Digital Products',
    category: 'Personal Brands',
    image: aiSaasImg,
    shortDescription: 'High-converting personal brand hub showcasing web design mentorship, templates, and agency services.',
    year: '2025',
    client: 'Juixcodeweb Digital',
    featured: false,
    caseStudy: {
      overview: 'A showcase personal brand platform built for Juixcodeweb to highlight design philosophies, digital templates, and private client inquiries.',
      myRole: 'Lead UI Designer & Full-Stack Developer',
      toolsUsed: ['Wix Studio', 'React', 'Tailwind CSS', 'Figma'],
      clientGoal: 'Drive dual inquiries for high-ticket agency services and digital design assets.',
      challenge: 'Build a unified brand experience that appeals equally to high-value agency clients and aspiring digital creators seeking templates.',
      solution: 'Crafted a dual-funnel architecture with fluid dark/light mode, interactive consultation schedulers, and high-performance digital template downloads.',
      designProcess: [
        'Brand identity & core message formulation',
        'Dual conversion funnel architecture',
        'Custom interactive component system',
        'Integrated automated calendar scheduling'
      ],
      finalResult: 'Established Juixcodeweb as a globally recognized, high-authority web design partner.',
      technologiesUsed: ['Wix Studio', 'React', 'Tailwind CSS', 'Motion', 'Vite', 'TypeScript'],
      keyOutcomes: [
        { label: 'Inbound Growth', value: '4.8x', subtext: 'High-intent client inquiries' },
        { label: 'Lighthouse Rating', value: '100/100', subtext: 'Perfect score across all metrics' }
      ],
      galleryScreenshots: [
        {
          title: 'Dual Funnel Homepage',
          caption: 'Clean split layout directing enterprise clients to discovery call and creators to templates.',
          imageUrl: aiSaasImg
        }
      ]
    }
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-1',
    title: 'Website Design',
    iconName: 'Layout',
    description: 'Custom, strategic website design engineered to position your business as an industry leader and turn passive visitors into paying clients.',
    expectedOutcome: '2x to 4x Increase in Visitor Engagement & Inquiry Rates',
    idealClient: 'High-growth B2B companies, service professionals, and luxury consumer brands.',
    deliverables: [
      'Bespoke Figma UI/UX Design Prototypes',
      'Custom Brand Palette & Typography System',
      'Mobile-First Responsive Layout Architecture',
      'High-Converting Copywriting Structure',
      'Asset & Graphic Asset Creation'
    ],
    featured: true
  },
  {
    id: 'srv-2',
    title: 'Website Redesign',
    iconName: 'RefreshCw',
    description: 'Transform an outdated, slow, or low-converting existing website into a modern, high-performance sales engine.',
    expectedOutcome: 'Immediate Bounce Rate Reduction & 150%+ Conversion Improvement',
    idealClient: 'Established businesses with existing traffic whose current site no longer reflects their true capability.',
    deliverables: [
      'Full UX & Conversion Audit of Existing Site',
      'Modern UI Redesign with Premium Aesthetics',
      'Content Restructuring & Value Prop Refinement',
      'SEO Migration (Zero Loss of Traffic)',
      'Speed & Performance Overhaul'
    ],
    featured: true
  },
  {
    id: 'srv-3',
    title: 'UI/UX Design',
    iconName: 'Figma',
    description: 'Intuitive, research-backed user interface and user experience design for web applications, SaaS dashboards, and complex digital products.',
    expectedOutcome: 'Streamlined User Workflows & Higher Product Retention',
    idealClient: 'SaaS founders, tech startups, and digital product teams building complex software.',
    deliverables: [
      'User Persona & Journey Mapping',
      'Interactive Figma Prototypes with Motion',
      'Comprehensive Design Systems & Token Libraries',
      'Usability Testing & Wireframing',
      'Developer Handoff Documentation'
    ],
    featured: true
  },
  {
    id: 'srv-4',
    title: 'Landing Pages',
    iconName: 'Sparkles',
    description: 'High-octane, single-focused landing pages designed specifically for paid ad campaigns, product launches, or lead generation.',
    expectedOutcome: 'Maximize Paid Ad ROI & Double Lead Capture Rates',
    idealClient: 'Agencies, course creators, product launches, and pay-per-click campaign managers.',
    deliverables: [
      'Persuasive Conversion Copywriting Structure',
      'High-Impact Visual Hero & Social Proof Modules',
      'Rapid Load Speed (<0.5s Index)',
      'A/B Testing Variants Setup',
      'CRM & Email Automation Integration'
    ],
    featured: true
  },
  {
    id: 'srv-5',
    title: 'Business Websites',
    iconName: 'Briefcase',
    description: 'Comprehensive, multi-page corporate websites that establish rock-solid market authority and streamline client inquiries.',
    expectedOutcome: 'Established Market Leadership & Inbound Sales Qualified Pipeline',
    idealClient: 'Law firms, consultancies, financial institutions, and corporate enterprises.',
    deliverables: [
      'Multi-Page Architectural Structure',
      'Team & Service Showcase Layouts',
      'Client Portal & Scheduling Integration',
      'Interactive Case Study Modules',
      'Multi-Language & Localization Ready'
    ]
  },
  {
    id: 'srv-6',
    title: 'eCommerce Stores',
    iconName: 'ShoppingBag',
    description: 'Bespoke online stores crafted for frictionless browsing, instant mobile cart checkout, and elevated average order value.',
    expectedOutcome: 'Reduced Cart Abandonment & Increased Average Order Value',
    idealClient: 'D2C fashion brands, boutique retailers, and digital product merchants.',
    deliverables: [
      'Custom Shopify or WooCommerce Architecture',
      'Seamless Mobile Slide-Out Cart Drawer',
      'Product Customizer & Variant Selector UI',
      '1-Click Checkout & Payment Gateway Integration',
      'Klaviyo Email Automation Flows Setup'
    ],
    featured: true
  },
  {
    id: 'srv-7',
    title: 'Portfolio Websites',
    iconName: 'UserCheck',
    description: 'Showcase websites for executives, creatives, and specialists wanting to command premium rates and attract high-tier opportunities.',
    expectedOutcome: 'Higher Project Retainers & Global Recognition',
    idealClient: 'Architects, consultants, keynote speakers, artists, and agency founders.',
    deliverables: [
      'Bespoke Personal Brand Identity',
      'Interactive Project Case Study Engine',
      'Media Press Kit & Speaker Reel Section',
      'Direct Calendar Consultation Booking',
      'Smooth Motion & Micro-Interactions'
    ]
  },
  {
    id: 'srv-8',
    title: 'SEO Optimization',
    iconName: 'Search',
    description: 'Technical, structure, and on-page SEO engineering to ensure your website ranks at the top of Google for high-intent search queries.',
    expectedOutcome: 'Consistent Organic Lead Flow Without Ad Spend Dependency',
    idealClient: 'Local businesses, SaaS products, and content-driven brands.',
    deliverables: [
      'Technical SEO Audit & Schema Markup',
      'Keyword Research & Mapping Strategy',
      'On-Page Meta, Header, & Image Optimization',
      'Core Web Vitals Optimization',
      'Google Search Console & GA4 Setup'
    ],
    featured: true
  },
  {
    id: 'srv-9',
    title: 'Website Maintenance',
    iconName: 'ShieldCheck',
    description: 'Ongoing technical care, security monitoring, back-ups, and continuous design enhancements so your site never stops performing.',
    expectedOutcome: '100% Uptime Peace of Mind & Continuous Growth Updates',
    idealClient: 'Busy business owners who want a dedicated technical partner to manage web assets.',
    deliverables: [
      'Daily Off-Site Cloud Backups',
      '24/7 Security Scanning & Malware Defense',
      'Plugin & Platform Update Verification',
      'Monthly Design & Copy Tweak Hours',
      'Priority Technical Emergency Support'
    ]
  },
  {
    id: 'srv-10',
    title: 'Performance Optimization',
    iconName: 'Zap',
    description: 'Speed engineering to eliminate sluggish load times, pass Google Core Web Vitals, and keep impatient visitors on your page.',
    expectedOutcome: 'Sub-Second Load Times & Instant Google Lighthouse Score Boost',
    idealClient: 'Any website suffering from slow speeds, heavy images, or bloated code.',
    deliverables: [
      'Image & Media Compression Pipeline',
      'CSS & JS Unused Code Elimination',
      'CDN Caching & Asset Delivery Strategy',
      'Server Response Time (TTFB) Acceleration',
      'Core Web Vitals Pass Guarantee'
    ]
  },
  {
    id: 'srv-11',
    title: 'Responsive Design',
    iconName: 'Smartphone',
    description: 'Ensure your website looks and functions flawlessly across every single device screen size, from 4K monitors to handheld smartphones.',
    expectedOutcome: 'Flawless Touch-Friendly Experience for 65%+ Mobile Traffic',
    idealClient: 'Brands where mobile visitors represent the majority of web traffic.',
    deliverables: [
      'Fluid Mobile Breakpoints Calibration',
      'Touch Target Accessibility Check (44px+)',
      'Custom Mobile Navigation Drawers',
      'Orientation & Tablet Grid Optimization',
      'Cross-Browser & Cross-Device QA Testing'
    ]
  },
  {
    id: 'srv-12',
    title: 'CMS Integration',
    iconName: 'Layers',
    description: 'Empower your team to update blog posts, portfolio items, team members, and landing content effortlessly without touching a line of code.',
    expectedOutcome: 'Complete Publishing Autonomy for Your In-House Marketing Team',
    idealClient: 'Marketing teams requiring frequent content updates and publishing freedom.',
    deliverables: [
      'Wix Studio, WordPress, Webflow, or Framer Setup',
      'Custom Visual Content Schema',
      'Easy Drag-and-Drop Editor Training',
      'Pre-Formatted Design Block Templates',
      'Video Documentation & Training Portal'
    ]
  }
];

export const WORKFLOW_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery',
    subtitle: 'Uncovering Goals & Audience',
    description: 'We begin with a deep-dive consultation to audit your business goals, target audience, competitors, and revenue targets. We define exactly what success looks like.',
    deliverables: ['Project Roadmap', 'Brand Alignment Audit', 'Competitor Analysis'],
    duration: '3–5 Days'
  },
  {
    stepNumber: '02',
    title: 'Research',
    subtitle: 'Market Positioning & User Insight',
    description: 'We research user behavior, study top-converting sites in your industry, and outline the psychology required to convert visitors into high-value inquiries.',
    deliverables: ['User Persona Mapping', 'Conversion Funnel Strategy'],
    duration: '2–4 Days'
  },
  {
    stepNumber: '03',
    title: 'Strategy',
    subtitle: 'Structure & Value Proposition',
    description: 'We map out the exact site architecture, wireframe hierarchy, and copywriting framework to ensure every page guides visitors toward taking action.',
    deliverables: ['Site Map', 'High-Converting Copy Outline', 'Page Architecture'],
    duration: '3–5 Days'
  },
  {
    stepNumber: '04',
    title: 'Wireframes',
    subtitle: 'Low-Fidelity UX Layouts',
    description: 'Before adding visual polish, we create structural blueprints to lock in element placement, call-to-action buttons, and content flow.',
    deliverables: ['Desktop & Mobile UX Wireframes', 'Interactive Flow Prototype'],
    duration: '4–6 Days'
  },
  {
    stepNumber: '05',
    title: 'UI Design',
    subtitle: 'Visual Aesthetics & Brand Elevation',
    description: 'We bring your site to life with a bespoke, high-end visual design system—pairing elegant typography, spacious grids, subtle gradients, and motion concepts.',
    deliverables: ['Full Figma UI Design Screens', 'Design System Tokens', 'Interactive Motion Specs'],
    duration: '5–8 Days'
  },
  {
    stepNumber: '06',
    title: 'Development',
    subtitle: 'Pixel-Perfect Clean Code',
    description: 'We build your website using modern, clean code standards—ensuring sub-second load times, responsive fluid layouts, and smooth animations.',
    deliverables: ['Production Development Build', 'Clean Modular Codebase', 'CMS Integration'],
    duration: '7–12 Days'
  },
  {
    stepNumber: '07',
    title: 'Testing',
    subtitle: 'Quality Assurance & Speed QA',
    description: 'Rigorous cross-browser, cross-device, security, accessibility, and speed testing to ensure 100% flawlessness across every screen size.',
    deliverables: ['Core Web Vitals Pass', 'Cross-Device QA Audit', 'SEO Technical Checklist'],
    duration: '2–4 Days'
  },
  {
    stepNumber: '08',
    title: 'Launch',
    subtitle: 'Seamless Deployment',
    description: 'We deploy your site to production, configure SSL certificates, wire up domain DNS settings, and connect analytics and lead forms.',
    deliverables: ['Live Server Deployment', 'Domain & SSL Setup', 'Google Analytics & CRM Connection'],
    duration: '1–2 Days'
  },
  {
    stepNumber: '09',
    title: 'Support',
    subtitle: 'Continuous Growth & Training',
    description: 'Our partnership doesn’t end at launch. We provide video training for your team, 30 days of post-launch technical support, and ongoing growth advisory.',
    deliverables: ['CMS Video Training Library', '30-Day Priority Support Guarantee', 'Post-Launch Analytics Review'],
    duration: 'Ongoing'
  }
];

export const WHY_CLIENTS_WORK_WITH_ME = [
  {
    id: 'wc-1',
    title: 'Years of Experience',
    description: '4 years of hands-on expertise building conversion-driven, high-performing websites for growing brands globally.',
    iconName: 'Award',
    stat: '4 Years'
  },
  {
    id: 'wc-2',
    title: 'Direct Access to Me',
    description: 'Work directly with the designer & lead developer—no middleman, no account managers, no lost context.',
    iconName: 'UserCheck',
    stat: '100% Direct'
  },
  {
    id: 'wc-3',
    title: 'Design & SEO Alignment',
    description: 'Stunning visual craft paired with technical SEO engineering and Google Core Web Vitals speed perfection.',
    iconName: 'Zap',
    stat: '99/100 Speed'
  },
  {
    id: 'wc-4',
    title: 'Honest & Transparent Communication',
    description: 'Clear commitments, transparent timelines, weekly video updates, and zero hidden fees guaranteed.',
    iconName: 'MessageSquare',
    stat: 'Zero Secrets'
  }
];

export const PARTNER_PRINCIPLES: PartnerPrinciple[] = [
  {
    id: 'pr-1',
    title: 'Clear Communication',
    description: 'No technical jargon or silent gaps. You receive prompt, transparent weekly progress updates and direct access throughout the project.',
    iconName: 'MessageSquare'
  },
  {
    id: 'pr-2',
    title: 'Transparent Process',
    description: 'Zero hidden costs or sudden surprises. Every milestone, deliverable, and timeline step is agreed upon up front in writing.',
    iconName: 'CheckCircle'
  },
  {
    id: 'pr-3',
    title: 'Thoughtful Design Decisions',
    description: 'Every font choice, color, button placement, and spacing ratio is chosen with mathematical intent to support business goals.',
    iconName: 'Compass'
  },
  {
    id: 'pr-4',
    title: 'User-First Experiences',
    description: 'We design for real humans—making navigation intuitive, load times instantaneous, and mobile interaction effortless.',
    iconName: 'Heart'
  },
  {
    id: 'pr-5',
    title: 'Attention to Detail',
    description: 'Micro-interactions, pixel alignment, typography tracking, and smooth transitions are meticulously polished.',
    iconName: 'Sliders'
  },
  {
    id: 'pr-6',
    title: 'Reliable Delivery',
    description: 'We respect deadlines as absolute commitments. When we commit to a launch date, your site launches on that date.',
    iconName: 'Clock'
  },
  {
    id: 'pr-7',
    title: 'Long-Term Partnership Mindset',
    description: 'We treat your business like our own, acting as a strategic partner who remains available as your brand scales.',
    iconName: 'Users'
  },
  {
    id: 'pr-8',
    title: 'Focus on Business Goals, Not Just Visuals',
    description: 'Pretty designs mean nothing if they don’t convert. Our primary metric of success is measurable business growth for you.',
    iconName: 'TrendingUp'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Mark McGinnis',
    role: 'Founder',
    company: 'Avenstar Productions, LLC',
    avatar: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1786077107/6aec56_c5b6c07631ef4ebb9998633585aefcb1_mv2_kxnlbt.png',
    rating: 5,
    quote: 'Joshua was thorough, efficient, and professional. I would definitely hire him in the future and wholeheartedly recommend his services to anyone needing website help.',
    metric: '5.0 Rating',
    projectType: 'Website Design'
  },
  {
    id: 'test-2',
    clientName: 'Shana Patrick',
    role: 'Founder & Strategist',
    company: 'Scale Without Chaos',
    avatar: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1786076001/f690bc_fd7d61d131e4424d9364d2502e8d1ca1_mv2_fl4ovs.jpg',
    rating: 5,
    quote: 'One word. AMAZING. Joshua completely took my vision with little additional context and truly delivered. He is my go-to person for website updates. His communication was excellent, he went above and beyond, and delivered outstanding results. Truly five-star talent. Thank you, Joshua!',
    metric: '5-Star Talent',
    projectType: 'Website Redesign'
  },
  {
    id: 'test-3',
    clientName: 'Teresa Roberts',
    role: 'Nutritional Therapist',
    company: 'Holistically Teresa',
    avatar: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1786076000/f-57_blcmze.jpg',
    rating: 5,
    quote: 'Joshua did an outstanding job on my nutritional therapy website. He was patient, kind, and professional throughout the entire project. The quality of his work exceeded my expectations. He was very accommodating with revisions and delivered a beautiful, functional website. I highly recommend him and would gladly work with him again.',
    metric: 'Exceeded Expectations',
    projectType: 'Wix Studio'
  },
  {
    id: 'test-4',
    clientName: 'Philip Talbot',
    role: 'Founder',
    company: 'EtaVisa Service',
    avatar: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1786076013/Screenshot_2026-08-07_050705_m2irqn.png',
    rating: 5,
    quote: "There are not enough superlatives to describe my work experience with Joshua. I knew I was in good hands from the very first moment. He's a gem of a find. All freelancers should take an example from Joshua and strive to give the same service. I'll definitely be back and look forward to working with him again.",
    metric: 'Gem of a Find',
    projectType: 'Web Development'
  }
];

export const TECH_SKILLS: TechSkill[] = [
  { name: 'Wix Studio', category: 'Platform', iconName: 'Layout', description: 'Advanced responsive layouts, sticky triggers, and custom CSS breakpoints.', level: 'Expert' },
  { name: 'WordPress', category: 'Platform', iconName: 'Globe', description: 'Custom theme builds, speed optimization, and headless WP architectures.', level: 'Expert' },
  { name: 'Squarespace', category: 'Platform', iconName: 'Box', description: 'Bespoke custom code injection, typography scaling, and fluid layouts.', level: 'Expert' },
  { name: 'Shopify', category: 'Platform', iconName: 'ShoppingBag', description: 'Custom Liquid themes, cart drawer hacks, and high-converting product pages.', level: 'Expert' },
  { name: 'Framer', category: 'Platform', iconName: 'Sparkles', description: 'Interactive motion websites with buttery smooth component interactions.', level: 'Expert' },
  { name: 'Figma', category: 'Design', iconName: 'Figma', description: 'Comprehensive design systems, token variables, auto-layout 5.0, and interactive prototypes.', level: 'Expert' },
  { name: 'Elementor', category: 'Platform', iconName: 'Maximize', description: 'High-speed custom Elementor Pro modules without bloat.', level: 'Expert' },
  { name: 'HTML5', category: 'Development', iconName: 'Code', description: 'Semantic markup, accessibility standards, and clean DOM structures.', level: 'Expert' },
  { name: 'Tailwind CSS', category: 'Development', iconName: 'Palette', description: 'Utility-first custom design systems, responsive grid mechanics, and dynamic dark mode.', level: 'Expert' },
  { name: 'JavaScript (ES6+)', category: 'Development', iconName: 'Cpu', description: 'Vanilla JS DOM manipulation, asynchronous APIs, event handling, and custom web components.', level: 'Expert' },
  { name: 'Velo JS', category: 'Development', iconName: 'Terminal', description: 'Custom backend logic, database collections, and third-party API webhooks on Wix.', level: 'Expert' },
  { name: 'SEO & Core Web Vitals', category: 'Optimization', iconName: 'TrendingUp', description: 'Schema structured data, speed optimization, technical site audits, and rank tracking.', level: 'Expert' },
  { name: 'AI Design Tools', category: 'Design', iconName: 'Bot', description: 'Utilizing AI for generative image assets, copy ideation, and rapid UX wireframing.', level: 'Expert' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What makes Juixcodeweb different from other web designers?',
    answer: 'We don’t just create attractive pages; we engineer conversion-focused web assets that solve specific business problems. Combining strategic copywriting, mathematical visual hierarchy, and sub-second load performance, every project is built to deliver measurable ROI.'
  },
  {
    category: 'Process',
    question: 'How long does a typical website project take?',
    answer: 'Standard landing page or portfolio builds typically take 2 to 3 weeks. Full multi-page business websites or eCommerce stores take between 3 to 6 weeks from strategy to deployment, depending on scope and feedback turnarounds.'
  },
  {
    category: 'Technical',
    question: 'Which platform will my website be built on?',
    answer: 'We select the platform that best fits your long-term operational goals. We build on Wix Studio, WordPress, Framer, Shopify, Squarespace, or custom React/Tailwind codebases depending on whether you prioritize ease of editing, custom motion, or eCommerce scale.'
  },
  {
    category: 'Collaboration',
    question: 'How do we handle communication across different time zones?',
    answer: 'Based in Nigeria, we seamlessly serve global clients across North America, Europe, the Middle East, and Asia. We utilize clear asynchronous communication tools (Loom video walk-throughs, Notion project portals) combined with flexible live alignment calls.'
  },
  {
    category: 'Post-Launch',
    question: 'Will I be able to update my website myself after launch?',
    answer: 'Yes, 100%. Upon deployment, we provide custom, step-by-step video tutorials showing your team how to edit text, swap images, publish new blog posts, or add products without needing a developer.'
  },
  {
    category: 'Pricing',
    question: 'What are your typical project investment levels?',
    answer: 'Custom landing pages begin around $1,500 – $2,500. Comprehensive multi-page business websites and eCommerce builds range from $3,500 to $8,000+. We provide fixed transparent quotes with no surprise charges.'
  }
];

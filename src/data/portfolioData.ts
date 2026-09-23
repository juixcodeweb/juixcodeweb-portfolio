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
    title: 'DroneaX — Drone Services Website',
    slug: 'droneax-drone-services',
    platform: 'Framer',
    industry: 'Drone Services & Aerial Media',
    category: 'Services',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png',
    tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790149045/1e5ed77b-088f-4ccb-a44f-abb47b225d5b_qpfyqk.png',
    desktopImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png',
    mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1789915881/Bianca_1_fgxtxm.png',
    shortDescription: 'Modern website for an aerial drone services business to showcase photography and videography, highlight completed projects, and generate inquiries.',
    year: '2025',
    client: 'DroneaX',
    featured: true,
    caseStudy: {
      overview: 'The client needed a modern website for their drone services business to showcase aerial photography and videography, highlight completed projects, and generate inquiries from both commercial and residential clients.',
      myRole: 'Lead UI/UX Designer & Web Developer',
      toolsUsed: ['Figma', 'Framer', 'Photoshop', 'AI'],
      clientGoal: "Create a professional digital presence that showcases DroneaX's aerial services and completed projects while making it easy for commercial and residential clients to understand the services and submit inquiries.",
      challenge: 'The main challenge was presenting a wide range of drone services and completed projects in a way that was visually engaging without making the website feel cluttered. The site also needed to clearly communicate the value of the services while making it easy for both commercial and residential clients to make an inquiry.',
      solution: 'Created a clean, visual-focused website structure that puts the drone work and services at the center of the experience. Organized the content into clear service and portfolio sections, added strong calls to action throughout the site, and optimized the layout for mobile devices to make the inquiry process simple and accessible.',
      workDelivered: [
        'Complete drone services website design',
        'Portfolio and project showcase sections',
        'Service pages for aerial photography and drone solutions',
        'Quote request and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly website structure',
        'Conversion-focused call-to-action sections'
      ],
      designProcess: [
        'Complete drone services website design',
        'Portfolio and project showcase sections',
        'Service pages for aerial photography and drone solutions',
        'Quote request and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly website structure',
        'Conversion-focused call-to-action sections'
      ],
      finalResult: 'A stunning, high-converting digital experience that clearly communicates DroneaX’s commercial and residential capabilities, driving an immediate increase in qualified quote requests.',
      technologiesUsed: ['Figma', 'Framer', 'Photoshop', 'AI'],
      desktopMockupImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png',
      tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790149045/1e5ed77b-088f-4ccb-a44f-abb47b225d5b_qpfyqk.png',
      mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1789915881/Bianca_1_fgxtxm.png',
      keyOutcomes: [
        { label: 'Inquiry Rate Lift', value: '+280%', subtext: 'Commercial & residential leads' },
        { label: 'Engagement Rate', value: '4.2m', subtext: 'Average video showcase watch time' },
        { label: 'Mobile Conversion', value: '+195%', subtext: 'Rapid quote form completions' }
      ],
      galleryScreenshots: [
        {
          title: 'Aerial Photography Portfolio',
          caption: 'Curated high-resolution aerial media showcase organized by commercial and residential sectors.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817027/25332540_website_showcase_mock_up_01-Recovered_thgbnq.png'
        }
      ],
      liveUrl: 'https://droneax.example.com',
      clientFeedback: {
        quote: 'DroneaX now looks like the premier aerial media firm in our market. Our inquiry volume surged within weeks of launch.',
        author: 'Marcus Bennett',
        role: 'Founder & Head of Operations, DroneaX'
      }
    }
  },
  {
    id: 'proj-2',
    title: 'BryvonHome — Home Services Website Design | eCommerce Website',
    slug: 'bryvonhome-ecommerce-services',
    platform: 'Shopify',
    industry: 'Home Services & eCommerce',
    category: 'eCommerce',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png',
    tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790149058/1e5ed77b-088f-4ccb-a44f-abb47b225d5bj_sske4l.png',
    desktopImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png',
    mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790041045/11631519_efagfw.png',
    shortDescription: 'A professional eCommerce-focused website presenting home products and services with trust-building content and seamless checkout.',
    year: '2025',
    client: 'BryvonHome',
    featured: true,
    caseStudy: {
      overview: 'BryvonHome needed a professional eCommerce-focused website that presents its home products and services clearly while making it easy for customers to explore offerings, understand the brand, and take the next step toward making an inquiry or purchase. The design combines clear product presentation, trust-building content, and a straightforward user experience.',
      myRole: 'E-Commerce UX Specialist & Developer',
      toolsUsed: ['Shopify', 'Figma', 'Canva'],
      clientGoal: "Create a professional online presence that showcases BryvonHome's products and services, builds trust with homeowners, and makes it easier for potential customers to discover products and submit inquiries online.",
      challenge: 'Balancing a diverse catalog of home services and eCommerce products in a single cohesive digital storefront, ensuring non-technical homeowners could easily browse specifications and request quotes without friction.',
      solution: 'Developed a streamlined Shopify structure with transparent service tiers, intuitive filtering, trust-building social proof badges, and one-click quote inquiry forms optimized for mobile shoppers.',
      workDelivered: [
        'Complete home services website design',
        'Service and product pages for multiple offerings',
        'Trust-building sections with testimonials and company information',
        'Lead generation and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly page structure',
        'Conversion-focused call-to-action sections'
      ],
      designProcess: [
        'Complete home services website design',
        'Service and product pages for multiple offerings',
        'Trust-building sections with testimonials and company information',
        'Lead generation and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly page structure',
        'Conversion-focused call-to-action sections'
      ],
      finalResult: 'An intuitive, credible eCommerce and services platform that empowers homeowners to discover solutions and request consultations with absolute confidence.',
      technologiesUsed: ['Shopify', 'Figma', 'Canva'],
      desktopMockupImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png',
      tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790149058/1e5ed77b-088f-4ccb-a44f-abb47b225d5bj_sske4l.png',
      mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790041045/11631519_efagfw.png',
      keyOutcomes: [
        { label: 'Inquiry Growth', value: '+215%', subtext: 'Homeowner consultation bookings' },
        { label: 'Mobile Orders', value: '+160%', subtext: 'Streamlined checkout pipeline' },
        { label: 'Client Trust Rating', value: '4.9/5', subtext: 'Verified customer sentiment' }
      ],
      galleryScreenshots: [
        {
          title: 'Home Solutions Product Catalog',
          caption: 'Clear product specifications and transparent service tier breakdowns.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785817010/Bryvonhome_ooxxmv.png'
        }
      ],
      liveUrl: 'https://bryvonhome.example.com',
      clientFeedback: {
        quote: 'Juixcodeweb created a stunning, highly functional digital storefront for BryvonHome. Our customers love the seamless booking and product discovery.',
        author: 'David Bryvon',
        role: 'Managing Director, BryvonHome'
      }
    }
  },
  {
    id: 'proj-3',
    title: 'Boos Irongate — Shipping Container Website Design | eCommerce Website',
    slug: 'boos-irongate-shipping-containers',
    platform: 'Wix',
    industry: 'Shipping Containers & Industrial eCommerce',
    category: 'eCommerce',
    image: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
    tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
    desktopImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
    mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790043055/Bianca_2_rkh37r.png',
    shortDescription: 'A professional website and product catalog presenting shipping container products and services clearly to generate qualified inquiries.',
    year: '2024',
    client: 'Boos Irongate',
    featured: true,
    caseStudy: {
      overview: 'Boos Irongate needed a professional website to present its shipping container products and services in a clear and organized way. The website was designed to make it easy for potential buyers to explore available solutions, understand the offerings, and submit inquiries.',
      myRole: 'E-Commerce UX Designer & Developer',
      toolsUsed: ['Figma', 'Wix', 'Canva', 'Photoshop'],
      clientGoal: 'Build a professional online presence that clearly showcases shipping container products and services, provides potential buyers with the information they need, and generates qualified inquiries through a simple and accessible website experience.',
      challenge: 'Presenting custom modified container configurations and heavy industrial specifications in a format that was digestible, transparent, and encouraging for both B2B logistics managers and private individuals looking for storage solutions.',
      solution: 'Architected an intuitive product catalog featuring detailed dimensions, custom modification options, clear tier comparisons, and prominent rapid quote request forms on every container page.',
      workDelivered: [
        'Full website design for a container business',
        'Product and service showcase pages',
        'Structured layout for easy navigation',
        'Inquiry and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly website structure',
        'Conversion-focused call-to-action sections'
      ],
      designProcess: [
        'Full website design for a container business',
        'Product and service showcase pages',
        'Structured layout for easy navigation',
        'Inquiry and contact form integration',
        'Mobile-responsive optimization',
        'SEO-friendly website structure',
        'Conversion-focused call-to-action sections'
      ],
      finalResult: 'A robust industrial eCommerce presence that demystifies container options and generates steady, high-intent purchase inquiries.',
      technologiesUsed: ['Figma', 'Wix', 'Canva', 'Photoshop'],
      desktopMockupImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
      tabletImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png',
      mobileImage: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1790043055/Bianca_2_rkh37r.png',
      keyOutcomes: [
        { label: 'Container Inquiries', value: '+340%', subtext: 'Direct commercial quote requests' },
        { label: 'Bounce Rate Drop', value: '-38%', subtext: 'Improved visual navigation' },
        { label: 'Catalog Browsing', value: '5.1 pgs', subtext: 'Average pages viewed per session' }
      ],
      galleryScreenshots: [
        {
          title: 'Container Inventory Showcase',
          caption: 'Visual container models categorized by standard, refrigerated, and custom modified units.',
          imageUrl: 'https://res.cloudinary.com/ndcin5ow/image/upload/v1785816960/Boos_IronGate_t7vvjv.png'
        }
      ],
      liveUrl: 'https://boosirongate.example.com',
      clientFeedback: {
        quote: 'The website completely transformed how buyers perceive Boos Irongate. Our sales reps receive better-qualified leads every single day.',
        author: 'Garrett Vance',
        role: 'Operations Lead, Boos Irongate'
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
  { name: 'UX & UI', category: 'Design', iconName: 'Figma', description: 'Research-backed wireframing, high-converting layouts, and intuitive user experiences.', level: 'Expert' },
  { name: 'Landing Page', category: 'Design', iconName: 'Sparkles', description: 'High-impact conversion pages designed specifically for campaigns and lead generation.', level: 'Expert' },
  { name: 'Ecommerce Website', category: 'Development', iconName: 'ShoppingBag', description: 'Bespoke storefronts optimized for mobile conversion and high average order value.', level: 'Expert' },
  { name: 'Technical SEO', category: 'Optimization', iconName: 'Search', description: 'Schema structured data, site architecture auditing, crawlability, and speed tuning.', level: 'Expert' },
  { name: 'Search Engine Optimization (SEO)', category: 'Optimization', iconName: 'TrendingUp', description: 'On-page meta strategy, keyword mapping, and organic search ranking growth.', level: 'Expert' },
  { name: 'Social Management', category: 'Design', iconName: 'Share2', description: 'Brand content alignment, visual asset curation, and cross-platform growth strategy.', level: 'Expert' },
  { name: 'Website Maintenance', category: 'Optimization', iconName: 'ShieldCheck', description: 'Proactive security monitoring, backups, speed checks, and ongoing UI updates.', level: 'Expert' },
  { name: 'Website Migration', category: 'Development', iconName: 'RefreshCw', description: 'Flawless platform migrations with zero downtime and guaranteed SEO score retention.', level: 'Expert' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What types of websites do you design and build?',
    answer: 'I design and build business websites, landing pages, eCommerce stores, UI/UX experiences, and website redesigns across platforms such as Wix Studio, Figma, WordPress, Shopify, Framer, Squarespace, and more.'
  },
  {
    category: 'Process',
    question: 'How long does a website project usually take?',
    answer: "Project timelines depend on the scope, number of pages, functionality, and content requirements. Once I understand your project, I'll provide a clear timeline before we begin."
  },
  {
    category: 'Services',
    question: 'Can you redesign or improve my existing website?',
    answer: 'Yes. I can redesign an existing website to improve its visual quality, user experience, mobile responsiveness, performance, SEO, and overall conversion potential.'
  },
  {
    category: 'Collaboration',
    question: 'Do you work with clients remotely?',
    answer: 'Yes. I work with clients worldwide and handle projects remotely through clear communication, scheduled calls, and organized project workflows.'
  },
  {
    category: 'Next Steps',
    question: 'What happens after I submit an inquiry?',
    answer: "I'll review your project details and get back to you within 12 hours. If the project is a good fit, we can schedule a discovery call to discuss your goals, requirements, and next steps."
  }
];

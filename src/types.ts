export type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export type Theme = 'light' | 'dark';

export type ProjectCategory = 
  | 'All' 
  | 'SaaS' 
  | 'Healthcare' 
  | 'Coaching' 
  | 'Restaurants' 
  | 'Real Estate' 
  | 'Fitness' 
  | 'AI' 
  | 'eCommerce' 
  | 'Personal Brands';

export interface CaseStudyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudy {
  overview: string;
  myRole: string;
  toolsUsed: string[];
  clientGoal: string;
  challenge: string;
  solution: string;
  designProcess: string[];
  finalResult: string;
  technologiesUsed: string[];
  keyOutcomes: CaseStudyMetric[];
  desktopMockupImage?: string;
  mobileTabletMockupImage?: string;
  galleryScreenshots: {
    title: string;
    caption: string;
    imageUrl: string;
  }[];
  liveUrl?: string;
  clientFeedback?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  platform: string; // e.g. 'Wix Studio', 'Figma', 'WordPress', 'Squarespace', 'Shopify', 'Framer'
  industry: string;
  category: ProjectCategory;
  image: string;
  shortDescription: string;
  year: string;
  client: string;
  featured?: boolean;
  caseStudy: CaseStudy;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  expectedOutcome: string;
  idealClient: string;
  deliverables: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metric: string;
  projectType: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface PartnerPrinciple {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TechSkill {
  name: string;
  category: 'Platform' | 'Design' | 'Development' | 'Optimization' | 'CMS';
  iconName: string;
  description: string;
  level: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

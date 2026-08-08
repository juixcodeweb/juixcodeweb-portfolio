import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  PROJECTS_DATA, 
  SERVICES_DATA, 
  WORKFLOW_STEPS, 
  WHY_CLIENTS_WORK_WITH_ME, 
  TESTIMONIALS_DATA 
} from '../data/portfolioData';
import { 
  ArrowUpRight, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Layout, 
  RefreshCw,
  Layers,
  Target,
  Briefcase,
  ShoppingBag,
  TrendingUp, 
  Award,
  UserCheck,
  MessageSquare,
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, openDiscoveryModal, openCaseStudy } = useNavigation();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);
  const coreExpertise = SERVICES_DATA.slice(0, 6); // Limited to 6 services as requested

  const renderServiceIcon = (id: string, title: string) => {
    if (id === 'srv-1' || title.toLowerCase().includes('website design')) return <Layout className="w-5 h-5 text-[#111827]" />;
    if (id === 'srv-2' || title.toLowerCase().includes('redesign')) return <RefreshCw className="w-5 h-5 text-[#111827]" />;
    if (id === 'srv-3' || title.toLowerCase().includes('ui/ux')) return <Layers className="w-5 h-5 text-[#111827]" />;
    if (id === 'srv-4' || title.toLowerCase().includes('landing')) return <Target className="w-5 h-5 text-[#111827]" />;
    if (id === 'srv-5' || title.toLowerCase().includes('business')) return <Briefcase className="w-5 h-5 text-[#111827]" />;
    if (id === 'srv-6' || title.toLowerCase().includes('ecommerce') || title.toLowerCase().includes('shop')) return <ShoppingBag className="w-5 h-5 text-[#111827]" />;
    return <Layout className="w-5 h-5 text-[#111827]" />;
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#111827]" />
                <span>Juixcodeweb • UI/UX & Web Developer</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              >
                Websites engineered to <span className="text-gradient">build trust</span> and convert visitors into clients.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl"
              >
                I design and build modern, high-performance websites for ambitious businesses. Minimal, elegant, and conversion-focused digital experiences that drive measurable revenue growth.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4"
              >
                <button
                  onClick={openDiscoveryModal}
                  id="hero-book-call-btn"
                  className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-base shadow-lg transition-all flex items-center justify-start sm:justify-center gap-3 active:scale-95"
                >
                  <PhoneCall className="w-5 h-5 text-[#111827]" />
                  <span>Book Discovery Call</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </button>

                <button
                  onClick={() => setCurrentPage('portfolio')}
                  id="hero-explore-portfolio-btn"
                  className="w-fit px-8 py-4 rounded-full bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-base border border-slate-300/60 dark:border-slate-700/60 transition-all flex items-center justify-start sm:justify-center gap-2 active:scale-95"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-[#111827] dark:text-[#F2ECE7]" />
                </button>
              </motion.div>

              {/* Key Trust Signals */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-500 dark:text-slate-400"
              >
                <div className="space-y-0.5">
                  <span className="text-slate-900 dark:text-white font-semibold text-lg block">100%</span>
                  <span>Custom Design</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-900 dark:text-white font-semibold text-lg block">99/100</span>
                  <span>Google Speed Score</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-900 dark:text-white font-semibold text-lg block">+240%</span>
                  <span>Avg Lead Increase</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Interactive Visual Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-950 p-3 sm:p-4 border border-slate-800 shadow-2xl overflow-hidden group">
                
                {/* Showcase Image */}
                <img 
                  src="https://res.cloudinary.com/ndcin5ow/image/upload/v1785981035/Bianca_6_bvbdd3.png" 
                  alt="Juixcodeweb Featured Showcase" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-2xl object-cover shadow-md transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Metric Badge 1 */}
                <div className="absolute top-6 right-6 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-xl animate-float space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+310% Demo Lift</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Verified Client Result</p>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute bottom-6 left-6 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-xl space-y-1 hidden sm:block">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>0.4s Ultra Fast</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Core Web Vitals Pass</p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
              Selected Portfolio Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
              A curated selection of high-converting web projects engineered for industry leaders.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-colors self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openCaseStudy(project)}
              className="glass-card rounded-3xl p-5 space-y-4 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Platform Used Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#F2ECE7] text-[#111827] text-[11px] font-semibold shadow-md">
                    {project.platform}
                  </div>
                </div>

                {/* Only Title & Short Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-[#7c6f64] dark:group-hover:text-[#F2ECE7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                <span className="text-[#111827] dark:text-[#F2ECE7] flex items-center gap-1 group-hover:underline">
                  Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-400">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE SECTION - LIMITED TO 6 SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Capabilities & Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Core Web Design Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            End-to-end design and technical capabilities tailored to drive conversions and scale business revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreExpertise.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F2ECE7] text-[#111827] flex items-center justify-center font-bold shrink-0">
                  {renderServiceIcon(service.id, service.title)}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                <span className="text-[11px] font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Button linking to full Services page */}
        <div className="text-center pt-2">
          <button
            onClick={() => setCurrentPage('services')}
            className="px-8 py-3.5 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Explore Full Services Page</span>
            <ArrowRight className="w-4 h-4 text-[#111827]" />
          </button>
        </div>
      </section>

      {/* WHY CLIENTS WORK WITH ME - 4 CARDS ONLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Client Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Why Clients Work With Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Direct, senior-level craftsmanship built on trust, transparency, and technical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CLIENTS_WORK_WITH_ME.map((item) => {
            const renderIcon = () => {
              switch (item.iconName) {
                case 'Award':
                  return <Award className="w-5 h-5 text-[#111827]" />;
                case 'UserCheck':
                  return <UserCheck className="w-5 h-5 text-[#111827]" />;
                case 'Zap':
                  return <Zap className="w-5 h-5 text-[#111827]" />;
                case 'MessageSquare':
                  return <MessageSquare className="w-5 h-5 text-[#111827]" />;
                default:
                  return <Award className="w-5 h-5 text-[#111827]" />;
              }
            };

            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#F2ECE7] flex items-center justify-center">
                      {renderIcon()}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STRUCTURED WORKFLOW TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Methodology & Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Structured 9-Step Design Workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            A transparent, repeatable roadmap that guarantees pixel-perfect quality and on-time launch.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeWorkflowStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`w-full text-left p-4 rounded-full border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F2ECE7] text-[#111827] border-[#F2ECE7] shadow-md font-semibold'
                      : 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${isSelected ? 'bg-[#111827] text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                      {step.stepNumber}
                    </span>
                    <div>
                      <span className="font-semibold text-sm block">{step.title}</span>
                      <span className={`text-xs ${isSelected ? 'text-slate-700' : 'text-slate-500 dark:text-slate-400'}`}>
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#111827]' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-semibold text-[#111827] dark:text-[#F2ECE7]">
                  Step {WORKFLOW_STEPS[activeWorkflowStep].stepNumber}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {WORKFLOW_STEPS[activeWorkflowStep].title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                Duration: {WORKFLOW_STEPS[activeWorkflowStep].duration}
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              {WORKFLOW_STEPS[activeWorkflowStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Key Step Deliverables:
              </h4>
              <div className="space-y-2">
                {WORKFLOW_STEPS[activeWorkflowStep].deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Next Step: {WORKFLOW_STEPS[(activeWorkflowStep + 1) % WORKFLOW_STEPS.length].title}</span>
              <button
                onClick={() => setActiveWorkflowStep((activeWorkflowStep + 1) % WORKFLOW_STEPS.length)}
                className="text-[#111827] dark:text-[#F2ECE7] font-semibold hover:underline"
              >
                Advance Step →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CLIENT REVIEWS TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Client Feedback & Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Real feedback and verified outcomes from executives and brand founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-8 space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-[#111827] dark:text-[#F2ECE7] opacity-80" />
                    <div className="flex gap-1 text-amber-300">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold">
                      {t.projectType}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                      {t.metric}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-base italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-slate-300 dark:border-slate-700"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{t.clientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} • <span className="text-[#111827] dark:text-[#F2ECE7] font-semibold">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { TECH_SKILLS } from '../data/portfolioData';
import { 
  Sparkles, 
  PhoneCall, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage, openDiscoveryModal } = useNavigation();

  const guidingPrinciples = [
    {
      title: 'Design With Purpose',
      description: 'Every layout, pixel, font size, and color decision is backed by mathematical logic and conversion strategy—never arbitrary aesthetic preference.'
    },
    {
      title: 'Simplicity Over Complexity',
      description: 'Clarity always wins. We remove visual clutter so your core message and call-to-action stand out unmistakably.'
    },
    {
      title: 'Strategy Before Visuals',
      description: 'Before drawing a single wireframe or choosing a color palette, we outline your business funnel and conversion goals.'
    },
    {
      title: 'User Experience First',
      description: 'We prioritize instant load speeds, fluid touch navigation on mobile, and intuitive layouts that delight human visitors.'
    }
  ]; // Limited strictly to 4 cards as requested

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ABOUT HERO / STORY */}
      <section className="pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Heading, Description & Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#111827]" />
                About Juixcodeweb
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
                Building digital experiences that people enjoy using and businesses benefit from.
              </h1>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                I'm Yinyegha Joshua, the founder of Juixcodeweb. What started as a passion for designing websites has grown into helping businesses create digital experiences that are thoughtful, user-focused, and built with purpose.
              </p>
              <p>
                Over the years, my work has expanded beyond websites to include UI/UX design, landing pages, and digital products. I enjoy simplifying complex ideas, understanding how people interact with digital experiences, and designing solutions that feel natural from the very first click.
              </p>
              <p>
                Whether I'm working in Figma, Wix Studio, WordPress, Shopify, Framer, or Squarespace, my approach remains the same: creating clean, strategic digital experiences that help businesses build trust, connect with their audience, and achieve meaningful results.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={openDiscoveryModal}
                className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm transition-all shadow-md flex items-center justify-start sm:justify-center gap-2.5 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#111827]" />
                <span>Schedule Strategic Consultation</span>
              </button>

              <button
                onClick={() => setCurrentPage('services')}
                className="w-fit px-8 py-4 rounded-full bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300/60 dark:border-slate-700/60 transition-all flex items-center justify-start sm:justify-center gap-2 active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#111827] dark:text-[#F2ECE7]" />
              </button>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-card p-3 border border-slate-200 dark:border-slate-800 shadow-xl">
              <img 
                src="https://res.cloudinary.com/ndcin5ow/image/upload/v1786085622/Juixcodeweb_1_rd1dj0.png"
                alt="Yinyegha Joshua - Juixcodeweb Founder" 
                className="w-full h-auto max-h-[480px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* GUIDING PRINCIPLES - 4 CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Philosophy & Mindset
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Guiding Principles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs max-w-xl">
            The 4 core values and decision frameworks that dictate every design asset and line of code I produce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guidingPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#111827] dark:text-[#F2ECE7]">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS & SKILL SETS - SIMPLE PILL-SHAPED TAGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Platform & Skillset Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs max-w-xl">
            Fluent across modern CMS platforms, custom frontend frameworks, and design engines.
          </p>
        </div>

        {/* Simple Pill-Shaped Tags Grid */}
        <div className="flex flex-wrap gap-3 pt-2">
          {TECH_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-xs hover:border-[#F2ECE7] transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


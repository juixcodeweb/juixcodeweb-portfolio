import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PROJECTS_DATA } from '../data/portfolioData';
import { 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  Layers, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';

export const PortfolioPage: React.FC = () => {
  const { openCaseStudy, openDiscoveryModal } = useNavigation();
  const [selectedTab, setSelectedTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    'All',
    'Website Design',
    'Website Redesign',
    'Wix Studio',
    'Landing Page',
    'E-commerce'
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    let matchesTab = true;
    if (selectedTab !== 'All') {
      if (selectedTab === 'Website Design') {
        matchesTab = project.title.toLowerCase().includes('website') || project.shortDescription.toLowerCase().includes('website') || project.category === 'Services';
      } else if (selectedTab === 'Website Redesign') {
        matchesTab = project.shortDescription.toLowerCase().includes('redesign') || project.title.toLowerCase().includes('redesign');
      } else if (selectedTab === 'Wix Studio') {
        matchesTab = project.platform === 'Wix Studio' || project.platform === 'Wix';
      } else if (selectedTab === 'Landing Page') {
        matchesTab = project.shortDescription.toLowerCase().includes('landing') || project.title.toLowerCase().includes('landing');
      } else if (selectedTab === 'E-commerce') {
        matchesTab = project.platform === 'Shopify' || project.category === 'eCommerce' || project.title.toLowerCase().includes('ecommerce');
      }
    }

    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const scrollToProjects = () => {
    const section = document.getElementById('projects-gallery-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* PORTFOLIO HERO WITH IMAGE ON RIGHT */}
      <section className="pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#111827]" />
              Curated Work Gallery
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Selected Works & <span className="text-gradient">Case Studies</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Explore conversion-engineered web designs across diverse platforms and industries. Every project represents an end-to-end strategic design process paired with verified business outcomes.
            </p>

            {/* Requested Two Buttons below Description */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openDiscoveryModal}
                className="px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#111827]" />
                <span>Book a Discovery Call</span>
              </button>

              <button
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-full bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#F2ECE7]" />
              </button>
            </div>
          </div>

          {/* Right Hero Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-3">
              <img
                src={PROJECTS_DATA[1]?.image || PROJECTS_DATA[0]?.image}
                alt="Portfolio Featured Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white space-y-1">
                <span className="text-xs font-semibold text-[#F2ECE7] uppercase tracking-wider">Featured Project</span>
                <p className="text-sm font-semibold">{PROJECTS_DATA[1]?.title || 'BryvonHome — Home Services Website Design | eCommerce Website'}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY SEARCH & FILTER TABS */}
      <section id="projects-gallery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isSelected = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#F2ECE7] text-[#111827] shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-[#F2ECE7]"
            />
          </div>

        </div>

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 space-y-4 glass-card rounded-3xl p-8">
            <Layers className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">No projects found matching filter</h3>
            <p className="text-xs text-slate-500">Try selecting a different filter tab or clearing your search term.</p>
            <button
              onClick={() => {
                setSelectedTab('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openCaseStudy(project)}
                className="glass-card rounded-3xl p-5 space-y-4 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Image */}
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

                  {/* Title & Short Description only */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-[#7c6f64] dark:group-hover:text-[#F2ECE7] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                  <span className="text-[#111827] dark:text-[#F2ECE7] flex items-center gap-1 group-hover:underline">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

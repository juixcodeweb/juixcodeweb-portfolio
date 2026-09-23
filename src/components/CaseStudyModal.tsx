import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  X, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Target,
  AlertCircle,
  CheckCircle,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CaseStudyModal: React.FC = () => {
  const { selectedProject, closeCaseStudy, openDiscoveryModal } = useNavigation();

  if (!selectedProject) return null;

  const { title, platform, image, caseStudy } = selectedProject;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/80 backdrop-blur-lg overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            {/* Top Display: Platform & Project Name */}
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="px-3 py-1 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold shrink-0">
                {platform}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white truncate">
                {title}
              </h3>
            </div>

            <button
              onClick={closeCaseStudy}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 ml-4"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
            
            {/* 1. Desktop Design Preview (Shown by default) */}
            <div className="space-y-3">
              <div className="relative w-full rounded-2xl bg-slate-950 p-2 sm:p-4 border border-slate-800 overflow-hidden shadow-2xl">
                <div className="px-4 py-2 bg-slate-800 rounded-t-xl border-b border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="ml-3 text-slate-400 font-mono text-[11px] truncate">
                    {title} — Desktop Interface Preview
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-b-xl max-h-[480px]">
                  <img
                    src={caseStudy.desktopMockupImage || selectedProject.desktopImage || image}
                    alt={`${title} Desktop Design`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Structured Sections Grid */}
            <div className="space-y-8">
              
              {/* 1. Project Overview */}
              <div className="glass-card rounded-2xl p-6 space-y-3 bg-slate-800/40 border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F2ECE7] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F2ECE7]" />
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              {/* 2. My Role & 3. Tools Used */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* My Role */}
                <div className="glass-card rounded-2xl p-6 space-y-3 bg-slate-800/40 border-slate-800">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F2ECE7] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#F2ECE7]" />
                    My Role
                  </h4>
                  <p className="text-base font-semibold text-white">
                    {caseStudy.myRole || 'Lead UI/UX Designer & Web Developer'}
                  </p>
                </div>

                {/* Tools Used */}
                <div className="glass-card rounded-2xl p-6 space-y-3 bg-slate-800/40 border-slate-800">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F2ECE7] flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#F2ECE7]" />
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(caseStudy.toolsUsed || [platform, 'Figma', 'React', 'Tailwind CSS']).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* 4. Client Goal */}
              <div className="glass-card rounded-2xl p-6 space-y-3 bg-slate-800/40 border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F2ECE7] flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#F2ECE7]" />
                  Client Goal
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {caseStudy.clientGoal || 'Elevate online positioning, streamline user navigation, and maximize lead conversion opportunities.'}
                </p>
              </div>

              {/* 5. Challenges & 6. Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Challenges */}
                <div className="glass-card rounded-2xl p-6 space-y-3 bg-red-950/20 border-red-900/40">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    Challenges
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="glass-card rounded-2xl p-6 space-y-3 bg-emerald-950/20 border-emerald-900/40">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

              </div>

              {/* 7. Work Delivered */}
              <div className="glass-card rounded-2xl p-6 space-y-4 bg-slate-800/40 border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F2ECE7] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#F2ECE7]" />
                  Work Delivered
                </h4>
                <div className="space-y-2">
                  {(caseStudy.workDelivered || caseStudy.designProcess).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Showcase Responsive Mockups: Desktop & Mobile/Tablet Combined */}
            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Responsive Design Showcase
                </h4>
                <p className="text-xs text-slate-400">
                  Seamless visual consistency engineered across Desktop, Tablet, and Mobile screens.
                </p>
              </div>

              {/* Responsive Presentation Showcase */}
              <div className="space-y-6">
                
                {/* Desktop Representation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Monitor className="w-4 h-4 text-[#F2ECE7]" />
                    <span>Desktop Interface View</span>
                  </div>
                  <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 overflow-hidden">
                    <img
                      src={caseStudy.desktopMockupImage || selectedProject.desktopImage || image}
                      alt={`${title} Desktop Responsive`}
                      referrerPolicy="no-referrer"
                      className="w-full h-64 sm:h-80 object-cover object-top rounded-xl"
                    />
                  </div>
                </div>

                {/* Mobile & Tablet Combined Presentation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Smartphone className="w-4 h-4 text-[#F2ECE7]" />
                    <Tablet className="w-4 h-4 text-[#F2ECE7]" />
                    <span>Mobile & Tablet Presentation Combined</span>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-6 sm:p-8 border border-slate-800 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Tablet Mockup Frame */}
                    <div className="sm:col-span-7 rounded-2xl border-4 border-slate-700 bg-slate-900 shadow-xl overflow-hidden">
                      <div className="px-3 py-1.5 bg-slate-800 text-[10px] text-slate-400 font-mono text-center border-b border-slate-700">
                        Tablet Viewport (768px)
                      </div>
                      <div className="bg-slate-950 flex items-center justify-center p-2">
                        <img
                          src={caseStudy.tabletImage || selectedProject.tabletImage || caseStudy.galleryScreenshots[0]?.imageUrl || image}
                          alt={`${title} Tablet View`}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Mobile Mockup Frame */}
                    <div className="sm:col-span-5 max-w-[280px] mx-auto sm:max-w-none w-full rounded-3xl border-4 border-slate-700 bg-slate-900 shadow-xl overflow-hidden">
                      <div className="px-3 py-1.5 bg-slate-800 text-[10px] text-slate-400 font-mono text-center border-b border-slate-700">
                        Mobile Viewport (390px)
                      </div>
                      <div className="bg-slate-950 flex items-center justify-center p-2">
                        <img
                          src={caseStudy.mobileImage || selectedProject.mobileImage || image}
                          alt={`${title} Mobile View`}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Discovery CTA Banner */}
            <div className="p-8 rounded-3xl bg-[#F2ECE7] text-[#111827] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold">Ready for a similar custom web solution?</h3>
                <p className="text-xs text-slate-700">Book a 30-minute discovery call to map out your website strategy.</p>
              </div>

              <button
                onClick={() => {
                  closeCaseStudy();
                  openDiscoveryModal();
                }}
                className="px-6 py-3 rounded-full bg-[#111827] text-white font-semibold text-xs hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-2 shadow-md"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

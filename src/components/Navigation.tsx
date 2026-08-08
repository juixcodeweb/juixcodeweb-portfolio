import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { Page } from '../types';
import { 
  Sun, 
  Moon, 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation: React.FC = () => {
  const { currentPage, setCurrentPage, openDiscoveryModal } = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-nav transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Availability Tag */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              id="brand-logo-button"
            >
              <img 
                src={theme === 'dark' ? "https://res.cloudinary.com/ndcin5ow/image/upload/v1785998518/Bianca_12_igs9vl.png" : "https://res.cloudinary.com/ndcin5ow/image/upload/v1785998518/Bianca_13_zkib6u.png"} 
                alt="Juixcodeweb Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              <div>
                <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white group-hover:text-[#F2ECE7] transition-colors">
                  Juixcodeweb
                </span>
                <div className="flex items-center text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">UI/UX & Web Developer</span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/60 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-300/40 dark:border-slate-700/40">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-[#111827]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#F2ECE7] rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Theme Toggle + Book Discovery Call */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-button"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all focus:outline-none"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-800" />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" />
              )}
            </button>

            {/* Book Discovery Call CTA */}
            <button
              onClick={openDiscoveryModal}
              id="book-discovery-call-nav-btn"
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F2ECE7] text-[#111827] text-sm font-semibold hover:bg-[#E3DAD3] transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#111827]" />
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              id="theme-toggle-button-mobile"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Overlay Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-30 bg-slate-900/95 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 p-6 sm:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-full text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#F2ECE7] text-[#111827] font-semibold'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 items-start">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDiscoveryModal();
                  }}
                  className="w-fit py-3 px-6 rounded-full bg-[#F2ECE7] text-[#111827] font-semibold text-sm flex items-center justify-start gap-2 shadow-lg active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#111827]" />
                  <span>Book Discovery Call</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

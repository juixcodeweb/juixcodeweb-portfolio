import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Page } from '../types';
import { 
  ArrowUpRight, 
  ArrowUp, 
  Globe, 
  Clock, 
  PhoneCall, 
  MessageCircle,
  Linkedin, 
  Github, 
  Dribbble, 
  Instagram,
  Mail,
  Send
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, openDiscoveryModal } = useNavigation();
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Lagos Nigeria timezone UTC+1
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeString(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="w-full bg-slate-900 text-slate-100 dark:bg-slate-950 dark:text-slate-200 border-t border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Big Impact Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE7]/10 border border-[#F2ECE7]/20 text-[#F2ECE7] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Available for New Projects
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
              Have a project in mind? <span className="text-slate-400 font-normal">Let’s build something extraordinary together.</span>
            </h3>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 items-start sm:items-center lg:items-end">
            <button
              onClick={openDiscoveryModal}
              id="footer-discovery-call-btn"
              className="w-fit sm:w-auto px-6 py-3.5 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-xs flex items-center justify-start sm:justify-center gap-2.5 shadow-lg transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#111827]" />
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            <a
              href="https://wa.link/7zoej3"
              target="_blank"
              rel="noreferrer"
              className="w-fit sm:w-auto px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-start sm:justify-center gap-2.5 border border-slate-700 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Middle Navigation & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-800 text-sm">
          
          {/* Brand Info & Location */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/ndcin5ow/image/upload/v1785998518/Bianca_12_igs9vl.png"
                alt="Juixcodeweb Logo" 
                className="h-11 w-auto object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-white">Juixcodeweb</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Award-winning Website Designer, UI/UX Specialist & Web Developer. Creating conversion-focused digital experiences for forward-thinking brands globally.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
                <Globe className="w-3.5 h-3.5 text-[#F2ECE7]" />
                <span>Available Worldwide for Remote Projects & Consultancy</span>
              </div>
              <a 
                href="mailto:juixcodeweb@gmail.com" 
                className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60 hover:border-slate-500 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>juixcodeweb@gmail.com</span>
              </a>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lagos WAT: {timeString || '12:00 PM'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-white uppercase tracking-wider text-xs">Pages</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-slate-400 hover:text-[#F2ECE7] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="space-y-3">
            <h4 className="font-medium text-white uppercase tracking-wider text-xs">Expertise</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>Website Design</li>
              <li>UI/UX Prototyping</li>
              <li>Conversion Redesign</li>
              <li>Shopify & eCommerce</li>
              <li>SEO & Core Web Vitals</li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="space-y-3">
            <h4 className="font-medium text-white uppercase tracking-wider text-xs">Connect</h4>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.behance.net/juixcodeweb" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="Behance">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5.306-1.936-5.306-5.26 0-3.323 2.158-5.36 5.106-5.36 2.907 0 4.882 1.841 4.882 4.908 0 .426-.053.865-.084 1.082h-7.391c.148 1.488 1.247 2.373 2.721 2.373 1.203 0 2.109-.526 2.511-1.353h2.287zm-4.787-5.247c-1.161 0-2.023.687-2.298 1.877h4.48c-.068-1.127-.85-1.877-2.182-1.877zm-10.939 8.247h-8v-16h7.731c2.41 0 4.269 1.077 4.269 3.42 0 1.547-.84 2.607-2.046 3.141 1.632.483 2.546 1.747 2.546 3.684 0 2.802-2.115 5.755-4.5 5.755zm-5.333-13.611v3.917h4.843c1.071 0 1.84-.527 1.84-1.95 0-1.32-.78-1.967-1.84-1.967h-4.843zm0 6.302v4.719h5.111c1.238 0 2.222-.647 2.222-2.33 0-1.748-.984-2.389-2.222-2.389h-5.111z"/>
                </svg>
              </a>
              <a href="https://dribbble.com/juixcodeweb" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="Dribbble">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="https://github.com/juixcodeweb" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/juixcodeweb/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.link/7zoej3" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
              <a href="https://t.me/juixcodeweb" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="Telegram">
                <Send className="w-4 h-4 text-sky-400" />
              </a>
              <a href="https://www.instagram.com/juixcodeweb/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-[#F2ECE7] text-slate-300 hover:text-[#111827] transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Juixcodeweb. All rights reserved. Crafted with precision for high conversion.</p>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

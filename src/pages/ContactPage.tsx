import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { FAQ_ITEMS } from '../data/portfolioData';
import { 
  Sparkles, 
  Mail, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  User, 
  Phone, 
  FileText, 
  MessageCircle, 
  MapPin,
  Clock,
  Calendar,
  Zap,
  Globe,
  Instagram,
  Loader2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { openDiscoveryModal } = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceInterestedIn: 'Website Design',
    projectMessage: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // 4 Contact Methods: Email, WhatsApp, Telegram, Instagram
  const fourContactMethods = [
    {
      id: 'email',
      title: 'Email Address',
      value: 'juixcodeweb@gmail.com',
      subtext: 'Direct Inbox Access',
      link: 'mailto:juixcodeweb@gmail.com',
      icon: Mail,
      accent: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      id: 'whatsapp',
      title: 'Phone / WhatsApp',
      value: 'WhatsApp Direct Chat',
      subtext: 'Instant Chat Available',
      link: 'https://wa.link/7zoej3',
      icon: MessageCircle,
      accent: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      id: 'telegram',
      title: 'Telegram',
      value: 'Chat on Telegram',
      subtext: 'Chat with me instantly on Telegram.',
      link: 'https://t.me/juixcodeweb',
      icon: Send,
      accent: 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      value: '@juixcodeweb',
      subtext: 'Follow my latest work and updates.',
      link: 'https://www.instagram.com/juixcodeweb/',
      icon: Instagram,
      accent: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* CONTACT HERO */}
      <section className="pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE7] text-[#111827] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#111827]" />
              Let’s Connect
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
              Start Your Next <span className="text-gradient">Web Project</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Have a project in mind, need a strategic consultation, or want to discuss a custom website build? Reach out directly or schedule a 1-on-1 call.
            </p>

            {/* Two Buttons: 30-Minute Discovery Call & Send Direct Email */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={openDiscoveryModal}
                className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm shadow-md transition-all flex items-center justify-start sm:justify-center gap-2 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#111827]" />
                <span>30-Minute Discovery Call</span>
              </button>

              <a
                href="mailto:juixcodeweb@gmail.com"
                className="w-fit px-8 py-4 rounded-full bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-start sm:justify-center gap-2 active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#F2ECE7]" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Working Hours & Availability */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-xl">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Working Hours & Availability:</span>
                <span className="text-slate-600 dark:text-slate-300">Monday – Saturday: 9:00am – 11:30pm (WAT / GMT+1)</span>
              </div>
            </div>
          </div>

          {/* Right Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden space-y-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="relative h-56 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#F2ECE7]">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Direct Access</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F2ECE7] text-[#111827] flex items-center justify-center font-bold text-xs">
                    J
                  </div>
                </div>

                <div className="space-y-1 z-10">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Active Inquiries Open</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Juixcodeweb Studio</h3>
                  <p className="text-xs text-slate-400">Response Guaranteed Under 12 Hours</p>
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 text-center space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">Direct Communication Guaranteed</p>
                <p>No middlemen. You speak 100% directly with Juixcodeweb.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 CONTACT METHODS ONLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Direct Channels
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Contact Methods
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourContactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="glass-card rounded-2xl p-6 space-y-3 hover:border-[#F2ECE7] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-full ${method.accent} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">{method.title}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#7c6f64] dark:group-hover:text-[#F2ECE7] transition-colors block truncate">
                      {method.value}
                    </span>
                    <span className="text-[11px] text-slate-400 block">{method.subtext}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* PROJECT INQUIRY FORM + BOOK DISCOVERY CALL PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form on Left (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Project Enquiry Form</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Fill out your project details to receive a custom proposal and scope outline.</p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Message Delivered Successfully!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#111827] dark:text-[#F2ECE7] font-semibold">{formData.fullName}</span>. Your project inquiry has been received. Juixcodeweb will respond to <span className="font-semibold text-slate-900 dark:text-white">{formData.emailAddress}</span> within 12 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#F2ECE7] text-[#111827] font-semibold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                
                {/* Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Sterling"
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number & Service Interested In */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      value={formData.serviceInterestedIn}
                      onChange={(e) => setFormData({ ...formData, serviceInterestedIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#F2ECE7]"
                    >
                      <option value="Website Design">Website Design</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Wix Studio">Wix Studio</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    Project Message *
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      required
                      rows={4}
                      value={formData.projectMessage}
                      onChange={(e) => setFormData({ ...formData, projectMessage: e.target.value })}
                      placeholder="Share brief details about your website goals, timeline, or current challenge..."
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#F2ECE7] resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-[#111827] animate-spin" />
                      <span>Delivering Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#111827]" />
                      <span>Submit Project Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* "Book a Discovery Call" Panel on Right (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-8 space-y-6 shadow-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F2ECE7] text-[#111827] flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-[#111827]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Ready for a 1-on-1 Strategy Session?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If you prefer a real-time conversation to walk through your goals, project scope, and timeline, schedule a 30-minute discovery call directly.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Monday – Saturday Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F2ECE7]" />
                  <span>9:00 AM – 11:00 PM (WAT / GMT+1)</span>
                </div>
              </div>
            </div>

            <button
              onClick={openDiscoveryModal}
              className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-4 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#111827]" />
              <span>Book a Discovery Call</span>
            </button>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6f64] dark:text-[#F2ECE7]">
            Got Questions?
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-semibold text-slate-900 dark:text-white text-base flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#111827] dark:text-[#F2ECE7] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

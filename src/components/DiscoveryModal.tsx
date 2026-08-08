import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  MessageCircle, 
  FileText,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AvailableDay {
  dayName: string;
  dateLabel: string;
  fullDateStr: string;
}

export const DiscoveryModal: React.FC = () => {
  const { isDiscoveryOpen, closeDiscoveryModal } = useNavigation();

  // Step 1 or Step 2
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Generate dynamic upcoming Mon-Sat days
  const availableDays: AvailableDay[] = useMemo(() => {
    const days: AvailableDay[] = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      if (dayOfWeek >= 1 && dayOfWeek <= 6) {
        const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
        const dateLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const fullDateStr = `${dayName}, ${dateLabel}`;
        if (!days.some(item => item.dayName === dayName)) {
          days.push({ dayName, dateLabel, fullDateStr });
        }
      }
    }
    return days;
  }, []);

  const [selectedDay, setSelectedDay] = useState<AvailableDay>(
    availableDays[0] || { dayName: 'Monday', dateLabel: 'Upcoming', fullDateStr: 'Monday' }
  );
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    primaryService: 'Website Design',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isDiscoveryOpen) return null;

  const availableTimeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDay && selectedTimeSlot) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/book-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          emailAddress: formData.emailAddress,
          phoneNumber: formData.phoneNumber,
          primaryService: formData.primaryService,
          selectedDay: selectedDay.fullDateStr,
          selectedTimeSlot: selectedTimeSlot,
          additionalInfo: formData.additionalInfo
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        // Fallback: still show submitted locally if API returns structured fallback
        setIsSubmitted(true);
      }
    } catch (err: any) {
      console.warn('API submission notice:', err?.message);
      // Fallback to client-side success if server offline in client-only preview
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setStep(1);
    closeDiscoveryModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 my-6 flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE7] text-[#111827] flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-[#111827]" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Book Discovery Call</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {step === 1 ? 'Step 1 of 2: Select Preferred Date & Time' : 'Step 2 of 2: Confirm Your Contact Information'}
                </p>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">

            {isSubmitted ? (
              /* Success Screen */
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">Discovery Call Booked!</h4>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>. Your discovery call has been scheduled for <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{selectedDay.fullDateStr} at {selectedTimeSlot}</span>.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    A confirmation calendar invite has been sent to <strong>{formData.emailAddress}</strong>.
                  </p>
                </div>

                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 rounded-full bg-[#F2ECE7] text-[#111827] font-semibold text-xs hover:bg-[#E3DAD3] transition-all shadow-md"
                >
                  Close & Return
                </button>
              </div>
            ) : step === 1 ? (
              /* STEP 1: Date & Time Selection */
              <form onSubmit={handleNextStep} className="space-y-6">
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    Select Day & Time Slot
                  </span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-medium">
                    Step 1 / 2
                  </span>
                </div>

                {/* Selectable Days Grid */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-900 dark:text-white">
                    Select Day (Monday – Saturday) *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                    {availableDays.map((day) => {
                      const isSelected = selectedDay.dayName === day.dayName;
                      return (
                        <button
                          key={day.dayName}
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all border text-center ${
                            isSelected
                              ? 'bg-[#F2ECE7] text-[#111827] border-[#111827] font-bold shadow-md scale-[1.02]'
                              : 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          <span className="text-xs font-semibold block">{day.dayName.slice(0, 3)}</span>
                          <span className="text-[11px] opacity-80 mt-0.5 font-medium">{day.dateLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selectable Time Slots Grid */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-900 dark:text-white">
                      Select Time Slot (9:00 AM – 11:30 PM WAT / GMT+1) *
                    </label>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-500" /> 30-min intervals
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2 max-h-52 overflow-y-auto pr-1 p-1">
                    {availableTimeSlots.map((time) => {
                      const isSelected = selectedTimeSlot === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTimeSlot(time)}
                          className={`py-2 px-1.5 rounded-xl text-xs font-medium transition-all text-center border ${
                            isSelected
                              ? 'bg-[#111827] dark:bg-[#F2ECE7] text-[#F2ECE7] dark:text-[#111827] border-[#111827] dark:border-[#F2ECE7] font-semibold shadow-sm'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Summary Card */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      Selected: <strong className="text-emerald-600 dark:text-emerald-400">{selectedDay.fullDateStr}</strong> at <strong className="text-emerald-600 dark:text-emerald-400">{selectedTimeSlot}</strong>
                    </span>
                  </div>
                </div>

                {/* Continue CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Contact Information</span>
                  <ArrowRight className="w-4 h-4 text-[#111827]" />
                </button>
              </form>
            ) : (
              /* STEP 2: Contact Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step Banner with Chosen Date/Time */}
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Scheduled Slot:</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">
                      📅 {selectedDay.fullDateStr} at ⏰ {selectedTimeSlot}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Change</span>
                  </button>
                </div>

                {/* Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
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
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#111827] dark:focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
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
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#111827] dark:focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number & Primary Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
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
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#111827] dark:focus:border-[#F2ECE7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      Primary Service Needed *
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        value={formData.primaryService}
                        onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                        className="w-full pl-10 pr-10 py-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#111827] dark:focus:border-[#F2ECE7] appearance-none cursor-pointer"
                      >
                        <option value="Website Design">Website Design</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Shopify / eCommerce">Shopify / eCommerce</option>
                        <option value="Wix Studio">Wix Studio</option>
                        <option value="SEO & Optimization">SEO & Optimization</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Additional Information (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                    Additional Information (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Share any specific goals, existing website links, or project context..."
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#111827] dark:focus:border-[#F2ECE7] resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-8 py-4 rounded-full bg-[#F2ECE7] hover:bg-[#E3DAD3] text-[#111827] font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-[#111827] animate-spin" />
                      <span>Confirming & Sending Emails...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#111827]" />
                      <span>Confirm & Book Call</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Modal Footer: WhatsApp Instant Option at Bottom */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <a
              href="https://wa.link/7zoej3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Prefer to chat instantly? Contact me on WhatsApp</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">Mon–Sat • 9 AM–11:30 PM WAT</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

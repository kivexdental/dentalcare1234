import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is dental treatment here really pain-free?",
      a: "Yes. We utilize computer-guided micro-anesthesia (The Wand), topical numbing gels, and optional nitrous oxide sedation. Most patients report feeling little to no discomfort, even during root canal or implant procedures."
    },
    {
      q: "How does 3D digital bite alignment analysis work?",
      a: "Using ultra-high-definition intraoral 3D scanners, we create an exact digital twin of your bite and jaw dynamics in minutes without messy putty impressions. Our AI software then maps millimeter-precise tooth movement trajectories."
    },
    {
      q: "What safety and sterilization protocols do you follow?",
      a: "We adhere strictly to hospital-grade surgical sterilization standards. Every reusable instrument undergoes ultrasonic bath cleaning followed by multi-cycle Class-B autoclaving, and operatories are sterilized with medical HEPA filtration and UV-C air scrubbers."
    },
    {
      q: "Do you accept dental insurance or offer payment plans?",
      a: "We accept all major PPO insurance plans and handle direct billing on your behalf. For uninsured treatments or aesthetic smile design, we offer 0% interest flexible financing plans through CareCredit and Sunbit."
    },
    {
      q: "How fast can I get an appointment for an emergency?",
      a: "We reserve dedicated same-day emergency slots every morning and afternoon. If you are experiencing severe toothache, a broken crown, or dental trauma, call our emergency hotline directly for immediate priority care."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted block mb-2">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101828] tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-brand-500">Questions</span>
          </h2>
          <p className="text-base text-slate-body max-w-lg mx-auto">
            Everything you need to know about our modern clinical methods, appointments, and comfort guarantees.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-soft-card overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span className="font-bold text-base sm:text-lg text-[#101828]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-body leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutScene({ onLearnMoreClick }) {
  const alignmentBenefits = [
    {
      title: 'Better Chewing',
      sub: 'Function',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 10h6" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Reduces',
      sub: 'Jaw Strain',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeLinecap="round"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Improves Facial',
      sub: 'Aesthetics',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeLinecap="round"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round"/>
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-16 lg:pt-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 min-h-[70vh]">
        {/* Left Column: Heading & Learn More */}
        <div className="about-text-col lg:col-span-5 flex flex-col items-start justify-center z-10">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted">
              About Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-extrabold text-[#101828] tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Correct<br />
            Bite <span className="text-brand-500">Alignment</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-body max-w-sm font-normal leading-relaxed mb-4 sm:mb-8">
            Proper bite alignment improves chewing, speech and overall oral health.
          </p>

          <button
            onClick={onLearnMoreClick}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-brand-500 border border-slate-200 font-semibold text-xs sm:text-base hover:bg-brand-50 hover:border-brand-200 shadow-sm transition-all duration-200"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Center Space for Dental Model Canvas */}
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Right Column: 3 Vertical Feature Cards */}
        <div className="about-cards-col lg:col-span-4 flex flex-col gap-2.5 sm:gap-3.5 z-10">
          {alignmentBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-slate-200 shadow-soft-card flex items-center gap-3.5 hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#101828]">{item.title}</div>
                <div className="text-[11px] sm:text-xs text-slate-muted font-medium">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

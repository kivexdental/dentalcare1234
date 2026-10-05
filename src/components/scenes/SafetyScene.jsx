import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SafetyScene({ onTechClick }) {
  const safetyCards = [
    {
      title: 'Sterilized Instruments',
      desc: 'Highest hygiene standards for your safety.',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Pain-Free Treatment',
      desc: 'Modern tools for a comfortable experience.',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M6 3h12l4 6-10 13L2 9z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 3 8 9l4 13 4-13-3-6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9h20" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Imaging',
      desc: 'Accurate diagnosis with advanced technology.',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Dentists',
      desc: 'Skilled and experienced professionals.',
      icon: (
        <svg className="w-5 h-5 text-brand-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-16 lg:pt-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 min-h-[70vh]">
        {/* Left Column (Reserved for dental model canvas) */}
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Center-Left Column: Headline & Technology CTA */}
        <div className="safety-text-col lg:col-span-4 flex flex-col items-start justify-center z-10">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted">
              Safety & Technology
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101828] tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Your Safety<br />
            <span className="text-brand-500">Our Priority</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-body max-w-sm font-normal leading-relaxed mb-4 sm:mb-8">
            We use advanced technology and strict hygiene protocols to ensure a safe and comfortable experience.
          </p>

          <button
            onClick={onTechClick}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-brand-500 border border-slate-200 font-semibold text-xs sm:text-base hover:bg-brand-50 hover:border-brand-200 shadow-sm transition-all duration-200"
          >
            <span>Learn About Our Technology</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: 2x2 Light Feature Cards */}
        <div className="safety-cards-col lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 z-10">
          {safetyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-soft-card hover:shadow-md hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-[#101828] mb-0.5 sm:mb-1">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

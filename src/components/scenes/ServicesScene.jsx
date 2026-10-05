import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ServicesScene({ onSelectService }) {
  const serviceCards = [
    {
      id: 'general',
      title: 'General Dentistry',
      desc: 'Routine checkups, cleaning and preventive care.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white" viewBox="0 0 24 24">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .5 1.5 1.5 4 3.5 4s3-2.5 3.5-4c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      desc: 'Restore your smile with long-lasting solutions.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white" viewBox="0 0 24 24">
          <path d="M12 2v20M8 6h8M9 10h6M10 14h4M11 18h2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      desc: 'Straighten your teeth with modern alignment treatments.',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6v12M12 6v12M16 6v12M3 12h18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      desc: 'Enhance your smile with advanced aesthetic treatments.',
      icon: <Sparkles className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-16 lg:pt-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 min-h-[70vh]">
        {/* Left Column: Heading & Description + Personalized Care Floating Badge */}
        <div className="services-text-col lg:col-span-5 flex flex-col items-start justify-center z-10">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-[#101828] tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Complete Dental Care<br />
            Under One Roof
          </h2>

          <p className="text-xs sm:text-base text-slate-body max-w-sm font-normal leading-relaxed mb-4 sm:mb-8">
            From preventive care to advanced treatments, we offer comprehensive dental services for all ages.
          </p>

          {/* Floating badge for closed model */}
          <div className="services-floating-badge mb-4 sm:mt-10 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl border border-slate-200 shadow-soft-card flex items-center gap-3 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .5 1.5 1.5 4 3.5 4s3-2.5 3.5-4c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#101828]">Personalized Care</div>
              <div className="text-[10px] sm:text-xs text-slate-muted font-medium">for Every Smile</div>
            </div>
          </div>
        </div>

        {/* Space for Dental Model Canvas (left-center) */}
        <div className="hidden lg:block lg:col-span-1"></div>

        {/* Right Column: 2x2 Dark Cards */}
        <div className="services-grid-col lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4.5 z-10">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectService && onSelectService(card)}
              className="group relative bg-[#161C24] hover:bg-[#1C242E] rounded-2xl p-4 sm:p-6 border border-white/[0.08] shadow-dark-glow cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors">
                  {card.icon}
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-slate-400 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-200 transition-colors">
                {card.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroScene({ onBookClick, onExploreClick }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-16 lg:pt-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 min-h-[70vh]">
        {/* Left Column: Text & Stats */}
        <div className="hero-text-col lg:col-span-6 flex flex-col items-start justify-center z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted">
              Advanced Dental Care
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-[#101828] tracking-tight leading-[1.08] mb-3 sm:mb-5">
            A Healthier<br />
            Brighter Smile<br />
            <span className="text-brand-500">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-lg text-slate-body max-w-md font-normal leading-relaxed mb-6 sm:mb-8">
            Expert dental care with modern technology for you and your family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-12">
            <button
              onClick={onBookClick}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-500 text-white font-semibold text-xs sm:text-base shadow-sm hover:bg-brand-600 active:scale-95 transition-all duration-200"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-slate-heading border border-slate-200 font-semibold text-xs sm:text-base hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-200 shadow-sm"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-10 pt-4 sm:pt-6 border-t border-slate-100 w-full max-w-lg">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">10K+</div>
              <div className="text-[11px] sm:text-sm font-medium text-slate-muted mt-0.5 sm:mt-1">Happy Patients</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">15+</div>
              <div className="text-[11px] sm:text-sm font-medium text-slate-muted mt-0.5 sm:mt-1">Years Experience</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
                <span>4.9</span>
                <Star className="w-4 h-4 sm:w-5 h-5 fill-amber-400 text-amber-400 inline -mt-0.5" />
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-slate-muted mt-0.5 sm:mt-1">Patient Rating</div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Badge (Dental model rendered underneath by master canvas) */}
        <div className="lg:col-span-6 relative flex items-center justify-end h-full">
          <div className="hero-floating-badge absolute right-2 sm:right-6 bottom-2 sm:bottom-16 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl border border-slate-200 shadow-soft-card flex items-center gap-3 pointer-events-auto hover:shadow-md transition-shadow">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .5 1.5 1.5 4 3.5 4s3-2.5 3.5-4c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#101828]">Precision Treatment</div>
              <div className="text-[10px] sm:text-xs text-slate-muted font-medium">Modern Tools • Better Results</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function ReviewsScene({ onAllReviewsClick }) {
  const reviews = [
    {
      id: 1,
      quote: "Excellent service and very friendly staff. Highly recommended!",
      author: "Rohan Mehta",
      rating: 5
    },
    {
      id: 2,
      quote: "Professional, clean and painless treatment. Great experience!",
      author: "Priya Shah",
      rating: 5
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-16 lg:pt-0 pointer-events-auto">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 min-h-[70vh]">
        {/* Left Column: Heading, Copy, Button */}
        <div className="reviews-text-col lg:col-span-5 flex flex-col items-start justify-center z-10">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted">
              Patient Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-extrabold text-[#101828] tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Real Smiles.<br />
            <span className="text-brand-500">Real Stories.</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-body max-w-sm font-normal leading-relaxed mb-4 sm:mb-8">
            Our patients trust us for quality care, comfort and long-lasting results.
          </p>

          <button
            onClick={onAllReviewsClick}
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-brand-500 text-white font-semibold text-xs sm:text-base shadow-sm hover:bg-brand-600 active:scale-95 transition-all duration-200"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Center Space for Dental Model Canvas */}
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Right Column: Google Review Cards */}
        <div className="reviews-cards-col lg:col-span-4 flex flex-col gap-3 sm:gap-4 z-10">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-soft-card hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-snug font-normal mb-2">
                "{rev.quote}"
              </p>

              <div className="text-[11px] sm:text-xs font-bold text-[#101828]">
                {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

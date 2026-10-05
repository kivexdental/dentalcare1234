import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CtaBanner({ onBookClick, onContactClick }) {
  return (
    <section className="relative w-full py-16 px-6 sm:px-12 lg:px-20 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B63E5] via-[#0954C4] to-[#07429D] px-8 sm:px-14 py-12 sm:py-16 shadow-xl border border-blue-400/20">
          {/* Subtle Watermark 3D Tooth Illustration */}
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none select-none">
            <svg
              className="w-72 h-72 text-white fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .5 1.5 1.5 4 3.5 4s3-2.5 3.5-4c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-blue-200 mb-2">
                Book Your Appointment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready for a Healthier Smile?
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 font-normal max-w-xl leading-relaxed">
                Schedule your consultation today and take the first step towards better oral health.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <button
                onClick={onBookClick}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-brand-600 font-bold text-base shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-200"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-white hover:text-blue-100 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

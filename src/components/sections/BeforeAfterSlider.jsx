import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      // ignore
    }
  };

  const handleKeyDown = (e) => {
    let next = sliderPosition;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      next = Math.max(0, sliderPosition - 5);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      next = Math.min(100, sliderPosition + 5);
      e.preventDefault();
    } else if (e.key === 'Home') {
      next = 0;
      e.preventDefault();
    } else if (e.key === 'End') {
      next = 100;
      e.preventDefault();
    } else if (e.key === 'PageDown') {
      next = Math.max(0, sliderPosition - 15);
      e.preventDefault();
    } else if (e.key === 'PageUp') {
      next = Math.min(100, sliderPosition + 15);
      e.preventDefault();
    }
    setSliderPosition(next);
  };

  return (
    <section id="technology" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted block mb-2">
            Clinical Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101828] tracking-tight leading-tight mb-4">
            See the Difference of <span className="text-brand-500">Precision Care</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-body">
            Drag the slider or use keyboard arrow keys to compare pre-treatment bite alignment with our computerized restorative results.
          </p>
        </div>

        {/* Interactive Comparison Container with WCAG Slider Semantics */}
        <div
          ref={containerRef}
          role="slider"
          tabIndex={0}
          aria-label="Before and after dental treatment comparison slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={`${Math.round(sliderPosition)} percent after treatment view`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="relative max-w-4xl mx-auto h-[340px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden shadow-soft-card border border-slate-200 select-none cursor-ew-resize bg-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30 touch-none"
        >
          {/* Before Layer (Base) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <img
              src="/sequence/frame_080.webp"
              alt="Before Treatment Alignment"
              className="w-full h-full object-cover filter contrast-125 sepia-[0.15]"
              loading="lazy"
            />
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              Before Treatment
            </div>
          </div>

          {/* After Layer (Clipped via responsive clip-path, perfectly aligning at any screen width) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none transition-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <img
              src="/sequence/frame_109.webp"
              alt="After Treatment Perfect Smile Alignment"
              className="w-full h-full object-cover filter brightness-105"
              loading="lazy"
            />
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-brand-500/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Perfect Alignment</span>
            </div>
          </div>

          {/* Divider Handle Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 -ml-0.5 rounded-full bg-white shadow-xl border-2 border-brand-500 flex items-center justify-center text-brand-600 transition-transform active:scale-95">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-4 max-w-4xl mx-auto text-xs text-slate-muted font-medium">
          <div className="flex items-center gap-4">
            <span>← Drag or use Left/Right keys to adjust</span>
            <span>•</span>
            <span>Position: {Math.round(sliderPosition)}%</span>
          </div>
          <span className="text-[11px] text-slate-400">
            *Clinical demonstration model. Actual clinical results vary per patient.
          </span>
        </div>
      </div>
    </section>
  );
}

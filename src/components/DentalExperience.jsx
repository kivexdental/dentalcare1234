import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import DentalModelCanvas from './DentalModelCanvas';
import HeroScene from './scenes/HeroScene';
import ServicesScene from './scenes/ServicesScene';
import AboutScene from './scenes/AboutScene';
import ReviewsScene from './scenes/ReviewsScene';
import SafetyScene from './scenes/SafetyScene';

gsap.registerPlugin(ScrollTrigger);

export default function DentalExperience({ onBookClick, onSelectService }) {
  const containerRef = useRef(null);
  const modelWrapperRef = useRef(null);
  const modelGlowRef = useRef(null);
  
  // Scene container refs
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const reviewsRef = useRef(null);
  const safetyRef = useRef(null);

  // Current frame index for DentalModelCanvas (0 to 149)
  const [currentFrame, setCurrentFrame] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Setup initial visibilities
    gsap.set(heroRef.current, { opacity: 1, y: 0, pointerEvents: 'auto', display: 'flex' });
    gsap.set([servicesRef.current, aboutRef.current, reviewsRef.current, safetyRef.current], {
      opacity: 0,
      y: 40,
      pointerEvents: 'none',
      display: 'none'
    });

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Exact spatial coordinates matching the Figma master reference
      const modelCoords = isDesktop ? {
        hero: { xPercent: 16, yPercent: 0, scale: 1.05, rotation: 0 },
        services: { xPercent: -28, yPercent: 4, scale: 0.96, rotation: 0 },
        about: { xPercent: 6, yPercent: -2, scale: 1.10, rotation: 0 },
        reviews: { xPercent: 0, yPercent: 2, scale: 1.02, rotation: 0 },
        safety: { xPercent: -32, yPercent: 0, scale: 1.15, rotation: 0 },
      } : {
        hero: { xPercent: 0, yPercent: 16, scale: 0.85, rotation: 0 },
        services: { xPercent: 0, yPercent: -20, scale: 0.72, rotation: 0 },
        about: { xPercent: 0, yPercent: -18, scale: 0.78, rotation: 0 },
        reviews: { xPercent: 0, yPercent: -20, scale: 0.75, rotation: 0 },
        safety: { xPercent: 0, yPercent: -22, scale: 0.78, rotation: 0 },
      };

      // Set initial model placement
      gsap.set(modelWrapperRef.current, modelCoords.hero);

      // Frame controller object for canvas
      const frameTracker = { frame: 0 };

      // Master ScrollTrigger timeline pinned for 1100% scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1100%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Synchronize frame scrubbing smoothly across total duration 150
      tl.to(frameTracker, {
        frame: 149,
        ease: "none",
        duration: 150,
        onUpdate: () => {
          setCurrentFrame(frameTracker.frame);
        }
      }, 0);

      // ==========================================
      // TIMELINE SEGMENTS & HOLDS
      // FRAME 1 (Hero): 0 -> 14 [Hold]
      // 1 -> 56 Transition: 14 -> 36
      // FRAME 56 (Services): 36 -> 52 [Hold]
      // 56 -> 80 Transition: 52 -> 74
      // FRAME 80 (About): 74 -> 90 [Hold]
      // 80 -> 109 Transition: 90 -> 112
      // FRAME 109 (Reviews): 112 -> 126 [Hold]
      // 109 -> 150 Transition: 126 -> 142
      // FRAME 150 (Safety): 142 -> 150 [Hold]
      // ==========================================

      // --- TRANSITION 1: HERO -> SERVICES (t = 14 -> 36) ---
      tl.to(heroRef.current, {
        opacity: 0,
        y: -35,
        duration: 14,
        ease: "power2.inOut",
        onComplete: () => {
          if (heroRef.current) heroRef.current.style.pointerEvents = 'none';
        },
        onReverseComplete: () => {
          if (heroRef.current) {
            heroRef.current.style.pointerEvents = 'auto';
            heroRef.current.style.display = 'flex';
          }
        }
      }, 14);

      tl.to(modelWrapperRef.current, {
        ...modelCoords.services,
        duration: 22,
        ease: "power2.inOut"
      }, 14);

      tl.set(servicesRef.current, { display: 'flex' }, 20);
      tl.fromTo(servicesRef.current, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 16, 
          ease: "power2.out",
          onStart: () => {
            if (servicesRef.current) servicesRef.current.style.pointerEvents = 'auto';
          }
        }, 
        20
      );

      // --- TRANSITION 2: SERVICES -> ABOUT (t = 52 -> 74) ---
      tl.to(servicesRef.current, {
        opacity: 0,
        y: -35,
        duration: 14,
        ease: "power2.inOut",
        onComplete: () => {
          if (servicesRef.current) servicesRef.current.style.pointerEvents = 'none';
        },
        onReverseComplete: () => {
          if (servicesRef.current) servicesRef.current.style.pointerEvents = 'auto';
        }
      }, 52);

      tl.to(modelWrapperRef.current, {
        ...modelCoords.about,
        duration: 22,
        ease: "power2.inOut"
      }, 52);

      tl.set(aboutRef.current, { display: 'flex' }, 58);
      tl.fromTo(aboutRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 16,
          ease: "power2.out",
          onStart: () => {
            if (aboutRef.current) aboutRef.current.style.pointerEvents = 'auto';
          }
        },
        58
      );

      // --- TRANSITION 3: ABOUT -> REVIEWS (t = 90 -> 112) ---
      tl.to(aboutRef.current, {
        opacity: 0,
        y: -35,
        duration: 14,
        ease: "power2.inOut",
        onComplete: () => {
          if (aboutRef.current) aboutRef.current.style.pointerEvents = 'none';
        },
        onReverseComplete: () => {
          if (aboutRef.current) aboutRef.current.style.pointerEvents = 'auto';
        }
      }, 90);

      tl.to(modelWrapperRef.current, {
        ...modelCoords.reviews,
        duration: 22,
        ease: "power2.inOut"
      }, 90);

      tl.set(reviewsRef.current, { display: 'flex' }, 96);
      tl.fromTo(reviewsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 16,
          ease: "power2.out",
          onStart: () => {
            if (reviewsRef.current) reviewsRef.current.style.pointerEvents = 'auto';
          }
        },
        96
      );

      // --- TRANSITION 4: REVIEWS -> SAFETY & TECH (t = 126 -> 144) ---
      tl.to(reviewsRef.current, {
        opacity: 0,
        y: -35,
        duration: 12,
        ease: "power2.inOut",
        onComplete: () => {
          if (reviewsRef.current) reviewsRef.current.style.pointerEvents = 'none';
        },
        onReverseComplete: () => {
          if (reviewsRef.current) reviewsRef.current.style.pointerEvents = 'auto';
        }
      }, 126);

      tl.to(modelWrapperRef.current, {
        ...modelCoords.safety,
        duration: 18,
        ease: "power2.inOut"
      }, 126);

      tl.set(safetyRef.current, { display: 'flex' }, 130);
      tl.fromTo(safetyRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 14,
          ease: "power2.out",
          onStart: () => {
            if (safetyRef.current) safetyRef.current.style.pointerEvents = 'auto';
          }
        },
        130
      );
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="dental-scroll-experience relative w-full h-screen overflow-hidden bg-[#FAFBFD] select-none"
    >
      {/* Dental Model Container with Soft Seamless Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          ref={modelWrapperRef}
          className="dental-model-wrapper relative w-[480px] sm:w-[680px] lg:w-[860px] max-w-full flex items-center justify-center will-change-transform"
        >
          {/* Ethereal Halo behind the Model (Figma exact match) */}
          <div
            ref={modelGlowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(circle, #FFFFFF 62%, rgba(224, 239, 255, 0.6) 82%, #FAFBFD 100%)',
              filter: 'blur(20px)'
            }}
          />

          <DentalModelCanvas frameIndex={currentFrame} />
        </div>
      </div>

      {/* Layer 1: Hero Scene (Frame 1) */}
      <div
        ref={heroRef}
        className="scene-layer absolute inset-0 w-full h-full flex items-center z-10"
      >
        <HeroScene
          onBookClick={onBookClick}
          onExploreClick={() => {
            const el = document.getElementById('services-preview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* Layer 2: Services Scene (Frame 56) */}
      <div
        ref={servicesRef}
        className="scene-layer absolute inset-0 w-full h-full flex items-center z-10"
      >
        <ServicesScene onSelectService={onSelectService} />
      </div>

      {/* Layer 3: About Scene (Frame 80) */}
      <div
        ref={aboutRef}
        className="scene-layer absolute inset-0 w-full h-full flex items-center z-10"
      >
        <AboutScene onLearnMoreClick={() => {
          const el = document.getElementById('technology');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </div>

      {/* Layer 4: Reviews Scene (Frame 109) */}
      <div
        ref={reviewsRef}
        className="scene-layer absolute inset-0 w-full h-full flex items-center z-10"
      >
        <ReviewsScene onAllReviewsClick={() => {
          const el = document.getElementById('all-reviews');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </div>

      {/* Layer 5: Safety & Technology Scene (Frame 150) */}
      <div
        ref={safetyRef}
        className="scene-layer absolute inset-0 w-full h-full flex items-center z-10"
      >
        <SafetyScene onTechClick={() => {
          const el = document.getElementById('technology');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20 opacity-70">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-muted">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

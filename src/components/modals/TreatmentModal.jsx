import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function TreatmentModal({ service, isOpen, onClose, onBookTreatment }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const treatmentDetails = {
    general: {
      tag: "Preventive Care",
      heading: "Comprehensive General Dentistry & Hygiene",
      desc: "Our preventive appointments utilize ultrasonic biofilm removal, digital cavity transillumination, and mineralized fluoride varnishes to halt enamel decay before it begins.",
      duration: "45 - 60 mins",
      tech: "Ultrasonic Scalers & Digital X-Ray",
      highlights: [
        "Gentle ultrasonic calculus & tartar scaling",
        "High-definition intraoral camera diagnostics",
        "Air-flow stain polishing (painless & abrasive-free)",
        "Comprehensive oral cancer screening"
      ]
    },
    implants: {
      tag: "Permanent Restoration",
      heading: "Surgical Titanium & Zirconia Dental Implants",
      desc: "Restore missing teeth with computer-guided surgical precision. Our titanium and monolithic zirconia implants fuse seamlessly with the jawbone for a permanent, natural smile.",
      duration: "1 - 2 Visits (Guided Surgery)",
      tech: "3D CBCT Guided Surgery & Custom Abutments",
      highlights: [
        "3D Cone Beam CT millimeter navigation",
        "Immediate temporary load available (Same-day teeth)",
        "Lifetime structural implant warranty",
        "Virtually painless with local sedation"
      ]
    },
    orthodontics: {
      tag: "Alignment & Bite Health",
      heading: "Digital Orthodontics & Clear Aligners",
      desc: "Correct malocclusions, deep bites, crossbites, and crowding with discreet clear aligners or low-friction ceramic brackets. Engineered for optimal chewing efficiency and facial symmetry.",
      duration: "4 - 12 Months",
      tech: "iTero 3D Scanner & AI Outcome Simulator",
      highlights: [
        "100% impression-free digital 3D scans",
        "Preview your final smile simulation before starting",
        "Removable aligners for easy brushing and eating",
        "Continuous monitoring with virtual check-ins"
      ]
    },
    cosmetic: {
      tag: "Aesthetic Excellence",
      heading: "Artisanal Cosmetic Dentistry & Veneers",
      desc: "Custom hand-layered porcelain veneers, chairside composite bonding, and in-office cold-laser whitening tailored to your facial proportions and natural tooth luminescence.",
      duration: "2 Visits",
      tech: "Digital Smile Design & Shade Matching Spectrophotometer",
      highlights: [
        "Ultra-thin ceramic veneers requiring minimal prep",
        "Laser whitening lifting teeth up to 8 shades in 45 min",
        "Micro-aesthetic gum contouring for balanced smiles",
        "Custom luminescence matched to your natural tone"
      ]
    }
  };

  const details = treatmentDetails[service.id] || treatmentDetails.general;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close treatment details modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold uppercase tracking-wider text-brand-500 block mb-2">
          {details.tag}
        </span>
        <h3 id="treatment-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-3 leading-tight">
          {details.heading}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {details.desc}
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-xs">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-brand-500 flex-shrink-0" />
            <div>
              <span className="text-slate-400 block font-medium">Session Time</span>
              <span className="font-bold text-slate-800">{details.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
            <div>
              <span className="text-slate-400 block font-medium">Core Tech</span>
              <span className="font-bold text-slate-800">{details.tech}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2.5 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Clinical Advantages
          </h4>
          {details.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBookTreatment(service.title);
            }}
            className="flex-1 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span>Book This Treatment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

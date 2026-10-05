import React, { useEffect } from 'react';
import { X, Shield, FileText, AlertTriangle, Cookie, Clock, CheckCircle2 } from 'lucide-react';

export default function LegalModal({ isOpen, type = 'privacy', onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const contentMap = {
    privacy: {
      icon: <Shield className="w-5 h-5 text-brand-500" />,
      title: "Privacy Policy",
      subtitle: "Last updated: October 2026 • HIPAA & Patient Confidentiality Compliant",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At <strong>DentalCare Clinic</strong>, your privacy and health confidentiality are of utmost importance. This Privacy Policy outlines our standards for collecting, handling, and protecting any information submitted via our digital interfaces.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Information Collection & Usage</h4>
          <p>
            We collect personal information that you voluntarily submit through our demo consultation and appointment request forms, such as your full name, telephone number, and email address. This information is utilized solely to coordinate consultations and confirm scheduling.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. HIPAA Adherence & Data Security</h4>
          <p>
            Any preliminary clinical requests are handled in strict adherence to patient privacy standards and HIPAA health data protection guidelines. We do not sell, rent, or trade your contact information to third-party advertisers.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">3. Contact & Patient Inquiries</h4>
          <p>
            If you have questions regarding your data privacy or wish to request records, please contact our Privacy Officer at <span className="text-brand-600 font-semibold">care@dentalcare-clinic.com</span> or call +1 (800) 555-SMILE.
          </p>
        </div>
      )
    },
    terms: {
      icon: <FileText className="w-5 h-5 text-brand-500" />,
      title: "Terms and Conditions",
      subtitle: "Effective as of October 2026",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Welcome to the <strong>DentalCare Clinic</strong> website. By accessing or interacting with our digital services, you agree to comply with and be bound by the following Terms and Conditions.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Website Scope</h4>
          <p>
            This website serves as a public informational portal and showcase of our clinic's capabilities, 3D imaging technology, and specialty services. Online requests do not constitute a guaranteed clinical appointment until confirmed directly by our staff.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. Intellectual Property</h4>
          <p>
            All custom 3D animations, illustrations, clinical copy, logos, and digital assets are proprietary property of DentalCare Clinic and protected under international copyright law.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">3. Governing Law</h4>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of California.
          </p>
        </div>
      )
    },
    medical: {
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: "Medical Disclaimer",
      subtitle: "Mandatory Clinical Notice",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
            <strong>Important Notice:</strong> Information on this website is provided solely for educational and general informational purposes.
          </div>
          <p>
            The content, 3D anatomical animations, before/after showcases, and clinical descriptions provided on this website are not intended to be a substitute for professional dental examination, diagnosis, or personalized medical advice.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Doctor-Patient Relationship</h4>
          <p>
            Reviewing this website or submitting an appointment consultation request does not establish a formal doctor-patient relationship. Such relationship is established only upon in-person clinical examination and registration at our facility.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. Dental Emergencies</h4>
          <p>
            If you are experiencing severe oral bleeding, acute infection, facial swelling affecting breathing, or critical dental trauma, please contact our 24/7 emergency line immediately or visit the nearest hospital emergency room.
          </p>
        </div>
      )
    },
    cookies: {
      icon: <Cookie className="w-5 h-5 text-brand-500" />,
      title: "Cookie Policy",
      subtitle: "Transparency in digital browsing",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            This website utilizes minimal browser cookies and local storage tokens strictly to maintain session stability, remember your UI preferences (such as high-contrast and reduced motion states), and measure anonymous traffic health.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Essential Cookies</h4>
          <p>
            These cookies are required for basic site navigation, modal focus retention, and frame scrubbing performance.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. Managing Cookies</h4>
          <p>
            You can configure your browser to decline non-essential cookies. No cross-site advertising tracker is deployed on this domain.
          </p>
        </div>
      )
    },
    appointment: {
      icon: <Clock className="w-5 h-5 text-brand-500" />,
      title: "Appointment & Cancellation Policy",
      subtitle: "Clinical Scheduling Guidelines",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            To provide dedicated one-on-one time with our clinical specialists and eliminate waiting room delays, we reserve operatory suites exclusively for scheduled patients.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. 24-Hour Notice</h4>
          <p>
            We kindly request at least 24 hours advance notice should you need to reschedule or cancel an appointment. This courtesy allows us to accommodate patients experiencing acute dental pain or emergency needs.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. Demonstration Flow Notice</h4>
          <p>
            Please note that form submissions in the public preview showcase demonstrate the patient booking journey and generate simulated priority reservations.
          </p>
        </div>
      )
    },
    accessibility: {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      title: "Accessibility Statement",
      subtitle: "WCAG 2.2 AA Compliance Commitment",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong>DentalCare Clinic</strong> is committed to ensuring digital accessibility for patients of all abilities. We continually enhance user experience according to the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA standards.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Key Accessibility Features</h4>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Full keyboard navigable navigation, modals, and interactive before/after sliders.</li>
            <li>High contrast ratios meeting WCAG 2.2 color standards across text and controls.</li>
            <li>Respect for <code>prefers-reduced-motion</code> system preferences.</li>
            <li>ARIA labeling, role dialog attributes, and focus visible indicators.</li>
          </ul>
        </div>
      )
    }
  };

  const activeContent = contentMap[type] || contentMap.privacy;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden text-left max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
              {activeContent.icon}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-xl font-extrabold text-[#101828]">
                {activeContent.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {activeContent.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close legal modal"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-2 flex-1">
          {activeContent.body}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

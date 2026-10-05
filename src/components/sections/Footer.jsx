import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onBookClick, onOpenLegal }) {
  return (
    <footer id="contact" className="bg-[#101828] text-white pt-20 pb-12 px-6 sm:px-12 lg:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 border border-brand-500/30">
                <svg className="w-6 h-6 fill-current text-brand-400" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7 2.5 10 .5 1.5 1.5 4 3.5 4s3-2.5 3.5-4c1-3 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="tracking-tight">
                <span className="font-extrabold text-2xl text-white">DENTAL</span>
                <span className="font-semibold text-2xl text-brand-400">CARE</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              World-class clinical dental care fusing cutting-edge 3D diagnostic imaging, digital bite calibration, and gentle pain-free protocols.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting New Patients Today</span>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Treatments
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services-preview" className="hover:text-white transition-colors">Digital Orthodontics & Invisalign</a></li>
              <li><a href="#services-preview" className="hover:text-white transition-colors">Precision Titanium Implants</a></li>
              <li><a href="#services-preview" className="hover:text-white transition-colors">Porcelain Veneers & Smile Makeovers</a></li>
              <li><a href="#services-preview" className="hover:text-white transition-colors">Bite Realignment & TMJ Therapy</a></li>
              <li><a href="#services-preview" className="hover:text-white transition-colors">Biomimetic Preventive Dentistry</a></li>
              <li><a href="#services-preview" className="hover:text-white transition-colors">Same-Day Emergency Relief</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="text-white font-medium block">Mon – Thu</span>
                <span>8:00 AM – 7:00 PM</span>
              </div>
              <div>
                <span className="text-white font-medium block">Friday</span>
                <span>8:00 AM – 5:00 PM</span>
              </div>
              <div>
                <span className="text-white font-medium block">Saturday</span>
                <span>9:00 AM – 3:00 PM</span>
              </div>
              <div>
                <span className="text-brand-400 font-medium block">Emergency Service</span>
                <span>24/7 Hotline</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Contact & Location
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>450 Medical Plaza Parkway, Suite 300, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="tel:+18005557645" className="font-semibold text-white hover:text-brand-300 transition-colors">+1 (800) 555-SMILE</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="mailto:care@dentalcare-clinic.com" className="hover:text-white transition-colors">care@dentalcare-clinic.com</a>
              </li>
            </ul>

            <button
              onClick={onBookClick}
              className="mt-6 w-full py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Book An Appointment
            </button>
          </div>
        </div>

        {/* Bottom Bar with Functional Legal Policy Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DentalCare Clinic. All Rights Reserved. Fully Certified & HIPAA Compliant.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors focus-visible:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors focus-visible:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('medical')}
              className="hover:text-slate-300 transition-colors focus-visible:underline text-amber-400/90 hover:text-amber-300"
            >
              Medical Disclaimer
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('cookies')}
              className="hover:text-slate-300 transition-colors focus-visible:underline"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('accessibility')}
              className="hover:text-slate-300 transition-colors focus-visible:underline text-emerald-400/90 hover:text-emerald-300"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

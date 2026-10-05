import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentModal({ isOpen, onClose, preselectedService, preselectedDoctor }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = loading, 3 = confirmed
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'General Dentistry & Cleaning',
    doctor: preselectedDoctor || 'Any Available Specialist',
    date: '2026-10-06',
    time: '10:00 AM',
    notes: ''
  });

  // Keep state updated when props change
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
    if (preselectedDoctor) {
      setFormData(prev => ({ ...prev, doctor: preselectedDoctor }));
    }
  }, [preselectedService, preselectedDoctor]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 7) {
      setErrorMessage('Please enter a valid telephone number (at least 7 digits).');
      return;
    }

    // Step 2: Show brief realistic simulation loading state
    setStep(2);
    setTimeout(() => {
      setStep(3);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // graceful fallback if canvas-confetti is blocked
      }
    }, 700);
  };

  const handleReset = () => {
    setStep(1);
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 && (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
                  Priority Booking
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-semibold text-amber-800">
                  Demo Showcase
                </span>
              </div>
              <h3 id="appointment-modal-title" className="text-2xl font-extrabold text-[#101828]">
                Schedule Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Direct priority confirmation. No waiting room delays. Gentle care guarantee.
              </p>

              {/* Required Demo Appointment Flow Disclaimer */}
              <div className="mt-3 p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900 text-[11px] leading-tight flex items-start gap-2">
                <span className="font-bold text-blue-700 uppercase tracking-wider text-[10px] mt-0.5">Note:</span>
                <span>
                  <strong>Demo Appointment Flow:</strong> This showcase allows you to explore our patient scheduling experience. It simulates priority confirmation and does not create a real clinical charge or appointment.
                </span>
              </div>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-in fade-in"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label htmlFor="patient-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 234-5678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="patient-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="patient-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Doctor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="patient-service" className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="patient-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  >
                    <option>General Dentistry & Cleaning</option>
                    <option>Dental Implants & Restoration</option>
                    <option>Orthodontics & Bite Alignment</option>
                    <option>Cosmetic Porcelain Veneers</option>
                    <option>Emergency Toothache Care</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="patient-doctor" className="block text-xs font-semibold text-slate-700 mb-1">
                    Doctor Preference
                  </label>
                  <select
                    id="patient-doctor"
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  >
                    <option>Any Available Specialist</option>
                    <option>Dr. Sarah Chen, DDS (Orthodontics)</option>
                    <option>Dr. Marcus Miller, DMD (Implants)</option>
                    <option>Dr. Elena Rostova, DDS (Cosmetic)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="patient-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="patient-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label htmlFor="patient-time" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="patient-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  >
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simulate Demo Booking</span>
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Processing State */}
        {step === 2 && (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 text-brand-500 animate-spin mb-4" />
            <h4 className="text-lg font-bold text-[#101828]">Reserving Consultation Slot...</h4>
            <p className="text-xs text-slate-500 mt-1">Calibrating calendar availability and provider schedule.</p>
          </div>
        )}

        {/* Step 3: Success Confirmation State */}
        {step === 3 && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center mx-auto mb-4 animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              Demo Confirmation Generated
            </div>
            <h3 className="text-2xl font-extrabold text-[#101828] mb-2">
              Appointment Simulation Complete!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-5 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name || 'valued patient'}</strong>. In production, this would dispatch an automated SMS confirmation and email calendar invite.
            </p>

            <div className="bg-[#FAFBFD] p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-800">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-slate-500">Doctor / Specialist:</span>
                <span className="font-semibold text-slate-800">{formData.doctor}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-slate-500">Scheduled Time:</span>
                <span className="font-semibold text-slate-800">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-500">Demo Reference ID:</span>
                <span className="font-bold text-brand-600">#DEMO-DC-9842</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-brand-500 text-white font-semibold text-xs sm:text-sm hover:bg-brand-600 transition shadow-sm focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Done
              </button>
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition"
              >
                Modify Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

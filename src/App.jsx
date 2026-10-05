import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DentalExperience from './components/DentalExperience';
import CtaBanner from './components/sections/CtaBanner';
import BeforeAfterSlider from './components/sections/BeforeAfterSlider';
import DoctorsSection from './components/sections/DoctorsSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/sections/Footer';
import AppointmentModal from './components/modals/AppointmentModal';
import TreatmentModal from './components/modals/TreatmentModal';
import LegalModal from './components/modals/LegalModal';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [treatmentModalOpen, setTreatmentModalOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState('privacy');

  const handleOpenBooking = (serviceName = null, doctorName = null) => {
    if (serviceName) setSelectedService({ title: serviceName });
    if (doctorName) setPreselectedDoctor(doctorName);
    setAppointmentModalOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setTreatmentModalOpen(true);
  };

  const handleOpenLegal = (type = 'privacy') => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFBFD] font-sans antialiased text-slate-heading">
      {/* Sticky Floating Navbar */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* Main Continuous GSAP Scroll Experience (Frames 1 -> 56 -> 80 -> 109 -> 150) */}
      <main className="w-full">
        <DentalExperience
          onBookClick={() => handleOpenBooking()}
          onSelectService={handleSelectService}
        />

        {/* Anchor targets for smooth navbar navigation */}
        <div id="services-preview" className="h-0 w-0 -mt-24 pointer-events-none" />
        <div id="about-preview" className="h-0 w-0 -mt-24 pointer-events-none" />
        <div id="all-reviews" className="h-0 w-0 -mt-24 pointer-events-none" />

        {/* Post-Pin Continuation Sections */}
        {/* 1. Master Figma Royal Blue CTA Banner */}
        <CtaBanner
          onBookClick={() => handleOpenBooking()}
          onContactClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Interactive Before & After Bite & Alignment Transformation Slider */}
        <BeforeAfterSlider />

        {/* 3. Clinical Specialists & Doctors */}
        <DoctorsSection
          onBookWithDoctor={(docName) => handleOpenBooking(null, docName)}
        />

        {/* 4. Frequently Asked Questions */}
        <FaqSection />

        {/* 5. Luxury Clinic Footer with verified legal links */}
        <Footer
          onBookClick={() => handleOpenBooking()}
          onOpenLegal={handleOpenLegal}
        />
      </main>

      {/* Interactive Booking Modal with Demo Disclaimers */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedService={selectedService?.title}
        preselectedDoctor={preselectedDoctor}
      />

      {/* Interactive Treatment Details Modal */}
      <TreatmentModal
        isOpen={treatmentModalOpen}
        service={selectedService}
        onClose={() => setTreatmentModalOpen(false)}
        onBookTreatment={(serviceName) => handleOpenBooking(serviceName)}
      />

      {/* Legal & Medical Policy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        type={legalModalType}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}

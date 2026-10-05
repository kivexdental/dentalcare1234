import React from 'react';
import { Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function DoctorsSection({ onBookWithDoctor }) {
  const doctors = [
    {
      name: "Dr. Sarah Chen, DDS, MS",
      role: "Chief Orthodontist & Bite Specialist",
      edu: "Harvard School of Dental Medicine",
      exp: "16+ Years Experience",
      specialties: ["Invisalign Diamond Provider", "Digital Smile Design", "TMJ Relief"],
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Marcus Miller, DMD",
      role: "Oral Surgeon & Implantologist",
      edu: "Columbia University Dental College",
      exp: "14+ Years Experience",
      specialties: ["All-on-4 Implants", "Guided Bone Regeneration", "Sedation Care"],
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Elena Rostova, DDS",
      role: "Cosmetic & Restorative Dentist",
      edu: "UCLA School of Dentistry",
      exp: "11+ Years Experience",
      specialties: ["Porcelain Veneers", "Biomimetic Fillings", "Laser Whitening"],
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section id="doctors" className="py-24 px-6 sm:px-12 lg:px-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-slate-muted block mb-2">
              Our Clinical Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101828] tracking-tight leading-tight">
              Experienced Hands, <span className="text-brand-500">Gentle Touch</span>
            </h2>
          </div>
          <p className="text-base text-slate-body max-w-md">
            Our board-certified dentists combine academic prestige with gentle, compassionate chairside care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-[#FAFBFD] rounded-3xl p-6 border border-slate-200/80 shadow-soft-card flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              <div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                  <img
                    src={doc.avatar}
                    alt={`${doc.name} - ${doc.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-brand-600 shadow-sm">
                    {doc.exp}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#101828] mb-1">
                  {doc.name}
                </h3>
                <p className="text-sm font-medium text-brand-600 mb-4">
                  {doc.role}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-5">
                  <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>{doc.edu}</span>
                </div>

                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/60">
                  {doc.specialties.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookWithDoctor && onBookWithDoctor(doc.name)}
                aria-label={`Book consultation with ${doc.name}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-slate-200 text-slate-heading hover:bg-brand-500 hover:text-white hover:border-brand-500 text-sm font-semibold transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

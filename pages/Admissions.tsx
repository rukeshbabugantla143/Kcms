
import React from 'react';
import { CheckCircle2, FileText, GraduationCap, PhoneCall } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Admissions 2025-26</h1>
          <p className="text-xl opacity-70">Join a community of innovators and world-shapers.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-12">The Admission Process</h2>
            <div className="space-y-12">
              {[
                { step: '01', title: 'Submit Application', desc: 'Fill out the online application form with personal and academic details.' },
                { step: '02', title: 'Entrance Assessment', desc: 'Qualify for relevant entrance exams (PGCET/KMAT) for PG courses.' },
                { step: '03', title: 'Counseling & Interview', desc: 'Interact with our career experts to align your goals with our programs.' },
                { step: '04', title: 'Seat Confirmation', desc: 'Secure your admission by paying the enrollment fee.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-4xl font-black text-secondary opacity-30">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-black text-primary mb-2">{item.title}</h4>
                    <p className="text-neutralText">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-[3rem] animate-zoom-in">
            <h3 className="text-2xl font-black text-primary mb-8">Quick Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                <PhoneCall className="text-secondary" />
                <div>
                  <div className="text-xs font-bold text-neutralText/40 uppercase">Admissions Helpline</div>
                  <div className="font-bold text-primary">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                <FileText className="text-secondary" />
                <div>
                  <div className="text-xs font-bold text-neutralText/40 uppercase">Email Us</div>
                  <div className="font-bold text-primary">admissions@kcms.edu.in</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
              className="w-full mt-10 bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all shadow-xl"
            >
              Start Online Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

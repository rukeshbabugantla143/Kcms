
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, FileText, GraduationCap, PhoneCall, ChevronRight, 
  ArrowRight, Download, ShieldCheck, HelpCircle, Calendar, 
  Award, BookOpen, Clock, Users, ChevronDown, CheckCircle, Mail
} from 'lucide-react';

const Admissions: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const programs = [
    { 
      name: 'UG Programs', 
      items: [
        { label: 'BBA', id: 'bba' },
        { label: 'BCA', id: 'bca' },
        { label: 'B.Com', id: 'bcom' },
        { label: 'BTTM', id: 'mttm' }
      ], 
      duration: '3 Years', 
      color: 'bg-blue-50' 
    },
    { 
      name: 'PG Programs', 
      items: [
        { label: 'MBA', id: 'mba' },
        { label: 'MTTM', id: 'mttm' }
      ], 
      duration: '2 Years', 
      color: 'bg-purple-50' 
    }
  ];

  const steps = [
    { title: 'Apply Online', desc: 'Fill out the digital inquiry form to start your journey.', icon: <FileText /> },
    { title: 'Counseling', desc: 'One-on-one session with our academic experts.', icon: <Users /> },
    { title: 'Verification', desc: 'Original document review by our registrar office.', icon: <ShieldCheck /> },
    { title: 'Fee Payment', desc: 'Confirm your seat via online or bank transfer.', icon: <Award /> },
    { title: 'Confirmation', desc: 'Welcome to the KCMS family!', icon: <CheckCircle /> }
  ];

  const faqs = [
    { q: "Is there an entrance exam for PG courses?", a: "Yes, for MBA and MTTM, students must have a valid score in PGCET, KMAT, or CMAT as per university regulations." },
    { q: "Do you provide hostel facilities?", a: "Yes, we have separate, high-security hostels for boys and girls with multi-cuisine mess facilities." },
    { q: "Is the fee payable in installments?", a: "KCMS provides flexible installment plans to ease the financial burden on parents. Contact the accounts office for details." },
    { q: "What is the medium of instruction?", a: "The primary medium of instruction for all professional courses is English." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Admissions</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Start Your <br/><span className="text-secondary">Global Journey</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Join a legacy of excellence. Admission process for the academic year 2025-26 is now officially open.</p>
        </div>
      </section>

      {/* 2. Admissions Overview */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Welcome Aspirants</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Building the Next Generation of Leaders</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-10 text-justify">
              Admissions at KCMS are designed to identify potential, not just grades. We look for students who are curious, driven, and ready to make a difference in the world. Whether you are aiming for a career in tech or management, our doors are open to merit and ambition.
            </p>
            <div className="flex gap-6">
               <button onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))} className="bg-primary text-white px-10 py-4 rounded-full font-black hover:bg-secondary transition-all shadow-xl">Apply Online</button>
               <Link to="/contact" className="bg-gray-100 text-primary px-10 py-4 rounded-full font-black hover:bg-gray-200 transition-all">Visit Campus</Link>
            </div>
          </div>
          <div className="relative group">
             <img src="https://images.unsplash.com/photo-1523050335102-c6744729ea24?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="KCMS Campus" />
             <div className="absolute -bottom-10 -left-10 bg-secondary p-10 rounded-[3rem] text-white shadow-2xl hidden md:block">
                <div className="text-4xl font-black mb-1">95%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Satisfaction Rate</div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Courses Offered - UPDATED WITH LINKS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Academic Programs</h2>
            <h3 className="text-4xl font-black text-primary">Admission Open for 2025</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((prog, i) => (
              <div key={i} className={`${prog.color} p-12 rounded-[4rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex justify-between items-center mb-10">
                   <h4 className="text-3xl font-black text-primary">{prog.name}</h4>
                   <div className="bg-white/50 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">{prog.duration}</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-12">
                   {prog.items.map(item => (
                     <Link 
                       key={item.id + item.label} 
                       to={`/course/${item.id}`} 
                       className="bg-white p-6 rounded-3xl flex items-center justify-between group hover:bg-primary hover:text-white transition-all shadow-sm"
                     >
                        <span className="font-black">{item.label}</span>
                        <ArrowRight size={18} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </Link>
                   ))}
                </div>
                <Link to="/courses" className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1 flex items-center w-fit gap-2">View All Specializations <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Eligibility Criteria */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Are you eligible?</h2>
          <h3 className="text-4xl font-black text-primary">Qualification Guidelines</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h4 className="text-2xl font-black text-primary mb-8">UG Eligibility</h4>
              <ul className="space-y-6">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <p className="text-neutralText">Successful completion of <strong>10+2 / PUC / XII Std</strong> from any recognized board (CBSE/ICSE/State).</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <p className="text-neutralText">Minimum aggregate marks as specified by the respective university (UOM/VTU).</p>
                 </li>
              </ul>
           </div>
           <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <h4 className="text-2xl font-black text-primary mb-8">PG Eligibility</h4>
              <ul className="space-y-6">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <p className="text-neutralText">A bachelor’s degree in any discipline from a recognized university with minimum required aggregate.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <p className="text-neutralText">Score card of state-level or national-level entrance exams (PGCET/KMAT/CMAT).</p>
                 </li>
              </ul>
           </div>
        </div>
        <p className="text-center text-sm text-neutralText/40 mt-12 italic">*Final admission is subject to university approval and document verification.</p>
      </section>

      {/* 5. Admission Process */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">Step-by-Step</h2>
            <h3 className="text-4xl font-black">How to Secure Your Seat</h3>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-white/10 hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center flex-1 group">
                 <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-8 border-primary group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 30, className: "text-primary" })}
                 </div>
                 <div className="text-xs font-black text-secondary uppercase tracking-widest mb-2">Step 0{i+1}</div>
                 <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                 <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Documents & 7. Scholarships */}
      <section className="py-24 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <h3 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
                  <Download className="text-secondary" /> Documents Checklist
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '10th Marks Card', '12th / PUC Marks Card', 'Graduation Degree (For PG)', 'Transfer Certificate', 'Conduct Certificate', 'Migration Certificate (Non-Kar)', 'ID Proof (Aadhar/Voter)', 'Passport Photos (6 Nos)'
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl font-bold text-sm text-primary border border-gray-100">
                       <CheckCircle size={16} className="text-green-500" /> {doc}
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-secondary/5 p-12 rounded-[4rem] border border-secondary/10">
               <h3 className="text-3xl font-black text-primary mb-8 flex items-center gap-4">
                  <Award className="text-secondary" /> Financial Support
               </h3>
               <p className="text-neutralText leading-relaxed mb-8">KCMS offers a range of scholarships based on academic merit, sports achievement, and socio-economic status.</p>
               <div className="space-y-4 mb-10">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h5 className="font-black text-primary">Merit Scholarship</h5>
                     <p className="text-sm text-neutralText/60">Awarded to students with 90%+ in qualifying exams.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h5 className="font-black text-primary">Government Support</h5>
                     <p className="text-sm text-neutralText/60">Assistance in applying for Post-Matric and State Scholarships.</p>
                  </div>
               </div>
               <button className="w-full bg-secondary text-white py-4 rounded-2xl font-black shadow-xl hover:bg-primary transition-all">View Scholarship Portal</button>
            </div>
         </div>
      </section>

      {/* 8. Important Dates & 9. Why Choose */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-8">
                     <Calendar className="text-secondary" />
                     <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Academic Intake 2025</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span className="font-bold text-neutralText">Phase 1 Admissions</span>
                        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black">ACTIVE</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span className="font-bold text-neutralText">Application Deadline</span>
                        <span className="font-black text-primary">July 15, 2025</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span className="font-bold text-neutralText">Orientation Batch 1</span>
                        <span className="font-black text-primary">August 10, 2025</span>
                     </div>
                  </div>
                  <p className="mt-8 text-xs font-bold text-[#B91C1C] uppercase tracking-widest flex items-center gap-2">
                     <Clock size={14} /> Limited Seats Available in BCA & MBA
                  </p>
               </div>
               <div className="space-y-8">
                  <h3 className="text-4xl font-black text-primary leading-tight italic">Why KCMS is the Right Choice for You?</h3>
                  <div className="grid grid-cols-1 gap-4">
                     {[
                       { title: 'Industry-Integrated Curriculum', desc: 'Syllabus mapped with Google, IBM, and SAP standards.' },
                       { title: 'Placement Guarantee Support', desc: 'Dedicated training from Semester 1 until you are hired.' },
                       { title: 'Global Immersion', desc: 'Optional international tours and student exchange programs.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 text-primary">
                              <ShieldCheck size={20} />
                           </div>
                           <div>
                              <h5 className="font-black text-primary mb-1">{item.title}</h5>
                              <p className="text-sm text-neutralText/60">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-24 container mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <HelpCircle className="text-secondary mx-auto mb-4" size={48} />
               <h3 className="text-4xl font-black text-primary">Admission FAQs</h3>
               <p className="text-neutralText/60 mt-4">Common questions from parents and students.</p>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    >
                       <span className="font-black text-primary">{faq.q}</span>
                       <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === i && (
                      <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 animate-fade-in text-neutralText leading-relaxed">
                         {faq.a}
                      </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Ready to Take the First Step?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <button onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))} className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3">
                  Start Online Enquiry <ArrowRight />
               </button>
               <div className="flex items-center justify-center gap-4 bg-white/10 px-8 py-5 rounded-full border border-white/20">
                  <PhoneCall size={24} className="text-secondary" />
                  <div className="text-left">
                     <div className="text-[10px] font-black opacity-40 uppercase">Talk to Counselor</div>
                     <div className="font-bold">+91 98765 43210</div>
                  </div>
               </div>
            </div>
            <div className="mt-12 flex justify-center gap-8 opacity-40">
               <span className="flex items-center gap-2"><Mail size={14} /> admissions@kcms.edu.in</span>
               <span className="flex items-center gap-2"><Clock size={14} /> 9:00 AM - 5:30 PM</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Admissions;

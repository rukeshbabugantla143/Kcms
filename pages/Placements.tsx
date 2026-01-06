
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, TrendingUp, Users, Award, ShieldCheck, 
  ArrowRight, CheckCircle, Zap, Globe, MessageSquare, 
  Target, Rocket, Building2, PhoneCall, ChevronRight,
  Handshake, Laptop, Star
} from 'lucide-react';

const Placements: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const stats = [
    { label: 'Placement Record', value: '95%', icon: <Award />, suffix: '' },
    { label: 'Highest Package', value: '12', icon: <TrendingUp />, suffix: ' LPA' },
    { label: 'Average Package', value: '6.5', icon: <Star />, suffix: ' LPA' },
    { label: 'Hiring Partners', value: '100', icon: <Building2 />, suffix: '+' }
  ];

  const processSteps = [
    { title: 'Orientation', desc: 'Career path mapping and goal setting sessions.', icon: <Target /> },
    { title: 'Skill Training', desc: 'Soft skills and technical bootcamp modules.', icon: <Zap /> },
    { title: 'Resume Build', desc: 'Crafting industry-standard professional profiles.', icon: <Laptop /> },
    { title: 'Mock Rounds', desc: 'Simulated interviews with industry veterans.', icon: <MessageSquare /> },
    { title: 'Interviews', desc: 'On-campus and virtual recruitment drives.', icon: <Users /> },
    { title: 'Final Placement', desc: 'Securing the dream offer and onboarding.', icon: <Rocket /> }
  ];

  const trainingModules = [
    { title: 'Communication Skills', desc: 'Verbal, non-verbal, and corporate etiquette training.' },
    { title: 'Aptitude & Reasoning', desc: 'Intensive prep for competitive technical rounds.' },
    { title: 'Technical Excellence', desc: 'Domain-specific training in AI, SAP, and Analytics.' },
    { title: 'Personality Grooming', desc: 'Confidence building and leadership workshops.' }
  ];

  const companyLogos = [
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Capgemini_2017_logo.svg' },
    { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'HDFC Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/HDFC_Bank_logo.svg' },
    { name: 'Marriott', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Marriott_International.svg' }
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      dept: "BCA Graduate",
      company: "Google",
      text: "KCMS transformed my approach to technical problem-solving. The placement cell mock interviews were so rigorous that the actual Google interview felt easy!",
      image: "https://i.pravatar.cc/150?u=a"
    },
    {
      name: "Sneha Patil",
      dept: "MBA Graduate",
      company: "Amazon",
      text: "The mentorship at KCMS is world-class. The industry connections helped me land an internship which eventually turned into a PPO at Amazon.",
      image: "https://i.pravatar.cc/150?u=b"
    },
    {
      name: "Vikram Singh",
      dept: "B.Com Graduate",
      company: "Deloitte",
      text: "Integrating Tally and SAP into the B.Com curriculum gave me a huge advantage. I was corporate-ready from Day 1 thanks to the skill development cell.",
      image: "https://i.pravatar.cc/150?u=c"
    },
    {
      name: "Priya Nair",
      dept: "MTTM Graduate",
      company: "Emirates",
      text: "The hands-on training on GDS systems and the global tours provided by the Tourism department were instrumental in my placement at Emirates.",
      image: "https://i.pravatar.cc/150?u=d"
    }
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
            <span className="text-white opacity-100">Placements</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Building Careers, <br/><span className="text-secondary">Not Just Degrees</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Our dedicated placement cell acts as a bridge between campus talent and global corporate giants.</p>
        </div>
      </section>

      {/* 2. Placement Cell Overview */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Empowering Your Future</h2>
            <h3 className="text-4xl font-black text-primary mb-8">The KCMS Career Advancement Hub</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-10 text-justify">
              The placement cell at KCMS is more than just a recruitment body; it is a full-scale career development center. We work individually with every student to identify their strengths, bridge their skill gaps, and match them with industry roles that align with their long-term aspirations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Dedicated Placement Team', 'Strong Industry Connect', 'Global Alumni Referrals', 'Continuous Mentoring'].map((point, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-primary">
                  <CheckCircle className="text-secondary" size={18} /> {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl relative z-10" alt="Placement Discussion" />
            <div className="absolute -bottom-10 -left-10 bg-secondary p-12 rounded-[3rem] text-white shadow-2xl hidden md:block">
              <Handshake size={48} />
              <div className="text-3xl font-black mt-4">500+</div>
              <div className="text-xs uppercase font-bold opacity-60">Offers Last Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Placement Process */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Roadmap to Success</h2>
            <h3 className="text-4xl font-black text-primary">Our Robust Selection Flow</h3>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/5 hidden lg:block -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative z-10 bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 hover:border-secondary transition-all text-center group">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h4 className="font-black text-primary text-lg mb-2">{step.title}</h4>
                  <p className="text-xs text-neutralText/60 leading-relaxed">{step.desc}</p>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                    0{i+1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Training & Skill Development */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-6">
               {trainingModules.map((mod, i) => (
                 <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                    <h4 className="font-black text-primary mb-3">{mod.title}</h4>
                    <p className="text-sm text-neutralText/60 leading-relaxed">{mod.desc}</p>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Corporate Readiness</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Industry-Oriented Finishing School</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-10">
              We bridge the gap between classroom theory and boardroom reality. Our specialized "Finishing School" module ensures that KCMS graduates are day-1 productive. We host weekly guest lectures, industry interaction sessions, and global CXO meetups.
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))} className="bg-primary text-white px-10 py-4 rounded-full font-black flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
               Start Your Journey <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Placement Statistics */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i*100}ms` }}>
                <div className="text-secondary mb-6 flex justify-center">{React.cloneElement(stat.icon as React.ReactElement<any>, { size: 48 })}</div>
                <div className="text-5xl md:text-7xl font-black mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Top Recruiters - UPDATED WITH SCROLLING LOGOS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Our Hiring Partners</h2>
          <h3 className="text-4xl font-black text-primary">Where Our Alumni Lead</h3>
        </div>
        <div className="relative overflow-hidden py-10">
          <div className="animate-marquee-scroll gap-8 md:gap-16 items-center">
             {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, i) => (
                <div key={i} className="min-w-[140px] md:min-w-[200px] h-24 md:h-32 bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-lg border border-gray-100 transition-all hover:scale-110 shrink-0">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="max-h-12 md:max-h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all" 
                  />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Internship Opportunities */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-secondary/5 p-12 md:p-24 rounded-[4rem] border border-secondary/10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-2/3">
             <h3 className="text-4xl font-black text-primary mb-8">Early Career Exposure: Internships</h3>
             <p className="text-xl text-neutralText leading-relaxed mb-10 italic">
               "Internships at KCMS are the first step toward a confirmed PPO (Pre-Placement Offer). We mandate industry exposure in the final year across all departments."
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Paid / Stipend-Based Roles',
                  'MNC & Startup Exposure',
                  'Final Year Dedicated Support',
                  'Industry Mentorship'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 font-bold text-primary">
                    <ShieldCheck className="text-secondary" /> {item}
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:w-1/3">
             <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" className="rounded-[3rem] shadow-xl" alt="Internship" />
          </div>
        </div>
      </section>

      {/* 8. Student Success Stories - UPDATED WITH MORE TESTIMONIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Institutional Pride</h2>
              <h3 className="text-4xl font-black text-primary">Student Success Stories</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {successStories.map((story, i) => (
                <div key={i} className="bg-gray-50 p-10 md:p-12 rounded-[3rem] border border-gray-100 relative shadow-xl group hover:bg-white hover:border-secondary/20 transition-all">
                   <Quote size={60} className="text-primary/5 absolute top-8 left-8" />
                   <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                      <img src={story.image} className="w-24 h-24 rounded-full border-4 border-white shadow-lg shrink-0" alt={story.name} />
                      <div className="text-center md:text-left">
                         <p className="text-base text-neutralText leading-relaxed mb-6 italic">"{story.text}"</p>
                         <div className="font-black text-primary text-xl">{story.name}</div>
                         <div className="text-secondary font-bold uppercase text-[10px] tracking-widest">{story.dept}</div>
                         <div className="text-xs font-black text-primary/40 uppercase mt-1">Placed @ {story.company}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. Industry Collaborations & 10. Why KCMS */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                  <h3 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
                     <Handshake className="text-secondary" /> Strategic Collaborations
                  </h3>
                  <div className="space-y-6">
                     {[
                       'MOU with Cisco Networking Academy for IT certifications.',
                       'Partnership with Tally Education for Commerce students.',
                       'Guest lecture series with IIM and IIT alumni.',
                       'Collaborative research labs with local tech giants.'
                     ].map((collab, i) => (
                        <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                           <Globe className="text-secondary shrink-0" size={20} />
                           <p className="text-neutralText font-medium">{collab}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-3xl font-black text-primary mb-10 italic">Why KCMS for Careers?</h3>
                  <div className="grid grid-cols-1 gap-4">
                     {[
                       { title: 'Career-Focused Curriculum', desc: 'Syllabus updated every year as per market trends.' },
                       { title: '95% Placement Success', desc: 'Consistently high success rate across all streams.' },
                       { title: 'Global Recognition', desc: 'KCMS alumni work in over 15+ countries worldwide.' },
                       { title: 'Expert Placement Cell', desc: 'Run by professionals with 20+ years of HR experience.' }
                     ].map((reason, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg">
                              <CheckCircle size={20} />
                           </div>
                           <div>
                              <h5 className="font-black text-primary mb-1">{reason.title}</h5>
                              <p className="text-sm text-neutralText/60">{reason.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Your Career Starts Here</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <button onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))} className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3">
                  Apply for Admission <ArrowRight />
               </button>
               <div className="flex items-center justify-center gap-4 bg-white/10 px-8 py-5 rounded-full border border-white/20">
                  <PhoneCall size={24} className="text-secondary" />
                  <div className="text-left">
                     <div className="text-[10px] font-black opacity-40 uppercase">Placement Officer</div>
                     <div className="font-bold">+91 98765 43210</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

// Internal utility for icon rendering
const Quote = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12L13.017 12V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91244 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12L2.017 12V9C2.017 7.34315 3.36015 6 5.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33065 21 5.017 21H3.017Z" />
  </svg>
);

export default Placements;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Library, Monitor, GraduationCap, Coffee, Bus, Building2, 
  ChevronRight, Zap, Microscope, Music, Stethoscope, Dumbbell 
} from 'lucide-react';

const Infrastructure: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const facilities = [
    { title: 'Central Library', slug: 'library', icon: <Library />, desc: 'Fully automated with 50,000+ volumes and digital journals.', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80' },
    { title: 'Computer Labs', slug: 'computer-labs', icon: <Monitor />, desc: 'High-performance workstations with gigabit internet connectivity.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80' },
    { title: 'Science Labs', slug: 'science-labs', icon: <Microscope />, desc: 'Advanced research labs for Physics, Chemistry, and Electronics.', img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80' },
    { title: 'Smart Classrooms', slug: 'smart-classrooms', icon: <GraduationCap />, desc: 'Interactive 4K smart boards and high-quality audio systems.', img: 'https://images.unsplash.com/photo-1541339907198-e08756defe73?auto=format&fit=crop&q=80' },
    { title: 'Hostel Facility', slug: 'hostel', icon: <Building2 />, desc: 'Safe, secure, and comfortable living for boys and girls.', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80' },
    { title: 'Transport System', slug: 'transport', icon: <Bus />, desc: 'Fleet of GPS-tracked buses covering all major Bangalore routes.', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80' },
    { title: 'Auditorium', slug: 'auditorium', icon: <Music />, desc: 'Modern 500-seater hall for cultural and academic events.', img: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80' },
    { title: 'Medical Facility', slug: 'medical', icon: <Stethoscope />, desc: '24/7 on-campus infirmary with ambulance support.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80' },
    { title: 'Sports & Gym', slug: 'gym', icon: <Dumbbell />, desc: 'Pro-grade fitness equipment and multiple sports arenas.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Infrastructure</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">World-Class <br/> Campus</h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">Modern facilities designed to foster an immersive and technologically advanced learning experience for every student.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {facilities.map((fac, i) => (
              <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all animate-fade-up" style={{ animationDelay: `${i*100}ms` }}>
                <div className="h-64 overflow-hidden relative">
                  <img src={fac.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={fac.title} />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    {fac.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-primary mb-4">{fac.title}</h3>
                  <p className="text-neutralText leading-relaxed mb-6">{fac.desc}</p>
                  <Link to={`/p/${fac.slug}`} className="text-secondary font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Explore Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Highlights */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-primary p-16 md:p-24 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="lg:w-1/2 relative z-10">
             <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">Digital-First <span className="text-secondary">Campus</span></h2>
             <p className="text-xl text-white/60 leading-relaxed mb-10">KCMS is one of the few institutions in the region to have a 100% fiber-optic connected campus with interactive digital learning ecosystems integrated into every department.</p>
             <div className="flex flex-wrap gap-4">
               {['5G Ready Wi-Fi', 'AI/ML Computing Lab', 'E-Library Access', 'Smart Board Enabled'].map((t) => (
                 <span key={t} className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold border border-white/10">{t}</span>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 relative z-10">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg" alt="Tech Hub" />
               <img src="https://images.unsplash.com/photo-1581092921461-7d15cb89053e?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg translate-y-8" alt="Computing Lab" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-primary font-black text-4xl mb-8">Want to see the campus in person?</h2>
        <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-xl inline-flex items-center gap-3">
          Book a Campus Tour <Zap size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Infrastructure;

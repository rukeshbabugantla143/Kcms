
import React, { useEffect } from 'react';
import { Shield, Target, History, Award, CheckCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756defe73?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-7xl font-black mb-6">About KCMS</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/70">Building a legacy of academic brilliance since 2010.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">Empowering Minds, Shaping Futures</h2>
          <p className="text-lg text-neutralText mb-6">KCMS was established in 2010 under the Karnataka Education Trust. Founded by Prof. Basavaraj Ramanal, our motto is "Higher Education to All".</p>
          <div className="space-y-4">
            {['15+ Specialized Programs', 'NAAC Accredited Institution', 'Industry-Integrated Curriculum', 'Lush Green Tech-Campus'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-bold text-primary">
                <CheckCircle className="text-secondary" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl animate-zoom-in">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" alt="College Campus" />
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all">
            <Target size={50} className="text-secondary mb-8" />
            <h3 className="text-3xl font-black text-primary mb-6">Our Vision</h3>
            <p className="text-lg text-neutralText leading-relaxed">To be a globally recognized center of excellence in management and science education, creating leaders who are ethically sound and socially responsible.</p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all">
            <Shield size={50} className="text-secondary mb-8" />
            <h3 className="text-3xl font-black text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-neutralText leading-relaxed">To provide high-quality education accessible to all sections of society, fostering an environment of research, innovation, and industry alignment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;


import React from 'react';
import { Award, Briefcase, TrendingUp, Users } from 'lucide-react';

const Placements: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Placements & Careers</h1>
          <p className="text-xl opacity-70">Empowering you to step confidently into the professional world.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: 'Highest Package', value: '12 LPA', icon: <TrendingUp /> },
            { label: 'Avg Package', value: '6.5 LPA', icon: <Award /> },
            { label: 'Recruiters', value: '100+', icon: <Briefcase /> },
            { label: 'Success Rate', value: '95%', icon: <Users /> }
          ].map((stat, i) => (
            <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-secondary mb-4 flex justify-center">{React.cloneElement(stat.icon as React.ReactElement<any>, { size: 40 })}</div>
              <div className="text-3xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-16 animate-fade-up">
          <h2 className="text-3xl font-black text-primary mb-12 text-center">Our Recruitment Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Google', 'Amazon', 'Microsoft', 'IBM', 'Accenture', 'Infosys', 'Wipro', 'TCS', 'Capgemini', 'Oracle'].map((brand) => (
              <div key={brand} className="text-center font-black text-xl md:text-2xl text-primary/30 uppercase">{brand}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;

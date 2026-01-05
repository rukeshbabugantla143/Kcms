
import React, { useEffect } from 'react';
import { ImageIcon, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { title: 'Modern Library', category: 'Infrastructure', url: 'https://picsum.photos/800/600?random=50' },
    { title: 'Computer Lab', category: 'Academic', url: 'https://picsum.photos/800/600?random=51' },
    { title: 'Annual Sports Meet', category: 'Events', url: 'https://picsum.photos/800/600?random=52' },
    { title: 'Graduation Ceremony', category: 'Events', url: 'https://picsum.photos/800/600?random=53' },
    { title: 'Main Campus Building', category: 'Campus', url: 'https://picsum.photos/800/600?random=54' },
    { title: 'Smart Classroom', category: 'Infrastructure', url: 'https://picsum.photos/800/600?random=55' },
    { title: 'Student Lounge', category: 'Campus', url: 'https://picsum.photos/800/600?random=56' },
    { title: 'Research Seminar', category: 'Academic', url: 'https://picsum.photos/800/600?random=57' },
    { title: 'Cafeteria', category: 'Amenities', url: 'https://picsum.photos/800/600?random=58' },
    { title: 'Cultural Fest', category: 'Events', url: 'https://picsum.photos/800/600?random=59' },
    { title: 'Hostel View', category: 'Amenities', url: 'https://picsum.photos/800/600?random=60' },
    { title: 'Conference Hall', category: 'Infrastructure', url: 'https://picsum.photos/800/600?random=61' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Campus Gallery</h1>
          <p className="text-xl opacity-70">A glimpse into the vibrant life at KCMS.</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={img.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-8">
                <span className="text-secondary text-xs font-black uppercase tracking-widest mb-2">{img.category}</span>
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
                <div className="mt-4 flex gap-2">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white"><Maximize2 size={18} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

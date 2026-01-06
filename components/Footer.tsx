
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1765439468/Logo-New-1024x222_etmqyk.webp" 
              alt="KCMS Official Logo" 
              className="h-14 w-auto mb-8 brightness-0 invert" 
            />
          </Link>
          <p className="text-white/80 leading-relaxed mb-6">
            Karnataka College of Management & Science is a premier institution dedicated to excellence in education, research, and holistic development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About KCMS</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
            <li><Link to="/courses" className="hover:text-secondary transition-colors">Programs Offered</Link></li>
            <li><Link to="/placements" className="hover:text-secondary transition-colors">Placement Cell</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary transition-colors">Campus Gallery</Link></li>
          </ul>
        </div>

        {/* Course Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Programs</h4>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/course/bca" className="hover:text-secondary transition-colors">BCA (IT)</Link></li>
            <li><Link to="/course/mba" className="hover:text-secondary transition-colors">MBA (Management)</Link></li>
            <li><Link to="/course/bba" className="hover:text-secondary transition-colors">BBA (Admin)</Link></li>
            <li><Link to="/course/bcom" className="hover:text-secondary transition-colors">B.Com (Commerce)</Link></li>
            <li><Link to="/course/mttm" className="hover:text-secondary transition-colors">MTTM (Tourism)</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h4>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3">
              <MapPin className="text-secondary shrink-0" size={20} />
              <span className="text-sm">123, Campus Road, Near Metro Station, Bangalore, Karnataka - 560001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-secondary shrink-0" size={20} />
              <span className="text-sm">+91 80 1234 5678 / 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-secondary shrink-0" size={20} />
              <span className="text-sm">info@kcms.edu.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Karnataka College of Management & Science. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

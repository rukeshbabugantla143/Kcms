
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import ApplyPopup from './components/ApplyPopup';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            {/* Additional routes would be implemented similarly */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <ApplyPopup />

        {/* WhatsApp & Float Actions */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={32} />
          </a>
        </div>

        {/* Mobile Sticky Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[55] bg-white border-t border-gray-100 flex shadow-2xl">
          <a href="tel:+919876543210" className="flex-1 py-4 flex flex-col items-center justify-center text-primary font-bold text-xs uppercase">
            <span>Call Now</span>
          </a>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="flex-1 bg-primary text-white py-4 flex flex-col items-center justify-center font-bold text-xs uppercase"
          >
            <span>Apply Now</span>
          </button>
          <a href="https://wa.me/919876543210" className="flex-1 py-4 flex flex-col items-center justify-center text-[#25D366] font-bold text-xs uppercase">
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;

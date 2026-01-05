
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl opacity-70">Get in touch with our campus experts today.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-black text-primary mb-12">Visit Our Campus</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><MapPin /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Location</h4>
                <p className="text-neutralText">123, Campus Road, Near Metro Station, Bangalore - 560001</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><Phone /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Phone</h4>
                <p className="text-neutralText">+91 98765 43210 / 080-1234567</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><Mail /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Email</h4>
                <p className="text-neutralText">info@kcms.edu.in / admissions@kcms.edu.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-[3rem] p-12 border border-gray-100 animate-zoom-in">
          <h3 className="text-2xl font-black text-primary mb-8 text-center">Inquiry Form</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none" />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none" />
            </div>
            <input type="tel" placeholder="Mobile" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none" />
            <textarea placeholder="Message" rows={4} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none"></textarea>
            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all">Send Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

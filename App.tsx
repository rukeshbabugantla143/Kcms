
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisionMission from './pages/VisionMission';
import Leadership from './pages/Leadership';
import PrincipalMessage from './pages/PrincipalMessage';
import ChairmanDesk from './pages/ChairmanDesk';
import HistoryMilestones from './pages/HistoryMilestones';
import StudentLife from './pages/StudentLife';
import StudentSupport from './pages/StudentSupport';
import ClubsSocieties from './pages/ClubsSocieties';
import SportsCultural from './pages/SportsCultural';
import SocialInitiatives from './pages/SocialInitiatives';
import IQACHub from './pages/IQACHub';
import NAACPortal from './pages/NAACPortal';
import AntiRagging from './pages/AntiRagging';
import WomensCell from './pages/WomensCell';
import GrievanceRedressal from './pages/GrievanceRedressal';
import TeachingMethods from './pages/TeachingMethods';
import SkillDevelopment from './pages/SkillDevelopment';
import AcademicCalendar from './pages/AcademicCalendar';
import FacultyProfile from './pages/FacultyProfile';
import AlumniNetwork from './pages/AlumniNetwork';
import Infrastructure from './pages/Infrastructure';
import FacilityPage from './pages/FacilityPage';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GenericPage from './pages/GenericPage';
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
            <Route path="/about" element={<AboutUs />} />
            
            {/* Institutional Routes */}
            <Route path="/p/vision-mission" element={<VisionMission />} />
            <Route path="/p/leadership" element={<Leadership />} />
            <Route path="/p/principal" element={<PrincipalMessage />} />
            <Route path="/p/chairman" element={<ChairmanDesk />} />
            <Route path="/p/history" element={<HistoryMilestones />} />
            
            {/* Campus Life & Student Support Routes */}
            <Route path="/p/campus-life" element={<StudentLife />} />
            <Route path="/p/clubs" element={<ClubsSocieties />} />
            <Route path="/p/sports" element={<SportsCultural />} />
            <Route path="/p/student-support" element={<StudentSupport />} />
            <Route path="/p/social-initiatives" element={<SocialInitiatives />} />
            
            {/* Compliance & Administration Routes */}
            <Route path="/p/iqac" element={<IQACHub />} />
            <Route path="/p/naac" element={<NAACPortal />} />
            <Route path="/p/anti-ragging" element={<AntiRagging />} />
            <Route path="/p/womens-cell" element={<WomensCell />} />
            <Route path="/p/grievance" element={<GrievanceRedressal />} />
            <Route path="/p/partnerships" element={<GenericPage />} />
            <Route path="/p/location" element={<GenericPage />} />

            {/* Academic & Program Hub Routes */}
            <Route path="/p/teaching" element={<TeachingMethods />} />
            <Route path="/p/skills" element={<SkillDevelopment />} />
            <Route path="/p/calendar" element={<AcademicCalendar />} />
            <Route path="/p/faculty" element={<FacultyProfile />} />
            <Route path="/p/alumni" element={<AlumniNetwork />} />
            <Route path="/p/ug-courses" element={<GenericPage />} />
            <Route path="/p/pg-courses" element={<GenericPage />} />
            <Route path="/p/integrated" element={<GenericPage />} />
            <Route path="/p/certificates" element={<GenericPage />} />

            {/* Admissions & Placement Support Slugs */}
            <Route path="/p/eligibility" element={<GenericPage />} />
            <Route path="/p/scholarships" element={<GenericPage />} />
            <Route path="/p/placement-process" element={<GenericPage />} />
            <Route path="/p/placement-stats" element={<GenericPage />} />
            <Route path="/p/recruiters" element={<GenericPage />} />
            <Route path="/p/internships" element={<GenericPage />} />
            
            {/* Infrastructure & Facility Hubs */}
            <Route path="/p/infrastructure" element={<Infrastructure />} />
            <Route path="/p/library" element={<FacilityPage />} />
            <Route path="/p/computer-labs" element={<FacilityPage />} />
            <Route path="/p/science-labs" element={<FacilityPage />} />
            <Route path="/p/smart-classrooms" element={<FacilityPage />} />
            <Route path="/p/hostel" element={<FacilityPage />} />
            <Route path="/p/transport" element={<FacilityPage />} />
            <Route path="/p/auditorium" element={<FacilityPage />} />
            <Route path="/p/medical" element={<FacilityPage />} />
            <Route path="/p/gym" element={<FacilityPage />} />

            {/* Main Primary Pages */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Catch-all for PAGE_DATA slugs */}
            <Route path="/p/:slug" element={<FacilityPage />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <ApplyPopup />

        {/* Floating WhatsApp Action Button */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/919606994048" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <MessageSquare size={32} />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;

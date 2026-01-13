import React from 'react';
import { Course, Testimonial } from './types';
import { 
  Target, Shield, BookOpen, Users, Award, Landmark, Zap, History, Globe, Heart, 
  ShieldCheck, FileText, Calendar, GraduationCap, Laptop, Monitor, Library, 
  Building2, Bus, Coffee, Activity, Scale, CheckCircle, PhoneCall, Microscope, 
  MapPin, Handshake, Briefcase, TrendingUp, BarChart, Rocket, Globe2, Trophy, 
  Cpu, Code, PieChart, PlaneTakeoff, Music, Stethoscope, Dumbbell, Clock, Info,
  Search, ClipboardCheck, Layout, Lightbulb, MousePointer2, CpuIcon, Eye, Radio,
  Smartphone, Thermometer, UserCheck
} from 'lucide-react';

export const NAVIGATION: any[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    mega: true,
    columns: [
      {
        title: 'Institutional',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Vision & Mission', href: '/p/vision-mission' },
          { label: 'Principal Message', href: '/p/principal' },
          { label: 'Chairman\'s Desk', href: '/p/chairman' },
          { label: 'History & Milestones', href: '/p/history' },
          { label: 'Leadership Hub', href: '/p/leadership' },
        ]
      },
      {
        title: 'Campus Life',
        links: [
          { label: 'Campus Life Overview', href: '/p/campus-life' },
          { label: 'Student Support Hub', href: '/p/student-support' },
          { label: 'Clubs & Societies', href: '/p/clubs' },
          { label: 'Sports & Cultural', href: '/p/sports' },
          { label: 'Social Initiatives', href: '/p/social-initiatives' },
        ]
      },
      {
        title: 'Compliance',
        links: [
          { label: 'IQAC Hub', href: '/p/iqac' },
          { label: 'NAAC Portal', href: '/p/naac' },
          { label: 'Anti Ragging Cell', href: '/p/anti-ragging' },
          { label: 'Women\'s Cell', href: '/p/womens-cell' },
          { label: 'Grievance Redressal', href: '/p/grievance' },
        ]
      }
    ]
  },
  { 
    label: 'Academics', 
    href: '/courses',
    mega: true,
    columns: [
      {
        title: 'Programs Hub',
        links: [
          { label: 'BCA Department', href: '/course/bca' },
          { label: 'BBA Department', href: '/course/bba' },
          { label: 'B.Com Department', href: '/course/bcom' },
          { label: 'MBA Department', href: '/course/mba' },
          { label: 'Tourism Dept (BTTM/MTTM)', href: '/course/mttm' },
          { label: 'Integrated Programs', href: '/p/integrated' },
        ]
      },
      {
        title: 'Academic Support',
        links: [
          { label: 'Teaching Methods', href: '/p/teaching' },
          { label: 'Skill Development', href: '/p/skills' },
          { label: 'Academic Calendar', href: '/p/calendar' },
          { label: 'Faculty Profile', href: '/p/faculty' },
          { label: 'Alumni Network', href: '/p/alumni' },
        ]
      },
      {
        highlight: {
          title: 'Admissions 2026',
          text: 'Apply for admission 2026 Bangalore at KCMS.',
          cta: 'Apply Now',
          href: '/admissions'
        }
      }
    ]
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Placements', href: '/placements' },
  { label: 'Facilities', href: '/p/infrastructure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'AICTE', href: '/aicte' },
];

export const PAGE_DATA: Record<string, any> = {
  // --- 1. CENTRAL LIBRARY ---
  'library': {
    title: 'Central Library',
    subtitle: 'Best Infrastructure in Bangalore - Knowledge Hub',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767689980/download_4_gfxni9.png',
    sections: [
      { 
        type: 'text', 
        title: 'Library Overview', 
        content: 'The Central Library of KCMS Bangalore is a hallmark of the best infrastructure in Bangalore, providing access to a wide range of learning resources and digital gateways for academic excellence.' 
      },
      { 
        type: 'grid', 
        title: 'Vision & Objectives', 
        items: [
          { title: 'Research Culture', desc: 'Promote intensive research culture among scholars.', icon: <Search /> },
          { title: 'Curriculum Support', desc: 'Aligned with University programs.', icon: <Target /> },
          { title: 'Digital Accessibility', desc: 'Global resource availability.', icon: <Globe /> },
          { title: 'Independent Learning', desc: 'Lifelong learning commitment.', icon: <Lightbulb /> }
        ]
      }
    ]
  },
  // --- 2. SMART CLASSROOMS ---
  'smart-classrooms': {
    title: 'Smart Classrooms',
    subtitle: 'Digitally Enabled Learning Spaces',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png',
    sections: [
      { 
        type: 'text', 
        title: 'Modern Pedagogy', 
        content: 'KCMS features interactive smart classrooms equipped with 4K interactive boards, high-definition audio systems, and high-speed fiber-optic internet to facilitate a seamless digital learning experience.' 
      },
      { 
        type: 'list', 
        title: 'Key Features', 
        items: [
          'Interactive 4K Smart Boards',
          'Acoustically Designed Lecture Halls',
          'Digital Projection Systems',
          'High-Speed Wi-Fi Connectivity',
          'Ergonomic Seating Arrangements'
        ]
      }
    ]
  },
  // --- 3. HOSTEL FACILITY ---
  'hostel': {
    title: 'Hostel Facility',
    subtitle: 'Safe and Comfortable Living on Campus',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767693347/download_13_pobgl1.png',
    sections: [
      { 
        type: 'text', 
        title: 'A Home Away from Home', 
        content: 'KCMS offers separate residential facilities for boys and girls, ensuring a secure environment with modern amenities, nutritious food, and round-the-clock supervision.' 
      },
      { 
        type: 'grid', 
        title: 'Hostel Amenities', 
        items: [
          { title: 'Security', desc: '24/7 CCTV surveillance and security staff.', icon: <Shield /> },
          { title: 'Dining', desc: 'Hygienic multi-cuisine mess facilities.', icon: <Coffee /> },
          { title: 'Wi-Fi', desc: 'High-speed internet for research and leisure.', icon: <Globe /> },
          { title: 'Health', desc: 'On-campus medical assistance and emergency support.', icon: <Activity /> }
        ]
      }
    ]
  }
};

export const COURSES_DATA: Record<string, any> = {
  bca: {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Top BCA college in Bangalore with placements. Join KCMS for industry-aligned tech education and career growth.',
    fullDesc: 'The BCA department at KCMS is recognized as one of the premier technical hubs in Bangalore. We offer high-tech labs and a modern curriculum focusing on software engineering, Artificial Intelligence, Cloud Computing, and Cybersecurity.',
    objectives: [
      'Master core programming paradigms (Java, Python, C++).',
      'Understand advanced cloud infrastructure.',
      'Develop agile software mindset.',
      'BCA admission Bangalore available for 2026 batch.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Programming Fundamentals, Math, Digital Logic.' },
      { sem: 'Sem 3-4', focus: 'Data Structures, OS, DBMS, Web Technologies.' },
      { sem: 'Sem 5-6', focus: 'AI & ML, Cloud Computing, Mobile Apps, Final Project.' }
    ],
    facultyStats: { phd: '45%', experience: '12+ Years Avg.', publications: '150+' },
    labInfo: [
      { icon: <Code />, title: 'Full Stack Lab', desc: 'Equipped with MERN stack tools.' },
      { icon: <Cpu />, title: 'Hardware & IoT Lab', desc: 'Experimental learning kits.' }
    ],
    opportunities: ['Software Engineer', 'Full Stack Developer', 'Cyber Security Analyst', 'System Administrator'],
    achievements: [
      '100% placement record in tier-1 tech companies.',
      'Consistent ranking among top BCA colleges in Bangalore.'
    ]
  },
  mba: {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    category: 'Postgraduate',
    duration: '2 Years',
    shortDesc: 'Premier MBA program in Bangalore with 95% placement support. Dual specialization in Fintech, HR, and Analytics.',
    fullDesc: 'KCMS is among the top MBA colleges in Bangalore. Our program focuses on strategic leadership, corporate ethics, and data-driven decision making, making us the preferred choice for aspiring managers.',
    objectives: [
      'Develop strategic leadership skills.',
      'Enhance data-driven decision making.',
      'MBA admission Bangalore 2026 now open.',
      'Build entrepreneurial mindset.'
    ],
    curriculum: [
      { sem: 'Sem 1', focus: 'Org Behavior, Econ, Accounting, Marketing Management.' },
      { sem: 'Sem 2-3', focus: 'Financial Management, HR, Operations, Analytics Electives.' },
      { sem: 'Sem 4', focus: 'Strategic Management, Ethics, Capstone Project.' }
    ],
    facultyStats: { phd: '60%', experience: '15+ Years Avg.', industry: 'Ex-CXO Mentors' },
    labInfo: [
      { icon: <PieChart />, title: 'Financial Terminal', desc: 'Real-time stock market tracking.' },
      { icon: <TrendingUp />, title: 'Business Analytics Lab', desc: 'Advanced licenses for Tableau and PowerBI.' }
    ],
    opportunities: ['Brand Manager', 'Investment Banker', 'Management Consultant', 'Supply Chain Head'],
    achievements: [
      'Best B-School Award 2024 for Industry Engagement.',
      'Top-ranked management college in Bangalore.'
    ]
  },
  bba: {
    id: 'bba',
    name: 'Bachelor of Business Administration (BBA)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Foundation of modern management. Top-ranked BBA college with internship support in Bangalore.',
    fullDesc: 'Recognized for academic excellence, the BBA program at KCMS prepares students for global leadership roles. We provide a blend of classroom theory and practical corporate exposure.',
    objectives: [
      'Principles of management.',
      'Professional soft skills.',
      'BBA admission in Bangalore 2026.',
      'Practical business simulations.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Management Basics, Business Law, Communication.' },
      { sem: 'Sem 3-4', focus: 'Finance, HR, Marketing, Entrepreneurship.' },
      { sem: 'Sem 5-6', focus: 'Strategic Management, Internships, Specializations.' }
    ],
    facultyStats: { phd: '30%', experience: '10+ Years Avg.', industry: '80% Industry Linkage' },
    labInfo: [
      { icon: <Users />, title: 'Soft Skills Lab', desc: 'Presentation recording facility.' },
      { icon: <Monitor />, title: 'IT for Leaders', desc: 'ERP training center.' }
    ],
    opportunities: ['HR Associate', 'Sales Executive', 'Retail Manager', 'Administrative Officer'],
    achievements: [
      'Top-ranked BBA college with placement support in Bangalore.',
      'Winner of National Level Management Fest.'
    ]
  },
  bcom: {
    id: 'bcom',
    name: 'Bachelor of Commerce (B.Com)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Excellence in Commerce and Accounting. Best B.Com college for CA and ACCA aspirants.',
    fullDesc: 'KCMS offers a robust B.Com program designed for those seeking careers in Finance, Audit, and Taxation. We provide additional training for professional certifications alongside the university degree.',
    objectives: [
      'Mastery over financial accounting.',
      'B.Com admission in Bangalore 2026.',
      'Global banking operations.',
      'Digital bookkeeping with Tally.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Financial Accounting, Law, Business Stats.' },
      { sem: 'Sem 3-4', focus: 'Corporate Accounting, Income Tax, Audit.' },
      { sem: 'Sem 5-6', focus: 'GST, Financial Management, Costing.' }
    ],
    facultyStats: { phd: '35%', professional: 'CA/CMA Mentors', experience: '14+ Years' },
    labInfo: [
      { icon: <CheckCircle />, title: 'Accounting Lab', desc: 'Training for Tally Prime.' },
      { icon: <Landmark />, title: 'Fin-Hub', desc: 'Banking exam resource center.' }
    ],
    opportunities: ['Accountant', 'Tax Consultant', 'Auditor', 'Financial Analyst'],
    achievements: [
      'Highest number of students clearing CA Foundation.',
      'Best commerce college in Bangalore with placement.'
    ]
  },
  mttm: {
    id: 'mttm',
    name: 'Bachelor & Master of Tourism and Travel Management',
    category: 'UG / PG',
    duration: '3Y / 2Y',
    shortDesc: 'Comprehensive Tourism and Travel management courses. Best BTTM/MTTM college in Bangalore.',
    fullDesc: 'Join the industry-leading Tourism department at KCMS. We offer global hospitality training and travel management certifications that prepare you for the worldwide tourism industry.',
    objectives: [
      'Master airline operations.',
      'Sustainable tourism management.',
      'MTTM college in Bangalore 2026 intake.',
      'Global destination marketing.'
    ],
    curriculum: [
      { sem: 'Core', focus: 'Travel Geography, IATA Regulations, Ticketing.' },
      { sem: 'Advanced', focus: 'Cruise Management, Event Planning, Hotel Ops.' },
      { sem: 'Applied', focus: 'Tour Guiding, Global Distribution Systems.' }
    ],
    facultyStats: { phd: '25%', industry: 'IATA Certified', experience: '18+ Years' },
    labInfo: [
      { icon: <PlaneTakeoff />, title: 'GDS Terminal', desc: 'Hands-on training on Amadeus.' },
      { icon: <Globe />, title: 'Cultural Studio', desc: 'Global itinerary planning.' }
    ],
    opportunities: ['Airline Manager', 'Cruise Consultant', 'Tour Operator', 'Hotel Manager'],
    achievements: [
      'Top-rated hospitality and tourism college in Bangalore.',
      'Partnerships with global airlines.'
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "MBA 2022 Graduate", text: "KCMS provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding and the faculty mentorship is life-changing!", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Sneha Patil", role: "BCA 2021 Graduate", text: "The faculty in the computer department is extremely supportive. I got placed in a top MNC right after graduation thanks to the skill development cell.", image: "https://i.pravatar.cc/150?u=2" },
  { name: "John Doe", role: "BBA 2023 Student", text: "The vibrant campus life and the focus on character building make KCMS a unique place to grow as a professional and a human.", image: "https://i.pravatar.cc/150?u=3" }
];
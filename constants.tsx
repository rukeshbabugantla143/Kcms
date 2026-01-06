
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
          title: 'Admissions 2025',
          text: 'Secure your future in the upcoming academic session.',
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
];

export const PAGE_DATA: Record<string, any> = {
  // --- 1. CENTRAL LIBRARY ---
  'library': {
    title: 'Central Library',
    subtitle: 'A Knowledge Hub for Academic Excellence',
    heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'text', 
        title: 'Library Overview', 
        content: 'The Central Library of Karnataka College of Management & Science serves as the academic heart of the institution, providing access to a wide range of learning resources that support teaching, learning, and research activities. It is a professional environment dedicated to students, faculty, and researchers, fostering a culture of academic rigor and empirical discovery.' 
      },
      { 
        type: 'grid', 
        title: 'Vision & Objectives', 
        items: [
          { title: 'Research Culture', desc: 'Promote deep reading and intensive research culture among scholars.', icon: <Search /> },
          { title: 'Curriculum Support', desc: 'Maintain an updated repository aligned with University programs.', icon: <Target /> },
          { title: 'Digital Accessibility', desc: 'Ensure global resource availability through digital gateways.', icon: <Globe /> },
          { title: 'Independent Learning', desc: 'Encourage students to become self-reliant lifelong learners.', icon: <Lightbulb /> }
        ]
      },
      { 
        type: 'grid', 
        title: 'Library Resources', 
        items: [
          { title: 'Core Collection', desc: '50,000+ volumes of Textbooks and Reference materials.', icon: <BookOpen /> },
          { title: 'Periodicals', desc: 'Subscription to 100+ National and International Journals.', icon: <FileText /> },
          { title: 'Digital Media', desc: 'Access to CD/DVD repositories and online databases.', icon: <Layout /> },
          { title: 'Project Archives', desc: 'Preserved collection of student dissertations and reports.', icon: <History /> }
        ]
      },
      { 
        type: 'text', 
        title: 'Digital Library & E-Resources', 
        content: 'Equipped with the latest high-speed computer terminals, our digital section provides seamless access to IEEE, J-Gate, DELNET, and other major academic databases. Students can browse thousands of E-books and E-journals through our campus-wide fiber-optic network.' 
      },
      { 
        type: 'list', 
        title: 'Infrastructure & Amenities', 
        items: [
          'Spacious Reading Hall with ergonomic seating for 200+ students.',
          'Dedicated OPAC (Online Public Access Catalog) terminals.',
          'High-speed Wi-Fi enabled environment for personal laptops.',
          'Separate zones for serious study and collaborative research.',
          'Eco-friendly lighting and climate-controlled interiors.'
        ]
      },
      { 
        type: 'grid', 
        title: 'Library Services', 
        items: [
          { title: 'Circulation', desc: 'Automated book lending and return via LibSoft.', icon: <Zap /> },
          { title: 'Reference', desc: 'Specialized assistance for complex research queries.', icon: <Info /> },
          { title: 'Reprography', desc: 'On-site photocopying and digital scanning facilities.', icon: <FileText /> },
          { title: 'Reservations', desc: 'Advance book booking through the digital portal.', icon: <ClipboardCheck /> }
        ]
      },
      { 
        type: 'list', 
        title: 'Rules & Regulations', 
        items: [
          'Possession of a valid Institutional ID card is mandatory for entry.',
          'Strict silence and professional conduct must be maintained at all times.',
          'Standard overdue fine policy applies for books not returned on time.',
          'Digital terminals are reserved for academic and research purposes only.',
          'Careful handling of library property is a shared responsibility.'
        ]
      },
      { 
        type: 'table', 
        title: 'Operating Timings', 
        headers: ['Working Days', 'Opening Hours'],
        rows: [
          ['Monday to Friday', '9:00 AM – 6:00 PM'],
          ['Saturday', '9:00 AM – 2:00 PM'],
          ['Sundays & Public Holidays', 'Closed']
        ]
      }
    ]
  },

  // --- 2. COMPUTER LABS ---
  'computer-labs': {
    title: 'High-Tech Computer Labs',
    subtitle: 'Computing Power for the Next Gen Innovators',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'text', 
        title: 'Computational Excellence', 
        content: 'The Computer Labs at KCMS provide a professional IT environment equivalent to corporate tech hubs. We focus on hands-on proficiency in software engineering, data science, and cloud architecture.' 
      },
      { 
        type: 'grid', 
        title: 'Hardware & Connectivity', 
        items: [
          { title: 'Intel Core i9', desc: 'Latest generation processing power for heavy computation.', icon: <CpuIcon /> },
          { title: '1 Gbps Speed', desc: 'Uninterrupted, high-speed fiber internet for every node.', icon: <Zap /> },
          { title: 'Dual Display', desc: 'Optimized workstations for UI/UX and complex coding.', icon: <Monitor /> },
          { title: 'Enterprise Servers', desc: 'Local rack servers for database and hosting projects.', icon: <Layout /> }
        ]
      },
      { 
        type: 'list', 
        title: 'Specialized Labs', 
        items: [
          'Artificial Intelligence & Machine Learning Research Cell.',
          'Full-Stack Web Development Bootcamp Studio.',
          'Cyber Security & Ethical Hacking Lab.',
          'Business Analytics & Data Visualization Center.',
          'Creative Multimedia & VR/AR Development Wing.'
        ]
      }
    ]
  },

  // --- 3. SCIENCE LABS ---
  'science-labs': {
    title: 'Science Labs',
    subtitle: 'Where Theory Meets Tangible Discovery',
    heroImage: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'text', 
        title: 'The Scientific Approach', 
        content: 'Our Science Labs are centers of empirical inquiry. We ensure students bridge the gap between classroom theory and practical experimentation through industrial-grade instrumentation.' 
      },
      { 
        type: 'grid', 
        title: 'Laboratories', 
        items: [
          { title: 'Physics Hub', desc: 'Focused on Mechanics, Optics, and Modern Physics.', icon: <Zap /> },
          { title: 'Chemistry Cell', desc: 'Equipped for organic and inorganic synthesis.', icon: <Shield /> },
          { title: 'Electronics Lab', desc: 'Microprocessor and VLSI testing stations.', icon: <Microscope /> },
          { title: 'Innovation Cell', desc: 'Rapid prototyping and student invention space.', icon: <Rocket /> }
        ]
      },
      { 
        type: 'list', 
        title: 'Safety Standards', 
        items: [
          'Certified Fire and Chemical safety protocols.',
          'Individual protective gear (PPE) for every student.',
          'Professional lab assistants available during working hours.',
          'Automated emergency shut-off systems in all zones.'
        ]
      }
    ]
  },

  // --- 4. SMART CLASSROOMS ---
  'smart-classrooms': {
    title: 'Smart Classrooms',
    subtitle: 'Interactive Learning in the Digital Age',
    heroImage: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'text', 
        title: 'Interactive Pedagogy', 
        content: 'We have transformed the traditional classroom into a collaborative workshop. Digital tools and modular seating encourage active participation and better retention of complex concepts.' 
      },
      { 
        type: 'grid', 
        title: 'Smart Features', 
        items: [
          { title: '4K Smart Boards', desc: 'Touch-enabled interactive displays for visualization.', icon: <Layout /> },
          { title: 'Lecture Capture', desc: 'High-def recording of all sessions for review.', icon: <Monitor /> },
          { title: 'Dolby Audio', desc: 'Crystal clear verbal delivery in every corner.', icon: <Music /> },
          { title: 'Climate Control', desc: 'Fully air-conditioned zones for student comfort.', icon: <Thermometer /> }
        ]
      }
    ]
  },

  // --- 5. HOSTEL FACILITY ---
  'hostel': {
    title: 'Hostel Facility',
    subtitle: 'A Secure Home Away From Home',
    heroImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'grid', 
        title: 'Living Standards', 
        items: [
          { title: 'Separate Wings', desc: 'Dedicated, safe blocks for Boys and Girls.', icon: <Users /> },
          { title: 'Nutritional Mess', desc: 'Hygienic veg and non-veg dining facilities.', icon: <Coffee /> },
          { title: '24/7 Security', desc: 'Round-the-clock CCTV and professional guards.', icon: <ShieldCheck /> },
          { title: 'High-Speed Wi-Fi', desc: 'Continuous connectivity for academic research.', icon: <Globe2 /> }
        ]
      },
      { 
        type: 'list', 
        title: 'Hostel Amenities', 
        items: [
          'Spacious, ventilated rooms with modular furniture.',
          'Solar water heating systems for sustainable living.',
          'Indoor recreation zone with Table Tennis and Pool.',
          'On-call medical assistance for residents.',
          'Laundry and professional cleaning services.'
        ]
      }
    ]
  },

  // --- 6. TRANSPORT SYSTEM ---
  'transport': {
    title: 'Transport System',
    subtitle: 'Connectivity with Punctuality',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'grid', 
        title: 'Service Highlights', 
        items: [
          { title: 'City-Wide Coverage', desc: 'Routes covering all major Bangalore nodes.', icon: <MapPin /> },
          { title: 'GPS Tracking', desc: 'Real-time monitoring for student safety.', icon: <ShieldCheck /> },
          { title: 'Modern Fleet', desc: 'Luxury academic buses with ergonomic seating.', icon: <Bus /> },
          { title: 'Verified Drivers', desc: 'Experienced crew with clean background checks.', icon: <UserCheck /> }
        ]
      }
    ]
  },

  // --- 7. AUDITORIUM ---
  'auditorium': {
    title: 'KCMS Auditorium',
    subtitle: 'The Stage for Grandeur and Innovation',
    heroImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'grid', 
        title: 'Venue Specs', 
        items: [
          { title: '500+ Capacity', desc: 'Spacious seating for large academic events.', icon: <Users /> },
          { title: 'Acoustic Control', desc: 'Sound-proof walls and professional reverb gear.', icon: <Radio /> },
          { title: 'LED Wall', desc: 'Massive digital backdrop for presentations.', icon: <Monitor /> },
          { title: 'Green Rooms', desc: 'Professional backstage for cultural fests.', icon: <Layout /> }
        ]
      }
    ]
  },

  // --- 8. MEDICAL FACILITY ---
  'medical': {
    title: 'Medical Facility',
    subtitle: 'Health and Safety First',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'grid', 
        title: 'Health Hub', 
        items: [
          { title: 'Infirmary', desc: 'On-campus primary care and first-aid hub.', icon: <Stethoscope /> },
          { title: 'Ambulance', desc: '24/7 emergency vehicle on standby.', icon: <Activity /> },
          { title: 'Health Camps', desc: 'Regular wellness and eye checkup drives.', icon: <Eye /> },
          { title: 'Counseling', desc: 'Confidential mental health support wing.', icon: <Heart /> }
        ]
      }
    ]
  },

  // --- 9. SPORTS COMPLEX & GYM ---
  'gym': {
    title: 'Sports & Fitness',
    subtitle: 'Empowering Physical and Mental Vitality',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    sections: [
      { 
        type: 'grid', 
        title: 'Athletic Centers', 
        items: [
          { title: 'Pro-Gym', desc: 'Full range of cardio and strength equipment.', icon: <Dumbbell /> },
          { title: 'Indoor Arena', desc: 'Badminton, Table Tennis, and Chess zones.', icon: <Target /> },
          { title: 'Outdoor Turf', desc: 'Professional grounds for Cricket and Football.', icon: <Trophy /> },
          { title: 'Yoga Deck', desc: 'Dedicated space for morning mindfulness.', icon: <Heart /> }
        ]
      }
    ]
  }
};

export const COURSES_DATA: Record<string, any> = {
  bca: {
    id: 'bca',
    name: 'Department of Computer Applications (BCA)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Crafting the next generation of software architects and tech innovators.',
    fullDesc: 'The BCA department at KCMS is a center of excellence for technical education. We focus on the intersection of theoretical computer science and modern industry applications like DevOps, AI, and Cybersecurity.',
    objectives: [
      'Master core programming paradigms (Java, Python, C++).',
      'Understand advanced cloud infrastructure and database management.',
      'Develop agile software development mindsets.',
      'Foster a research-oriented approach to problem-solving.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Programming Fundamentals, Math, Digital Logic.' },
      { sem: 'Sem 3-4', focus: 'Data Structures, OS, DBMS, Web Technologies.' },
      { sem: 'Sem 5-6', focus: 'AI & ML, Cloud Computing, Mobile Apps, Final Project.' }
    ],
    facultyStats: { phd: '45%', experience: '12+ Years Avg.', publications: '150+' },
    labInfo: [
      { icon: <Code />, title: 'Full Stack Lab', desc: 'Equipped with MERN stack tools and cloud servers.' },
      { icon: <Cpu />, title: 'Hardware & IoT Lab', desc: 'Raspberry Pi and Arduino kits for experimental learning.' }
    ],
    opportunities: ['Software Engineer', 'Full Stack Developer', 'Cyber Security Analyst', 'System Administrator'],
    achievements: [
      '1st Place in Regional Inter-College Hackathon 2023.',
      'Student patent filed for Smart Traffic Management System.',
      '100% placement record in tier-1 tech companies.'
    ]
  },
  mba: {
    id: 'mba',
    name: 'Department of Management Studies (MBA)',
    category: 'Postgraduate',
    duration: '2 Years',
    shortDesc: 'Global leadership through strategic dual specialization.',
    fullDesc: 'Our MBA program is ranked among the top B-schools in the region. We offer a dual-specialization model that allows students to combine core management with high-growth sectors like Analytics and Fintech.',
    objectives: [
      'Develop cross-functional strategic leadership skills.',
      'Enhance data-driven decision making capabilities.',
      'Foster global business perspective through international immersions.',
      'Build entrepreneurial mindset for new-age venture creation.'
    ],
    curriculum: [
      { sem: 'Sem 1', focus: 'Org Behavior, Econ, Accounting, Marketing Management.' },
      { sem: 'Sem 2-3', focus: 'Financial Management, HR, Operations, Analytics Electives.' },
      { sem: 'Sem 4', focus: 'Strategic Management, Ethics, Capstone Project.' }
    ],
    facultyStats: { phd: '60%', experience: '15+ Years Avg.', industry: 'Ex-CXO Mentors' },
    labInfo: [
      { icon: <PieChart />, title: 'Financial Terminal', desc: 'Real-time stock market tracking and trading simulation.' },
      { icon: <TrendingUp />, title: 'Business Analytics Lab', desc: 'Advanced licenses for SPSS, Tableau, and PowerBI.' }
    ],
    opportunities: ['Brand Manager', 'Investment Banker', 'Management Consultant', 'Supply Chain Head'],
    achievements: [
      'Best B-School Award 2024 for Industry Engagement.',
      'Top 10 Global Immersion Tour to Dubai Hub.',
      'Successful incubation of 5 student startups.'
    ]
  },
  bba: {
    id: 'bba',
    name: 'Department of Business Administration (BBA)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Foundation of modern management and organizational leadership.',
    fullDesc: 'The BBA department focuses on creating professional managers who are ready for the global economy. We combine classroom rigor with frequent industry interactions.',
    objectives: [
      'Understand core principles of management and administration.',
      'Develop professional communication and soft skills.',
      'Master the basics of marketing, finance, and human resources.',
      'Engage in practical business simulations and case studies.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Management Basics, Business Law, Communication.' },
      { sem: 'Sem 3-4', focus: 'Finance, HR, Marketing, Entrepreneurship.' },
      { sem: 'Sem 5-6', focus: 'Strategic Management, Internships, Specializations.' }
    ],
    facultyStats: { phd: '30%', experience: '10+ Years Avg.', industry: '80% Industry Linkage' },
    labInfo: [
      { icon: <Users />, title: 'Soft Skills Lab', desc: 'State-of-the-art language and presentation recording facility.' },
      { icon: <Monitor />, title: 'IT for Managers', desc: 'Advanced Excel and ERP training center.' }
    ],
    opportunities: ['HR Associate', 'Sales Executive', 'Retail Manager', 'Administrative Officer'],
    achievements: [
      'Winner of National Level Management Fest "Srujana".',
      'Consistent 90% placement in MNC retail and banking sectors.'
    ]
  },
  bcom: {
    id: 'bcom',
    name: 'Department of Commerce (B.Com)',
    category: 'Undergraduate',
    duration: '3 Years',
    shortDesc: 'Professional excellence in accounting and financial regulation.',
    fullDesc: 'The B.Com program at KCMS is designed for students aiming for careers in CA, ACCA, and corporate finance. We offer integrated professional training modules.',
    objectives: [
      'Gain mastery over financial and cost accounting standards.',
      'Learn the complexities of taxation and corporate law.',
      'Understand global banking and investment operations.',
      'Utilize Tally and SAP for digital bookkeeping.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Financial Accounting, Law, Business Stats.' },
      { sem: 'Sem 3-4', focus: 'Corporate Accounting, Income Tax, Audit.' },
      { sem: 'Sem 5-6', focus: 'GST, Financial Management, Costing.' }
    ],
    facultyStats: { phd: '35%', professional: 'CA/CMA Mentors', experience: '14+ Years' },
    labInfo: [
      { icon: <CheckCircle />, title: 'Accounting Lab', desc: 'Dedicated training for Tally Prime and GST filing.' },
      { icon: <Landmark />, title: 'Fin-Hub', desc: 'Resource center for banking exam preparations.' }
    ],
    opportunities: ['Accountant', 'Tax Consultant', 'Auditor', 'Financial Analyst'],
    achievements: [
      'Highest number of students clearing CA Foundation in the first attempt.',
      'Institutional partner for ACCA global certifications.'
    ]
  },
  mttm: {
    id: 'mttm',
    name: 'Dept. of Tourism & Hospitality (BTTM/MTTM)',
    category: 'UG / PG',
    duration: '3Y / 2Y',
    shortDesc: 'Global career in the world\'s fastest-growing industry.',
    fullDesc: 'The Tourism department at KCMS is a pioneer in travel education. We provide a 360-degree view of the industry, from sustainable tourism to airline management.',
    objectives: [
      'Master airline operations and GDS ticketing systems.',
      'Understand sustainable tourism and heritage management.',
      'Develop cross-cultural communication and hospitality skills.',
      'Explore global destination marketing strategies.'
    ],
    curriculum: [
      { sem: 'Core', focus: 'Travel Geography, IATA Regulations, Ticketing.' },
      { sem: 'Advanced', focus: 'Cruise Management, Event Planning, Hotel Ops.' },
      { sem: 'Applied', focus: 'Tour Guiding, Global Distribution Systems.' }
    ],
    facultyStats: { phd: '25%', industry: 'IATA Certified', experience: '18+ Years' },
    labInfo: [
      { icon: <PlaneTakeoff />, title: 'GDS Terminal', desc: 'Hands-on training on Amadeus and Galileo systems.' },
      { icon: <Globe />, title: 'Cultural Studio', desc: 'Simulations for global itinerary planning.' }
    ],
    opportunities: ['Airline Manager', 'Cruise Consultant', 'Tour Operator', 'Hotel Manager'],
    achievements: [
      'Placement partnerships with Emirates and Qatar Airways.',
      'Winner of the Regional Heritage Tourism Award.'
    ]
  },
  integrated: {
    id: 'integrated',
    name: 'Integrated Programs Cell',
    category: 'Integrated',
    duration: '5 Years',
    shortDesc: 'A unified 5-year journey from PUC to Master\'s degree.',
    fullDesc: 'Our Integrated programs allow students to save one academic year and focus deeply on their specialization without the hurdles of multiple entrance exams.',
    objectives: [
      'Provide a continuous 5-year academic roadmap.',
      'Integrate UG basics with PG advanced strategic modules.',
      'Save time through streamlined transition processes.',
      'Early industry exposure through long-term internships.'
    ],
    curriculum: [
      { sem: 'Y1-Y3', focus: 'Foundational Undergraduate Core Subjects.' },
      { sem: 'Y4-Y5', focus: 'Advanced Specialization & Strategic Management.' }
    ],
    facultyStats: { phd: '50%', experience: '20+ Years', mentorship: 'Integrated Focus' },
    labInfo: [
      { icon: <Zap />, title: 'Innovation Lab', desc: 'Cross-functional space for long-term project development.' },
      { icon: <Handshake />, title: 'Industry Cell', desc: 'Dedicated corporate liaison for 5-year track students.' }
    ],
    opportunities: ['Senior Management Roles', 'Research Scholars', 'Corporate Strategy', 'Entreprenuer'],
    achievements: [
      '90% of students secure PPOs by the end of Year 4.',
      'Cohesive curriculum praised by the Academic Council.'
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "MBA 2022 Graduate", text: "KCMS provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding and the faculty mentorship is life-changing!", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Sneha Patil", role: "BCA 2021 Graduate", text: "The faculty in the computer department is extremely supportive. I got placed in a top MNC right after graduation thanks to the skill development cell.", image: "https://i.pravatar.cc/150?u=2" },
  { name: "John Doe", role: "BBA 2023 Student", text: "The vibrant campus life and the focus on character building make KCMS a unique place to grow as a professional and a human.", image: "https://i.pravatar.cc/150?u=3" }
];

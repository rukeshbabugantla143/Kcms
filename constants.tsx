
import { Course, Testimonial } from './types';

export const NAVIGATION: any[] = [
  { label: 'Home', href: '#/' },
  { 
    label: 'About', 
    href: '#/about',
    mega: true,
    columns: [
      {
        title: 'Institutional',
        links: [
          { label: 'About Us', href: '#/about' },
          { label: 'Vision & Mission', href: '#/p/vision-mission' },
          { label: 'Principal Message', href: '#/p/principal' },
          { label: 'Chairman\'s Desk', href: '#/p/chairman' },
          { label: 'History & Milestones', href: '#/p/history' },
        ]
      },
      {
        title: 'Campus Life',
        links: [
          { label: 'Campus Life', href: '#/p/campus-life' },
          { label: 'Student Support', href: '#/p/student-support' },
          { label: 'Clubs & Societies', href: '#/p/clubs' },
          { label: 'Sports & Cultural', href: '#/p/sports' },
        ]
      },
      {
        title: 'Compliance',
        links: [
          { label: 'IQAC', href: '#/p/iqac' },
          { label: 'NAAC', href: '#/p/naac' },
          { label: 'Anti Ragging', href: '#/p/anti-ragging' },
          { label: 'Women\'s Cell', href: '#/p/womens-cell' },
          { label: 'Grievance Redressal', href: '#/p/grievance' },
        ]
      }
    ]
  },
  { 
    label: 'Academics', 
    href: '#/courses',
    mega: true,
    columns: [
      {
        title: 'Programs Hub',
        links: [
          { label: 'UG Courses Overview', href: '#/p/ug-courses' },
          { label: 'PG Courses Overview', href: '#/p/pg-courses' },
          { label: 'Integrated Courses', href: '#/p/integrated' },
          { label: 'Certificate Courses', href: '#/p/certificates' },
        ]
      },
      {
        title: 'Excellence',
        links: [
          { label: 'Teaching Methodology', href: '#/p/teaching' },
          { label: 'Skill Development', href: '#/p/skills' },
          { label: 'Academic Calendar', href: '#/p/calendar' },
          { label: 'Faculty Profile', href: '#/p/faculty' },
        ]
      },
      {
        highlight: {
          title: 'Admissions 2025',
          text: 'Apply now for various Undergraduate and Postgraduate programs.',
          cta: 'Apply Now',
          href: '#/admissions'
        }
      }
    ]
  },
  { label: 'Admissions', href: '#/admissions' },
  { label: 'Placements', href: '#/placements' },
  { 
    label: 'Facilities', 
    href: '#/p/infrastructure',
    mega: true,
    columns: [
      {
        title: 'Academic Labs',
        links: [
          { label: 'Central Library', href: '#/p/library' },
          { label: 'Computer Labs', href: '#/p/computer-labs' },
          { label: 'Science Labs', href: '#/p/science-labs' },
          { label: 'Smart Classrooms', href: '#/p/smart-classrooms' },
        ]
      },
      {
        title: 'Amenities',
        links: [
          { label: 'Hostel Facility', href: '#/p/hostel' },
          { label: 'Transport System', href: '#/p/transport' },
          { label: 'Auditorium', href: '#/p/auditorium' },
          { label: 'Medical Facility', href: '#/p/medical' },
          { label: 'Gym & Sports Complex', href: '#/p/sports' },
        ]
      }
    ]
  },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Contact', href: '#/contact' },
];

export const PAGE_DATA: Record<string, any> = {
  'vision-mission': {
    title: 'Vision & Mission',
    subtitle: 'Our commitment to excellence and social responsibility.',
    content: 'KCMS envisions being a world-class center for learning, focusing on innovation and ethics. Our mission is to provide transformative education that bridges the gap between traditional wisdom and modern technology.',
    highlights: ['UGC Recognition', 'Social Responsibility', 'Holistic Development', 'Global Excellence']
  },
  'principal': {
    title: 'Principal\'s Message',
    subtitle: 'A warm welcome from our academic leader.',
    content: 'Welcome to KCMS. Our institution is built on the pillars of discipline, knowledge, and service. We strive to provide an environment where every student can achieve their maximum potential.',
    highlights: ['Leadership Excellence', 'Student Focus', 'Innovation in Education', '20+ Years Experience']
  },
  'chairman': {
    title: 'Chairman\'s Desk',
    subtitle: 'The visionary spirit behind KCMS.',
    content: 'Our goal has always been "Higher Education for All". We believe that quality education is the most powerful tool for individual and social transformation.',
    highlights: ['Philanthropy', 'Educational Vision', 'Infrastructure Growth', 'Community Building']
  },
  'history': {
    title: 'History & Milestones',
    subtitle: 'Tracing a decade of growth and success.',
    content: 'Established in 2010, KCMS has grown from a local initiative to a leading regional educational institution, consistently ranking among top colleges for management and science.',
    highlights: ['Founded in 2010', 'NAAC Accredited', 'Expansion in 2015', 'Global Ties in 2020']
  },
  'iqac': {
    title: 'Internal Quality Assurance Cell (IQAC)',
    subtitle: 'Ensuring consistent academic and administrative standards.',
    content: 'The IQAC at KCMS is the backbone of our quality control, conducting regular audits, feedback sessions, and faculty development programs to maintain excellence.',
    highlights: ['Continuous Improvement', 'Feedback Management', 'Best Practices', 'Administrative Audits']
  },
  'naac': {
    title: 'NAAC Accreditation',
    subtitle: 'Recognizing institutional quality.',
    content: 'KCMS is committed to the quality standards set by NAAC, reflecting our dedication to providing a superior learning experience through research and infrastructure.',
    highlights: ['SSR Cycle I', 'Quality Assessment', 'Institutional Profile', 'Academic Standards']
  },
  'library': {
    title: 'Central Library',
    subtitle: 'A knowledge sanctuary for students and faculty.',
    content: 'Our library is fully automated and houses over 50,000 volumes, international journals, and an extensive digital repository accessible 24/7.',
    highlights: ['E-Resource Center', 'Quiet Study Zones', 'Reference Section', 'Periodic Journals']
  },
  'computer-labs': {
    title: 'Advanced Computer Labs',
    subtitle: 'Powering innovation through technology.',
    content: 'Equipped with the latest hardware and high-speed fiber connectivity, our labs support advanced research in AI, Cloud Computing, and Software Engineering.',
    highlights: ['High-Speed Wi-Fi', 'Latest Software', 'Individual Terminals', '24/7 Access']
  },
  'hostel': {
    title: 'Hostel Facilities',
    subtitle: 'Safe and comfortable residential spaces.',
    content: 'Our separate hostels for boys and girls provide a home-like atmosphere with nutritious food, security, and recreational facilities.',
    highlights: ['Safe Environment', 'Nutritious Meals', 'Gym & Recreation', 'Internet Access']
  },
  'anti-ragging': {
    title: 'Anti-Ragging Cell',
    subtitle: 'Zero tolerance for any form of harassment.',
    content: 'KCMS maintains a strictly ragging-free campus. Our dedicated committee ensures a safe and welcoming environment for freshers.',
    highlights: ['UGC Guidelines', 'Strict Monitoring', 'Student Safety', 'Immediate Redressal']
  },
  'ug-courses': {
    title: 'Undergraduate Programs',
    subtitle: 'Starting your professional journey with KCMS.',
    content: 'Our UG programs (BCA, BBA, B.Com, BTTM) are designed with a balance of theoretical foundations and practical skills to ensure job readiness.',
    highlights: ['Industry-Aligned', 'Career Guidance', 'Internship Support', 'Expert Faculty']
  }
};

export const COURSES_DATA: Record<string, Course> = {
  bca: {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    shortDesc: 'Master coding, AI, and cloud computing.',
    fullDesc: 'The BCA program at KCMS provides a solid foundation in computer science and its industrial applications. We focus on Python, Java, Full Stack, and Cloud technologies.',
    duration: '3 Years',
    category: 'UG',
    eligibility: '10+2 with 50% aggregate.',
    opportunities: ['Software Engineer', 'App Developer', 'Data Analyst', 'UI/UX Designer']
  },
  mba: {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    shortDesc: 'Develop global leadership and strategic mindset.',
    fullDesc: 'Ranked among top B-schools, our MBA program focuses on dual specializations and corporate immersions. We offer tracks in Finance, HR, Marketing, and Business Analytics.',
    duration: '2 Years',
    category: 'PG',
    eligibility: 'Graduation + Valid PGCET/KMAT/MAT score.',
    opportunities: ['Brand Manager', 'Investment Banker', 'HR Manager', 'Management Consultant']
  },
  bba: { id: 'bba', name: 'Bachelor of Business Administration (BBA)', shortDesc: 'Future business leaders start here.', fullDesc: 'Industry aligned BBA program focused on management.', duration: '3 Years', category: 'UG', eligibility: '10+2', opportunities: ['Sales Manager', 'Operations Executive'] },
  bcom: { id: 'bcom', name: 'Bachelor of Commerce (B.Com)', shortDesc: 'Excellence in accounting and finance.', fullDesc: 'Professional B.Com program.', duration: '3 Years', category: 'UG', eligibility: '10+2', opportunities: ['Chartered Accountant', 'Financial Auditor'] },
  mttm: { id: 'mttm', name: 'Master of Tourism (MTTM)', shortDesc: 'Explore the global travel industry.', fullDesc: 'Advanced travel management.', duration: '2 Years', category: 'PG', eligibility: 'Graduation', opportunities: ['Tourism Consultant', 'Airline Manager'] },
  bttm: { id: 'bttm', name: 'Bachelor of Tourism (BTTM)', shortDesc: 'Careers in global travel.', fullDesc: 'Foundational tourism study.', duration: '3 Years', category: 'UG', eligibility: '10+2', opportunities: ['Tour Guide', 'Travel Agent'] }
};

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "MBA 2022 Graduate", text: "KCMS provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding!", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Sneha Patil", role: "BCA 2021 Graduate", text: "The faculty in the computer department is extremely supportive. I got placed in a top MNC right after graduation.", image: "https://i.pravatar.cc/150?u=2" }
];

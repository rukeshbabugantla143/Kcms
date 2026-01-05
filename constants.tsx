
import { NavLink, Course, Testimonial } from './types';

export const NAVIGATION: any[] = [
  { label: 'Home', href: '#/' },
  { 
    label: 'About', 
    href: '#/about',
    mega: true,
    columns: [
      {
        title: 'About KCMS',
        links: [
          { label: 'About Us', href: '#/about' },
          { label: 'Vision & Mission', href: '#/vision-mission' },
          { label: 'Principal Message', href: '#/principal-message' },
          { label: 'Chairman\'s Desk', href: '#/chairman-desk' },
          { label: 'History & Milestones', href: '#/history' },
        ]
      },
      {
        title: 'Campus Life',
        links: [
          { label: 'Campus Life', href: '#/campus-life' },
          { label: 'Student Support', href: '#/student-support' },
          { label: 'Anti Ragging', href: '#/anti-ragging' },
          { label: 'Grievance', href: '#/grievance' },
          { label: 'Women\'s Cell', href: '#/womens-cell' },
          { label: 'Clubs & Societies', href: '#/clubs' },
        ]
      },
      {
        title: 'Administration',
        links: [
          { label: 'Faculty', href: '#/faculty' },
          { label: 'Alumni', href: '#/alumni' },
          { label: 'Infrastructure', href: '#/infrastructure' },
          { label: 'Partnerships', href: '#/partnerships' },
          { label: 'Location', href: '#/location' },
        ]
      },
      {
        highlight: {
          title: 'Why KCMS?',
          text: 'KCMS offers 20+ years of academic excellence and global exposure.',
          cta: 'Learn More',
          href: '#/about'
        }
      }
    ]
  },
  { 
    label: 'Academics', 
    href: '#/academics',
    mega: true,
    columns: [
      {
        title: 'Programs',
        links: [
          { label: 'UG Courses', href: '#/ug-courses' },
          { label: 'PG Courses', href: '#/pg-courses' },
          { label: 'Certificate Courses', href: '#/certificate' },
          { label: 'Skill Development', href: '#/skills' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Teaching Methodology', href: '#/teaching' },
          { label: 'Academic Calendar', href: '#/calendar' },
        ]
      },
      {
        highlight: {
          title: 'Academic Excellence',
          text: 'Industry-aligned curriculum with real-world exposure.',
          cta: 'View More',
          href: '#/courses'
        }
      }
    ]
  },
  { 
    label: 'Departments', 
    href: '#/courses',
    mega: true,
    columns: [
      {
        title: 'Undergraduate',
        links: [
          { label: 'BCA', href: '#/course/bca' },
          { label: 'BBA', href: '#/course/bba' },
          { label: 'B.Com', href: '#/course/bcom' },
          { label: 'BTTM', href: '#/course/bttm' },
        ]
      },
      {
        title: 'Postgraduate',
        links: [
          { label: 'MBA', href: '#/course/mba' },
          { label: 'MTTM', href: '#/course/mttm' },
          { label: 'Integrated Courses', href: '#/integrated' },
        ]
      },
      {
        highlight: {
          title: 'Admissions Open',
          text: 'Apply for 2025 admissions. Limited seats available!',
          cta: 'Apply Now',
          href: '#/admissions'
        }
      }
    ]
  },
  { 
    label: 'Admissions', 
    href: '#/admissions',
    mega: true,
    columns: [
      {
        title: 'Info',
        links: [
          { label: 'Eligibility', href: '#/eligibility' },
          { label: 'Download Brochure', href: '#' },
          { label: 'Fee Structure', href: '#/fees' },
        ]
      },
      {
        title: 'Scholarships',
        links: [
          { label: 'Scholarships', href: '#/scholarships' },
          { label: 'Loans', href: '#/loans' },
        ]
      },
      {
        highlight: {
          title: 'Admissions 2025',
          text: 'Start your journey with KCMS today.',
          cta: 'Apply Now',
          href: '#/admissions'
        }
      }
    ]
  },
  { 
    label: 'Placements', 
    href: '#/placements',
    mega: true,
    columns: [
      {
        title: 'Placement Cell',
        links: [
          { label: 'Process', href: '#/process' },
          { label: 'Statistics', href: '#/stats' },
          { label: 'Companies', href: '#/companies' },
          { label: 'Internships', href: '#/internships' },
        ]
      },
      {
        title: 'Career Development',
        links: [
          { label: 'Skill Enhancement', href: '#/skill-enhancement' },
          { label: 'Mock Interviews', href: '#/mock' },
          { label: 'Resume Building', href: '#/resume' },
          { label: 'Industry Connect', href: '#/industry' },
        ]
      },
      {
        highlight: {
          title: '95% Placement Rate',
          text: 'Build your dream career with KCMS support.',
          cta: 'View Stats',
          href: '#/placements'
        }
      }
    ]
  },
  { 
    label: 'Facilities', 
    href: '#/facilities',
    mega: true,
    columns: [
      {
        title: 'Academics',
        links: [
          { label: 'Library', href: '#/library' },
          { label: 'Computer Labs', href: '#/computer-labs' },
          { label: 'Science Labs', href: '#/science-labs' },
          { label: 'Smart Classrooms', href: '#/smart-classrooms' },
        ]
      },
      {
        title: 'Amenities',
        links: [
          { label: 'Transport', href: '#/transport' },
          { label: 'Hostel', href: '#/hostel' },
          { label: 'Medical Facility', href: '#/medical' },
        ]
      },
      {
        title: 'Sports',
        links: [
          { label: 'Sports Complex', href: '#/sports-complex' },
          { label: 'Gym', href: '#/gym' },
          { label: 'Auditorium', href: '#/auditorium' },
        ]
      },
      {
        highlight: {
          title: 'World Class Campus',
          text: 'Experience premium learning infrastructure.',
          cta: 'View Tour',
          href: '#/infrastructure'
        }
      }
    ]
  },
  { label: 'Contact', href: '#/contact' },
];

export const COURSES_DATA: Record<string, Course> = {
  bca: {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    shortDesc: 'A gateway to the world of software development and IT infrastructure.',
    fullDesc: 'The BCA program at KCMS is designed to provide students with a strong foundation in computer science and its applications. We focus on modern technologies including Cloud Computing, AI, and Full Stack Development.',
    duration: '3 Years (6 Semesters)',
    category: 'UG',
    eligibility: '10+2 with minimum 50% marks from a recognized board.',
    opportunities: ['Software Developer', 'System Analyst', 'Web Designer', 'Database Administrator']
  },
  mba: {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    shortDesc: 'Prepare for leadership roles in the global business landscape.',
    fullDesc: 'Our MBA program integrates practical business strategies with leadership development. We offer specializations in Marketing, Finance, HR, and Business Analytics.',
    duration: '2 Years (4 Semesters)',
    category: 'PG',
    eligibility: 'Graduation with minimum 50% marks + qualifying score in PGCET/KMAT/MAT.',
    opportunities: ['Brand Manager', 'Investment Banker', 'HR Specialist', 'Operations Manager']
  },
  bba: {
    id: 'bba',
    name: 'Bachelor of Business Administration (BBA)',
    shortDesc: 'Foundational knowledge for future business leaders.',
    fullDesc: 'BBA at KCMS focuses on developing entrepreneurial skills and business acumen. Students are exposed to real-world corporate scenarios through internships and workshops.',
    duration: '3 Years',
    category: 'UG',
    eligibility: '10+2 pass.',
    opportunities: ['Sales Executive', 'Management Trainee', 'Market Researcher']
  },
  bcom: {
    id: 'bcom',
    name: 'Bachelor of Commerce (B.Com)',
    shortDesc: 'Expertise in finance, accounting and trade.',
    fullDesc: 'The B.Com program provides thorough knowledge in commerce and financial accounting, preparing students for professional careers in the banking and finance sectors.',
    duration: '3 Years',
    category: 'UG',
    eligibility: '10+2 pass.',
    opportunities: ['Accountant', 'Finance Auditor', 'Bank Officer']
  },
  mttm: {
    id: 'mttm',
    name: 'Master of Tourism & Travel Management (MTTM)',
    shortDesc: 'Navigate the global tourism industry.',
    fullDesc: 'MTTM offers advanced training in tourism management, travel operations, and destination marketing.',
    duration: '2 Years',
    category: 'PG',
    eligibility: 'Graduation.',
    opportunities: ['Tour Manager', 'Destination Planner', 'Travel Consultant']
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "MBA 2022 Graduate",
    text: "KCMS provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Sneha Patil",
    role: "BCA 2021 Graduate",
    text: "The faculty in the computer department is extremely supportive. I got placed in a top MNC right after graduation.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Ananya Hegde",
    role: "MTTM 2023 Alumna",
    text: "The exposure to international tourism trends and field trips made my learning truly global. Highly recommend the MTTM program.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

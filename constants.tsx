
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
          { label: 'Leadership', href: '#/p/leadership' },
        ]
      },
      {
        title: 'Campus Life',
        links: [
          { label: 'Campus Life', href: '#/p/campus-life' },
          { label: 'Student Support', href: '#/p/student-support' },
          { label: 'Clubs & Societies', href: '#/p/clubs' },
          { label: 'Sports & Cultural', href: '#/p/sports' },
          { label: 'Social Initiatives', href: '#/p/social-initiatives' },
        ]
      },
      {
        title: 'Compliance',
        links: [
          { label: 'IQAC Hub', href: '#/p/iqac' },
          { label: 'NAAC Portal', href: '#/p/naac' },
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
          { label: 'UG Courses', href: '#/p/ug-courses' },
          { label: 'PG Courses', href: '#/p/pg-courses' },
          { label: 'Integrated Courses', href: '#/p/integrated' },
          { label: 'Certificate Courses', href: '#/p/certificates' },
        ]
      },
      {
        title: 'Academic Support',
        links: [
          { label: 'Teaching Methods', href: '#/p/teaching' },
          { label: 'Skill Development', href: '#/p/skills' },
          { label: 'Academic Calendar', href: '#/p/calendar' },
          { label: 'Faculty Profile', href: '#/p/faculty' },
          { label: 'Alumni Network', href: '#/p/alumni' },
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
          { label: 'Sports Complex & Gym', href: '#/p/gym' },
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
    subtitle: 'Our Guiding Principles for a Brighter Future',
    content: 'At KCMS, we envision being a premier hub for learning, where innovation meets tradition. Our mission is to empower students through an industry-relevant curriculum, fostering ethical leadership and social consciousness.',
    highlights: ['UGC Recognition', 'Socially Committed', 'Inclusive Learning', 'Global Innovation']
  },
  'principal': {
    title: 'Principal\'s Message',
    subtitle: 'Leading the Charge for Excellence',
    content: 'Welcome to KCMS. We believe in nurturing not just professionals, but well-rounded individuals. Our focus is on holistic development, combining academic rigor with sports, culture, and ethical grounding.',
    highlights: ['Academic Leadership', 'Student-Centric Approach', 'Innovative Pedagogy', '20+ Years Legacy']
  },
  'chairman': {
    title: 'Chairman\'s Desk',
    subtitle: 'A Visionary Pursuit of Knowledge',
    content: 'Our motto, "Higher Education to All", drives every decision at KCMS. We strive to make top-tier management and science education accessible to every aspiring mind in our society.',
    highlights: ['Strategic Growth', 'Institutional Integrity', 'Student Welfare', 'Infrastructural Brilliance']
  },
  'history': {
    title: 'History & Milestones',
    subtitle: 'The Journey of a Thousand Miles',
    content: 'Starting in 2010 under the Karnataka Education Trust, KCMS has crossed several milestones including NAAC accreditation and expanding into diverse post-graduate and research programs.',
    highlights: ['Founded 2010', 'NAAC Accredited', 'UGC Recognized', '10,000+ Alumni']
  },
  'leadership': {
    title: 'Administrative Leadership',
    subtitle: 'The Minds Behind the Excellence',
    content: 'KCMS is governed by a board of experienced academicians and industry veterans who ensure the institution maintains its path toward global educational standards.',
    highlights: ['Expert Governance', 'Industry Integration', 'Policy Excellence', 'Continuous Growth']
  },
  'campus-life': {
    title: 'Campus Life',
    subtitle: 'More than Just Classrooms',
    content: 'Life at KCMS is a vibrant mix of academic challenges and cultural celebrations. Our campus offers a range of spaces for students to collaborate, innovate, and relax.',
    highlights: ['Vibrant Culture', 'Student Lounges', 'Tech-Enabled Campus', 'Green Environment']
  },
  'student-support': {
    title: 'Student Support Services',
    subtitle: 'We are here for you',
    content: 'From career counseling to mental health support, KCMS provides a comprehensive support network to ensure every student navigates their college life successfully.',
    highlights: ['Career Counseling', 'Mentor System', 'Financial Aid', 'Grievance Cell']
  },
  'clubs': {
    title: 'Clubs & Societies',
    subtitle: 'Unleash Your Potential',
    content: 'Whether you are into coding, debating, or photography, our student-run clubs provide the perfect platform to explore your passions outside the curriculum.',
    highlights: ['Tech Club', 'Drama & Arts', 'Entrepreneurship Cell', 'Photography Society']
  },
  'sports': {
    title: 'Sports & Cultural',
    subtitle: 'Fostering Healthy Competition',
    content: 'Physical fitness and cultural appreciation are integral to KCMS. We host annual sports meets and cultural festivals that attract talent from across the state.',
    highlights: ['Indoor Sports', 'Outdoor Fields', 'Cultural Fests', 'State-Level Competitions']
  },
  'social-initiatives': {
    title: 'Social Initiatives',
    subtitle: 'Giving Back to the Community',
    content: 'KCMS students actively participate in social outreach, blood donation camps, and environmental awareness drives through our dedicated social cell.',
    highlights: ['NSS Activities', 'Community Service', 'Environmental Drives', 'CSR Projects']
  },
  'iqac': {
    title: 'Internal Quality Assurance Cell (IQAC)',
    subtitle: 'Maintaining High Institutional Standards',
    content: 'IQAC acts as a catalyst for quality improvement by developing a system for conscious, consistent, and catalytic action to improve academic and administrative performance.',
    highlights: ['Quality Audits', 'Feedback Analysis', 'Best Practices', 'Administrative Efficiency']
  },
  'naac': {
    title: 'NAAC Portal',
    subtitle: 'National Assessment and Accreditation Council',
    content: 'KCMS is committed to institutional quality assessment. We maintain transparent records of our self-study reports and major contributions to education.',
    highlights: ['Cycle I SSR', 'Cycle II SSR', 'Institutional Profile', 'Annual Reports']
  },
  'anti-ragging': {
    title: 'Anti-Ragging Committee',
    subtitle: 'A Safe & Welcoming Campus',
    content: 'KCMS follows a zero-tolerance policy toward ragging. Our committee ensures strict adherence to UGC guidelines to protect every student.',
    highlights: ['Zero Tolerance', 'Immediate Action', 'Student Safety', 'UGC Compliance']
  },
  'womens-cell': {
    title: 'Women\'s Empowerment Cell',
    subtitle: 'Promoting Equality and Dignity',
    content: 'The cell works to sensitize students and faculty toward gender issues and provides a platform for women to discuss their challenges and achievements.',
    highlights: ['Awareness Camps', 'Safety Measures', 'Mentorship', 'Grievance Redressal']
  },
  'grievance': {
    title: 'Grievance Redressal',
    subtitle: 'Transparent Feedback System',
    content: 'We believe in a fair and transparent system for addressing any issues faced by students or staff, ensuring a healthy work and study environment.',
    highlights: ['Online Portal', 'Quick Resolution', 'Confidential Handling', 'Fair Process']
  },
  'ug-courses': {
    title: 'Undergraduate Programs',
    subtitle: 'Building Foundations for Success',
    content: 'Our UG programs in Management, Science, and Commerce are designed to provide students with a competitive edge in the global job market.',
    highlights: ['BCA', 'BBA', 'B.Com', 'BTTM']
  },
  'pg-courses': {
    title: 'Postgraduate Programs',
    subtitle: 'Advanced Learning for Future Leaders',
    content: 'Master complex business and technical concepts through our specialized PG programs that focus on research and high-level industrial skills.',
    highlights: ['MBA', 'MTTM', 'Research-Oriented', 'Industry Dual-Spec']
  },
  'integrated': {
    title: 'Integrated Courses',
    subtitle: 'Streamlined Career Paths',
    content: 'KCMS offers integrated programs that allow students to pursue bachelor\'s and master\'s degrees in a continuous, focused academic journey.',
    highlights: ['Time Efficient', 'Focused Learning', 'Dual Credentials', 'Industry Ready']
  },
  'certificates': {
    title: 'Certificate Courses',
    subtitle: 'Upskill for the Digital Era',
    content: 'From Digital Marketing to Data Science, our short-term certificate courses are designed to provide immediate value in the job market.',
    highlights: ['Skill Focus', 'Short Duration', 'Hands-on Training', 'Certification']
  },
  'teaching': {
    title: 'Teaching Methodology',
    subtitle: 'Beyond Traditional Lectures',
    content: 'We use case-study based learning, experiential projects, and smart classroom technology to ensure students are actively engaged in their education.',
    highlights: ['Case Studies', 'Interactive Labs', 'Guest Lectures', 'Field Projects']
  },
  'skills': {
    title: 'Skill Development',
    subtitle: 'Enhancing Employability',
    content: 'Our specialized skill development cell conducts workshops on communication, leadership, and technical proficiency throughout the academic year.',
    highlights: ['Soft Skills', 'Technical Workshops', 'Mock Interviews', 'Aptitude Training']
  },
  'calendar': {
    title: 'Academic Calendar',
    subtitle: 'Planning Your Success',
    content: 'Stay updated with all important dates including exams, festivals, holidays, and guest seminars through our official academic calendar.',
    highlights: ['Exam Dates', 'Event Schedule', 'Holidays', 'Deadlines']
  },
  'faculty': {
    title: 'Faculty Profile',
    subtitle: 'Mentors with Industry Experience',
    content: 'Our faculty members are not just teachers but experts with years of industrial and research experience, dedicated to student success.',
    highlights: ['PhD Scholars', 'Industry Veterans', 'Personal Mentors', 'Research Focused']
  },
  'alumni': {
    title: 'Alumni Network',
    subtitle: 'Connected for Life',
    content: 'The KCMS Alumni Association bridges the gap between current students and successful professionals who graduated from our institution.',
    highlights: ['Networking', 'Mentorship', 'Global Reach', 'Success Stories']
  },
  'infrastructure': {
    title: 'Infrastructure',
    subtitle: 'Modern Facilities for Global Learning',
    content: 'Spanning several acres, our campus is a hub of technological and academic infrastructure designed to facilitate high-end learning.',
    highlights: ['Tech-Enabled', 'Green Campus', 'Advanced Security', 'Smart Design']
  },
  'library': {
    title: 'Central Library',
    subtitle: 'The Intellectual Heart of KCMS',
    content: 'Our fully automated library houses over 50,000 volumes, international journals, and an extensive digital repository available to all students.',
    highlights: ['E-Journals', 'Reference Section', 'Digital Kiosks', 'Quiet Study']
  },
  'computer-labs': {
    title: 'Computer Labs',
    subtitle: 'Coding the Future',
    content: 'Equipped with the latest high-performance workstations and high-speed fiber internet, our labs support advanced software development.',
    highlights: ['Latest Hardware', 'Gigabit Internet', '24/7 Access', 'Specialized Software']
  },
  'science-labs': {
    title: 'Science & Research Labs',
    subtitle: 'Fostering Scientific Temper',
    content: 'Our science labs are equipped with modern apparatus to support practical learning and research in physics, electronics, and management science.',
    highlights: ['Modern Equipment', 'Safety First', 'Research Support', 'Expert Guidance']
  },
  'smart-classrooms': {
    title: 'Smart Classrooms',
    subtitle: 'Digital-First Pedagogy',
    content: 'Every classroom at KCMS is equipped with interactive projectors, high-quality audio systems, and high-speed Wi-Fi connectivity.',
    highlights: ['Interactive Tech', 'Comfortable Seating', 'Wi-Fi Enabled', 'Audio-Visual Ready']
  },
  'hostel': {
    title: 'Hostel Facility',
    subtitle: 'Home Away From Home',
    content: 'Safe, secure, and comfortable separate hostels for boys and girls with nutritious food, Wi-Fi, and 24/7 warden support.',
    highlights: ['Safe Environment', 'Nutritious Food', 'High-Speed Wi-Fi', '24/7 Security']
  },
  'transport': {
    title: 'Transport System',
    subtitle: 'Safe Commute for All',
    content: 'KCMS operates a fleet of modern buses that cover all major parts of the city, ensuring safe and timely transport for students.',
    highlights: ['City-Wide Coverage', 'GPS Tracked', 'Safe Drivers', 'Scheduled Routes']
  },
  'auditorium': {
    title: 'State-of-the-art Auditorium',
    subtitle: 'Where Talent Takes Center Stage',
    content: 'Our fully air-conditioned auditorium with 500+ seating capacity is the venue for all major seminars, festivals, and guest talks.',
    highlights: ['A/C Environment', 'Pro Audio-Visual', 'Large Seating', 'Modern Stage']
  },
  'medical': {
    title: 'Medical Facility',
    subtitle: 'Your Health is Our Priority',
    content: 'A dedicated medical room with a full-time nurse and visiting doctor is available on campus to handle any health emergencies.',
    highlights: ['24/7 First Aid', 'Doctor on Call', 'Health Checks', 'Emergency Van']
  },
  'gym': {
    title: 'Sports Complex & Gym',
    subtitle: 'Building Stronger Bodies',
    content: 'Our multi-facility sports complex includes a fully equipped gym, basketball courts, and indoor gaming zones for overall fitness.',
    highlights: ['Modern Equipment', 'Indoor Courts', 'Fitness Trainers', 'Open Play Areas']
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

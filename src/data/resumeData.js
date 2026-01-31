/**
 * Resume Data Structure
 * Comprehensive resume information with work experience, education, certifications, and achievements
 */

export const RESUME_DATA = {
  personal: {
    name: 'Lenovo Developer',
    title: 'Full Stack Developer & UI/UX Designer',
    email: 'hello@lenovo-portfolio.dev',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/lenovo-dev',
    github: 'https://github.com/lenovo-dev',
    website: 'https://lenovo-portfolio.dev',
    summary:
      'Passionate full-stack developer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and modern UI/UX design. Proven track record of delivering high-quality projects that improve user experience and drive business growth.',
  },

  experience: [
    {
      id: 'exp-1',
      company: 'TechCorp Innovation Labs',
      position: 'Senior Frontend Engineer',
      startDate: '2022-01',
      endDate: null,
      location: 'San Francisco, CA',
      description:
        'Lead frontend development for customer-facing web applications serving 500K+ users monthly. Architected component library and design system used across 15+ internal projects.',
      achievements: [
        'Improved application performance by 45% through code splitting and lazy loading optimization',
        'Reduced bundle size from 2.8MB to 850KB using tree-shaking and dynamic imports',
        'Mentored 5 junior developers and established frontend best practices documentation',
        'Led migration from Redux to Redux Toolkit, improving code maintainability',
      ],
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Jest'],
    },
    {
      id: 'exp-2',
      company: 'Digital Artistry Studios',
      position: 'Full Stack Developer',
      startDate: '2019-06',
      endDate: '2021-12',
      location: 'New York, NY',
      description:
        'Developed and maintained full-stack web applications for creative and media clients. Built RESTful APIs, implemented real-time features, and optimized database performance.',
      achievements: [
        'Built real-time collaboration features using WebSockets for design platform used by 50K+ designers',
        'Designed and implemented MongoDB schema handling 100M+ document database',
        'Increased API response time by 60% through query optimization and caching strategies',
        'Led frontend redesign project resulting in 35% improvement in user engagement metrics',
      ],
      technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Socket.io', 'AWS'],
    },
    {
      id: 'exp-3',
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      startDate: '2018-03',
      endDate: '2019-05',
      location: 'Palo Alto, CA',
      description:
        'Contributed to early-stage SaaS platform MVP. Built responsive UI components and integrated third-party APIs.',
      achievements: [
        'Launched MVP in 3 months with fully responsive design across all devices',
        'Integrated Stripe payment system and implemented secure checkout flow',
        'Achieved 98% lighthouse score through performance optimization',
      ],
      technologies: ['React', 'CSS Modules', 'JavaScript', 'Stripe API', 'Firebase'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2014-09',
      endDate: '2018-05',
      gpa: '3.8/4.0',
      honors: ['Summa Cum Laude', 'Dean\'s List (All 4 years)', 'Computer Science Honors'],
      coursework: [
        'Data Structures & Algorithms',
        'Web Development',
        'Software Engineering',
        'Machine Learning',
        'Database Systems',
        'Computer Networks',
      ],
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2023-05',
      credentialId: 'AWS-SAA-123456',
      credentialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate',
      logo: '☁️',
    },
    {
      id: 'cert-2',
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      date: '2022-11',
      credentialId: 'GUX-789012',
      credentialUrl: 'https://www.coursera.org/professional-certificates/google-ux-design',
      logo: '🎨',
    },
    {
      id: 'cert-3',
      name: 'MongoDB Developer Certified Associate',
      issuer: 'MongoDB University',
      date: '2022-08',
      credentialId: 'MONGO-345678',
      credentialUrl: 'https://www.mongodb.com/certification',
      logo: '🍃',
    },
    {
      id: 'cert-4',
      name: 'React Advanced Patterns & Performance',
      issuer: 'Epic React by Kent C. Dodds',
      date: '2021-12',
      credentialId: 'REACT-901234',
      credentialUrl: 'https://epicreact.dev',
      logo: '⚛️',
    },
  ],

  achievements: [
    {
      id: 'ach-1',
      title: 'Published Article: "Building Scalable React Applications"',
      description: 'Technical article on performance optimization and architectural patterns',
      date: '2023-06',
      category: 'publications',
    },
    {
      id: 'ach-2',
      title: 'Speaker at React Conf 2023',
      description: 'Presented "Animation Best Practices with Framer Motion" to 1,200+ developers',
      date: '2023-05',
      category: 'speaking',
    },
    {
      id: 'ach-3',
      title: 'Open Source Contributor',
      description: '50+ merged pull requests across React ecosystem projects (10K+ GitHub stars)',
      date: '2023-01',
      category: 'open-source',
    },
    {
      id: 'ach-4',
      title: 'Employee of the Year 2022',
      description: 'Recognized for outstanding contributions and team leadership at TechCorp',
      date: '2022-12',
      category: 'awards',
    },
    {
      id: 'ach-5',
      title: 'Hackathon Winner: "AI Design Assistant"',
      description: 'Built AI-powered design tool that won 1st place at SF Hackathon 2022',
      date: '2022-10',
      category: 'awards',
    },
  ],
};

export default RESUME_DATA;

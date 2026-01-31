/**
 * Project Data Structure
 * Comprehensive project metadata supporting Bento Grid layouts
 */

export const PROJECTS = [
  {
    id: 'portfolio-v1',
    title: 'Interactive Portfolio',
    description: 'A modern, theme-aware portfolio website with command palette navigation, glassmorphic design, and scroll-triggered animations.',
    longDescription: 'This interactive portfolio showcases my professional work with an emphasis on modern web technologies and user experience. The site features a custom command palette for seamless navigation, glassmorphic design elements for a contemporary aesthetic, and sophisticated scroll-triggered animations powered by Framer Motion. Built with React and Vite, the portfolio includes a dynamic project showcase with real-time theme switching via Redux, responsive design that works across all devices, and comprehensive accessibility features for all users.',
    category: 'web',
    tags: ['React', 'Vite', 'Framer Motion', 'Redux', 'CSS Modules'],
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://portfolio-v1.dev',
    githubUrl: 'https://github.com/username/portfolio-v1',
    featured: true,
    gridSize: { rows: 2, cols: 2 },
    challenges: [
      { title: 'Performance Optimization', description: 'Achieving sub-second load times while maintaining rich animations and interactive features' },
      { title: 'Cross-browser Compatibility', description: 'Ensuring consistent experience across all modern browsers and devices' },
      { title: 'Accessibility', description: 'Building inclusive experience with proper ARIA labels, keyboard navigation, and screen reader support' },
    ],
    outcomes: [
      'Achieved 95+ Lighthouse score across all metrics',
      'Reduced bundle size by 40% through code splitting and optimization',
      'Implemented fully accessible navigation with keyboard shortcuts',
      'Created reusable component library for consistent design',
    ],
    metrics: {
      performance: '96',
      accessibility: '100',
      loadTime: '0.8s',
    },
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies to provide a seamless shopping experience. Features include real-time inventory management, secure payment processing via Stripe, an intuitive admin dashboard for store management, and advanced filtering and search capabilities. The platform is built with React on the frontend and Node.js with Express on the backend, using MongoDB for data persistence and Redis for caching high-traffic queries.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://ecommerce-app.dev',
    githubUrl: 'https://github.com/username/ecommerce-app',
    featured: true,
    gridSize: { rows: 2, cols: 2 },
    challenges: [
      { title: 'Payment Integration Security', description: 'Implementing PCI-DSS compliant payment processing with Stripe while protecting user data' },
      { title: 'Real-time Inventory Sync', description: 'Managing concurrent inventory updates across multiple users and preventing overselling' },
      { title: 'Scalability', description: 'Designing system architecture to handle thousands of concurrent users and transactions' },
    ],
    outcomes: [
      'Processed over $5M in transactions with zero payment fraud',
      'Achieved 99.9% uptime with automated scaling',
      'Reduced cart abandonment by 25% through UX improvements',
      'Implemented automated testing with 85%+ code coverage',
    ],
    metrics: {
      transactions: '50k+',
      uptime: '99.9%',
      users: '10k+',
    },
  },
  {
    id: 'mobile-fitness',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for workout tracking with social features and progress analytics.',
    longDescription: 'A comprehensive fitness tracking application built with React Native for iOS and Android. The app enables users to log workouts, track progress over time with detailed analytics, connect with friends for motivation, and follow personalized workout plans. Features include real-time location tracking for running/cycling, integration with wearables, social challenges, and AI-powered workout recommendations based on user history.',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://fitness-app.dev',
    githubUrl: 'https://github.com/username/fitness-app',
    featured: false,
    gridSize: { rows: 1, cols: 1 },
    challenges: [
      { title: 'Native Module Integration', description: 'Seamlessly integrating with native iOS and Android APIs for location and device sensors' },
      { title: 'Offline Functionality', description: 'Implementing robust offline-first architecture with data sync when connection restored' },
      { title: 'Battery Optimization', description: 'Minimizing battery drain from continuous location tracking and sensor monitoring' },
    ],
    outcomes: [
      'Over 50k active users with 4.8 star rating on app stores',
      'Reduced battery drain by 40% through optimization',
      'Achieved smooth 60fps performance on devices from 2018+',
      'Built social features with real-time leaderboards',
    ],
    metrics: {
      users: '50k+',
      rating: '4.8',
      retention: '65%',
    },
  },
  {
    id: 'design-system',
    title: 'Component Design System',
    description: 'Comprehensive UI component library with Storybook documentation and accessibility features.',
    longDescription: 'A modular design system and component library featuring 50+ reusable React components built with TypeScript. Includes comprehensive Storybook documentation, automated testing, accessibility audits, and dark mode support. The design system enforces consistent design language across all projects and dramatically reduces development time for new features.',
    category: 'design',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://design-system.dev',
    githubUrl: 'https://github.com/username/design-system',
    featured: false,
    gridSize: { rows: 1, cols: 2 },
    challenges: [
      { title: 'Consistency Across Variants', description: 'Maintaining visual and behavioral consistency across component variants and states' },
      { title: 'Documentation Maintenance', description: 'Keeping comprehensive documentation in sync with component updates' },
      { title: 'Accessibility Compliance', description: 'Ensuring all components meet WCAG AAA accessibility standards' },
    ],
    outcomes: [
      'Created 50+ reusable components reducing development time by 60%',
      'Achieved 100% WCAG AAA accessibility compliance',
      'Built comprehensive Storybook with 200+ stories',
      'Implemented automated visual regression testing',
    ],
    metrics: {
      components: '50+',
      coverage: '100%',
      stories: '200+',
    },
  },
  {
    id: 'realtime-dashboard',
    title: 'Real-time Analytics Dashboard',
    description: 'Live data visualization dashboard with WebSocket integration and custom chart library.',
    longDescription: 'An advanced analytics dashboard providing real-time insights into application metrics and user behavior. Built with React and D3.js for custom visualizations, WebSocket for live data streaming, and a sophisticated filtering system. The dashboard processes millions of data points to provide instantaneous insights to business teams.',
    category: 'web',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://analytics-dashboard.dev',
    githubUrl: 'https://github.com/username/analytics-dashboard',
    featured: false,
    gridSize: { rows: 1, cols: 1 },
    challenges: [
      { title: 'Real-time Performance', description: 'Rendering thousands of data points with 60fps while handling live updates' },
      { title: 'Memory Management', description: 'Managing large datasets without consuming excessive memory or slowing down the browser' },
      { title: 'Custom Visualizations', description: 'Creating meaningful, interactive D3.js visualizations tailored to specific metrics' },
    ],
    outcomes: [
      'Successfully handles 1M+ data points per day',
      'Maintained 60fps performance on mid-range devices',
      'Reduced data loading time from 5s to 800ms through optimization',
      'Created 15+ custom chart types for different use cases',
    ],
    metrics: {
      dataPoints: '1M+',
      fps: '60',
      loadTime: '0.8s',
    },
  },
  {
    id: 'ai-content-tool',
    title: 'AI Content Generation Tool',
    description: 'SaaS platform leveraging GPT API for intelligent content creation with team collaboration features.',
    longDescription: 'A sophisticated SaaS platform that combines OpenAI\'s GPT API with custom content generation workflows. Features include real-time collaboration, template system, content versioning, and advanced editing capabilities. The platform serves teams across marketing, product, and content creation departments.',
    category: 'fullstack',
    tags: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
    thumbnail: 'https://images.unsplash.com/photo-1677442d019cecf8a42c9a34e67b7156a4a6b4f1?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442d019cecf8a42c9a34e67b7156a4a6b4f1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1677442d019cecf8a42c9a34e67b7156a4a6b4f1?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://ai-content-tool.dev',
    githubUrl: 'https://github.com/username/ai-content-tool',
    featured: false,
    gridSize: { rows: 1, cols: 1 },
    challenges: [
      { title: 'API Cost Optimization', description: 'Balancing AI API usage costs while providing real-time content generation' },
      { title: 'Content Quality Control', description: 'Implementing systems to ensure generated content meets quality standards' },
      { title: 'Real-time Collaboration', description: 'Building conflict-free real-time collaborative editing with operational transformation' },
    ],
    outcomes: [
      'Reduced content creation time by 80% through AI assistance',
      'Served 100+ enterprise customers with custom workflows',
      'Optimized API costs by 50% through caching and batching',
      'Maintained 99.95% uptime SLA for production environment',
    ],
    metrics: {
      customers: '100+',
      uptime: '99.95%',
      timeReduction: '80%',
    },
  },
  {
    id: 'travel-planner',
    title: 'Travel Planning Application',
    description: 'Collaborative travel planning app with itinerary management, maps integration, and budget tracking.',
    longDescription: 'A full-featured travel planning application enabling groups to collaboratively plan trips, manage itineraries, track budgets, and share experiences. Features Google Maps integration for location planning, expense splitting, accommodation recommendations, and packing lists. The app simplifies complex group travel coordination.',
    category: 'web',
    tags: ['Vue.js', 'Google Maps API', 'Firebase', 'Tailwind'],
    thumbnail: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://travel-planner.dev',
    githubUrl: 'https://github.com/username/travel-planner',
    featured: false,
    gridSize: { rows: 1, cols: 1 },
    challenges: [
      { title: 'Real-time Sync', description: 'Keeping itineraries synchronized across multiple users making simultaneous changes' },
      { title: 'Maps Performance', description: 'Rendering complex map interactions with dozens of locations without performance degradation' },
      { title: 'Offline Support', description: 'Providing full functionality offline with automatic sync when connection restored' },
    ],
    outcomes: [
      'Used by 20k+ travelers planning group trips',
      'Reduced trip planning time from hours to minutes',
      'Achieved 95+ Lighthouse score for performance',
      'Built collaborative features used in 100+ trips monthly',
    ],
    metrics: {
      users: '20k+',
      trips: '100+',
      satisfaction: '4.7',
    },
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Complete visual identity system including logo, typography, and brand guidelines.',
    longDescription: 'A comprehensive brand identity system created for a fast-growing tech startup. Includes custom logo design, typography guidelines, color palette development, visual assets, and detailed brand guidelines. The system ensures consistency across all brand touchpoints and marketing materials.',
    category: 'design',
    tags: ['Figma', 'Branding', 'UI Design', 'Color Theory'],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://brand-portfolio.dev',
    githubUrl: 'https://github.com/username/brand-identity',
    featured: false,
    gridSize: { rows: 1, cols: 1 },
    challenges: [
      { title: 'Brand Differentiation', description: 'Creating unique brand identity in a saturated market' },
      { title: 'Multi-channel Consistency', description: 'Ensuring brand applies consistently across digital and print media' },
      { title: 'Scalability', description: 'Designing system flexible enough for future expansion and evolution' },
    ],
    outcomes: [
      'Created distinctive brand recognized by target audience',
      'Developed 40+ design assets covering all brand touchpoints',
      'Established guidelines used across marketing and product',
      'Increased brand recognition by 300% post-launch',
    ],
    metrics: {
      assets: '40+',
      recognition: '300%',
      consistency: '100%',
    },
  },
];

/**
 * Get all unique categories from projects
 */
export const getCategories = () => {
  const categories = new Set(PROJECTS.map((p) => p.category));
  return ['all', ...Array.from(categories)];
};

/**
 * Filter projects by category
 */
export const getProjectsByCategory = (category) => {
  if (category === 'all') return PROJECTS;
  return PROJECTS.filter((project) => project.category === category);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = () => {
  return PROJECTS.filter((project) => project.featured);
};

/**
 * Get project by ID
 */
export const getProjectById = (id) => {
  return PROJECTS.find((project) => project.id === id);
};

/**
 * Sort projects by criteria
 */
export const sortProjects = (projects, sortBy = 'featured') => {
  const sorted = [...projects];
  
  switch (sortBy) {
    case 'featured':
      return sorted.sort((a, b) => (b.featured ? 1 : -1));
    case 'recent':
      return sorted.reverse();
    case 'alphabetical':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
};

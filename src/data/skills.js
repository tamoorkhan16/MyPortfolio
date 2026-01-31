/**
 * Skills Data Structure
 * Comprehensive skills metadata supporting filtering, sorting, and relationship mapping
 */

export const SKILLS = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 95,
    yearsOfExperience: 5,
    description: 'Expert in React development with advanced knowledge of hooks, context API, performance optimization, and modern patterns. Experienced in building scalable component libraries and complex state management solutions.',
    icon: '⚛️',
    color: 'accent',
    hasDemo: true,
    demoComponent: 'ReactDemo',
    relatedSkills: ['javascript', 'framer-motion', 'redux'],
    projects: ['portfolio-v1', 'ecommerce-app'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 98,
    yearsOfExperience: 7,
    description: 'Expert-level JavaScript mastery including ES6+, async/await, promises, closures, prototypes, and functional programming paradigms. Strong foundation in DOM manipulation and browser APIs.',
    icon: '📜',
    color: 'warning',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['react', 'node'],
    projects: ['portfolio-v1', 'ecommerce-app', 'task-manager'],
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    proficiency: 92,
    yearsOfExperience: 3,
    description: 'Advanced animation and interaction design using Framer Motion. Expertise in complex gesture animations, drag interactions, orchestrating multiple animations, and creating performant 60fps experiences.',
    icon: '✨',
    color: 'success',
    hasDemo: true,
    demoComponent: 'FramerMotionDemo',
    relatedSkills: ['react', 'css'],
    projects: ['portfolio-v1'],
  },
  {
    id: 'css',
    name: 'CSS & Styling',
    category: 'frontend',
    proficiency: 94,
    yearsOfExperience: 6,
    description: 'Expert in modern CSS including Grid, Flexbox, custom properties, animations, transforms, and responsive design. Proficient in CSS Modules, Tailwind CSS, and CSS-in-JS solutions.',
    icon: '🎨',
    color: 'primary',
    hasDemo: true,
    demoComponent: 'CSSDemo',
    relatedSkills: ['html', 'react'],
    projects: ['portfolio-v1', 'design-system'],
  },
  {
    id: 'html',
    name: 'HTML5 & Semantics',
    category: 'frontend',
    proficiency: 96,
    yearsOfExperience: 7,
    description: 'Expert in semantic HTML5, accessibility standards (WCAG), ARIA attributes, and progressive enhancement. Strong foundation in web standards and best practices.',
    icon: '🏷️',
    color: 'danger',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['css', 'javascript'],
    projects: ['portfolio-v1'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 88,
    yearsOfExperience: 3,
    description: 'Proficient in TypeScript for type-safe development. Experience with interfaces, generics, decorators, and strict null checking for building maintainable large-scale applications.',
    icon: '📘',
    color: 'info',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['javascript', 'react'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'redux',
    name: 'Redux & Redux Toolkit',
    category: 'frontend',
    proficiency: 90,
    yearsOfExperience: 4,
    description: 'Advanced state management with Redux and Redux Toolkit. Expertise in slices, middleware, async thunks, selectors, and normalization strategies for complex application state.',
    icon: '🔴',
    color: 'accent',
    hasDemo: true,
    demoComponent: 'ReduxDemo',
    relatedSkills: ['react', 'javascript'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    proficiency: 85,
    yearsOfExperience: 2,
    description: 'Experience with Vite as a modern build tool. Proficient in configuration, optimization, plugin development, and leveraging ES modules for fast development workflows.',
    icon: '⚡',
    color: 'success',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['webpack', 'node'],
    projects: ['portfolio-v1'],
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    proficiency: 85,
    yearsOfExperience: 4,
    description: 'Proficient in Node.js backend development. Experience with Express.js, middleware, RESTful APIs, file operations, and server-side JavaScript architecture.',
    icon: '🟢',
    color: 'success',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['javascript', 'express', 'mongodb'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 82,
    yearsOfExperience: 3,
    description: 'Experienced in building REST APIs and web applications with Express.js. Proficient in routing, middleware, authentication, and error handling patterns.',
    icon: '🚂',
    color: 'secondary',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['node', 'mongodb', 'jwt'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    proficiency: 80,
    yearsOfExperience: 3,
    description: 'Proficient in MongoDB database design and operations. Experience with aggregation pipelines, indexing, and NoSQL paradigms for scalable data persistence.',
    icon: '🍃',
    color: 'success',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['node', 'express'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'jwt',
    name: 'JWT Authentication',
    category: 'backend',
    proficiency: 85,
    yearsOfExperience: 3,
    description: 'Expert in JSON Web Token implementation for stateless authentication. Experience with token generation, verification, refresh tokens, and secure credential handling.',
    icon: '🔐',
    color: 'danger',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['node', 'express'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    proficiency: 75,
    yearsOfExperience: 2,
    description: 'Proficient in Figma for UI/UX design. Experience with components, prototyping, design systems, and collaboration features.',
    icon: '🎯',
    color: 'primary',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['ux-design', 'css'],
    projects: ['design-system'],
  },
  {
    id: 'ux-design',
    name: 'UX/UI Design',
    category: 'design',
    proficiency: 78,
    yearsOfExperience: 3,
    description: 'Strong understanding of user-centered design principles, accessibility, usability testing, and creating intuitive interfaces that prioritize user experience.',
    icon: '🖼️',
    color: 'accent',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['figma', 'css'],
    projects: ['portfolio-v1'],
  },
  {
    id: 'git',
    name: 'Git & Version Control',
    category: 'tools',
    proficiency: 90,
    yearsOfExperience: 6,
    description: 'Advanced Git proficiency including branching strategies, rebasing, squashing commits, and collaborative workflows. Experience with GitHub and GitLab platforms.',
    icon: '🔀',
    color: 'secondary',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['webpack'],
    projects: ['portfolio-v1', 'ecommerce-app'],
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tools',
    proficiency: 78,
    yearsOfExperience: 3,
    description: 'Experienced in Webpack configuration, loaders, plugins, code splitting, and optimization. Knowledge of module federation and advanced bundling strategies.',
    icon: '📦',
    color: 'info',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['git', 'node'],
    projects: [],
  },
  {
    id: 'stripe',
    name: 'Stripe Integration',
    category: 'tools',
    proficiency: 80,
    yearsOfExperience: 2,
    description: 'Proficient in Stripe payment integration including checkout flows, webhook handling, subscription management, and PCI compliance.',
    icon: '💳',
    color: 'primary',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['node', 'express'],
    projects: ['ecommerce-app'],
  },
  {
    id: 'testing',
    name: 'Testing & QA',
    category: 'tools',
    proficiency: 82,
    yearsOfExperience: 4,
    description: 'Experienced in unit testing with Jest, integration testing with React Testing Library, and E2E testing. Knowledge of test-driven development practices.',
    icon: '✅',
    color: 'success',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['javascript', 'react'],
    projects: ['portfolio-v1', 'ecommerce-app'],
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'soft-skills',
    proficiency: 88,
    yearsOfExperience: 7,
    description: 'Strong communicator with ability to explain complex technical concepts to both technical and non-technical stakeholders. Experienced in technical documentation.',
    icon: '💬',
    color: 'accent',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['teamwork', 'problem-solving'],
    projects: [],
  },
  {
    id: 'teamwork',
    name: 'Teamwork & Collaboration',
    category: 'soft-skills',
    proficiency: 90,
    yearsOfExperience: 7,
    description: 'Collaborative team player with experience in Agile/Scrum methodologies, pair programming, and cross-functional teamwork. Strong mentoring abilities.',
    icon: '🤝',
    color: 'success',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['communication', 'problem-solving'],
    projects: [],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'soft-skills',
    proficiency: 92,
    yearsOfExperience: 7,
    description: 'Excellent analytical and problem-solving skills. Ability to break down complex problems, think critically, and develop efficient solutions.',
    icon: '🧩',
    color: 'primary',
    hasDemo: false,
    demoComponent: null,
    relatedSkills: ['communication', 'teamwork'],
    projects: [],
  },
];

/**
 * Get all unique skill categories
 * @returns {string[]} Array of category names with 'all' prepended
 */
export const getSkillCategories = () => {
  const categories = new Set(SKILLS.map((skill) => skill.category));
  return ['all', ...Array.from(categories).sort()];
};

/**
 * Get all unique skill categories
 * @returns {string[]} Array of unique category names including 'all'
 */
export const getCategories = () => {
  const categories = [...new Set(SKILLS.map((skill) => skill.category))];
  return ['all', ...categories.sort()];
};

/**
 * Get skills by category
 * @param {string} category - Category name ('all' returns all skills)
 * @returns {Object[]} Array of skills in the category
 */
export const getSkillsByCategory = (category) => {
  if (category === 'all') {
    return SKILLS;
  }
  return SKILLS.filter((skill) => skill.category === category);
};

/**
 * Get skill by ID
 * @param {string} id - Skill ID
 * @returns {Object|undefined} Skill object or undefined
 */
export const getSkillById = (id) => {
  return SKILLS.find((skill) => skill.id === id);
};

/**
 * Get featured skills (top proficiency and/or has demo)
 * @param {number} limit - Number of featured skills to return
 * @returns {Object[]} Array of featured skills
 */
export const getFeaturedSkills = (limit = 6) => {
  return SKILLS.filter((skill) => skill.hasDemo || skill.proficiency >= 90)
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};

/**
 * Sort skills by proficiency level
 * @param {Object[]} skills - Array of skills to sort
 * @param {string} order - 'asc' or 'desc'
 * @returns {Object[]} Sorted array
 */
export const sortSkillsByProficiency = (skills, order = 'desc') => {
  const sorted = [...skills];
  return sorted.sort((a, b) => {
    if (order === 'desc') {
      return b.proficiency - a.proficiency;
    }
    return a.proficiency - b.proficiency;
  });
};

/**
 * Get related skills for a given skill
 * @param {string} skillId - Skill ID
 * @returns {Object[]} Array of related skills
 */
export const getRelatedSkills = (skillId) => {
  const skill = getSkillById(skillId);
  if (!skill) return [];
  return skill.relatedSkills
    .map((id) => getSkillById(id))
    .filter(Boolean);
};

/**
 * Get skills used in a specific project
 * @param {string} projectId - Project ID
 * @returns {Object[]} Array of skills used in project
 */
export const getProjectSkills = (projectId) => {
  return SKILLS.filter((skill) => skill.projects.includes(projectId));
};

export default SKILLS;

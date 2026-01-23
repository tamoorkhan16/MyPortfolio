# MyPortfolio - Interactive Developer Portfolio

A high-end, interactive developer portfolio showcasing frontend engineering expertise and motion design capabilities. Built with modern React, Vite, and advanced animation libraries.

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 5 - Fast, optimized bundling
- **Animation Library**: Framer Motion 12.27.1 - Smooth, performant animations
- **State Management**: Redux Toolkit 2.11.2 - Predictable state container
- **Routing**: React Router 7.12.0 - Client-side navigation
- **Linting**: ESLint 9 with React, JSX A11y, and Import plugins
- **Code Formatting**: Prettier 3 - Consistent code style
- **Package Manager**: npm

## 📋 Installation

### Prerequisites

- Node.js 18+ and npm 9+

### Setup Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd MyPortfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📚 Available Scripts

- **`npm run dev`** - Start development server with hot module replacement
- **`npm run build`** - Build optimized production bundle
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run lint:fix`** - Automatically fix ESLint violations
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check if code matches Prettier formatting

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, fonts, icons)
├── components/          # Reusable UI components
│   ├── Hero/
│   ├── CommandPalette/
│   ├── BentoGrid/
│   ├── SocialDock/
│   ├── Testimonials/
│   └── Timeline/
├── features/           # Feature-based modules
│   ├── theme/          # Theme management
│   ├── projects/       # Projects feature
│   ├── skills/         # Skills feature
│   ├── resume/         # Resume feature
│   └── contact/        # Contact feature
├── hooks/              # Custom React hooks
│   ├── useInView.js
│   ├── useMousePosition.js
│   └── useKeyboardShortcut.js
├── store/              # Redux configuration
│   └── index.js        # Store setup
├── styles/             # Global styles
│   ├── global.css      # Global styles and theme variables
│   └── tokens.js       # Design tokens
├── utils/              # Utility functions
│   ├── easings.js      # Animation easing functions
│   └── animations.js   # Animation helpers
├── App.jsx             # Root component with routing
└── main.jsx            # Application entry point
```

## 🎨 Key Features

### Performance Optimizations

- **Dependency Pre-bundling**: Core libraries (React, Framer Motion, Redux) pre-bundled for faster cold starts
- **Manual Code Splitting**: Vendor libraries separated into dedicated chunks
- **Modern Browser Targeting**: ESNext builds for modern browsers (Chrome, Firefox, Safari, Edge)
- **Server Warmup**: Critical entry points pre-transformed during development
- **Path Aliases**: Simplified imports with configured path aliases

### Development Experience

- **Hot Module Replacement**: Instant updates during development
- **ESLint Integration**: Code quality checks with React and accessibility plugins
- **Prettier Integration**: Automatic code formatting
- **CSS Custom Properties**: Comprehensive design token system

### Accessibility

- **WCAG Compliant**: Built with accessibility best practices
- **Focus Styles**: Clear focus indicators for keyboard navigation
- **Semantic HTML**: Proper HTML structure for screen readers
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## 🔧 Configuration Files

- **`vite.config.js`** - Vite build configuration with optimizations
- **`eslint.config.js`** - ESLint rules using flat config format
- **`.prettierrc`** - Prettier formatting rules
- **`.prettierignore`** - Files to ignore during formatting
- **`.gitignore`** - Git ignore rules

## 🌐 Routing

The application includes placeholder routes for:

- `/` - Home page
- `/projects/:id` - Project details page
- `/skills` - Skills lab page
- `/resume` - Resume hub page
- `/contact` - Contact portal page

Each route is ready for component implementation in the next phases.

## 🎬 Animation & Motion

Framer Motion is configured and ready for:

- Complex multi-element animations
- Gesture-driven interactions
- SVG path animations
- Page transitions
- Scroll-triggered animations

## 📦 Build Optimization

The Vite configuration includes:

- **ESBuild Minification**: Fast minification for production
- **Rollup Manual Chunks**: Optimized bundle size with separate vendor chunks
- **No Source Maps in Production**: Reduced bundle size
- **Explicit Extensions**: Faster module resolution

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The `dist/` directory contains the optimized build ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📖 Development Guidelines

1. **Component Structure**: Place reusable components in `src/components/`
2. **Features**: Organize feature-specific code in `src/features/`
3. **Hooks**: Add custom hooks to `src/hooks/`
4. **Utilities**: Place helper functions in `src/utils/`
5. **Styles**: Use CSS custom properties from `src/styles/global.css`
6. **Imports**: Use path aliases (e.g., `@components/Hero`)
7. **Code Quality**: Run `npm run lint` and `npm run format` before commits

## 🔐 Environment Variables

Create a `.env.local` file for environment-specific variables:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=MyPortfolio
```

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint:fix` and `npm run format`
4. Submit a pull request

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Last Updated**: January 2026  
**Vite Version**: 5.0+  
**React Version**: 19.0+

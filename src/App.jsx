import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@features/theme/ThemeProvider';
import { Navigation } from '@components/Navigation/Navigation';
import { Hero } from '@components/Hero/Hero';
import CommandPalette from '@components/CommandPalette/CommandPalette';
import ProjectsSection from '@components/Sections/ProjectsSection';
import SkillsSection from '@components/Sections/SkillsSection';
import ResumeSection from '@components/Sections/ResumeSection';
import ContactSection from '@components/Sections/ContactSection';

import { useKeyboardShortcut } from '@hooks/useKeyboardShortcut';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Open/close command palette with Ctrl+K or Cmd+K
  useKeyboardShortcut('k', ['ctrl', 'meta'], () => {
    setIsCommandPaletteOpen((prev) => !prev);
  });

  return (
    <ThemeProvider>
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

/**
 * Home Page Component
 *
 * Main landing page with Hero section followed by content sections.
 * Each section includes smooth scroll anchoring and scroll-triggered animations.
 */
function HomePage() {
  return (
    <main>
      {/* Hero Section with ID for navigation anchoring */}
      <section id="home">
        <Hero />
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

/**
 * Project Details Page
 *
 * Individual project showcase page (placeholder for future implementation)
 */
function ProjectDetailsPage() {
  return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Project Details Page</div>;
}

/**
 * Skills Page
 *
 * Detailed skills and expertise page (placeholder for future implementation)
 */
function SkillsPage() {
  return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Skills Lab Page</div>;
}

/**
 * Resume Page
 *
 * Full resume and work history (placeholder for future implementation)
 */
function ResumePage() {
  return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Resume Hub Page</div>;
}

/**
 * Contact Page
 *
 * Contact form and communication channels (placeholder for future implementation)
 */
function ContactPage() {
  return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Contact Portal Page</div>;
}

export default App;

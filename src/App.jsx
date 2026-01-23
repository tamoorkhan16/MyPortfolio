import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@features/theme/ThemeProvider';
import { ThemeToggle } from '@features/theme/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
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

// Placeholder components for routes
function HomePage() {
  return <div>Home Page</div>;
}

function ProjectDetailsPage() {
  return <div>Project Details Page</div>;
}

function SkillsPage() {
  return <div>Skills Lab Page</div>;
}

function ResumePage() {
  return <div>Resume Hub Page</div>;
}

function ContactPage() {
  return <div>Contact Portal Page</div>;
}

export default App;

/**
 * Resume Section
 *
 * Displays resume overview on home page with link to full resume page.
 */




import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';
import { RESUME_DATA } from '../../data/resumeData.js';
import AnimatedSection from '../AnimatedSection/AnimatedSection.jsx';
import WorkTimeline from '../Timeline/WorkTimeline.jsx';

const ResumeSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();

  return (
    <>
      <motion.section
        ref={ref}
        id="resume"
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={staggerChildren}
        style={{
          minHeight: '100vh',
          padding: 'var(--spacing-3xl) var(--spacing-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-background)',
        }}
      >
        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--color-text)',
          }}
        >
          Resume & Experience
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          Professional experience, education, certifications, and achievements. Download your PDF or explore the full resume.
        </motion.p>

        <motion.button
          variants={fadeInUp}
          onClick={() => navigate('/resume')}
          style={{
            padding: '0.75rem 2rem',
            background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(59, 130, 246))',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full Resume →
        </motion.button>
      </motion.section>

      {/* Work Timeline Section */}
      <AnimatedSection id="work-timeline">
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          margin: '3rem 0 1.5rem 0',
          color: 'var(--color-text)',
          textAlign: 'center',
        }}>
          Work History
        </h2>
        <p style={{
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 2.5rem auto',
          fontSize: '1.1rem',
        }}>
          Explore my career journey through an interactive timeline. Click on each node to see details, achievements, and technologies for every role.
        </p>
        <WorkTimeline experiences={RESUME_DATA.experience.map(exp => ({
          ...exp,
          dateRange: formatDateRange(exp.startDate, exp.endDate)
        }))} />
      </AnimatedSection>
    </>
  );
}

// Helper to format date range
function formatDateRange(start, end) {
  if (!start) return '';
  const [sy, sm] = start.split('-');
  const startStr = `${monthName(sm)} ${sy}`;
  let endStr = 'Present';
  if (end) {
    const [ey, em] = end.split('-');
    endStr = `${monthName(em)} ${ey}`;
  }
  return `${startStr} - ${endStr}`;
}

function monthName(m) {
  return [
    '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ][parseInt(m, 10)];
}

export default ResumeSection;

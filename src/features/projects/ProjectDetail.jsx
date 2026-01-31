import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

import { getProjectById } from '@data/projects';

import { fadeInUp, staggerChildren, tween } from '@utils/animations';

import ScrollProgressBar from './ScrollProgressBar';
import ImageGallery from './ImageGallery';
import ProjectOverview from './sections/ProjectOverview';
import TechStack from './sections/TechStack';
import ProjectChallenges from './sections/ProjectChallenges';
import ProjectLinks from './sections/ProjectLinks';
import ProjectOutcomes from './sections/ProjectOutcomes';

import styles from './ProjectDetail.module.css';

/**
 * ProjectDetail Component
 * Full project details page with scroll progress, image gallery, and sections
 */
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <motion.div
        className={styles.notFound}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={tween.smooth}
      >
        <h1>Project Not Found</h1>
        <p>The project you&rsquo;re looking for doesn&rsquo;t exist or has been removed.</p>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          ← Back to Home
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        className={styles.pageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={tween.smooth}
      >
        <ScrollProgressBar />

        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          style={{
            backgroundImage: `url('${project.thumbnail}')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tween.smooth}
        >
          {/* Overlay Gradient */}
          <div className={styles.heroOverlay} />

          {/* Hero Content */}
          <motion.div
            className={styles.heroContent}
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.button
              className={styles.backButton}
              onClick={() => navigate('/')}
              variants={fadeInUp}
              whileHover={{ x: -4 }}
              transition={tween.smooth}
              aria-label="Go back to home"
            >
              ← Back
            </motion.button>

            <motion.h1 className={styles.projectTitle} variants={fadeInUp}>
              {project.title}
            </motion.h1>

            <motion.p className={styles.projectDescription} variants={fadeInUp}>
              {project.description}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <motion.main
          className={styles.mainContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tween.smooth}
        >
          {/* Overview Section */}
          <ProjectOverview project={project} />

          {/* Tech Stack Section */}
          <TechStack project={project} />

          {/* Links Section */}
          <ProjectLinks project={project} />

          {/* Challenges Section */}
          <ProjectChallenges project={project} />

          {/* Outcomes Section */}
          <ProjectOutcomes project={project} />

          {/* Image Gallery Section */}
          <ImageGallery images={project.images} />
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;

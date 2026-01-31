/**
 * Skills Section
 *
 * Interactive skills showcase with 3D tag cloud, filtering, proficiency visualization,
 * tooltips, modals, search functionality, and live technology demos.
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

import { SKILLS, getSkillsByCategory, getCategories } from '@data/skills';
import ComponentPlayground from '@features/skills/ComponentPlayground';
import ProficiencyBar from '@features/skills/ProficiencyBar';
import SkillDetailModal from '@features/skills/SkillDetailModal';
import SkillFilter from '@features/skills/SkillFilter';
import SkillSearch from '@features/skills/SkillSearch';
import SkillTooltip from '@features/skills/SkillTooltip';
import TagCloud from '@features/skills/TagCloud';
import { useInView } from '@hooks/useInView';
import { fadeInUp, staggerChildren } from '@utils/animations';

import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Get categories for filter
  const categories = getCategories();

  // Get filtered skills based on active category
  const filteredSkills =
    activeCategory === 'all' ? SKILLS : getSkillsByCategory(activeCategory);

  // Handle skill card click
  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  // Handle mouse position for tooltip
  const handleMouseEnter = (skill, e) => {
    setHoveredSkillId(skill.id);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredSkillId(null);
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      className={styles.skillsSection}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={staggerChildren}
    >
      {/* Header */}
      <div className={styles.header}>
        <motion.h2 variants={fadeInUp} className={styles.title}>
          Skills & Expertise
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.subtitle}>
          Interactive exploration of my technical skills, proficiency levels, and hands-on experience
        </motion.p>
      </div>

      {/* Search */}
      <motion.div variants={fadeInUp} className={styles.searchContainer}>
        <SkillSearch onSelectSkill={handleSkillSelect} />
      </motion.div>

      {/* Main Content - Two Column Layout */}
      <div className={styles.mainContent}>
        {/* Left Column - 3D Tag Cloud */}
        <motion.div variants={fadeInUp} className={styles.cloudContainer}>
          <div className={styles.cloudHeader}>
            <h3 className={styles.cloudTitle}>Skill Cloud</h3>
            <p className={styles.cloudSubtitle}>Hover to rotate</p>
          </div>
          <TagCloud skills={filteredSkills} onSelectSkill={handleSkillSelect} />
        </motion.div>

        {/* Right Column - Filters & Skills */}
        <motion.div variants={fadeInUp} className={styles.skillsContainer}>
          {/* Filter */}
          <SkillFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
            skillCounts={{}}
          />

          {/* Skills Grid */}
          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSkillSelect(skill)}
                onMouseEnter={(e) => handleMouseEnter(skill, e)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Card Icon & Title */}
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{skill.icon}</span>
                  <div className={styles.cardTitleBlock}>
                    <h4 className={styles.cardTitle}>{skill.name}</h4>
                    <p className={styles.cardMeta}>{skill.category}</p>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <ProficiencyBar
                  proficiency={skill.proficiency}
                  yearsOfExperience={skill.yearsOfExperience}
                />

                {/* Card Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.profText}>{skill.proficiency}%</span>
                  <span className={styles.viewButton}>View Details →</span>
                </div>

                {/* Tooltip */}
                {hoveredSkillId === skill.id && (
                  <SkillTooltip
                    skill={skill}
                    isVisible={true}
                    position={tooltipPosition}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Featured Demos Section */}
      <motion.div variants={fadeInUp} className={styles.demosSection}>
        <h3 className={styles.demosTitle}>Interactive Technology Demos</h3>
        <ComponentPlayground />
      </motion.div>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

export default SkillsSection;

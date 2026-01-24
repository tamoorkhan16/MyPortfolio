/**
 * Framer Motion Animation Presets and Variants
 * 
 * A comprehensive collection of animation presets, variants, and utility functions
 * for use with Framer Motion. All animations are optimized for performance and
 * accessibility, using GPU-accelerated properties where possible.
 * 
 * Import structure:
 * - Easings from @utils/easings
 * - Duration tokens from @styles/tokens
 * - Animation constants from @utils/animationConstants
 * 
 * @example
 * import { fadeInUp, spring, staggerChildren } from '@utils/animations'
 * import { motion } from 'framer-motion'
 * 
 * <motion.div variants={fadeInUp} initial="initial" animate="animate">
 *   Content
 * </motion.div>
 */

import {
  SLIDE_DISTANCE,
  SCALE_FACTOR,
  ROTATE_ANGLE,
  BLUR_AMOUNT,
  STAGGER_DELAY,
  STAGGER_DELAY_FAST,
  STAGGER_DELAY_SLOW,
  SPRING_CONFIG_GENTLE,
  SPRING_CONFIG_STANDARD,
  SPRING_CONFIG_SNAPPY,
  SPRING_CONFIG_BOUNCY,
  SPRING_CONFIG_STIFF,
  DRAG_ELASTICITY,
  TAP_SCALE_FACTOR,
  HOVER_SCALE_FACTOR,
  REDUCED_MOTION_DURATION,
  RESPECT_PREFERS_REDUCED_MOTION,
} from '@utils/animationConstants';
import {
  easeOutExpo,
  easeInExpo,
  easeInOut,
  easeIn,
  easeOut,
  easeOutBack,
  easeInBack,
  easeOutCubic,
  easeInCubic,
  getFramerEasing,
} from '@utils/easings';

// ============================================================================
// DURATION CONSTANTS (in seconds for Framer Motion)
// ============================================================================

export const DURATION_INSTANT = 0.1;
export const DURATION_FAST = 0.15;
export const DURATION_BASE = 0.25;
export const DURATION_SLOW = 0.35;
export const DURATION_SLOWER = 0.5;
export const DURATION_SLOWEST = 0.7;

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

/**
 * Spring Transition Presets
 * 
 * Spring animations create natural, physics-based motion.
 * Perfect for playful, responsive interactions.
 */

/**
 * Gentle Spring - Soft, floaty motion
 * Use for: Non-critical UI elements, backgrounds, subtle feedback
 * Duration: 400ms - 600ms
 */
export const spring = {
  gentle: {
    type: 'spring',
    ...SPRING_CONFIG_GENTLE,
  },
  standard: {
    type: 'spring',
    ...SPRING_CONFIG_STANDARD,
  },
  snappy: {
    type: 'spring',
    ...SPRING_CONFIG_SNAPPY,
  },
  bouncy: {
    type: 'spring',
    ...SPRING_CONFIG_BOUNCY,
  },
  stiff: {
    type: 'spring',
    ...SPRING_CONFIG_STIFF,
  },
};

/**
 * Tween Transition Presets
 * 
 * Tween animations use cubic-bezier curves for precise control.
 * Perfect for smooth, predictable motion with exact timing.
 */
export const tween = {
  smooth: {
    type: 'tween',
    duration: DURATION_BASE,
    ease: getFramerEasing(easeInOut),
  },
  smooth_slow: {
    type: 'tween',
    duration: DURATION_SLOW,
    ease: getFramerEasing(easeInOut),
  },
  smooth_fast: {
    type: 'tween',
    duration: DURATION_FAST,
    ease: getFramerEasing(easeInOut),
  },
  sharp: {
    type: 'tween',
    duration: DURATION_FAST,
    ease: getFramerEasing(easeOutExpo),
  },
  dramatic: {
    type: 'tween',
    duration: DURATION_SLOW,
    ease: getFramerEasing(easeOutExpo),
  },
  quick: {
    type: 'tween',
    duration: DURATION_INSTANT,
    ease: getFramerEasing(easeOut),
  },
};

/**
 * Inertia Transition Presets
 * 
 * Inertia animations simulate momentum and deceleration.
 * Perfect for draggable elements and flick gestures.
 */
export const inertia = {
  default: {
    type: 'inertia',
    power: 0.05,
    timeConstant: 150,
    restDelta: 1,
  },
  gentle: {
    type: 'inertia',
    power: 0.03,
    timeConstant: 200,
    restDelta: 1,
  },
  aggressive: {
    type: 'inertia',
    power: 0.08,
    timeConstant: 100,
    restDelta: 1,
  },
};

// ============================================================================
// FADE VARIANTS
// ============================================================================

/**
 * Fade In - Simple opacity animation
 * 
 * Perfect for: Modals, alerts, content reveals, overlays
 * 
 * @example
 * <motion.div variants={fadeIn} initial="initial" animate="animate" exit="exit" />
 */
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOut),
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeIn),
    },
  },
};

/**
 * Fade In Up - Opacity + upward translation
 * 
 * Perfect for: List items, cards, content sections, hero text
 * Creates a subtle lift effect combined with fade
 * 
 * @example
 * <motion.div variants={fadeInUp} initial="initial" animate="animate" />
 * 
 * @example With stagger
 * <motion.div variants={staggerChildren}>
 *   {items.map(item => (
 *     <motion.div key={item.id} variants={fadeInUp} />
 *   ))}
 * </motion.div>
 */
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutCubic),
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInCubic),
    },
  },
};

/**
 * Fade In Down - Opacity + downward translation
 * 
 * Perfect for: Headers, top notifications, dropdown menus
 * Creates a subtle descent effect combined with fade
 */
export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutCubic),
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInCubic),
    },
  },
};

/**
 * Fade In Left - Opacity + leftward translation
 * 
 * Perfect for: Sidebar animations, right-aligned content entering
 */
export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutCubic),
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInCubic),
    },
  },
};

/**
 * Fade In Right - Opacity + rightward translation
 * 
 * Perfect for: Sidebar animations, left-aligned content entering
 */
export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutCubic),
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInCubic),
    },
  },
};

/**
 * Fade In Scale - Opacity + scale for popping effects
 * 
 * Perfect for: Modals, important notifications, emphasis reveals
 * Creates attention-grabbing pop effect
 */
export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutBack),
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInBack),
    },
  },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

/**
 * Slide In Left - Dramatic slide from left with easeOutExpo
 * 
 * Perfect for: Menus, panels, sidebars, full-width overlays
 * Uses exponential easing for dramatic entrance
 * 
 * @example
 * <motion.div variants={slideInLeft} initial="initial" animate="animate" exit="exit" />
 */
export const slideInLeft = {
  initial: {
    x: -SLIDE_DISTANCE,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
  exit: {
    x: -SLIDE_DISTANCE,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInExpo),
    },
  },
};

/**
 * Slide In Right - Dramatic slide from right with easeOutExpo
 * 
 * Perfect for: Panels opening from right, drawer animations
 */
export const slideInRight = {
  initial: {
    x: SLIDE_DISTANCE,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
  exit: {
    x: SLIDE_DISTANCE,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInExpo),
    },
  },
};

/**
 * Slide In Up - Dramatic slide from bottom with easeOutExpo
 * 
 * Perfect for: Bottom sheets, modals, notifications from bottom
 */
export const slideInUp = {
  initial: {
    y: SLIDE_DISTANCE,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
  exit: {
    y: SLIDE_DISTANCE,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInExpo),
    },
  },
};

/**
 * Slide In Down - Dramatic slide from top with easeOutExpo
 * 
 * Perfect for: Top notifications, dropdown menus, top sheets
 */
export const slideInDown = {
  initial: {
    y: -SLIDE_DISTANCE,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
  exit: {
    y: -SLIDE_DISTANCE,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInExpo),
    },
  },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

/**
 * Scale In - Scale from 0.8 to 1 with easeOutBack
 * 
 * Perfect for: Popovers, tooltips, emphasis reveals
 * Creates attention-grabbing pop-in effect
 * 
 * @example
 * <motion.div variants={scaleIn} initial="initial" animate="animate" />
 */
export const scaleIn = {
  initial: {
    scale: SCALE_FACTOR,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeOutBack),
    },
  },
  exit: {
    scale: SCALE_FACTOR,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
      ease: getFramerEasing(easeInBack),
    },
  },
};

/**
 * Scale Out - Scale from 1 to 0.8 with easeInBack
 * 
 * Perfect for: Dismissal animations, collapse transitions
 */
export const scaleOut = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: SCALE_FACTOR,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_BASE,
      ease: getFramerEasing(easeInBack),
    },
  },
};

/**
 * Scale Bounce - Scale with bouncy elastic easing
 * 
 * Perfect for: Playful interactions, celebration moments
 * Creates noticeable bounce effect
 */
export const scaleBounce = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      ...SPRING_CONFIG_BOUNCY,
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_FAST,
    },
  },
};

/**
 * Scale Rotate - Combined scale + rotation effect
 * 
 * Perfect for: Loading spinners, playful reveals
 * Creates dynamic, energetic motion
 */
export const scaleRotate = {
  initial: {
    scale: SCALE_FACTOR,
    rotate: -10,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ...SPRING_CONFIG_SNAPPY,
    },
  },
};

// ============================================================================
// ROTATE VARIANTS
// ============================================================================

/**
 * Rotate In - Rotate from -180° to 0°
 * 
 * Perfect for: Loading states, playful reveals, coin flip effects
 * 
 * @example
 * <motion.div variants={rotateIn} initial="initial" animate="animate" />
 */
export const rotateIn = {
  initial: {
    rotate: -ROTATE_ANGLE,
    opacity: 0,
  },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
};

/**
 * Rotate Out - Rotate from 0° to 180°
 * 
 * Perfect for: Exit animations, loading completion
 */
export const rotateOut = {
  animate: {
    rotate: ROTATE_ANGLE,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeInExpo),
    },
  },
};

/**
 * Rotate 3D - 3D rotation on perspective axis
 * 
 * Perfect for: Card flips, premium interactions
 * Creates depth and dimensionality
 */
export const rotate3D = {
  initial: {
    rotateY: -90,
    opacity: 0,
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOutExpo),
    },
  },
};

// ============================================================================
// BLUR VARIANTS
// ============================================================================

/**
 * Blur In - Animate from blurred to sharp
 * 
 * Perfect for: Background reveals, glassmorphic transitions
 * Creates sophisticated depth effect
 * 
 * @example
 * <motion.div variants={blurIn} initial="initial" animate="animate" />
 */
export const blurIn = {
  initial: {
    filter: `blur(${BLUR_AMOUNT}px)`,
    opacity: 0,
  },
  animate: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeOut),
    },
  },
};

/**
 * Blur Out - Animate from sharp to blurred
 * 
 * Perfect for: Background exits, content fading
 */
export const blurOut = {
  animate: {
    filter: `blur(${BLUR_AMOUNT}px)`,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: DURATION_SLOW,
      ease: getFramerEasing(easeIn),
    },
  },
};

// ============================================================================
// STAGGER CONFIGURATIONS
// ============================================================================

/**
 * Stagger Children - Default stagger timing
 * 
 * Perfect for: Lists, grids, multiple sequential reveals
 * Delays each child by fixed amount
 * 
 * @example
 * <motion.div variants={staggerChildren}>
 *   {items.map(item => (
 *     <motion.div key={item.id} variants={fadeInUp} />
 *   ))}
 * </motion.div>
 */
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger Children Fast - Rapid sequential animation
 * 
 * Perfect for: Quick lists, snappy feedback
 */
export const staggerChildrenFast = {
  animate: {
    transition: {
      staggerChildren: STAGGER_DELAY_FAST,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger Children Slow - Dramatic sequential animation
 * 
 * Perfect for: Emphasis sequences, premium experiences
 */
export const staggerChildrenSlow = {
  animate: {
    transition: {
      staggerChildren: STAGGER_DELAY_SLOW,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger Children Reverse - Reverse animation order
 * 
 * Perfect for: Dismissal sequences, reverse reveals
 */
export const staggerChildrenReverse = {
  animate: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0,
      staggerDirection: -1,
    },
  },
};

// ============================================================================
// SCROLL-TRIGGERED PRESETS
// ============================================================================

/**
 * Scroll Reveal - Intersection Observer configuration
 * 
 * Perfect for: Content reveals on scroll, lazy animation triggers
 * Triggers when element enters viewport
 * 
 * @example
 * import { useInView } from 'framer-motion'
 * 
 * const ref = useRef(null)
 * const isInView = useInView(ref, { once: true, amount: 0.5 })
 * 
 * <motion.div
 *   ref={ref}
 *   variants={fadeInUp}
 *   initial="initial"
 *   animate={isInView ? 'animate' : 'initial'}
 * />
 */
export const scrollReveal = {
  threshold: 0.1,
  rootMargin: '-50px',
  triggerOnce: true,
};

/**
 * Scroll Progress - Scroll-linked animation configuration
 * 
 * Perfect for: Progress bars, scroll indicators
 * Animates based on scroll position
 */
export const scrollProgress = {
  threshold: 0,
  rootMargin: '0px',
};

/**
 * Parallax - Parallax effect configuration
 * 
 * Perfect for: Hero sections, depth effects
 * Creates motion based on scroll position
 */
export const parallax = {
  threshold: 0,
  rootMargin: '50px',
};

// ============================================================================
// GESTURE PRESETS
// ============================================================================

/**
 * Hover Effect - Scale and shadow on hover
 * 
 * Perfect for: Interactive buttons, cards, links
 * Creates feedback for hover interaction
 * 
 * @example
 * <motion.div
 *   whileHover={hover.scale}
 *   whileTap={tap.press}
 * />
 */
export const hover = {
  scale: {
    whileHover: {
      scale: HOVER_SCALE_FACTOR,
      transition: spring.snappy,
    },
  },
  lift: {
    whileHover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: spring.snappy,
    },
  },
  glow: {
    whileHover: {
      scale: HOVER_SCALE_FACTOR,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
      transition: spring.snappy,
    },
  },
};

/**
 * Tap Effect - Scale down on click
 * 
 * Perfect for: Buttons, clickable elements
 * Creates tactile feedback
 * 
 * @example
 * <motion.button whileTap={tap.press} />
 */
export const tap = {
  press: {
    whileTap: {
      scale: TAP_SCALE_FACTOR,
      transition: {
        type: 'spring',
        ...SPRING_CONFIG_SNAPPY,
      },
    },
  },
  shrink: {
    whileTap: {
      scale: 0.95,
      y: 2,
    },
  },
};

/**
 * Drag Preset - Drag constraints and momentum
 * 
 * Perfect for: Draggable elements, sliders
 * Provides smooth dragging with inertia
 */
export const drag = {
  horizontal: {
    drag: 'x',
    dragElastic: DRAG_ELASTICITY,
    dragTransition: inertia.default,
  },
  vertical: {
    drag: 'y',
    dragElastic: DRAG_ELASTICITY,
    dragTransition: inertia.default,
  },
  free: {
    drag: true,
    dragElastic: DRAG_ELASTICITY,
    dragTransition: inertia.default,
  },
};

/**
 * Magnetic Effect - Magnetic attraction toward cursor
 * 
 * Perfect for: Interactive buttons, hover effects
 * Creates subtle attraction to pointer
 * 
 * Note: Requires custom hook for full implementation
 */
export const magnetic = {
  whileHover: {
    scale: 1.1,
    transition: spring.snappy,
  },
};

// ============================================================================
// LAYOUT ANIMATION PRESETS
// ============================================================================

/**
 * Layout Transition - Shared layout animation configuration
 * 
 * Perfect for: Reorderable lists, resizable elements
 * Animates position/size changes smoothly
 * 
 * @example
 * <motion.div
 *   layout
 *   layoutId={`item-${id}`}
 *   transition={layoutTransition.smooth}
 * />
 */
export const layoutTransition = {
  smooth: {
    type: 'spring',
    ...SPRING_CONFIG_GENTLE,
  },
  snappy: {
    type: 'spring',
    ...SPRING_CONFIG_SNAPPY,
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create staggered variants from a base variant
 * 
 * Generates child variants with automatic stagger delay
 * 
 * @param {Object} baseVariant - Base variant (e.g., fadeInUp)
 * @param {number} staggerDelay - Delay between children (default: 0.1)
 * @returns {Object} Variant object suitable for use with motion.div variants prop
 * 
 * @example
 * const staggeredVariant = createStaggerVariants(fadeInUp, 0.05);
 * 
 * <motion.div variants={staggeredVariant}>
 *   {items.map(item => (
 *     <motion.div key={item.id} variants={fadeInUp} />
 *   ))}
 * </motion.div>
 */
export const createStaggerVariants = (baseVariant, staggerDelay = STAGGER_DELAY) => {
  return {
    initial: baseVariant.initial,
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  };
};

/**
 * Create scroll-triggered variants
 * 
 * Generates variants optimized for Intersection Observer
 * 
 * @param {number} threshold - Visibility threshold (0-1)
 * @param {string} rootMargin - Root margin for observer
 * @returns {Object} Configuration object for useInView hook
 * 
 * @example
 * const config = createScrollVariants(0.2, '-50px');
 * const isInView = useInView(ref, config);
 */
export const createScrollVariants = (
  threshold = 0.1,
  rootMargin = '-50px'
) => {
  return {
    once: true,
    amount: threshold,
    margin: rootMargin,
  };
};

/**
 * Combine multiple variant objects
 * 
 * Merges variant objects while preserving structure
 * 
 * @param {...Object} variants - Variant objects to combine
 * @returns {Object} Combined variant object
 * 
 * @example
 * const combined = combineVariants(fadeInUp, scaleIn);
 */
export const combineVariants = (...variants) => {
  const combined = {
    initial: {},
    animate: {},
    exit: {},
  };

  variants.forEach((variant) => {
    if (variant.initial) {
      Object.assign(combined.initial, variant.initial);
    }
    if (variant.animate) {
      Object.assign(combined.animate, variant.animate);
    }
    if (variant.exit) {
      Object.assign(combined.exit, variant.exit);
    }
  });

  return combined;
};

/**
 * Create responsive animation variants
 * 
 * Returns different variants based on screen size
 * Useful for adapting animations to mobile/tablet/desktop
 * 
 * @param {Object} variants - { mobile, tablet, desktop } variant objects
 * @param {string} screenSize - Current screen size: 'mobile', 'tablet', 'desktop'
 * @returns {Object} Appropriate variant for current screen size
 * 
 * @example
 * const variants = createResponsiveVariants({
 *   mobile: fadeInUp,
 *   tablet: fadeInLeft,
 *   desktop: slideInLeft
 * }, screenSize);
 */
export const createResponsiveVariants = (variants, screenSize) => {
  const sizeMap = {
    mobile: variants.mobile || variants.default,
    tablet: variants.tablet || variants.mobile || variants.default,
    desktop: variants.desktop || variants.tablet || variants.mobile || variants.default,
  };

  return sizeMap[screenSize] || fadeInUp;
};

/**
 * Add delay to an existing variant
 * 
 * Wraps a variant with additional delay on animate
 * 
 * @param {Object} variant - Variant object to modify
 * @param {number} delay - Delay in seconds
 * @returns {Object} Modified variant with delay
 * 
 * @example
 * const delayedVariant = withDelay(fadeInUp, 0.2);
 */
export const withDelay = (variant, delay) => {
  if (!variant || !variant.animate) return variant;

  return {
    ...variant,
    animate: {
      ...variant.animate,
      transition: {
        ...variant.animate.transition,
        delay,
      },
    },
  };
};

/**
 * Override duration in an existing variant
 * 
 * Modifies animation duration while preserving easing
 * 
 * @param {Object} variant - Variant object to modify
 * @param {number} duration - New duration in seconds
 * @returns {Object} Modified variant with new duration
 * 
 * @example
 * const fasterVariant = withDuration(fadeInUp, 0.15);
 */
export const withDuration = (variant, duration) => {
  if (!variant || !variant.animate) return variant;

  return {
    ...variant,
    animate: {
      ...variant.animate,
      transition: {
        ...variant.animate.transition,
        duration,
      },
    },
  };
};

/**
 * Create accessible animation variant with reduced motion support
 * 
 * Checks user's prefers-reduced-motion preference
 * Returns instant animation if user prefers reduced motion
 * 
 * @param {Object} variant - Full animation variant
 * @returns {Object} Variant respecting prefers-reduced-motion
 * 
 * @example
 * const accessibleVariant = createAccessibleVariant(fadeInUp);
 */
export const createAccessibleVariant = (variant) => {
  if (!RESPECT_PREFERS_REDUCED_MOTION) {
    return variant;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    return variant;
  }

  // Return instant version for users with prefers-reduced-motion
  return {
    initial: variant.initial || {},
    animate: {
      ...variant.animate,
      transition: {
        duration: REDUCED_MOTION_DURATION,
      },
    },
    exit: variant.exit || {},
  };
};

// ============================================================================
// EXPORT ALL PRESETS AND UTILITIES
// ============================================================================

export default {
  // Durations
  DURATION_INSTANT,
  DURATION_FAST,
  DURATION_BASE,
  DURATION_SLOW,
  DURATION_SLOWER,
  DURATION_SLOWEST,

  // Transitions
  spring,
  tween,
  inertia,

  // Fade variants
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInScale,

  // Slide variants
  slideInLeft,
  slideInRight,
  slideInUp,
  slideInDown,

  // Scale variants
  scaleIn,
  scaleOut,
  scaleBounce,
  scaleRotate,

  // Rotate variants
  rotateIn,
  rotateOut,
  rotate3D,

  // Blur variants
  blurIn,
  blurOut,

  // Stagger
  staggerChildren,
  staggerChildrenFast,
  staggerChildrenSlow,
  staggerChildrenReverse,

  // Scroll
  scrollReveal,
  scrollProgress,
  parallax,

  // Gestures
  hover,
  tap,
  drag,
  magnetic,

  // Layout
  layoutTransition,

  // Utilities
  createStaggerVariants,
  createScrollVariants,
  combineVariants,
  createResponsiveVariants,
  withDelay,
  withDuration,
  createAccessibleVariant,
};

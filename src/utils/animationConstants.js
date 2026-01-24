/**
 * Animation Constants
 * 
 * Reusable animation values for consistent motion across the application.
 * These values are referenced in animation presets and component implementations.
 * 
 * All distances are in pixels, durations in seconds (for Framer Motion compatibility),
 * and angles in degrees.
 */

// ============================================================================
// DISTANCES & DIMENSIONS
// ============================================================================

/**
 * Default slide distance for slide animations
 * Used in slideIn and slideOut variants
 */
export const SLIDE_DISTANCE = 100; // pixels

/**
 * Scale factor for scale animations
 * Used in scaleIn and scaleOut variants
 * 0.8 = 80% of original size
 */
export const SCALE_FACTOR = 0.8;

/**
 * Alternative scale factor for subtle animations
 * Used in hover states and micro-interactions
 */
export const SCALE_FACTOR_SUBTLE = 0.95;

/**
 * Default rotation angle for rotate animations
 * Used in rotateIn and rotateOut variants
 */
export const ROTATE_ANGLE = 180; // degrees

/**
 * Blur amount for blur entry/exit animations
 * Used in blurIn and blurOut variants
 */
export const BLUR_AMOUNT = 10; // pixels

// ============================================================================
// STAGGER TIMING
// ============================================================================

/**
 * Default delay between staggered child animations
 * Used in staggerChildren configurations
 */
export const STAGGER_DELAY = 0.1; // seconds

/**
 * Fast stagger delay for rapid sequences
 * Creates quick, snappy cascading effects
 */
export const STAGGER_DELAY_FAST = 0.05; // seconds

/**
 * Slow stagger delay for emphasizing individual items
 * Creates dramatic, sequential reveals
 */
export const STAGGER_DELAY_SLOW = 0.15; // seconds

/**
 * Very slow stagger delay for epic/premium feels
 * Use sparingly for maximum impact
 */
export const STAGGER_DELAY_SLOWEST = 0.25; // seconds

// ============================================================================
// INTERSECTION OBSERVER CONFIGURATION
// ============================================================================

/**
 * Threshold for scroll-reveal animations
 * 0.1 = 10% of element must be visible to trigger
 * Higher values = element more visible before triggering
 */
export const REVEAL_THRESHOLD = 0.1;

/**
 * Root margin for scroll-reveal intersection observer
 * Negative values trigger animation before element enters viewport
 * "-50px" = trigger 50px before element comes into view
 */
export const REVEAL_ROOT_MARGIN = '-50px';

/**
 * Alternative reveal threshold for hero sections
 * Use when you want animation to trigger earlier
 */
export const REVEAL_THRESHOLD_HERO = 0.05;

/**
 * Alternative reveal root margin for cards
 * More aggressive reveal triggering
 */
export const REVEAL_ROOT_MARGIN_CARD = '-100px';

// ============================================================================
// MAGNETIC EFFECT CONFIGURATION
// ============================================================================

/**
 * Strength factor for magnetic attraction effects
 * 0.3 = element moves 30% toward cursor
 * Higher values = stronger attraction (up to 1.0)
 */
export const MAGNETIC_STRENGTH = 0.3;

/**
 * Radius of magnetic effect influence
 * Elements within this distance are affected by cursor
 */
export const MAGNETIC_RADIUS = 100; // pixels

/**
 * Distance at which magnetic effect fully activates
 * Closer than this distance = full effect strength
 */
export const MAGNETIC_ACTIVATION_DISTANCE = 50; // pixels

// ============================================================================
// DRAG & GESTURE CONFIGURATION
// ============================================================================

/**
 * Drag elasticity factor
 * Higher values = more elastic resistance at boundaries
 */
export const DRAG_ELASTICITY = 0.2;

/**
 * Drag friction when releasing
 * Higher values = slower momentum decay
 */
export const DRAG_FRICTION = 0.7;

/**
 * Default drag transition for momentum animation
 * Used when user releases element
 */
export const DRAG_INERTIA_TRANSITION = {
  type: 'inertia',
  power: 0.05,
  timeConstant: 150,
  restDelta: 1,
};

/**
 * Tap scale factor for button feedback
 * 0.95 = scales down to 95% on click
 */
export const TAP_SCALE_FACTOR = 0.95;

/**
 * Hover scale factor for interactive elements
 * 1.05 = scales up to 105% on hover
 */
export const HOVER_SCALE_FACTOR = 1.05;

// ============================================================================
// SCROLL LINKED ANIMATION CONFIGURATION
// ============================================================================

/**
 * Parallax effect strength
 * 0.5 = element moves at 50% of scroll speed
 * Higher values = more dramatic parallax
 */
export const PARALLAX_STRENGTH = 0.5;

/**
 * Alternative parallax strength for subtle effects
 * Use for background elements
 */
export const PARALLAX_STRENGTH_SUBTLE = 0.2;

/**
 * Aggressive parallax for hero sections
 * Creates more dramatic depth
 */
export const PARALLAX_STRENGTH_STRONG = 0.8;

// ============================================================================
// LAYOUT ANIMATION CONFIGURATION
// ============================================================================

/**
 * Layout animation mode
 * "position" = faster, good for most cases
 * "size" = includes dimension changes
 */
export const LAYOUT_ANIMATION_MODE = 'position';

/**
 * Shared layout animation ID prefix
 * Use with layoutId for automatic transitions
 * @example
 * layoutId={`${SHARED_LAYOUT_ID}-card-${id}`}
 */
export const SHARED_LAYOUT_ID = 'layout';

// ============================================================================
// ACCESSIBILITY CONFIGURATION
// ============================================================================

/**
 * Reduced motion duration
 * Used when user prefers reduced motion
 * Keeps animations but makes them instant (0.01s)
 */
export const REDUCED_MOTION_DURATION = 0.01; // seconds

/**
 * Whether to respect prefers-reduced-motion preference
 * Set to true to automatically disable animations for users with this preference
 */
export const RESPECT_PREFERS_REDUCED_MOTION = true;

// ============================================================================
// SPRING PHYSICS CONFIGURATION
// ============================================================================

/**
 * Gentle spring configuration
 * Low stiffness = slow, floaty feel
 * Higher damping = less bouncy
 */
export const SPRING_CONFIG_GENTLE = {
  stiffness: 100,
  damping: 15,
  mass: 1,
};

/**
 * Standard spring configuration
 * Balanced between responsiveness and smoothness
 */
export const SPRING_CONFIG_STANDARD = {
  stiffness: 200,
  damping: 20,
  mass: 1,
};

/**
 * Snappy spring configuration
 * High stiffness = quick, responsive feel
 * Good for micro-interactions
 */
export const SPRING_CONFIG_SNAPPY = {
  stiffness: 300,
  damping: 20,
  mass: 1,
};

/**
 * Bouncy spring configuration
 * High stiffness, low damping = obvious bounce
 * Use sparingly for playful interactions
 */
export const SPRING_CONFIG_BOUNCY = {
  stiffness: 300,
  damping: 10,
  mass: 1,
};

/**
 * Stiff spring configuration
 * Maximum responsiveness
 * Good for UI that needs to feel heavy/solid
 */
export const SPRING_CONFIG_STIFF = {
  stiffness: 400,
  damping: 25,
  mass: 1,
};

// ============================================================================
// EXPORT ALL CONSTANTS
// ============================================================================

export default {
  // Distances & Dimensions
  SLIDE_DISTANCE,
  SCALE_FACTOR,
  SCALE_FACTOR_SUBTLE,
  ROTATE_ANGLE,
  BLUR_AMOUNT,

  // Stagger Timing
  STAGGER_DELAY,
  STAGGER_DELAY_FAST,
  STAGGER_DELAY_SLOW,
  STAGGER_DELAY_SLOWEST,

  // Intersection Observer
  REVEAL_THRESHOLD,
  REVEAL_ROOT_MARGIN,
  REVEAL_THRESHOLD_HERO,
  REVEAL_ROOT_MARGIN_CARD,

  // Magnetic Effect
  MAGNETIC_STRENGTH,
  MAGNETIC_RADIUS,
  MAGNETIC_ACTIVATION_DISTANCE,

  // Drag & Gesture
  DRAG_ELASTICITY,
  DRAG_FRICTION,
  DRAG_INERTIA_TRANSITION,
  TAP_SCALE_FACTOR,
  HOVER_SCALE_FACTOR,

  // Scroll Linked Animation
  PARALLAX_STRENGTH,
  PARALLAX_STRENGTH_SUBTLE,
  PARALLAX_STRENGTH_STRONG,

  // Layout Animation
  LAYOUT_ANIMATION_MODE,
  SHARED_LAYOUT_ID,

  // Accessibility
  REDUCED_MOTION_DURATION,
  RESPECT_PREFERS_REDUCED_MOTION,

  // Spring Physics
  SPRING_CONFIG_GENTLE,
  SPRING_CONFIG_STANDARD,
  SPRING_CONFIG_SNAPPY,
  SPRING_CONFIG_BOUNCY,
  SPRING_CONFIG_STIFF,
};

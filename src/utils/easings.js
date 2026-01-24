/**
 * Apple-like Cubic-Bezier Easing Functions
 * 
 * A comprehensive collection of timing functions inspired by Apple's Human Interface Guidelines.
 * All easings are exported as [x1, y1, x2, y2] arrays compatible with CSS cubic-bezier and Framer Motion.
 * 
 * These curves provide smooth, natural motion that feels responsive and polished.
 * Reference: https://easings.net/ and Apple Human Interface Guidelines
 */

/**
 * Standard Ease In-Out
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │      ╱╲         │
 * │    ╱    ╲       │
 * │  ╱        ╲     │
 * │╱            ╲   │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Default transition for most UI elements
 * - Dialog/modal entrances and exits
 * - State changes that need balanced acceleration and deceleration
 * 
 * Duration Recommendation: 250ms - 350ms
 * GPU Accelerated: Yes (transform and opacity)
 */
export const easeInOut = [0.4, 0.0, 0.2, 1.0];

/**
 * Ease In (Accelerating from zero velocity)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 ╲
 * │                  ╲
 * │                   ╲
 * │╱                   ╲
 * └─────────────────┘
 * 
 * Use Cases:
 * - Exiting animations (elements leaving screen)
 * - Building tension before action
 * - Dismissal actions
 * 
 * Duration Recommendation: 150ms - 300ms
 * GPU Accelerated: Yes
 */
export const easeIn = [0.42, 0.0, 1.0, 1.0];

/**
 * Ease Out (Decelerating to zero velocity)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                 │
 * │╲                 │
 * │ ╲                │
 * │  ╲_______________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Entering animations (elements appearing)
 * - Important interactions and reveals
 * - Emphasis on landing point
 * 
 * Duration Recommendation: 200ms - 400ms
 * GPU Accelerated: Yes
 */
export const easeOut = [0.0, 0.0, 0.58, 1.0];

/**
 * Exponential Ease In (Strong acceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 │
 * │                 │
 * │                ╱│
 * │╱───────────────╱ │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Dramatic exits and dismissals
 * - Creating emphasis through acceleration
 * - Fast action feedback
 * 
 * Duration Recommendation: 150ms - 250ms
 * GPU Accelerated: Yes
 */
export const easeInExpo = [0.95, 0.05, 0.795, 0.034];

/**
 * Exponential Ease Out (Strong deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │ ╲               │
 * │  ╲              │
 * │   ╲_____________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Dramatic entrances and reveals
 * - Slide-in animations for menus and panels
 * - Bounce-free pop animations
 * 
 * Duration Recommendation: 300ms - 500ms
 * GPU Accelerated: Yes
 */
export const easeOutExpo = [0.19, 1.0, 0.22, 1.0];

/**
 * Exponential Ease In-Out (Strong acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │        ╱╲       │
 * │      ╱    ╲     │
 * │    ╱        ╲   │
 * │  ╱            ╲ │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Full-screen transitions
 * - Emphasis on both entry and exit
 * - Orchestrated multi-element animations
 * 
 * Duration Recommendation: 350ms - 500ms
 * GPU Accelerated: Yes
 */
export const easeInOutExpo = [0.87, 0.0, 0.13, 1.0];

/**
 * Circular Ease In (Acceleration along circular arc)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 │
 * │                ╱│
 * │              ╱ │
 * │╱────────────╱  │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Circular/radial motion patterns
 * - Smooth container scaling
 * - Arc-based navigation
 * 
 * Duration Recommendation: 200ms - 350ms
 * GPU Accelerated: Yes
 */
export const easeInCirc = [0.6, 0.04, 0.98, 0.335];

/**
 * Circular Ease Out (Deceleration along circular arc)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │ ╲               │
 * │  ╲              │
 * │   ╲_____________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Smooth reveal animations
 * - Natural-feeling bounces (without overshoot)
 * - Drawer and sidebar animations
 * 
 * Duration Recommendation: 250ms - 400ms
 * GPU Accelerated: Yes
 */
export const easeOutCirc = [0.075, 0.82, 0.165, 1.0];

/**
 * Circular Ease In-Out (Circular acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │       ╱╲        │
 * │      ╱  ╲       │
 * │    ╱      ╲     │
 * │  ╱          ╲   │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Balanced circular transitions
 * - Modal overlay transitions
 * - Smooth state changes
 * 
 * Duration Recommendation: 300ms - 450ms
 * GPU Accelerated: Yes
 */
export const easeInOutCirc = [0.785, 0.135, 0.15, 0.86];

/**
 * Quintic Ease In (Powerful acceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 │
 * │                 │
 * │                ╱│
 * │╱────────────────│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Strong emphasis on motion start
 * - Dismissal of unimportant elements
 * - Heavy/weighty motion
 * 
 * Duration Recommendation: 150ms - 250ms
 * GPU Accelerated: Yes
 */
export const easeInQuint = [0.755, 0.05, 0.855, 0.06];

/**
 * Quintic Ease Out (Powerful deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │ ╲               │
 * │  ╲              │
 * │   ╰_____________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Important element reveals
 * - Entrance animations with emphasis
 * - Micro-interactions that demand attention
 * 
 * Duration Recommendation: 300ms - 450ms
 * GPU Accelerated: Yes
 */
export const easeOutQuint = [0.23, 1.0, 0.32, 1.0];

/**
 * Quintic Ease In-Out (Powerful acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │        ╱╲       │
 * │      ╱    ╲     │
 * │    ╱        ╲   │
 * │  ╱            ╲ │
 * └─────────────────┘
 * 
 * Use Cases:
 * - High-impact transitions
 * - Orchestrated sequences
 * - Premium UI experiences
 * 
 * Duration Recommendation: 350ms - 500ms
 * GPU Accelerated: Yes
 */
export const easeInOutQuint = [0.86, 0.0, 0.07, 1.0];

/**
 * Cubic Ease In (Moderate acceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 │
 * │                ╱│
 * │              ╱ │
 * │╱─────────────╱  │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Standard exit animations
 * - Building suspense
 * - Subtle acceleration
 * 
 * Duration Recommendation: 200ms - 350ms
 * GPU Accelerated: Yes
 */
export const easeInCubic = [0.55, 0.055, 0.675, 0.19];

/**
 * Cubic Ease Out (Moderate deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │ ╲               │
 * │  ╲              │
 * │   ╰_____________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Standard entrance animations
 * - Natural-feeling state changes
 * - Default choice for most animations
 * 
 * Duration Recommendation: 250ms - 400ms
 * GPU Accelerated: Yes
 */
export const easeOutCubic = [0.215, 0.61, 0.355, 1.0];

/**
 * Cubic Ease In-Out (Moderate acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │       ╱╲        │
 * │      ╱  ╲       │
 * │    ╱      ╲     │
 * │  ╱          ╲   │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Balanced transitions
 * - Dialog animations
 * - Smooth state changes
 * 
 * Duration Recommendation: 300ms - 450ms
 * GPU Accelerated: Yes
 */
export const easeInOutCubic = [0.645, 0.045, 0.355, 1.0];

/**
 * Sine Ease In (Gentle acceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │                 │
 * │               ╱ │
 * │             ╱   │
 * │╱──────────╱     │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Gentle exits
 * - Smooth transitions
 * - Subtle animations
 * 
 * Duration Recommendation: 250ms - 400ms
 * GPU Accelerated: Yes
 */
export const easeInSine = [0.47, 0.0, 0.745, 0.715];

/**
 * Sine Ease Out (Gentle deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │  ╲              │
 * │    ╲            │
 * │      ╰_________╱│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Gentle reveals
 * - Comfortable entrance animations
 * - Subtle state feedback
 * 
 * Duration Recommendation: 300ms - 450ms
 * GPU Accelerated: Yes
 */
export const easeOutSine = [0.39, 0.575, 0.565, 1.0];

/**
 * Sine Ease In-Out (Gentle acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │       ╱╲        │
 * │      ╱  ╲       │
 * │    ╱      ╲     │
 * │  ╱          ╲   │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Smooth, comfortable transitions
 * - Accessibility-focused animations
 * - Gentle emphasis
 * 
 * Duration Recommendation: 350ms - 500ms
 * GPU Accelerated: Yes
 */
export const easeInOutSine = [0.445, 0.05, 0.55, 0.95];

/**
 * Back Ease In (Slight overshoot on entry)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │    ╱|           │
 * │   ╱ │           │
 * │  ╱  │           │
 * │ ╱   ╲╲          │
 * │╱     ╲╲_________│
 * └─────────────────┘
 * 
 * Use Cases:
 * - Playful exits
 * - Whimsical interactions
 * - "Pull back and launch" feeling
 * 
 * Duration Recommendation: 200ms - 350ms
 * GPU Accelerated: Yes
 */
export const easeInBack = [0.6, -0.28, 0.735, 0.045];

/**
 * Back Ease Out (Slight overshoot on exit)
 * 
 * Visual representation:
 * ┌──────────────┐
 * │         ╱╲   │
 * │        ╱  ╲  │
 * │       ╱    ╲ │
 * │      ╱      ╲│╲
 * │     ╱        │ │
 * └──────────────┘ │
 *                  ╱
 * 
 * Use Cases:
 * - Playful entrances
 * - Emphasis with slight bounce
 * - Attention-grabbing reveals
 * 
 * Duration Recommendation: 250ms - 400ms
 * GPU Accelerated: Yes
 */
export const easeOutBack = [0.175, 0.885, 0.32, 1.275];

/**
 * Back Ease In-Out (Overshoot on both acceleration and deceleration)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │      ╱╲         │
 * │    ╱    ╲       │
 * │  ╱        ╲     │
 * │╱            ╲   │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Playful state transitions
 * - Interactive card flips
 * - Whimsical modal animations
 * 
 * Duration Recommendation: 350ms - 500ms
 * GPU Accelerated: Yes
 */
export const easeInOutBack = [0.68, -0.55, 0.265, 1.55];

/**
 * Elastic Ease In (Spring-like acceleration with oscillation)
 * 
 * Visual representation:
 * ┌──────────────────┐
 * │                  │
 * │        ∿∿∿      │
 * │      ∿    ∿    │
 * │    ∿        ∿  │
 * │  ∿            ∿│
 * └──────────────────┘
 * 
 * Use Cases:
 * - Playful micro-interactions
 * - Spring-like motion feedback
 * - Attention-demanding animations
 * 
 * Duration Recommendation: 300ms - 500ms (longer for elastic effects)
 * GPU Accelerated: Yes (but CPU intensive)
 * Note: Use sparingly, avoid on critical paths
 */
export const easeInElastic = [0.68, -0.55, 0.265, 1.55];

/**
 * Elastic Ease Out (Spring-like deceleration with oscillation)
 * 
 * Visual representation:
 * ┌──────────────────┐
 * │╱                 │
 * │ ∿∿∿∿            │
 * │     ∿∿ ∿         │
 * │        ∿  ∿      │
 * │           ∿____  │
 * └──────────────────┘
 * 
 * Use Cases:
 * - Bouncy entrance animations
 * - Loading state feedback
 * - Playful button interactions
 * 
 * Duration Recommendation: 400ms - 700ms (longer for more bounces)
 * GPU Accelerated: Yes (but CPU intensive)
 * Note: Use for non-critical UI, avoid in rapid sequences
 */
export const easeOutElastic = [0.175, 0.885, 0.32, 1.275];

/**
 * Elastic Ease In-Out (Spring-like motion with oscillation at both ends)
 * 
 * Visual representation:
 * ┌──────────────────┐
 * │      ∿∿∿         │
 * │    ∿     ∿       │
 * │  ∿         ∿     │
 * │ ∿           ∿    │
 * │∿             ∿   │
 * └──────────────────┘
 * 
 * Use Cases:
 * - Full-screen transitions with emphasis
 * - Modal/dialog animations with feedback
 * - Page transitions
 * 
 * Duration Recommendation: 500ms - 800ms
 * GPU Accelerated: Yes (but CPU intensive)
 * Note: Reserve for important UI moments, avoid in performance-critical apps
 */
export const easeInOutElastic = [0.68, -0.55, 0.265, 1.55];

/**
 * Linear (Constant velocity)
 * 
 * Visual representation:
 * ┌─────────────────┐
 * │╱                │
 * │ │               │
 * │  │              │
 * │   ╲             │
 * └─────────────────┘
 * 
 * Use Cases:
 * - Progress bars
 * - Continuous rotations
 * - Scroll-linked animations
 * 
 * Duration Recommendation: Variable based on context
 * GPU Accelerated: Yes
 * Note: Generally avoid for UI animations (feels robotic)
 */
export const linear = [0.0, 0.0, 1.0, 1.0];

/**
 * Convert cubic-bezier array to CSS string
 * 
 * @param {number[]} easing - [x1, y1, x2, y2] cubic-bezier values
 * @returns {string} CSS cubic-bezier function string
 * 
 * @example
 * getCSSEasing(easeInOut) // "cubic-bezier(0.4, 0, 0.2, 1)"
 */
export const getCSSEasing = (easing) => {
  if (!Array.isArray(easing) || easing.length !== 4) {
    console.warn('Invalid easing array. Expected [x1, y1, x2, y2]');
    return 'cubic-bezier(0.4, 0, 0.2, 1)'; // fallback
  }
  return `cubic-bezier(${easing.join(', ')})`;
};

/**
 * Get Framer Motion compatible easing format
 * Framer Motion accepts cubic-bezier arrays directly
 * 
 * @param {number[]} easing - [x1, y1, x2, y2] cubic-bezier values
 * @returns {number[]} Easing array for Framer Motion
 * 
 * @example
 * <motion.div transition={{ ease: getFramerEasing(easeInOut) }} />
 */
export const getFramerEasing = (easing) => {
  if (!Array.isArray(easing) || easing.length !== 4) {
    console.warn('Invalid easing array. Expected [x1, y1, x2, y2]');
    return easeInOut; // fallback
  }
  return easing;
};

/**
 * Default export: All easings collection
 * Provides convenient access to all easing functions
 * 
 * @example
 * import easings from '@utils/easings'
 * 
 * easings.easeInOut
 * easings.easeOutExpo
 * easings.easeInBack
 */
export default {
  // Standard easings
  easeInOut,
  easeIn,
  easeOut,

  // Exponential easings
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,

  // Circular easings
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,

  // Quintic easings
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,

  // Cubic easings
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,

  // Sine easings
  easeInSine,
  easeOutSine,
  easeInOutSine,

  // Back easings
  easeInBack,
  easeOutBack,
  easeInOutBack,

  // Elastic easings
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,

  // Special
  linear,

  // Utility functions
  getCSSEasing,
  getFramerEasing,
};

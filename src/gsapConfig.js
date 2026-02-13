
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register and configure GSAP globally
// This must run BEFORE any component imports or renders
gsap.registerPlugin(ScrollTrigger);

// CRITICAL: Ignore mobile address bar resize events to prevent layout jumps
ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "DOMContentLoaded,load,resize" // Limit refresh triggers
});

// Normalize scroll behavior (optional but helpful for smooth scroll on mobile)
// ScrollTrigger.normalizeScroll(true);

console.log('GSAP Configured: ignoreMobileResize = true');

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MobileStickyButton = () => {
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        const btn = buttonRef.current;
        if (!btn) return;

        // Force a refresh to ensure start/end points are correct
        ScrollTrigger.refresh();

        // Helper functions for animation
        // using overwite: 'auto' to handle conflicts gracefully
        const showBtn = () => gsap.to(btn, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: true,
            pointerEvents: 'auto'
        });

        const hideBtn = () => gsap.to(btn, {
            y: 100,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
            overwrite: true,
            pointerEvents: 'none'
        });

        // Initial state
        gsap.set(btn, { y: 100, opacity: 0, pointerEvents: 'none' });

        // Batch triggers for better performance
        // 1. Hero Section: Show when leaving hero (slightly earlier), Hide when entering back
        const heroTrigger = ScrollTrigger.create({
            trigger: '#hero-section',
            start: 'bottom 15%', // Appears when Hero is ~85% scrolled out (bottom hits 15% from top)
            onLeave: () => showBtn(),
            onEnterBack: () => hideBtn(),
        });

        // 2. Exclusion Zone: Hide button when scrolling through Offer -> Premium -> Testimonials
        // The button should disappear when entering Offer, and ONLY reappear after consistent scrolling past Testimonials.
        const exclusionTrigger = ScrollTrigger.create({
            trigger: '#offer-section', // Start of exclusion zone
            endTrigger: '#testimonials-section', // End of exclusion zone (inclusive)
            start: 'top bottom', // Hide when top of Offer hits bottom of viewport
            end: 'bottom bottom', // Show again when bottom of Testimonials hits bottom of viewport
            onEnter: () => hideBtn(),
            onLeave: () => showBtn(),
            onEnterBack: () => hideBtn(),
            onLeaveBack: () => showBtn()
        });

        return () => {
            heroTrigger.kill();
            exclusionTrigger.kill();
        };
    }, []);

    const scrollToOffer = () => {
        const offerSection = document.getElementById('offer-section');
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <button
                ref={buttonRef}
                onClick={scrollToOffer}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '24px',
                    right: '24px',
                    zIndex: 9999,
                    backgroundColor: 'var(--color-vert-profond)',
                    color: 'white',
                    border: 'none',
                    padding: '1.1rem 0',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    opacity: 0, // Initial hidden state opacity
                    willChange: 'transform, opacity', // GPU compositing for fixed element
                    whiteSpace: 'nowrap',
                    maxWidth: '380px',
                    margin: '0 auto',
                    fontWeight: 500
                }}
                className="mobile-sticky-btn"
            >
                Je réserve mon horoscope
            </button>

            <style>{`
                @media (min-width: 768px) {
                    .mobile-sticky-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default MobileStickyButton;

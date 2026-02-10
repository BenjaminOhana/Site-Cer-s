import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MobileStickyButton = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const btn = buttonRef.current;
        if (!btn) return;

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
        // 1. Hero Section: Show when leaving hero, Hide when entering back
        const heroTrigger = ScrollTrigger.create({
            trigger: '#hero-section',
            start: 'bottom top', // when bottom of hero hits top of viewport
            onLeave: () => showBtn(),
            onEnterBack: () => hideBtn(),
        });

        // 2. Offer CTA: Hide when visible
        const offerTrigger = ScrollTrigger.create({
            trigger: '#offer-cta-container',
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => hideBtn(),
            onLeave: () => showBtn(),
            onEnterBack: () => hideBtn(),
            onLeaveBack: () => showBtn()
        });

        // 3. Premium Section: Hide when visible
        const premiumTrigger = ScrollTrigger.create({
            trigger: '#premium-section', // Make sure this ID exists in Premium.jsx or wrapping div
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => hideBtn(),
            onLeave: () => showBtn(),
            onEnterBack: () => hideBtn(),
            onLeaveBack: () => showBtn()
        });

        // Note: Testimonials logic is covered by "onLeave" of Premium (it follows Premium)
        // If there's a gap or other sections, default is "Show" unless a trigger says Hide.

        return () => {
            heroTrigger.kill();
            offerTrigger.kill();
            premiumTrigger.kill();
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
                    zIndex: 1000,
                    backgroundColor: 'var(--color-bordeaux)',
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

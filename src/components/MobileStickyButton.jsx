import React, { useState, useEffect } from 'react';

const MobileStickyButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero-section');
            const offer = document.getElementById('offer-section');
            const premium = document.getElementById('premium-section');
            const testimonials = document.getElementById('testimonials-section');

            if (!hero) return;

            const heroRect = hero.getBoundingClientRect();

            // Default: Hide
            let shouldShow = false;

            // 1. Show after Hero (Storytelling starts)
            // heroRect.bottom < 0 means we have scrolled past the hero section
            if (heroRect.bottom < 0) {
                shouldShow = true;
            }

            // 2. Hide ONLY when the actual Horoscope CTA appears on screen
            // preventing duplicate buttons.
            const offerCta = document.getElementById('offer-cta-container');
            if (offerCta) {
                const ctaRect = offerCta.getBoundingClientRect();
                // If CTA is entering the viewport from the bottom OR is currently visible
                // simple check: if top is less than window height (visible) AND bottom is > 0
                if (ctaRect.top < window.innerHeight && ctaRect.bottom > 0) {
                    shouldShow = false;
                }
            }

            // 3. Hide when entering Premium (Services) to avoid blocking CTAs
            if (premium) {
                const premiumRect = premium.getBoundingClientRect();
                if (premiumRect.top < window.innerHeight && premiumRect.bottom > 0) {
                    shouldShow = false;
                }
            }

            // 4. Re-show at Testimonials and after
            if (testimonials) {
                const testimonialsRect = testimonials.getBoundingClientRect();
                if (testimonialsRect.top < window.innerHeight) {
                    shouldShow = true;
                }
            }

            setVisible(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
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
                onClick={scrollToOffer}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(200%)',
                    zIndex: 1000,
                    backgroundColor: 'var(--color-bordeaux)',
                    color: 'white',
                    border: 'none',
                    padding: '1.1rem 0', // Vertical padding only, width handles horizontal
                    fontSize: '1rem', // Legible size
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    borderRadius: '50px',
                    cursor: visible ? 'pointer' : 'default',
                    opacity: visible ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                    pointerEvents: visible ? 'auto' : 'none',
                    whiteSpace: 'nowrap',
                    width: 'calc(100% - 48px)', // Wide but with margins
                    maxWidth: '380px', // Don't get too wide on tablets
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

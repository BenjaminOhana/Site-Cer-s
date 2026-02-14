import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Promise = () => {
    const sectionRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const lines = [line1Ref.current, line2Ref.current, line3Ref.current, logoRef.current];

        // Scoped cleanup — won't affect other components' ScrollTriggers
        const ctx = gsap.context(() => {
            // Animation scroll-driven Apple-style pour chaque ligne
            // PERF: Using opacity + y only (no filter: blur) to avoid expensive repaints on mobile
            gsap.fromTo(lines,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
            // Animation spécifique pour le dégradé du texte final (Shimmer effect)
            gsap.to(line3Ref.current, {
                backgroundPosition: '200% center',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom 40%",
                    scrub: 2, // Slow and smooth
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const baseStyle = {
        opacity: 0,
        marginBottom: '2rem',
        fontSize: '1.2rem',
        fontWeight: 300,
        color: 'var(--color-text)',
        lineHeight: 1.6,
        willChange: 'transform, opacity' // Hint browser to promote to GPU layer
    };

    return (
        <section
            id="promise-section"
            ref={sectionRef}
            style={{
                minHeight: '80svh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 20px',
                backgroundColor: 'var(--color-blanc-nacre)',
                color: 'var(--color-noir)'
            }}
        >
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <p ref={line1Ref} style={baseStyle}>
                    Tu sens que quelque chose doit bouger.
                </p>
                <p ref={line2Ref} style={baseStyle}>
                    Mais tu ne sais pas par où commencer.
                </p>
                <div style={{ height: '2rem' }}></div>
                <p id="promise-end-trigger" ref={line3Ref} style={{
                    ...baseStyle,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    width: '100%',
                    display: 'inline-block', // Helps some browsers clip correctly
                    backgroundImage: 'linear-gradient(135deg, #A12323 0%, #D64545 40%, #FF8C8C 50%, #D64545 60%, #A12323 100%)', // Enhanced gradient for shimmer
                    backgroundSize: '200% auto', // Enable movement
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent', // Non-standard fallback
                    marginTop: '2rem',
                    lineHeight: '1.3'
                }}>
                    Fais confiance à ce qui t'a amené ici.
                </p>

                {/* Petit logo de fin de section */}
                <div ref={logoRef} style={{
                    marginTop: '6rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: 'var(--color-text)',
                    opacity: 0, // Initial state for animation
                    willChange: 'transform, opacity'
                }}>
                    Priscilla.
                </div>
            </div>
        </section >
    );
};

export default Promise;

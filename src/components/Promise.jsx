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
        const section = sectionRef.current;
        const lines = [line1Ref.current, line2Ref.current, line3Ref.current, logoRef.current];

        // Animation scroll-driven Apple-style pour chaque ligne
        lines.forEach((line, index) => {
            gsap.fromTo(line,
                {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: 30
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 1.5, // Slower base duration
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: `top ${60 - index * 15}%`, // Spreads out start points more
                        end: `top ${25 - index * 10}%`,   // Extends end points for slower "scrub" duration
                        scrub: 1.5, // Heavy scrub = smooth lag/inertia effect
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const baseStyle = {
        opacity: 0,
        filter: 'blur(12px)',
        marginBottom: '2rem',
        fontSize: '1.2rem',
        fontWeight: 300,
        color: 'var(--color-text)',
        lineHeight: 1.6
    };

    return (
        <section
            id="promise-section"
            ref={sectionRef}
            style={{
                minHeight: '80vh',
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
                    background: 'linear-gradient(135deg, #800020 0%, #A0324F 50%, #800020 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginTop: '2rem',
                    lineHeight: '1.3'
                }}>
                    Fais confiance à ce qui t'a amené ici.
                </p>

                {/* Petit logo de fin de section */}
                <div ref={logoRef} style={{
                    marginTop: '6rem',
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.7rem',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-noir)',
                    opacity: 0, // Initial state for animation
                    filter: 'blur(12px)'
                }}>
                    Cérès.
                </div>
            </div>
        </section>
    );
};

export default Promise;

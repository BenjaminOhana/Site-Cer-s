import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local portrait image
import portraitImage from '../assets/priscilla-portrait.webp';

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        // Scoped cleanup with gsap.context
        const ctx = gsap.context(() => {
            const imageWrapper = imageWrapperRef.current;
            const image = imageRef.current;

            // Reveal animation: opacity + scale instead of clip-path to avoid white flash
            gsap.fromTo(imageWrapper,
                {
                    opacity: 0,
                    scale: 1.1
                },
                {
                    opacity: 1,
                    scale: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 30%',
                        scrub: 0.8
                    }
                }
            );

            // Parallax subtil sur l'image elle-même
            gsap.fromTo(image,
                { y: '-10%' },
                {
                    y: '5%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.5 // Smoother than scrub: true
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                backgroundColor: 'var(--color-blanc-nacre)', // Fond clair pour transition fluide
                overflow: 'hidden',
                paddingBottom: '1rem'
            }}
        >
            <div className="bio-container" style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                {/* Photo avec reveal effect */}
                <div
                    ref={imageWrapperRef}
                    className="bio-image-wrapper"
                    style={{
                        width: '100%',
                        height: '65vh',
                        overflow: 'hidden',
                        opacity: 0, // Initial state
                        willChange: 'transform, opacity' // GPU compositing hint
                    }}
                >
                    <img
                        ref={imageRef}
                        className="bio-image"
                        src={portraitImage}
                        alt="Priscilla Owona, fondatrice de Cérès Magazine"
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '120%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            transform: 'translateY(-10%)',
                            willChange: 'transform' // GPU compositing hint for parallax
                        }}
                    />
                </div>

                {/* Text Content */}
                <div className="bio-content" style={{
                    padding: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-blanc-nacre)'
                }}>
                    <h2 style={{
                        fontSize: '1.4rem', // Reduced from 1.8rem
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em' // Reduced from 0.1em
                    }}>
                        Priscilla Owona
                    </h2>

                    <div style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1rem' }}>Je m'appelle Priscilla.</p>
                        <p style={{ marginBottom: '1rem' }}>
                            Depuis plus de 5 ans, j'accompagne des personnes qui ont tout pour elles — sauf la clarté.
                        </p>
                        <p>
                            L’astrologie est mon outil. L’intuition ma boussole. Ta transformation, mon engagement.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Styles */}
            <style>{`
                @media (min-width: 768px) {
                    .bio-container {
                        flex-direction: row !important;
                        align-items: stretch;
                        height: 100vh;
                    }
                    .bio-image-wrapper {
                        width: 55% !important;
                        height: auto !important;
                        min-height: 100%;
                    }
                    .bio-image {
                        height: 130% !important;
                    }
                    .bio-content {
                        width: 45%;
                        text-align: left !important;
                        padding: 4rem !important;
                        align-items: flex-start !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Bio;

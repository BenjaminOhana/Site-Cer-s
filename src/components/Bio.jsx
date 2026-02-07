import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local portrait image
import portraitImage from '../assets/priscilla-portrait.png';

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
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
                    trigger: section,
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
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                backgroundColor: '#111111', // Fond noir pour éviter le blanc
                overflow: 'hidden',
                paddingBottom: '4rem'
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
                        opacity: 0 // Initial state
                    }}
                >
                    <div
                        ref={imageRef}
                        className="bio-image"
                        style={{
                            width: '100%',
                            height: '120%',
                            backgroundImage: `url(${portraitImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            transform: 'translateY(-10%)'
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
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-title)',
                        fontWeight: 400
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
                            Depuis plus de 5 ans, j'accompagne des femmes qui ont tout pour elles — sauf la clarté.
                        </p>
                        <p>
                            L'astrologie est ma boussole. L'intuition, mon outil. Ta transformation, mon engagement.
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

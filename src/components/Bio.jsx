import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const imageWrapperRef = useRef(null);

    // Placeholder: Warm, colorful portrait, close up
    const portraitImage = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2548&auto=format&fit=crop";

    useEffect(() => {
        const section = sectionRef.current;
        const imageWrapper = imageWrapperRef.current;
        const image = imageRef.current;

        // Reveal animation: clip-path from top to bottom
        gsap.fromTo(imageWrapper,
            {
                clipPath: 'inset(100% 0% 0% 0%)' // Complètement caché du haut
            },
            {
                clipPath: 'inset(0% 0% 0% 0%)', // Entièrement visible
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 0.8
                }
            }
        );

        // Parallax subtil sur l'image elle-même
        gsap.fromTo(image,
            { y: '-15%' },
            {
                y: '0%',
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
                backgroundColor: '#ffffff',
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
                        clipPath: 'inset(100% 0% 0% 0%)' // Initial state
                    }}
                >
                    <div
                        ref={imageRef}
                        className="bio-image"
                        style={{
                            width: '100%',
                            height: '120%', // Plus grand pour le parallax
                            backgroundImage: `url(${portraitImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'translateY(-15%)' // Position initiale parallax
                        }}
                    />
                </div>

                {/* Text Content */}
                <div className="bio-content" style={{
                    padding: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
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

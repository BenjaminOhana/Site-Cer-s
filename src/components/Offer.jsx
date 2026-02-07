import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local image
import horoscopeImage from '../assets/horoscope-magazine.png';

gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
    const sectionRef = useRef(null);
    const imageContainerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const imageContainer = imageContainerRef.current;
        const title = titleRef.current;
        const content = contentRef.current;

        // Image container reveal - FIRST
        gsap.fromTo(imageContainer,
            {
                opacity: 0,
                scale: 1.05,
                y: 40
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: 0.6
                }
            }
        );

        // Titre avec effet blur→net - AFTER image (décalé)
        gsap.fromTo(title,
            {
                opacity: 0,
                filter: 'blur(10px)',
                y: 15
            },
            {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 50%',  // Commence plus tard
                    end: 'top 20%',
                    scrub: 0.5
                }
            }
        );

        // Contenu apparaît après
        gsap.fromTo(content,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 30%',
                    end: 'top 0%',
                    scrub: 0.5
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            {/* Élément de liaison / Respiration visuelle */}
            <div style={{
                height: '18vh',
                paddingTop: '3vh',
                backgroundColor: 'var(--color-blanc-nacre)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center'
            }}>
                {/* Séparateur élégant - style astrologique */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    opacity: 0.4
                }}>
                    <div style={{
                        width: '60px',
                        height: '1px',
                        backgroundColor: 'var(--color-bordeaux)'
                    }} />
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-bordeaux)"
                        strokeWidth="1"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    </svg>
                    <div style={{
                        width: '60px',
                        height: '1px',
                        backgroundColor: 'var(--color-bordeaux)'
                    }} />
                </div>
            </div>

            <section
                ref={sectionRef}
                style={{
                    backgroundColor: 'var(--color-blanc-nacre)',
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Image container - Full width on mobile */}
                <div
                    ref={imageContainerRef}
                    className="offer-image-container"
                    style={{
                        position: 'relative',
                        width: '100%',
                        marginBottom: '3rem',
                        opacity: 0
                    }}
                >
                    {/* L'image - Full width */}
                    <img
                        src={horoscopeImage}
                        alt="Femme lisant un magazine Ceres"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />

                    {/* Overlay gradient léger */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Titre superposé sur l'image */}
                    <h2
                        ref={titleRef}
                        style={{
                            position: 'absolute',
                            bottom: '8%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90%',
                            textAlign: 'center',
                            fontFamily: 'var(--font-editorial)',
                            fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'white',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.4)',
                            margin: 0,
                            opacity: 0
                        }}
                    >
                        Ton horoscope personnalisé
                    </h2>
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    style={{
                        textAlign: 'center',
                        maxWidth: '500px',
                        padding: '0 20px',
                        opacity: 0
                    }}
                >
                    <div style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        marginBottom: '2.5rem',
                        color: 'var(--color-noir)',
                        textAlign: 'left'
                    }}>
                        {/* Bénéfice 1 - Boussole */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '1rem',
                            marginBottom: '1.2rem'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--color-bordeaux)" fillOpacity="0.2" />
                            </svg>
                            <span>Une boussole pour ton mois.</span>
                        </div>

                        {/* Bénéfice 2 - Étoile/Signe */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '1rem',
                            marginBottom: '1.2rem'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="var(--color-bordeaux)" fillOpacity="0.15" />
                            </svg>
                            <span>Rédigée par mes soins, pour ton signe.</span>
                        </div>

                        {/* Bénéfice 3 - Clarté/Vision */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '1rem',
                            marginTop: '0.5rem'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <circle cx="12" cy="12" r="3" fill="var(--color-bordeaux)" fillOpacity="0.25" />
                                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                            </svg>
                            <span style={{
                                fontWeight: 500,
                                color: 'var(--color-bordeaux)'
                            }}>
                                Savoir où tu vas — avant même de partir.
                            </span>
                        </div>
                    </div>

                    <a
                        href="#horoscope"
                        className="btn-primary"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem'
                        }}
                    >
                        Recevoir mon horoscope
                    </a>

                    <p style={{
                        marginTop: '1.2rem',
                        fontSize: '0.95rem',
                        color: '#888',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        paddingBottom: '4rem'
                    }}>
                        7,99€/mois
                    </p>
                </div>

                {/* Desktop Styles */}
                <style>{`
                    @media (min-width: 768px) {
                        .offer-image-container {
                            max-width: 600px !important;
                            margin-top: 2rem;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};

export default Offer;

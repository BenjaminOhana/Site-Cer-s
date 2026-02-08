import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local image
import horoscopeImage from '../assets/horoscope-magazine.png';

gsap.registerPlugin(ScrollTrigger);

// Composant pour un bénéfice avec icône
const BenefitItem = ({ icon, title, description, className }) => (
    <div className={className} style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '2.2rem'
    }}>
        <div style={{
            flexShrink: 0,
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2px'
        }}>
            {icon}
        </div>
        <div>
            <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '1rem',
                color: 'var(--color-noir)',
                marginBottom: '0.3rem',
                lineHeight: 1.4
            }}>
                {title}
            </p>
            <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5,
                fontStyle: 'italic'
            }}>
                {description}
            </p>
        </div>
    </div>
);

const Offer = () => {
    const sectionRef = useRef(null);
    const imageContainerRef = useRef(null);
    const titleRef = useRef(null);
    const taglineRef = useRef(null);
    const benefitsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const imageContainer = imageContainerRef.current;
        const title = titleRef.current;
        const tagline = taglineRef.current;
        const benefits = benefitsRef.current;
        const cta = ctaRef.current;

        // Image container reveal
        gsap.fromTo(imageContainer,
            { opacity: 0, scale: 1.05, y: 40 },
            {
                opacity: 1, scale: 1, y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: 0.6
                }
            }
        );

        // Titre sur l'image
        gsap.fromTo(title,
            { opacity: 0, filter: 'blur(10px)', y: 15 },
            {
                opacity: 1, filter: 'blur(0px)', y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 50%',
                    end: 'top 20%',
                    scrub: 0.5
                }
            }
        );

        // Tagline
        gsap.fromTo(tagline,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: tagline,
                    start: 'top 85%',
                    end: 'top 65%',
                    scrub: 0.5
                }
            }
        );

        // Benefits - Robust Batch Animation using ScrollTrigger.batch
        // This is the most reliable way to handle lists on mobile
        if (benefits) {
            const items = benefits.querySelectorAll('.benefit-item');

            // Set initial state via GSAP (safer than inline styles)
            gsap.set(items, { opacity: 0, y: 30 });

            ScrollTrigger.batch(items, {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    overwrite: true
                }),
                start: 'top 85%', // Starts when top of element hits bottom 15% of viewport
                once: true // Play only once for performance and cleaner ux on mobile
            });
        }

        // CTA
        gsap.fromTo(cta,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cta,
                    start: 'top 90%',
                    end: 'top 70%',
                    scrub: 0.5
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Icônes SVG élégantes
    const MoonIcon = (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--color-bordeaux)" fillOpacity="0.1" />
        </svg>
    );

    const StarIcon = (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" fill="var(--color-bordeaux)" fillOpacity="0.1" />
        </svg>
    );

    const PenIcon = (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="var(--color-bordeaux)" fillOpacity="0.08" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
        </svg>
    );

    const MailIcon = (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" fill="var(--color-bordeaux)" fillOpacity="0.08" />
            <path d="M22 6l-10 7L2 6" />
        </svg>
    );

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
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    opacity: 0.4
                }}>
                    <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-bordeaux)' }} />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-bordeaux)" strokeWidth="1">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    </svg>
                    <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-bordeaux)' }} />
                </div>
            </div>

            <section
                ref={sectionRef}
                style={{
                    backgroundColor: 'var(--color-blanc-nacre)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'hidden',
                    paddingBottom: '4rem'
                }}
            >
                {/* Image container - Full width on mobile */}
                <div
                    ref={imageContainerRef}
                    className="offer-image-container"
                    style={{
                        position: 'relative',
                        width: '100%',
                        marginBottom: '2.5rem',
                        opacity: 0
                    }}
                >
                    <img
                        src={horoscopeImage}
                        alt="Femme lisant un magazine Ceres"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />

                    {/* Overlay gradient */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)',
                        pointerEvents: 'none'
                    }} />

                    {/* Titre sur l'image */}
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

                {/* Tagline principale */}
                <div
                    ref={taglineRef}
                    style={{
                        textAlign: 'center',
                        padding: '0 20px',
                        marginBottom: '2rem',
                        opacity: 0
                    }}
                >
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: 'clamp(1.2rem, 4vw, 1.4rem)',
                        color: 'var(--color-bordeaux)',
                        lineHeight: 1.5
                    }}>
                        Savoir où tu vas — avant même de partir.
                    </p>
                </div>

                {/* Titre discret section bénéfices */}
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--color-bordeaux)',
                    opacity: 0.6,
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                }}>
                    L'expérience Cérès
                </p>

                {/* Section Bénéfices */}
                <div
                    ref={benefitsRef}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '0 24px',
                        marginBottom: '2.5rem'
                    }}>
                    <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2.2rem' }}>
                        <div style={{ flexShrink: 0, width: '24px', marginTop: '2px' }}>{MoonIcon}</div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--color-noir)', marginBottom: '0.3rem' }}>Personnalisé pour ton signe</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>Pas de généralités, c'est écrit pour toi.</p>
                        </div>
                    </div>
                    <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2.2rem' }}>
                        <div style={{ flexShrink: 0, width: '24px', marginTop: '2px' }}>{StarIcon}</div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--color-noir)', marginBottom: '0.3rem' }}>Les dates clés de ton mois</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>Anticipe les moments forts et les tournants.</p>
                        </div>
                    </div>
                    <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2.2rem' }}>
                        <div style={{ flexShrink: 0, width: '24px', marginTop: '2px' }}>{PenIcon}</div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--color-noir)', marginBottom: '0.3rem' }}>Rédigé par Priscilla</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>Sa lecture, son intuition, ses mots.</p>
                        </div>
                    </div>
                    <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2.2rem' }}>
                        <div style={{ flexShrink: 0, width: '24px', marginTop: '2px' }}>{MailIcon}</div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1rem', color: 'var(--color-noir)', marginBottom: '0.3rem' }}>Dans ta boîte mail</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>Chaque mois, sans rien faire.</p>
                        </div>
                    </div>
                </div>



                {/* CTA */}
                <div
                    ref={ctaRef}
                    style={{
                        textAlign: 'center',
                        opacity: 0
                    }}
                >
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
                        marginTop: '1rem',
                        fontSize: '0.95rem',
                        color: '#888',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300
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

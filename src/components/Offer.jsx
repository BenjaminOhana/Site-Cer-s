import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local image
import horoscopeImage from '../assets/horoscope-magazine.webp';

gsap.registerPlugin(ScrollTrigger);

// Composant pour un bénéfice avec icône
const BenefitItem = ({ icon, title, description, className }) => (
    <div className={className} style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '2.2rem',
        willChange: 'transform, opacity' // GPU compositing for staggered animation
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
        let ctx = gsap.context(() => {
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

            // Titre sur l'image — PERF: removed filter: blur(), using opacity + y only
            gsap.fromTo(title,
                { opacity: 0, y: 15 },
                {
                    opacity: 1, y: 0,
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

            // Benefits - "Cascade" Animation
            // PERF: Removed filter: blur(10px), reduced stagger for less total animation time
            if (benefits) {
                const items = benefits.querySelectorAll('.benefit-item');

                gsap.from(items, {
                    opacity: 0,
                    y: 30,
                    duration: 1.2,
                    stagger: 0.4, // Reduced from 0.8 — less total animation time = fewer frames under load
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: benefits,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
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
        }, sectionRef); // Scope to section

        return () => ctx.revert();
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
                id="offer-section"
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
                {/* Desktop Split Layout Container */}
                <div className="offer-content-wrapper">

                    {/* Left Column: Image */}
                    <div className="offer-column-left">
                        <div
                            ref={imageContainerRef}
                            className="offer-image-container"
                            style={{
                                position: 'relative',
                                width: '100%',
                                marginBottom: '2.5rem',
                                opacity: 0,
                                willChange: 'transform, opacity' // GPU compositing
                            }}
                        >
                            <img
                                src={horoscopeImage}
                                alt="Femme lisant un magazine Ceres"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                onLoad={() => ScrollTrigger.refresh()}
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
                                    opacity: 0,
                                    willChange: 'transform, opacity'
                                }}
                            >
                                Ton horoscope personnalisé
                            </h2>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="offer-column-right">
                        {/* Tagline principale */}
                        <div
                            ref={taglineRef}
                            style={{
                                textAlign: 'center',
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
                                margin: '0 auto',
                                marginBottom: '2.5rem'
                            }}>
                            <BenefitItem
                                className="benefit-item"
                                icon={MoonIcon}
                                title="Personnalisé pour ton signe"
                                description="Pas de généralités, c'est écrit pour toi."
                            />
                            <BenefitItem
                                className="benefit-item"
                                icon={StarIcon}
                                title="Les dates clés de ton mois"
                                description="Anticipe les moments forts et les tournants."
                            />
                            <BenefitItem
                                className="benefit-item"
                                icon={PenIcon}
                                title="Rédigé par Priscilla"
                                description="Sa lecture, son intuition, ses mots."
                            />
                            <BenefitItem
                                className="benefit-item"
                                icon={MailIcon}
                                title="Dans ta boîte mail"
                                description="Chaque mois, sans rien faire."
                            />
                        </div>



                        {/* CTA */}
                        <div
                            id="offer-cta-container"
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
                    </div>
                </div>

                {/* Desktop Styles */}
                <style>{`
                    .offer-content-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .offer-column-left {
                        width: 100%;
                    }

                    .offer-column-right {
                        width: 100%;
                        padding: 0 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    @media (min-width: 900px) {
                        .offer-content-wrapper {
                            flex-direction: row;
                            align-items: flex-start; /* Align top */
                            justify-content: center;
                            max-width: 1200px;
                            margin: 0 auto;
                            gap: 4rem;
                            padding: 2rem 40px;
                        }

                        .offer-column-left {
                            width: 50%;
                            position: sticky; /* Optional: Keep image in view if text is long */
                            top: 100px;
                        }
                        
                        .offer-column-right {
                            width: 50%;
                            align-items: flex-start; /* Left align text on desktop */
                            padding-top: 2rem;
                        }

                        /* Override image container specifically for grid */
                        .offer-image-container {
                            max-width: 100% !important; /* Reset generic desktop max-width */
                            margin-top: 0 !important;
                            margin-bottom: 0 !important;
                        }

                        /* Override text alignments for desktop */
                        .offer-column-right .text-center, 
                        .offer-column-right p,
                        .offer-column-right div {
                           /* text-align: left !important;  Keep some centering or adjust? 
                              Let's keep benefits left-aligned naturally, but titles might need left align.
                           */
                        }
                        
                        /* Align specific elements to left on desktop */
                        .offer-column-right > div[style*="text-align: center"] {
                            text-align: left !important;
                        }
                        
                         /* Align CTA container */
                         #offer-cta-container {
                            text-align: left !important;
                            width: 100%;
                         }
                         
                         /* Align Benefit container */
                         .offer-column-right > div[style*="max-width: 400px"] {
                             margin-left: 0 !important;
                             margin-right: 0 !important;
                         }
                    }
                `}</style>
            </section>
        </>
    );
};

export default Offer;

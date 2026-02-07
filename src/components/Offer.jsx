import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local image
import horoscopeImage from '../assets/horoscope-magazine.png';

gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;
        const title = titleRef.current;
        const content = contentRef.current;

        // Image reveal avec parallax léger
        gsap.fromTo(image,
            {
                opacity: 0,
                scale: 1.05,
                y: 30
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 0.6
                }
            }
        );

        // Titre avec effet blur→net
        gsap.fromTo(title,
            {
                opacity: 0,
                filter: 'blur(10px)',
                y: 20
            },
            {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%',
                    end: 'top 30%',
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
                    start: 'top 40%',
                    end: 'top 10%',
                    scrub: 0.5
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
                backgroundColor: 'var(--color-blanc-nacre)',
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 20px',
                overflow: 'hidden'
            }}
        >
            {/* Image container avec titre superposé */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                marginBottom: '3rem'
            }}>
                {/* Titre flottant au-dessus */}
                <h2
                    ref={titleRef}
                    style={{
                        position: 'absolute',
                        top: '-2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        fontFamily: 'var(--font-editorial)',
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 400,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-bordeaux)',
                        whiteSpace: 'nowrap',
                        textShadow: '0 2px 20px rgba(255,255,255,0.8)',
                        opacity: 0
                    }}
                >
                    Horoscope personnalisé
                </h2>

                {/* Image */}
                <div
                    ref={imageRef}
                    style={{
                        width: '100%',
                        paddingTop: '10%', // Espace pour le titre
                        opacity: 0
                    }}
                >
                    <img
                        src={horoscopeImage}
                        alt="Femme lisant un magazine Ceres"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                        }}
                    />
                </div>
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                style={{
                    textAlign: 'center',
                    maxWidth: '500px',
                    opacity: 0
                }}
            >
                <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '1.15rem',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem',
                    color: 'var(--color-noir)'
                }}>
                    <p style={{ marginBottom: '0.5rem' }}>Une boussole pour ton mois.</p>
                    <p style={{ marginBottom: '1.5rem' }}>Rédigée par mes soins, pour ton signe.</p>
                    <p style={{
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        color: 'var(--color-bordeaux)'
                    }}>
                        Savoir où tu vas — avant même de partir.
                    </p>
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
                    fontWeight: 300
                }}>
                    7,99€/mois
                </p>
            </div>

            {/* Desktop Styles */}
            <style>{`
                @media (min-width: 768px) {
                    /* On desktop, keep centered layout but larger */
                }
            `}</style>
        </section>
    );
};

export default Offer;

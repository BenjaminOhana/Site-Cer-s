import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    // Use JS height to strictly prevent address-bar resize jumps
    const [heroHeight, setHeroHeight] = useState('100vh'); // Default for SSR/initial
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        setLoaded(true);
        // Set fixed height on mount to lock it in
        setHeroHeight(`${window.innerHeight}px`);

        // GSAP Context for scoped cleanup
        const ctx = gsap.context(() => {
            const bg = bgRef.current;

            if (bg) {
                gsap.set(bg, { yPercent: 0, force3D: true });

                gsap.to(bg, {
                    yPercent: 8,
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.8
                    }
                });
            }

            // Word-by-word reveal
            gsap.to('.hero-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.5
            });

            // Container fade ensures we don't see a flash of unstyled content
            gsap.to('.hero-text-container', {
                opacity: 1,
                duration: 1,
                delay: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Placeholder image: Black and white elegant portrait
    const bgImageMobile = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop";
    const bgImageDesktop = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1920&auto=format&fit=crop";

    const words = "Le flou s'arrête ici.".split(' ');

    return (
        <section
            id="hero-section"
            ref={containerRef}
            style={{
                height: heroHeight,
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
            className="hero-section"
        >

            {/* 1. Background Image (Absolute with GSAP Parallax) */}
            <img
                className="hero-background"
                ref={bgRef}
                src={bgImageMobile}
                srcSet={`${bgImageMobile} 800w, ${bgImageDesktop} 1920w`}
                sizes="100vw"
                alt="Priscilla Owona, astrologue et coach intuitive — portrait"
                fetchpriority="high"
            />

            {/* 2. Content Overlay (Gradient) - Needs to be absolute to cover VIEWPORT */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)',
                zIndex: 1
            }}></div>

            {/* Logo - Mobile Only (Desktop has Navbar) */}
            <div className="hero-mobile-logo" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                fontFamily: 'var(--font-title)',
                color: 'white',
                fontSize: '1.5rem',
                opacity: 0.9,
                zIndex: 10
            }}>
                Cérès .
            </div>

            {/* Text */}
            <div className="hero-text-container" style={{
                position: 'absolute',
                // top is handled in CSS now for responsiveness
                transform: 'translateY(-50%)',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                zIndex: 10,
                opacity: 0, // Controlled by GSAP
                padding: '0 20px' // Prevent text touching edges on small mobile
            }}>
                <h1 className="hero-title" style={{
                    fontFamily: 'var(--font-editorial)', // Forum
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    margin: 0,
                    lineHeight: 1.1, // Tighter line height for multiline on mobile
                    overflow: 'hidden',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.2em'
                }}>
                    {words.map((word, i) => (
                        <span key={i} className="hero-word" style={{
                            display: 'inline-block',
                            opacity: 0,
                            transform: 'translateY(40px)'
                        }}>
                            {word}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Scroll Chevron - Independent Position */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                color: 'white',
                animation: 'pulse 2s infinite'
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            <style>{`
                /* Base Styles (Mobile Default) */
                .hero-background {
                    position: absolute;
                    top: -5%; /* Start slightly above to allow for downward parallax movement */
                    left: 0;
                    width: 100%;
                    height: 110%; /* Slightly taller than viewport for parallax */
                    object-fit: cover;
                    object-position: center 30%; /* Default Mobile */
                    z-index: -1;
                    will-change: transform;
                }

                .hero-text-container {
                    top: 58%; /* Mobile: Slightly lower than 55% */
                }
                
                /* Desktop Only: Hide the static logo because Navbar is visible */
                @media (min-width: 768px) {
                    .hero-mobile-logo {
                        display: none !important;
                    }
                }
                .hero-title {
                    font-size: clamp(1.2rem, 7vw, 2.8rem); /* Adaptive size: starts smaller, grows with width */
                    width: 100%;
                }
                
                /* Desktop & Tablet */
                @media (min-width: 768px) {
                    .hero-background {
                        object-position: center center !important; /* Desktop Center */
                    }
                    .hero-text-container {
                        top: 62%; 
                    }
                    .hero-title {
                        font-size: 4.5rem;
                    }
                }
                
                @keyframes pulse {
                    0% { transform: translateY(0); opacity: 0.5; }
                    50% { transform: translateY(5px); opacity: 1; }
                    100% { transform: translateY(0); opacity: 0.5; }
                }
            `}</style>
        </section>
    );
};

export default Hero;

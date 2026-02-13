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
        // Set fixed height on mount to lock it in (prevents resize when address bar moves)
        setHeroHeight(`${window.innerHeight}px`);

        // GSAP Context for scoped cleanup (won't destroy other components' triggers)
        const ctx = gsap.context(() => {
            const bg = bgRef.current;

            if (bg) {
                // CRITICAL: Pre-set the initial transform state BEFORE creating ScrollTrigger.
                // This prevents the "zoom pop" on Safari iOS where the element jumps
                // from "no GSAP transform" to "GSAP transform" on the first scroll pixel.
                gsap.set(bg, { yPercent: 0, force3D: true });

                gsap.to(bg, {
                    yPercent: 8, // Subtle parallax (reduced from 10 for less aggressive movement)
                    ease: "none",
                    force3D: true, // Keep on GPU compositor throughout
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.8 // Smoother lag — 0.8s inertia prevents visible stepping on Safari
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Placeholder image: Black and white elegant portrait
    const bgImageMobile = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop";
    const bgImageDesktop = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1920&auto=format&fit=crop";

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
                fetchPriority="high"
            />

            {/* 2. Content Overlay (Gradient) - Needs to be absolute to cover VIEWPORT */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                zIndex: 1
            }}></div>

            {/* Logo */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                fontFamily: 'var(--font-title)',
                color: 'white',
                fontSize: '1.5rem',
                opacity: 0.9, // Slightly more visible
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
                opacity: loaded ? 1 : 0,
                transition: 'opacity 1.5s ease-out',
                padding: '0 20px' // Prevent text touching edges on small mobile
            }}>
                <p className="hero-title" style={{
                    fontFamily: 'var(--font-editorial)', // Forum
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.6)', // Double shadow: Legibility + Depth
                    margin: 0,
                    lineHeight: 1.1 // Tighter line height for multiline on mobile
                }}>
                    Le flou s'arrête ici.
                </p>

                {/* Scroll Chevron */}
                <div style={{
                    marginTop: '2rem',
                    animation: 'pulse 2s infinite'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
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
                    top: 62%; /* Mobile: Fine-tuned balance */
                }
                .hero-title {
                    font-size: clamp(1.8rem, 8vw, 2.8rem); /* Adaptive size: starts smaller, grows with width */
                    white-space: nowrap; /* Force single line */
                    width: 100%;
                    overflow: visible; /* Allow text to be seen */
                }
                
                /* Desktop & Tablet */
                @media (min-width: 768px) {
                    .hero-background {
                        object-position: center center !important; /* Desktop Center */
                    }
                    .hero-text-container {
                        top: 65%; 
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

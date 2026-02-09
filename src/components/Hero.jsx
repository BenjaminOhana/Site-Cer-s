import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    // Placeholder image: Black and white elegant portrait
    const bgImage = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop";

    return (
        <section id="hero-section" style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
            // Background is handled by fixed div now
        }} className="hero-section">

            {/* 1. Fixed Background Image (The "Sticky" Part) */}
            <div className="hero-fixed-background" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%', // Default Mobile
                zIndex: -1, // Behind everything
                willChange: 'transform' // Performance opt
            }}></div>

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
                Cérès.
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
                <h1 className="hero-title" style={{
                    fontFamily: 'var(--font-editorial)', // Forum
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.6)', // Double shadow: Legibility + Depth
                    margin: 0,
                    lineHeight: 1.1 // Tighter line height for multiline on mobile
                }}>
                    Le flou s'arrête ici.
                </h1>

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
                .hero-text-container {
                    top: 62%; /* Mobile: Fine-tuned balance */
                }
                .hero-title {
                    fontSize: 2.8rem; /* Mobile Size */
                }
                
                /* Clean scroll behavior */
                .hero-section {
                    /* No background here anymore */
                }

                @media (min-width: 768px) {
                    .hero-fixed-background {
                        background-position: center center !important; /* Desktop Center */
                    }
                    .hero-text-container {
                        top: 65%; 
                    }
                    .hero-title {
                        fontSize: 4.5rem;
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

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Le retour a été plus qu'hallucinant... d'une justesse sans nom... j'en reste sans voix.",
            author: "Amandine",
            initials: "A"
        },
        {
            text: "Elle a su m'éclairer sur des points de ma vie qui me permettent d'aller de l'avant aujourd'hui.",
            author: "Sabrina",
            initials: "S"
        },
        {
            text: "Toujours beaucoup de justesse et de bienveillance. Elle prend le temps, une réelle implication.",
            author: "Laura",
            initials: "L"
        },
        {
            text: "Le message reçu est parfaitement clair, éclaire et confirme mon intuition.",
            author: "Riou",
            initials: "R"
        },
        {
            text: "Priscilla voit ce que personne d'autre ne voit. C'est bluffant.",
            author: "Manon",
            initials: "M"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const quoteRef = useRef(null);
    const authorRef = useRef(null);
    const starsRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Animate Out
            const tl = gsap.timeline({
                onComplete: () => {
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                }
            });

            tl.to([quoteRef.current, authorRef.current, starsRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.in"
            });

        }, 6000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Animate In when index changes
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo([starsRef.current, quoteRef.current, authorRef.current],
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }
        );

    }, [currentIndex]);

    return (
        <section id="testimonials-section" style={{
            backgroundColor: 'var(--color-vert-profond)',
            color: 'var(--color-blanc-nacre)',
            padding: '8rem 20px',
            textAlign: 'center',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Texture/Element (Optional Subtle Grain) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                pointerEvents: 'none'
            }}></div>

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

                <h2 className="visually-hidden">Avis Clients</h2>

                {/* Stars */}
                <div ref={starsRef} style={{ fontSize: '1.5rem', color: '#D4AF37', marginBottom: '2rem', letterSpacing: '5px' }}>
                    ★★★★★
                </div>

                {/* Quote */}
                <h3 ref={quoteRef} style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    lineHeight: '1.3',
                    marginBottom: '3rem',
                    fontWeight: 400
                }}>
                    "{testimonials[currentIndex].text}"
                </h3>

                {/* Author Block */}
                <div ref={authorRef} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-editorial)',
                        fontSize: '1.5rem',
                        color: 'var(--color-blanc-nacre)'
                    }}>
                        {testimonials[currentIndex].initials}
                    </div>

                    <div>
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            letterSpacing: '2px',
                            marginBottom: '0.3rem'
                        }}>
                            {testimonials[currentIndex].author}
                        </div>
                        <div style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            opacity: 0.7,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                backgroundColor: '#4CAF50',
                                borderRadius: '50%'
                            }}></span>
                            Client Vérifié
                        </div>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '4rem'
                }}>
                    {testimonials.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: '40px',
                                height: '2px',
                                backgroundColor: idx === currentIndex ? 'var(--color-blanc-nacre)' : 'rgba(255,255,255,0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>

                {/* Social Proof */}
                <div style={{
                    marginTop: '3.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    width: '100%',
                    maxWidth: '500px',
                    margin: '3.5rem auto 0 auto',
                    fontFamily: 'var(--font-editorial)', // Editorial for italics
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    opacity: 0.8,
                    fontWeight: 400,
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem' // Gap between text and heart
                }}>
                    <span>Merci aux plus de <span style={{ color: '#D4AF37', fontWeight: 500 }}>50 000 personnes</span> qui me font confiance sur instagram</span>
                    <span style={{ fontSize: '1.2rem', color: '#D4AF37' }}>♡</span>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

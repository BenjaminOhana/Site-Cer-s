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
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    // Touch/Mouse Logic Refs
    const touchStart = useRef(0);
    const currentTranslate = useRef(0);
    const prevTranslate = useRef(0);
    const isDragging = useRef(false);

    // Initialize position
    useEffect(() => {
        if (sliderRef.current) {
            gsap.set(sliderRef.current, { xPercent: -currentIndex * 100 });
        }
    }, []);

    // Unified Drag Logic
    const startDrag = (clientX) => {
        isDragging.current = true;
        touchStart.current = clientX;
        gsap.killTweensOf(sliderRef.current);
    };

    const moveDrag = (clientX) => {
        if (!isDragging.current) return;
        const width = containerRef.current.offsetWidth;
        const diff = clientX - touchStart.current;
        const movePercent = (diff / width) * 100;

        const currentBase = -currentIndex * 100;
        let newTranslate = currentBase + movePercent;

        // Resistance at edges
        if (newTranslate > 0) newTranslate = newTranslate * 0.3;
        const minTranslate = -(testimonials.length - 1) * 100;
        if (newTranslate < minTranslate) newTranslate = minTranslate + (newTranslate - minTranslate) * 0.3;

        gsap.set(sliderRef.current, { xPercent: newTranslate });

        currentTranslate.current = newTranslate;
        prevTranslate.current = movePercent;
    };

    const endDrag = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const movePercent = prevTranslate.current;
        const threshold = 15;
        let nextIndex = currentIndex;

        if (movePercent < -threshold && currentIndex < testimonials.length - 1) {
            nextIndex += 1;
        } else if (movePercent > threshold && currentIndex > 0) {
            nextIndex -= 1;
        }

        setCurrentIndex(nextIndex);

        gsap.to(sliderRef.current, {
            xPercent: -nextIndex * 100,
            duration: 0.5,
            ease: "out(1.2)"
        });

        prevTranslate.current = 0;
    };

    // Event Handlers
    const onTouchStart = (e) => startDrag(e.touches[0].clientX);
    const onTouchMove = (e) => moveDrag(e.touches[0].clientX);
    const onTouchEnd = () => endDrag();

    const onMouseDown = (e) => {
        e.preventDefault(); // Prevent text selection
        startDrag(e.clientX);
    };
    const onMouseMove = (e) => moveDrag(e.clientX);
    const onMouseUp = () => endDrag();
    const onMouseLeave = () => endDrag();

    // Desktop / Indicator Click Handler
    const goToSlide = (index) => {
        setCurrentIndex(index);
        gsap.to(sliderRef.current, {
            xPercent: -index * 100,
            duration: 0.6,
            ease: "power3.out"
        });
    };

    // Auto-play (pauses if dragging)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isDragging.current) return;

            let next = currentIndex + 1;
            if (next >= testimonials.length) next = 0;

            goToSlide(next);

        }, 6000); // 6s

        return () => clearInterval(interval);
    }, [currentIndex, testimonials.length]);


    return (
        <section id="testimonials-section" style={{
            backgroundColor: 'var(--color-vert-profond)',
            color: 'var(--color-blanc-nacre)',
            padding: '8rem 0', // Vertical padding only, horiz handled by container
            textAlign: 'center',
            minHeight: '70svh', // increased min-height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                pointerEvents: 'none'
            }}></div>

            {/* Main Carousel Container */}
            <div
                ref={containerRef}
                className="testimonials-container"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    cursor: isDragging.current ? 'grabbing' : 'grab',
                    userSelect: 'none'
                }}
            >
                <div
                    ref={sliderRef}
                    style={{
                        display: 'flex',
                        width: '100%', // Container for the track
                        willChange: 'transform',
                        touchAction: 'pan-y'
                    }}
                >
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            flexShrink: 0,
                            width: '100%',
                            padding: '0 20px', // Inner padding
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            {/* Slide Content */}
                            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                                <div style={{ fontSize: '1.5rem', color: '#D4AF37', marginBottom: '2rem', letterSpacing: '5px' }}>
                                    ★★★★★
                                </div>

                                <h3 style={{
                                    fontFamily: 'var(--font-editorial)',
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    lineHeight: '1.3',
                                    marginBottom: '3rem',
                                    fontWeight: 400
                                }}>
                                    "{t.text}"
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '60px', height: '60px', borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'var(--font-editorial)', fontSize: '1.5rem'
                                    }}>
                                        {t.initials}
                                    </div>

                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-body)', fontWeight: 600,
                                            textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px',
                                            marginBottom: '0.3rem'
                                        }}>
                                            {t.author}
                                        </div>
                                        <div style={{
                                            fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.7,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'
                                        }}>
                                            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#4CAF50', borderRadius: '50%' }}></span>
                                            Client Vérifié
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress Indicators */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '4rem',
                position: 'relative',
                zIndex: 10
            }}>
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => goToSlide(idx)}
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
                width: '90%',
                maxWidth: '500px',
                fontFamily: 'var(--font-editorial)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                opacity: 0.8,
                fontWeight: 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>Merci aux plus de <span style={{ color: '#D4AF37', fontWeight: 500 }}>50 000 personnes</span> qui me font confiance sur instagram</span>
                <span style={{ fontSize: '1.2rem', color: '#D4AF37' }}>♡</span>
            </div>

        </section>
    );
};

export default Testimonials;

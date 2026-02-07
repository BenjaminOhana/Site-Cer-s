import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        { text: "Une heure avec Priscilla m'a éclairée plus que des mois de réflexion.", author: "Marie" },
        { text: "Mon rendez-vous du mois. Je ne peux plus m'en passer.", author: "Camille" },
        { text: "J'ai senti quelque chose se débloquer. C'était physique.", author: "Laura" },
        { text: "Elle a mis des mots sur ce que je n'arrivais pas à formuler.", author: "Julie" },
        { text: "Priscilla voit ce que personne d'autre ne voit.", author: "Manon" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section style={{
            backgroundColor: 'var(--color-vert-profond)', // Deep Green
            color: 'white',
            padding: '6rem 20px',
            textAlign: 'center',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Carousel Container */}
            <div style={{ maxWidth: '800px', margin: '0 auto', transition: 'opacity 0.5s ease' }}>
                <p style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '2rem',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    lineHeight: 1.4
                }}>
                    "{testimonials[currentIndex].text}"
                </p>
                <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '1px'
                }}>
                    — {testimonials[currentIndex].author}
                </div>
            </div>

            {/* Dots */}
            <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '3rem'
            }}>
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: idx === currentIndex ? 'white' : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

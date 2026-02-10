import React, { useState, useRef } from 'react';
import soinImage from '../assets/soin-energetique.png.jpeg';
import coachingImage from '../assets/Coaching-intuitif.png.jpeg';
import questionImage from '../assets/pose-ta-question.jpeg';

const Premium = () => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);
    // Images
    const img1 = soinImage;
    const img2 = coachingImage;
    const img3 = questionImage;

    const cards = [
        {
            title: "Le Soin Énergétique",
            quotes: [
                "Ton corps sait ce que ta tête refuse de voir.",
                "Offre-toi ce renouveau."
            ],
            highlight: "Et retrouver ta légèreté.",
            cta: "Réserver",
            img: img1
        },
        {
            title: "Coaching Intuitif",
            quotes: [
                "Une question. Un blocage. Une décision à prendre.",
                "En une séance, on pose les mots.",
                "On éclaire ce qui était flou."
            ],
            highlight: "Tu repars alignée. Et tu sais quoi faire.",
            cta: "Réserver",
            img: img2,
            backgroundPosition: 'center 20%'
        },
        {
            title: "Pose ta question",
            quotes: [
                "Tu n'es pas sûre de vouloir une séance complète ?",
                "Commence par une question."
            ],
            highlight: "Et retrouve de la clarté sur un point précis.",
            cta: "Réserver",
            img: img3
        }
    ];

    const handleScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollLeft = container.scrollLeft;
            const index = Math.round(scrollLeft / (container.scrollWidth / 3));
            setActiveCard(Math.min(Math.max(index, 0), 2));
        }
    };

    const scrollToCard = (index) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const card = container.children[index];
            if (card) {
                const scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
                setActiveCard(index);
            }
        }
    };

    return (
        <section id="premium-section" style={{
            padding: '0',
            paddingBottom: '4rem', // Restore solid padding
            backgroundColor: 'var(--color-blanc-nacre)',
            // Removed marginBottom to hide hero background
        }}>
            <div style={{ padding: '4rem 20px 2rem 20px' }}>
                <h2 className="text-center" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-editorial)',
                    color: 'var(--color-bordeaux)',
                    fontWeight: 400
                }}>
                    Pour une clarté plus profonde
                </h2>
                <p className="text-center" style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    opacity: 0.6,
                    marginBottom: '3rem'
                }}>
                    Avec Priscilla
                </p>
            </div>

            {/* Container */}
            <div
                className="premium-cards-container"
                ref={containerRef}
                onScroll={handleScroll}
            >
                {cards.map((card, index) => (
                    <div key={index} className="premium-card">
                        <div className="card-image" style={{
                            backgroundImage: `url(${card.img})`,
                            backgroundPosition: card.backgroundPosition || 'center'
                        }}></div>
                        <div className="card-content">
                            <h3 style={{
                                fontFamily: 'var(--font-editorial)',
                                fontSize: '1.6rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-noir)'
                            }}>
                                {card.title}
                            </h3>

                            <div className="card-quotes">
                                {card.quotes.map((quote, i) => (
                                    <p key={i} style={{ minHeight: quote === "" ? '1rem' : 'auto' }}>
                                        {quote}
                                    </p>
                                ))}
                                {card.highlight && (
                                    <p style={{
                                        fontWeight: 600,
                                        marginTop: '1rem',
                                        color: 'var(--color-bordeaux) !important'
                                    }}>
                                        {card.highlight}
                                    </p>
                                )}
                            </div>

                            <button className="btn-card">{card.cta}</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Functional Dots */}
            <div className="mobile-dots">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${activeCard === index ? 'active' : ''}`}
                        onClick={() => scrollToCard(index)}
                        aria-label={`Voir le service ${index + 1}`}
                    />
                ))}
            </div>

            <style>{`
                .premium-cards-container {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 1.5rem;
                    padding: 0 10px 2rem 10px;
                    -webkit-overflow-scrolling: touch; /* smooth scroll ios */
                    scrollbar-width: none; /* Hide scrollbar Firefox */
                }
                .premium-cards-container::-webkit-scrollbar {
                    display: none; /* Hide scrollbar Chrome/Safari */
                }

                .premium-card {
                    flex: 0 0 85%; /* Mobile: 85% width */
                    scroll-snap-align: center;
                    background-color: #fff; /* Solid background */
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    display: flex;
                    flex-direction: column;
                    height: auto; /* Let content dictate height, but min-height for alignment */
                    min-height: 550px;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 350px; /* Increased height */
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .card-image::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 30%; /* Blur height */
                    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
                }

                .card-content {
                    padding: 2rem 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    justify-content: space-between; /* Space out content and button */
                    background-color: white;
                }
                
                .card-quotes p {
                    font-family: var(--font-body);
                    font-weight: 300;
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #555;
                }

                .btn-card {
                    background-color: transparent;
                    color: var(--color-bordeaux);
                    border: 1px solid var(--color-bordeaux);
                    padding: 0.8rem 2rem;
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    margin-top: 2rem;
                    transition: all 0.3s ease;
                }

                .btn-card:hover {
                    background-color: var(--color-bordeaux);
                    color: white;
                }

                .mobile-dots {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 2rem;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    background: #ddd;
                    border-radius: 50%;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .dot.active {
                    background: var(--color-bordeaux);
                    transform: scale(1.2);
                }

                /* Desktop */
                @media (min-width: 768px) {
                    .premium-cards-container {
                        justify-content: center;
                        overflow: visible;
                        padding: 0 40px;
                        gap: 3rem;
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .premium-card {
                        flex: 1; /* Side by side */
                        scroll-snap-align: none;
                        min-height: 600px;
                        transition: transform 0.4s ease, box-shadow 0.4s ease;
                    }
                    .premium-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    }
                    .mobile-dots {
                        display: none;
                    }
                    .card-image {
                        height: 400px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Premium;

import React, { useState, useRef, useEffect, useCallback } from 'react';
import soinImage from '../assets/soin-energetique.webp';
import coachingImage from '../assets/coaching-intuitif-2.webp';
import questionImage from '../assets/pose-ta-question.webp';

const PremiumCard = ({ card, index, activeCard, scrollToCard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Refs for flipping logic can stay if needed, but height is now CSS
    // No more measureHeight

    const handleFlip = (e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <article
            className={`premium-card-container ${isFlipped ? 'flipped' : ''}`}
        // Removed style={{ height: cardHeight }} - CSS flexbox will handle it
        >
            <div className="premium-card-inner">
                {/* FRONT */}
                <div className="premium-card-front">
                    <div className="card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                            src={card.img}
                            alt={card.alt || card.title}
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: card.backgroundPosition || 'center',
                                aspectRatio: '3/4' // Explicit ratio for stability
                            }}
                        />
                    </div>
                    <div className="card-content">
                        <h3 style={{
                            fontFamily: 'var(--font-editorial)',
                            fontSize: '1.6rem',
                            marginBottom: '1rem',
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

                        <div className="card-actions">
                            <a href={card.link || "#contact"} className="btn-card primary">
                                {card.cta}
                            </a>
                            <button onClick={handleFlip} className="btn-card secondary">
                                En savoir plus +
                            </button>
                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div className="premium-card-back">
                    <div className="back-content-wrapper">
                        <div className="back-header">
                            <h3 style={{
                                fontFamily: 'var(--font-editorial)',
                                fontSize: '1.4rem',
                                color: 'var(--color-bordeaux)',
                                marginBottom: '0.2rem'
                            }}>
                                {card.title}
                            </h3>
                            <p style={{
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#888',
                                fontWeight: 500
                            }}>{card.subtitle}</p>
                        </div>

                        <div className="back-section">
                            <h4 className="back-label">Comment ça se passe ?</h4>
                            <p className="back-text">{card.process}</p>
                        </div>

                        <div className="back-section">
                            <h4 className="back-label">Les bienfaits</h4>
                            <ul className="benefits-list">
                                {card.benefits.map((benefit, i) => (
                                    <li key={i}>
                                        <span className="benefit-icon">{card.benefitIcons[i]}</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="back-footer">
                            <a href={card.link || "#contact"} className="btn-card primary full-width">
                                {card.cta}
                            </a>
                            <button onClick={handleFlip} className="btn-text-only">
                                ← Retour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const Premium = () => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);

    // Images
    const img1 = soinImage;
    const img2 = coachingImage;
    const img3 = questionImage;

    // Icons SVG
    const SparkleIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
    );
    const FeatherIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
            <line x1="16" y1="8" x2="2" y2="22"></line>
            <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
    );
    const SunIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    );
    const EyeIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
    );
    const TargetIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
        </svg>
    );
    const LightningIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    );

    const cards = [
        {
            title: "Coaching Intuitif",
            subtitle: "Mise en lumière & Action",
            quotes: [
                "Une question. Un blocage. Une décision à prendre.",
                "En une séance, on pose les mots.",
                "On éclaire ce qui était flou."
            ],
            highlight: (
                <>
                    Tu repars aligné.e. Et tu sais quoi faire.
                    <br />
                    <span style={{ fontSize: '0.9em', opacity: 0.8, fontStyle: 'italic' }}>Places limitées.</span>
                </>
            ),
            process: "1h en visio. Un espace sacré pour déposer tes doutes. J'utilise mon intuition et mes outils pour éclairer ta route et débloquer la suite.",
            benefits: [
                "Clarté radicale sur ta situation",
                "Décisions prises avec le cœur",
                "Impulsion pour passer à l'action"
            ],
            benefitIcons: [EyeIcon, TargetIcon, SparkleIcon],
            cta: "Réserver",
            img: img2,
            backgroundPosition: 'center 60%',
            alt: "Coaching intuitif — Séance avec Priscilla Owona"
        },
        {
            title: "Le Soin Énergétique",
            subtitle: "Nettoyage & Harmonisation",
            quotes: [
                "Ton corps sait ce que ta tête refuse de voir.",
                "Offre-toi ce renouveau."
            ],
            highlight: "Et retrouve ta légèreté.",
            process: "30 min d'échange pour cibler tes besoins. Puis 30 min de soin à distance (pas besoin d'être disponible). Je t'envoie ensuite un compte-rendu vocal complet.",
            benefits: [
                "Allègement immédiat (physique/mental)",
                "Libération des émotions cristallisées",
                "Regain d'énergie vitale durable"
            ],
            benefitIcons: [FeatherIcon, SunIcon, LightningIcon],
            cta: "Réserver",
            img: img1,
            alt: "Soin énergétique à distance — Cérès"
        },
        {
            title: "Pose ta question",
            subtitle: "Guidance Ciblée",
            quotes: [
                "Tu n'es pas sûr.e de vouloir une séance complète ?",
                "Commence par une question."
            ],
            highlight: "Et retrouve de la clarté sur un point précis.",
            process: "Tu m'envoies ta question précise par écrit. Je me connecte et je te réponds par un audio détaillé et personnel sous 48h.",
            benefits: [
                "Réponse rapide et directe",
                "À écouter à ton rythme",
                "Un éclairage précis sans RDV"
            ],
            benefitIcons: [LightningIcon, FeatherIcon, TargetIcon],
            cta: "Réserver",
            img: img3,
            backgroundPosition: 'center 20%', // Adjusted down slightly from top
            alt: "Pose ta question à Priscilla — Guidance rapide"
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
        <section id="premium-section" aria-labelledby="premium-title" style={{
            padding: '0',
            paddingBottom: '4rem',
            backgroundColor: 'var(--color-blanc-nacre)',
        }}>
            <div style={{ padding: '4rem 20px 2rem 20px' }}>
                <h2 id="premium-title" className="text-center" style={{
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
                    <PremiumCard
                        key={index}
                        card={card}
                        index={index}
                        activeCard={activeCard}
                        scrollToCard={scrollToCard}
                    />
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
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    contain: content; /* Isolates layout, style, paint */
                }
                .premium-cards-container::-webkit-scrollbar {
                    display: none;
                }

                /* FLIP CARD CONTAINERS */
                .premium-card-container {
                    flex: 0 0 85%;
                    scroll-snap-align: center;
                    /* height is now set dynamically via JS */
                    perspective: 1500px;
                    background-color: transparent;
                    /* Removed will-change here to avoid too many layers, inner card has it */
                }

                .premium-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    border-radius: 4px;
                    will-change: transform; /* Hint for GPU */
                    
                    /* NEW: Grid for auto-height alignment */
                    display: grid;
                    grid-template-columns: 1fr;
                }

                /* STATE: Flipped */
                .premium-card-container.flipped .premium-card-inner {
                    transform: rotateY(180deg);
                }

                /* FRONT & BACK COMMON */
                .premium-card-front, .premium-card-back {
                    /* Changed from absolute to grid placement */
                    grid-row: 1;
                    grid-column: 1;
                    position: relative; 
                    
                    width: 100%;
                    /* Height auto to let content dictate size */
                    min-height: 100%; 
                    
                    -webkit-backface-visibility: hidden; /* Safari */
                    backface-visibility: hidden;
                    border-radius: 4px;
                    overflow: hidden;
                    background-color: white;
                    border: 1px solid rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                }

                /* FRONT SPECIFIC */
                .premium-card-front {
                    z-index: 2;
                }

                /* BACK SPECIFIC */
                .premium-card-back {
                    transform: rotateY(180deg);
                    background-color: #faf9f8; /* Légèrement différent, couleur papier/crème */
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                /* FRONT CONTENT */
                .card-image {
                    width: 100%;
                    height: 280px; /* Reduced to fit mobile screen */
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    flex-shrink: 0;
                }
                .card-image::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; width: 100%; height: 30%;
                    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
                }

                .card-content {
                    padding: 1rem; /* Reduced padding */
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    justify-content: flex-start; /* Removed space-between to fix title alignment */
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

                .card-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8rem;
                    width: 100%;
                    margin-top: auto; /* Push to bottom */
                    padding-top: 1rem; /* Reduced spacing */
                }

                .btn-card {
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                    max-width: 250px;
                    padding: 0.7rem 1rem;
                }

                .btn-card.primary {
                    background-color: transparent;
                    color: var(--color-bordeaux);
                    border: 1px solid var(--color-bordeaux);
                }
                .btn-card.primary:hover {
                    background-color: var(--color-bordeaux);
                    color: white;
                }

                .btn-card.secondary {
                    background: none;
                    border: none;
                    border-bottom: 1px solid transparent;
                    color: #888;
                    font-size: 0.75rem;
                    padding: 0.5rem;
                }
                .btn-card.secondary:hover {
                    color: var(--color-bordeaux);
                    border-bottom-color: var(--color-bordeaux);
                }

                /* BACK CONTENT STYLES */
                .back-content-wrapper {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: flex-start; /* Title stays at top */
                    text-align: left;
                    width: 100%;
                }

                .back-header {
                    text-align: center;
                    margin-bottom: 2rem;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    padding-bottom: 1rem;
                }

                .back-section {
                    margin-bottom: 1.5rem;
                }

                .back-label {
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-bordeaux);
                    margin-bottom: 0.8rem;
                    font-weight: 600;
                }

                .back-text {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: #555;
                    font-weight: 300;
                }

                .benefits-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .benefits-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.8rem;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    color: #444;
                    font-weight: 400;
                }
                
                .benefit-icon {
                    color: var(--color-bordeaux);
                    display: flex;
                    align-items: center;
                }

                .back-footer {
                    margin-top: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                .full-width {
                    width: 100%;
                }

                .btn-text-only {
                    background: none;
                    border: none;
                    color: #999;
                    font-size: 0.8rem;
                    cursor: pointer;
                    font-family: var(--font-body);
                    transition: color 0.3s;
                }
                .btn-text-only:hover {
                    color: var(--color-bordeaux);
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
                    .premium-card-container {
                        flex: 1;
                        scroll-snap-align: none;
                    }
                    
                    /* HOVER EFFECT (Subtle lift instead of flip) */
                    .premium-card-container:not(.flipped):hover .premium-card-inner {
                        transform: translateY(-8px);
                    }
                    
                    .mobile-dots {
                        display: none;
                    }
                    .card-image {
                        height: 450px; /* Increased from 400px */
                    }
                }
            `}</style>
        </section>
    );
};

export default Premium;


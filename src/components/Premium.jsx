import React from 'react';

const Premium = () => {
    // Placeholders
    const img1 = "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2670&auto=format&fit=crop";
    const img2 = "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=2669&auto=format&fit=crop";
    const img3 = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop";

    const cards = [
        {
            title: "Le Soin Énergétique",
            desc1: "Ton corps sait ce que ta tête refuse de voir.",
            desc2: "Laisse-moi t'aider à le libérer. Et retrouver ta légèreté.",
            cta: "Réserver",
            img: img1
        },
        {
            title: "Coaching Intuitif",
            desc1: "Une question. Un blocage. Une décision à prendre.",
            desc2: "En une séance, on pose les mots. On éclaire ce qui était flou.",
            highlight: "Tu repars avec ta réponse.",
            cta: "Réserver",
            img: img2
        },
        {
            title: "Pose ta question",
            desc1: "Tu n'es pas sûre de vouloir une séance complète ?",
            desc2: "Commence par une question.",
            highlight: "Et retrouve de la clarté sur un point précis.",
            cta: "Réserver",
            img: img3
        }
    ];

    return (
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-blanc-nacre)' }}>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem', padding: '0 20px' }}>
                Pour une clarté profonde, avec moi
            </h2>

            {/* Container */}
            <div className="premium-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="premium-card" style={{ backgroundImage: `url(${card.img})` }}>
                        <div className="card-overlay">
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{card.title}</h3>
                            <div className="card-desc">
                                <p>{card.desc1}</p>
                                <p>{card.desc2}</p>
                                {card.highlight && <p style={{ fontWeight: 600, marginTop: '0.5rem' }}>{card.highlight}</p>}
                            </div>
                            <button className="btn-card">{card.cta}</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots for mobile pagination visualization */}
            <div className="mobile-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <style>{`
                .premium-cards-container {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 1rem;
                    padding: 0 20px 2rem 20px;
                    -webkit-overflow-scrolling: touch; /* smooth scroll ios */
                }

                .premium-card {
                    flex: 0 0 85%; /* Mobile: 85% width */
                    scroll-snap-align: center;
                    height: 60vh;
                    border-radius: 0; /* No rounded corners */
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    color: white;
                    overflow: hidden;
                }

                .card-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.4);
                    padding: 2rem;
                    display: flex;
                    flexDirection: column;
                    justify-content: flex-end;
                    align-items: center;
                    text-align: center;
                    transition: background 0.3s ease;
                }
                
                .card-desc {
                    font-family: var(--font-body);
                    font-weight: 300;
                    margin-bottom: 2rem;
                    font-size: 1rem;
                }

                .btn-card {
                    background-color: var(--color-bordeaux);
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .mobile-dots {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 1rem;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    background: #ccc;
                    border-radius: 50%;
                }
                .dot.active {
                    background: var(--color-bordeaux);
                }

                /* Desktop */
                @media (min-width: 768px) {
                    .premium-cards-container {
                        justify-content: center;
                        overflow: visible;
                        padding: 0 40px;
                        gap: 2rem;
                    }
                    .premium-card {
                        flex: 1; /* Side by side */
                        height: 70vh;
                        transition: transform 0.3s ease;
                    }
                    .premium-card:hover {
                        transform: scale(1.03);
                        z-index: 2;
                    }
                    .mobile-dots {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Premium;

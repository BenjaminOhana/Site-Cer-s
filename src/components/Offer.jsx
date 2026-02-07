import React from 'react';

const Offer = () => {
    // Placeholder image: Summer ambiance, golden light, sea
    const image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop";

    return (
        <section style={{
            backgroundColor: '#F9F5F0', // Crème léger
            position: 'relative',
        }}>
            <div className="offer-container" style={{
                display: 'flex',
                flexDirection: 'column', // Mobile first
                minHeight: '100vh'
            }}>
                {/* Image */}
                <div className="offer-image" style={{
                    position: 'relative',
                    width: '100%',
                    height: '50vh',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    {/* Mobile Title Overlay */}
                    <h2 className="mobile-title" style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '0',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        fontSize: '2.5rem',
                        margin: 0
                    }}>
                        Ton horoscope personnalisé
                    </h2>
                </div>

                {/* Content */}
                <div className="offer-content" style={{
                    flex: 1,
                    padding: '3rem 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <h2 className="desktop-title" style={{ display: 'none', marginBottom: '2rem', fontSize: '3rem' }}>
                        Ton horoscope personnalisé
                    </h2>

                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.2rem', marginBottom: '3rem' }}>
                        <p>Une boussole pour ton mois.</p>
                        <p>Rédigée par mes soins, pour ton signe.</p>
                        <br />
                        <p style={{ fontWeight: 600 }}>Savoir où tu vas — avant même de partir.</p>
                    </div>

                    <a href="#horoscope" className="btn-primary">
                        Recevoir mon horoscope
                    </a>

                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        7,99€/mois
                    </p>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .offer-container {
                        flex-direction: row !important;
                        height: 100vh;
                    }
                    .offer-image {
                        width: 50% !important;
                        height: auto !important;
                        min-height: 100%;
                    }
                    .offer-content {
                        width: 50%;
                        align-items: flex-start !important;
                        text-align: left !important;
                        padding: 6rem !important;
                    }
                    .mobile-title {
                        display: none;
                    }
                    .desktop-title {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Offer;

import React from 'react';
import insta1 from '../assets/insta-1.webp';
import insta2 from '../assets/insta-2.webp';
import insta3 from '../assets/insta-3.webp';
import insta4 from '../assets/insta-4.webp';
import insta5 from '../assets/insta-5.webp';

const Instagram = () => {
    // User provided images
    const images = [
        insta1,
        insta2,
        insta3,
        insta4,
        insta5
    ];

    return (
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-editorial)',
                    fontWeight: 400,
                    color: 'var(--color-bordeaux)'
                }}>
                    Ta dose de clarté quotidienne.
                </h2>
            </div>

            <div className="insta-grid">
                {images.map((img, i) => (
                    <div key={i} className="insta-item">
                        <div className="polaroid-inner">
                            <img src={img} alt={`Publication Instagram Cérès par Priscilla Owona ${i + 1} - Astrologie et Spiritualité`} loading="lazy" />
                            <div className="insta-overlay">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '3rem' }}>
                <a
                    href="https://www.instagram.com/ceresfrance_/"
                    target="_blank"
                    rel="noreferrer"
                    className="insta-link"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>@ceresfrance_</span>
                </a>
            </div>

            <style>{`
                .insta-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 2rem;
                    padding: 0 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .insta-item {
                    flex: 0 0 calc(50% - 2rem); /* Mobile: 2 per row */
                    max-width: 300px;
                    position: relative;
                    transition: transform 0.3s ease, z-index 0.3s;
                }
                .polaroid-inner {
                    background: white;
                    padding: 10px 10px 35px 10px; /* Classic Polaroid bottom */
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: box-shadow 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .insta-item img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    display: block;
                    filter: sepia(0.1) contrast(1.05); /* Vintage touch */
                }
                
                /* Random Rotations */
                .insta-item:nth-child(odd) { transform: rotate(-2deg); }
                .insta-item:nth-child(even) { transform: rotate(2deg); margin-top: 1rem; }
                .insta-item:nth-child(3n) { transform: rotate(1deg); margin-top: -1rem; }

                /* Hover Effect */
                .insta-item:hover {
                    transform: scale(1.05) rotate(0deg);
                    z-index: 10;
                }
                .insta-item:hover .polaroid-inner {
                    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
                }

                .insta-overlay {
                    position: absolute;
                    top: 10px; left: 10px; right: 10px; bottom: 35px; /* Match padding */
                    background: rgba(0,0,0,0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .insta-item:hover .insta-overlay {
                    opacity: 1;
                }

                /* Desktop */
                @media (min-width: 768px) {
                    .insta-item {
                        flex: 0 0 calc(33.333% - 2rem); /* 3 per row on desktop */
                    }
                    .insta-grid {
                        gap: 3rem;
                    }
                    /* More nuanced rotations on desktop */
                    .insta-item:nth-child(1) { transform: rotate(-3deg); margin-top: 20px; }
                    .insta-item:nth-child(2) { transform: rotate(2deg); margin-top: -10px; }
                    .insta-item:nth-child(3) { transform: rotate(-1deg); margin-top: 10px; }
                    .insta-item:nth-child(4) { transform: rotate(1deg); margin-top: -5px; }
                    .insta-item:nth-child(5) { transform: rotate(-2deg); margin-top: 15px; }
                    .insta-item:nth-child(6) { transform: rotate(3deg); margin-top: -15px; }
                }

                .insta-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-top: 1.5rem;
                    padding: 0.8rem 2.5rem;
                    border: 1px solid var(--color-bordeaux);
                    border-radius: 50px;
                    color: var(--color-bordeaux);
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    text-decoration: none;
                }
                .insta-link:hover {
                    background-color: var(--color-bordeaux);
                    color: white !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(128, 0, 32, 0.2);
                }
                .insta-link svg {
                    transition: transform 0.3s ease;
                }
                .insta-link:hover svg {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default Instagram;

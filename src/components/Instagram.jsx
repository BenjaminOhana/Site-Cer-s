import React from 'react';

const Instagram = () => {
    // Placeholders
    const images = [
        "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616053075249-14a09e078869?q=80&w=2669&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2680&auto=format&fit=crop", // Magazine vibes
        "https://images.unsplash.com/photo-1520697830682-8be6018301fc?q=80&w=2670&auto=format&fit=crop"
    ];

    return (
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Retrouve-moi au quotidien</h2>
                <a
                    href="https://www.instagram.com/ceresfrance_/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '1.2rem', textDecoration: 'underline' }}
                >
                    @ceresfrance_
                </a>
            </div>

            <div className="insta-grid">
                {images.map((img, i) => (
                    <div key={i} className="insta-item">
                        <img src={img} alt="Instagram post" />
                        <div className="insta-overlay">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" stroke="none">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .insta-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Mobile: 2 cols x 3 rows = 6 images */
                }
                .insta-item {
                    position: relative;
                    aspect-ratio: 1/1; /* Square */
                    overflow: hidden;
                    cursor: pointer;
                }
                .insta-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                .insta-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                /* Desktop */
                @media (min-width: 768px) {
                    .insta-grid {
                        grid-template-columns: repeat(6, 1fr); /* Desktop: 6 cols in one line */
                    }
                    .insta-item:hover .insta-overlay {
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default Instagram;

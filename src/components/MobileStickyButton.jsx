import React, { useState, useEffect } from 'react';

const MobileStickyButton = () => {
    const [visible, setVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after passing mostly through the first section
            if (window.scrollY > window.innerHeight * 0.8) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    if (!visible) return null;

    return (
        <>
            {/* The Floating Button */}
            {!menuOpen && (
                <button
                    onClick={toggleMenu}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                        backgroundColor: 'var(--color-bordeaux)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 30px',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        animation: 'fadeInUp 0.5s ease-out'
                    }}
                    className="mobile-sticky-btn"
                >
                    Réserver
                </button>
            )}

            {/* The Overlay Menu */}
            {menuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.98)',
                    zIndex: 2000,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <button
                        onClick={toggleMenu}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: 'pointer'
                        }}
                    >
                        ✕
                    </button>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', width: '80%' }}>
                        <MenuItem href="#horoscope" label="🌙 Mon Horoscope" onClick={toggleMenu} />
                        <MenuItem href="#soins" label="💫 Soin Énergétique" onClick={toggleMenu} />
                        <MenuItem href="#coaching" label="💡 Coaching Intuitif" onClick={toggleMenu} />
                        <MenuItem href="#question" label="❓ Poser ma question" onClick={toggleMenu} />
                    </div>
                </div>
            )}

            <style>{`
                @media (min-width: 768px) {
                    .mobile-sticky-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

const MenuItem = ({ href, label, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        style={{
            fontSize: '1.2rem',
            padding: '1rem',
            borderBottom: '1px solid #eee',
            color: 'var(--color-noir)'
        }}
    >
        {label}
    </a>
);

export default MobileStickyButton;

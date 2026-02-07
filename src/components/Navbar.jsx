import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after passing mostly through the first section (e.g., > 80vh)
            if (window.scrollY > window.innerHeight * 0.8) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '60px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'none', // Mobile hidden
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            animation: 'fadeIn 0.5s ease-out'
        }} className="desktop-navbar">
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
                Cérès.
            </div>

            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
                <a href="#horoscope">Horoscope</a>
                <a href="#accompagnement">Accompagnement</a>
                <a href="mailto:contact@ceresfrance.com">Contact</a>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-navbar {
                        display: flex !important;
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;

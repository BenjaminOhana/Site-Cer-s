import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Toggle style when scrolling past 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (hash) => {
        const targetId = hash.replace('#', '');

        if (location.pathname === '/') {
            if (targetId === '' || hash === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            navigate('/', { state: { scrollTo: hash } });
        }
    };

    // Note: Mobile visibility is handled by CSS (display: none by default)
    // We remove the JS null return to ensure it renders on Desktop immediately

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px', // Slightly taller for elegance
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            zIndex: 1000,
            display: 'none', // Mobile hidden via CSS class below
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.4s ease',
            color: isScrolled ? 'var(--color-text)' : 'white',
        }} className="desktop-navbar">
            <div
                style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', cursor: 'pointer' }}
                onClick={() => handleNavigation('#')}
            >
                Cérès .
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', fontWeight: 500 }} className="nav-links">
                <a
                    href="#offer-section"
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavigation('#offer-section'); }}
                >
                    Horoscope
                </a>
                <a
                    href="#accompagnement"
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavigation('#accompagnement'); }}
                >
                    Accompagnement
                </a>
                <a
                    href="#faq-section"
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavigation('#faq-section'); }}
                >
                    FAQ
                </a>
                <a href="mailto:contact@ceresfrance.com" className="nav-link">Contact</a>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-navbar {
                        display: flex !important;
                    }
                }
                
                .nav-link {
                    position: relative;
                    padding-bottom: 4px;
                    text-decoration: none;
                    color: inherit; /* Follows parent color (White or Black) */
                    cursor: pointer;
                    opacity: 0.9;
                    transition: opacity 0.3s ease;
                }
                
                .nav-link:hover {
                    opacity: 1;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: 0;
                    left: 0;
                    background-color: currentColor; /* Follows parent color */
                    transition: width 0.3s ease-out;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;

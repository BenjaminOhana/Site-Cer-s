import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let rafId = null;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(() => {
                    // Show after passing mostly through the first section (e.g., > 80vh)
                    if (window.scrollY > window.innerHeight * 0.8) {
                        setVisible(true);
                    } else {
                        setVisible(false);
                    }
                    ticking = false;
                });
            }
        };

        // passive: true allows the browser to optimize scroll without waiting for JS
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
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
            animation: 'slideDownFade 0.6s ease-out'
        }} className="desktop-navbar">
            <div
                style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', cursor: 'pointer' }}
                onClick={() => handleNavigation('#')}
            >
                Cérès .
            </div>

            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }} className="nav-links">
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
                @keyframes slideDownFade {
                    from { 
                        opacity: 0; 
                        transform: translateY(-20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                .nav-link {
                    position: relative;
                    padding-bottom: 4px;
                    transition: color 0.3s ease;
                    text-decoration: none;
                    color: var(--color-text);
                    cursor: pointer;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--color-text);
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

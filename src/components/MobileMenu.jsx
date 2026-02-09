import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const circleRef = useRef(null);

    // Toggle menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const menu = menuRef.current;
        const links = linksRef.current;
        const circle = circleRef.current;

        if (isOpen) {
            // Open animation
            // 1. Expand the circle background
            gsap.to(circle, {
                duration: 0.6,
                scale: 1500, // Massive scale to cover screen
                ease: "power3.inOut"
            });

            // 2. Fade in the menu container (for content)
            gsap.to(menu, {
                duration: 0.4,
                delay: 0.2,
                opacity: 1,
                visibility: 'visible',
                pointerEvents: 'all'
            });

            // 3. Stagger in the links
            gsap.fromTo(links,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.5,
                    delay: 0.4,
                    ease: "power2.out"
                }
            );

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

        } else {
            // Close animation
            // 1. Fade out links
            gsap.to(links, {
                y: 20,
                opacity: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: "power2.in"
            });

            // 2. Hide menu container
            gsap.to(menu, {
                duration: 0.3,
                delay: 0.2,
                opacity: 0,
                onComplete: () => {
                    if (menu) {
                        menu.style.visibility = 'hidden';
                        menu.style.pointerEvents = 'none';
                    }
                }
            });

            // 3. Shrink circle
            gsap.to(circle, {
                duration: 0.6,
                delay: 0.1, // Wait for content to fade slightly
                scale: 1,
                ease: "power3.inOut"
            });

            // Restore body scroll
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle link click (close menu)
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const addToLinksRef = (el) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    return (
        <div className="mobile-menu-container">
            {/* 1. Burger Button (Always visible) */}
            <button
                onClick={toggleMenu}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 2001, // Above everything
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    padding: 0
                }}
                className="mobile-burger-btn"
                aria-label="Menu"
            >
                <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: 'var(--color-bordeaux)',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}></span>
                <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: 'var(--color-bordeaux)',
                    transition: 'opacity 0.3s ease',
                    opacity: isOpen ? 0 : 1
                }}></span>
                <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: 'var(--color-bordeaux)',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    transform: isOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none'
                }}></span>
            </button>

            {/* 2. Background Circle (For expansion effect) */}
            <div
                ref={circleRef}
                style={{
                    position: 'fixed',
                    top: '45px', // Center of button (20 + 50/2)
                    right: '45px', // Center of button
                    width: '2px',
                    height: '2px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(253, 251, 247, 0.3)', // Very light, mostly decorative
                    backdropFilter: 'none', // Remove since main effect is on overlay
                    zIndex: 1999,
                    pointerEvents: 'none',
                    transform: 'scale(1)' // Start tiny
                }}
            />

            {/* 3. Full Screen Menu Overlay */}
            <div
                ref={menuRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 2000,
                    visibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    backgroundColor: 'rgba(253, 251, 247, 0.7)', // Semi-transparent
                    backdropFilter: 'blur(20px) saturate(180%)', // Apple glass effect
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari support
                }}
            >
                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem',
                    textAlign: 'center'
                }}>
                    {/* Decorative Logo in Menu */}
                    <div
                        ref={addToLinksRef}
                        style={{
                            fontFamily: 'var(--font-title)',
                            fontSize: '2rem',
                            color: 'var(--color-bordeaux)',
                            marginBottom: '1rem'
                        }}
                    >
                        Cérès.
                    </div>

                    <a
                        href="#hero-section"
                        onClick={handleLinkClick}
                        ref={addToLinksRef}
                        style={{
                            fontFamily: 'var(--font-editorial)',
                            fontSize: '2rem',
                            color: 'var(--color-noir)',
                            textDecoration: 'none'
                        }}
                    >
                        Accueil
                    </a>

                    <a
                        href="#offer-section"
                        onClick={handleLinkClick}
                        ref={addToLinksRef}
                        style={{
                            fontFamily: 'var(--font-editorial)',
                            fontSize: '2rem',
                            color: 'var(--color-noir)',
                            textDecoration: 'none'
                        }}
                    >
                        Mon Horoscope
                        <span style={{
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: '#666',
                            marginTop: '5px',
                            fontWeight: 300,
                            letterSpacing: '1px'
                        }}>VOTRE GUIDE DU MOIS</span>
                    </a>

                    <a
                        href="#accompagnement"
                        onClick={handleLinkClick}
                        ref={addToLinksRef}
                        style={{
                            fontFamily: 'var(--font-editorial)',
                            fontSize: '2rem',
                            color: 'var(--color-noir)',
                            textDecoration: 'none'
                        }}
                    >
                        Accompagnement
                        <span style={{
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            color: '#666',
                            marginTop: '5px',
                            fontWeight: 300,
                            letterSpacing: '1px'
                        }}>COACHING & SOINS</span>
                    </a>

                    <a
                        href="mailto:astronyma@gmail.com"
                        onClick={handleLinkClick}
                        ref={addToLinksRef}
                        style={{
                            fontFamily: 'var(--font-editorial)',
                            fontSize: '2rem',
                            color: 'var(--color-noir)',
                            textDecoration: 'none'
                        }}
                    >
                        Contact
                    </a>
                </nav>
            </div>

            <style>{`
                /* Hide on desktop, show only on mobile/tablet */
                .mobile-menu-container {
                    display: block;
                }
                @media (min-width: 768px) {
                    .mobile-menu-container {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default MobileMenu;

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import SEO from './SEO';

import { Link } from 'react-router-dom';

const LegalLayout = ({ children, title, seoTitle, seoDescription, robots, canonical }) => {
    return (
        <div style={{ backgroundColor: 'var(--color-blanc-nacre)', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
            <SEO
                title={seoTitle || title}
                description={seoDescription || `Page légale : ${title} - Cérès`}
                url={canonical}
                robots={robots}
            />
            <Navbar />
            <MobileMenu />

            <div style={{
                flex: 1,
                padding: '120px 20px 80px',
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%'
            }}>
                <Link to="/" style={{
                    display: 'inline-block',
                    marginBottom: '2rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease'
                }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                >
                    ← Retour à l'accueil
                </Link>

                <h1 style={{
                    fontFamily: 'var(--font-editorial)',
                    color: 'var(--color-bordeaux)',
                    fontSize: '3rem',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    {title}
                </h1>

                <div style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text)',
                    lineHeight: 1.8,
                    fontSize: '1rem'
                }} className="legal-content">
                    {children}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link to="/" style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        backgroundColor: 'var(--color-bordeaux)',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.backgroundColor = '#8a1c1c';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'var(--color-bordeaux)';
                        }}
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>

            <Footer />

            <style>{`
                .legal-content h2 {
                    font-family: var(--font-editorial);
                    color: var(--color-bordeaux);
                    font-size: 1.8rem;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .legal-content p {
                    margin-bottom: 1.5rem;
                }
                .legal-content ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .legal-content li {
                    margin-bottom: 0.5rem;
                }
                .highlight-missing {
                    background-color: #ffe6e6;
                    color: #d8000c;
                    padding: 2px 5px;
                    border-radius: 4px;
                    border: 1px solid #d8000c;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

LegalLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    seoTitle: PropTypes.string,
    seoDescription: PropTypes.string,
    robots: PropTypes.string,
    canonical: PropTypes.string,
};

export default LegalLayout;

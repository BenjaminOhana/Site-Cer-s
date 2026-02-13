import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-blanc-nacre)', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
            <SEO
                title="Page introuvable | Cérès"
                description="La page que vous recherchez n'existe pas."
                noIndex={true}
                schemas={[{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Page introuvable",
                    "description": "La page que vous recherchez n'existe pas."
                }]}
            />

            <Navbar />
            <MobileMenu />

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 20px 80px',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontFamily: 'var(--font-editorial)',
                    color: 'var(--color-bordeaux)',
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    marginBottom: '1rem',
                    lineHeight: 1
                }}>
                    404
                </h1>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text)',
                    fontSize: '1.2rem',
                    marginBottom: '2rem'
                }}>
                    Oups, cette page s'est égarée dans les étoiles.
                </p>
                <Link to="/" className="btn-primary" style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    textDecoration: 'none'
                }}>
                    Retourner à l'accueil
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default NotFound;

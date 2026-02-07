import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-blanc-nacre)',
            borderTop: '1px solid #eee'
        }}>
            <div style={{
                fontFamily: 'var(--font-title)',
                fontSize: '2rem',
                marginBottom: '1rem'
            }}>
                Cérès.
            </div>

            <a href="mailto:contact@ceresfrance.com" style={{
                display: 'block',
                marginBottom: '2rem',
                fontSize: '1.1rem',
                textDecoration: 'none'
            }}>
                contact@ceresfrance.com
            </a>

            <div style={{
                fontSize: '0.8rem',
                color: '#666',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
            }}>
                <a href="#">Mentions légales</a>
                <span>·</span>
                <a href="#">CGV</a>
                <span>·</span>
                <a href="#">Confidentialité</a>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#999' }}>
                © 2026 Priscilla Owona
            </div>
        </footer>
    );
};

export default Footer;

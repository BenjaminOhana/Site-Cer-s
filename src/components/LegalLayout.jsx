import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const LegalLayout = ({ children, title }) => {
    return (
        <div style={{ backgroundColor: 'var(--color-blanc-nacre)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <MobileMenu />

            <div style={{
                flex: 1,
                padding: '120px 20px 80px',
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%'
            }}>
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

export default LegalLayout;

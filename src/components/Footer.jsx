import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-blanc-nacre)',
            borderTop: '1px solid #eee'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    cursor: 'pointer'
                }}>
                    Cérès .
                </div>
            </Link>

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
                <Link to="/mentions-legales">Mentions légales</Link>
                <span>·</span>
                <Link to="/cgv">CGV</Link>
                <span>·</span>
                <Link to="/confidentialite">Confidentialité</Link>
            </div>


            <div style={{ fontSize: '0.8rem', color: '#999' }}>
                © 2026 Priscilla Owona
            </div>
        </footer>
    );
};

export default Footer;

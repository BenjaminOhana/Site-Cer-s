import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Promise from '../components/Promise';
import Bio from '../components/Bio';
import Offer from '../components/Offer';
import Premium from '../components/Premium';
import Testimonials from '../components/Testimonials';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MobileStickyButton from '../components/MobileStickyButton';
import MobileMenu from '../components/MobileMenu';
import FAQ from '../components/FAQ';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle scroll on mount if we have a state (from navigation) or hash
        const targetHash = location.state?.scrollTo || location.hash;

        if (targetHash) {
            const targetId = targetHash.replace('#', '');
            if (targetId) {
                // Increase delay to ensure layout is stable (images loaded, etc.)
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            }
        }
    }, [location]);

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Priscilla Owona",
            "jobTitle": "Astrologue & Coach Intuitive",
            "url": "https://ceresfrance.com",
            "sameAs": ["https://www.instagram.com/ceresfrance_"],
            "description": "Astrologue et coach intuitive, fondatrice de Cérès Magazine. Accompagnement premium en astrologie, soins énergétiques et coaching intuitif.",
            "knowsAbout": ["Astrologie", "Coaching intuitif", "Soins énergétiques", "Horoscope personnalisé"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vernon",
                "postalCode": "27200",
                "addressRegion": "Normandie",
                "addressCountry": "FR"
            },
            "areaServed": "France"
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cérès Magazine",
            "url": "https://ceresfrance.com",
            "logo": "https://ceresfrance.com/favicon.png",
            "founder": { "@type": "Person", "name": "Priscilla Owona" },
            "sameAs": ["https://www.instagram.com/ceresfrance_"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vernon",
                "postalCode": "27200",
                "addressRegion": "Normandie",
                "addressCountry": "FR"
            },
            "areaServed": "France"
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Horoscope Mensuel Personnalisé — Cérès",
            "description": "Horoscope mensuel personnalisé basé sur vos informations de naissance, rédigé par Priscilla Owona. Points clés du mois, guidance intuitive.",
            "brand": { "@type": "Brand", "name": "Cérès" },
            "offers": {
                "@type": "Offer",
                "price": "7.99",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://ceresfrance.com/#horoscope"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Soin Énergétique à Distance",
            "provider": { "@type": "Person", "name": "Priscilla Owona" },
            "areaServed": "FR",
            "description": "Soin énergétique à distance par Priscilla Owona. Libération des blocages émotionnels et karmiques."
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Coaching Intuitif",
            "provider": { "@type": "Person", "name": "Priscilla Owona" },
            "areaServed": "FR",
            "description": "Séance individuelle de coaching intuitif pour obtenir de la clarté sur vos blocages émotionnels."
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Guidance Rapide (Pose ta question)",
            "provider": { "@type": "Person", "name": "Priscilla Owona" },
            "areaServed": "FR",
            "description": "Format court de guidance pour répondre à une question précise et éclairer votre chemin."
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Cérès — Priscilla Owona",
            "url": "https://ceresfrance.com"
        }
    ];

    return (
        <main>
            <SEO
                title="Priscilla Owona — Astrologue et Coach Intuitive en ligne | Vernon, Eure (27)"
                description="Priscilla Owona, astrologue & coach intuitive en ligne. Horoscope mensuel personnalisé (7,99€/mois), soins énergétiques et coaching intuitif. Retrouvez votre clarté."
                schemas={schemas}
            />
            <h1 className="visually-hidden">Priscilla Owona — Astrologue et Coach Intuitive en ligne | Vernon, Eure (27)</h1>
            <Navbar />
            <div id="hero-section">
                <Hero />
            </div>
            <Promise />
            <Bio />
            <div id="offer-section">
                <Offer />
            </div>
            <div id="accompagnement">
                <Premium />
            </div>
            <Testimonials />
            <div id="faq-section">
                <FAQ />
            </div>
            <Instagram />
            <Footer />
            <MobileStickyButton />
            <MobileMenu />
        </main>
    );
};

export default Home;

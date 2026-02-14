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
import SignatureCTA from '../components/SignatureCTA';
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
            "description": "Priscilla Owona, astrologue et coach intuitive, fondatrice de Cérès. J'accompagne les femmes à retrouver clarté et sérénité grâce à l'astrologie et aux soins énergétiques.",
            "image": "https://ceresfrance.com/assets/priscilla-portrait.webp",
            "knowsAbout": ["Astrologie", "Coaching intuitif", "Soins énergétiques", "Horoscope personnalisé", "Développement personnel"],
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
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@ceresfrance.com",
                "contactType": "customer service"
            },
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
            "description": "Votre horoscope mensuel 100% personnalisé basé sur votre date, heure et lieu de naissance. Rédigé avec soin par Priscilla Owona pour éclairer votre mois.",
            "brand": { "@type": "Brand", "name": "Cérès" },
            "image": "https://ceresfrance.com/assets/horoscope-magazine.webp",
            "offers": {
                "@type": "Offer",
                "price": "7.99",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://ceresfrance.com/#horoscope",
                "priceValidUntil": "2025-12-31"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Soin Énergétique à Distance",
            "serviceType": "Soin Énergétique",
            "provider": { "@type": "Person", "name": "Priscilla Owona" },
            "areaServed": "FR",
            "description": "Soin énergétique à distance pour nettoyer, harmoniser et recharger vos énergies vitales. Compte-rendu vocal inclus.",
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "60.00",
                "priceCurrency": "EUR"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Coaching Intuitif",
            "serviceType": "Coaching de Vie",
            "provider": { "@type": "Person", "name": "Priscilla Owona" },
            "areaServed": "FR",
            "description": "Séance individuelle de coaching intuitif d'1h en visio pour débloquer une situation et retrouver de la clarté.",
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "90.00",
                "priceCurrency": "EUR"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Cérès — Priscilla Owona",
            "url": "https://ceresfrance.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ceresfrance.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    ];

    return (
        <main>
            <SEO
                title="Priscilla Owona — Astrologue, Coach Intuitive & Soin Énergétique | Cérès"
                description="Astrologue et coach intuitive, Priscilla Owona vous guide avec Cérès. Horoscope mensuel personnalisé, soins énergétiques et coaching pour retrouver votre clarté."
                schemas={schemas}
            />
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
            <SignatureCTA />
            <Footer />
            <MobileStickyButton />
            <MobileMenu />
        </main>
    );
};

export default Home;

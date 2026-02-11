import React from 'react';
import Hero from './components/Hero';
import Promise from './components/Promise';
import Bio from './components/Bio';
import Offer from './components/Offer';
import Premium from './components/Premium';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileStickyButton from './components/MobileStickyButton';
import MobileMenu from './components/MobileMenu';

import FAQ from './components/FAQ';

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Promise />
            <Bio />
            <Offer />
            <div id="accompagnement">
                <Premium />
            </div>
            <Testimonials />
            <FAQ />
            <Instagram />
            <Footer />
            <MobileStickyButton />
            <MobileMenu />
        </main>
    );
}

export default App;

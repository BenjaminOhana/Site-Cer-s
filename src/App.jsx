import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop'; // We will create this helper
import MentionsLegales from './pages/Legal/MentionsLegales';
import PolitiqueConfidentialite from './pages/Legal/PolitiqueConfidentialite';
import CGV from './pages/Legal/CGV';

import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="/cgv" element={<CGV />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import AdsServices from './pages/AdsServices';
import WebDevelopment from './pages/WebDevelopment';

function App() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-mint">
                <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/seo" element={<SEOServices />} />
                        <Route path="/ads" element={<AdsServices />} />
                        <Route path="/development" element={<WebDevelopment />} />
                    </Routes>
                </main>
                <Footer />
                <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
            </div>
        </Router>
    );
}

export default App;

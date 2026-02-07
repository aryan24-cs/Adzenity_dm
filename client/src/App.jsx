import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import AdsServices from './pages/AdsServices';
import WebDevelopment from './pages/WebDevelopment';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-mint">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/seo" element={<SEOServices />} />
                        <Route path="/ads" element={<AdsServices />} />
                        <Route path="/development" element={<WebDevelopment />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

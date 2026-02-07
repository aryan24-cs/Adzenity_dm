import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'SEO', path: '/seo' },
        { name: 'Google & Meta Ads', path: '/ads' },
        { name: 'Web Development', path: '/development' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:0000-000-0000" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0000-000-0000
                        </a>
                        <a href="mailto:example@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            example@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                            <a key={social} href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                                <span className="sr-only">{social}</span>
                                <div className="w-3 h-3 bg-white rounded-sm"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-accent rounded-sm"></div>
                        </div>
                        <span className="text-xl font-bold text-gray-900 font-display">Digital Marketing</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors relative ${isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="btn-primary text-sm cursor-pointer"
                        >
                            Get A Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <nav className="bg-white border-t px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block font-medium ${isActive(link.path) ? 'text-primary' : 'text-gray-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMobileMenuOpen(false);
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-primary w-full justify-center text-sm cursor-pointer"
                        >
                            Get A Quote
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

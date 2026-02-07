import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
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
        {
            name: 'Home',
            path: '/',
            description: 'Go back to the overview',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'SEO',
            path: '/seo',
            description: 'Boost your search rankings',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            name: 'Google & Meta Ads',
            path: '/ads',
            description: 'Scale with paid advertising',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            )
        },
        {
            name: 'Web Development',
            path: '/development',
            description: 'Modern & fast websites',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        {!logoError ? (
                            <img
                                src={logo}
                                alt="Adzenity Logo"
                                className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <span className="text-2xl font-bold text-primary font-display">ADZENITY</span>
                        )}
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

                    {/* Mobile Menu Button - Minimal & Premium */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden z-50 relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${isMobileMenuOpen ? 'bg-white/10 backdrop-blur-md rotate-90' : 'hover:bg-gray-100'
                            }`}
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col gap-1.5 items-center justify-center w-6 transform transition-transform duration-500">
                            <span className={`block w-full h-0.5 transition-all duration-500 ${isMobileMenuOpen ? 'bg-white rotate-45 translate-y-2 scale-x-110' : 'bg-gray-900'}`}></span>
                            <span className={`block w-full h-0.5 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'bg-gray-900'}`}></span>
                            <span className={`block w-full h-0.5 transition-all duration-500 ${isMobileMenuOpen ? 'bg-white -rotate-45 -translate-y-2 scale-x-110' : 'bg-gray-900'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Darker Green Backdrop Blur */}
                    <div className="absolute inset-0 bg-[#0a1f13]/80 backdrop-blur-xl transition-opacity duration-500" onClick={() => setIsMobileMenuOpen(false)}></div>

                    {/* Menu Content - Centered & Premium Cards */}
                    <div className={`absolute inset-y-0 right-0 w-full flex flex-col items-center justify-between p-6 py-12 transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        <div className="w-full max-w-sm flex flex-col gap-4 mt-8">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`group flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 active:scale-95 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#1a4d2e] transition-colors duration-300">
                                        {link.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white leading-none mb-1">{link.name}</h3>
                                        <p className="text-sm text-white/50">{link.description}</p>
                                    </div>
                                    <div className="text-white/30 group-hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* GET STARTED Button at Bottom */}
                        <div className={`w-full max-w-sm transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${navLinks.length * 100}ms` }}>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex items-center justify-center w-full py-6 bg-white text-[#1a4d2e] font-black text-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 relative overflow-hidden group"
                            >
                                <span className="relative z-10">GET STARTED</span>
                                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

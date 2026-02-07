import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Home = () => {
    const services = [
        {
            title: 'Search Engine Optimization',
            description: 'Dominate search results and drive organic traffic with data-driven SEO strategies that deliver lasting results.',
            link: '/seo',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            features: ['Keyword Research', 'On-Page SEO', 'Link Building'],
        },
        {
            title: 'Google & Meta Advertising',
            description: 'Scale your business with high-performing ad campaigns across Google, Facebook, and Instagram.',
            link: '/ads',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            features: ['Google Ads', 'Meta Ads', 'Retargeting'],
        },
        {
            title: 'Website Development',
            description: 'Beautiful, high-performing websites that convert visitors into customers and grow your business.',
            link: '/development',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            features: ['Custom Design', 'E-commerce', 'CMS'],
        },
    ];

    const stats = [
        { number: '500+', label: 'Successful Projects' },
        { number: '50+', label: 'Expert Team Members' },
        { number: '250+', label: 'Happy Customers' },
        { number: '8+', label: 'Years Experience' },
    ];

    const aboutFeatures = [
        {
            title: 'Data-Driven Strategy',
            description: 'Every decision backed by analytics and real performance data.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: 'Transparent Reporting',
            description: 'Clear, detailed reports so you always know your ROI.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Dedicated Support',
            description: 'Your success is our priority with responsive, expert guidance.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    const faqs = [
        {
            question: 'What digital marketing services do you offer?',
            answer: 'We offer a comprehensive suite of digital marketing services including SEO, Google Ads, Meta Ads, content marketing, social media management, email marketing, and website development.',
        },
        {
            question: 'How long does it take to see results?',
            answer: 'Results timeline varies by service. PPC campaigns can show results within days, while SEO typically takes 3-6 months to see significant organic growth. We provide regular reports to track progress.',
        },
        {
            question: 'Do you work with small businesses?',
            answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. We tailor our strategies and packages to fit your budget and goals.',
        },
        {
            question: 'What makes your agency different?',
            answer: 'We focus on data-driven strategies and transparent communication. Our team has over 16 years of combined experience, and we treat every client\'s business as if it were our own.',
        },
        {
            question: 'How do you measure success?',
            answer: 'We establish clear KPIs at the start of every campaign. Whether it\'s traffic growth, lead generation, ROAS, or conversions, we provide detailed analytics and regular reporting.',
        },
    ];

    const marqueeItems = ['SEO Optimization', 'Content Marketing', 'Social Media Marketing', 'Search Engine Marketing', 'Email Campaigns', 'Brand Strategy'];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-mint py-16 md:py-24 overflow-hidden">
                <div className="absolute top-20 left-10 w-3 h-3 bg-accent rounded-full animate-float"></div>
                <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-10 w-4 h-4 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <AnimateOnScroll animation="fade-in-up">
                                <span className="section-tag mb-6">Elevate Your Brand With Us</span>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                    Empowering Your Success with{' '}
                                    <span className="text-primary">Digital Expertise</span>
                                </h1>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Transform your online presence with our proven digital marketing strategies. We help businesses grow through SEO, paid advertising, and stunning web experiences.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={300}>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#services"
                                        onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="btn-primary cursor-pointer"
                                    >
                                        Explore Services
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                        className="btn-outline cursor-pointer"
                                    >
                                        Get Free Quote
                                    </a>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <AnimateOnScroll animation="fade-in-left" delay={200}>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop" alt="Team collaboration" className="w-full h-48 object-cover" />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop" alt="Business meeting" className="w-full h-40 object-cover" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="rounded-2xl overflow-hidden shadow-lg">
                                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=350&fit=crop" alt="Marketing strategy" className="w-full h-56 object-cover" />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg relative">
                                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop" alt="Office work" className="w-full h-32 object-cover" />
                                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="py-6 bg-white border-y border-gray-100 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span key={idx} className="flex items-center gap-4 mx-8">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            <span className="text-gray-900 font-semibold">{item}</span>
                        </span>
                    ))}
                </div>
            </section>

            {/* Services Section - Clean Card Design */}
            <section className="py-24 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-4">
                                Our Core Services
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Comprehensive digital solutions to accelerate your growth
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                                <Link to={service.link} className="group block h-full">
                                    <div className="bg-white rounded-3xl p-8 h-full border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                                        {/* Background Gradient on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                                {service.icon}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Feature Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {service.features.map((feature, fIdx) => (
                                                    <span key={fIdx} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-primary font-semibold">
                                                Learn More
                                                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white font-display mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/70">{stat.label}</div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section - Enhanced */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <AnimateOnScroll animation="fade-in-right">
                            <div>
                                <span className="section-tag mb-4">About Us</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
                                    We're Your Partners in Digital Growth
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    With over 8 years of experience, we've helped hundreds of businesses transform their online presence. Our data-driven approach ensures every strategy delivers measurable results.
                                </p>

                                {/* Feature Cards */}
                                <div className="space-y-4 mb-8">
                                    {aboutFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/development" className="btn-primary inline-flex">
                                    Learn More About Us
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </AnimateOnScroll>

                        {/* Right - Images */}
                        <AnimateOnScroll animation="fade-in-left" delay={100}>
                            <div className="relative">
                                {/* Main Image */}
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                                        alt="Our Team"
                                        className="w-full h-80 object-cover"
                                    />
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900 font-display">95%</div>
                                            <div className="text-gray-500 text-sm">Client Satisfaction</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">Trusted by hundreds of businesses worldwide</p>
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                Results That Speak
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimateOnScroll animation="fade-in-up" delay={0}>
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Proven Results</h3>
                                <p className="text-gray-600">Average 245% increase in organic traffic for our SEO clients within 6 months.</p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Expert Team</h3>
                                <p className="text-gray-600">Certified professionals in Google Ads, Meta Ads, and advanced SEO techniques.</p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Transparent Process</h3>
                                <p className="text-gray-600">No hidden fees, regular reporting, and direct access to your dedicated team.</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={faqs} />

            {/* Contact Section */}
            <ContactForm />
        </div>
    );
};

export default Home;

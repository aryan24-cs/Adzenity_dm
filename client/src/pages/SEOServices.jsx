import { Link } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

import SEO from '../components/SEO';

const SEOServices = ({ onOpenQuote }) => {
    const features = [
        {
            title: 'Keyword Research',
            description: 'In-depth analysis to find the most valuable keywords that drive qualified traffic to your business.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'On-Page SEO',
            description: 'Optimize your website structure, content, meta tags, and internal linking for maximum visibility.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Technical SEO',
            description: 'Improve site speed, mobile-friendliness, crawlability, and Core Web Vitals for better rankings.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Link Building',
            description: 'Build high-quality, authoritative backlinks to boost your domain authority and trustworthiness.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
        },
        {
            title: 'Content Strategy',
            description: 'Create SEO-optimized, engaging content that ranks high and converts visitors into customers.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
        },
        {
            title: 'Analytics & Reporting',
            description: 'Track your progress with detailed monthly reports, insights, and actionable recommendations.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    const process = [
        { step: '01', title: 'Audit', description: 'Comprehensive analysis of your current SEO standing.' },
        { step: '02', title: 'Strategy', description: 'Custom roadmap tailored to your goals.' },
        { step: '03', title: 'Execute', description: 'Implement optimizations systematically.' },
        { step: '04', title: 'Monitor', description: 'Track and refine for sustainable growth.' },
    ];

    const results = [
        { metric: '+150%', label: 'Organic Traffic', description: 'Average increase for clients' },
        { metric: '#1', label: 'Rankings', description: 'For competitive keywords' },
        { metric: '+120%', label: 'Lead Generation', description: 'From organic search' },
    ];

    const faqs = [
        { question: 'How long does SEO take to show results?', answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing within 6-12 months.' },
        { question: 'What\'s included in your SEO package?', answer: 'Our packages include keyword research, on-page optimization, technical SEO audits, content strategy, link building, and monthly reporting.' },
        { question: 'Do you guarantee first page rankings?', answer: 'No ethical SEO agency can guarantee rankings. We focus on sustainable strategies that improve visibility over time.' },
        { question: 'How do you measure SEO success?', answer: 'We track organic traffic, keyword rankings, domain authority, conversion rates, and ROI from organic search.' },
    ];

    return (
        <div className="overflow-hidden">
            <SEO 
                title="SEO Services - Rank #1 on Google" 
                description="Dominate search results with Adzenity's data-driven SEO services. Keyword research, on-page optimization, and high-quality link building." 
            />
            <ServiceHero
                title="Dominate Search Results"
                subtitle="SEO Services"
                description="Drive sustainable organic traffic and grow your business with data-driven SEO strategies that deliver lasting results."
                stats={[
                    { value: '94%', label: 'Success Rate' },
                    { value: '150+', label: 'Happy Clients' },
                    { value: '5+', label: 'Years Experience' },
                    { value: '24/7', label: 'Expert Support' }
                ]}
                badgeText="Join 100+ businesses"
                onOpenQuote={onOpenQuote}
            />

            {/* Results Banner */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {results.map((result, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                                <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="text-4xl font-bold text-primary font-display mb-1">{result.metric}</div>
                                    <div className="text-gray-900 font-semibold">{result.label}</div>
                                    <div className="text-gray-500 text-sm">{result.description}</div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm variant="compact" title="Get Your Free SEO Audit" subtitle="Discover opportunities to improve your rankings" />

            {/* Features */}
            <section className="py-24 bg-gray-50" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">What We Offer</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                Comprehensive SEO Solutions
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 80}>
                                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimateOnScroll animation="fade-in-right">
                            <div>
                                <span className="section-tag mb-4">Our Process</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
                                    How We Deliver Results
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Our proven methodology ensures consistent, measurable improvements to your search visibility.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <div className="space-y-4">
                            {process.map((item, idx) => (
                                <AnimateOnScroll key={idx} animation="fade-in-left" delay={idx * 100}>
                                    <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                                        <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center text-lg font-bold font-display flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <AnimateOnScroll animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
                            Ready to Dominate Search Results?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Join hundreds of businesses that have transformed their organic presence.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors">
                            Start Your SEO Journey
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            <FAQ faqs={faqs} title="SEO FAQs" subtitle="Common questions about our SEO services" />
            <ContactForm title="Ready to Grow Your Organic Traffic?" subtitle="Let's create an SEO strategy that delivers results" />
        </div>
    );
};

export default SEOServices;

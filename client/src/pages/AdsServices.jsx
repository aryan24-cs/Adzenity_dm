import { Link } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const AdsServices = ({ onOpenQuote }) => {
    const features = [
        {
            title: 'Google Search Ads',
            description: 'Capture high-intent customers actively searching for your products or services.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: 'Google Display Ads',
            description: 'Build brand awareness with visual ads across millions of websites and apps.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Meta (Facebook) Ads',
            description: 'Reach your ideal audience with advanced targeting on the world\'s largest social network.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Instagram Ads',
            description: 'Engage users with visually stunning ads that drive engagement and conversions.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Retargeting Campaigns',
            description: 'Re-engage visitors who didn\'t convert with strategic remarketing ads.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
        {
            title: 'Performance Analytics',
            description: 'Track every click and conversion with comprehensive real-time reporting.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    const platforms = [
        { name: 'Google Ads', features: ['Search', 'Display', 'Shopping', 'YouTube'] },
        { name: 'Meta Ads', features: ['Facebook', 'Instagram', 'Messenger', 'WhatsApp'] },
        { name: 'LinkedIn Ads', features: ['Sponsored Content', 'InMail', 'Lead Gen'] },
    ];

    const results = [
        { metric: '5.0x', label: 'Average ROAS', description: 'Return on ad spend' },
        { metric: '-40%', label: 'Cost per Lead', description: 'Reduction achieved' },
        { metric: '+150%', label: 'Monthly Leads', description: 'Increase for clients' },
    ];

    const faqs = [
        { question: 'What\'s your minimum ad spend requirement?', answer: 'We recommend a minimum of $1,500/month in ad spend to gather enough data for optimization.' },
        { question: 'How do you charge for ad management?', answer: 'We offer flexible pricing: either a flat monthly fee or a percentage of ad spend.' },
        { question: 'Which platform should I advertise on?', answer: 'It depends on your business. Google is great for high-intent search, Meta excels at awareness and targeting.' },
        { question: 'How quickly can I expect results?', answer: 'Paid ads can show results within days. We recommend 2-3 months to fully optimize campaigns.' },
    ];

    return (
        <div className="overflow-hidden">
            <ServiceHero
                title="Scale with Paid Advertising"
                subtitle="Google & Meta Ads"
                description="Get your brand in front of the right audience at the right time with high-performing ad campaigns that deliver real ROI."
                stats={[
                    { value: '5.0x', label: 'Average ROAS' },
                    { value: '100+', label: 'Campaigns' },
                    { value: '6+', label: 'Years Experience' },
                    { value: 'Dedicated', label: 'Manager' }
                ]}
                badgeText="Join 50+ businesses"
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

            <ContactForm variant="compact" title="Get a Free Ads Audit" subtitle="Discover how to maximize your advertising ROI" />

            {/* Features */}
            <section className="py-24 bg-gray-50" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Our Services</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                Paid Advertising Solutions
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

            {/* Platforms */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Platforms</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                Where We Advertise
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {platforms.map((platform, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                                <div className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 h-full">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-display text-center">{platform.name}</h3>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {platform.features.map((feature, fIdx) => (
                                            <span key={fIdx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
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
                            Ready to Scale Your Advertising?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Let's build campaigns that deliver real ROI and sustainable growth.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors">
                            Get Started Today
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            <FAQ faqs={faqs} title="Ads FAQs" subtitle="Common questions about our advertising services" />
            <ContactForm title="Ready to Scale Your Advertising?" subtitle="Let's build a campaign that delivers ROI" />
        </div>
    );
};

export default AdsServices;

import { Link } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const WebDevelopment = ({ onOpenQuote }) => {
    const features = [
        {
            title: 'Custom Web Design',
            description: 'Unique, brand-aligned designs that make your business stand out.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Responsive Development',
            description: 'Websites that look perfect on all devices, from mobile to desktop.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'E-commerce Solutions',
            description: 'Online stores optimized for conversions with seamless checkout.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'CMS Integration',
            description: 'Easy-to-manage content with WordPress, Shopify, or custom CMS.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            title: 'Performance Optimization',
            description: 'Lightning-fast websites with optimized Core Web Vitals.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Ongoing Support',
            description: 'Maintenance, updates, and support to keep your site running smoothly.',
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'Understand your business, goals, and audience.', duration: '1-2 days' },
        { step: '02', title: 'Design', description: 'Create wireframes and visual designs.', duration: '1-2 weeks' },
        { step: '03', title: 'Develop', description: 'Build with clean, optimized code.', duration: '2-4 weeks' },
        { step: '04', title: 'Launch', description: 'Testing, deployment, and support.', duration: '1 week' },
    ];

    const results = [
        { metric: '+80%', label: 'Conversion Rate', description: 'Average improvement' },
        { metric: '<1s', label: 'Load Time', description: 'Blazing fast sites' },
        { metric: '95%', label: 'Client Satisfaction', description: 'Happy customers' },
    ];

    const technologies = ['React', 'Next.js', 'WordPress', 'Shopify', 'Node.js', 'Tailwind CSS'];

    const faqs = [
        { question: 'How long does it take to build a website?', answer: 'A typical website takes 4-8 weeks from start to launch. Complex projects may take longer.' },
        { question: 'Will I be able to update the website myself?', answer: 'Yes! We build on user-friendly CMS platforms that let you easily update content.' },
        { question: 'Do you provide hosting?', answer: 'We can set up reliable hosting and offer managed hosting packages with security and backups.' },
        { question: 'Do your websites work on mobile?', answer: 'Absolutely. All our websites are fully responsive and tested across all devices.' },
    ];

    return (
        <div className="overflow-hidden">
            <ServiceHero
                title="Websites That Convert"
                subtitle="Website Development"
                description="We build beautiful, high-performing websites that help your business grow and convert visitors into customers."
                onOpenQuote={onOpenQuote}
                stats={[
                    { value: '98%', label: 'Launch Rate' },
                    { value: '200+', label: 'Websites' },
                    { value: '8+', label: 'Years Experience' },
                    { value: 'Lifetime', label: 'Support' }
                ]}
                badgeText="Join 150+ businesses"
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

            <ContactForm variant="compact" title="Start Your Project" subtitle="Tell us about your website vision" />

            {/* Features */}
            <section className="py-24 bg-gray-50" id="services">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">What We Build</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                Web Development Services
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
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="fade-in-up">
                            <span className="section-tag justify-center mb-4">Our Process</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
                                How We Build
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, idx) => (
                            <AnimateOnScroll key={idx} animation="fade-in-up" delay={idx * 100}>
                                <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 h-full text-center">
                                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center text-xl font-bold font-display mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        {item.duration}
                                    </span>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-gray-950 overflow-hidden border-y border-gray-900">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <div className="text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Tech Stack</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Modern Tools for Modern Solutions</h2>
                    </div>
                </div>

                <div className="relative group">
                    {/* Gradient Overlays for Fade Effect */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

                    <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
                        {[...technologies, ...technologies].map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-900 px-8 py-5 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group/item">
                                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                <span className="text-lg md:text-xl font-bold text-white tracking-tight">{tech}</span>
                            </div>
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
                            Ready to Build Your Website?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Let's create a stunning digital experience that converts visitors into customers.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors">
                            Start Your Project
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            <FAQ faqs={faqs} title="Web Development FAQs" subtitle="Common questions about building your website" />
            <ContactForm title="Ready to Build Your Website?" subtitle="Let's create something amazing together" />
        </div>
    );
};

export default WebDevelopment;

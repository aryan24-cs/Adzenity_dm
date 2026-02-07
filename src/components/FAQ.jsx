import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const FAQ = ({ faqs, title = 'Frequently Asked Questions', subtitle = 'Everything you need to know about our services.' }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <AnimateOnScroll animation="fade-in-up">
                        <span className="section-tag justify-center mb-4">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 50}>
                            <div
                                className={`group border rounded-2xl transition-all duration-300 ${openIndex === index
                                        ? 'border-primary bg-primary/5'
                                        : 'border-gray-200 hover:border-primary/50 bg-white'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-lg font-bold font-display transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-gray-400'
                                            }`}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-gray-900'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                            ? 'bg-primary text-white rotate-45'
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10'
                                        }`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}>
                                    <div className="overflow-hidden">
                                        <div className="px-8 pb-6 pl-20">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

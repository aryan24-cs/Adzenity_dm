import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const ContactForm = ({ variant = 'full', title = 'Get In Touch', subtitle = "Ready to grow your business? Let's discuss your strategy.", onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: 'seo',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    service: 'seo',
                    message: '',
                });
                if (onSuccess) onSuccess();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                alert('Failed to send message: ' + result.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('An error occurred. Please try again later.');
        }
    };

    const isModal = variant === 'modal';

    return (
        <section id="contact" className={`${isModal ? 'py-0' : 'py-20'} ${variant === 'full' ? 'bg-gray-50' : 'bg-white'}`}>
            <div className={`max-w-7xl mx-auto ${!isModal && 'px-6'}`}>
                <div className={`${isModal ? 'max-w-full' : 'max-w-4xl mx-auto'}`}>
                    <div className={`text-center ${isModal ? 'mb-6' : 'mb-12'}`}>
                        <AnimateOnScroll animation="fade-in-up">
                            {!isModal && <span className="section-tag justify-center mb-4">Contact Us</span>}
                            <h2 className={`${isModal ? 'text-2xl pt-8' : 'text-3xl md:text-4xl'} font-bold text-gray-900 font-display mb-2`}>
                                {title}
                            </h2>
                            <p className={`text-gray-600 ${isModal ? 'text-sm' : 'text-lg'}`}>
                                {subtitle}
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="fade-in-up" delay={100}>
                        <div className={`${isModal ? 'p-6 pb-12 shadow-none border-none' : 'bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100'}`}>
                            {status === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Message Sent!</h3>
                                    <p className="text-gray-600 text-sm">Thank you! We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={`${isModal ? 'space-y-4' : 'space-y-6'}`}>
                                    <div className={`grid ${isModal ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {!isModal && (
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                                <input
                                                    type="url"
                                                    id="website"
                                                    name="website"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                                    placeholder="https://example.com"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="service" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Service</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                                        >
                                            <option value="seo">SEO Optimization</option>
                                            <option value="ads">Google & Meta Ads</option>
                                            <option value="web">Website Development</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={isModal ? 3 : 4}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none text-sm"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

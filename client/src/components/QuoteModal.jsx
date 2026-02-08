import { useEffect } from 'react';
import ContactForm from './ContactForm';

const QuoteModal = ({ isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop with premium deep blur and interactive gradient */}
            <div
                className="absolute inset-0 bg-primary-dark/40 backdrop-blur-[12px] transition-all duration-700 animate-in fade-in"
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-50"></div>
            </div>

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.3)] overflow-hidden transform transition-all animate-in zoom-in-95 slide-in-from-bottom-12 duration-500 ease-out-expo">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -ml-24 -mb-24"></div>

                {/* Close Button - Premium Floating Style */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300 z-50 group border border-gray-100"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="max-h-[90vh] overflow-y-auto custom-scrollbar relative">
                    <div className="p-1"> {/* Tiny padding to prevent clipping of animated elements if any */}
                        <ContactForm
                            variant="modal"
                            title="Start Your Growth Journey"
                            subtitle="Fill out the form below and our experts will craft a custom strategy for your business."
                            onSuccess={() => {
                                setTimeout(onClose, 3000);
                            }}
                        />
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-gray-50 py-4 px-8 border-t border-gray-100 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Trusted by 200+ Brands
                    </div>
                    <div className="w-px h-3 bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        Response in 24h
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;

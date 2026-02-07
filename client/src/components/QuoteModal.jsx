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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop with extreme blur and dark tint */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 slide-in-from-bottom-5 duration-400">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-primary hover:text-white transition-all duration-300 z-10"
                    aria-label="Close modal"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
                    <ContactForm
                        variant="modal"
                        title="Get Your Free Quote"
                        subtitle="We'll get back to you within 24 hours."
                        onSuccess={() => {
                            setTimeout(onClose, 2500);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;

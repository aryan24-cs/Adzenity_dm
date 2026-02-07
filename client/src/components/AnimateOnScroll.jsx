import { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-in-up', delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClasses = () => {
        const base = 'transition-all duration-700 ease-out';

        if (!isVisible) {
            switch (animation) {
                case 'fade-in-up':
                    return `${base} opacity-0 translate-y-8`;
                case 'fade-in-down':
                    return `${base} opacity-0 -translate-y-8`;
                case 'fade-in-left':
                    return `${base} opacity-0 translate-x-8`;
                case 'fade-in-right':
                    return `${base} opacity-0 -translate-x-8`;
                case 'scale-in':
                    return `${base} opacity-0 scale-95`;
                case 'fade-in':
                default:
                    return `${base} opacity-0`;
            }
        }

        return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };

    return (
        <div
            ref={ref}
            className={`${getAnimationClasses()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;

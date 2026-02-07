import AnimateOnScroll from './AnimateOnScroll';

const ServiceHero = ({
    title,
    subtitle,
    description,
    variant = 'default',
    stats = [
        { value: '98%', label: 'Success Rate' },
        { value: '350+', label: 'Happy Clients' },
        { value: '16+', label: 'Years Experience' },
        { value: '24/7', label: 'Support' }
    ],
    badgeText = 'Join 200+ businesses',
    onOpenQuote
}) => {
    return (
        <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
            {/* Unique Background Design */}
            <div className="absolute inset-0">
                {/* Large decorative shapes */}
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full"></div>
                <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] border-[80px] border-accent/5 rounded-full"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Diagonal lines */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 60px)`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-16 right-[10%] w-20 h-20 border-2 border-accent/30 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute bottom-24 right-[20%] w-12 h-12 bg-accent/20 rounded-xl -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-32 left-[15%] w-8 h-8 bg-accent/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-16 left-[10%] w-16 h-16 border-2 border-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

            {/* Glowing orbs */}
            <div className="absolute top-1/2 right-[5%] w-64 h-64 bg-accent/20 rounded-full blur-[100px]"></div>
            <div className="absolute top-0 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-[80px]"></div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <AnimateOnScroll animation="fade-in-up">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                                <span className="text-accent font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                                {title}
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                                {description}
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={300}>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={onOpenQuote}
                                    className="group bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold transition-all hover:bg-white hover:shadow-lg hover:shadow-accent/20 flex items-center gap-2 cursor-pointer"
                                >
                                    Get a Quote
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                                <a href="#services" className="group bg-white/5 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10 border border-white/20 backdrop-blur-sm flex items-center gap-2">
                                    Explore Services
                                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Side - Decorative Card Stack */}
                    <AnimateOnScroll animation="fade-in-left" delay={200}>
                        <div className="hidden lg:block relative">
                            {/* Background Cards */}
                            <div className="absolute top-8 left-8 w-full h-full bg-white/5 rounded-3xl border border-white/10"></div>
                            <div className="absolute top-4 left-4 w-full h-full bg-white/5 rounded-3xl border border-white/10"></div>

                            {/* Main Card */}
                            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white/10 rounded-2xl p-6 text-center">
                                            <div className="text-3xl font-bold text-accent font-display mb-1">{stat.value}</div>
                                            <div className="text-white/60 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Badge */}
                                <div className="mt-6 flex items-center justify-center gap-3 text-white/80">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 bg-accent/80 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold text-primary-dark">A</div>
                                        <div className="w-8 h-8 bg-primary-dark rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">B</div>
                                        <div className="w-8 h-8 bg-white/30 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">+</div>
                                    </div>
                                    <span className="text-sm">{badgeText}</span>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-accent text-primary-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                ⭐ Top Rated
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" fill="white" fillOpacity="0.05" />
                    <path d="M0 100V80C240 40 480 20 720 40C960 60 1200 100 1440 80V100H0Z" fill="#f0f7f4" />
                </svg>
            </div>
        </section>
    );
};

export default ServiceHero;

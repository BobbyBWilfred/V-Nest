import React from 'react';
const useOnScreen = (options) => {
    const ref = React.useRef(null);
    const [isOnScreen, setIsOnScreen] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isOnScreen];
};

const AnimatedSection = ({ children, id }) => (
    <section id={id} className="py-16 sm:py-24">
        {children}
    </section>
);


const InnovationNexus = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const [ref, isOnScreen] = useOnScreen({ threshold: 0.5 });


    const initialSlides = React.useMemo(() => [
        { type: "welcome", title: "Welcome to V-NEST", tagline: "Your Launchpad for Innovation" },
        { type: "about", title: "About V-NEST", tagline: "Empowering visionary founders to build tomorrow's unicorns." }
    ], []);

    const startups = React.useMemo(() => [
        { name: "Quinproc", sector: "AI/Automation", tagline: "Revolutionizing industrial automation with AI.", quote: "V-NEST gave us the roadmap to turn our dreams into a market reality." },
        { name: "Jivan", sector: "HealthTech", tagline: "Affordable diagnostics for all.", quote: "Their unwavering support was critical for our success." },
        { name: "Mechatronix", sector: "Robotics", tagline: "Intelligent robotics for complex tasks.", quote: "The technical mentorship at V-NEST was second to none." }
    ], []);

    const allSlides = React.useMemo(() => [
        ...initialSlides,
        ...startups.map(s => ({...s, type: 'startup' }))
    ], [initialSlides, startups]);

    React.useEffect(() => {
        if (!isPaused && isOnScreen) {
            const timer = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % allSlides.length);
            }, 3000); 
            return () => clearInterval(timer);
        }
    }, [isPaused, isOnScreen, allSlides.length]);

    const currentSlide = allSlides[currentIndex];

    return (
        <AnimatedSection id="innovation-nexus">
            
            <div className="tv-area-wrapper">
               
                <div ref={ref} className="tv-screen-container">
                    
                    <div className="tv-screen-and-controls">
                        
                        <div className="tv-screen">
                            <div className="screen-content">
                                {currentSlide && (
                                    <div key={currentSlide.title || currentSlide.name} className="p-8 md:p-12 text-center flex flex-col justify-center items-center h-full animate-fade-in-fast">
                                        {currentSlide.type === 'startup' ? (
                                            <>
                                                <p className="font-bold text-sm text-purple-400 tracking-widest uppercase">{currentSlide.sector}</p>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">{currentSlide.name}</h3>
                                                <p className="text-lg text-purple-200/90">{currentSlide.tagline}</p>
                                                <p className="mt-4 italic text-purple-300/70 text-sm">"{currentSlide.quote}"</p>
                                            </>
                                        ) : (
                                            <>
                                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentSlide.title}</h2>
                                                <p className="text-lg md:text-xl text-purple-200/90 max-w-3xl mx-auto">{currentSlide.tagline}</p>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="tv-controls-bar">
                            <div className="tv-controls">
                                
                                <button onClick={() => setIsPaused(!isPaused)} className="tv-pause-button">
                                    {isPaused ? '▶ Play' : '❚❚ Pause'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tv-stand-container">
                    <div className="tv-stand-pedestal"></div>
                    <div className="tv-stand-base"></div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default InnovationNexus;

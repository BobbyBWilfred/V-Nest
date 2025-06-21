import React from 'react';
import { ChevronUpIcon } from './Icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className={`fixed bottom-8 right-8 bg-purple-600/50 backdrop-blur-sm border border-purple-500/50 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 transform z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <ChevronUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTop;

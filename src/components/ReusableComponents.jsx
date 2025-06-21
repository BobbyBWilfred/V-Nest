import React from 'react';
import { XIcon } from './Icons'; 

export const useOnScreen = (options) => {
    const ref = React.useRef(null);
    const [isOnScreen, setIsOnScreen] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsOnScreen(true);
            }
        }, options);
        
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => { 
            if (currentRef) observer.unobserve(currentRef); 
        };
    }, [ref, options]);

    return [ref, isOnScreen];
};

export const AnimatedSection = ({ children, className = '', id }) => {
    const [ref, isOnScreen] = useOnScreen({ threshold: 0.1 }); 

    return (
        <section
            id={id}
            ref={ref}
            className={`py-28 md:py-36 relative overflow-hidden ${className} transition-all duration-1000 ease-in-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </section>
    );
};

export const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300">
        {children}
    </h2>
);


export const SectionSubtitle = ({ children }) => (
    <p className="mt-4 text-center text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
        {children}
    </p>
);

export const Modal = ({ isOpen, onClose, children }) => {
    React.useEffect(() => {
        const handleKeyDown = e => { if (e.key === 'Escape') onClose(); };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { 
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[100] animate-fade-in-fast" onClick={onClose}>
            <div className="bg-gradient-to-br from-purple-950 to-black border border-purple-700 rounded-2xl shadow-2xl w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar p-8 md:p-12 relative animate-modal-pop" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors z-10 p-2 rounded-full bg-white/10 hover:bg-purple-700">
                    <XIcon className="w-6 h-6" />
                </button>
                {children}
            </div>
        </div>
    );
};

import React from 'react';
import { AnimatedSection } from './ReusableComponents';

const AboutUs = () => {
    return (
        <AnimatedSection id="about" className="bg-black">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="about-text">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-purple-400">V-NEST</span></h2>
                        <p className="text-purple-200 mb-4 leading-relaxed">
                            V-NEST is not just an incubator; it's an ecosystem designed to forge the next generation of tech leaders. Born from a vision to bridge the gap between groundbreaking ideas and market success, we provide the essential resources, mentorship, and network to propel startups from concept to scale.
                        </p>
                        <p className="text-purple-200 mb-6 leading-relaxed">
                            Our mission is to identify and nurture disruptive technologies that have the potential to create a global impact. We believe in founders who are relentless, passionate, and ready to challenge the status quo. At V-NEST, we invest in your vision and commit to your journey. <span className="text-purple-300 italic font-medium">Join us in shaping the future, one innovation at a time, and let's turn your audacious ideas into market-defining realities!</span>
                        </p>
                         <a href="#apply" className="cta-button"><span>Start Your Journey</span></a>
                    </div>
                    <div className="about-images relative h-96">
                        <img 
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            alt="Team Collaboration" 
                            className="absolute w-[70%] rounded-xl shadow-lg shadow-purple-700/50 top-0 left-0 transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e1b4b/c084fc?text=Collaboration'; }}
                        />
                         <img 
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                            alt="Innovation Meeting" 
                            className="absolute w-[55%] rounded-xl shadow-lg shadow-purple-700/50 bottom-0 right-0 transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/1e1b4b/c084fc?text=Innovation'; }}
                        />
                         <img 
                            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop" 
                            alt="Pitch Session" 
                            className="absolute w-[40%] rounded-xl shadow-lg shadow-purple-700/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-95 transition-transform duration-300 hover:scale-110 z-10"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x200/1e1b4b/c084fc?text=Pitch'; }}
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
};

export default AboutUs;

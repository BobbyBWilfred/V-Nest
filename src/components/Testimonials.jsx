import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle } from './ReusableComponents';
import { QuoteIcon } from './Icons';

const Testimonials = () => {
    const feedbacks = [
        { quote: "V-NEST was the catalyst for our success. The mentorship was invaluable, and the network they opened up for us led directly to our seed round. They're more than investors; they're partners.", name: "A. Kumar", startup: "Founder, Quinproc", img: "https://placehold.co/100x100/111111/FFFFFF?text=AK" },
        { quote: "The structured guidance and access to state-of-the-art resources at V-NEST allowed us to iterate faster than we ever thought possible. We went from a prototype to a market-ready product in just six months.", name: "Dr. L. Rao", startup: "Founder, BioSynth", img: "https://placehold.co/100x100/111111/FFFFFF?text=LR" },
        { quote: "The community is its biggest strength. Being surrounded by other passionate founders creates an environment of motivation and shared learning that is simply priceless.", name: "V. Mehta", startup: "Founder, EduVerse", img: "https://placehold.co/100x100/111111/FFFFFF?text=VM" },
        { quote: "The legal and financial workshops were game-changers for us. V-NEST provides a holistic support system that goes far beyond just tech development.", name: "P. Jain", startup: "Co-Founder, Finatra", img: "https://placehold.co/100x100/111111/FFFFFF?text=PJ" },
        { quote: "Their deep industry connections helped us secure crucial pilot projects that validated our technology and business model. An incredible launchpad.", name: "F. Khan", startup: "Founder, CarbonZero", img: "https://placehold.co/100x100/111111/FFFFFF?text=FK" },
    ];
    
    const doubledFeedbacks = [...feedbacks, ...feedbacks];

    return (
        <AnimatedSection id="testimonials" className="bg-purple-950">
            <div className="container mx-auto">
                <SectionTitle>From Our Portfolio Founders</SectionTitle>
                <SectionSubtitle>Hear directly from the entrepreneurs we've supported.</SectionSubtitle>
                <div className="mt-20 testimonial-carousel-container relative w-full overflow-hidden">
                    <div className="testimonial-carousel flex">
                        {doubledFeedbacks.map((fb, i) => (
                            <div key={i} className="feedback-card flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] mx-4 bg-black p-8 rounded-xl border border-purple-800 flex flex-col">
                                <QuoteIcon className="w-8 h-8 text-purple-500 mb-4" />
                                <p className="text-purple-200 mb-6 flex-grow">"{fb.quote}"</p>
                                <div className="flex items-center mt-auto pt-6 border-t border-purple-900/50">
                                    <img src={fb.img} alt={fb.name} className="w-12 h-12 rounded-full mr-4 bg-gray-800" />
                                    <div>
                                        <p className="font-bold text-white">{fb.name}</p>
                                        <p className="text-sm text-purple-400">{fb.startup}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-950 to-transparent pointer-events-none"></div>
                     <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-950 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </AnimatedSection>
    )
};

export default Testimonials;

import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle } from './ReusableComponents';

const HowToApply = () => {
    const steps = [
        { title: "Submit Application", description: "Fill out our online form with your detailed business plan and team information.", icon: "📝" },
        { title: "Initial Screening", description: "Our expert panel reviews your submission for innovation, market potential, and team strength.", icon: "🔍" },
        { title: "Pitch Day Invitation", description: "Shortlisted teams are invited to present their vision to our convenors and mentors.", icon: "🎤" },
        { title: "Due Diligence", description: "We conduct a thorough review of your business model, financials, and legal structure.", icon: "⚖️" },
        { title: "Onboarding & Funding", description: "Welcome to V-NEST! Receive seed funding, resources, and begin your incubation journey.", icon: "🚀" }
    ];

    return (
        <AnimatedSection id="apply" className="bg-black">
            <div className="container mx-auto px-6">
                <SectionTitle>Your Journey to V-NEST</SectionTitle>
                <SectionSubtitle>A clear and transparent process to join our ecosystem of innovators.</SectionSubtitle>
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-900/50" aria-hidden="true"></div>
                        {steps.map((step, index) => (
                             <div key={index} className="relative flex items-center mb-12 group">
                                <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className="w-11/12 md:w-5/12">
                                        <div className={`p-6 rounded-lg shadow-lg transition-all duration-300 apply-card ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                           <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                           <p className="text-purple-200 mt-2">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-600 border-4 border-purple-900 rounded-full flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    {step.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-8">
                        <a href="#" className="cta-button-large">Begin Your Application</a>
                     </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default HowToApply;

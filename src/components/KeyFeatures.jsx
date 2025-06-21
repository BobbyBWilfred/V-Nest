import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle } from './ReusableComponents';

const KeyFeatures = () => {
    const features = [
        { title: "Strategic Capital", description: "Access seed funding and our robust network of VCs and angel investors to fuel your growth.", icon: "💰" },
        { title: "Unrivaled Mentorship", description: "Receive personalized guidance from unicorn founders, industry titans, and domain experts.", icon: "🧑‍🏫" },
        { title: "Global Network", description: "Tap into our extensive connections for corporate partnerships, market access, and talent.", icon: "🌐" },
        { title: "Founder-First Approach", description: "We provide flexible, founder-friendly terms and a support system that prioritizes your vision.", icon: "🤝" }
    ];

    return (
        <AnimatedSection id="features" className="bg-gradient-to-br from-black to-purple-950">
            <div className="container mx-auto px-6">
                <SectionTitle>Core Pillars of V-NEST</SectionTitle>
                <SectionSubtitle>We provide the foundational support that turns visionary ideas into market-leading companies.</SectionSubtitle>
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card p-8 text-center bg-purple-950 rounded-2xl border border-purple-700 transition-all duration-300 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-900/30 hover:-translate-y-2">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-purple-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    )
};

export default KeyFeatures;

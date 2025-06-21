import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle } from './ReusableComponents';
import { ChevronDownIcon } from './Icons';

const FAQAccordionItem = ({ faq }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="bg-purple-950 rounded-xl border border-purple-700 shadow-lg overflow-hidden transition-all duration-300 hover:border-purple-400">
            <button
                className="w-full text-left p-6 flex items-center justify-between text-white text-lg md:text-xl font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{faq.q}</span>
                <ChevronDownIcon className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                 <div className="px-6 pb-6 pt-0">
                    <p className="text-purple-200 leading-relaxed text-base border-t border-purple-800 pt-4">
                        {faq.a}
                    </p>
                 </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = React.useState('General');
    const faqsByCategory = React.useMemo(() => ({
        'General': [
            { q: "Who can apply to V-NEST?", a: "V-NEST supports innovative ideas from students, faculty, alumni, and external entrepreneurs. The primary requirement is a strong, tech-driven idea with a dedicated team ready to commit to the incubation process." },
            { q: "Is physical presence in Chennai required?", a: "We operate a hybrid model. While many activities can be done remotely, we require teams to be present for key workshops, milestone reviews, and networking events to maximize the benefits of the ecosystem." },
            { q: "What is the duration of the incubation program?", a: "The core incubation program typically runs for 6 to 9 months. This is followed by ongoing support and access to our network, with potential for follow-on funding based on progress and scalability." },
        ],
        'Funding & Equity': [
            { q: "What is the initial funding amount?", a: "We provide initial seed funding of up to ₹2 Lakhs upon selection. This capital is intended to cover initial operational costs and prototype development." },
            { q: "What equity stake does V-NEST take?", a: "Our terms are founder-friendly. We take a flexible equity stake, typically between 2-4%, which is finalized during the due diligence phase. Our model is designed to support, not dilute, early-stage founders." },
        ],
        'Mentorship & Support': [
            { q: "What kind of mentorship can we expect?", a: "Our mentorship is comprehensive and hands-on. You get dedicated mentors for product strategy, GTM, financial modeling, and fundraising. This is complemented by a broader network of industry leaders." },
            { q: "Do you provide legal and IP support?", a: "Yes, through our network of partners, we provide access to expert legal counsel for company incorporation, intellectual property (IP) strategy, patent filing, and other critical legal matters." },
        ],
    }), []);

    const categories = Object.keys(faqsByCategory);

    return(
        <AnimatedSection id="faq" className="bg-gradient-to-br from-black to-purple-950">
            <div className="container mx-auto px-6">
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <SectionSubtitle>Got questions? We've got answers. Explore our most common inquiries.</SectionSubtitle>
                
                <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="flex md:flex-col md:space-y-4 space-x-2 md:space-x-0 overflow-x-auto pb-2 md:pb-0 flex-shrink-0 md:w-1/4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`flex-shrink-0 w-full text-left p-4 md:p-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                                    ${activeCategory === category 
                                        ? 'bg-purple-700 text-white shadow-lg border border-purple-500' 
                                        : 'bg-black text-purple-200 hover:bg-purple-900/50 hover:text-white border border-transparent'}`
                                }
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex-grow md:w-3/4">
                        <div className="space-y-6">
                            {faqsByCategory[activeCategory].map((faq, index) => (
                                <FAQAccordionItem key={`${activeCategory}-${index}`} faq={faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default FAQ;

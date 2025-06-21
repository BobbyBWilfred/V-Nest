import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle } from './ReusableComponents';
import { ArrowRightIcon } from './Icons';

const Events = () => {
    const events = [
        { title: "Quantum Leap Demo Day", date: "Aug 30, 2025", type: "Demo Day", venue: "Virtual Event", description: "Our flagship event where our graduating cohort pitches to a curated audience of investors, partners, and press." },
        { title: "Ignite AI Hackathon", date: "Sep 15-17, 2025", type: "Hackathon", venue: "V-NEST Campus", description: "A 48-hour marathon of innovation. Join developers and entrepreneurs to build the next big thing in AI." },
        { title: "Founder's Circle: Scaling to $1M", date: "Oct 05, 2025", type: "Workshop", venue: "Exclusive Invite Only", description: "An interactive workshop with unicorn founders on the strategies and challenges of scaling your first million in revenue." }
    ];
    return (
        <AnimatedSection id="events" className="bg-black">
            <div className="container mx-auto px-6">
                <SectionTitle>Upcoming Events</SectionTitle>
                <SectionSubtitle>Connect, learn, and grow with the V-NEST community.</SectionSubtitle>
                <div className="mt-20 max-w-4xl mx-auto space-y-8">
                    {events.map((event, i) => (
                        <div key={i} className="event-card group">
                            <div className="date-box">
                                <span className="text-4xl font-bold block">{event.date.split(' ')[1].replace(',', '')}</span>
                                <span className="text-sm uppercase block">{event.date.split(' ')[0]}</span>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className={`inline-block px-3 py-1 text-xs rounded-full mb-3 bg-purple-900/50 text-purple-300 font-semibold`}>{event.type}</p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{event.title}</h3>
                                <p className="text-purple-300 text-sm mb-3">{event.venue}</p>
                                <p className="text-purple-400 text-sm">{event.description}</p>
                            </div>
                            <div className="p-6 flex items-center justify-center">
                                <a href="#" className="cta-button-small group"><span>Register</span><ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Events;

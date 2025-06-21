import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle, Modal, useOnScreen } from './ReusableComponents';
import { ArrowRightIcon, startupLogos } from './Icons';

const PortfolioCard = ({ startup, onClick }) => {
    const cardRef = React.useRef(null);

    const onMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const LogoComponent = startupLogos[startup.name.replace(" ", "")];

    return (
        <div
            ref={cardRef}
            onClick={() => onClick(startup)}
            onMouseMove={onMouseMove}
            className="portfolio-card group bg-purple-950 rounded-2xl p-6 text-center cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/50"
        >
            <div className="w-24 h-24 mx-auto mb-4 p-3 bg-black rounded-xl transition-transform duration-300 group-hover:scale-110">
                {LogoComponent ? <LogoComponent /> : <div className="w-full h-full bg-purple-900 rounded-md"></div>}
            </div>
            <h3 className="text-xl font-bold text-white">{startup.name}</h3>
            <p className="text-purple-400 text-sm">{startup.sector}</p>
        </div>
    );
};

const Portfolio = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedStartup, setSelectedStartup] = React.useState(null);

    const startups = [
        { name: "Quinproc", sector: "AI/Automation", tagline: "Revolutionizing industrial automation with AI.", funding: "2 Cr", founders: "A. Kumar, B. Singh", mission: "To build the future of autonomous manufacturing plants using computer vision and reinforcement learning, eliminating human error and maximizing efficiency.", website: "https://www.quinproc.com" },
        { name: "Jivan", sector: "HealthTech", tagline: "Affordable diagnostics for all.", funding: "1.5 Cr", founders: "C. Reddy, D. Patel", mission: "To democratize healthcare by creating low-cost, IoT-enabled diagnostic tools that bring critical medical testing to underserved and remote populations.", website: "https://www.jivan.com" },
        { name: "Mechatronix", sector: "Robotics", tagline: "Intelligent robotics for complex tasks.", funding: "2.5 Cr", founders: "E. Verma, F. Gupta", mission: "To solve critical labor shortages in logistics and agriculture through advanced, autonomous robotic systems that work alongside humans.", website: "https://www.mechatronix.com" },
        { name: "EMotion", sector: "EV Tech", tagline: "Next-gen battery technology.", funding: "5 Cr", founders: "W. Krishnan, Y. Chawla", mission: "To accelerate the adoption of electric vehicles by developing ultra-fast charging, long-lifecycle battery packs with superior energy density.", website: "https://www.emotion.com" },
        { name: "AetherLink", sector: "DeFi", tagline: "Decentralized identity verification.", funding: "3 Cr", founders: "S. Iyer, M. Chen", mission: "To build a trustless and secure digital identity protocol on the blockchain, empowering users to own and control their personal data.", website: "https://www.aetherlink.com" },
        { name: "BioSynth", sector: "BioTech", tagline: "Synthesizing novel proteins.", funding: "4 Cr", founders: "Dr. L. Rao", mission: "Using generative AI to design and synthesize novel proteins for therapeutic and industrial applications, accelerating drug discovery and material science.", website: "https://www.biosynth.com" },
        { name: "Finatra", sector: "FinTech", tagline: "AI-powered wealth management.", funding: "2 Cr", founders: "P. Jain, R. Shah", mission: "Making sophisticated, data-driven investment strategies accessible to everyone through an intuitive and automated wealth management platform.", website: "https://www.finatra.com" },
        { name: "AgroBot", sector: "AgriTech", tagline: "Precision farming with robotics.", funding: "3.5 Cr", founders: "K. Reddy", mission: "To increase crop yields and reduce environmental impact through autonomous drones and ground robots for monitoring, spraying, and harvesting.", website: "https://www.agrobot.com" },
        { name: "EduVerse", sector: "EdTech", tagline: "Immersive learning in the metaverse.", funding: "1.8 Cr", founders: "V. Mehta", mission: "To create a collaborative and engaging educational metaverse, offering virtual labs, historical simulations, and language immersion experiences.", website: "https://www.eduverse.com" },
        { name: "CarbonZero", sector: "ClimateTech", tagline: "Direct air carbon capture.", funding: "6 Cr", founders: "F. Khan, G. Ali", mission: "Developing and deploying modular, highly efficient direct air capture technology to combat climate change by removing CO2 from the atmosphere at scale.", website: "https://www.carbonzero.com" },
    ];

    const openModal = (startup) => {
        setSelectedStartup(startup);
        setModalOpen(true);
    };

    return (
        <>
            <AnimatedSection id="portfolio" className="bg-purple-950">
                <div className="container mx-auto px-6">
                    <SectionTitle>Our Portfolio Companies</SectionTitle>
                    <SectionSubtitle>A curated selection of the ambitious companies we are proud to support.</SectionSubtitle>
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {startups.map((startup, i) => (
                            <PortfolioCard key={i} startup={startup} onClick={openModal} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {selectedStartup && (
                    <div>
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 p-3 bg-black rounded-xl border border-purple-900/50">
                                {startupLogos[selectedStartup.name.replace(" ", "")]()}
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white">{selectedStartup.name}</h2>
                                <p className="text-purple-400 text-lg">{selectedStartup.tagline}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 text-center bg-black p-6 rounded-xl mb-8 border border-purple-900/50">
                            <div><p className="text-sm text-purple-300">Sector</p><p className="text-lg font-semibold text-white">{selectedStartup.sector}</p></div>
                            <div><p className="text-sm text-purple-300">Founders</p><p className="text-lg font-semibold text-white">{selectedStartup.founders}</p></div>
                            <div><p className="text-sm text-purple-300">Funding</p><p className="text-lg font-semibold text-white">{selectedStartup.funding}</p></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mission</h3>
                            <p className="text-purple-200 leading-relaxed">{selectedStartup.mission}</p>
                             {selectedStartup.website && (
                                <a href={selectedStartup.website} target="_blank" rel="noopener noreferrer" className="cta-button mt-6 inline-flex items-center">
                                    <span>Visit Website</span>
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Portfolio;

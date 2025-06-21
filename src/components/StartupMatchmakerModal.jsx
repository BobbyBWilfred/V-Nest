import React from 'react';
import { Modal } from './ReusableComponents';
import { startupLogos } from './Icons';

const StartupMatchmakerModal = ({ isOpen, onClose }) => {
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    const [matchedStartups, setMatchedStartups] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);

    const allStartups = React.useMemo(() => [
        { name: "Quinproc", categories: ["AI", "Automation", "Robotics", "Deep Tech"], description: "AI-driven industrial automation for efficiency.", logo: startupLogos.Quinproc },
        { name: "Jivan", categories: ["HealthTech", "IoT", "Social Impact"], description: "Affordable, accessible diagnostics via IoT devices.", logo: startupLogos.Jivan },
        { name: "Mechatronix", categories: ["Robotics", "Logistics", "Agriculture", "Deep Tech"], description: "Autonomous robotic solutions for labor-intensive sectors.", logo: startupLogos.Mechatronix },
        { name: "EMotion", categories: ["EV Tech", "Clean Energy", "Hardware"], description: "Revolutionary battery tech for electric vehicles.", logo: startupLogos.EMotion },
        { name: "AetherLink", categories: ["DeFi", "Blockchain", "FinTech"], description: "Decentralized identity verification.", logo: startupLogos.AetherLink },
        { name: "BioSynth", categories: ["BioTech", "AI", "Healthcare"], description: "AI-powered protein design for therapeutics.", logo: startupLogos.BioSynth },
    ], []);

    const allInterests = ["AI", "Robotics", "HealthTech", "IoT", "FinTech", "DeFi", "EdTech", "ClimateTech", "Deep Tech", "Social Impact"];

    const handleInterestChange = (interest) => {
        setSelectedInterests(prev => 
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        );
    };

    const findMatches = () => {
        if (selectedInterests.length === 0) {
            setMatchedStartups([]);
        } else {
            const matches = allStartups.filter(startup => 
                selectedInterests.some(interest => startup.categories.includes(interest))
            );
            setMatchedStartups(matches);
        }
        setShowResults(true);
    };

    const resetMatchmaker = () => {
        setSelectedInterests([]);
        setMatchedStartups([]);
        setShowResults(false);
    };

    React.useEffect(() => {
        if (!isOpen) {
            setTimeout(resetMatchmaker, 300); 
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-3xl font-bold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-white">
                V-NEST Startup Matchmaker
            </h2>
            <p className="text-purple-200 mb-8 text-center max-w-2xl mx-auto">
                Discover your perfect startup match within our ecosystem. Select your areas of interest to see which of our companies align with your passion.
            </p>
            
            {!showResults ? (
                <>
                    <div className="mb-8 p-6 bg-black/60 rounded-xl border border-purple-800 shadow-inner">
                        <h3 className="text-xl font-bold text-white mb-4">Select Your Areas of Interest:</h3>
                        <div className="flex flex-wrap gap-3">
                            {allInterests.map(interest => (
                                <button
                                    key={interest}
                                    onClick={() => handleInterestChange(interest)}
                                    className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium
                                        ${selectedInterests.includes(interest) 
                                            ? 'bg-purple-600 border-purple-600 text-white shadow-md' 
                                            : 'bg-transparent border-purple-800 text-purple-300 hover:bg-purple-900/30 hover:border-purple-700'}`
                                    }
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={findMatches} 
                        disabled={selectedInterests.length === 0}
                        className="cta-button-large w-full disabled:bg-gray-600 disabled:shadow-none disabled:cursor-not-allowed">
                        Find My Matches
                    </button>
                </>
            ) : (
                <div className="animate-fade-in-fast">
                    <div className="bg-black p-6 rounded-xl border border-purple-700 shadow-inner max-h-80 overflow-y-auto custom-scrollbar">
                        <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-purple-900/50 pb-3">Your Matches:</h3>
                        {matchedStartups.length > 0 ? (
                            <div className="space-y-4 pt-2">
                                {matchedStartups.map(startup => (
                                    <div key={startup.name} className="bg-purple-950 p-4 rounded-lg border border-purple-900/50 flex items-center gap-4 group hover:border-purple-500 transition-colors">
                                        {startup.logo && <div className="w-12 h-12 flex-shrink-0 p-1 bg-black rounded-lg border border-purple-800 flex items-center justify-center">{startup.logo()}</div>}
                                        <div>
                                            <p className="font-semibold text-white text-lg">{startup.name}</p>
                                            <p className="text-purple-300 text-sm">{startup.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-purple-300 text-center py-4">No startups match your selected interests. Try different combinations!</p>
                        )}
                    </div>
                     <button onClick={resetMatchmaker} className="cta-button-small mt-6 mx-auto block">Start New Search</button>
                </div>
            )}
        </Modal>
    );
};

export default StartupMatchmakerModal;

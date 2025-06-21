import React from 'react';
import { AnimatedSection, SectionTitle, SectionSubtitle, Modal } from './ReusableComponents';

const Convenors = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedConvenor, setSelectedConvenor] = React.useState(null);

    const convenorsData = [
        { name: "Dr. Anjali Sharma", title: "Chief Mentor & Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop", bio: "With over 20 years of experience in scaling tech ventures, Dr. Sharma provides invaluable strategic guidance. A former CTO at a unicorn startup, she specializes in product-market fit and long-term technology roadmapping." },
        { name: "Rohan Gupta", title: "Lead, Incubation Operations", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop", bio: "Rohan is the organizational backbone of V-NEST. His expertise in operational efficiency and program management ensures that our startups have a seamless journey, from onboarding to graduation." },
        { name: "Priya Singh", title: "Investor Relations & Funding", img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1888&auto=format&fit=crop", bio: "Priya connects our portfolio companies with a global network of investors. Her background in venture capital and her keen eye for financial strategy have helped our startups raise millions in follow-on funding." },
    ];

    const openModal = (convenor) => {
        setSelectedConvenor(convenor);
        setModalOpen(true);
    };

    return (
        <>
            <AnimatedSection id="convenors" className="bg-black">
                <div className="container mx-auto px-6">
                    <SectionTitle>Meet Our Founders</SectionTitle>
                    <SectionSubtitle>The passionate leaders guiding our vision and supporting our founders.</SectionSubtitle>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {convenorsData.map((convenor, i) => (
                            <div key={i} onClick={() => openModal(convenor)} className="convenor-card text-center group bg-purple-950 p-6 rounded-2xl border border-purple-800 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 cursor-pointer">
                                 <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-purple-800 group-hover:border-purple-500 transition-colors">
                                    <img src={convenor.img} alt={convenor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x400/000000/FFFFFF?text=${convenor.name.split(' ')[0][0]}`; }} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{convenor.name}</h3>
                                <p className="text-purple-400">{convenor.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {selectedConvenor && (
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img src={selectedConvenor.img} alt={selectedConvenor.name} className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover flex-shrink-0 border-4 border-purple-500" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x400/000000/FFFFFF?text=${selectedConvenor.name.split(' ')[0][0]}`; }}/>
                        <div>
                             <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedConvenor.name}</h2>
                            <p className="text-purple-400 text-lg mb-4">{selectedConvenor.title}</p>
                            <p className="text-purple-200 leading-relaxed">{selectedConvenor.bio}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Convenors;

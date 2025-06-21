import React from 'react';
import { MenuIcon, XIcon, ArrowRightIcon, VNestLogo } from './Icons';

import StartupMatchmakerModal from './StartupMatchmakerModal';
import StartupReadinessQuiz from './StartupReadinessQuiz';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [isMatchmakerModalOpen, setIsMatchmakerModalOpen] = React.useState(false);
    const [isQuizModalOpen, setIsQuizModalOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Pillars', href: '#features' },
        { name: 'Nexus', href: '#nexus' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Events', href: '#events' },
        { name: 'FAQ', href: '#faq' },
    ];
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled || isOpen ? 'bg-black/70 backdrop-blur-lg border-b border-purple-900/30' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-3 group">
                         <VNestLogo className="w-8 h-8 transition-transform duration-300 group-hover:rotate-[360deg]"/>
                        <span className="text-white text-xl font-bold tracking-wider">V-NEST</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => <a href={link.href} key={link.name} className="nav-link text-purple-200 text-sm font-medium">{link.name}</a>)}
                        <button onClick={() => setIsMatchmakerModalOpen(true)} className="nav-link text-purple-200 text-sm font-medium">Matchmaker</button>
                        <button onClick={() => setIsQuizModalOpen(true)} className="nav-link text-purple-200 text-sm font-medium">Readiness Quiz</button>
                    </nav>
                     <a href="#apply" className="hidden md:block cta-button"><span>Apply Now</span></a>
                    <div className="md:hidden"><button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">{isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}</button></div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4 p-4 bg-gradient-to-br from-purple-950 to-black rounded-lg border border-purple-800">
                        <nav className="flex flex-col space-y-4 items-center">
                            {navLinks.map(link => <a href={link.href} key={link.href} onClick={()=>setIsOpen(false)} className="text-purple-200 hover:text-purple-400 w-full text-center py-2 rounded-md transition-colors">{link.name}</a>)}
                            <button onClick={() => { setIsOpen(false); setIsMatchmakerModalOpen(true); }} className="cta-button w-full mt-4">Startup Matchmaker</button>
                            <button onClick={() => { setIsOpen(false); setIsQuizModalOpen(true); }} className="cta-button w-full mt-2">Readiness Quiz</button>
                            <a href="#apply" onClick={()=>setIsOpen(false)} className="cta-button w-full mt-2">Apply Now</a>
                        </nav>
                    </div>
                )}
            </div>
          
            <StartupMatchmakerModal isOpen={isMatchmakerModalOpen} onClose={() => setIsMatchmakerModalOpen(false)} />
            <StartupReadinessQuiz isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />
        </header>
    );
};

export default Header;

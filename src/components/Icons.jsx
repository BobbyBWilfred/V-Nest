import React from 'react';

export const MenuIcon = ({ className }) => (<svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>);
export const XIcon = ({ className }) => (<svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
export const ArrowRightIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>);
export const ChevronUpIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>);
export const ChevronDownIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>);
export const QuoteIcon = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>);

export const VNestLogo = ({ className }) => (
    <svg className={className} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8b4fe" /> 
                <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
        </defs>
        <path d="M125,0C56.04,0,0,56.04,0,125s56.04,125,125,125s125-56.04,125-125S193.96,0,125,0z M189.3,168.38 c-7.44,14.88-21.36,25.68-37.44,29.04l-27.12-47.04l45.12-26.16L189.3,168.38z M61.08,168.38l19.44-44.16l45.12,26.16 l-27.12,47.04C84.44,194.06,70.52,183.26,61.08,168.38z M125,44.86l44.16,76.5l-44.16,25.5l-44.16-25.5L125,44.86z" fill="url(#logoGradient)"/>
    </svg>
);


export const startupLogos = {
    Quinproc: () => <svg viewBox="0 0 100 100"><rect x="10" y="30" width="80" height="40" rx="5" fill="#a78bfa"/><circle cx="30" cy="50" r="10" fill="black"/><circle cx="70" cy="50" r="10" fill="black"/></svg>,
    Jivan: () => <svg viewBox="0 0 100 100"><path d="M50 10 L 90 90 L 10 90 Z" stroke="#d8b4fe" strokeWidth="4" fill="none"/><path d="M50 40 L 50 60 M 40 50 L 60 50" stroke="#c084fc" strokeWidth="5"/></svg>,
    Mechatronix: () => <svg viewBox="0 0 100 100"><g transform="translate(50 50) rotate(45)"><rect x="-25" y="-25" width="50" height="50" fill="#a78bfa"/></g><circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" fill="none"/></svg>,
    EMotion: () => <svg viewBox="0 0 100 100"><path d="M20 50 L 50 20 L 80 50 L 50 80 Z" fill="#d8b4fe"/><path d="M50 20 L 50 80" stroke="white" strokeWidth="3"/></svg>,
    AetherLink: () => <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#a78bfa" strokeWidth="4" fill="none"/><circle cx="35" cy="35" r="5" fill="#c084fc"/><circle cx="65" cy="35" r="5" fill="#c084fc"/><path d="M35 65 A 15 15 0 0 1 65 65" stroke="#c084fc" strokeWidth="4" fill="none"/></svg>,
    BioSynth: () => <svg viewBox="0 0 100 100" stroke="#d8b4fe" strokeWidth="4" fill="none"><path d="M20 80 C 40 20, 60 20, 80 80"/><path d="M20 50 H 80"/></svg>,
    Finatra: () => <svg viewBox="0 0 100 100"><rect x="20" y="60" width="60" height="20" fill="#a78bfa"/><rect x="35" y="40" width="30" height="20" fill="#c084fc"/><polygon points="50,10 20,40 80,40" fill="#d8b4fe"/></svg>,
    AgroBot: () => <svg viewBox="0 0 100 100"><path d="M50 90 A 40 40 0 0 1 50 10" stroke="#d8b4fe" strokeWidth="4" fill="none"/><path d="M50 10 L 60 30 L 40 30 Z" fill="#c084fc"/></svg>,
    EduVerse: () => <svg viewBox="0 0 100 100"><path d="M10 50 L50 10 L90 50 L50 90 Z" fill="black" stroke="#a78bfa" strokeWidth="4"/><path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#d8b4fe"/></svg>,
    CarbonZero: () => <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#a78bfa" strokeWidth="4"/><text x="50" y="62" fontSize="30" fill="#c084fc" textAnchor="middle">C0</text></svg>,
};

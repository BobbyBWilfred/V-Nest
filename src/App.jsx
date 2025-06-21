import React from 'react';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import KeyFeatures from './components/KeyFeatures.jsx';
import InnovationNexus from './components/InnovationNexus.jsx';
import HowToApply from './components/HowToApply.jsx';
import Portfolio from './components/Portfolio.jsx';
import Convenors from './components/Convenors.jsx';
import Testimonials from './components/Testimonials.jsx';
import Events from './components/Events.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;700&display=swap');

                :root {
                    --brand-black: #0A001F;
                    --brand-gray: #180C33;
                    --brand-purple: #8B5CF6;
                    --brand-purple-light: #C084FC;
                    --brand-purple-dark: #6D28D9;
                    --purple-950: #1a0833;
                    --purple-900: #3b0764;
                    --purple-800: #581c87;
                    --purple-700: #6b21a8;
                    --purple-600: #7e22ce;
                    --purple-500: #9333ea;
                    --purple-400: #a78bfa;
                    --purple-300: #c4b5fd;
                    --purple-200: #d8b4fe;
                    --purple-100: #ede9fe;
                }
                html { scroll-behavior: smooth; }
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--brand-black);
                    color: var(--purple-100);
                    overflow-x: hidden;
                }
                h1, h2, h3, h4, h5, h6 { font-family: 'Space Grotesk', sans-serif; }

                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: var(--brand-gray); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: var(--brand-purple); border-radius: 20px; }

                @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
                @keyframes modal-pop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
                @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

                .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; opacity: 0; }
                .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; opacity: 0; }
                .animate-fade-in-fast { animation: fade-in-fast 0.5s ease-out forwards; }
                .animate-modal-pop { animation: modal-pop 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .animation-delay-300 { animation-delay: 0.3s; }
                .animation-delay-600 { animation-delay: 0.6s; }

                .bg-grid-purple {
                    background-image:
                        linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .bg-grid-nexus {
                    background-image:
                        linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.5;
                }

                .nav-link { position: relative; transition: color 0.3s; }
                .nav-link::after {
                    content: ''; position: absolute; width: 100%;
                    transform: scaleX(0); height: 2px; bottom: -4px; left: 0;
                    background-color: var(--brand-purple-light);
                    transform-origin: bottom right; transition: transform 0.3s ease-out;
                }
                .nav-link:hover { color: white; }
                .nav-link:hover::after { transform: scaleX(1); transform-origin: bottom left; }

                .cta-button, .cta-button-large, .cta-button-small {
                    display: inline-flex; align-items: center; justify-content: center;
                    font-weight: 600; border-radius: 9999px; color: white;
                    background: linear-gradient(90deg, var(--brand-purple-dark), var(--brand-purple));
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
                }
                .cta-button-small { font-size: 0.8rem; padding: 0.4rem 1rem; }
                .cta-button { font-size: 0.875rem; padding: 0.6rem 1.5rem; }
                .cta-button-large { font-size: 1rem; padding: 0.75rem 2rem; }

                .cta-button:hover, .cta-button-large:hover, .cta-button-small:hover {
                    transform: scale(1.05); box-shadow: 0 0 25px rgba(139, 92, 246, 0.8);
                    background: linear-gradient(90deg, var(--brand-purple), var(--brand-purple-light));
                }

                .portfolio-card {
                    position: relative; overflow: hidden;
                    border: 1px solid var(--purple-700);
                }
                .portfolio-card::before {
                    content: ""; position: absolute;
                    left: var(--mouse-x, -100px); top: var(--mouse-y, -100px);
                    width: 200px; height: 200px;
                    background: radial-gradient(circle, var(--purple-300) 0%, rgba(192, 132, 252, 0) 70%);
                    transform: translate(-50%, -50%);
                    opacity: 0; transition: opacity 0.3s; pointer-events: none;
                }
                .portfolio-card:hover::before { opacity: 0.3; }

                .apply-card {
                   background: linear-gradient(145deg, var(--purple-950), #000000);
                   border: 1px solid var(--purple-800);
                }
                .group:hover .apply-card {
                    border-color: var(--brand-purple);
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
                }

                .testimonial-carousel { animation: scroll 40s linear infinite; }
                .testimonial-carousel-container:hover .testimonial-carousel { animation-play-state: paused; }

                .event-card {
                  display: flex; background-color: var(--purple-950);
                  border: 1px solid var(--purple-800);
                  border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease;
                }
                .event-card:hover {
                  border-color: var(--brand-purple); transform: translateY(-4px);
                  box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -2px rgba(139, 92, 246, 0.05);
                }
                .date-box {
                    background: linear-gradient(to top, var(--brand-purple-dark), var(--brand-purple));
                    color: white; text-align: center;
                    padding: 1rem; width: 6rem; flex-shrink: 0;
                    display: flex; flex-direction: column; justify-content: center;
                }

                .footer-link { transition: color 0.3s, padding-left 0.3s; }
                .footer-link:hover { color: white; padding-left: 4px; }
                .social-icon {
                  display: flex; align-items: center; justify-content: center;
                  width: 40px; height: 40px; border-radius: 9999px;
                  background-color: var(--brand-gray); color: var(--brand-purple-light);
                  font-weight: bold; transition: all 0.3s ease;
                }
                .social-icon:hover { background-color: var(--brand-purple); color: white; transform: scale(1.1); }

                .quiz-option {
                    width: 100%;
                    padding: 1rem;
                    background-color: var(--purple-950);
                    border: 1px solid var(--purple-700);
                    color: white;
                    border-radius: 0.5rem;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                }
                .quiz-option:hover {
                    background-color: var(--brand-purple);
                    border-color: var(--brand-purple-light);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 10px rgba(139, 92, 246, 0.5);
                }

                .hero-title {
                    text-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
                }

                .hero-subtitle {
                    text-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
                }

                .tv-area-wrapper {
                    max-width: 900px;
                    margin: 4rem auto 0;
                    padding: 0 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .tv-screen-container {
                    width: 100%;
                    background: linear-gradient(145deg, #2d1a47, #1e1232);
                    border: 10px solid #1a0f2b;
                    border-radius: 1.5rem;
                    padding: 1.5rem;
                    position: relative;
                    z-index: 10;

                    box-shadow: 0 20px 40px rgba(0,0,0,0.6),
                                inset 0 0 15px rgba(0,0,0,0.7),
                                0 0 45px rgba(139, 92, 246, 0.25);
                }

                .tv-screen {
                    background: var(--brand-black, #0A001F);
                    height: 450px;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    position: relative;
                    box-shadow: inset 0 0 25px rgba(0,0,0,0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .tv-controls {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.75rem;
                    margin-top: 1.5rem;
                    padding: 0 1rem;
                }

                .tv-stand-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .tv-stand-pedestal {
                    width: 120px;
                    height: 60px;
                    background: linear-gradient(to right, #1a1a2e, #2a2a3e, #1a1a2e);
                    margin-top: -10px;
                    z-index: 5;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.4);

                    clip-path: polygon(20% 0, 80% 0, 100% 100%, 0% 100%);
                }

                .tv-stand-base {
                    width: 350px;
                    height: 15px;
                    background: linear-gradient(180deg, #2a2a3e, #1a1a2e);
                    border-radius: 10px;
                    margin-top: -2px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
                }


                /* Mobile Specific Styles */
                @media (max-width: 768px) {
                    .hero-title { font-size: 2.75rem; line-height: 1.15; }
                    .text-4xl, .md\:text-5xl { font-size: 2.25rem; }
                    .text-3xl { font-size: 1.75rem; }
                    .hero-subtitle { font-size: 1.1rem; }

                    section.py-28 { padding-top: 5rem; padding-bottom: 5rem; }
                    section.md\:py-36 { padding-top: 5rem; padding-bottom: 5rem; }

                    .tv-area-wrapper {
                        margin-top: 2.5rem;
                        padding: 0 0.5rem;
                    }
                    .tv-screen-container {
                        padding: 1rem;
                        border-width: 6px;
                        border-radius: 1.25rem;
                    }
                    .tv-screen {
                        height: 300px; /* Adjusted for smaller screens */
                        border-radius: 0.75rem;
                    }

                    .tv-screen .text-4xl, .tv-screen .md\:text-5xl { font-size: 2rem; }
                    .tv-screen .text-3xl, .tv-screen .md\:text-4xl { font-size: 1.75rem; }
                    .tv-screen .text-lg, .tv-screen .md\:text-xl { font-size: 1rem; }

                    .tv-controls { margin-top: 1.25rem; }
                    .tv-stand-pedestal { width: 100px; height: 50px; }
                    .tv-stand-base { width: 280px; height: 12px; }

                    .event-card { flex-direction: column; }
                    .date-box {
                        width: 100%;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        padding: 0.75rem 1rem;
                        gap: 1rem;
                    }
                    .date-box > div:first-child { font-size: 2rem; }
                    .date-box > div:last-child { font-size: 0.9rem; text-align: left; }

                    footer .grid { text-align: center; }
                    footer .grid > div { margin-bottom: 2rem; }
                    footer ul { display: inline-block; text-align: left; }
                    footer .flex.items-start, footer .flex.items-center { justify-content: center; }
                    footer .flex.space-x-4 { justify-content: center; }
                    footer .justify-between { flex-direction: column; gap: 1rem; align-items: center; }

                    /* How To Apply Section Specific Fixes */
                    .how-to-apply-card-content {
                        position: relative; /* Ensure position context for absolute children */
                        padding-right: 2rem; /* Add padding to prevent text under icon */
                    }

                    .how-to-apply-icon {
                        position: absolute;
                        right: 0.5rem; /* Adjust as needed */
                        top: 50%;
                        transform: translateY(-50%);
                        /* Ensure icon is clickable and not obscuring text */
                        pointer-events: none; /* Make sure it doesn't block clicks on text */
                    }
                }

                @media (max-width: 480px) {
                    .hero-title { font-size: 2.25rem; }
                    .text-4xl, .md\:text-5xl { font-size: 2rem; }

                    .cta-button, .cta-button-large { padding: 0.6rem 1.5rem; font-size: 0.9rem; }

                    .tv-screen .p-8, .tv-screen .md\:p-12 { padding: 1.5rem; }

                    /* Further adjustment for how to apply section */
                    .how-to-apply-icon {
                        right: 0; /* Align to the very right */
                        width: 40px; /* Make icon slightly smaller */
                        height: 40px;
                    }
                }
            `}</style>

            <div className="main-container">
                <Header />
                <main>
                    <Hero />
                    <AboutUs />
                    <KeyFeatures />
                    <InnovationNexus />
                    <HowToApply />
                    <Portfolio />
                    <Convenors />
                    <Testimonials />
                    <Events />
                    <FAQ />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

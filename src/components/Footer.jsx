import React from 'react';
import { VNestLogo } from './Icons';

const Footer = () => (
    <footer className="bg-black text-purple-300 border-t border-purple-900/30">
        <div className="container mx-auto px-6 pt-16 pb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="lg:col-span-1">
                    <a href="#home" className="flex items-center space-x-3 mb-4">
                        <VNestLogo className="w-10 h-10"/>
                        <span className="text-white text-2xl font-bold">V-NEST</span>
                    </a>
                    <p className="text-sm">The launchpad where visionary founders and disruptive technology converge to create tomorrow's unicorns.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wider">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#about" className="footer-link">About Us</a></li>
                        <li><a href="#apply" className="footer-link">How to Apply</a></li>
                        <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                        <li><a href="#convenors" className="footer-link">Our Founders</a></li>
                        <li><a href="#faq" className="footer-link">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wider">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start"><span className="w-5 mr-2 mt-1">📍</span><span>Vellore Institute of Technology, Chennai, Tamil Nadu, India</span></li>
                        <li className="flex items-center"><span className="w-5 mr-2">📧</span><a href="mailto:contact@vnest.org" className="footer-link">contact@vnest.org</a></li>
                        <li className="flex items-center"><span className="w-5 mr-2">📞</span><a href="tel:+917358429420" className="footer-link">+91 7358429420</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wider">Follow Us</h3>
                    <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Twitter" className="social-icon">T</a>
                        <a href="#" aria-label="LinkedIn" className="social-icon">Li</a>
                        <a href="#" aria-label="Facebook" className="social-icon">Fb</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-purple-900/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p>&copy; {new Date().getFullYear()} V-NEST Foundation. All rights reserved.</p>
                 <p>Designed by Bobby B Wilfred</p>
            </div>
        </div>
    </footer>
);

export default Footer;

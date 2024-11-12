import React, {useEffect, useState} from 'react';
import { BarChart3, Shield, Zap, Menu, X } from 'lucide-react';
import HeroSection from './HeroSection';
import Showcase from "./Showcase.jsx";
import Features from "./Features.jsx";
import Testimonials from "./Testimonials.jsx";
import Pricing from "./Pricing.jsx";
import Integrations from "./Integrations.jsx";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";


const LandingPage = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        // Set body background
        document.body.classList.add('bg-gray-900');

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('bg-gray-900');
        };
    }, []); // Empty dependency array means this runs once on mount
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 border-b border-white/10 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <BarChart3 className="h-8 w-8 text-indigo-400"/>
                            <span className="ml-2 text-xl font-bold text-white">Quantum Panel</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                            <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
                            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-indigo-400 transition-colors"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6"/>
                                ) : (
                                    <Menu className="h-6 w-6"/>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#features"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#showcase"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Showcase
                            </a>
                            <a
                                href="#pricing"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>
                            <div className="px-3 py-2">
                                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <HeroSection/>

            {/*<Logo3D />*/}

            {/* Showcase Section */}
            <Showcase />

            {/* Features Section */}
            <Features />

            {/* Testimonials Section */}
            <Testimonials/>

            {/* Pricing Section */}
            <Pricing />

            {/* Integrations Section */}
            <Integrations />

            {/* CTA Section */}
            <CTA />

            {/* FAQ Section */}
            <FAQ />

            {/*Footer Section*/}
            <Footer />

        </div>
    );
};

export default LandingPage;
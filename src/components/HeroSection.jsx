import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, BarChart3, Shield, Zap, Sparkles } from 'lucide-react';

const AnimatedText = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {text}
        </span>
    );
};

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Pre-calculate random values for floating elements
    const floatingElements = useMemo(() => {
        return Array(20).fill(0).map(() => ({
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 10
        }));
    }, []);

    return (
        <div className="relative min-h-[60vh] bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {floatingElements.map((elem, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/5 rounded-full"
                        style={{
                            width: elem.width + 'px',
                            height: elem.height + 'px',
                            top: elem.top + '%',
                            left: elem.left + '%',
                            animation: `float ${elem.duration}s infinite linear`
                        }}
                    />
                ))}
            </div>

            {/* Hero content */}
            <div
                className="relative pt-32 pb-16 text-center px-4 sm:px-6 lg:px-8"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Animated badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
                        <Sparkles className="h-4 w-4 mr-2" />
                        <AnimatedText text="Introducing AdminDash 2.0" />
                    </div>

                    {/* Main heading with gradient */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                        <AnimatedText text="Your Next-Generation" />
                        <br />
                        <span className="text-5xl sm:text-6xl md:text-7xl">
                            <AnimatedText text="Admin Dashboard" />
                        </span>
                    </h1>

                    {/* Interactive subtitle */}
                    <p className="text-lg sm:text-xl text-indigo-200/80 mb-12 max-w-2xl mx-auto">
                        <AnimatedText text="Experience the future of admin interfaces with our AI-powered, fully customizable dashboard solution." />
                    </p>

                    {/* Interactive CTA buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            className="w-full sm:w-auto group relative px-8 py-4 bg-indigo-600 text-white rounded-xl overflow-hidden hover:bg-indigo-700 transition-colors"
                            style={{
                                transform: isHovered ? `perspective(1000px) rotateY(${(mousePosition.x - 150) / 20}deg) rotateX(${-(mousePosition.y - 50) / 20}deg)` : 'none',
                                transition: isHovered ? 'none' : 'transform 0.5s ease',
                            }}
                        >
                            <div className="relative z-10 flex items-center justify-center">
                                Try Live Demo
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <button className="w-full sm:w-auto group px-8 py-4 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                            <span className="flex items-center justify-center">
                                View Features
                                <span className="ml-2 group-hover:rotate-45 transition-transform">
                                    <Sparkles className="h-5 w-5" />
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Stats section */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
                        {[
                            { icon: BarChart3, label: 'Active Users', value: '10,000+' },
                            { icon: Shield, label: 'Data Protected', value: '99.9%' },
                            { icon: Zap, label: 'Response Time', value: '<100ms' },
                        ].map(({ icon: Icon, label, value }, index) => (
                            <div
                                key={index}
                                className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Icon className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                                <div className="text-sm text-indigo-200/80">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    33% {
                        transform: translate(30px, -50px) rotate(120deg);
                    }
                    66% {
                        transform: translate(-30px, 50px) rotate(240deg);
                    }
                    100% {
                        transform: translate(0, 0) rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
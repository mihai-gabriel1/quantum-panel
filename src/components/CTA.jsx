// CTASection.jsx
import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20" />
                {/* Animated particles */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/10 rounded-full blur-sm"
                        style={{
                            width: `${Math.random() * 10 + 50}px`,
                            height: `${Math.random() * 10 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s infinite linear`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
                        <Sparkles className="h-4 w-4 mr-2" />
                        <span>Limited Time Offer</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                        Ready to Transform Your <br />Admin Experience?
                    </h2>

                    <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
                        Join thousands of teams who have already upgraded their workflow
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            className="group relative px-8 py-4 bg-white text-indigo-600 rounded-xl overflow-hidden hover:text-white transition-colors"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative z-10 flex items-center font-semibold">
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                        </button>

                        <button className="group px-8 py-4 bg-transparent text-white rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                            <span className="flex items-center">
                                Watch Demo
                                <span className="ml-2 group-hover:rotate-45 transition-transform">
                                    <Sparkles className="h-5 w-5" />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -50px) rotate(120deg); }
                    66% { transform: translate(-30px, 50px) rotate(240deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default CTASection;
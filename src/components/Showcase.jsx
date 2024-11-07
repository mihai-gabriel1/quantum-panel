// ShowcaseSection.jsx
import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ShowcaseCard = ({ item, isHovered, onHover }) => {
    return (
        <div
            className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ${
                isHovered ? 'transform scale-105' : ''
            }`}
            onMouseEnter={() => onHover(item)}
            onMouseLeave={() => onHover(null)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-1 bg-gradient-to-r from-indigo-600 to-purple-600">
                <img
                    src="/api/placeholder/600/400"
                    alt={`Dashboard Preview ${item}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                    <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">
                        {item === 1 && "Interactive Analytics"}
                        {item === 2 && "Real-time Monitoring"}
                        {item === 3 && "Smart Notifications"}
                    </h3>
                </div>
                <p className="text-gray-300">
                    {item === 1 && "Dive deep into your data with interactive charts and filters."}
                    {item === 2 && "Monitor your system's performance in real-time with live updates."}
                    {item === 3 && "Stay informed with AI-powered notifications and alerts."}
                </p>
                <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-2xl transition-colors" />
        </div>
    );
};

const ShowcaseSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div id="showcase" className="py-24 pb-2 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover the tools that will revolutionize your workflow and boost productivity
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <ShowcaseCard
                            key={item}
                            item={item}
                            isHovered={hoveredCard === item}
                            onHover={setHoveredCard}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowcaseSection;
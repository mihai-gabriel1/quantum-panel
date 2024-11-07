// FeaturesSection.jsx
import React from 'react';
import { BarChart3, Shield, Zap, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }) => {
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-105" />
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl ${color} mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    {title}
                    <Sparkles className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </h3>
                <p className="text-gray-300">
                    {description}
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-2xl transition-colors" />
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for speed and performance, ensuring smooth operation at any scale.",
            color: "bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-yellow-400"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade security with advanced encryption and authentication.",
            color: "bg-gradient-to-br from-purple-400/20 to-pink-500/20 text-purple-400"
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Deep insights with customizable dashboards and reports.",
            color: "bg-gradient-to-br from-indigo-400/20 to-blue-500/20 text-indigo-400"
        }
    ];

    return (
        <div id="features" className="py-24 bg-gradient-to-b from-indigo-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Why Choose AdminDash?
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Experience the perfect blend of power, security, and ease of use
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const PricingSection = () => {
    const features = [
        "Complete Analytics Dashboard",
        "Dark/Light Mode Support",
        "Activity Tracking System",
        "Advanced Statistics Overview",
        "Interactive Data Visualization",
        "Real-time Updates",
        "Responsive Design",
        "Modern UI/UX",
        "Full Source Code Access",
        "Free Updates"
    ];

    return (
        <section id="pricing" className="bg-gradient-to-b from-indigo-900 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-4">
                        <Sparkles className="h-4 w-4 mr-2 text-indigo-400" />
                        <span className="text-sm text-indigo-300">Complete Package</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        One Price, All Features
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Get everything you need to power your analytics dashboard
                    </p>
                </div>

                <div className="relative">
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                        <div className="text-center mb-8 justify-center flex flex-col items-center">
                            <div className="flex flex-col items-center mb-6">
                                <div className="text-5xl font-bold text-white mb-2">$12</div>
                                <p className="text-gray-400">One-time payment</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8 mx-auto">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex">
                                        <Check className="h-5 w-5 text-indigo-400 mr-3 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 group">
                                <span className="flex items-center justify-center">
                                    Purchase Now
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-400">
                            <p>Compatible with React 18+ • Regular Updates • Premium Support</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400">
                        Questions about the package? {' '}
                        <button className="text-indigo-400 hover:text-indigo-300">
                            Contact us
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
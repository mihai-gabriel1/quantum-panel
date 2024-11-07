import React from 'react';
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <BarChart3 className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">AdminDash</span>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#showcase" className="text-gray-600 hover:text-gray-900">Showcase</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="pt-24 pb-16 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Your Next-Gen <span className="text-indigo-600">Admin Dashboard</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Powerful, flexible, and beautiful. Everything you need to manage your application in one place.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                            Try Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Showcase Section */}
            <div id="showcase" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="p-1 bg-gradient-to-r from-indigo-600 to-purple-600">
                                    <img
                                        src="/api/placeholder/600/400"
                                        alt={`Dashboard Preview ${item}`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item === 1 && "Interactive Analytics"}
                                        {item === 2 && "Real-time Monitoring"}
                                        {item === 3 && "Smart Notifications"}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item === 1 && "Dive deep into your data with interactive charts and filters."}
                                        {item === 2 && "Monitor your system's performance in real-time with live updates."}
                                        {item === 3 && "Stay informed with AI-powered notifications and alerts."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Choose AdminDash?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                            <p className="text-gray-600">
                                Optimized for speed and performance, ensuring smooth operation at any scale.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100 text-purple-600 mb-4">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                            <p className="text-gray-600">
                                Bank-grade security with advanced encryption and authentication.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-pink-100 text-pink-600 mb-4">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                            <p className="text-gray-600">
                                Deep insights with customizable dashboards and reports.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to transform your admin experience?
                    </h2>
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        Get Started Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
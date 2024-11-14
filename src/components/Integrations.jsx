import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const IntegrationCard = ({ name, description, icon: Icon, comingSoon }) => (
    <div className="group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-lg transform transition-transform duration-500 group-hover:scale-105" />
        <div className="relative p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10 h-full">
            {comingSoon && (
                <div className="absolute top-1 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-300">
                        Coming Soon
                    </span>
                </div>
            )}

            <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-white">{name}</h3>
            </div>

            <p className="text-gray-400 mb-4">{description}</p>

            <button className={`flex items-center text-sm ${
                comingSoon ? 'text-gray-500 cursor-not-allowed' : 'text-indigo-400 group-hover:text-indigo-300'
            }`}>
                {comingSoon ? 'Coming Soon' : 'Learn More'}
                <ArrowRight className={`ml-2 h-4 w-4 ${
                    !comingSoon && 'group-hover:translate-x-1'
                } transition-transform`} />
            </button>
        </div>
    </div>
);

const IntegrationsSection = () => {
    const integrations = [
        {
            name: "Slack",
            description: "Get real-time notifications and updates directly in your Slack channels.",
            icon: Zap,
        },
        {
            name: "GitHub",
            description: "Seamlessly integrate with your development workflow and track issues.",
            icon: Sparkles,
        },
        {
            name: "Jira",
            description: "Sync tasks and track progress across your project management tools.",
            icon: Zap,
        },
        {
            name: "Microsoft Teams",
            description: "Collaborate and share insights directly within Teams.",
            icon: Sparkles,
            comingSoon: true,
        },
        {
            name: "Salesforce",
            description: "Connect your CRM data for comprehensive business insights.",
            icon: Zap,
        },
        {
            name: "Google Workspace",
            description: "Integrate with Google tools for seamless productivity.",
            icon: Sparkles,
        },
        {
            name: "Zendesk",
            description: "Connect customer support data for better service insights.",
            icon: Zap,
        },
        {
            name: "Custom API",
            description: "Build custom integrations with our robust API platform.",
            icon: Sparkles,
        },
    ];

    return (
        <section id="integrations" className="py-16 bg-gradient-to-b from-gray-900 to-indigo-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
                        <Sparkles className="h-4 w-4 mr-2" />
                        <span>Seamless Integration</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Connect With Your Favorite Tools
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Quantum Panel integrates with the tools you already use, making your workflow seamless and efficient
                    </p>
                </div>

                {/* Integrations grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {integrations.map((integration, index) => (
                        <IntegrationCard key={index} {...integration} />
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                        View All Integrations
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="mt-4 text-gray-400">
                        Don't see what you need?
                        <button className="text-indigo-400 hover:text-indigo-300 ml-2">
                            Request an integration
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
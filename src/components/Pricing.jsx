import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const PricingCard = ({ plan, isPopular }) => (
    <div className="relative group">
        {/* Popular badge */}
        {isPopular && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                    <Sparkles className="h-4 w-4 mr-2 text-indigo-400" />
                    <span className="text-sm text-indigo-300">Most Popular</span>
                </div>
            </div>
        )}

        {/* Card content */}
        <div className={`h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-300 ${
            isPopular ? 'border-indigo-500/30 shadow-lg shadow-indigo-500/10' : 'border-white/10 group-hover:border-indigo-500/20'
        }`}>
            {/* Plan name and price */}
            <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                    )}
                </div>
                {plan.description && (
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                )}
            </div>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-400 mr-3 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA button */}
            <button className={`w-full group relative px-6 py-3 rounded-lg transition-all duration-300 ${
                isPopular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
            }`}>
                <span className="flex items-center justify-center">
                    {plan.buttonText || 'Get Started'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>
    </div>
);

const PricingSection = () => {
    const plans = [
        {
            name: "Starter",
            price: "$49",
            period: "month",
            description: "Perfect for small teams and startups",
            features: [
                "Up to 5 team members",
                "Basic analytics dashboard",
                "5GB storage",
                "Email support",
                "Basic integrations",
                "API access"
            ],
            buttonText: "Start Free Trial"
        },
        {
            name: "Professional",
            price: "$99",
            period: "month",
            description: "Ideal for growing businesses",
            features: [
                "Up to 20 team members",
                "Advanced analytics",
                "25GB storage",
                "Priority support",
                "Custom dashboards",
                "Advanced integrations",
                "API access with higher limits",
                "Team training session"
            ],
            buttonText: "Get Started"
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large-scale operations",
            features: [
                "Unlimited team members",
                "AI-powered insights",
                "Unlimited storage",
                "24/7 premium support",
                "Custom integration",
                "Dedicated success manager",
                "Custom API solutions",
                "Advanced security features",
                "On-premise deployment option"
            ],
            buttonText: "Contact Sales"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-indigo-900 to-gray-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your team's needs
                    </p>
                </div>

                {/* Pricing grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                            isPopular={index === 1}
                        />
                    ))}
                </div>

                {/* Enterprise note */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        All plans include a 14-day free trial. No credit card required.
                        Need a custom solution? <button className="text-indigo-400 hover:text-indigo-300">Contact our sales team</button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
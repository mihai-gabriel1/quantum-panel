import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const TestimonialCard = ({ name, role, company, image, quote, rating }) => (
    <div className="group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-105" />
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/10">
            {/* Quote icon */}
            <Quote className="h-8 w-8 text-indigo-400 mb-6 opacity-50" />

            {/* Testimonial text */}
            <p className="text-gray-300 mb-6 text-lg italic">"{quote}"</p>

            {/* Rating */}
            <div className="flex mb-6">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
            </div>

            {/* Author info */}
            <div className="flex items-center">
                <img
                    src={image}
                    alt={name}
                    className="h-12 w-12 rounded-full border-2 border-indigo-500/30"
                />
                <div className="ml-4">
                    <h4 className="text-white font-semibold">{name}</h4>
                    <p className="text-gray-400 text-sm">{role} at {company}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO",
            company: "TechCorp",
            image: "/api/placeholder/100/100",
            quote: "Quantum Panel transformed our analytics workflow. The AI-driven insights have been game-changing for our decision-making process, leading to a 40% increase in team efficiency.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            company: "InnovateLabs",
            image: "/api/placeholder/100/100",
            quote: "The speed and security features are unmatched. We've seen a remarkable improvement in our team's productivity since switching to Quantum Panel. The customization options are endless.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Data Scientist",
            company: "DataDrive",
            image: "/api/placeholder/100/100",
            quote: "As a data scientist, I'm impressed by the advanced analytics capabilities. The real-time processing and visualization tools have revolutionized how we handle big data.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied teams who have transformed their workflow with Quantum Panel
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <button className="group inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                        Read More Success Stories
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
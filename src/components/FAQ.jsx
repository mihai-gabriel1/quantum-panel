import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-white/10 last:border-0">
        <button
            className="w-full py-6 text-left flex justify-between items-start focus:outline-none"
            onClick={onClick}
        >
            <span className="text-lg font-medium text-white pr-8">{question}</span>
            {isOpen ? (
                <Minus className="h-6 w-6 text-indigo-400" />
            ) : (
                <Plus className="h-6 w-6 text-indigo-400" />
            )}
        </button>

        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}>
            <p className="text-gray-400">{answer}</p>
        </div>
    </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How secure is Quantum Panel?",
            answer: "Quantum Panel implements bank-grade security measures including end-to-end encryption, regular security audits, and compliance with international data protection standards. We use advanced encryption protocols and maintain strict access controls to ensure your data remains protected at all times."
        },
        {
            question: "Can I customize the dashboard?",
            answer: "Absolutely! Every aspect of Quantum Panel can be customized to match your workflow. This includes layouts, widgets, color schemes, and reporting tools. You can save multiple dashboard configurations and share them across your team."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer multiple tiers of support based on your plan. All customers receive email support with 24-hour response time. Professional and Enterprise plans include priority support with 1-hour response times and dedicated support channels."
        },
        {
            question: "Can I export my data?",
            answer: "Yes, Quantum Panel supports data export in multiple formats including CSV, Excel, PDF, and JSON. You can schedule automated exports or perform them manually. All exports are encrypted and can be password protected."
        },
        {
            question: "How does the pricing work?",
            answer: "Our pricing is based on team size and feature requirements. We offer three main tiers: Starter, Professional, and Enterprise. Each plan includes different features and capabilities. Custom pricing is available for large organizations."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-indigo-900 to-gray-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_100%)]" />
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        <span>FAQ</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Everything you need to know about Quantum Panel
                    </p>
                </div>

                {/* FAQ list */}
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 divide-y divide-white/10">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* Additional support */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400">
                        Can't find what you're looking for?{' '}
                        <button className="text-indigo-400 hover:text-indigo-300">
                            Contact our support team
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
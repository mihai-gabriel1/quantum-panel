import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Mail, Phone, BookOpen, Users, Search, Plus } from 'lucide-react';

const HelpPage = ({ isDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I reset my password?',
            answer: 'To reset your password, go to the login page and click on "Forgot Password?" Follow the instructions sent to your email.'
        },
        {
            question: 'How do I change my email address?',
            answer: 'You can change your email address in the profile settings section of your account.'
        },
        {
            question: 'How can I contact support?',
            answer: 'You can contact support by emailing us at support@example.com or by using the contact form on our website.'
        },
        {
            question: 'How do I access my purchase history?',
            answer: 'You can access your purchase history in the account settings under "Billing".'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept all major credit cards, PayPal, and bank transfers.'
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold">Help & Support</h1>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    We're here to help you. Find answers to your questions and get support.
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8 flex justify-center">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search for help topics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full p-4 rounded-lg border ${
                            isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'
                        }`}
                    />
                    <button className={`absolute right-0 top-0 mt-3 mr-4 text-gray-500`}>
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                            onClick={() => handleToggle(index)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {faq.question}
                                </h3>
                                <Plus className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-45' : ''}`} />
                            </div>
                            {openIndex === index && (
                                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {faq.answer}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <Mail className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Support</h3>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            For any inquiries, please reach out to us at <a href="mailto:support@example.com" className="text-indigo-600">support@example.com</a>.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <Phone className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone Support</h3>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            You can reach us at (123) 456-7890 from Monday to Friday, 9 AM to 5 PM.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Additional Resources Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <BookOpen className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>User  Guide</h3>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Check out our <a href="/user-guide" className="text-indigo-600">User  Guide</a> for detailed instructions on how to use our platform.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <Users className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Community Forum</h3>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Join our <a href="/forum" className="text-indigo-600">Community Forum</a> to connect with other users and share your experiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
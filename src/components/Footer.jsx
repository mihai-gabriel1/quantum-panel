import React from 'react';
import { BarChart3, Mail, Twitter, Globe, MessagesSquare } from 'lucide-react';

const Footer = () => {
    const navigation = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Integrations', href: '#integrations' },
            { name: 'FAQ', href: '#faq' },
        ],
        company: [
            { name: 'About', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
        ],
        resources: [
            { name: 'Documentation', href: '#' },
            { name: 'API Reference', href: '#' },
            { name: 'Guides', href: '#' },
            { name: 'Support', href: '#' },
        ],
        legal: [
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Security', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Website', icon: Globe, href: '#' },
        { name: 'Contact', icon: Mail, href: '#' },
        { name: 'Community', icon: MessagesSquare, href: '#' },
    ];

    return (
        <footer className="bg-gray-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand */}
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center space-x-3">
                            <BarChart3 className="h-8 w-8 text-indigo-400"/>
                            <span className="text-xl font-bold text-white">Quantum Panel</span>
                        </div>
                        <p className="text-gray-400 text-base">
                            Next-generation analytics and admin dashboard solution for modern teams.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                                    Product
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-indigo-400 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-indigo-400 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                                    Resources
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-indigo-400 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-400 hover:text-indigo-400 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="max-w-md mx-auto xl:max-w-none">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Subscribe to our newsletter
                        </h3>
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-gray-400">
                            We care about your data. Read our{' '}
                            <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Quantum Panel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
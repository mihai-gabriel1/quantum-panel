// Settings.jsx
import React, { useState } from 'react';
import {
    User, Bell, Lock, Laptop, Moon, Sun,
    Globe, CreditCard, Shield, Save, UserPlus
} from 'lucide-react';

const SettingsPage = ({ isDarkMode }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [notificationEmail, setNotificationEmail] = useState(true);
    const [notificationPush, setNotificationPush] = useState(true);
    const [marketingEmail, setMarketingEmail] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [theme, setTheme] = useState(isDarkMode ? 'dark' : 'light');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'appearance', label: 'Appearance', icon: Laptop },
        { id: 'billing', label: 'Billing', icon: CreditCard },
    ];

    return (
        <div className={`min-h-screen p-6 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage your account settings and preferences
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <nav className={`space-y-1 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } rounded-lg shadow`}>
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                                        activeTab === tab.id
                                            ? isDarkMode
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-indigo-50 text-indigo-600'
                                            : isDarkMode
                                                ? 'text-gray-300 hover:bg-gray-700'
                                                : 'text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <Icon className="h-5 w-5 mr-3" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Main Content */}
                <div className={`lg:col-span-3 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-lg shadow p-6`}>
                    {/* Profile Settings */}
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

                            <div className="flex items-center">
                                <div className="relative">
                                    <button className={`p-1 rounded-full ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                                    }`}>
                                        <User Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <button className="ml-5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                    Change Avatar
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } mb-2`}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-3 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? 'bg-gray-700 border-gray -600 text-white'
                                                : 'bg-white border-gray-300'
                                        }`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } mb-2`}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={`w-full px-3 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300'
                                        }`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } mb-2`}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className={`w-full px-3 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300'
                                        }`}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } mb-2`}>
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-3 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300'
                                        }`}
                                        placeholder="New York, USA"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-medium ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                } mb-2`}>
                                    Bio
                                </label>
                                <textarea
                                    className={`w-full px-3 py-2 rounded-lg border ${
                                        isDarkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300'
                                    }`}
                                    rows="4"
                                    placeholder="Tell us about yourself"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Notifications Settings */}
                    {activeTab === 'notifications' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">Email Notifications</h3>
                                        <p className={`text-sm ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            Receive notifications via email
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setNotificationEmail(!notificationEmail)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                                            notificationEmail ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                                notificationEmail ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">Push Notifications</h3>
                                        <p className={`text-sm ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            Receive push notifications
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setNotificationPush(!notificationPush)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                                            notificationPush ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                                notificationPush ? 'translate-x-6' : 'translate-x- 1'
                                            }`}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">Marketing Emails</h3>
                                        <p className={`text-sm ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            Receive marketing and promotional emails
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setMarketingEmail(!marketingEmail)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                                            marketingEmail ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                                marketingEmail ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Settings */}
                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>

                            <div className="space-y-4">
                                <div className={`p-4 rounded-lg ${
                                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                                }`}>
                                    <div className="flex items-center">
                                        <Shield className="h-5 w-5 text-indigo-600 mr-3" />
                                        <div>
                                            <h3 className="font-medium">Two-Factor Authentication</h3>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                Add an extra layer of security to your account.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                                            className={`ml-auto relative inline-flex h-6 w-11 items-center rounded-full ${
                                                twoFactorAuth ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                            }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                                                    twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Appearance Settings */}
                    {activeTab === 'appearance' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Appearance Settings</h2>

                            <div className="flex items-center">
                                <h3 className="font-medium">Theme</h3>
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`ml-4 px-4 py-2 rounded-lg ${
                                        theme === 'light' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                                    }`}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`ml-2 px-4 py-2 rounded-lg ${
                                        theme === 'dark' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                                    }`}
                                >
                                    Dark
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Billing Settings */}
                    {activeTab === 'billing' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Billing Information</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } mb-2`}>
                                        Credit Card Number
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-3 py-2 rounded-lg border ${
                                            isDarkMode
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300'
                                        }`}
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={`block text-sm font-medium ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        } mb-2`}>
                                            Expiration Date
                                        </label>
                                        <input
                                            type="text"
                                            className={`w-full px-3 py-2 rounded-lg border ${
                                                isDarkMode
                                                    ? 'bg-gray-700 border-gray-600 text-white'
                                                    : 'bg-white border-gray-300'
                                            }`}
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        } mb-2`}>
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            className={`w-full px-3 py-2 rounded-lg border ${
                                                isDarkMode
                                                    ? 'bg-gray-700 border-gray-600 text-white'
                                                    : 'bg-white border-gray-300'
                                            }`}
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                    Save Billing Information
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
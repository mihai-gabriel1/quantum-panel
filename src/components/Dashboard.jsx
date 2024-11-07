import React, { useState } from 'react';
import {
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    Menu,
    X,
    Sun,
    Moon,
    Home,
    Bell,
    Search,
    TrendingUp,
    DollarSign,
    Users as UsersIcon,
    ShoppingCart,
} from 'lucide-react';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Sample data for the dashboard
    const stats = [
        { title: 'Total Revenue', value: '$54,239', change: '+12.5%', icon: DollarSign },
        { title: 'Active Users', value: '2,435', change: '+18.2%', icon: UsersIcon },
        { title: 'Total Sales', value: '1,234', change: '+8.1%', icon: ShoppingCart },
        { title: 'Growth Rate', value: '24.5%', change: '+2.3%', icon: TrendingUp },
    ];

    // Sidebar navigation items
    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Users, label: 'Users' },
        { icon: BarChart3, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help' },
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-full transition-transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } w-64`}
            >
                {/* Logo */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <BarChart3 className={`h-8 w-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AdminDash</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className={`md:hidden ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-4 px-2">
                    {sidebarItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`flex items-center space-x-2 px-4 py-3 rounded-lg mb-1 transition-colors ${
                                item.active
                                    ? isDarkMode
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-indigo-50 text-indigo-600'
                                    : isDarkMode
                                        ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className={`md:ml-64 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {/* Top Navigation */}
                <header className={`fixed top-0 right-0 left-0 md:left-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between h-16 px-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className={`md:hidden ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <div className="flex items-center flex-1 px-4 space-x-4">
                            <div className={`flex items-center max-w-md flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                                <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className={`ml-2 bg-transparent border-none focus:outline-none flex-1 ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className={`relative ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                                <Bell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400" />
                            </button>
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="pt-16 px-4 md:px-6 lg:px-8 py-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl ${
                                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                                } shadow-sm hover:shadow-md transition-shadow`}
                            >
                                <div className="flex justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {stat.title}
                                        </p>
                                        <p className={`text-2xl font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {stat.value}
                                        </p>
                                    </div>
                                    <div
                                        className={`rounded-lg p-2 ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'
                                        }`}
                                    >
                                        <stat.icon
                                            className={`h-6 w-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                                    <span className={`text-sm ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    from last month
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chart Section Placeholder */}
                    <div
                        className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm mb-8`}
                    >
                        <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Revenue Overview
                        </h2>
                        <div className={`h-64 flex items-center justify-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            [Chart Component Would Go Here]
                        </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div
                        className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                    >
                        <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-4 rounded-lg ${
                                        isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                                    }`}
                                >
                                    <div
                                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                            isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                                        }`}
                                    >
                                        <Users className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                                    </div>
                                    <div className="ml-4">
                                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            New user registered
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            2 minutes ago
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
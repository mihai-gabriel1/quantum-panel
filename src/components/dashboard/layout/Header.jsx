// layout/Header.jsx
import React from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';

const Header = ({ setIsSidebarOpen, isDarkMode, setIsDarkMode }) => {
    return (
        <header className={`left-0 md:left-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between p-4">
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
    );
};

export default Header;
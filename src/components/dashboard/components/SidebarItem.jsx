// components/SidebarItem.jsx
import React from 'react';

const SidebarItem = ({ icon: Icon, label, active, isDarkMode }) => {
    return (
        <a
            href="#"
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg mb-1 transition-colors ${
                active
                    ? isDarkMode
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-50 text-indigo-600'
                    : isDarkMode
                        ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </a>
    );
};

export default SidebarItem;
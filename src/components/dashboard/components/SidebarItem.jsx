// components/SidebarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, path, active, isDarkMode }) => {
    return (
        <Link
            to={path}
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
        </Link>
    );
};

export default SidebarItem;
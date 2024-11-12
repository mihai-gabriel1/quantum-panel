// components/StatCard.jsx
import React from 'react';

const StatCard = ({ stat, isDarkMode }) => {
    const { title, value, change, icon: Icon } = stat;

    return (
        <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex justify-between">
                <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {title}
                    </p>
                    <p className={`text-2xl font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {value}
                    </p>
                </div>
                <div className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'
                }`}>
                    <Icon className={`h-6 w-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <span className="text-sm text-green-500 font-medium">{change}</span>
                <span className={`text-sm ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    from last month
                </span>
            </div>
        </div>
    );
};

export default StatCard;
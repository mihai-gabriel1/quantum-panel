// sections/ChartSection.jsx
import React from 'react';

const ChartSection = ({ isDarkMode }) => {
    return (
        <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm mb-8`}>
            <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Revenue Overview
            </h2>
            <div className={`h-64 flex items-center justify-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                [Chart Component Would Go Here]
            </div>
        </div>
    );
};

export default ChartSection;
// components/ActivityItem.jsx
import React from 'react';
import { Users, ShoppingCart, FileText } from 'lucide-react';

const ActivityItem = ({ activity, isDarkMode }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'user_registered':
                return Users;
            case 'sale_completed':
                return ShoppingCart;
            case 'report_generated':
                return FileText;
            default:
                return Users;
        }
    };

    const Icon = getIcon(activity.type);

    return (
        <div className={`flex items-center p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
            }`}>
                <Icon className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </div>
            <div className="ml-4">
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {activity.message}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {activity.timestamp}
                </p>
            </div>
        </div>
    );
};

export default ActivityItem;
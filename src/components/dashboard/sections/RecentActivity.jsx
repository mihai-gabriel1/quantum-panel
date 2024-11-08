// sections/RecentActivity.jsx
import React from 'react';
import ActivityItem from '../components/ActivityItem';

const RecentActivity = ({ isDarkMode }) => {
    const activities = [
        {
            type: 'user_registered',
            message: 'New user registered',
            timestamp: '2 minutes ago'
        },
        {
            type: 'sale_completed',
            message: 'New sale completed',
            timestamp: '5 minutes ago'
        },
        {
            type: 'report_generated',
            message: 'Monthly report generated',
            timestamp: '10 minutes ago'
        }
    ];

    return (
        <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Activity
            </h2>
            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        activity={activity}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserPlus, DollarSign, ChartBar, AlertTriangle,
    Settings, Clock, MapPin, X, Bell, Filter, ArrowRight
} from 'lucide-react';

const ActivityBadge = ({ type }) => {
    const badges = {
        user_registered: { icon: UserPlus, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        sale_completed: { icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
        report_generated: { icon: ChartBar, color: 'text-purple-400', bg: 'bg-purple-400/10' },
        system_alert: { icon: AlertTriangle, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        settings_updated: { icon: Settings, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    };

    const { icon: Icon, color, bg } = badges[type] || badges.user_registered;

    return (
        <div className={`p-3 rounded-xl ${bg}`}>
            <Icon className={`h-5 w-5 ${color}`} />
        </div>
    );
};

const ActivityItem = ({ activity, isDarkMode, onSelect }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelect(activity)}
            className={`flex items-center p-4 rounded-xl cursor-pointer transition-colors ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            }`}
        >
            <ActivityBadge type={activity.type} />
            <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.message}
                    </p>
                    {activity.status && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'
                        }`}>
                            {activity.status}
                        </span>
                    )}
                </div>
                <div className="flex items-center mt-1">
                    <Clock className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-1`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {activity.timestamp}
                    </span>
                    {activity.location && (
                        <>
                            <MapPin className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ml-3 mr-1`} />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {activity.location}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ActivityDetails = ({ activity, isDarkMode, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-y-auto`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                    <ActivityBadge type={activity.type} />
                    <div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {activity.message}
                        </h3>
                        <div className="flex items-center mt-1">
                            <Clock className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-1`} />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {activity.timestamp}
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className={`p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                    }`}
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Status Badge */}
                {activity.status && (
                    <div>
                        <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            Status
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            activity.status === 'completed'
                                ? 'bg-green-400/10 text-green-400'
                                : 'bg-yellow-400/10 text-yellow-400'
                        }`}>
                            {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                        </span>
                    </div>
                )}

                {/* Details Section */}
                <div>
                    <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                        Description
                    </h4>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {activity.details}
                        </p>
                    </div>
                </div>

                {/* Location if available */}
                {activity.location && (
                    <div>
                        <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            Location
                        </h4>
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center`}>
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {activity.location}
                            </span>
                        </div>
                    </div>
                )}

                {/* Metadata Grid */}
                {activity.metadata && (
                    <div>
                        <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            Details
                        </h4>
                        <div className={`grid grid-cols-2 gap-4 p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}>
                            {Object.entries(activity.metadata).map(([key, value]) => (
                                <div key={key} className="space-y-1">
                                    <dt className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {key}
                                    </dt>
                                    <dd className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {value}
                                    </dd>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                    {activity.type === 'system_alert' && (
                        <button className={`flex-1 py-2 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors`}>
                            View Update Details
                        </button>
                    )}
                    {activity.type === 'sale_completed' && (
                        <button className={`flex-1 py-2 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors`}>
                            View Transaction
                        </button>
                    )}
                    {activity.type === 'user_registered' && (
                        <button className={`flex-1 py-2 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors`}>
                            View Profile
                        </button>
                    )}
                    <button className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                        isDarkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}>
                        Dismiss
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const RecentActivity = ({ isDarkMode }) => {  // Accept isDarkMode as prop
    const [filter, setFilter] = useState('all');
    const [selectedActivity, setSelectedActivity] = useState(null);

    const activities = [
        {
            type: 'sale_completed',
            message: 'New sale completed',
            timestamp: '2 minutes ago',
            status: 'completed',
            location: 'New York, USA',
            details: 'Premium subscription package purchased by a new enterprise customer.',
            metadata: {
                'Transaction ID': '#TRX-789',
                'Amount': '$599.99',
                'Customer': 'Acme Corp',
                'Payment Method': 'Credit Card'
            }
        },
        {
            type: 'user_registered',
            message: 'New team member joined',
            timestamp: '5 minutes ago',
            location: 'London, UK',
            status: 'pending',
            details: 'New developer joined the platform. Pending team lead approval.',
            metadata: {
                'User ID': '#USR-456',
                'Department': 'Engineering',
                'Role': 'Senior Developer',
                'Team': 'Frontend'
            }
        },
        {
            type: 'report_generated',
            message: 'Monthly analytics report',
            timestamp: '10 minutes ago',
            status: 'completed',
            details: 'Monthly performance analytics report generated for Q3 2024.',
            metadata: {
                'Report ID': '#RPT-123',
                'Type': 'Performance DashboardMetrics',
                'Period': 'Q3 2024',
                'Size': '2.3 MB'
            }
        },
        {
            type: 'system_alert',
            message: 'System update required',
            timestamp: '15 minutes ago',
            status: 'pending',
            details: 'Critical security update available for the main dashboard components.',
            metadata: {
                'Alert ID': '#ALT-789',
                'Priority': 'High',
                'Category': 'Security',
                'Affected Systems': 'Dashboard Core'
            }
        },
        {
            type: 'settings_updated',
            message: 'Security settings updated',
            timestamp: '20 minutes ago',
            status: 'completed',
            location: 'System',
            details: 'Two-factor authentication policy updated for all team members.',
            metadata: {
                'Change ID': '#CHG-567',
                'Changed By': 'Admin',
                'Category': 'Security',
                'Scope': 'Organization-wide'
            }
        }
    ];

    const filteredActivities = activities.filter(activity => {
        if (filter === 'all') return true;
        return activity.status === filter;
    });

    return (
        <div className={`relative p-6 rounded-xl mt-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Recent Activity
                    </h2>
                </div>
                <div className="flex items-center space-x-3">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isDarkMode
                                ? 'bg-gray-700 text-white border-gray-600'
                                : 'bg-gray-100 text-gray-700 border-gray-200'
                        } border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    >
                        <option value="all">All Activities</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
            </div>
            <div className="space-y-4">
                <AnimatePresence>
                    {filteredActivities.map((activity, index) => (
                        <ActivityItem
                            key={index}
                            activity={activity}
                            isDarkMode={isDarkMode}
                            onSelect={setSelectedActivity}
                        />
                    ))}
                </AnimatePresence>
            </div>
            {selectedActivity && (
                <ActivityDetails
                    activity={selectedActivity}
                    isDarkMode={isDarkMode}
                    onClose={() => setSelectedActivity(null)}
                />
            )}
        </div>
    );
};

export default RecentActivity;
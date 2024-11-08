import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';
import { Calendar, TrendingUp, DollarSign, ArrowRight, Filter } from 'lucide-react';

const ChartSection = ({ isDarkMode }) => {
    const [activeChart, setActiveChart] = useState('revenue');
    const [selectedPeriod, setSelectedPeriod] = useState('year');

    // Sample data
    const data = {
        year: [
            { name: 'Jan', revenue: 4000, profit: 2400, orders: 240 },
            { name: 'Feb', revenue: 3000, profit: 1398, orders: 210 },
            { name: 'Mar', revenue: 2000, profit: 9800, orders: 290 },
            { name: 'Apr', revenue: 2780, profit: 3908, orders: 200 },
            { name: 'May', revenue: 1890, profit: 4800, orders: 181 },
            { name: 'Jun', revenue: 2390, profit: 3800, orders: 250 },
            { name: 'Jul', revenue: 3490, profit: 4300, orders: 280 },
            { name: 'Aug', revenue: 4000, profit: 2400, orders: 240 },
            { name: 'Sep', revenue: 3000, profit: 1398, orders: 210 },
            { name: 'Oct', revenue: 2000, profit: 9800, orders: 290 },
            { name: 'Nov', revenue: 2780, profit: 3908, orders: 200 },
            { name: 'Dec', revenue: 3490, profit: 4300, orders: 280 },
        ],
        month: [
            { name: 'Week 1', revenue: 1200, profit: 800, orders: 80 },
            { name: 'Week 2', revenue: 1400, profit: 900, orders: 90 },
            { name: 'Week 3', revenue: 1100, profit: 700, orders: 70 },
            { name: 'Week 4', revenue: 1500, profit: 950, orders: 95 },
        ],
        week: [
            { name: 'Mon', revenue: 200, profit: 120, orders: 12 },
            { name: 'Tue', revenue: 300, profit: 180, orders: 18 },
            { name: 'Wed', revenue: 250, profit: 150, orders: 15 },
            { name: 'Thu', revenue: 280, profit: 170, orders: 17 },
            { name: 'Fri', revenue: 320, profit: 200, orders: 20 },
            { name: 'Sat', revenue: 400, profit: 250, orders: 25 },
            { name: 'Sun', revenue: 380, profit: 230, orders: 23 },
        ],
    };

    const chartTypes = [
        { id: 'revenue', label: 'Revenue', icon: DollarSign, color: '#6366f1' },
        { id: 'profit', label: 'Profit', icon: TrendingUp, color: '#10b981' },
        { id: 'orders', label: 'Orders', icon: Calendar, color: '#f59e0b' },
    ];

    const periods = ['week', 'month', 'year'];

    const getGradientId = (color) => `gradient-${color.replace('#', '')}`;

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300`}
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <motion.div variants={itemVariants} className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}>
                        <TrendingUp className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    </div>
                    <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Performance Analytics
                    </h2>
                </motion.div>

                <div className="flex items-center space-x-4 w-full md:w-auto">
                    {/* Period Selection */}
                    <motion.div variants={itemVariants} className="flex rounded-lg overflow-hidden">
                        {periods.map((period) => (
                            <button
                                key={period}
                                onClick={() => setSelectedPeriod(period)}
                                className={`px-4 py-2 text-sm font-medium transition-colors ${
                                    selectedPeriod === period
                                        ? isDarkMode
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-indigo-100 text-indigo-700'
                                        : isDarkMode
                                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {period.charAt(0).toUpperCase() + period.slice(1)}
                            </button>
                        ))}
                    </motion.div>

                    {/* Filter Button */}
                    <motion.button
                        variants={itemVariants}
                        className={`p-2 rounded-lg transition-colors ${
                            isDarkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        <Filter className="h-5 w-5" />
                    </motion.button>
                </div>
            </div>

            {/* Chart Type Selection */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {chartTypes.map(({ id, label, icon: Icon, color }) => (
                    <motion.button
                        key={id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveChart(id)}
                        className={`p-4 rounded-xl flex items-center space-x-3 transition-all ${
                            activeChart === id
                                ? isDarkMode
                                    ? 'bg-gray-700 border-2 border-indigo-500'
                                    : 'bg-indigo-50 border-2 border-indigo-200'
                                : isDarkMode
                                    ? 'bg-gray-700'
                                    : 'bg-gray-50'
                        }`}
                    >
                        <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${color}20` }}
                        >
                            <Icon className="h-5 w-5" style={{ color }} />
                        </div>
                        <div className="flex-1">
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {label}
                            </p>
                            <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {activeChart === id ? `$${(Math.random() * 10000).toFixed(2)}` : '---'}
                            </p>
                        </div>
                        {activeChart === id && (
                            <ArrowRight className={`h-5 w-5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        )}
                    </motion.button>
                ))}
            </motion.div>

            {/* Main Chart */}
            <motion.div
                variants={itemVariants}
                className="h-80 w-full"
            >
                <ResponsiveContainer width="100%" height="100%">
                    {activeChart === 'revenue' ? (
                        <AreaChart data={data[selectedPeriod]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id={getGradientId('#6366f1')} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                            <XAxis
                                dataKey="name"
                                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                            />
                            <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey={activeChart}
                                stroke="#6366f1"
                                fill={`url(#${getGradientId('#6366f1')})`}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    ) : activeChart === 'profit' ? (
                        <LineChart data={data[selectedPeriod]}>
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                            <XAxis
                                dataKey="name"
                                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                            />
                            <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey={activeChart}
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{ fill: '#10b981', strokeWidth: 2 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    ) : (
                        <BarChart data={data[selectedPeriod]}>
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                            <XAxis
                                dataKey="name"
                                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                            />
                            <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            />
                            <Bar
                                dataKey={activeChart}
                                fill="#f59e0b"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    )}
                </ResponsiveContainer>
            </motion.div>

            {/* Footer Stats */}
            <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
            >
                {[
                    { label: 'Average', value: '$2,845.65', change: '+12.5%' },
                    { label: 'Peak', value: '$4,125.00', change: '+8.3%' },
                    { label: 'Total', value: '$28,545.00', change: '+15.2%' }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    >
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {stat.label}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                            <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {stat.value}
                            </p>
                            <span className="text-green-500 text-sm font-medium">
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ChartSection;
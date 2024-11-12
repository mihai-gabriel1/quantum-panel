import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, BarChart as RechartsBarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    ArrowUpRight, ArrowDownRight, TrendingUp,
    Users, DollarSign, ShoppingCart, Calendar,
    Download, Filter
} from 'lucide-react';

// Reusable Components
const StatCard = ({ title, value, change, icon: Icon, isDarkMode }) => {
    const isPositive = parseFloat(change) > 0;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-sm`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{title}</p>
                    <p className={`text-2xl font-semibold mt-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{value}</p>
                </div>
                <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                    <Icon className={`h-6 w-6 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                </div>
            </div>
            <div className="mt-4 flex items-center">
                {isPositive ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ml-1 ${
                    isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                    {change}
                </span>
                <span className={`text-sm ml-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    vs last period
                </span>
            </div>
        </motion.div>
    );
};

const ChartCard = ({ title, children, isDarkMode }) => (
    <div className={`rounded-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-sm p-6`}>
        <div className="flex justify-between items-center mb-6">
            <h3 className={`font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{title}</h3>
            <div className="flex space-x-2">
                <button className={`p-2 rounded-lg ${
                    isDarkMode
                        ? 'hover:bg-gray-700 text-gray-400'
                        : 'hover:bg-gray-100 text-gray-600'
                }`}>
                    <Filter className="h-4 w-4" />
                </button>
                <button className={`p-2 rounded-lg ${
                    isDarkMode
                        ? 'hover:bg-gray-700 text-gray-400'
                        : 'hover:bg-gray-100 text-gray-600'
                }`}>
                    <Download className="h-4 w-4" />
                </button>
            </div>
        </div>
        {children}
    </div>
);

const DashboardMetrics = ({ isDarkMode }) => {
    const [timeRange, setTimeRange] = useState('Last 7 days');

    // Sample data
    const stats = [
        {
            title: 'Total Revenue',
            value: '$48,294',
            change: '+14.5%',
            icon: DollarSign
        },
        {
            title: 'Active Users',
            value: '2,847',
            change: '+5.2%',
            icon: Users
        },
        {
            title: 'Conversion Rate',
            value: '3.24%',
            change: '-2.1%',
            icon: TrendingUp
        },
        {
            title: 'Total Orders',
            value: '1,438',
            change: '+8.3%',
            icon: ShoppingCart
        }
    ];

    const revenueData = [
        { name: 'Mon', value: 4000 },
        { name: 'Tue', value: 3000 },
        { name: 'Wed', value: 5000 },
        { name: 'Thu', value: 2780 },
        { name: 'Fri', value: 1890 },
        { name: 'Sat', value: 2390 },
        { name: 'Sun', value: 3490 }
    ];

    const trafficData = [
        { name: 'Direct', value: 400 },
        { name: 'Social', value: 300 },
        { name: 'Organic', value: 300 },
        { name: 'Referral', value: 200 }
    ];

    const userActivityData = [
        { name: '00:00', users: 2400, sessions: 4000 },
        { name: '03:00', users: 1398, sessions: 3000 },
        { name: '06:00', users: 9800, sessions: 2000 },
        { name: '09:00', users: 3908, sessions: 2780 },
        { name: '12:00', users: 4800, sessions: 1890 },
        { name: '15:00', users: 3800, sessions: 2390 },
        { name: '18:00', users: 4300, sessions: 3490 },
        { name: '21:00', users: 5300, sessions: 3490 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className={`text-2xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Analytics Dashboard
                    </h1>
                    <p className={`mt-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Track and analyze your key metrics
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className={`flex items-center px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                    }`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        {timeRange}
                    </button>
                    <button className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700`}>
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        {...stat}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <ChartCard title="Revenue Overview" isDarkMode={isDarkMode}>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                                <XAxis
                                    dataKey="name"
                                    stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                                />
                                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#6366F1"
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* User Activity Chart */}
                <ChartCard title="User Activity" isDarkMode={isDarkMode}>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={userActivityData}>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                                <XAxis
                                    dataKey="name"
                                    stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                                />
                                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="users"
                                    stroke="#6366F1"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="sessions"
                                    stroke="#10B981"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* Traffic Sources */}
                <ChartCard title="Traffic Sources" isDarkMode={isDarkMode}>
                    <div className="h-80 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={trafficData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {trafficData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* Conversion Rates */}
                <ChartCard title="Conversion Rates" isDarkMode={isDarkMode}>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
                                <XAxis
                                    dataKey="name"
                                    stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
                                />
                                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Bar
                                    dataKey="value"
                                    fill="#6366F1"
                                    radius={[4, 4, 0, 0]}
                                />
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
};

export default DashboardMetrics;
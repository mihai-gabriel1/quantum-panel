import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ stat, isDarkMode, index }) => {
    const { title, value, change, icon: Icon, trend, sparklineData } = stat;
    const isPositive = !change.startsWith('-');

    // Animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1
            }
        }
    };

    const iconVariants = {
        idle: { scale: 1 },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 }
        }
    };

    const numberVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.2
            }
        }
    };

    // Generate sparkline points
    const points = sparklineData.map((value, i) =>
        `${(i / (sparklineData.length - 1)) * 100},${100 - (value / Math.max(...sparklineData)) * 100}`
    ).join(' ');

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-2xl ${
                isDarkMode
                    ? 'bg-gray-800 shadow-lg shadow-indigo-500/10'
                    : 'bg-white shadow-lg shadow-indigo-200/20'
            } relative overflow-hidden group`}
        >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {title}
                        </p>
                        <motion.p
                            variants={numberVariants}
                            className={`text-3xl font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                        >
                            {value}
                        </motion.p>
                    </div>
                    <div
                        className={`p-3 rounded-xl ${
                            isDarkMode
                                ? 'bg-gray-700 text-indigo-400'
                                : 'bg-indigo-50 text-indigo-600'
                        }`}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                </div>

                {/* Sparkline */}
                <div className="h-12 w-full mb-4">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                            d={`M 0,100 L ${points} L 100,100`}
                            fill={`${isDarkMode ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.1)'}`}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                        />
                        <motion.path
                            d={`M 0,${100 - (sparklineData[0] / Math.max(...sparklineData)) * 100} L ${points}`}
                            fill="none"
                            stroke={isPositive ? '#4F46E5' : '#EF4444'}
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                        />
                    </svg>
                </div>

                {/* Footer stats */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className={`flex items-center ${
                                isPositive ? 'text-green-500' : 'text-red-500'
                            } font-medium`}
                        >
                            {isPositive ? (
                                <ArrowUp className="h-4 w-4 mr-1" />
                            ) : (
                                <ArrowDown className="h-4 w-4 mr-1" />
                            )}
                            <span>{change}</span>
                        </motion.div>
                        <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            vs last month
                        </span>
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className={`text-sm font-medium ${
                            trend === 'up' ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {trend === 'up' ? '↗︎' : '↘︎'} {stat.trendValue}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const StatsGrid = ({ isDarkMode }) => {
    const stats = [
        {
            title: 'Total Revenue',
            value: '$54,239',
            change: '+12.5%',
            icon: DollarSign,
            trend: 'up',
            trendValue: '23.5%',
            sparklineData: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        },
        {
            title: 'Active Users',
            value: '2,435',
            change: '+18.2%',
            icon: Users,
            trend: 'up',
            trendValue: '12.2%',
            sparklineData: [45, 52, 49, 65, 78, 82, 80, 87, 91]
        },
        {
            title: 'Total Sales',
            value: '1,234',
            change: '-8.1%',
            icon: ShoppingCart,
            trend: 'down',
            trendValue: '4.3%',
            sparklineData: [60, 55, 70, 65, 58, 50, 48, 45, 42]
        },
        {
            title: 'Growth Rate',
            value: '24.5%',
            change: '+2.3%',
            icon: TrendingUp,
            trend: 'up',
            trendValue: '8.3%',
            sparklineData: [20, 25, 30, 35, 32, 40, 45, 50, 55]
        }
    ];

    return (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    stat={stat}
                    isDarkMode={isDarkMode}
                    index={index}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
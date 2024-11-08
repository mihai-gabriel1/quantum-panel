// sections/StatsGrid.jsx
import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';

const StatsGrid = ({ isDarkMode }) => {
    const stats = [
        { title: 'Total Revenue', value: '$54,239', change: '+12.5%', icon: DollarSign },
        { title: 'Active users', value: '2,435', change: '+18.2%', icon: Users },
        { title: 'Total Sales', value: '1,234', change: '+8.1%', icon: ShoppingCart },
        { title: 'Growth Rate', value: '24.5%', change: '+2.3%', icon: TrendingUp },
    ];

    return (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    stat={stat}
                    isDarkMode={isDarkMode}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
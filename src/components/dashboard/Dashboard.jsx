// Dashboard.jsx
import React, { useState } from 'react';

// Import layout components
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

// Import section components
import StatsGrid from './sections/StatsGrid';
import ChartSection from './sections/ChartSection';
import RecentActivity from './sections/RecentActivity';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                isDarkMode={isDarkMode}
            />

            {/* Main Content */}
            <div className={`md:ml-64 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {/* Header */}
                <Header
                    setIsSidebarOpen={setIsSidebarOpen}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />

                {/* Main Content */}
                <main className="pt-16 px-4 md:px-6 lg:px-8 py-6">
                    {/* Stats Grid */}
                    <StatsGrid isDarkMode={isDarkMode} />

                    {/* Chart Section */}
                    <ChartSection isDarkMode={isDarkMode} />

                    {/* Recent Activity */}
                    <RecentActivity isDarkMode={isDarkMode} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
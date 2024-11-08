// components/dashboard/Dashboard.jsx
import React from 'react';
import StatsGrid from './sections/StatsGrid';
import ChartSection from './sections/ChartSection';
import RecentActivity from './sections/RecentActivity';

const Dashboard = ({isDarkMode}) => {
    return (
        <>
            <StatsGrid isDarkMode={isDarkMode}/>
            <ChartSection isDarkMode={isDarkMode}/>
            <RecentActivity isDarkMode={isDarkMode}/>
        </>
    );
};

export default Dashboard;
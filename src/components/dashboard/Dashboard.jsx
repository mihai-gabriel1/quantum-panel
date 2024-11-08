import React, { useState, useEffect } from 'react';

// Import layout components
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

// Import section components
import StatsGrid from './sections/StatsGrid';
import ChartSection from './sections/ChartSection';
import RecentActivity from './sections/RecentActivity';

// Cookie utility functions
const setCookie = (name, value, days = 365) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
};

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize dark mode from cookie or system preference
        const cookieValue = getCookie('darkMode');
        if (cookieValue !== null) {
            return cookieValue === 'true';
        }
        // If no cookie exists, check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Update cookie whenever dark mode changes
    useEffect(() => {
        setCookie('darkMode', isDarkMode);
        // Also update the document class for broader dark mode support
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if there's no cookie set
            if (getCookie('darkMode') === null) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

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
                    setIsDarkMode={handleDarkModeToggle}
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
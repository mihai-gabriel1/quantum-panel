// DashboardLayout.jsx
import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

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

const DashboardLayout = ({children}) => {
    const isMobileScreen = () => window.innerWidth < 768;

    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobileScreen());
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // First check cookie
        const cookieValue = getCookie('darkMode');
        if (cookieValue !== null) {
            return cookieValue === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        setCookie('darkMode', isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleResize = () => {
            if (isMobileScreen()) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobileScreen()) {
            setIsSidebarOpen(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (getCookie('darkMode') === null) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleDarkModeToggle = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        setCookie('darkMode', newDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                isDarkMode={isDarkMode}
                setIsDarkMode={handleDarkModeToggle}
            />

            <div className={`md:ml-64 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <Header
                    setIsSidebarOpen={setIsSidebarOpen}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={handleDarkModeToggle}
                />

                <main className="pt-0 px-4 md:px-6 lg:px-8 py-6">
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, {isDarkMode});
                    })}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
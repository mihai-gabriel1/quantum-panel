import React, {useEffect, useState, useRef} from 'react';
import {Menu, Search, Bell, Sun, Moon, MessageCircle, CheckCircle, AlertTriangle, XCircle} from 'lucide-react';

const Header = ({setIsSidebarOpen, isDarkMode, setIsDarkMode}) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const notificationsRef = useRef(null);

    useEffect(() => {
        const htmlElement = document.documentElement;

        if (isDarkMode) {
            htmlElement.classList.add('dark-root');
            htmlElement.classList.remove('light-root');
        } else {
            htmlElement.classList.add('light-root');
            htmlElement.classList.remove('dark-root');
        }

        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            htmlElement.classList.remove('dark-root', 'light-root');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDarkMode]);

    const notifications = [
        {
            id: 1,
            type: 'message',
            message: "You have a new message from John.",
            time: "2 mins ago",
            category: "Messages",
            user: {name: "John Doe", avatar: "/api/placeholder/40/40"}
        },
        {
            id: 2,
            type: 'payment',
            message: "Invoice #1032 was paid.",
            time: "5 mins ago",
            category: "Finance",
            user: {name: "System", avatar: "/api/placeholder/40/40"}
        },
        {
            id: 3,
            type: 'comment',
            message: "New comment on your post.",
            time: "10 mins ago",
            category: "Social",
            user: {name: "Alice", avatar: "/api/placeholder/40/40"}
        },
        {
            id: 4,
            type: 'maintenance',
            message: "Server maintenance tonight.",
            time: "30 mins ago",
            category: "Alerts",
            user: {name: "Admin", avatar: "/api/placeholder/40/40"}
        },
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'message':
                return <MessageCircle className="h-5 w-5 text-blue-500"/>;
            case 'payment':
                return <CheckCircle className="h-5 w-5 text-green-500"/>;
            case 'comment':
                return <AlertTriangle className="h-5 w-5 text-yellow-500"/>;
            case 'maintenance':
                return <AlertTriangle className="h-5 w-5 text-red-500"/>;
            default:
                return <Bell className="h-5 w-5 text-gray-500"/>;
        }
    };

    return (
        <header className={` left-0 md:left-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} z-10`}>
            <div className="flex items-center justify-between p-4">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className={`md:hidden ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Menu className="h-6 w-6"/>
                </button>

                <div className="flex items-center flex-1 px-4 space-x-4">
                    <div className={`flex items-center max-w-[205px] flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                        <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}/>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`ml-2 bg-transparent border-none focus:outline-none flex-1 ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative flex" ref={notificationsRef}>
                        <button
                            className={`relative ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        >
                            <Bell className="h-6 w-6"/>
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"/>
                        </button>

                        {isNotificationsOpen && (
                            <div className={`z-50 absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
                                </div>
                                <div className="max-h-96 overflow-y-auto">
                                    {notifications.map((notification) => (
                                        <div
                                            key={notification.id}
                                            className={`p-4 border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer`}
                                        >
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    {getNotificationIcon(notification.type)}
                                                </div>
                                                <div className="ml-3 flex-1">
                                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                        {notification.message}
                                                    </p>
                                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 text-center">
                                    <button className={`text-sm font-medium ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                                        View all notifications
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`hidden md:block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        {isDarkMode ? <Sun className="h-6 w-6"/> : <Moon className="h-6 w-6"/>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, {useEffect, useState} from 'react';
import { Menu, Search, Bell, Sun, Moon, MessageCircle, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const Header = ({ setIsSidebarOpen, isDarkMode, setIsDarkMode }) => {
    useEffect(() => {
        // Get both html and body elements
        const htmlElement = document.documentElement;

        if (isDarkMode) {
            htmlElement.classList.add('dark-root');
            htmlElement.classList.remove('light-root');
        } else {
            htmlElement.classList.add('light-root');
            htmlElement.classList.remove('dark-root');
        }

        // Cleanup
        return () => {
            htmlElement.classList.remove('dark-root', 'light-root');
        };
    }, [isDarkMode]);

    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const notifications = [
        { id: 1, type: 'message', message: "You have a new message from John.", time: "2 mins ago", category: "Messages", user: { name: "John Doe", avatar: "https://i.pravatar.cc/40?img=1" } },
        { id: 2, type: 'payment', message: "Invoice #1032 was paid.", time: "5 mins ago", category: "Finance", user: { name: "System", avatar: "https://i.pravatar.cc/40?img=2" } },
        { id: 3, type: 'comment', message: "New comment on your post.", time: "10 mins ago", category: "Social", user: { name: "Alice", avatar: "https://i.pravatar.cc/40?img=3" } },
        { id: 4, type: 'maintenance', message: "Server maintenance tonight.", time: "30 mins ago", category: "Alerts", user: { name: "Admin", avatar: "https://i.pravatar.cc/40?img=4" } },
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'message': return <MessageCircle className="h-5 w-5 text-blue-500" />;
            case 'payment': return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'comment': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            case 'maintenance': return <AlertTriangle className="h-5 w-5 text-red-500" />;
            default: return <Bell className="h-5 w-5 text-gray-500" />;
        }
    };

    return (
        <header className={`left-0 md:left-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between p-4">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className={`md:hidden ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Menu className="h-6 w-6" />
                </button>

                <div className="flex items-center flex-1 px-4 space-x-4">
                    <div className={`flex items-center max-w-md flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                        <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`ml-2 bg-transparent border-none focus:outline-none flex-1 ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        className={`relative ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    >
                        <Bell className="h-6 w-6"/>
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"/>
                        {/* Notification dropdown code */}
                    </button>

                    {/* Hide dark mode toggle on mobile, show on desktop */}
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

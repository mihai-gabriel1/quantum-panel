import React, { useState } from 'react';
import { Menu, Search, Bell, Sun, Moon, MessageCircle, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const Header = ({ setIsSidebarOpen, isDarkMode, setIsDarkMode }) => {
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
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400" />
                        {isNotificationsOpen && (
                            <div className={`absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'text-gray-900'}`}>
                                <div className="p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
                                    <h4 className="font-semibold">Notifications</h4>
                                    <p className="text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}">Stay updated with recent activity</p>
                                </div>
                                <div className="max-h-60 overflow-y-auto">
                                    {notifications.length > 0 ? (
                                        notifications.map(notification => (
                                            <div key={notification.id} className={`flex items-start p-3 hover:bg-gray-100 transition-colors ${isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
                                                <img src={notification.user.avatar} alt={notification.user.name} className="h-10 w-10 rounded-full mr-3" />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-medium">{notification.user.name}</p>
                                                        <span className="text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}">{notification.time}</span>
                                                    </div>
                                                    <p className={`text-sm ${notification.type === 'alert' ? 'text-red-500' : notification.type === 'message' ? 'text-blue-500' : 'text-gray-800'}`}>{notification.message}</p>
                                                    <div className="text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}">{notification.category}</div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    {getNotificationIcon(notification.type)}
                                                    <XCircle className="h-5 w-5 text-gray-500 cursor-pointer" onClick={() => console.log(`Dismissed notification ${notification.id}`)} />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-3 text-center text-gray-500">No notifications</div>
                                    )}
                                </div>
                                <div className="p-3 text-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} text-sm">
                                    <button className="text-blue-500 hover:underline">See all notifications</button>
                                </div>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

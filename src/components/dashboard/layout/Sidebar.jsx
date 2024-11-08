// layout/Sidebar.jsx
import React from 'react';
import { BarChart3, X, Home, Users, Settings, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SidebarItem from '../components/SidebarItem';

const Sidebar = ({ isOpen, setIsOpen, isDarkMode }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: Users, label: 'Users', path: '/users' },
        { icon: BarChart3, label: 'Analytics', path: '/analytics' },
        { icon: Settings, label: 'Settings', path: '/settings' },
        { icon: HelpCircle, label: 'Help', path: '/help' },
    ];

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-full transition-transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
            } w-64`}
        >
            {/* Logo */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <BarChart3 className={`h-8 w-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Quantum Panel
                    </span>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className={`md:hidden ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <X className="h-6 w-6" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="mt-4 px-2">
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        {...item}
                        active={location.pathname === item.path}
                        isDarkMode={isDarkMode}
                        onClick={() => navigate(item.path)}
                    />
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
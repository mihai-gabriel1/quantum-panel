import React from 'react';
import { Activity, Server, Shield, Database } from 'lucide-react';

const QuickActions = ({ isDarkMode, onAction }) => {
    const actions = [
        {
            label: 'Run Diagnostics',
            icon: Activity,
            action: 'diagnostics',
            color: 'blue',
            description: 'Analyze system performance'
        },
        {
            label: 'Scale Resources',
            icon: Server,
            action: 'scale',
            color: 'green',
            description: 'Adjust system resources'
        },
        {
            label: 'Security Scan',
            icon: Shield,
            action: 'security',
            color: 'purple',
            description: 'Check for vulnerabilities'
        }
    ];

    return (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-4">
                {actions.map(({ label, icon: Icon, action, color, description }) => (
                    <button
                        key={action}
                        onClick={() => onAction(action)}
                        className={`
                            p-4 rounded-lg transition-all duration-200
                            ${isDarkMode ? 'bg-gray-800 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}
                            flex flex-col items-center text-center
                        `}
                    >
                        <Icon className={`h-8 w-8 mb-2 text-${color}-500`} />
                        <span className="font-medium">{label}</span>
                        <span className="text-xs opacity-75 mt-1">{description}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
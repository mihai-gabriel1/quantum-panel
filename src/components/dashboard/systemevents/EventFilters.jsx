import React, { useState } from 'react';
import { Activity, Shield, Server, Database } from 'lucide-react';

const EventFilters = ({ isDarkMode, onFilterChange }) => {
    const [activeFilters, setActiveFilters] = useState({
        severity: [],
        type: []
    });

    const filterOptions = {
        severity: [
            { label: 'Critical', value: 'critical', color: 'red' },
            { label: 'High', value: 'high', color: 'orange' },
            { label: 'Medium', value: 'medium', color: 'yellow' },
            { label: 'Low', value: 'low', color: 'blue' }
        ],
        type: [
            { label: 'Traffic', value: 'traffic', icon: Activity },
            { label: 'Security', value: 'security', icon: Shield },
            { label: 'Server', value: 'server', icon: Server },
            { label: 'Database', value: 'database', icon: Database }
        ]
    };

    const toggleFilter = (category, value) => {
        setActiveFilters(prev => {
            const newFilters = {
                ...prev,
                [category]: prev[category].includes(value)
                    ? prev[category].filter(v => v !== value)
                    : [...prev[category], value]
            };
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    return (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Severity</h3>
                <div className="flex w-full flex-wrap gap-1">
                    {filterOptions.severity.map(({ label, value, color }) => (
                        <button
                            key={value}
                            onClick={() => toggleFilter('severity', value)}
                            className={`
                                px-3 py-1 rounded-full text-sm
                                ${activeFilters.severity.includes(value)
                                ? `bg-${color}-500 text-white`
                                : `bg-${color}-100 text-${color}-700`
                            }
                            `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Event Type</h3>
                <div className="flex flex-wrap gap-2">
                    {filterOptions.type.map(({ label, value, icon: Icon }) => (
                        <button
                            key={value}
                            onClick={() => toggleFilter('type', value)}
                            className={`
                                px-3 py-1 rounded-full text-sm flex items-center
                                ${activeFilters.type.includes(value)
                                ? 'bg-blue-500 text-white'
                                : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                            }
                            `}
                        >
                            <Icon className="h-4 w-4 mr-1" />
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventFilters;
import React from 'react';
import { Clock, Activity, TrendingUp, TrendingDown } from 'lucide-react';

const MetricsPanel = ({ displayedData, isDarkMode }) => {
    const calculateMetrics = () => {
        const values = displayedData.map(d => d.value);
        const recent = values.slice(-5);

        return {
            current: values[values.length - 1],
            average: Math.round(values.reduce((a, b) => a + b, 0) / values.length),
            peak: Math.max(...values),
            trend: Math.round(
                ((recent[recent.length - 1] - recent[0]) / recent[0]) * 100
            )
        };
    };

    const metrics = calculateMetrics();

    return (
        <div className="grid sm:grid-cols-4 gap-4 mt-6">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Current</div>
                    <Clock className="h-4 w-4 opacity-50" />
                </div>
                <div className="mt-2">
                    <div className="text-2xl font-bold">{metrics.current}ms</div>
                    <div className="text-xs opacity-75">Response Time</div>
                </div>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Average</div>
                    <Activity className="h-4 w-4 opacity-50" />
                </div>
                <div className="mt-2">
                    <div className="text-2xl font-bold">{metrics.average}ms</div>
                    <div className="text-xs opacity-75">Mean Response</div>
                </div>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Peak</div>
                    <TrendingUp className="h-4 w-4 opacity-50" />
                </div>
                <div className="mt-2">
                    <div className="text-2xl font-bold">{metrics.peak}ms</div>
                    <div className="text-xs opacity-75">Highest Value</div>
                </div>
            </div>

            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Trend</div>
                    {metrics.trend > 0 ? (
                        <TrendingUp className="h-4 w-4 text-red-500" />
                    ) : (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                    )}
                </div>
                <div className="mt-2">
                    <div className="text-2xl font-bold">{Math.abs(metrics.trend)}%</div>
                    <div className="text-xs opacity-75">
                        {metrics.trend > 0 ? 'Increase' : 'Decrease'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricsPanel;
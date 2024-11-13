import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const HistoricalComparison = ({ displayedData, isDarkMode }) => {
    const [comparisonPeriod, setComparisonPeriod] = useState('1h');

    const calculateComparison = () => {
        const currentValues = displayedData.slice(-4).map(d => d.value);
        const currentAvg = currentValues.reduce((a, b) => a + b, 0) / currentValues.length;

        // Simulate historical data (in real app, this would come from API)
        const historicalAvg = currentAvg * (Math.random() * 0.4 + 0.8); // ±20% variation

        const change = ((currentAvg - historicalAvg) / historicalAvg) * 100;

        return {
            current: Math.round(currentAvg),
            historical: Math.round(historicalAvg),
            percentChange: Math.round(change),
            improved: change <= 0
        };
    };

    const comparison = calculateComparison();

    return (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="max-sm:flex-col flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Historical Comparison</h3>
                <select
                    value={comparisonPeriod}
                    onChange={(e) => setComparisonPeriod(e.target.value)}
                    className={`rounded border p-1 ${
                        isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                    }`}
                >
                    <option value="1h">vs Last Hour</option>
                    <option value="24h">vs Yesterday</option>
                    <option value="7d">vs Last Week</option>
                </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <div className="text-sm font-medium mb-1">Current Average</div>
                    <div className="text-2xl font-bold">{comparison.current}ms</div>
                </div>

                <div className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <div className="text-sm font-medium mb-1">Historical Average</div>
                    <div className="text-2xl font-bold">{comparison.historical}ms</div>
                </div>
            </div>

            <div className={`mt-4 p-3 rounded-lg flex items-center justify-between ${
                comparison.improved
                    ? isDarkMode ? 'bg-green-900/50' : 'bg-green-50'
                    : isDarkMode ? 'bg-red-900/50' : 'bg-red-50'
            }`}>
                <span className="font-medium">
                    {comparison.improved ? 'Improved by' : 'Degraded by'}
                </span>
                <span className={`text-lg font-bold ${
                    comparison.improved
                        ? 'text-green-500'
                        : 'text-red-500'
                }`}>
                    {Math.abs(comparison.percentChange)}%
                </span>
            </div>
        </div>
    );
};

export default HistoricalComparison;
import React from 'react';
import { Brain, AlertCircle, TrendingUp } from 'lucide-react';

const AiInsightsPanel = ({ displayedData, isDarkMode }) => {
    const generateInsights = () => {
        const anomalies = displayedData.filter(point => point.isAnomaly);
        const insights = [];

        // Pattern Detection
        if (anomalies.length >= 2) {
            const timeDiffs = [];
            for (let i = 1; i < anomalies.length; i++) {
                const time1 = new Date(`2024-01-01 ${anomalies[i-1].timestamp}`);
                const time2 = new Date(`2024-01-01 ${anomalies[i].timestamp}`);
                timeDiffs.push(time2 - time1);
            }

            const avgTimeDiff = timeDiffs.reduce((a, b) => a + b, 0) / timeDiffs.length;
            if (avgTimeDiff > 0) {
                insights.push({
                    type: 'pattern',
                    icon: Brain,
                    title: 'Pattern Detected',
                    description: `Events occur approximately every ${Math.round(avgTimeDiff / 60000)} minutes`
                });
            }
        }

        // Severity Analysis
        const criticalEvents = anomalies.filter(a => a.value > 300);
        if (criticalEvents.length > 0) {
            insights.push({
                type: 'severity',
                icon: AlertCircle,
                title: 'Critical Events Analysis',
                description: `${criticalEvents.length} critical events detected in the last hour`
            });
        }

        // Trend Analysis
        const recentValues = displayedData.slice(-5).map(d => d.value);
        const avgRecent = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
        const trend = avgRecent > 200 ? 'increasing' : 'stable';
        insights.push({
            type: 'trend',
            icon: TrendingUp,
            title: 'Trend Analysis',
            description: `System load is ${trend} based on recent values`
        });

        return insights;
    };

    const insights = generateInsights();

    return (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
            <div className="space-y-4">
                {insights.map((insight, index) => {
                    const Icon = insight.icon;
                    return (
                        <div key={index} className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${
                                isDarkMode ? 'bg-gray-600' : 'bg-white'
                            }`}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-medium">{insight.title}</h4>
                                <p className="text-sm opacity-75">{insight.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AiInsightsPanel
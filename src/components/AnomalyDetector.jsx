import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { AlertCircle, TrendingUp, TrendingDown, Bell, BellOff, Settings, Download, Share2, Filter } from 'lucide-react';

const AnomalyDetector = ({ isDarkMode }) => {
    const [data, setData] = useState([
        { timestamp: '09:00', value: 145, isAnomaly: false, threshold: 200 },
        { timestamp: '10:00', value: 152, isAnomaly: false, threshold: 200 },
        { timestamp: '11:00', value: 148, isAnomaly: false, threshold: 200 },
        { timestamp: '12:00', value: 289, isAnomaly: true, threshold: 200 },
        { timestamp: '13:00', value: 146, isAnomaly: false, threshold: 200 },
        { timestamp: '14:00', value: 351, isAnomaly: true, threshold: 200 },
        { timestamp: '15:00', value: 147, isAnomaly: false, threshold: 200 },
        { timestamp: '16:00', value: 143, isAnomaly: false, threshold: 200 }
    ]);

    const [activeAnomalies, setActiveAnomalies] = useState([]);
    const [sensitivity, setSensitivity] = useState(2);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
    const [showSettings, setShowSettings] = useState(false);
    const [anomalyStats, setAnomalyStats] = useState({
        total: 0,
        lastHour: 0,
        trend: 'stable'
    });

    // Adaptive threshold calculation
    const calculateThreshold = (dataPoints) => {
        const mean = dataPoints.reduce((acc, point) => acc + point.value, 0) / dataPoints.length;
        const stdDev = Math.sqrt(
            dataPoints.reduce((acc, point) => acc + Math.pow(point.value - mean, 2), 0) / dataPoints.length
        );
        return mean + (stdDev * sensitivity);
    };

    const detectAnomalies = (newValue, recentData) => {
        const threshold = calculateThreshold(recentData);
        return newValue > threshold;
    };

    const addDataPoint = () => {
        const lastValue = data[data.length - 1].value;
        const newValue = lastValue + (Math.random() > 0.8 ? 100 : Math.random() * 10 - 5);
        const newTimestamp = new Date(new Date().getTime() + 60000).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });

        const recentData = data.slice(-10);
        const threshold = calculateThreshold(recentData);
        const isAnomaly = detectAnomalies(newValue, recentData);

        if (isAnomaly && notificationsEnabled) {
            showNotification(newValue, newTimestamp);
        }

        setData(prev => [...prev.slice(1), {
            timestamp: newTimestamp,
            value: Math.round(newValue),
            isAnomaly,
            threshold
        }]);
    };

    const showNotification = (value, timestamp) => {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Anomaly Detected', {
                body: `Unusual value detected: ${value} at ${timestamp}`,
                icon: '/path-to-your-icon.png'
            });
        }
    };

    useEffect(() => {
        const anomalies = data.filter(point => point.isAnomaly);
        setActiveAnomalies(anomalies);

        setAnomalyStats({
            total: anomalies.length,
            lastHour: anomalies.filter(a => {
                const timestamp = new Date();
                const anomalyTime = new Date();
                const [hours, minutes] = a.timestamp.split(':');
                anomalyTime.setHours(parseInt(hours), parseInt(minutes));
                return (timestamp - anomalyTime) <= 3600000;
            }).length,
            trend: anomalies.length > 3 ? 'increasing' : 'stable'
        });
    }, [data]);

    useEffect(() => {
        const interval = setInterval(addDataPoint, 3000);
        return () => clearInterval(interval);
    }, [notificationsEnabled]);

    useEffect(() => {
        if ('Notification' in window) {
            Notification.requestPermission();
        }
    }, []);

    const handleExport = () => {
        const csvContent = 'data:text/csv;charset=utf-8,' +
            'Timestamp,Value,Is Anomaly\n' +
            data.map(row => `${row.timestamp},${row.value},${row.isAnomaly}`).join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'anomaly_data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`mt-8 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-semibold">Real-Time Anomaly Detection</h2>
                        <div className="flex items-center space-x-2">
                            {notificationsEnabled ? (
                                <Bell className="h-5 w-5 cursor-pointer text-blue-500"
                                      onClick={() => setNotificationsEnabled(false)} />
                            ) : (
                                <BellOff className="h-5 w-5 cursor-pointer text-gray-500"
                                         onClick={() => setNotificationsEnabled(true)} />
                            )}
                            <Settings className="h-5 w-5 cursor-pointer"
                                      onClick={() => setShowSettings(!showSettings)} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Download className="h-5 w-5 cursor-pointer" onClick={handleExport} />
                        <Share2 className="h-5 w-5 cursor-pointer" />
                        <div className="text-sm">
                            Last updated: {data[data.length - 1].timestamp}
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Sensitivity</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="0.5"
                                value={sensitivity}
                                onChange={(e) => setSensitivity(parseFloat(e.target.value))}
                                className="w-48"
                            />
                            <span className="ml-2 text-sm">{sensitivity}</span>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Time Range</label>
                            <select
                                value={selectedTimeRange}
                                onChange={(e) => setSelectedTimeRange(e.target.value)}
                                className={`rounded border p-1 ${isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'}`}
                            >
                                <option value="1h">Last Hour</option>
                                <option value="4h">Last 4 Hours</option>
                                <option value="24h">Last 24 Hours</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Total Anomalies</div>
                    <div className="text-2xl font-bold">{anomalyStats.total}</div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Last Hour</div>
                    <div className="text-2xl font-bold">{anomalyStats.lastHour}</div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Trend</div>
                    <div className="text-2xl font-bold flex items-center">
                        {anomalyStats.trend}
                        {anomalyStats.trend === 'increasing' ? (
                            <TrendingUp className="h-6 w-6 ml-2 text-red-500" />
                        ) : (
                            <TrendingDown className="h-6 w-6 ml-2 text-green-500" />
                        )}
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#555' : '#ccc'} />
                        <XAxis dataKey="timestamp" stroke={isDarkMode ? '#ccc' : '#000'} />
                        <YAxis stroke={isDarkMode ? '#ccc' : '#000'} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: isDarkMode ? '#1f2937' : 'white',
                                border: 'none',
                                borderRadius: '0.5rem',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#2563eb"
                            fill="url(#valueGradient)"
                            dot={(props) => {
                                const { cx, cy, payload } = props;
                                if (payload.isAnomaly) {
                                    return (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={6}
                                            fill="#ef4444"
                                            stroke="none"
                                        />
                                    );
                                }
                                return null;
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="threshold"
                            stroke="#ef4444"
                            strokeDasharray="5 5"
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Anomaly Alerts */}
            {activeAnomalies.length > 0 && (
                <div className="space-y-2">
                    {activeAnomalies.map((anomaly, index) => (
                        <div
                            key={index}
                            className={`flex items-center p-4 border rounded-md ${
                                isDarkMode ? 'bg-red-800/50 text-red-100 border-red-600' : 'bg-red-50 border-red-200 text-red-700'
                            }`}
                        >
                            <AlertCircle className="h-4 w-4 mr-2" />
                            <span>
                                Anomaly detected at {anomaly.timestamp} - Value: {anomaly.value}
                                {anomaly.value > data[data.indexOf(anomaly) - 1]?.value ? (
                                    <TrendingUp className="h-4 w-4 inline ml-2 text-red-500" />
                                ) : (
                                    <TrendingDown className="h-4 w-4 inline ml-2 text-red-500" />
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="mt-4 text-sm opacity-75">
                System automatically detects anomalies using adaptive thresholds • Sensitivity: {sensitivity}σ
            </div>
        </div>
    );
};

export default AnomalyDetector;
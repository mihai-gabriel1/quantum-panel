import React, {useState, useEffect} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area} from 'recharts';
import {AlertCircle, TrendingUp, TrendingDown, Bell, BellOff, Settings, Download, Share2} from 'lucide-react';
import Swal from 'sweetalert2';
import EventDetailsModal from "./EventDetailsModal.jsx";
import MetricsPanel from "./MetricsPanel.jsx";
import AiInsightsPanel from "./AiInsightsPanel.jsx";
import QuickActions from "./QuickActions.jsx";
import HistoricalComparison from "./HistoricalComparision.jsx";
import EventFilters from "./EventFilters.jsx";

const SystemEvents = ({isDarkMode}) => {
    const severityLevels = {
        CRITICAL: {value: 400, color: 'red'},
        HIGH: {value: 300, color: 'orange'},
        MEDIUM: {value: 200, color: 'yellow'},
        LOW: {value: 150, color: 'blue'}
    };

    const initialData = [
        {timestamp: '09:00', value: 145, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '09:15', value: 152, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '09:30', value: 148, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '09:45', value: 289, isAnomaly: true, threshold: 200, description: "Sudden traffic spike"},
        {timestamp: '10:00', value: 146, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '10:15', value: 351, isAnomaly: true, threshold: 200, description: "Server overload detected"},
        {timestamp: '10:30', value: 147, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '10:45', value: 143, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '11:00', value: 420, isAnomaly: true, threshold: 200, description: "Potential security breach"},
        {timestamp: '11:15', value: 145, isAnomaly: false, threshold: 200, description: null},
        {timestamp: '11:30', value: 380, isAnomaly: true, threshold: 200, description: "Database connection spike"},
        {timestamp: '11:45', value: 150, isAnomaly: false, threshold: 200, description: null}
    ];

    const [displayedData, setDisplayedData] = useState([initialData[0]]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [activeAnomalies, setActiveAnomalies] = useState([]);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [showSettings, setShowSettings] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [anomalyStats, setAnomalyStats] = useState({
        total: 0,
        lastHour: 0,
        trend: 'stable'
    });

    const showSwalNotification = (anomaly) => {
        const icon = anomaly.value > 300 ? 'error' : 'warning';
        const title = anomaly.value > 300 ? 'Critical System Event!' : 'System Event';

        Swal.fire({
            title: title,
            text: `${anomaly.description || 'Unusual value detected'} (Value: ${anomaly.value})`,
            icon: icon,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            background: isDarkMode ? '#1f2937' : 'white',
            color: isDarkMode ? 'white' : 'black',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    };

    // Sequential data addition
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < initialData.length) {
                const newDataPoint = initialData[currentIndex];
                setDisplayedData(prev => [...prev, newDataPoint]);

                if (newDataPoint.isAnomaly) {
                    if (notificationsEnabled) {
                        showSwalNotification(newDataPoint);
                    }
                }

                setCurrentIndex(prev => prev + 1);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, notificationsEnabled]);

    // Update stats
    useEffect(() => {
        const anomalies = displayedData.filter(point => point.isAnomaly);
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
            trend: anomalies.length >= 2 ? 'increasing' : 'stable'
        });
    }, [displayedData]);

    const handleExport = () => {
        const csvContent = 'data:text/csv;charset=utf-8,' +
            'Timestamp,Value,Is Event,Description\n' +
            displayedData.map(row =>
                `${row.timestamp},${row.value},${row.isAnomaly},${row.description || ''}`
            ).join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'system_events.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [filters, setFilters] = useState({
        severity: [],
        type: []
    });

    const handleQuickAction = (action) => {
        switch(action) {
            case 'diagnostics':
                Swal.fire({
                    title: 'Running Diagnostics',
                    text: 'System analysis in progress...',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                break;
            case 'scale':
                Swal.fire({
                    title: 'Scaling Resources',
                    text: 'Adjusting system resources...',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                break;
            case 'security':
                Swal.fire({
                    title: 'Security Scan',
                    text: 'Scanning system for vulnerabilities...',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                break;
        }
    };


    return (
        <div className={`mt-8 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            {/* Header */}
            <div className="mb-6">
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-semibold">Real-Time System Event Detection</h2>
                        <div className="flex items-center space-x-2">
                            {notificationsEnabled ? (
                                <Bell className="h-5 w-5 cursor-pointer text-blue-500"
                                      onClick={() => setNotificationsEnabled(false)}/>
                            ) : (
                                <BellOff className="h-5 w-5 cursor-pointer text-gray-500"
                                         onClick={() => setNotificationsEnabled(true)}/>
                            )}
                            <Settings className="h-5 w-5 cursor-pointer"
                                      onClick={() => setShowSettings(!showSettings)}/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                        <Download className="h-5 w-5 cursor-pointer" onClick={handleExport}/>
                        <Share2 className="h-5 w-5 cursor-pointer"/>
                        <div className="text-sm">
                            Last updated: {displayedData[displayedData.length - 1].timestamp}
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Time Range</label>
                            <select
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
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Total Events</div>
                    <div className="text-2xl font-bold">{anomalyStats.total}</div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Last Hour</div>
                    <div className="text-2xl font-bold">{anomalyStats.lastHour}</div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="text-sm font-medium mb-1">Progress</div>
                    <div className="text-2xl font-bold flex items-center">
                        {Math.round((currentIndex / initialData.length) * 100)}%
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={displayedData}>
                        <defs>
                            <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#555' : '#ccc'}/>
                        <XAxis dataKey="timestamp" stroke={isDarkMode ? '#ccc' : '#000'}/>
                        <YAxis stroke={isDarkMode ? '#ccc' : '#000'}/>
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
                                const {cx, cy, payload} = props;
                                if (payload.isAnomaly) {
                                    return (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={6}
                                            fill="#ef4444"
                                            stroke="none"
                                            onClick={() => setSelectedEvent(payload)}
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

            {/* Interactive Timeline */}
            <div className={`mb-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="relative h-2">
                    <div className={`h-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full`}></div>
                    <div className="absolute top-0 left-0 w-full">
                        {initialData.map((point, idx) => (
                            <div
                                key={idx}
                                className={`absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/4
                                    ${idx <= currentIndex ? 'cursor-pointer' : 'opacity-50'}
                                    ${point.isAnomaly
                                    ? 'bg-red-500'
                                    : isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                } rounded-full`}
                                style={{left: `${(idx / (initialData.length - 1)) * 100}%`}}
                            />
                        ))}
                    </div>
                </div>
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
                            <AlertCircle className="h-4 w-4 mr-2"/>
                            <div className="flex-1">
                                <div className="font-medium">
                                    System Event at {anomaly.timestamp} - Value: {anomaly.value}
                                    {anomaly.value > displayedData[displayedData.indexOf(anomaly) - 1]?.value ? (
                                        <TrendingUp className="h-4 w-4 inline ml-2 text-red-500"/>
                                    ) : (
                                        <TrendingDown className="h-4 w-4 inline ml-2 text-red-500"/>
                                    )}
                                </div>
                                {anomaly.description && (
                                    <div className="text-sm mt-1 opacity-75">
                                        {anomaly.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <AiInsightsPanel
                displayedData={displayedData}
                isDarkMode={isDarkMode}
            />

            <MetricsPanel
                displayedData={displayedData}
                isDarkMode={isDarkMode}
            />

            <EventDetailsModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
                isDarkMode={isDarkMode}
            />

            <QuickActions
                isDarkMode={isDarkMode}
                onAction={handleQuickAction}
            />

            <HistoricalComparison
                displayedData={displayedData}
                isDarkMode={isDarkMode}
            />

            <EventFilters
                isDarkMode={isDarkMode}
                onFilterChange={setFilters}
            />

            {/* Footer */}
            <div className="mt-4 text-sm opacity-75">
                System automatically detects important system events using adaptive thresholds
            </div>
        </div>
    );
};

export default SystemEvents;
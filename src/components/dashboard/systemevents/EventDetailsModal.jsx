import React from 'react';
import { X } from 'lucide-react';

const EventDetailsModal = ({ event, onClose, isDarkMode }) => {
    if (!event) return null;

    const getSeverityInfo = (value) => {
        if (value >= 400) return { label: 'Critical', color: 'red' };
        if (value >= 300) return { label: 'High', color: 'orange' };
        if (value >= 200) return { label: 'Medium', color: 'yellow' };
        return { label: 'Low', color: 'blue' };
    };

    const severityInfo = getSeverityInfo(event.value);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className={`max-w-2xl w-full m-4 rounded-lg shadow-lg 
                ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Event Details</h3>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium mb-2">Event Information</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="opacity-75">Timestamp:</span>
                                <span className="font-medium">{event.timestamp}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-75">Value:</span>
                                <span className="font-medium">{event.value}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-75">Severity:</span>
                                <span className={`font-medium text-${severityInfo.color}-500`}>
                                    {severityInfo.label}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">Impact Analysis</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="opacity-75">Threshold:</span>
                                <span className="font-medium">{event.threshold}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-75">Deviation:</span>
                                <span className="font-medium">
                                    {Math.round(((event.value - event.threshold) / event.threshold) * 100)}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {event.description && (
                    <div className="mt-6">
                        <h4 className="font-medium mb-2">Description</h4>
                        <p className="opacity-75">{event.description}</p>
                    </div>
                )}

                <div className="mt-6">
                    <h4 className="font-medium mb-2">Recommendations</h4>
                    <ul className="list-disc list-inside space-y-1 opacity-75">
                        <li>Monitor system resources</li>
                        <li>Check related services</li>
                        <li>Review security logs</li>
                        {event.value > 300 && (
                            <li className="text-red-500">Immediate attention required</li>
                        )}
                    </ul>
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded-lg ${
                            isDarkMode
                                ? 'bg-gray-700 hover:bg-gray-600'
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        Close
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Take Action
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsModal;
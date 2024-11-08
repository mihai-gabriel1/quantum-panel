import React, { useState } from 'react';
import { MoreVertical, Edit2, Trash2, UserX, UserCheck } from 'lucide-react';

const UserTable = ({ isDarkMode, searchTerm, roleFilter, onEditUser }) => {
    // Sample data - in a real app, this would come from an API
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Admin',
            department: 'IT',
            status: 'Active',
            lastActive: '2 hours ago',
            avatar: '/api/placeholder/40/40',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Manager',
            department: 'Sales',
            status: 'Active',
            lastActive: '5 minutes ago',
            avatar: '/api/placeholder/40/40',
        },
        // Add more sample users...
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'inactive':
                return 'bg-gray-100 text-gray-800';
            case 'suspended':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className={`w-full text-sm text-left ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}>
                <thead className={`text-xs uppercase ${
                    isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-50 text-gray-700'
                }`}>
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">User</th>
                    <th scope="col" className="px-6 py-3">Role</th>
                    <th scope="col" className="px-6 py-3">Department</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Last Active</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id} className={`${
                        isDarkMode
                            ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                    } border-b`}>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={user.avatar}
                                    alt={user.name}
                                />
                                <div className="ml-4">
                                    <div className={`font-semibold ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>{user.name}</div>
                                    <div className="text-sm">{user.email}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">{user.role}</td>
                        <td className="px-6 py-4">{user.department}</td>
                        <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    getStatusColor(user.status)
                                }`}>
                                    {user.status}
                                </span>
                        </td>
                        <td className="px-6 py-4">{user.lastActive}</td>
                        <td className="px-6 py-4">
                            <div className="relative">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === user.id ? null : user.id)}
                                    className={`p-1.5 rounded-lg ${
                                        isDarkMode
                                            ? 'hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    <MoreVertical className="w-5 h-5" />
                                </button>

                                {activeDropdown === user.id && (
                                    <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                                        isDarkMode
                                            ? 'bg-gray-700 ring-1 ring-black ring-opacity-5'
                                            : 'bg-white ring-1 ring-black ring-opacity-5'
                                    }`}>
                                        <div className="py-1">
                                            <button
                                                onClick={() => onEditUser(user)}
                                                className={`flex items-center px-4 py-2 text-sm w-full ${
                                                    isDarkMode
                                                        ? 'text-gray-300 hover:bg-gray-600'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                <Edit2 className="w-4 h-4 mr-2" />
                                                Edit
                                            </button>
                                            <button
                                                className={`flex items-center px-4 py-2 text-sm w-full ${
                                                    isDarkMode
                                                        ? 'text-gray-300 hover:bg-gray-600'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {user.status === 'Active' ? (
                                                    <>
                                                        <UserX className="w-4 h-4 mr-2" />
                                                        Suspend
                                                    </>
                                                ) : (
                                                    <>
                                                        <UserCheck className="w-4 h-4 mr-2" />
                                                        Activate
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                className={`flex items-center px-4 py-2 text-sm w-full text-red-600 ${
                                                    isDarkMode
                                                        ? 'hover:bg-gray-600'
                                                        : 'hover:bg-gray-100'
                                                }`}
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination */}
            <nav className={`flex items-center justify-between p-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
                <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>
                    Showing 1 to 10 of 97 results
                </span>
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a href="#" className={`block px-3 py-2 ml-0 leading-tight ${
                            isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                        } rounded-l-lg border`}>Previous</a>
                    </li>
                    <li>
                        <a href="#" className={`px-3 py-2 leading-tight ${
                            isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                        } border`}>1</a>
                    </li>
                    <li>
                        <a href="#" className={`px-3 py-2 leading-tight ${
                            isDarkMode
                                ? 'bg-gray-700 border-gray-700 text-white'
                                : 'bg-blue-50 border-gray-300 text-blue-600'
                        } border`}>2</a>
                    </li>
                    <li>
                        <a href="#" className={`block px-3 py-2 leading-tight ${
                            isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                        } rounded-r-lg border`}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default UserTable;
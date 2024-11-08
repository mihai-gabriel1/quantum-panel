// components/dashboard/components/users/Users.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    UserPlus, Search, Filter,
    MoreVertical, Edit2, Trash2,
    UserX, UserCheck, Download
} from 'lucide-react';

const Users = ({ isDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Admin',
            status: 'Active',
            lastActive: '2 hours ago',
            department: 'Engineering',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Manager',
            status: 'Active',
            lastActive: '5 minutes ago',
            department: 'Sales',
            avatar: '/api/placeholder/40/40'
        },
        // Add more users as needed
    ];

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`mt-6 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Users Management
                </h1>
                <div className="flex items-center space-x-3">
                    <button className={`px-4 py-2 rounded-lg flex items-center ${
                        isDarkMode
                            ? 'bg-indigo-600 hover:bg-indigo-700'
                            : 'bg-indigo-600 hover:bg-indigo-700'
                    } text-white transition-colors`}>
                        <UserPlus className="h-5 w-5 mr-2" />
                        Add User
                    </button>
                    <button className={`p-2 rounded-lg ${
                        isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                        <Download className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                            isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white'
                                : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                </div>
                <button className={`p-2 rounded-lg ${
                    isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                    <Filter className="h-5 w-5" />
                </button>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className={`text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <th className="px-4 py-3">User</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Department</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Last Active</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user) => (
                        <motion.tr
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`border-b ${
                                isDarkMode
                                    ? 'border-gray-700 hover:bg-gray-700'
                                    : 'border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            <td className="px-4 py-4">
                                <div className="flex items-center">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="h-10 w-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <div className={`font-medium ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            {user.name}
                                        </div>
                                        <div className={`text-sm ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                        {user.role}
                                    </span>
                            </td>
                            <td className="px-4 py-4">
                                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                        {user.department}
                                    </span>
                            </td>
                            <td className="px-4 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        user.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {user.status}
                                    </span>
                            </td>
                            <td className="px-4 py-4">
                                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                        {user.lastActive}
                                    </span>
                            </td>
                            <td className="px-4 py-4">
                                <div className="relative">
                                    <button
                                        onClick={() => setActiveDropdown(
                                            activeDropdown === user.id ? null : user.id
                                        )}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <MoreVertical className="h-5 w-5" />
                                    </button>

                                    {activeDropdown === user.id && (
                                        <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                                        } ring-1 ring-black ring-opacity-5`}>
                                            <div className="py-1">
                                                <button
                                                    className={`flex items-center w-full px-4 py-2 text-sm ${
                                                        isDarkMode
                                                            ? 'text-gray-300 hover:bg-gray-600'
                                                            : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <Edit2 className="h-4 w-4 mr-2" />
                                                    Edit
                                                </button>
                                                <button
                                                    className={`flex items-center w-full px-4 py-2 text-sm ${
                                                        isDarkMode
                                                            ? 'text-gray-300 hover:bg-gray-600'
                                                            : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    {user.status === 'Active' ? (
                                                        <>
                                                            <UserX className="h-4 w-4 mr-2" />
                                                            Deactivate
                                                        </>
                                                    ) : (
                                                        <>
                                                            <UserCheck className="h-4 w-4 mr-2" />
                                                            Activate
                                                        </>
                                                    )}
                                                </button>
                                                <button
                                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
                <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Showing 1 to 10 of {users.length} entries
                </div>
                <div className="flex space-x-2">
                    <button className={`px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                        Previous
                    </button>
                    <button className={`px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;
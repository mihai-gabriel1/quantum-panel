// components/dashboard/components/users/Users.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    UserPlus, Search, Filter,
    MoreVertical, Edit2, Trash2,
    UserX, UserCheck, Download
} from 'lucide-react';

const Users = ({ isDarkMode }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);

    // Fetch user data from randomuser.me and dicebear avatars
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=50');
                const data = await response.json();

                const roles = [
                    'Admin',
                    'Developer',
                    'Product Manager',
                    'Designer',
                    'Marketing Manager',
                    'Sales Rep',
                    'Support Specialist'
                ];

                const departments = [
                    'Engineering',
                    'Product',
                    'Design',
                    'Marketing',
                    'Sales',
                    'Customer Support',
                    'Operations'
                ];

                const usersWithDetails = data.results.map((user, index) => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    role: roles[Math.floor(Math.random() * roles.length)],
                    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
                    lastActive: `${Math.floor(Math.random() * 24)} hours ago`,
                    department: departments[Math.floor(Math.random() * departments.length)],
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.login.uuid}&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50`
                }));

                setUsers(usersWithDetails);
                setFilteredUsers(usersWithDetails);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Debounce search input
    useEffect(() => {
        const handler = setTimeout(() => {
            const results = users.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(results);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm, users]);

    const indexOfLastUser   = currentPage * usersPerPage;
    const indexOfFirstUser   = indexOfLastUser   - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser  , indexOfLastUser  );
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

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
                <div className="flex -1 relative">
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
                        <th className="px-4 py-3">User </th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Department</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Last Active</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentUsers.map((user) => (
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
                                }`} title={user.status}>
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
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
                                                isDarkMode ? 'bg-gray-700' : 'bg-white'
                                            } ring-1 ring-black ring-opacity-5`}
                                        >
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
                                        </motion.div>
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
                    Showing {indexOfFirstUser  + 1} to {Math.min(indexOfLastUser , filteredUsers.length)} of {filteredUsers.length} entries
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={`px-4 py-2 rounded-lg ${
                            isDarkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={`px-4 py-2 rounded-lg ${
                            isDarkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;
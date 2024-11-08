import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import Users from "./components/dashboard/components/users/Users.jsx";
import DashboardLayout from './components/dashboard/layout/DashboardLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/dashboard" element={
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                } />

                <Route path="/users" element={
                    <DashboardLayout>
                        <Users />
                    </DashboardLayout>
                } />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
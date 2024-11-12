import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import Users from "./components/dashboard/components/Users.jsx";
import DashboardLayout from './components/dashboard/layout/DashboardLayout';
import DashboardMetrics from "./components/dashboard/components/DashboardMetrics.jsx";
import Settings from "./components/dashboard/components/Settings.jsx";
import Help from "./components/dashboard/components/Help.jsx";
import SystemEvents from "./components/dashboard/systemevents/SystemEvents.jsx";
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

                <Route path="/analytics" element={
                    <DashboardLayout>
                        <DashboardMetrics />
                    </DashboardLayout>
                } />

                <Route path="/settings" element={
                    <DashboardLayout>
                        <Settings />
                    </DashboardLayout>
                } />

                <Route path="/help" element={
                    <DashboardLayout>
                        <Help />
                    </DashboardLayout>
                } />

                <Route path="/system-events" element={
                    <DashboardLayout>
                        <SystemEvents />
                    </DashboardLayout>
                } />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
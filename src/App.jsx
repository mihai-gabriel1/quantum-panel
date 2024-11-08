import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Show Landing Page at root path */}
                <Route path="/" element={<LandingPage />} />

                {/* Dashboard route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Optional: Redirect undefined routes to landing page */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
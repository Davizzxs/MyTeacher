import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import TutorDashboard from './pages/TutorDashboard';
import SearchTutors from './pages/SearchTutors';
import TutorProfile from './pages/TutorProfile';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import LiveSession from './pages/LiveSession';
import Rating from './pages/Rating';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tutor" element={<TutorDashboard />} />
        <Route path="/search" element={<SearchTutors />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/session/:id" element={<LiveSession />} />
        <Route path="/rating/:id" element={<Rating />} />
      </Routes>
    </Router>
  );
}

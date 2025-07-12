import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Requests from './pages/Requests';
import ProfileDetail from './pages/ProfileDetail';

import NavigationBar from './components/NavigationBar';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <NavigationBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-detail" element={<ProfileDetail />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'; 
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';  
import Profile from './components/Profile/Profile.js'
import './App.css'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsAuthenticated(false);
  // };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Sidebar />} 
        <div className={`content ${isAuthenticated ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={handleLogin} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />}  />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
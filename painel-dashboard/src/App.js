import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import NewNavbar from './components/Navbar/NewNavbar'; 
import Dashboard from './components/Dashboard/Dahboard'; 
import Vendas from './components/Sales/Sales'; 
import Estoque from './components/Stock/Stock'; 
import Ponto from './components/Time/TimeSheet'; 
import Indicadores from './components/Indicator/Indicators'; 
import Login from './components/Login/Login'; 
import './App.css'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {isAuthenticated && <NewNavbar />}
        <Routes>
          <Route path="/" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />} />
          <Route path="/home" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/vendas" element={isAuthenticated ? <Vendas /> : <Navigate to="/" />} />
          <Route path="/estoque" element={isAuthenticated ? <Estoque /> : <Navigate to="/" />} />
          <Route path="/ponto" element={isAuthenticated ? <Ponto /> : <Navigate to="/" />} />
          <Route path="/indicators" element={isAuthenticated ? <Indicadores /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

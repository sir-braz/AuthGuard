import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import NewNavbar from './components/Navbar/NewNavbar'; 
import Dashboard from './components/Dashboard/Dahboard'; 
import Vendas from './components/Sales/Sales'; 
import Estoque from './components/Stock/Stock'; 
import Ponto from './components/Time/TimeSheet'; 
import Indicadores from './components/Indicator/Indicators'; 
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';  
import './App.css'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Verifica se há token para definir autenticação
  }, []);

  // Função para login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  // Componente de Rota Protegida
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <NewNavbar onLogout={handleLogout} />}

        <Routes>
          {/* Redirecionamento automático: "/" vai para "/home" se autenticado, senão "/login" */}
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} 
          />

          {/* Página de Login */}
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={handleLogin} />} 
          />

          {/* Página de Registro */}
          <Route 
            path="/register" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Register />}  
          />

          {/* Rotas Protegidas */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vendas" 
            element={
              <ProtectedRoute>
                <Vendas />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/estoque" 
            element={
              <ProtectedRoute>
                <Estoque />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/ponto" 
            element={
              <ProtectedRoute>
                <Ponto />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/indicators" 
            element={
              <ProtectedRoute>
                <Indicadores />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import NewNavbar from './components/Navbar/NewNavbar'; 
import Dashboard from './components/Dashboard/Dahboard'; 
import Vendas from './components/Sales/Sales'; 
import Estoque from './components/Stock/Stock'; 
import Ponto from './components/Time/TimeSheet'; 
import Indicadores from './components/Indicator/Indicators'; 
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';  // Importe o componente Register
import './App.css'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        {isAuthenticated && <NewNavbar />}
        <Routes>
          {/* Rota de Login */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />} 
          />

          {/* Rota de Registro */}
          <Route 
            path="/register" 
            element={<Register />}  // Não importa se está autenticado ou não, ele vai para a página de registro
          />
          
          {/* Rota de Home */}
          <Route 
            path="/home" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
          />
          
          {/* Outras rotas */}
          <Route 
            path="/vendas" 
            element={isAuthenticated ? <Vendas /> : <Navigate to="/" />} 
          />
          <Route 
            path="/estoque" 
            element={isAuthenticated ? <Estoque /> : <Navigate to="/" />} 
          />
          <Route 
            path="/ponto" 
            element={isAuthenticated ? <Ponto /> : <Navigate to="/" />} 
          />
          <Route 
            path="/indicators" 
            element={isAuthenticated ? <Indicadores /> : <Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

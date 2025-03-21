import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Mudou o Switch para Routes e o Route usa 'element'
import Navigation from './components/Navigation'; // Importando a barra de navegação
import Dashboard from './components/Dahboard'; // Componente de Dashboard
import Vendas from './components/Sales'; // Página de Vendas
import Estoque from './components/Stock'; // Página de Estoque
import Ponto from './components/TimeSheet'; // Página de Folha de Ponto
import Indicadores from './components/Indicators'; // Página de Indicadores
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Barra de navegação */}
      <div className="content">
        <Routes>
          {/* Usando 'element' para renderizar os componentes */}
          <Route path="/home" element={<Dashboard />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/ponto" element={<Ponto />} />
          <Route path="/indicators" element={<Indicadores />} />
          <Route path="/" element={<Dashboard />} /> {/* Página inicial (Home) */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

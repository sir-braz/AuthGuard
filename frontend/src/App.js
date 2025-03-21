import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Crie um arquivo CSS para estilizar a aplicação

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
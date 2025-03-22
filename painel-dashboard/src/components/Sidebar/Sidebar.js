import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaBox, FaUsers, FaBars, FaBreadSlice, FaUser } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <FaBreadSlice className="sidebar-logo" style={{ color: '#d4a373' }} />
        <FaBars className="sidebar-toggle" onClick={handleToggle} />
      </div>
      <div className="sidebar-user">
        <FaUser className="me-2" /> Sir Braz
      </div>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/home" className="sidebar-link">
          <FaHome className="me-2 icon-white" /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/vendas" className="sidebar-link">
          <FaChartBar className="me-2 icon-white" /> Vendas
        </Nav.Link>
        <Nav.Link as={Link} to="/estoque" className="sidebar-link">
          <FaBox className="me-2 icon-white" /> Estoque
        </Nav.Link>
        <Nav.Link as={Link} to="/ponto" className="sidebar-link">
          <FaUsers className="me-2 icon-white" /> Ponto
        </Nav.Link>
        <Nav.Link as={Link} to="/indicators" className="sidebar-link">
          <FaChartBar className="me-2 icon-white" /> Indicadores
        </Nav.Link>
        <Nav.Link as={Link} to="/profile" className="sidebar-link">
          <FaUser className="me-2 icon-white" /> Perfil
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
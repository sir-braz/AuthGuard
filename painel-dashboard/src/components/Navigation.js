import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaHome, FaChartBar, FaBox, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importação do arquivo de CSS para estilizar a navbar

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#" className="brand-logo">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {/* Link para Home */}
            <Nav.Link as={Link} to="/home" className="nav-item">
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </Nav.Link>

            {/* Link para Vendas */}
            <Nav.Link as={Link} to="/vendas" className="nav-item">
              <FaChartBar className="nav-icon" />
              <span className="nav-text">Vendas</span>
            </Nav.Link>

            {/* Link para Estoque */}
            <Nav.Link as={Link} to="/estoque" className="nav-item">
              <FaBox className="nav-icon" />
              <span className="nav-text">Estoque</span>
            </Nav.Link>

            {/* Link para Folha de Ponto */}
            <Nav.Link as={Link} to="/ponto" className="nav-item">
              <FaUsers className="nav-icon" />
              <span className="nav-text">Folha de Ponto</span>
            </Nav.Link>

            {/* Link para Indicadores */}
            <Nav.Link as={Link} to="/indicators" className="nav-item">
              <FaChartBar className="nav-icon" />
              <span className="nav-text">Indicadores</span>
            </Nav.Link>

            {/* Botão de Logout */}
            <Nav.Item>
              <Button variant="outline-danger" className="logout-btn">
                <FaSignOutAlt className="mr-2" /> Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

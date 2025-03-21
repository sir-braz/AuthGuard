import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaHome, FaChartBar, FaBox, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './NewNavbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsNavOpen(false); // Fecha a Navbar apenas em dispositivos móveis
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={isNavOpen}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Aqui mudamos para 'ms-auto' para alinhar à direita */}
            <Nav.Link as={Link} to="/home" onClick={handleNavLinkClick}>
              <FaHome className="me-2" /> Home
            </Nav.Link>

            <Nav.Link as={Link} to="/vendas" onClick={handleNavLinkClick}>
              <FaChartBar className="me-2" /> Vendas
            </Nav.Link>

            <Nav.Link as={Link} to="/estoque" onClick={handleNavLinkClick}>
              <FaBox className="me-2" /> Estoque
            </Nav.Link>

            <Nav.Link as={Link} to="/ponto" onClick={handleNavLinkClick}>
              <FaUsers className="me-2" /> Folha de Ponto
            </Nav.Link>

            <Nav.Link as={Link} to="/indicators" onClick={handleNavLinkClick}>
              <FaChartBar className="me-2" /> Indicadores
            </Nav.Link>

            <Nav.Item>
              <Button variant="outline-danger" className="ms-3 logout-btn" onClick={handleLogout}>
                <FaSignOutAlt className="me-2" /> Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;

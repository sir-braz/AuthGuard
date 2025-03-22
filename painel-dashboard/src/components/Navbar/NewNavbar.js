import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaHome, FaChartBar, FaBox, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './NewNavbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  // Função para realizar logout
  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  // Confirmar logout, remover o token, recarregar a página e redirecionar para a página de login
  const confirmLogout = () => {
    // Remove o token do localStorage
    localStorage.removeItem('token');  

    // Fecha o modal de logout
    setShowLogoutModal(false);

    // Recarrega a página para garantir que o estado seja atualizado e o redirecionamento ocorra
    window.location.reload();

    // Redireciona automaticamente para a página de login após o recarregamento
    navigate('/login', { replace: true });
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsNavOpen(false);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={isNavOpen}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavOpen(!isNavOpen)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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

      {/* Modal de Confirmação de Logout */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você tem certeza de que deseja fazer logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmLogout}>
            Confirmar Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NewNavbar;

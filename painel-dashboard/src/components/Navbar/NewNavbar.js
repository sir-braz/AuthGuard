import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaHome, FaChartBar, FaBox, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './NewNavbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [userData, setUserData] = useState(null); // Para armazenar os dados do usuário
  const navigate = useNavigate();

  // Verifica se o token existe no localStorage
  const token = localStorage.getItem('token');

  // Função para obter dados do usuário (simulação)
  const fetchUserData = () => {
    if (token) {
      // Simulação: Suponha que você faça uma requisição para uma API para obter os dados do usuário
      // Aqui estamos apenas retornando dados fictícios como exemplo
      setUserData({
        username: 'john_doe',
        email: 'john@example.com',
        role: 'admin',
      });
    }
  };

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    fetchUserData(); // Exibe os dados antes de fazer o logout
    setShowLogoutModal(true); // Exibe a modal de confirmação
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    setShowLogoutModal(false); // Fecha a modal
    navigate('/'); // Redireciona para o login
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
          <h5>Dados do Usuário:</h5>
          {userData ? (
            <ul>
              <li><strong>Nome:</strong> {userData.username}</li>
              <li><strong>Email:</strong> {userData.email}</li>
              <li><strong>Função:</strong> {userData.role}</li>
            </ul>
          ) : (
            <p>Carregando dados...</p>
          )}
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

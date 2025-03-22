import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaHome, FaChartBar, FaBox, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './NewNavbar.css';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [logoutError, setLogoutError] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Estado para feedback visual
  const navigate = useNavigate();

  // Função de logout
  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("Token não encontrado!");
      setLogoutError("Token não encontrado!");
      return;
    }

    setIsLoggingOut(true); // Ativa o feedback visual
    setLogoutError(null); // Limpa erros anteriores

    try {
      // Envia a requisição de logout para o backend
      const response = await fetch('https://api.paofacil.xyz/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        console.log('Logout realizado com sucesso!');
      } else if (response.status === 403) {
        console.error('Erro ao realizar logout no backend: Forbidden');
        setLogoutError('Erro ao realizar logout: Acesso proibido. Por favor, verifique suas credenciais.');
      } else {
        const errorResponse = await response.json();
        console.error('Erro ao realizar logout no backend:', errorResponse);
        setLogoutError(`Erro ao realizar logout no backend: ${errorResponse.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      setLogoutError(`Erro ao realizar logout: ${error.message}`);
    } finally {
      // Remove o token do localStorage mesmo que a requisição de logout falhe
      localStorage.removeItem('token');
      setIsLoggingOut(false); // Desativa o feedback visual
      setShowLogoutModal(false); // Fecha o modal de logout
      navigate('/login', { replace: true }); // Redireciona para a página de login
      window.location.reload(); // Recarrega a página para garantir que o estado seja atualizado
    }
  };

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
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
              <Button variant="outline-danger" className="ms-3 logout-btn" onClick={() => setShowLogoutModal(true)}>
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
          {logoutError && <p className="text-danger">{logoutError}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{' '}
                Saindo...
              </>
            ) : (
              'Confirmar Logout'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NewNavbar;
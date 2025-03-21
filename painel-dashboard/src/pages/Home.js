import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaChartBar, FaShoppingCart, FaBoxes, FaClock } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redireciona para login se não estiver autenticado
    }
  }, [navigate]);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">🚀 Bem-vindo ao Painel de Controle</h1>
      <p className="text-center">Gerencie suas operações de forma eficiente.</p>

      <Row className="justify-content-center">
        {/* Card de Vendas */}
        <Col md={4}>
          <Card className="mb-4 text-center shadow-sm">
            <Card.Body>
              <FaShoppingCart size={40} className="mb-3 text-primary" />
              <Card.Title>Vendas</Card.Title>
              <Card.Text>Acompanhe suas vendas e métricas de desempenho.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/vendas')}>
                Acessar Vendas
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Estoque */}
        <Col md={4}>
          <Card className="mb-4 text-center shadow-sm">
            <Card.Body>
              <FaBoxes size={40} className="mb-3 text-success" />
              <Card.Title>Estoque</Card.Title>
              <Card.Text>Gerencie seus produtos e acompanhe os níveis de estoque.</Card.Text>
              <Button variant="success" onClick={() => navigate('/estoque')}>
                Acessar Estoque
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Indicadores */}
        <Col md={4}>
          <Card className="mb-4 text-center shadow-sm">
            <Card.Body>
              <FaChartBar size={40} className="mb-3 text-warning" />
              <Card.Title>Indicadores</Card.Title>
              <Card.Text>Visualize indicadores de desempenho (KPIs).</Card.Text>
              <Button variant="warning" onClick={() => navigate('/indicators')}>
                Ver Indicadores
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Ponto */}
        <Col md={4}>
          <Card className="mb-4 text-center shadow-sm">
            <Card.Body>
              <FaClock size={40} className="mb-3 text-danger" />
              <Card.Title>Ponto Eletrônico</Card.Title>
              <Card.Text>Registre e acompanhe os horários de trabalho.</Card.Text>
              <Button variant="danger" onClick={() => navigate('/ponto')}>
                Acessar Ponto
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

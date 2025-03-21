import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { FaDollarSign, FaBoxOpen, FaBreadSlice, FaFileAlt } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Registrar as escalas e componentes necessários
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Dados do gráfico
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Meses
    datasets: [
      {
        label: 'Vendas',
        data: [100, 200, 300, 400, 500], // Dados de vendas
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'category', // Usando a escala de categorias
        title: {
          display: true,
          text: 'Meses', // Título do eixo X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Vendas', // Título do eixo Y
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <Row className="g-4">
        {/* Card de Indicadores de Vendas */}
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-header">
                <FaDollarSign className="icon" />
                <Card.Title>Indicadores de Vendas</Card.Title>
              </div>
              <Line data={data} options={options} />
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Controle de Estoque */}
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-header">
                <FaBoxOpen className="icon" />
                <Card.Title>Controle de Estoque</Card.Title>
              </div>
              <Line data={data} options={options} />
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Desperdício de Pão */}
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-header">
                <FaBreadSlice className="icon" />
                <Card.Title>Desperdício de Pão</Card.Title>
              </div>
              <Line data={data} options={options} />
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Gestão de Notas */}
        <Col md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-header">
                <FaFileAlt className="icon" />
                <Card.Title>Gestão de Notas</Card.Title>
              </div>
              <Button variant="primary">Ver Notas</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

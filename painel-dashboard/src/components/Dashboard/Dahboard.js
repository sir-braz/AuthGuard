import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { FaDollarSign, FaBoxOpen, FaBreadSlice, FaFileAlt, FaUsers } from 'react-icons/fa';
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
    <Box className="dashboard-container" sx={{ padding: 3 }}>
      <Grid container spacing={4}>
        {/* Card de Indicadores de Vendas */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <FaDollarSign size={30} style={{ marginRight: 10 }} />
                <Typography variant="h6">Indicadores de Vendas</Typography>
              </Box>
              <Line data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Controle de Estoque */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <FaBoxOpen size={30} style={{ marginRight: 10 }} />
                <Typography variant="h6">Controle de Estoque</Typography>
              </Box>
              <Line data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Desperdício de Pão */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <FaBreadSlice size={30} style={{ marginRight: 10 }} />
                <Typography variant="h6">Desperdício de Pão</Typography>
              </Box>
              <Line data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Gestão de Notas */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <FaFileAlt size={30} style={{ marginRight: 10 }} />
                <Typography variant="h6">Gestão de Notas</Typography>
              </Box>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Ver Notas
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Gestão de Pessoal */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <FaUsers size={30} style={{ marginRight: 10 }} />
                <Typography variant="h6">Gestão de Pessoal</Typography>
              </Box>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabela de Resumo */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resumo</Typography>
              <TableContainer sx={{ marginTop: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Categoria</TableCell>
                      <TableCell>Valor</TableCell>
                      <TableCell>Data</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Vendas</TableCell>
                      <TableCell>$500</TableCell>
                      <TableCell>22/03/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Estoque</TableCell>
                      <TableCell>300 unidades</TableCell>
                      <TableCell>22/03/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Desperdício</TableCell>
                      <TableCell>20 unidades</TableCell>
                      <TableCell>22/03/2025</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

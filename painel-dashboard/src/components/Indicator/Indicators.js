import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { FaChartBar } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Indicadores.css';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dados de exemplo para os indicadores
const chartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Vendas (R$)',
      data: [5000, 7000, 8000, 7500, 9000, 9500],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      tension: 0.2,
    },
    {
      label: 'Lucro (R$)',
      data: [1000, 1500, 1800, 1700, 2000, 2100],
      borderColor: '#f39c12',
      backgroundColor: 'rgba(243, 156, 18, 0.2)',
      tension: 0.2,
    },
  ],
};

// Opções do gráfico
const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: { mode: 'index', intersect: false },
  },
  scales: {
    x: { title: { display: true, text: 'Meses' } },
    y: { title: { display: true, text: 'Valor (R$)' } },
  },
};

const Indicadores = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Cabeçalho */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          <FaChartBar style={{ marginRight: 8 }} /> Indicadores
        </Typography>
      </Box>

      {/* Painel de Indicadores */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Vendas Totais (R$)</Typography>
            <Typography variant="h5" fontWeight="bold">R$ 45.000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Lucro Líquido (R$)</Typography>
            <Typography variant="h5" fontWeight="bold">R$ 9.000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Clientes Atendidos</Typography>
            <Typography variant="h5" fontWeight="bold">1.200</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Gráfico de Vendas e Lucro */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h6">Evolução de Vendas e Lucro</Typography>
        <Line data={chartData} options={chartOptions} />
      </Paper>

      {/* Botões de Ação (Exemplo) */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary">
          Gerar Relatório
        </Button>
        <Button variant="outlined" color="secondary">
          Filtrar Dados
        </Button>
      </Box>
    </Box>
  );
};

export default Indicadores;

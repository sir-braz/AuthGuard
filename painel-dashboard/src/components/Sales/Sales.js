import React, { useState } from 'react';
import { 
  Box, Typography, Button, Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, MenuItem, Select, FormControl, 
  InputLabel, Modal, TextField 
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { FaChartBar, FaPlus, FaFilter } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Sales.css';

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Simulação de dados de vendas iniciais
const initialSalesData = [
  { id: 1, cliente: 'João Silva', valor: '150,00', status: 'Pago', data: '22/03/2025' },
  { id: 2, cliente: 'Maria Oliveira', valor: '200,00', status: 'Pendente', data: '21/03/2025' },
  { id: 3, cliente: 'Carlos Souza', valor: '320,00', status: 'Pago', data: '20/03/2025' },
  { id: 4, cliente: 'Ana Lima', valor: '450,00', status: 'Cancelado', data: '19/03/2025' },
];

// Dados do gráfico
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

const Sales = () => {
  const [salesData, setSalesData] = useState(initialSalesData);
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [openModal, setOpenModal] = useState(false);
  const [novaVenda, setNovaVenda] = useState({
    cliente: '',
    valor: '',
    status: 'Pendente',
    data: '',
  });

  const handleFiltroChange = (event) => {
    setFiltroStatus(event.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNovaVenda({ cliente: '', valor: '', status: 'Pendente', data: '' });
  };

  const handleChange = (event) => {
    setNovaVenda({ ...novaVenda, [event.target.name]: event.target.value });
  };

  const handleSaveVenda = () => {
    const novaVendaComId = { ...novaVenda, id: salesData.length + 1 };
    setSalesData([...salesData, novaVendaComId]);
    handleCloseModal();
  };

  return (
    <Box className="sales-container">
      {/* Cabeçalho */}
      <Box className="sales-header">
        <Typography variant="h5" className="sales-title">
          <FaChartBar className="icon" /> Vendas
        </Typography>
        <Button className="nova-venda-btn" onClick={handleOpenModal} startIcon={<FaPlus />}>
          Nova Venda
        </Button>
      </Box>

      {/* Filtros */}
      <Box className="sales-filters">
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select value={filtroStatus} onChange={handleFiltroChange}>
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Pago">Pago</MenuItem>
            <MenuItem value="Pendente">Pendente</MenuItem>
            <MenuItem value="Cancelado">Cancelado</MenuItem>
          </Select>
        </FormControl>
        <Button className="filter-btn" startIcon={<FaFilter />}>Aplicar Filtros</Button>
      </Box>

      {/* Gráfico de vendas */}
      <Paper className="sales-chart">
        <Typography variant="h6">Evolução das Vendas</Typography>
        <Line data={chartData} options={chartOptions} />
      </Paper>

      {/* Tabela de vendas */}
      <TableContainer component={Paper} className="sales-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Cliente</strong></TableCell>
              <TableCell><strong>Valor</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Data</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData
              .filter((sale) => filtroStatus === 'Todos' || sale.status === filtroStatus)
              .map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.id}</TableCell>
                  <TableCell>{sale.cliente}</TableCell>
                  <TableCell>R$ {sale.valor}</TableCell>
                  <TableCell>{sale.status}</TableCell>
                  <TableCell>{sale.data}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal do formulário */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modal-box">
          <Typography variant="h6" marginBottom={2}>Nova Venda</Typography>
          <TextField label="Cliente" name="cliente" fullWidth margin="normal" value={novaVenda.cliente} onChange={handleChange} />
          <TextField label="Valor (R$)" name="valor" fullWidth margin="normal" value={novaVenda.valor} onChange={handleChange} />
          <TextField type="date" label="Data" name="data" fullWidth margin="normal" value={novaVenda.data} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select name="status" value={novaVenda.status} onChange={handleChange}>
              <MenuItem value="Pago">Pago</MenuItem>
              <MenuItem value="Pendente">Pendente</MenuItem>
              <MenuItem value="Cancelado">Cancelado</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSaveVenda}>Salvar</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Sales;

import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, TextField } from '@mui/material';
import { FaBox, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import './Stock.css';

const initialStock = [
  { id: 1, nome: 'Pão Francês', categoria: 'Padaria', quantidade: 100, preco: 1.50 },
  { id: 2, nome: 'Bolo de Chocolate', categoria: 'Confeitaria', quantidade: 20, preco: 25.00 },
  { id: 3, nome: 'Leite Integral', categoria: 'Laticínios', quantidade: 50, preco: 4.80 },
];

const Stock = () => {
  const [stock, setStock] = useState(initialStock);
  const [openModal, setOpenModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ nome: '', categoria: '', quantidade: '', preco: '' });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!newProduct.nome || !newProduct.categoria || !newProduct.quantidade || !newProduct.preco) {
      alert('Preencha todos os campos!');
      return;
    }

    setStock([...stock, { id: stock.length + 1, ...newProduct }]);
    setNewProduct({ nome: '', categoria: '', quantidade: '', preco: '' });
    handleCloseModal();
  };

  const handleDeleteProduct = (id) => {
    setStock(stock.filter(product => product.id !== id));
  };

  return (
    <Box className="stock-container">
      {/* Cabeçalho */}
      <Box className="stock-header">
        <Typography variant="h5" fontWeight="bold">
          <FaBox className="icon" /> Estoque
        </Typography>
        <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={handleOpenModal}>
          Adicionar Produto
        </Button>
      </Box>

      {/* Tabela de estoque */}
      <TableContainer component={Paper} className="stock-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Categoria</strong></TableCell>
              <TableCell><strong>Quantidade</strong></TableCell>
              <TableCell><strong>Preço (R$)</strong></TableCell>
              <TableCell><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stock.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.nome}</TableCell>
                <TableCell>{product.categoria}</TableCell>
                <TableCell>{product.quantidade}</TableCell>
                <TableCell>{parseFloat(product.preco).toFixed(2)}</TableCell>
                <TableCell>
                  <Button size="small" color="error" onClick={() => handleDeleteProduct(product.id)}>
                    <FaTrash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal para adicionar novo produto */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modal-box">
          <Typography variant="h6">Novo Produto</Typography>
          <TextField label="Nome" name="nome" value={newProduct.nome} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Categoria" name="categoria" value={newProduct.categoria} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Quantidade" name="quantidade" type="number" value={newProduct.quantidade} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Preço (R$)" name="preco" type="number" value={newProduct.preco} onChange={handleChange} fullWidth margin="normal" />
          <Button variant="contained" color="primary" onClick={handleAddProduct} fullWidth>Salvar</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Stock;

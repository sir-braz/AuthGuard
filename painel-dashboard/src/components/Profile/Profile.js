import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { FaUser, FaEdit } from 'react-icons/fa';
import './Profile.css'

const Profile = () => {
  // Estado do usuário (em um caso real, esses dados poderiam vir de uma API ou do localStorage)
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '123-456-7890',
  });

  // Estado para controlar se está no modo de edição ou não
  const [editing, setEditing] = useState(false);

  // Função para alternar entre o modo de edição e exibição
  const handleEdit = () => {
    setEditing(!editing);
  };

  // Função para salvar as mudanças do usuário (em um caso real, você poderia fazer uma chamada de API)
  const handleSave = () => {
    setEditing(false);
    // Aqui você pode salvar as alterações no backend ou no localStorage
    console.log('Dados salvos:', user);
  };

  // Função para atualizar os dados do usuário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          <FaUser style={{ marginRight: 8 }} />
          Perfil de {user.name}
        </Typography>

        {/* Formulário para editar o perfil */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome"
              fullWidth
              value={user.name}
              name="name"
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="E-mail"
              fullWidth
              value={user.email}
              name="email"
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              fullWidth
              value={user.phone}
              name="phone"
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
        </Grid>

        {/* Botões de edição e salvamento */}
        <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'flex-end' }}>
          {!editing ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaEdit />}
              onClick={handleEdit}
            >
              Editar Perfil
            </Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined" onClick={handleSave}>
                Salvar
              </Button>
              <Button variant="outlined" onClick={handleEdit}>
                Cancelar
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { FaHome, FaChartBar, FaBox, FaUser, FaSignOutAlt, FaRegUserCircle, FaBreadSlice } from 'react-icons/fa';
import './Sidebar.css'; // Aplique a estilização específica

const defaultMenuItems = [
  { text: 'Dashboard', icon: <FaHome />, link: '/home' },
  { text: 'Vendas', icon: <FaChartBar />, link: '/vendas' },
  { text: 'Estoque', icon: <FaBox />, link: '/estoque' },
  { text: 'Indicadores', icon: <FaChartBar />, link: '/indicators' },
  { text: 'Perfil', icon: <FaUser />, link: '/profile' },
];

const Sidebar = ({ menuItems = defaultMenuItems, logoText = "PaoFacil" }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('https://api.zerosobraxzy.xyz/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        }
      });
      localStorage.removeItem('authToken');
      navigate('/login');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: '#2c3e50',
          color: '#fff',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ padding: '20px', textAlign: 'center' }}>
        {/* Logo */}
        <Box>
          <FaBreadSlice style={{ color: '#f39c12', fontSize: '36px' }} />
        </Box>
        <Typography variant="h6" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
          {logoText}
        </Typography>
        <Typography variant="body2" sx={{ color: '#bdc3c7', marginBottom: '20px' }}>
          "Reduzindo o desperdício, aproveitando o melhor do pão!"
        </Typography>
        <Divider sx={{ backgroundColor: '#34495e', marginBottom: '20px' }} />

        {/* Menu */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.link}
              sx={{
                paddingY: '12px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#f39c12',
                  color: '#fff',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: '#fff', fontWeight: '500' }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ backgroundColor: '#34495e', marginY: '20px' }} />

        {/* Informações do Usuário */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaRegUserCircle style={{ color: '#f39c12', fontSize: '36px' }} />
          <Box sx={{ marginLeft: '12px' }}>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Bem-vindo, João!
            </Typography>
            <Typography variant="caption" sx={{ color: '#bdc3c7' }}>
              Administrador
            </Typography>
          </Box>
        </Box>

        {/* Botão de Logout */}
        <Box sx={{ marginTop: 'auto' }}>
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              paddingY: '12px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#e74c3c',
                color: '#fff',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>
              <FaSignOutAlt />
            </ListItemIcon>
            <ListItemText
              primary="Sair"
              sx={{ color: '#fff', fontWeight: '500' }}
            />
          </ListItem>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

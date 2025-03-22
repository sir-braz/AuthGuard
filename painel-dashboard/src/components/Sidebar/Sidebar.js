import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { FaHome, FaChartBar, FaBox, FaBreadSlice, FaUser, FaSignOutAlt, FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import './Sidebar.css';

const defaultMenuItems = [
  { text: 'Dashboard', icon: <FaHome />, link: '/home' },
  { text: 'Vendas', icon: <FaChartBar />, link: '/vendas' },
  { text: 'Estoque', icon: <FaBox />, link: '/estoque' },
  { text: 'Indicadores', icon: <FaChartBar />, link: '/indicators' },
  { text: 'Perfil', icon: <FaUser />, link: '/profile' },
];

const Sidebar = ({ menuItems = defaultMenuItems, logoText = "PaoFacil" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token do localStorage
    localStorage.removeItem('authToken');
  
    // Atualiza a página (força um reload) e redireciona para a página de login
    window.location.reload();
    navigate('/login');
  };
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: 'sidebar' }} // Aplica a classe CSS fixa para a sidebar escura
    >
      <Box>
        {/* Logo */}
        <Box className="logo-box">
          <FaBreadSlice style={{ color: '#d4a373', fontSize: '36px' }} />
          <Box className="logo-text">
            {logoText}
          </Box>
        </Box>

        {/* Slogan */}
        <Box className="slogan">
          "Reduzindo o desperdício, aproveitando o melhor do pão!"
        </Box>

        <Divider sx={{ marginY: 2, backgroundColor: '#ffffff33' }} />

        {/* Informações do Usuário */}
        <Box sx={{ padding: '16px 0', display: 'flex', alignItems: 'center' }}>
          <FaRegUserCircle style={{ fontSize: '36px', color: '#fbc02d' }} />
          <Box sx={{ marginLeft: '12px', color: '#ffffff' }}>
            <Typography variant="body2">Bem-vindo, João!</Typography>
            <Typography variant="caption">Administrador</Typography>
          </Box>
        </Box>

        <Divider sx={{ marginY: 2, backgroundColor: '#ffffff33' }} />

        {/* Menu */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              key={index} 
              component={Link} 
              to={item.link} 
              sx={{ paddingY: 1, color: '#ffffff' }} // Garantir que o texto seja branco
            >
              <ListItemIcon sx={{ color: '#ffffff' }}> {/* Ícones brancos */}
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ color: '#ffffff' }} // Garantir que o texto seja branco
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ marginY: 2, backgroundColor: '#ffffff33' }} />

        {/* Categorias */}
        <Box className="category-divider">
          <Typography variant="body2" sx={{ color: '#ffffff' }}>Gestão de Pedidos</Typography>
          <List>
            <ListItem component={Link} to="/pedidos" sx={{ paddingY: 1 }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <FaShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Pedidos" sx={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Box>

        {/* Botão de Ação Rápida */}
        <Box className="action-btn" onClick={() => navigate('/pedido/novo')}>
          <FaShoppingCart style={{ marginRight: '8px' }} />
          Fazer Pedido
        </Box>
      </Box>

      {/* Botão de Logout */}
      <Box sx={{ paddingBottom: '16px' }}>
        <Box className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: '8px' }} />
          Sair
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

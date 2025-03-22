import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box } from '@mui/material';
import { FaHome, FaChartBar, FaBox, FaUsers, FaArrowLeft, FaArrowRight, FaBreadSlice, FaUser } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import './Sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Controla se o Drawer está expandido ou contraído
  const theme = useTheme();

  // Alternar entre expandido e retraído
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <FaHome />, link: '/home' },
    { text: 'Vendas', icon: <FaChartBar />, link: '/vendas' },
    { text: 'Estoque', icon: <FaBox />, link: '/estoque' },
    { text: 'Ponto', icon: <FaUsers />, link: '/ponto' },
    { text: 'Indicadores', icon: <FaChartBar />, link: '/indicators' },
    { text: 'Perfil', icon: <FaUser />, link: '/profile' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Botão para expandir/contrair o Drawer */}
      <IconButton
        onClick={handleToggle}
        sx={{
          position: 'absolute',
          top: 16,
          left: isOpen ? '240px' : '16px', // Ajusta o posicionamento com base no estado
          zIndex: 1201,
          color: theme.palette.primary.contrastText, // Cor do ícone de acordo com o tema
          transition: 'left 0.3s ease',
        }}
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />} {/* Muda o ícone baseado no estado do Drawer */}
      </IconButton>

      {/* Drawer que contém o Sidebar */}
      <Drawer
        sx={{
          width: isOpen ? 240 : 60, // Controla o tamanho do Drawer baseado no estado
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? 240 : 60, 
            backgroundColor: theme.palette.background.default, // Tema escuro
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            paddingTop: '64px',
            transition: 'width 0.3s ease',
            color: theme.palette.text.primary, // Ajuste da cor do texto conforme o tema
          },
        }}
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={handleToggle} // Ao clicar fora do Drawer, ele será fechado
      >
        <Box sx={{ padding: 2 }}>
          {/* Logo e Nome */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaBreadSlice className="sidebar-logo" style={{ color: '#d4a373', fontSize: '36px' }} />
            {isOpen && (
              <Box sx={{ marginLeft: 1, fontSize: '18px', fontWeight: '600', color: theme.palette.text.primary }}>
                Sir Braz
              </Box>
            )}
          </Box>
          <Divider sx={{ marginY: 2 }} />

          {/* Lista de Links */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.link} sx={{ paddingY: 1 }}>
                <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                  {item.icon}
                </ListItemIcon>
                {isOpen && <ListItemText primary={item.text} sx={{ color: theme.palette.text.primary }} />}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

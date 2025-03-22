import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, useMediaQuery } from '@mui/material';
import { FaHome, FaChartBar, FaBox, FaUsers, FaArrowLeft, FaArrowRight, FaBreadSlice, FaUser } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import './Sidebar.css';

const defaultMenuItems = [
  { text: 'Dashboard', icon: <FaHome />, link: '/home' },
  { text: 'Vendas', icon: <FaChartBar />, link: '/vendas' },
  { text: 'Estoque', icon: <FaBox />, link: '/estoque' },
  { text: 'Ponto', icon: <FaUsers />, link: '/ponto' },
  { text: 'Indicadores', icon: <FaChartBar />, link: '/indicators' },
  { text: 'Perfil', icon: <FaUser />, link: '/profile' },
];

const Sidebar = ({ menuItems = defaultMenuItems, logoText = "Sir Braz" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica se é mobile

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Botão de alternância para abrir/fechar a sidebar em telas pequenas */}
      {isMobile && (
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            left: '16px',
            zIndex: 1201,
            color: theme.palette.primary.contrastText,
          }}
          aria-label="Abrir Sidebar"
        >
          <FaArrowRight />
        </IconButton>
      )}

      {/* Drawer (Sidebar) */}
      <Drawer
        sx={{
          width: isMobile ? 200 : 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMobile ? 200 : 240,
            backgroundColor: theme.palette.background.default,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            paddingTop: '64px', // Para compensar o Header
            transition: 'width 0.3s ease',
            color: theme.palette.text.primary,
          },
        }}
        variant={isMobile ? "temporary" : "permanent"} // 'temporary' para dispositivos móveis, 'permanent' para desktop
        anchor="left"
        open={!isMobile} // No mobile, o Drawer será fechado por padrão
        ModalProps={{
          keepMounted: true, // Melhor performance em dispositivos móveis
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaBreadSlice className="sidebar-logo" style={{ color: '#d4a373', fontSize: '36px' }} />
            {!isMobile && (
              <Box sx={{ marginLeft: 1, fontSize: '18px', fontWeight: '600', color: theme.palette.text.primary }}>
                {logoText}
              </Box>
            )}
          </Box>
          <Divider sx={{ marginY: 2 }} />

          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.link} sx={{ paddingY: 1 }}>
                <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                  {item.icon}
                </ListItemIcon>
                {!isMobile && <ListItemText primary={item.text} sx={{ color: theme.palette.text.primary }} />}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

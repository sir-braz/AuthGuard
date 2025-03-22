import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, useMediaQuery } from '@mui/material';
import { FaHome, FaChartBar, FaBox, FaUsers, FaArrowRight, FaBreadSlice, FaUser } from 'react-icons/fa';
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
  const [isOpen, setIsOpen] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        onClick={handleToggle}
        sx={{
          position: 'absolute',
          top: 16,
          left: isOpen ? (isMobile ? '200px' : '240px') : '16px',
          zIndex: 1201,
          color: theme.palette.primary.contrastText,
          transition: 'left 0.3s ease',
        }}
        aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      >
        {isOpen ? <FaArrowRight /> : <FaArrowRight />}
      </IconButton>

      <Drawer
        sx={{
          width: isOpen ? (isMobile ? 200 : 240) : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? (isMobile ? 200 : 240) : 60,
            backgroundColor: theme.palette.background.default,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            paddingTop: '64px',
            transition: 'width 0.3s ease',
            color: theme.palette.text.primary,
          },
        }}
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={handleToggle}
        ModalProps={{
          keepMounted: true, // Melhor performance em dispositivos móveis
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FaBreadSlice className="sidebar-logo" style={{ color: '#d4a373', fontSize: '36px' }} />
            {isOpen && (
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

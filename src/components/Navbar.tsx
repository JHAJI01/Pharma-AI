import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Medicine Database', path: '/medicines' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          component={RouterLink}
          to={item.path}
          key={item.name}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ flexGrow: 1, color: theme.palette.primary.main }}
          >
            Medical Website
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar; 
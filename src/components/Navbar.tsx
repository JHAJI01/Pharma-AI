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
  keyframes,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Medicine Database', path: '/medicines' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact' },
];

const borderAnimation = keyframes`
  0% {
    background: linear-gradient(45deg, #2196f3, #4caf50, #ff9800, #e91e63);
    background-size: 400% 400%;
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0% 50%;
  }
  75% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={RouterLink}
            to={item.path}
            sx={{
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          padding: '2px',
          background: 'linear-gradient(45deg, #2196f3, #4caf50, #ff9800, #e91e63)',
          backgroundSize: '400% 400%',
          animation: `${borderAnimation} 8s ease infinite`,
          borderRadius: '0 0 20px 20px',
          margin: '0 20px',
          width: 'calc(100% - 40px)',
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: 'rgba(33, 150, 243, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '0 0 18px 18px',
            '&:hover': {
              background: 'rgba(33, 150, 243, 0.15)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                flexGrow: 1,
                color: 'white',
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Pharma-AI
            </Typography>
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#2196f3',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: 0,
                          height: '2px',
                          background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'black',
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar; 
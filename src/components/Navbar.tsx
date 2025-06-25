import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
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
  Container,
  Fade,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Medicines', path: '/medicines' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        },
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Pharma-AI
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      
      <List sx={{ pt: 2 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ListItem
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                mx: 2,
                mb: 1,
                borderRadius: '12px',
                background: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                backdropFilter: isActive(item.path) ? 'blur(20px)' : 'none',
                border: isActive(item.path) ? '1px solid rgba(255,255,255,0.3)' : 'none',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateX(10px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ListItemText 
                primary={item.name}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: isActive(item.path) ? 700 : 500,
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled 
            ? 'rgba(255,255,255,0.95)' 
            : 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '1px solid rgba(0,0,0,0.1)' 
            : '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ flexGrow: 1 }}
            >
              <Typography
                variant="h5"
                component={RouterLink}
                to="/"
                sx={{
                  fontWeight: 800,
                  background: scrolled 
                    ? 'linear-gradient(45deg, #667eea, #764ba2)' 
                    : 'linear-gradient(45deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textDecoration: 'none',
                  letterSpacing: 1,
                  transition: 'all 0.3s ease',
                }}
              >
                Pharma-AI
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                  background: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  '&:hover': {
                    background: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
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
                        color: scrolled ? 'text.primary' : 'white',
                        fontWeight: isActive(item.path) ? 700 : 500,
                        px: 2,
                        py: 1,
                        borderRadius: '12px',
                        background: isActive(item.path) 
                          ? scrolled 
                            ? 'rgba(102,126,234,0.1)' 
                            : 'rgba(255,255,255,0.2)'
                          : 'transparent',
                        backdropFilter: isActive(item.path) ? 'blur(20px)' : 'none',
                        border: isActive(item.path) 
                          ? scrolled 
                            ? '1px solid rgba(102,126,234,0.3)' 
                            : '1px solid rgba(255,255,255,0.3)'
                          : 'none',
                        '&:hover': {
                          background: scrolled 
                            ? 'rgba(102,126,234,0.1)' 
                            : 'rgba(255,255,255,0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: isActive(item.path) ? '80%' : '0%',
                          height: '2px',
                          background: scrolled 
                            ? 'linear-gradient(45deg, #667eea, #764ba2)' 
                            : 'linear-gradient(45deg, #FFD700, #FFA500)',
                          transform: 'translateX(-50%)',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::before': {
                          width: '80%',
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
        </Container>
      </AppBar>

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
            border: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
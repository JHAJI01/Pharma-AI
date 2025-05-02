import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PeopleIcon from '@mui/icons-material/People';

const services = [
  {
    title: 'General Checkup',
    description: 'Comprehensive health assessment and preventive care',
    icon: '🏥',
    gradient: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
  {
    title: 'Specialist Consultation',
    description: 'Expert medical advice from our specialist doctors',
    icon: '👨‍⚕️',
    gradient: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
  },
  {
    title: 'Diagnostic Services',
    description: 'Advanced diagnostic tests and imaging services',
    icon: '🔬',
    gradient: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services and support',
    icon: '🚑',
    gradient: 'linear-gradient(45deg, #F44336 30%, #FF5722 90%)',
  },
  {
    title: 'Pharmacy Services',
    description: 'Complete pharmacy services and medication management',
    icon: '💊',
    gradient: 'linear-gradient(45deg, #9C27B0 30%, #E040FB 90%)',
  },
  {
    title: 'Health Education',
    description: 'Patient education and wellness programs',
    icon: '📚',
    gradient: 'linear-gradient(45deg, #00BCD4 30%, #18FFFF 90%)',
  },
];

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/pattern.png")',
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196f3, #4caf50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                borderRadius: '2px',
              },
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: service.gradient,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '120px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                      }}
                    >
                      <Box
                        sx={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '50%',
                          width: '80px',
                          height: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '40px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(10deg)',
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        background: 'white',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
                        },
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          background: service.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: '1.1rem',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services; 
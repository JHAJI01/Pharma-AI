import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '24/7', label: 'Emergency Care' }
  ];

  const values = [
    { icon: <LocalHospitalIcon />, title: 'Quality Care', description: 'We provide the highest standard of medical care' },
    { icon: <PeopleIcon />, title: 'Patient First', description: 'Your health and comfort are our top priorities' },
    { icon: <EmojiObjectsIcon />, title: 'Innovation', description: 'Using cutting-edge technology for better healthcare' },
    { icon: <AccessTimeIcon />, title: 'Accessibility', description: 'Round-the-clock availability for your needs' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/about-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(76, 175, 80, 0.8) 100%)',
          },
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              About Pharma-AI
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                textAlign: 'center',
                mt: 2,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Transforming Healthcare Through Innovation
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #2196f3 0%, #4caf50 100%)',
                    height: '100%',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }} gutterBottom>
                    {stat.number}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div {...fadeInUp}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
                    borderLeft: '4px solid #2196f3',
                    '&:hover': {
                      transform: 'translateX(5px)',
                      boxShadow: '0 8px 24px rgba(33,150,243,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <MedicalServicesIcon sx={{ fontSize: 40, color: '#2196f3', mr: 2 }} />
                    <Typography variant="h4" component="h2" sx={{ color: '#1976d2' }}>
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography paragraph sx={{ color: '#333' }}>
                    We are dedicated to revolutionizing healthcare through artificial intelligence and innovative technology.
                    Our mission is to make healthcare more accessible, efficient, and personalized for everyone.
                  </Typography>
                  <Typography paragraph sx={{ color: '#333' }}>
                    By combining cutting-edge AI technology with expert medical knowledge, we aim to provide
                    accurate diagnoses, personalized treatment plans, and improved patient outcomes.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e8f5e9 100%)',
                    borderLeft: '4px solid #4caf50',
                    '&:hover': {
                      transform: 'translateX(5px)',
                      boxShadow: '0 8px 24px rgba(76,175,80,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ScienceIcon sx={{ fontSize: 40, color: '#4caf50', mr: 2 }} />
                    <Typography variant="h4" component="h2" sx={{ color: '#388e3c' }}>
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography paragraph sx={{ color: '#333' }}>
                    We envision a future where AI-powered healthcare is the standard, not the exception.
                    A world where every patient receives personalized, data-driven care that's both
                    effective and efficient.
                  </Typography>
                  <Typography paragraph sx={{ color: '#333' }}>
                    Through continuous innovation and research, we strive to push the boundaries of
                    what's possible in healthcare, making advanced medical solutions accessible to all.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196f3, #4caf50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 6,
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.main',
                        mr: 2,
                        background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ color: '#1976d2' }}>
                      {value.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 
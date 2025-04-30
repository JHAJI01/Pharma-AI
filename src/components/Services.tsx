import React from 'react';
import { Container, Typography, Box, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'General Checkup',
    description: 'Comprehensive health assessment and preventive care',
    image: '/images/checkup.jpg',
  },
  {
    title: 'Specialist Consultation',
    description: 'Expert medical advice from our specialist doctors',
    image: '/images/consultation.jpg',
  },
  {
    title: 'Diagnostic Services',
    description: 'Advanced diagnostic tests and imaging services',
    image: '/images/diagnostic.jpg',
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services and support',
    image: '/images/emergency.jpg',
  },
  {
    title: 'Pharmacy Services',
    description: 'Complete pharmacy services and medication management',
    image: '/images/pharmacy.jpg',
  },
  {
    title: 'Health Education',
    description: 'Patient education and wellness programs',
    image: '/images/education.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          }}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.title}
                    </Typography>
                    <Typography>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Services; 
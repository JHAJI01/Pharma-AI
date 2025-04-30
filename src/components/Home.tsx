import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Expert Doctors',
      description: 'Our team of experienced doctors provides the best medical care.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock medical support and emergency services.',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and facilities.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/medical-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Your Health is Our Priority
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Providing quality healthcare services with compassion and expertise
          </Typography>
          <Button
            component={Link}
            to="/appointments"
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Book an Appointment
          </Button>
        </motion.div>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, px: 3 }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 
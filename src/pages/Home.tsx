import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Expert Doctors',
      description: 'Our team of experienced doctors provides the best medical care.',
      icon: '👨‍⚕️',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock medical support and emergency services.',
      icon: '⏰',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and facilities.',
      icon: '🏥',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient 3s ease infinite',
              }}
            >
              Your Health is Our Priority
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Providing quality healthcare services with compassion and expertise
            </Typography>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              component={Link}
              to="/appointments"
              variant="contained"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                },
              }}
            >
              Book an Appointment
            </Button>
          </motion.div>
        </motion.div>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, px: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        style={{ 
                          fontSize: '3rem',
                          textAlign: 'center',
                          marginBottom: '1rem',
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ textAlign: 'center' }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home; 
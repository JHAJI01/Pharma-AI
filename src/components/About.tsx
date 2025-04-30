import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                We are dedicated to providing high-quality healthcare services to our community.
                Our mission is to make healthcare accessible, affordable, and efficient for everyone.
              </Typography>
              <Typography paragraph>
                With a team of experienced medical professionals and state-of-the-art facilities,
                we strive to deliver the best possible care to our patients.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography paragraph>
                We envision a world where quality healthcare is accessible to all.
                Through innovation and compassion, we aim to transform the healthcare experience.
              </Typography>
              <Typography paragraph>
                Our commitment to excellence drives us to continuously improve our services
                and provide the best possible care to our patients.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About; 
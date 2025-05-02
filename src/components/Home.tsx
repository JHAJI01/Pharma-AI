import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Avatar,
  Paper,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';

const services = [
  {
    title: 'Expert Doctors',
    description: 'Our team of experienced doctors provides personalized care and treatment.',
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#2196f3',
  },
  {
    title: 'Medicine Database',
    description: 'Access comprehensive information about medicines and their uses.',
    icon: <MedicationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#4caf50',
  },
  {
    title: 'Patient Care',
    description: 'We prioritize patient comfort and well-being in all our services.',
    icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#ff9800',
  },
  {
    title: '24/7 Availability',
    description: 'Emergency services and support available round the clock.',
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    color: '#e91e63',
  },
];

const features = [
  {
    title: 'AI-Powered Diagnosis',
    description: 'Advanced AI algorithms for accurate medical diagnosis',
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Personalized Treatment',
    description: 'Customized treatment plans based on patient data',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Digital Health Records',
    description: 'Secure and accessible electronic health records',
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '/images/testimonial1.jpg',
    rating: 5,
    comment: 'The doctors here are amazing! They took great care of me and explained everything clearly.',
  },
  {
    name: 'Michael Brown',
    role: 'Patient',
    image: '/images/testimonial2.jpg',
    rating: 5,
    comment: 'Very professional staff and excellent facilities. Highly recommended!',
  },
  {
    name: 'Emily Davis',
    role: 'Patient',
    image: '/images/testimonial3.jpg',
    rating: 4,
    comment: 'Great experience overall. The appointment system is very convenient.',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
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
            backdropFilter: 'blur(2px)',
          },
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              label="AI-Powered Healthcare"
              color="primary"
              sx={{
                mb: 2,
                color: 'white',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 2,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Welcome to Pharma-AI
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                position: 'relative',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                maxWidth: '600px',
              }}
            >
              Experience world-class healthcare with our expert team of doctors and advanced AI technology
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/appointment"
                variant="contained"
                size="large"
                startIcon={<CalendarMonthIcon />}
                sx={{
                  background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                    transform: 'translateY(-2px)',
                  },
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                Book an Appointment
              </Button>
              <Button
                component={Link}
                to="/medicines"
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Medicines
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
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
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
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
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                    borderTop: `4px solid ${service.color}`,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(45deg, ${service.color}, ${service.color}99)`,
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    {service.title === 'Medicine Database' && (
                      <Button
                        component={Link}
                        to="/medicines"
                        variant="text"
                        size="small"
                        color="primary"
                        sx={{
                          mt: 1,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View Medicines
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
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
            What Our Patients Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 2,
                        border: '3px solid #2196f3',
                      }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {testimonial.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography color="text.secondary">
                      "{testimonial.comment}"
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.9) 0%, rgba(76, 175, 80, 0.9) 100%)',
          },
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 3,
                position: 'relative',
              }}
            >
              Ready to Take Care of Your Health?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: 'white',
                mb: 4,
                position: 'relative',
              }}
            >
              Book an appointment with our expert doctors today
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                component={Link}
                to="/appointment"
                variant="contained"
                size="large"
                startIcon={<CalendarMonthIcon />}
                sx={{
                  background: 'white',
                  color: '#2196f3',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                Schedule Your Visit
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 
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
  Stack,
  IconButton,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const services = [
  {
    title: 'Expert Doctors',
    description: 'Our team of experienced doctors provides personalized care and treatment.',
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    color: '#2196f3',
    stats: '500+ Doctors',
  },
  {
    title: 'Medicine Database',
    description: 'Access comprehensive information about medicines and their uses.',
    icon: <MedicationIcon sx={{ fontSize: 40 }} />,
    color: '#4caf50',
    stats: '10,000+ Medicines',
  },
  {
    title: 'Patient Care',
    description: 'We prioritize patient comfort and well-being in all our services.',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    color: '#ff9800',
    stats: '50,000+ Patients',
  },
  {
    title: '24/7 Availability',
    description: 'Emergency services and support available round the clock.',
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    color: '#e91e63',
    stats: 'Always Available',
  },
];

const features = [
  {
    title: 'AI-Powered Diagnosis',
    description: 'Advanced AI algorithms for accurate medical diagnosis with 99.5% accuracy',
    icon: <ScienceIcon sx={{ fontSize: 50 }} />,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    delay: 0.1,
  },
  {
    title: 'Personalized Treatment',
    description: 'Customized treatment plans based on comprehensive patient data analysis',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 50 }} />,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    delay: 0.2,
  },
  {
    title: 'Digital Health Records',
    description: 'Secure and accessible electronic health records with blockchain technology',
    icon: <MedicalServicesIcon sx={{ fontSize: 50 }} />,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    delay: 0.3,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '/images/testimonial1.jpg',
    rating: 5,
    comment: 'The doctors here are amazing! They took great care of me and explained everything clearly. The AI diagnosis was incredibly accurate.',
    location: 'New York, USA',
  },
  {
    name: 'Michael Brown',
    role: 'Patient',
    image: '/images/testimonial2.jpg',
    rating: 5,
    comment: 'Very professional staff and excellent facilities. The digital health records system is revolutionary. Highly recommended!',
    location: 'London, UK',
  },
  {
    name: 'Emily Davis',
    role: 'Patient',
    image: '/images/testimonial3.jpg',
    rating: 4,
    comment: 'Great experience overall. The appointment system is very convenient and the personalized treatment plan worked perfectly.',
    location: 'Sydney, Australia',
  },
];

const stats = [
  { number: '500K+', label: 'Happy Patients', icon: <PeopleIcon /> },
  { number: '99.5%', label: 'Accuracy Rate', icon: <TrendingUpIcon /> },
  { number: '24/7', label: 'Support', icon: <AccessTimeIcon /> },
  { number: '100%', label: 'Secure', icon: <SecurityIcon /> },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Box>
      {/* Hero Section with Enhanced Design */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
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
            animation: 'float 20s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 4s ease-in-out infinite',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Stack spacing={3}>
                  <motion.div
                    animate={floatingAnimation}
                  >
                    <Chip
                      label="🚀 AI-Powered Healthcare Revolution"
                      sx={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(20px)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        py: 1,
                        px: 2,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    />
                  </motion.div>
                  
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                      fontWeight: 800,
                      color: 'white',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      lineHeight: 1.1,
                      background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Welcome to
                    <br />
                    <span style={{ 
                      background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Pharma-AI
                    </span>
                  </Typography>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      maxWidth: '600px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    Experience the future of healthcare with our cutting-edge AI technology, 
                    expert medical professionals, and personalized treatment solutions.
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={Link}
                        to="/appointment"
                        variant="contained"
                        size="large"
                        startIcon={<CalendarMonthIcon />}
                        sx={{
                          background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                          color: 'white',
                          py: 2,
                          px: 4,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: '50px',
                          boxShadow: '0 8px 25px rgba(255,107,107,0.4)',
                          border: 'none',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FF5252 30%, #FF7043 90%)',
                            boxShadow: '0 12px 35px rgba(255,107,107,0.6)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Book Appointment
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={Link}
                        to="/medicines"
                        variant="outlined"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.5)',
                          py: 2,
                          px: 4,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: '50px',
                          backdropFilter: 'blur(20px)',
                          background: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            borderColor: 'white',
                            background: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Explore Medicines
                      </Button>
                    </motion.div>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ y: y1 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Box
                      sx={{
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(255,255,255,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: -2,
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1)',
                          zIndex: -1,
                          animation: 'spin 3s linear infinite',
                        },
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          textAlign: 'center',
                          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}
                      >
                        AI
                        <br />
                        Health
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: 'linear-gradient(90deg, #667eea, #764ba2)',
                        },
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section with Enhanced Design */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 2,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              Why Choose Pharma-AI?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Experience the future of healthcare with our revolutionary AI-powered solutions
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -10 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '6px',
                        background: feature.gradient,
                      },
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                      },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section with Cards */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Our Premium Services
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: 'text.secondary',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Comprehensive healthcare solutions tailored to your needs
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      overflow: 'hidden',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${service.color}, ${service.color}99)`,
                      },
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '18px',
                          background: `linear-gradient(45deg, ${service.color}, ${service.color}99)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                          boxShadow: `0 8px 25px ${service.color}40`,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Chip
                        label={service.stats}
                        sx={{
                          background: `${service.color}20`,
                          color: service.color,
                          fontWeight: 600,
                          border: `1px solid ${service.color}40`,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Testimonials Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 2,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              What Our Patients Say
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Real stories from real patients who experienced our exceptional care
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 6,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    textAlign: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '15px solid transparent',
                      borderRight: '15px solid transparent',
                      borderBottom: '15px solid rgba(255,255,255,0.95)',
                    },
                  }}
                >
                  <Avatar
                    src={testimonials[currentTestimonial].image}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid white',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    }}
                  />
                  <Rating
                    value={testimonials[currentTestimonial].rating}
                    readOnly
                    sx={{
                      mb: 2,
                      '& .MuiRating-iconFilled': {
                        color: '#FFD700',
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontStyle: 'italic',
                      color: 'text.primary',
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: '1.2rem',
                    }}
                  >
                    "{testimonials[currentTestimonial].comment}"
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {testimonials[currentTestimonial].name}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {testimonials[currentTestimonial].location}
                  </Typography>
                </Paper>
              </motion.div>
            </AnimatePresence>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: index === currentTestimonial ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'white',
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Enhanced CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          },
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: 'white',
                  mb: 2,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                Ready to Transform Your Health?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 6,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Join thousands of satisfied patients who have experienced the future of healthcare with Pharma-AI
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to="/appointment"
                    variant="contained"
                    size="large"
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      background: 'white',
                      color: '#f5576c',
                      py: 2,
                      px: 6,
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      borderRadius: '50px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.95)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Schedule Your Visit
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.7)',
                      py: 2,
                      px: 6,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      backdropFilter: 'blur(20px)',
                      background: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Rating,
  Chip,
  CardMedia,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const doctors = [
  { 
    id: 1, 
    name: 'Dr. John Smith', 
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.8,
    image: '/images/doctor1.jpg',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    availableHours: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  },
  { 
    id: 2, 
    name: 'Dr. Sarah Johnson', 
    specialty: 'Neurology',
    experience: '12 years',
    rating: 4.9,
    image: '/images/doctor2.jpg',
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    availableHours: ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00']
  },
  { 
    id: 3, 
    name: 'Dr. Michael Brown', 
    specialty: 'Pediatrics',
    experience: '10 years',
    rating: 4.7,
    image: '/images/doctor3.jpg',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    availableHours: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  }
];

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.reason) newErrors.reason = 'Please provide a reason for the appointment';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({
          doctor: '',
          date: null,
          time: '',
          name: '',
          email: '',
          phone: '',
          reason: '',
        });
      } catch (error) {
        console.error('Error submitting appointment:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/medical-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
          backdropFilter: 'blur(2px)',
        },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Book an Appointment
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            {submitSuccess ? (
              <Alert severity="success" sx={{ mb: 3 }}>
                Your appointment has been successfully scheduled!
              </Alert>
            ) : null}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Select a Doctor
                  </Typography>
                  <Grid container spacing={2}>
                    {doctors.map((doctor) => (
                      <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                        <Card
                          component={motion.div}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, doctor: doctor.id.toString() }));
                            if (errors.doctor) {
                              setErrors(prev => ({ ...prev, doctor: '' }));
                            }
                          }}
                          sx={{
                            cursor: 'pointer',
                            border: formData.doctor === doctor.id.toString() ? `2px solid ${theme.palette.primary.main}` : 'none',
                            transition: 'border 0.3s ease',
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={doctor.image}
                            alt={doctor.name}
                            sx={{
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.05)',
                              },
                              borderRadius: '8px 8px 0 0',
                              borderBottom: '1px solid rgba(0,0,0,0.1)',
                            }}
                          />
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {doctor.name}
                            </Typography>
                            <Typography color="text.secondary" gutterBottom>
                              {doctor.specialty}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Rating value={doctor.rating} precision={0.1} readOnly />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                ({doctor.rating})
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              Experience: {doctor.experience}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  {errors.doctor && (
                    <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                      {errors.doctor}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Appointment Date"
                      value={formData.date}
                      onChange={(newValue) => {
                        setFormData((prev) => ({ ...prev, date: newValue }));
                        if (errors.date) {
                          setErrors((prev) => ({ ...prev, date: '' }));
                        }
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.date,
                          helperText: errors.date,
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.time}>
                    <InputLabel>Available Time</InputLabel>
                    <Select
                      value={formData.time}
                      label="Available Time"
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, time: e.target.value }));
                        if (errors.time) {
                          setErrors((prev) => ({ ...prev, time: '' }));
                        }
                      }}
                    >
                      {doctors
                        .find((d) => d.id === Number(formData.doctor))
                        ?.availableHours.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                    </Select>
                    {errors.time && (
                      <Typography color="error" variant="caption">
                        {errors.time}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    InputProps={{
                      startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Reason for Appointment"
                    name="reason"
                    multiline
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    error={!!errors.reason}
                    helperText={errors.reason}
                    InputProps={{
                      startAdornment: <MedicalServicesIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      py: 2,
                      background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                      },
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Book Appointment'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Appointment; 
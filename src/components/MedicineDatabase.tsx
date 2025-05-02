import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
  Divider,
  Paper,
  InputAdornment,
  Tabs,
  Tab,
  Badge,
  Avatar,
  Stack
} from '@mui/material';
import { medicines } from '../data/medicines';
import { motion, AnimatePresence } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CategoryIcon from '@mui/icons-material/Category';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`medicine-tabpanel-${index}`}
      aria-labelledby={`medicine-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const MedicineDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState(medicines);
  const [selectedMedicine, setSelectedMedicine] = useState<typeof medicines[0] | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get unique categories
  const categories = Array.from(new Set(medicines.map(medicine => medicine.category)));

  useEffect(() => {
    const filtered = medicines.filter(medicine => {
      const matchesSearch = 
        medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.brandNames.some(brand => brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
        medicine.primaryUse.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === '' || medicine.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredMedicines(filtered);
  }, [searchTerm, categoryFilter]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleFavorite = (medicineId: number) => {
    setFavorites(prev => 
      prev.includes(medicineId) 
        ? prev.filter(id => id !== medicineId)
        : [...prev, medicineId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleMedicineClick = (medicine: typeof medicines[0]) => {
    setSelectedMedicine(medicine);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196f3, #4caf50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                borderRadius: '2px',
              }
            }}
          >
            Medicine Database
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
            Search and explore our comprehensive database of medicines
          </Typography>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 4,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Search Medicines"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterListIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="medicine tabs"
            centered
            sx={{
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(45deg, #2196f3, #4caf50)',
              },
            }}
          >
            <Tab 
              icon={<MedicationIcon />} 
              label="All Medicines" 
              sx={{ 
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
            <Tab 
              icon={<FavoriteIcon />} 
              label="Favorites" 
              sx={{ 
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
            <Tab 
              icon={<CategoryIcon />} 
              label="Categories" 
              sx={{ 
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {filteredMedicines.map((medicine) => (
              <Grid item xs={12} sm={6} md={4} key={medicine.id}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      maxWidth: '320px',
                      margin: '0 auto',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #2196f3, #4caf50)',
                      },
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        '& .medicine-icon': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        mb: 2,
                        position: 'relative',
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 1,
                        }}>
                          <Avatar 
                            className="medicine-icon"
                            sx={{ 
                              bgcolor: 'primary.main',
                              width: 40,
                              height: 40,
                              transition: 'transform 0.3s ease',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                          >
                            <LocalHospitalIcon sx={{ fontSize: 20 }} />
                          </Avatar>
                          <Box>
                            <Typography 
                              variant="subtitle1" 
                              component="h2" 
                              sx={{ 
                                mb: 0, 
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'text.primary',
                              }}
                            >
                              {medicine.genericName}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'text.secondary',
                                display: 'block',
                                mt: 0.5,
                              }}
                            >
                              {medicine.category}
                            </Typography>
                          </Box>
                        </Box>
                        <IconButton 
                          onClick={() => toggleFavorite(medicine.id)}
                          size="small"
                          sx={{ 
                            color: favorites.includes(medicine.id) ? 'error.main' : 'text.secondary',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: 'error.main',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          {favorites.includes(medicine.id) ? 
                            <FavoriteIcon sx={{ fontSize: 20 }} /> : 
                            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                          }
                        </IconButton>
                      </Box>
                      
                      <Box sx={{ 
                        mb: 2,
                        p: 1.5,
                        borderRadius: 1,
                        background: 'rgba(33, 150, 243, 0.05)',
                      }}>
                        <Typography 
                          variant="caption" 
                          color="text.secondary" 
                          display="block"
                          sx={{ mb: 1, fontWeight: 500 }}
                        >
                          Brand Names:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {medicine.brandNames.slice(0, 2).map((brand) => (
                            <Chip 
                              key={brand} 
                              label={brand} 
                              size="small"
                              sx={{ 
                                height: 24,
                                fontSize: '0.75rem',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                '&:hover': {
                                  backgroundColor: 'rgba(33, 150, 243, 0.2)',
                                },
                              }}
                            />
                          ))}
                          {medicine.brandNames.length > 2 && (
                            <Chip 
                              label={`+${medicine.brandNames.length - 2}`}
                              size="small"
                              sx={{ 
                                height: 24,
                                fontSize: '0.75rem',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                              }}
                            />
                          )}
                        </Box>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography 
                          variant="caption" 
                          color="text.secondary" 
                          display="block"
                          sx={{ mb: 1, fontWeight: 500 }}
                        >
                          Primary Use:
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.primary" 
                          sx={{ 
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {medicine.primaryUse.length > 80 
                            ? `${medicine.primaryUse.substring(0, 80)}...` 
                            : medicine.primaryUse}
                        </Typography>
                      </Box>

                      <Box sx={{ 
                        p: 1.5,
                        borderRadius: 1,
                        background: 'rgba(76, 175, 80, 0.05)',
                      }}>
                        <Typography 
                          variant="caption" 
                          color="text.secondary" 
                          display="block"
                          sx={{ mb: 1, fontWeight: 500 }}
                        >
                          Side Effects:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {medicine.commonSideEffects.slice(0, 2).map((effect) => (
                            <Chip 
                              key={effect} 
                              label={effect} 
                              size="small"
                              variant="outlined"
                              icon={<WarningIcon sx={{ fontSize: 16 }} />}
                              sx={{ 
                                height: 24,
                                fontSize: '0.75rem',
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                },
                              }}
                            />
                          ))}
                          {medicine.commonSideEffects.length > 2 && (
                            <Chip 
                              label={`+${medicine.commonSideEffects.length - 2}`}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                height: 24,
                                fontSize: '0.75rem',
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ mt: 'auto', p: 2 }}>
                      <Button 
                        size="small" 
                        color="primary"
                        onClick={() => handleMedicineClick(medicine)}
                        sx={{
                          background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                          color: 'white',
                          fontSize: '0.8rem',
                          padding: '6px 16px',
                          borderRadius: '20px',
                          textTransform: 'none',
                          fontWeight: 500,
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            {filteredMedicines
              .filter(medicine => favorites.includes(medicine.id))
              .map((medicine) => (
                <Grid item xs={12} sm={6} md={4} key={medicine.id}>
                  <motion.div variants={itemVariants}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 3,
                        },
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                              <LocalHospitalIcon />
                            </Avatar>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 0 }}>
                              {medicine.genericName}
                            </Typography>
                          </Box>
                          <IconButton 
                            onClick={() => toggleFavorite(medicine.id)}
                            sx={{ color: 'error.main' }}
                          >
                            <FavoriteIcon />
                          </IconButton>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            Brand Names:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {medicine.brandNames.map((brand) => (
                              <Chip 
                                key={brand} 
                                label={brand} 
                                color="primary"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            Primary Use:
                          </Typography>
                          <Typography variant="body1">
                            {medicine.primaryUse}
                          </Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            Category:
                          </Typography>
                          <Chip 
                            label={medicine.category}
                            color="primary"
                            variant="outlined"
                          />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" gutterBottom>
                            Common Side Effects:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {medicine.commonSideEffects.map((effect) => (
                              <Chip 
                                key={effect} 
                                label={effect} 
                                variant="outlined"
                                icon={<WarningIcon fontSize="small" />}
                              />
                            ))}
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <motion.div variants={itemVariants}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3,
                      },
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          <ScienceIcon />
                        </Avatar>
                        <Typography variant="h6" component="h2">
                          {category}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {medicines.filter(m => m.category === category).length} medicines
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        color="primary"
                        onClick={() => setCategoryFilter(category)}
                        sx={{
                          background: 'linear-gradient(45deg, #2196f3, #4caf50)',
                          color: 'white',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                          },
                        }}
                      >
                        View Medicines
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {filteredMedicines.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No medicines found matching your search criteria
            </Typography>
          </Box>
        )}

        <AnimatePresence>
          {selectedMedicine && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
              onClick={() => setSelectedMedicine(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  maxWidth: '600px',
                  width: '90%',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      <LocalHospitalIcon />
                    </Avatar>
                    <Typography variant="h5" component="h2">
                      {selectedMedicine.genericName}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => setSelectedMedicine(null)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Brand Names:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedMedicine.brandNames.map((brand) => (
                      <Chip 
                        key={brand} 
                        label={brand} 
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Primary Use:
                  </Typography>
                  <Typography variant="body1">
                    {selectedMedicine.primaryUse}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Category:
                  </Typography>
                  <Chip 
                    label={selectedMedicine.category}
                    color="primary"
                    variant="outlined"
                    icon={<InfoIcon />}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    Common Side Effects:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedMedicine.commonSideEffects.map((effect) => (
                      <Chip 
                        key={effect} 
                        label={effect} 
                        variant="outlined"
                        icon={<WarningIcon fontSize="small" />}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default MedicineDatabase; 
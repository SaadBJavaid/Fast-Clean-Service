import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const ServiceSelectionForm = ({ selectedOption, selectOption }) => {
    return (
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '3rem',
                        lg: '3.5rem',
                    },
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                    color: 'white',
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                        content: '""',
                        width: '50%',
                        height: '4px',
                        backgroundColor: '#FF0000',
                        position: 'absolute',
                        bottom: '-5px',
                        left: '25%',
                    },
                }}
            >
                Choose a Service
            </Typography>
            <Grid container spacing={2} mt={5}>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{
                            cursor: 'pointer',
                            border: selectedOption === 'Anywhere Autocare' ? '2px solid red' : '',
                            backgroundColor: selectedOption === 'Anywhere Autocare' ? '#444' : '#333',
                            color: '#fff',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                            },
                        }}
                        onClick={() => selectOption('Anywhere Autocare', 0)}
                    >
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/1.png"
                            title="Anywhere Autocare"
                        />
                        <CardContent>
                            <Typography variant="h5">Anywhere Autocare</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{
                            cursor: 'pointer',
                            border: selectedOption === 'Subscription Plans' ? '2px solid blue' : '',
                            backgroundColor: selectedOption === 'Subscription Plans' ? '#444' : '#333',
                            color: '#fff',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                            },
                        }}
                        onClick={() => selectOption('Subscription Plans', 200)}
                    >
                        <CardMedia
                            sx={{ height: 340 }}
                            image="/2.png"
                            title="Subscription Plans"
                        />
                        <CardContent>
                            <Typography variant="h5">Subscription Plans</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ServiceSelectionForm;

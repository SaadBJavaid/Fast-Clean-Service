import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import PackageDetails from './PackageDetails';
import SubscriptionDetails from "../../components/ServiceDrawer/SubscriptionDetails";

const PlanSelectionForm = ({ selectedOption, selectedPlan, selectPlan, setFormPrice }) => {

    const handleCardClick = (plan, price) => {
        selectPlan(plan);
        setFormPrice(price);
    };

    return (
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    fontSize: {
                        xs: '2rem',  // Small screen
                        sm: '2.5rem', // Medium screen
                        md: '3rem',  // Large screen
                        lg: '3.5rem', // Extra large screen
                    },
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                    color: '#333',
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
                }}>
                Choose a Plan
            </Typography>
            <Grid container spacing={2} mt={5}>
                {selectedOption === 'Anywhere Autocare' && (
                    <>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Standard' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Standard', 74.95)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/3.png"
                                    title="Standard"
                                />
                                <CardContent>
                                    <Typography variant="h5">Standard</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Deluxe' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Deluxe', 89.95)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="car1.jpg"
                                    title="Deluxe"
                                />
                                <CardContent>
                                    <Typography variant="h5">Deluxe</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Premium' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Premium', 394.95)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="car.jpg"
                                    title="Premium"
                                />
                                <CardContent>
                                    <Typography variant="h5">Premium</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                )}
                {selectedOption === 'Subscription Plans' && (
                    <>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Subscriptions
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Exterior' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Exterior', 50)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/d1.jpg"
                                    title="Exterior"
                                />
                                <CardContent>
                                    <Typography variant="h5">Exterior</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Interior' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Interior', 75)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/d2.jpg"
                                    title="Interior"
                                />
                                <CardContent>
                                    <Typography variant="h5">Interior</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: selectedPlan === 'Complete Car Care' ? '2px solid red' : 'none',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => handleCardClick('Complete Car Care', 150)}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/d3.jpg"
                                    title="Complete Car Care"
                                />
                                <CardContent>
                                    <Typography variant="h5">Total Clean Package</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                )}
            </Grid>
            {selectedOption === 'Anywhere Autocare' && (
                <PackageDetails
                    selectedPlan={selectedPlan}
                    setFormPrice={setFormPrice}
                />
            )}
            {selectedOption === 'Subscription Plans' && selectedPlan && (
                <SubscriptionDetails
                    selectedPlan={selectedPlan}
                />
            )}
        </Box>
    );
};

export default PlanSelectionForm;

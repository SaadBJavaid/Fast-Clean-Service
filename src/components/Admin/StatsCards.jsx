import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const StatsCards = () => {
    return (
        <Grid container spacing={3}>
            {/* Bookings Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={bookingCardStyles}>
                    <CardContent sx={cardContentStyles}>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Number of Bookings
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1, fontWeight: "bold" }}>
                            120
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* Work Scheduled Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={workCardStyles}>
                    <CardContent sx={cardContentStyles}>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Work Scheduled
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1, fontWeight: "bold" }}>
                            45
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* Contact Queries Received Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={contactCardStyles}>
                    <CardContent sx={cardContentStyles}>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Queries Received
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 1, fontWeight: "bold" }}>
                            85
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

// Shared Card Content Styles to reduce height
const cardContentStyles = {
    padding: '16px', // Reduced padding inside the card
    '&:last-child': {
        paddingBottom: '16px', // Ensure consistent padding
    },
};

// Gradient styles for different cards
const bookingCardStyles = {
    background: 'linear-gradient(50deg, #56CCF2 0%, #2F80ED 100%)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    padding: 2, // Reduced padding for card content
    textAlign: 'center',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    },
};

const workCardStyles = {
    background: 'linear-gradient(50deg, #43E97B 0%, #38F9D7 100%)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    padding: 2,
    textAlign: 'center',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    },
};

const contactCardStyles = {
    background: 'linear-gradient(50deg, #FF758C 0%, #FF7EB3 100%)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    padding: 2,
    textAlign: 'center',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    },
};

// Shared heading styles for all cards
const headingStyles = {
    fontWeight: 'bold',
    fontSize: '2rem', // Slightly reduced font size to fit the smaller height
    color: '#ffffff',
};

export default StatsCards;

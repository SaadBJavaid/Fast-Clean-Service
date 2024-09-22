import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import StatsCards from './StatsCards';
import BookingsCard from './BookingCard';

const Dashboard = () => {
    return (
        <Box sx={{ padding: '16px' }}>
            <StatsCards />

            <Box sx={{ marginTop: '30px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <BookingsCard />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;

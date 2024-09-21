import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import StatsCards from './StatsCards';
import BookingsCard from './BookingCard';
import ContactsCard from './ContactsCard';
import SchedulingCard from './SchedulingCard';

const Dashboard = () => {
    return (
        <Box sx={{ padding: '30px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Dashboard
            </Typography>

            <StatsCards />

            <Box sx={{ marginTop: '30px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <BookingsCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={6}>
                                <ContactsCard />
                            </Grid>
                            <Grid item xs={6}>
                                <SchedulingCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Dashboard;

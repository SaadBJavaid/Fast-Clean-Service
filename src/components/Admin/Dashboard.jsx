import React from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import StatsCards from './StatsCards';
import BookingsCard from './BookingCard';
import ContactsCard from './ContactsCard';
import SchedulingCard from './SchedulingCard';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1, ml: '240px', display: 'flex', flexDirection: 'column' }}>
                <Navbar />

                <Grid container spacing={3} sx={{ padding: 3 }}>
                    <Grid item xs={12}>
                        <StatsCards />
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ padding: 3 }}>
                    <Grid item xs={12} md={8}>
                        <BookingsCard />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container spacing={3} direction="column">
                            <Grid item xs={12}>
                                <ContactsCard />
                            </Grid>
                            <Grid item xs={12}>
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

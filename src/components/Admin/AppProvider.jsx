import React from 'react';
import { useRouter } from 'next/router'; // Next.js router
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DashboardLayout } from '@mui/toolpad-core';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentIcon from '@mui/icons-material/Assignment';

const demoTheme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF',
        },
        mode: 'light',
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
        },
    },
});

// Example navigation configuration
const NAVIGATION = [
    { segment: 'dashboard', title: 'Dashboard', icon: <HomeIcon /> },
    { segment: 'bookings', title: 'Bookings', icon: <EventIcon /> },
    { segment: 'fleetpro', title: 'FleetCare Pro', icon: <ContactMailIcon /> },
    { segment: 'scheduling', title: 'Scheduling', icon: <AssignmentIcon /> },
];

const AppProvider = ({ children }) => {
    const router = useRouter();

    return (
        <ThemeProvider theme={demoTheme}>
            <DashboardLayout navigation={NAVIGATION} router={router}>
                {children}
            </DashboardLayout>
        </ThemeProvider>
    );
};

export default AppProvider;

import React from 'react';
import {useRouter} from 'next/router';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {DashboardLayout} from '@mui/toolpad-core';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

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
    { segment: 'fleetpro', title: 'FleetCare Pro', icon: <DirectionsCarIcon /> },
    { segment: 'scheduling', title: 'Scheduling', icon: <DirectionsBoatIcon /> },
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

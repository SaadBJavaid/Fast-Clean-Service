"use client";
import React from 'react';
import {useRouter} from 'next/router';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {DashboardLayout} from '@mui/toolpad-core';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from "@mui/icons-material/Notifications";

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

const NAVIGATION = [
    { segment: 'dashboard', title: 'Dashboard', icon: <HomeIcon /> },
    { segment: 'booking', title: 'My Bookings', icon: <EventIcon /> },
    { segment: 'notifications', title: 'Notifications', icon: <NotificationsIcon />  },
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

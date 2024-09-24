"use client";
import React, {useState} from 'react';
import {Box, CssBaseline, Toolbar} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';
import Dashboard from '../../components/Admin/Dashboard';
import BookingsPage from './booking/page';
import FleetProCareAppointments from './fleetpro/page';
import OtherVehiclesPage from './othervehicles/page';
import Navbar from '../../components/Admin/Navbar';

const renderTabContent = (selectedTab) => {
    switch (selectedTab) {
        case 'Dashboard':
            return <Dashboard />;
        case 'Bookings':
            return <BookingsPage />;
        case 'FleetCare Pro':
            return <FleetProCareAppointments />;
        case 'Other Vehicles Management':
            return <OtherVehiclesPage />;
        default:
            return <Dashboard />;
    }
};

const AdminDashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Dashboard');
    const backgroundImage = "/img_1.png";

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1,
                opacity: 0.5,
            }} />
            <Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleTabChange={handleTabChange} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflowY: 'auto',
                    zIndex: 1,
                    position: 'relative',
                }}
            >
                <Toolbar />
                {renderTabContent(selectedTab)}
            </Box>
        </Box>
    );
};

export default AdminDashboard;

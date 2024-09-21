"use client";
import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from '../../components/Admin/Navbar';
import Sidebar from '../../components/Admin/Sidebar';
import Dashboard from '../../components/Admin/Dashboard';
import BookingsPage from './booking/page';
import ContactsPage from './contacts/page';
import SchedulingPage from './scheduling/page';

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

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Bookings':
                return <BookingsPage />;
            case 'Contacts':
                return <ContactsPage />;
            case 'Scheduling':
                return <SchedulingPage />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
            opacity: 0.5,
        }}>
            <CssBaseline />
            <Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleTabChange={handleTabChange} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflowY: 'auto',
                }}
            >
                <Toolbar />
                {renderTabContent()}
            </Box>
        </Box>
    );
};

export default AdminDashboard;

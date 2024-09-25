"use client";
import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';
import { useRouter } from 'next/navigation';
import Dashboard from '../../components/Admin/Dashboard';
import BookingsPage from './booking/page';
import FleetProCareAppointments from './fleetpro/page';
import OtherVehiclesPage from './othervehicles/page';
import Navbar from '../../components/Admin/Navbar';
import { signOut, useSession } from "next-auth/react";
import useSnackbar from "../../hooks/useSnackbar";
import { Loader } from "../../components/mui/Loader";

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

    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const { openSnackbar } = useSnackbar();

    console.log("session123", session)

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/admin/signin');
        } else if (!session.user.isAdmin) {
            router.push('/admin/signin');
            openSnackbar("error not an admin!");
        } else {
            setLoading(false);
        }
    }, [session, status, router]);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleSignOut = () => {
        signOut();
    };

    if (loading) return <Loader />;

    return (
        <>
            <Navbar
                toggleDrawer={toggleDrawer}
                drawerOpen={drawerOpen}
                handleSignOut={handleSignOut}
            />
            <Box sx={{ display: 'flex' }}>
                <Sidebar
                    drawerOpen={drawerOpen}
                    toggleDrawer={toggleDrawer}
                    handleTabChange={handleTabChange}
                    handleSignOut={handleSignOut}
                />
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
        </>
    );
};

export default AdminDashboard;

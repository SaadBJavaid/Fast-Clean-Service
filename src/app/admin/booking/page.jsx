"use client";
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box, Dialog, DialogContent, DialogTitle, IconButton, Avatar, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LicenseIcon from '@mui/icons-material/LocalOffer'; // License plate icon
import ServiceIcon from '@mui/icons-material/Build'; // For service name
import dynamic from 'next/dynamic';

// Dynamically import Sidebar and Navbar
const Sidebar = dynamic(() => import('../../../components/Admin/Sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../../../components/Admin/Navbar'), { ssr: false });

// Temporary booking data
const bookingsData = [
    {
        firstName: "John",
        surname: "Doe",
        companyName: "JD Enterprises",
        street: "123 Elm St",
        zipCode: "10001",
        city: "New York",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        vehicleMakeAndModel: "Tesla Model S",
        message: "Please clean the interior thoroughly.",
        serviceName: "Full Exterior Wash",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "ABC1234" },
        serviceAddons: ["Wax", "Tire Shine"],
    },
    {
        firstName: "Jane",
        surname: "Smith",
        companyName: "Smith Co",
        street: "456 Oak Ave",
        zipCode: "90210",
        city: "Beverly Hills",
        email: "janesmith@example.com",
        phoneNumber: "987-654-3210",
        vehicleMakeAndModel: "BMW X5",
        message: "Please pay extra attention to the tires.",
        serviceName: "Interior Detailing",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "XYZ5678" },
        serviceAddons: ["Tire Shine", "Engine Clean"],
    }
];

const BookingsPage = () => {
    const [selectedBooking, setSelectedBooking] = useState(null);

    const handleOpenModal = (booking) => {
        setSelectedBooking(booking);
    };

    const handleCloseModal = () => {
        setSelectedBooking(null);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '240px', width: '100%' }}> {/* Sidebar takes 240px */}
                <Navbar />
                <Box sx={{ padding: '30px' }}>
                    <Typography variant="h4" gutterBottom>
                        Bookings
                    </Typography>

                    <Grid container spacing={3}>
                        {bookingsData.map((booking, index) => (
                            <Grid item xs={12} sm={6} lg={3} key={index}> {/* 4 cards in a row for large screens */}
                                <Card
                                    sx={{
                                        backgroundColor: '#f4f6f8',
                                        color: '#333',
                                        borderRadius: '15px',
                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                        },
                                        padding: '15px',
                                    }}
                                    onClick={() => handleOpenModal(booking)} // Open modal on click
                                >
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Avatar sx={{ margin: 'auto', width: 56, height: 56, backgroundColor: '#2196F3' }}>
                                            {booking.firstName[0] + booking.surname[0]}
                                        </Avatar>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '10px' }}>
                                            {`${booking.firstName} ${booking.surname}`}
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: '5px' }}>
                                            Phone: {booking.phoneNumber}
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: '5px' }}>
                                            Service: {booking.serviceName}
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                            Time: {booking.appointmentTimestamp.toLocaleString()}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Popup Modal for detailed view */}
                    {selectedBooking && (
                        <Dialog open={!!selectedBooking} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    {`${selectedBooking.firstName} ${selectedBooking.surname}`}
                                </Typography>
                                <IconButton aria-label="close" onClick={handleCloseModal}>
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers sx={{ padding: '20px' }}>
                                {/* Gradient Banner Behind the Avatar */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: '120px',
                                        background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            backgroundColor: '#fff',
                                            color: '#2196F3',
                                            fontSize: '2rem',
                                            border: '3px solid #fff',
                                        }}
                                    >
                                        {selectedBooking.firstName[0] + selectedBooking.surname[0]}
                                    </Avatar>
                                </Box>

                                {/* Name and Company */}
                                <Box sx={{ textAlign: 'center', margin: '20px' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
                                        {`${selectedBooking.firstName} ${selectedBooking.surname}`}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: '#666', fontSize: '1rem', marginBottom: '20px' }}>
                                        {selectedBooking.companyName || 'Individual'}
                                    </Typography>
                                </Box>

                                {/* Contact Info in 2x2 Grid */}
                                <Grid container spacing={2} sx={{ marginBottom: '20px', textAlign: 'center' }}>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                            <PhoneIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
                                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                                {selectedBooking.phoneNumber}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                            <EmailIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
                                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                                {selectedBooking.email}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                            <ServiceIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
                                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                                {selectedBooking.serviceName}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                            <LicenseIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
                                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                                License Plate: {selectedBooking.vehicleDetails.licensePlate}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                {/* Add-ons and Message in Circular Box with Solid Fill */}
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        borderRadius: '10px',
                                        padding: '15px',
                                        background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                                        color: '#fff',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '5px' }}>
                                        Add-ons
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                        {selectedBooking.serviceAddons.join(', ')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        borderRadius: '10px',
                                        padding: '15px',
                                        background: 'linear-gradient(135deg, #03a9f4, #2196f3)',
                                        color: '#fff',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '5px' }}>
                                        Message
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                                        {selectedBooking.message}
                                    </Typography>
                                </Box>
                            </DialogContent>
                        </Dialog>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default BookingsPage;

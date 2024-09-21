"use client";
import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    InputAdornment, Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { ProfileCard, CardAvatar, CardInfo, InfoHeading, InfoSubHeading, ModalCard, ModalButton, ModalLabel, ModalValue } from '../../../components/mui/AdminPkgs';

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
    },
    // Additional 10 bookings
    {
        firstName: "Michael",
        surname: "Brown",
        companyName: "CleanRide",
        street: "789 Maple St",
        zipCode: "30303",
        city: "Atlanta",
        email: "michael.brown@example.com",
        phoneNumber: "404-555-1234",
        vehicleMakeAndModel: "Ford Mustang",
        serviceName: "Polish & Wax",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "MNO3456" },
        serviceAddons: ["Polish", "Ceramic Coating"],
    },
    {
        firstName: "Emily",
        surname: "Johnson",
        companyName: "WashMasters",
        street: "135 Lake Dr",
        zipCode: "60606",
        city: "Chicago",
        email: "emily.johnson@example.com",
        phoneNumber: "312-555-6789",
        vehicleMakeAndModel: "Mercedes-Benz C300",
        serviceName: "Full Interior Cleaning",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "ABC7890" },
        serviceAddons: ["Leather Conditioning", "Carpet Cleaning"],
    },
    {
        firstName: "David",
        surname: "Clark",
        companyName: "Shiny Wheels",
        street: "246 Park St",
        zipCode: "94103",
        city: "San Francisco",
        email: "david.clark@example.com",
        phoneNumber: "415-555-2468",
        vehicleMakeAndModel: "Chevy Suburban",
        serviceName: "Exterior Wash",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "XYZ3456" },
        serviceAddons: ["Tire Shine", "Rim Polishing"],
    },
    {
        firstName: "Sarah",
        surname: "Miller",
        companyName: "AutoGlow",
        street: "321 Sunset Blvd",
        zipCode: "90028",
        city: "Los Angeles",
        email: "sarah.miller@example.com",
        phoneNumber: "310-555-7890",
        vehicleMakeAndModel: "Toyota Corolla",
        serviceName: "Ceramic Coating",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "JKL7890" },
        serviceAddons: ["Glass Protection", "Engine Bay Cleaning"],
    },
    {
        firstName: "Linda",
        surname: "Taylor",
        companyName: "SparkleAuto",
        street: "789 Willow Ave",
        zipCode: "80202",
        city: "Denver",
        email: "linda.taylor@example.com",
        phoneNumber: "303-555-5678",
        vehicleMakeAndModel: "Honda Civic",
        serviceName: "Full Wash",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "FGH1234" },
        serviceAddons: ["Wax", "Tire Shine"],
    },
    {
        firstName: "Chris",
        surname: "White",
        companyName: "DetailKing",
        street: "369 Highland Dr",
        zipCode: "02118",
        city: "Boston",
        email: "chris.white@example.com",
        phoneNumber: "617-555-2345",
        vehicleMakeAndModel: "Jeep Wrangler",
        serviceName: "Exterior Detailing",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "KLM5678" },
        serviceAddons: ["Polish", "Tire Shine"],
    },
    {
        firstName: "Rachel",
        surname: "Walker",
        companyName: "AutoLux",
        street: "654 Palm St",
        zipCode: "75201",
        city: "Dallas",
        email: "rachel.walker@example.com",
        phoneNumber: "214-555-1234",
        vehicleMakeAndModel: "Audi Q7",
        serviceName: "Interior Detailing",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "NOP3456" },
        serviceAddons: ["Leather Cleaning", "Glass Cleaning"],
    },
    {
        firstName: "Sophia",
        surname: "Martinez",
        companyName: "ShinyCarts",
        street: "987 Silver Ave",
        zipCode: "85001",
        city: "Phoenix",
        email: "sophia.martinez@example.com",
        phoneNumber: "602-555-7890",
        vehicleMakeAndModel: "Tesla Model 3",
        serviceName: "Full Detailing",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "PQR6789" },
        serviceAddons: ["Rim Polishing", "Engine Detailing"],
    },
    {
        firstName: "Matthew",
        surname: "Lewis",
        companyName: "CarShine Pro",
        street: "123 Rapid St",
        zipCode: "33101",
        city: "Miami",
        email: "matthew.lewis@example.com",
        phoneNumber: "305-555-3456",
        vehicleMakeAndModel: "Range Rover Evoque",
        serviceName: "Ceramic Coating",
        appointmentTimestamp: new Date(),
        vehicleDetails: { licensePlate: "STU9876" },
        serviceAddons: ["Polish", "Glass Protection"],
    },
];

const BookingsPage = () => {
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOpenModal = (booking) => {
        setSelectedBooking(booking);
    };

    const handleCloseModal = () => {
        setSelectedBooking(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBookings = bookingsData.filter((booking) => {
        return (
            booking.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <Box sx={{ padding: '30px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Bookings
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#333' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            marginRight: '16px',
                            width: '250px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#888',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#555',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#333',
                                },
                            },
                            '& input': {
                                color: '#333',
                            },
                        }}
                    />
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Box>
            </Box>

            <Divider sx={{ marginBottom: '20px', marginTop: "20px" }} />

            {/* Bookings Grid */}
            <Grid container spacing={3}>
                {filteredBookings.map((booking, index) => (
                    <Grid item xs={12} sm={6} lg={3} key={index}>
                        <ProfileCard onClick={() => handleOpenModal(booking)} sx={{
                            padding: '20px',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                            '&:hover': { backgroundColor: '#fff', boxShadow: '0 6px 15px rgba(0,0,0,0.2)' }
                        }}>
                            <CardAvatar>{booking.firstName[0] + booking.surname[0]}</CardAvatar>
                            <CardInfo>
                                <InfoHeading>{`${booking.firstName} ${booking.surname}`}</InfoHeading>
                                <InfoSubHeading>{booking.phoneNumber}</InfoSubHeading>
                                <InfoSubHeading>{booking.serviceName}</InfoSubHeading>
                            </CardInfo>
                        </ProfileCard>
                    </Grid>
                ))}
            </Grid>

            {selectedBooking && (
                <Dialog open={!!selectedBooking} onClose={handleCloseModal}>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {`${selectedBooking.firstName} ${selectedBooking.surname}`}
                        <IconButton onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <ModalCard>
                            <ModalLabel>Phone Number</ModalLabel>
                            <ModalValue>{selectedBooking.phoneNumber}</ModalValue>

                            <ModalLabel>Email</ModalLabel>
                            <ModalValue>{selectedBooking.email}</ModalValue>

                            <ModalLabel>Company</ModalLabel>
                            <ModalValue>{selectedBooking.companyName}</ModalValue>

                            <ModalLabel>Address</ModalLabel>
                            <ModalValue>{`${selectedBooking.street}, ${selectedBooking.city}, ${selectedBooking.zipCode}`}</ModalValue>

                            <ModalLabel>Vehicle</ModalLabel>
                            <ModalValue>{selectedBooking.vehicleMakeAndModel}</ModalValue>

                            <ModalLabel>Service</ModalLabel>
                            <ModalValue>{selectedBooking.serviceName}</ModalValue>

                            <ModalLabel>License Plate</ModalLabel>
                            <ModalValue>{selectedBooking.vehicleDetails.licensePlate}</ModalValue>

                            <ModalLabel>Service Add-ons</ModalLabel>
                            <ModalValue>{selectedBooking.serviceAddons.join(', ')}</ModalValue>

                            <ModalButton onClick={() => alert("Service Completed!")}>
                                Complete
                            </ModalButton>
                        </ModalCard>
                    </DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default BookingsPage;
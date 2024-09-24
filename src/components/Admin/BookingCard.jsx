import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample Data
const bookings = [
    {
        firstName: "John",
        surname: "Doe",
        companyName: "FastClean",
        street: "123 Clean St",
        zipCode: "12345",
        city: "Cleanville",
        email: "john.doe@example.com",
        phoneNumber: "555-1234",
        vehicleMakeAndModel: "Toyota Camry",
        serviceName: "Full Wash",
        appointmentTimestamp: new Date('2023-09-12T14:00:00'),
        vehicleDetails: { licensePlate: "XYZ1234" },
        serviceAddons: ["Wax", "Interior Cleaning"],
    },
    {
        firstName: "Jane",
        surname: "Smith",
        companyName: "Sparkle Auto",
        street: "456 Shine Ave",
        zipCode: "67890",
        city: "Shinetown",
        email: "jane.smith@example.com",
        phoneNumber: "555-5678",
        vehicleMakeAndModel: "Honda Accord",
        serviceName: "Exterior Wash",
        appointmentTimestamp: new Date('2023-09-13T09:00:00'),
        vehicleDetails: { licensePlate: "ABC9876" },
        serviceAddons: ["Polish"],
    },
];

// Table component for displaying booking details
const BookingsCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                    Bookings
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Manage all your car wash and cleaning bookings.
                </Typography>

                {/* Table for displaying booking details */}
                <TableContainer component={Paper}>
                    <Table aria-label="bookings table">
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Customer Name</strong></TableCell>
                                <TableCell><strong>Vehicle</strong></TableCell>
                                <TableCell><strong>Service</strong></TableCell>
                                <TableCell><strong>Appointment</strong></TableCell>
                                <TableCell><strong>License Plate</strong></TableCell>
                                <TableCell><strong>Phone Number</strong></TableCell>
                                <TableCell><strong>Service Add-ons</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRow key={index}>
                                    <TableCell>{`${booking.firstName} ${booking.surname}`}</TableCell>
                                    <TableCell>{booking.vehicleMakeAndModel}</TableCell>
                                    <TableCell>{booking.serviceName}</TableCell>
                                    <TableCell>{booking.appointmentTimestamp.toLocaleString()}</TableCell>
                                    <TableCell>{booking.vehicleDetails.licensePlate}</TableCell>
                                    <TableCell>{booking.phoneNumber}</TableCell>
                                    <TableCell>{booking.serviceAddons.join(', ')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default BookingsCard;

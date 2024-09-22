"use client";
import React, { useState } from 'react';
import {
    Box,
    TextField,
    InputAdornment,
    TableBody,
    Paper,
    Table,
    TableHead,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
    SectionHeading,
    StyledCard,
    TableRowCustom,
    TableCellCustom,
    TableHeaderCell,
    CardBody,
    StyledTable
} from '../../../components/mui/AdminPkgs';

const customerBookings = [
    {
        vehicleMakeAndModel: "Tesla Model S",
        location: "New York",
        serviceName: "Full Exterior Wash",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$100",
        paymentStatus: "Paid",
    },
    {
        vehicleMakeAndModel: "BMW X5",
        location: "Los Angeles",
        serviceName: "Interior Detailing",
        package: "Standard",
        appointmentTimestamp: new Date(),
        price: "$80",
        paymentStatus: "Pending",
    },
    {
        vehicleMakeAndModel: "Ford Mustang",
        location: "Atlanta",
        serviceName: "Polish & Wax",
        package: "Deluxe",
        appointmentTimestamp: new Date(),
        price: "$120",
        paymentStatus: "Paid",
    },
    {
        vehicleMakeAndModel: "Mercedes-Benz C300",
        location: "Chicago",
        serviceName: "Full Interior Cleaning",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$150",
        paymentStatus: "Paid",
    },
    {
        vehicleMakeAndModel: "Audi Q7",
        location: "Dallas",
        serviceName: "Interior Detailing",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$110",
        paymentStatus: "Paid",
    },
];

const BookingsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBookings = customerBookings.filter((booking) => {
        return (
            booking.vehicleMakeAndModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <Box sx={{ padding: '16px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <SectionHeading>My Bookings</SectionHeading>

                <TextField
                    variant="outlined"
                    placeholder="Search by Vehicle, Service, or Location"
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
            </Box>

            <StyledCard>
                <CardBody>
                    <StyledTable component={Paper} sx={{ borderRadius: '12px' }}>
                        <Table aria-label="customer bookings table">
                            <TableHead>
                                <TableRowCustom>
                                    <TableHeaderCell>Vehicle</TableHeaderCell>
                                    <TableHeaderCell>Location</TableHeaderCell>
                                    <TableHeaderCell>Service</TableHeaderCell>
                                    <TableHeaderCell>Package</TableHeaderCell>
                                    <TableHeaderCell>Appointment</TableHeaderCell>
                                    <TableHeaderCell>Price</TableHeaderCell>
                                    <TableHeaderCell>Payment Status</TableHeaderCell>
                                </TableRowCustom>
                            </TableHead>
                            <TableBody>
                                {filteredBookings.map((booking, index) => (
                                    <TableRowCustom key={index}>
                                        <TableCellCustom>{booking.vehicleMakeAndModel}</TableCellCustom>
                                        <TableCellCustom>{booking.location}</TableCellCustom>
                                        <TableCellCustom>{booking.serviceName}</TableCellCustom>
                                        <TableCellCustom>{booking.package}</TableCellCustom>
                                        <TableCellCustom>{booking.appointmentTimestamp.toLocaleString()}</TableCellCustom>
                                        <TableCellCustom>{booking.price}</TableCellCustom>
                                        <TableCellCustom>{booking.paymentStatus}</TableCellCustom>
                                    </TableRowCustom>
                                ))}
                            </TableBody>
                        </Table>
                    </StyledTable>
                </CardBody>
            </StyledCard>
        </Box>
    );
};

export default BookingsPage;

"use client";
import React from 'react';
import {
    StyledCard,
    CardBody,
    CardHeading,
    CardSubheading,
    StyledTable,
    TableRowCustom,
    TableCellCustom,
    TableHeaderCell,
} from '../mui/AdminPkgs';
import { Table, TableBody, TableHead, Paper } from '@mui/material';

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
        <StyledCard>
            <CardBody>
                <CardHeading>
                    Bookings
                </CardHeading>
                <CardSubheading>
                    Manage all your car wash and cleaning bookings.
                </CardSubheading>

                <StyledTable component={Paper}>
                    <Table aria-label="bookings table">
                        <TableHead>
                            <TableRowCustom>
                                <TableHeaderCell>Customer Name</TableHeaderCell>
                                <TableHeaderCell>Vehicle</TableHeaderCell>
                                <TableHeaderCell>Service</TableHeaderCell>
                                <TableHeaderCell>Appointment</TableHeaderCell>
                                <TableHeaderCell>License Plate</TableHeaderCell>
                                <TableHeaderCell>Phone Number</TableHeaderCell>
                                <TableHeaderCell>Service Add-ons</TableHeaderCell>
                            </TableRowCustom>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRowCustom key={index}>
                                    <TableCellCustom>{`${booking.firstName} ${booking.surname}`}</TableCellCustom>
                                    <TableCellCustom>{booking.vehicleMakeAndModel}</TableCellCustom>
                                    <TableCellCustom>{booking.serviceName}</TableCellCustom>
                                    <TableCellCustom>{booking.appointmentTimestamp.toLocaleString()}</TableCellCustom>
                                    <TableCellCustom>{booking.vehicleDetails.licensePlate}</TableCellCustom>
                                    <TableCellCustom>{booking.phoneNumber}</TableCellCustom>
                                    <TableCellCustom>{booking.serviceAddons.join(', ')}</TableCellCustom>
                                </TableRowCustom>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTable>
            </CardBody>
        </StyledCard>
    );
};

export default BookingsCard;

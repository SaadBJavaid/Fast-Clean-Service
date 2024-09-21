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
    {
        firstName: "David",
        surname: "Johnson",
        companyName: "AutoCare Inc.",
        street: "789 Soap St",
        zipCode: "54321",
        city: "Detailville",
        email: "david.johnson@example.com",
        phoneNumber: "555-9012",
        vehicleMakeAndModel: "Ford F-150",
        serviceName: "Interior Cleaning",
        appointmentTimestamp: new Date('2023-09-14T11:00:00'),
        vehicleDetails: { licensePlate: "DEF5678" },
        serviceAddons: ["Seat Conditioning", "Carpet Shampoo"],
    },
    {
        firstName: "Emily",
        surname: "Davis",
        companyName: "Shine & Go",
        street: "321 Polish Blvd",
        zipCode: "13579",
        city: "Buffville",
        email: "emily.davis@example.com",
        phoneNumber: "555-3456",
        vehicleMakeAndModel: "BMW X5",
        serviceName: "Full Detailing",
        appointmentTimestamp: new Date('2023-09-15T10:00:00'),
        vehicleDetails: { licensePlate: "GHI4567" },
        serviceAddons: ["Engine Bay Cleaning", "Tire Shine"],
    },
    {
        firstName: "Michael",
        surname: "Brown",
        companyName: "CleanRides",
        street: "654 Wipe Way",
        zipCode: "24680",
        city: "Foamtown",
        email: "michael.brown@example.com",
        phoneNumber: "555-6789",
        vehicleMakeAndModel: "Chevrolet Tahoe",
        serviceName: "Exterior Wash",
        appointmentTimestamp: new Date('2023-09-16T13:30:00'),
        vehicleDetails: { licensePlate: "JKL7890" },
        serviceAddons: ["Polish", "Wax"],
    },
    {
        firstName: "Sarah",
        surname: "Miller",
        companyName: "Glitz Mobile",
        street: "987 Wax Ave",
        zipCode: "11223",
        city: "Glossville",
        email: "sarah.miller@example.com",
        phoneNumber: "555-2468",
        vehicleMakeAndModel: "Tesla Model S",
        serviceName: "Ceramic Coating",
        appointmentTimestamp: new Date('2023-09-17T15:00:00'),
        vehicleDetails: { licensePlate: "MNO1234" },
        serviceAddons: ["Glass Protection", "Rim Coating"],
    },
];
const tableHeaders = [
    'Customer Name',
    'Vehicle',
    'Service',
    'Appointment',
    'License Plate',
    'Phone Number',
    'Service Add-ons'
];

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
                                {tableHeaders.map((header, index) => (
                                    <TableHeaderCell key={index} sx={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}>
                                        {header}
                                    </TableHeaderCell>
                                ))}
                            </TableRowCustom>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking, index) => (
                                <TableRowCustom key={index}>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{`${booking.firstName} ${booking.surname}`}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.vehicleMakeAndModel}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.serviceName}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.appointmentTimestamp.toLocaleString()}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.vehicleDetails.licensePlate}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.phoneNumber}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.serviceAddons.join(', ')}</TableCellCustom>
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

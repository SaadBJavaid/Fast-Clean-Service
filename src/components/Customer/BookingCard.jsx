"use client";
import React, { useState } from 'react';
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
import { Table, TableBody, TableHead, Paper, TablePagination } from '@mui/material';

const Bookings = [
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "Tesla Model S",
        location: "New York",
        serviceName: "Full Exterior Wash",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$100",
        paymentStatus: "Paid",
    },
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "BMW X5",
        location: "Los Angeles",
        serviceName: "Interior Detailing",
        package: "Standard",
        appointmentTimestamp: new Date(),
        price: "$80",
        paymentStatus: "Pending",
    },
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "Mercedes-Benz C300",
        location: "Chicago",
        serviceName: "Full Interior Cleaning",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$150",
        paymentStatus: "Paid",
    },
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "Audi Q7",
        location: "Dallas",
        serviceName: "Interior Detailing",
        package: "Premium",
        appointmentTimestamp: new Date(),
        price: "$110",
        paymentStatus: "Paid",
    }
];


const tableHeaders = [
    'Customer Name',
    'Vehicle',
    'Location',
    'Service',
    'Package',
    'Appointment',
    'Price',
    'Payment Status'
];

const BookingsCard = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <StyledCard>
            <CardBody>
                <CardHeading>
                    My Bookings
                </CardHeading>
                <CardSubheading>
                    View and manage your car care bookings.
                </CardSubheading>

                <StyledTable component={Paper}>
                    <Table aria-label="customer bookings table">
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
                            {Bookings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booking, index) => (
                                <TableRowCustom key={index}>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{`${booking.firstName} ${booking.surname}`}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.vehicleMakeAndModel}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.location}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.serviceName}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.package}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.appointmentTimestamp.toLocaleString()}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.price}</TableCellCustom>
                                    <TableCellCustom sx={{ fontSize: '1.1rem', color: 'black' }}>{booking.paymentStatus}</TableCellCustom>
                                </TableRowCustom>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTable>

                <TablePagination
                    component="div"
                    count={Bookings.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </CardBody>
        </StyledCard>
    );
};

export default BookingsCard;

"use client";
import React, { useEffect, useState } from "react";
import {
    CardBody,
    CardHeading,
    CardSubheading,
    StyledCard,
    StyledTable,
    TableCellCustom,
    TableHeaderCell,
    TableRowCustom,
} from "../mui/AdminPkgs";
import { Paper, Table, TableBody, TableHead, TablePagination } from "@mui/material";
import { useSession } from "next-auth/react";

const tableHeaders = [
    "Customer Name",
    "Vehicle",
    "Location",
    "Service",
    "Package",
    "Appointment",
    "Price",
    "Payment Status",
];

const BookingsCard = () => {
    const { data: session } = useSession();
    const [page, setPage] = useState(0);
    const [userBookings, setUserBookings] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const userEmail = session?.user?.email;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const fetchBookings = async () => {
            if (userEmail) {
                try {
                    const response = await fetch(`/api/booking/user?userEmail=${userEmail}`);
                    const data = await response.json();
                    if (data.success) {
                        setUserBookings(data.data);
                    }
                } catch (error) {
                    console.error("Failed to fetch bookings:", error);
                }
            }
        };

        fetchBookings();
    }, [userEmail]);

    return (
        <StyledCard>
            <CardBody>
                <CardHeading>My Bookings</CardHeading>
                <CardSubheading>View and manage your car care bookings.</CardSubheading>

                <StyledTable component={Paper}>
                    <Table aria-label="customer bookings table">
                        <TableHead>
                            <TableRowCustom>
                                {tableHeaders.map((header, index) => (
                                    <TableHeaderCell
                                        key={index}
                                        sx={{
                                            fontSize: "1.2rem",
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {header}
                                    </TableHeaderCell>
                                ))}
                            </TableRowCustom>
                        </TableHead>
                        <TableBody>
                            {userBookings
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((booking, index) => (
                                    <TableRowCustom key={booking._id || index}>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {`${booking.firstName} ${booking.surname}`}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {booking.vehicleMakeAndModel}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {booking.city || "N/A"}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {booking.serviceName}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {booking.packageName}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {new Date(booking.appointmentTimestamp).toLocaleString()}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {`$${booking.price}`}
                                        </TableCellCustom>
                                        <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                                            {booking.paymentStatus || "Pending"}
                                        </TableCellCustom>
                                    </TableRowCustom>
                                ))}
                        </TableBody>
                    </Table>
                </StyledTable>

                <TablePagination
                    component="div"
                    count={userBookings.length}
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

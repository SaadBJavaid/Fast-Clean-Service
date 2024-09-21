"use client";
import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    InputAdornment,
    Button,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledCard, CardBody, CardHeading, StyledPattern, ModalButton, TableCellCustom, TableHeaderCell, TableRowCustom } from '../../../components/mui/AdminPkgs';

const bookingsData = [
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "Tesla Model S",
        vehicleDetails: { licensePlate: "ABC1234" },
        status: "Enabled",
    },
    {
        firstName: "Jane",
        surname: "Smith",
        vehicleMakeAndModel: "BMW X5",
        vehicleDetails: { licensePlate: "XYZ5678" },
        status: "Disabled",
    },
    {
        firstName: "Michael",
        surname: "Johnson",
        vehicleMakeAndModel: "Audi A4",
        vehicleDetails: { licensePlate: "DEF3456" },
        status: "Enabled",
    },
    {
        firstName: "Emily",
        surname: "Davis",
        vehicleMakeAndModel: "Ford Explorer",
        vehicleDetails: { licensePlate: "GHI7890" },
        status: "Disabled",
    },
    {
        firstName: "David",
        surname: "Clark",
        vehicleMakeAndModel: "Chevrolet Tahoe",
        vehicleDetails: { licensePlate: "JKL0123" },
        status: "Enabled",
    },
    {
        firstName: "Sophia",
        surname: "Wilson",
        vehicleMakeAndModel: "Honda Accord",
        vehicleDetails: { licensePlate: "MNO4567" },
        status: "Enabled",
    },
    {
        firstName: "Chris",
        surname: "Martinez",
        vehicleMakeAndModel: "Toyota Camry",
        vehicleDetails: { licensePlate: "PQR8901" },
        status: "Disabled",
    },
    {
        firstName: "Olivia",
        surname: "Lopez",
        vehicleMakeAndModel: "Lexus RX",
        vehicleDetails: { licensePlate: "STU2345" },
        status: "Enabled",
    },
    {
        firstName: "James",
        surname: "Brown",
        vehicleMakeAndModel: "Nissan Altima",
        vehicleDetails: { licensePlate: "VWX6789" },
        status: "Enabled",
    },
    {
        firstName: "Ava",
        surname: "Hernandez",
        vehicleMakeAndModel: "Kia Sorento",
        vehicleDetails: { licensePlate: "YZA1357" },
        status: "Disabled",
    },
    {
        firstName: "Daniel",
        surname: "Garcia",
        vehicleMakeAndModel: "Volkswagen Passat",
        vehicleDetails: { licensePlate: "BCD2468" },
        status: "Enabled",
    },
    {
        firstName: "Laura",
        surname: "Anderson",
        vehicleMakeAndModel: "Jeep Grand Cherokee",
        vehicleDetails: { licensePlate: "EFG9134" },
        status: "Disabled",
    },
    {
        firstName: "Robert",
        surname: "Moore",
        vehicleMakeAndModel: "Hyundai Sonata",
        vehicleDetails: { licensePlate: "HIJ5768" },
        status: "Enabled",
    },
    {
        firstName: "Jessica",
        surname: "Taylor",
        vehicleMakeAndModel: "Mazda CX-5",
        vehicleDetails: { licensePlate: "KLM7982" },
        status: "Enabled",
    },
    {
        firstName: "Matthew",
        surname: "Jackson",
        vehicleMakeAndModel: "Subaru Outback",
        vehicleDetails: { licensePlate: "NOP2341" },
        status: "Disabled",
    },
    {
        firstName: "Isabella",
        surname: "White",
        vehicleMakeAndModel: "Dodge Durango",
        vehicleDetails: { licensePlate: "QRS1243" },
        status: "Enabled",
    },
    {
        firstName: "Ethan",
        surname: "Thompson",
        vehicleMakeAndModel: "Mercedes-Benz GLE",
        vehicleDetails: { licensePlate: "TUV6574" },
        status: "Disabled",
    },
    {
        firstName: "Henry",
        surname: "Martinez",
        vehicleMakeAndModel: "Volvo XC90",
        vehicleDetails: { licensePlate: "WXY8362" },
        status: "Enabled",
    },
    {
        firstName: "Sophia",
        surname: "Brown",
        vehicleMakeAndModel: "Tesla Model 3",
        vehicleDetails: { licensePlate: "ZAB2356" },
        status: "Enabled",
    },
    {
        firstName: "Emily",
        surname: "Robinson",
        vehicleMakeAndModel: "Chevrolet Suburban",
        vehicleDetails: { licensePlate: "BCD7623" },
        status: "Disabled",
    },
];

const SchedulingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);
    const [carStatus, setCarStatus] = useState('');
    const [scheduledVehicles, setScheduledVehicles] = useState(0);

    const handleSearch = (event) => {
        const query = event.target.value.toUpperCase();
        setSearchQuery(query);
        const foundCar = bookingsData.find(car => car.vehicleDetails.licensePlate === query);
        if (foundCar) {
            setSelectedCar(foundCar);
            setCarStatus(foundCar.status);
        } else {
            setSelectedCar(null);
            setCarStatus('');
        }
    };

    const handleToggleStatus = () => {
        if (selectedCar) {
            const updatedStatus = carStatus === 'Enabled' ? 'Disabled' : 'Enabled';
            setCarStatus(updatedStatus);
            selectedCar.status = updatedStatus;
        }
    };

    const handleVehicleCountChange = (event) => {
        setScheduledVehicles(event.target.value);
    };

    return (
        <Box sx={{ padding: '30px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Scheduling</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <StyledCard>
                        <CardBody>
                            <CardHeading>Vehicles List</CardHeading>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRowCustom>
                                            <TableHeaderCell>License Plate</TableHeaderCell>
                                            <TableHeaderCell>Vehicle Model</TableHeaderCell>
                                            <TableHeaderCell>Owner Name</TableHeaderCell>
                                        </TableRowCustom>
                                    </TableHead>
                                    <TableBody>
                                        {bookingsData.map((booking, index) => (
                                            <TableRowCustom key={index} hover>
                                                <TableCellCustom>{booking.vehicleDetails.licensePlate}</TableCellCustom>
                                                <TableCellCustom>{booking.vehicleMakeAndModel}</TableCellCustom>
                                                <TableCellCustom>{`${booking.firstName} ${booking.surname}`}</TableCellCustom>
                                            </TableRowCustom>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <StyledCard sx={{ backgroundColor: '#FCE38A', position: 'relative' }}>
                                <StyledPattern />
                                <CardBody>
                                    <CardHeading>Vehicle Search</CardHeading>
                                    <TextField
                                        label="Enter License Plate"
                                        variant="outlined"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ width: '100%', marginBottom: '20px' }}
                                    />

                                    {selectedCar ? (
                                        <Box>
                                            <Typography>Vehicle: {selectedCar.vehicleMakeAndModel}</Typography>
                                            <Typography>Owner: {`${selectedCar.firstName} ${selectedCar.surname}`}</Typography>
                                            <Typography>Status: {carStatus}</Typography>
                                            <ModalButton onClick={handleToggleStatus} variant="contained" sx={{ marginTop: '10px' }}>
                                                {carStatus === 'Enabled' ? 'Disable Vehicle' : 'Enable Vehicle'}
                                            </ModalButton>
                                        </Box>
                                    ) : (
                                        <Typography>No vehicle found for this license plate.</Typography>
                                    )}
                                </CardBody>
                            </StyledCard>
                        </Grid>

                        <Grid item xs={12}>
                            <StyledCard sx={{ backgroundColor: '#9E79FC', position: 'relative' }}>
                                <StyledPattern />
                                <CardBody>
                                    <CardHeading>Set Vehicles for the Day</CardHeading>
                                    <TextField
                                        label="Number of Vehicles"
                                        variant="outlined"
                                        type="number"
                                        value={scheduledVehicles}
                                        onChange={handleVehicleCountChange}
                                        sx={{ width: '100%' }}
                                    />
                                </CardBody>
                            </StyledCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SchedulingPage;

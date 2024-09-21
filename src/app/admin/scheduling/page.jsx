"use client";
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const bookingsData = [
    {
        firstName: "John",
        surname: "Doe",
        vehicleMakeAndModel: "Tesla Model S",
        vehicleDetails: { licensePlate: "ABC1234" },
        status: "Enabled",
    },
    // Add more data
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
            <Typography variant="h4" gutterBottom>
                Scheduling
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Vehicles List</Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>License Plate</TableCell>
                                            <TableCell>Vehicle Model</TableCell>
                                            <TableCell>Owner Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {bookingsData.map((booking, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell>{booking.vehicleDetails.licensePlate}</TableCell>
                                                <TableCell>{booking.vehicleMakeAndModel}</TableCell>
                                                <TableCell>{`${booking.firstName} ${booking.surname}`}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Vehicle Search</Typography>
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
                                    <Button onClick={handleToggleStatus}>
                                        {carStatus === 'Enabled' ? 'Disable Vehicle' : 'Enable Vehicle'}
                                    </Button>
                                </Box>
                            ) : (
                                <Typography>No vehicle found for this license plate.</Typography>
                            )}

                            <Box sx={{ marginTop: '30px' }}>
                                <Typography>Set Vehicles for the Day</Typography>
                                <TextField
                                    label="Number of Vehicles"
                                    variant="outlined"
                                    type="number"
                                    value={scheduledVehicles}
                                    onChange={handleVehicleCountChange}
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SchedulingPage;

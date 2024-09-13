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
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('../../../components/Admin/Sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../../../components/Admin/Navbar'), { ssr: false });


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
        firstName: "Mike",
        surname: "Johnson",
        vehicleMakeAndModel: "Ford F-150",
        vehicleDetails: { licensePlate: "LMN9876" },
        status: "Enabled",
    },
];

const SchedulingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);
    const [carStatus, setCarStatus] = useState('');

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

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '240px', width: '100%' }}>
                <Navbar />
                <Box sx={{ padding: '30px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>
                        Scheduling
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{
                                backgroundColor: '#f4f6f8',
                                color: '#333',
                                borderRadius: '15px',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                padding: '15px',
                                height: '100%',
                                fontSize: '1.3rem',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                                        Vehicles List
                                    </Typography>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#3f51b5', color: '#fff' }}>License Plate</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#3f51b5', color: '#fff' }}>Vehicle Model</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#3f51b5', color: '#fff' }}>Owner Name</TableCell>
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
                            <Card sx={{
                                backgroundColor: '#f4f6f8',
                                color: '#333',
                                borderRadius: '15px',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                padding: '15px',
                                height: '100%',
                                textAlign: 'center',
                                fontSize: '1.3rem',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                                        Vehicle Search
                                    </Typography>
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
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                                Vehicle: {selectedCar.vehicleMakeAndModel}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                                Owner: {`${selectedCar.firstName} ${selectedCar.surname}`}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                                Status: {carStatus}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                color={carStatus === 'Enabled' ? 'error' : 'success'}
                                                onClick={handleToggleStatus}
                                                sx={{ marginTop: '10px' }}
                                            >
                                                {carStatus === 'Enabled' ? 'Disable Vehicle' : 'Enable Vehicle'}
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Typography variant="body2" color="textSecondary">
                                            No vehicle found for this license plate.
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default SchedulingPage;

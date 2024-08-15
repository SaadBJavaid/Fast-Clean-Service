import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const ServiceSelectionForm = ({ selectedOption, selectOption }) => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Choose a Service
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{ cursor: 'pointer', border: selectedOption === 'Anywhere Autocare' ? '2px solid red' : '', backgroundColor: selectedOption === 'Anywhere Autocare' ? '#444' : '#333', color: '#fff' }}
                        onClick={() => selectOption('Anywhere Autocare', 0)}
                    >
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/1.png"
                            title="Anywhere Autocare"
                        />
                        <CardContent>
                            <Typography variant="h5">Anywhere Autocare</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{ cursor: 'pointer', border: selectedOption === 'Subscription Plans' ? '2px solid blue' : '', backgroundColor: selectedOption === 'Subscription Plans' ? '#444' : '#333', color: '#fff' }}
                        onClick={() => selectOption('Subscription Plans', 200)}
                    >
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/2.png"
                            title="Subscription Plans"
                        />
                        <CardContent>
                            <Typography variant="h5">Subscription Plans</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ServiceSelectionForm;

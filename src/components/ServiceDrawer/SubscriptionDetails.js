import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Card, CardContent} from "@mui/material";

const subscriptionData = {
    Exterior: {
        formFields: ['Naam', 'E-mail', 'Telefoon', 'Land', 'Stad', 'Bedrijf', 'Bericht'],
        details: `
            ✔️  Exterior cleaning
            ✔️  Wax
            ✔️  Windows
            ✔️  Rims
            ✔️  Blacken tires
            Duration: ± 45 min.
            Price: from € 59.95 (per cleaning)
            ________________________________________
            Duration:
            24 months
            12 months +€5.00
            Monthly cancellable +€10.00
            ________________________________________
            Number of cleanings:
            1 x cleaning every 4 weeks
            1 x cleaning every 8 weeks +€5.00
            1 x cleaning every 12 weeks +€12.50
        `,
    },
    Interior: {
        formFields: ['Name', 'Email', 'Telephone', 'Country', 'City', 'Company', 'Message'],
        details: `
            ✔️  Windows
            ✔️  Sills
            ✔️  Steam cleaning
            ✔️  Vacuuming
            ✔️  Dashboard
            ✔️  Feeding plastic parts
            ✔️  Steaming mats
            Duration: ± 60 min.
            Price: from € 69.95 (per cleaning)
            ________________________________________
            Additional options:
            ✔️  Leather treatment +€5.00
            ✔️  Removing dog hair +€5.00
            ✔️  Removing stains from upholstery +€10.00
            ________________________________________
            Duration:
            24 months
            12 months +€5.00
            Monthly cancellable +€10.00
            ________________________________________
            Number of cleanings:
            1 x cleaning every 4 weeks
            1 x cleaning every 8 weeks +€5.00
            1 x cleaning every 12 weeks +€12.50
        `,
    },
    'Complete Car Care': {
        formFields: ['Name', 'Email', 'Telephone', 'Country', 'City', 'Company', 'Message'],
        details: `
            ✔️  Windows
            ✔️  Sills
            ✔️  Steam cleaning
            ✔️  Vacuuming
            ✔️  Dashboard
            ✔️  Feeding plastic parts
            ✔️  Steaming mats
            ✔️  Exterior cleaning
            ✔️  Rims
            ✔️  Blackening tires
            ✔️  Wax
            Duration: ± 90~120 min.
            Price: from € 94.95.- (per cleaning)
            ________________________________________
            Additional options:
            ✔️ Leather treatment +€5.00
            ✔️ Removing dog hair +€5.00
            ✔️ Removing stains from upholstery +€10.00
            ________________________________________
            Duration:
            24 months
            12 months +€5.00
            Monthly cancellable +€10.00
            ________________________________________
            Number of cleanings:
            1 x cleaning every 4 weeks
            1 x cleaning every 8 weeks +€5.00
            1 x cleaning every 12 weeks +€12.50
        `,
    }
};

const SubscriptionDetails = ({ selectedPlan }) => {
    const subscription = subscriptionData[selectedPlan] || {};

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#fafafa', fontWeight: 'bold' }}>
                {selectedPlan} Subscription
            </Typography>
            <Card sx={{ mt: 4, backgroundColor: '#333', color: '#fff', borderRadius: '15px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ lineHeight: 1.7 }}>
                                {subscription?.details?.split('________________________________________')[0].trim().split('\n').map((line, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                                        {line.includes('✔️') && (
                                            <Box sx={{ marginRight: '8px' }}>✔️</Box>
                                        )}
                                        <Box>{line.replace('✔️', '').trim()}</Box>
                                    </Box>
                                ))}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ lineHeight: 1.7 }}>
                                {subscription?.details?.split('________________________________________').slice(1).join('\n\n________________________________________\n\n').trim().split('\n').map((line, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                                        {line.includes('✔️') && (
                                            <Box sx={{ marginRight: '8px' }}>✔️</Box>
                                        )}
                                        <Box>{line.replace('✔️', '').trim()}</Box>
                                    </Box>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
            <Card sx={{ mt: 4, backgroundColor: '#333', color: '#fff', borderRadius: '15px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}>
                <CardContent>
                    <Grid container spacing={3}>
                        {subscription.formFields && subscription.formFields.map((field, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <TextField
                                    fullWidth
                                    label={field}
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: '#333', // Dark background
                                        borderRadius: '4px',
                                        '& .MuiOutlinedInput-root': {
                                            color: '#fff', // White text color
                                            '& fieldset': {
                                                borderColor: '#666', // Light gray border
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#888', // Slightly brighter border on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#00bef8', // Cyan border on focus
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#bbb', // Light gray label color
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#00bef8', // Cyan label color on focus
                                        },
                                    }}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#333', // Dark background
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                        color: '#fff', // White text color
                                        '& fieldset': {
                                            borderColor: '#666', // Light gray border
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#888', // Slightly brighter border on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00bef8', // Cyan border on focus
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#bbb', // Light gray label color
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#00bef8', // Cyan label color on focus
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 2,
                                    padding: '12px 24px',
                                    backgroundColor: '#00bef8',
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    width: '100%',
                                    '&:hover': {
                                        backgroundColor: '#038fa8',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                            >
                                Send Request
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SubscriptionDetails;

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Card, CardContent} from "@mui/material";

const subscriptionData = {
    Exterior: {
        formFields: ['Name', 'Email', 'Telephone', 'Country', 'City', 'Company', 'Message'],
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

    console.log("selectedPlan: ", selectedPlan)

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                {selectedPlan} Subscription
            </Typography>
            <Card sx={{ mt: 4, backgroundColor: '#333', color: '#fff', }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>
                                {subscription?.details?.split('________________________________________')[0].trim()}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>
                                {subscription?.details?.split('________________________________________').slice(1).join('\n\n________________________________________\n\n').trim()}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
            <Grid container spacing={2}>
                {subscription.formFields && subscription.formFields.map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <TextField
                            fullWidth
                            label={field}
                            variant="outlined"
                            sx={{
                                backgroundColor: '#fff',  // White background for input fields
                                borderRadius: '4px',
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
                            backgroundColor: '#fff',  // White background for input fields
                            borderRadius: '4px',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Send Request
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SubscriptionDetails;

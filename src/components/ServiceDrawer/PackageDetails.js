import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

const packagesData = {
    Standard: [
        {
            name: 'Exterior Package',
            details: `
                ✔️ Exterior washing
                ✔️ Cleaning windows and mirrors
                ✔️ Applying spray wax
                ✔️ Rims
                ❌ Blacken tires
                ❌ Sills and door edges
                ❌ Apply ceramic protection to windows
                ❌ Feed plastic parts
                ❌ Clean fuel filler flap
            `,
            price: 74.95,
        },
        {
            name: 'Interior Package',
            details: `
                ✔️ Wipe dashboard and compartments
                ✔️ Sills and door edges
                ✔️ Steam out mats
                ✔️ Clean windows and mirrors
                ✔️ Steam clean interior overall
                ❌ Detailing
                ❌ Polishing plastic parts
                ❌ Leather treatment
                ❌ Matting stripes
                ❌ Intensive interior steam cleaning
            `,
            price: 89.95,
        },
        {
            name: 'Combo Package',
            details: `
                ✔️ In the 'Standard Combi Package' you get all the checkboxes of the 'Standard Interior and Exterior Package' combined in one package!
            `,
            price: 139.95,
        }
    ],
    Deluxe: [
        {
            name: 'Exterior Package',
            details: `
                ✔️ Exterior washing
                ✔️ Cleaning windows and mirrors
                ✔️ Applying spray wax
                ✔️ Rims
                ✔️ Blacken tires
                ✔️ Sills and door edges
                ✔️ Apply ceramic protection to windows
                ✔️ Feed plastic parts
                ✔️ Clean fuel filler cap
            `,
            price: 89.95,
        },
        {
            name: 'Interior Package',
            details: `
                ✔️ Wipe dashboard and compartments
                ✔️ Sills and door edges
                ✔️ Steam out mats
                ✔️ Clean windows and mirrors
                ✔️ Remove stains / Deep cleaning
                ✔️ Detailing
                ✔️ Polishing plastic parts
                ✔️ Leather treatment
                ✔️ Mat stripe
                ✔️ Intensive interior steam cleaning
            `,
            price: 149.95,
        },
        {
            name: 'Combo Package',
            details: `
                ✔️ In the 'Deluxe Combi Package' you get all the checkboxes of the 'Deluxe Interior and Exterior Package' combined in one package!
            `,
            price: 189.95,
        }
    ],
    Premium: [
        {
            name: 'Showroom Package',
            details: `
                ✔️ Exterior steam cleaning
                ✔️ Cleaning windows and mirrors
                ✔️ Applying spray wax
                ✔️ Rims
                ✔️ Blacken tires
                ✔️ Sills and door edges
                ✔️ Apply ceramic protection to windows
                ✔️ Feed plastic parts
                ✔️ Clean fuel filler cap
                ✔️ Wipe dashboard and compartments
                ✔️ Sills and door edges
                ✔️ Steam clean mats
                ✔️ Stain removal / Deep cleaning
                ✔️ Cleaning windows and mirrors
                ✔️ Detailing
                ✔️ Polishing plastic parts
                ✔️ Leather treatment
                ✔️ Mat stripe
                ✔️ Intensive interior steam cleaning
                ✔️ Hood cleaning
                ✔️ Polishing headlights
                ✔️ Polishing chrome parts
                ✔️ Polishing light scratches
                ❌ Polishing entire vehicle in 3 steps
                ❌ Glass coating
            `,
            price: 394.95,
        },
        {
            name: 'Paint Sealant',
            details: `
                ✔️ Exterior cleaning
                ✔️ Rims
                ✔️ Blackening tires
                ✔️ Wax
                ✔️ Windows
                ✔️ Sills
                ✔️ Leather treatment
                ✔️ Bonnet cleaning
                ✔️ Polishing headlights
                ✔️ Polishing chrome parts
                ✔️ Polishing light scratches
                ✔️ Polishing entire vehicle
                ✔️ Paint sealant
            `,
            price: 'On request',
        },
        {
            name: 'Pro Coating Package',
            details: `
                ✔️ Exterior cleaning
                ✔️ Rims
                ✔️ Blackening tires
                ✔️ Wax
                ✔️ Windows
                ✔️ Sills
                ✔️ Leather treatment
                ✔️ Bonnet cleaning
                ✔️ Polishing headlights
                ✔️ Polishing chrome parts
                ✔️ Polishing light scratches
                ✔️ Polishing entire vehicle
                ✔️ Glass coating
            `,
            price: 'On request',
        }
    ]
};

const PackageDetails = ({ selectedPlan, setFormPrice }) => {
    const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);
    const packages = packagesData[selectedPlan] || [];

    const handlePackageSelect = (index, price) => {
        setSelectedPackageIndex(index);
        if (typeof price === 'number') {
            setFormPrice(price);
        } else {
            setFormPrice(0); // Handle "On request" or other non-numeric prices
        }
    };

    return (
        <Grid container spacing={2} alignItems="stretch" sx={{
            marginTop: "10px",
        }}>
            {packages.map((pkg, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundColor: '#333',
                            color: '#fff',
                            cursor: 'pointer',
                            border: selectedPackageIndex === index ? '2px solid red' : 'none'
                        }}
                        onClick={() => handlePackageSelect(index, pkg.price)}
                    >
                        <CardContent>
                            <Typography variant="h5">{pkg.name}</Typography>
                            <Typography variant="body2">
                                {pkg.details.split('\n').map((line, lineIndex) => (
                                    <div key={lineIndex}>
                                        {line.includes('✔️') ? (
                                            <span style={{ color: 'green' }}>{line}</span>
                                        ) : (
                                            <span style={{ color: 'red' }}>{line}</span>
                                        )}
                                    </div>
                                ))}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1 }}>
                                Price: €{pkg.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default PackageDetails;

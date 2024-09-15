import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";

const PackageBox = ({ onClick, name, selected = false, image }) => {
    const { theme } = useTheme();

    return (
        <Card
            sx={{
                cursor: 'pointer',
                border: selected ? (name === 'Anywhere Autocare' ? '2px solid red' : '2px solid blue') : '',
                backgroundColor: selected ? '#444' : '#333',
                color: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
            }}
            onClick={() => onClick(name)}
        >
            <CardMedia sx={{ height: 270 }} image={image} title={name} />
            <CardContent>
                <Typography variant="h5" textAlign="center">{name}</Typography>
            </CardContent>
        </Card>
    );
};

const packages = [
    { name: "Anywhere Autocare", image: "/g1.jpg" },
    { name: "Subscription Plans", image: "/g4.jpg" },
];

const PackageSelection = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const form = useMultiStepForm();

    const onClick = (packageName) => {
        setSelectedOption(packageName);
        form.updateFormData({ selectedPackageType: packageName });
    };

    return (
        <Box sx={{ width: "90%", margin: "auto", mt: 2 }}>
            <Grid container spacing={2}>
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} key={pkg.name}>
                        <PackageBox
                            name={pkg.name}
                            image={pkg.image}
                            selected={selectedOption === pkg.name}
                            onClick={onClick}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PackageSelection;

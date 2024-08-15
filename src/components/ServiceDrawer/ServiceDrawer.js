import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ServiceSelectionForm from './ServiceSelectionForm';
import PlanSelectionForm from './PlanSelectionForm';
import PackageDetails from './PackageDetails';

const ServiceDrawer = ({ anchor, open, onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [price, setPrice] = useState(0);

    const handleNext = () => {
        if (step < 5) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const selectOption = (option, price) => {
        setSelectedOption(option);
        setPrice(price);
        if (step === 1) {
            setStep(2);
        }
    };

    const setFormPrice = (price) => setPrice(price);
    const selectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <ServiceSelectionForm
                        selectedOption={selectedOption}
                        selectOption={selectOption}
                    />
                );
            case 2:
                return (
                    <PlanSelectionForm
                        selectedOption={selectedOption}
                        selectedPlan={selectedPlan}
                        selectPlan={selectPlan}
                        setFormPrice={setFormPrice}
                    />
                );
            case 3:
                return (
                    // <PackageDetails
                    //     selectedPlan={selectedPlan}
                    // />
                    <Box>Package Details</Box>
                );
            default:
                return null;
        }
    };

    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor: '#121212',
                    color: '#fff',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }
            }}
        >
            <Box sx={{ width: '100%', padding: 2, flexGrow: 1, overflowY: 'auto' }}>
                {renderStepContent()}
            </Box>
            <Divider sx={{ borderColor: '#444' }} />
            <Box sx={{ padding: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h6">Price: €{price}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        onClick={handleBack}
                        disabled={step === 1}
                        variant="contained"
                        sx={{
                            backgroundColor: '#333',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#444',
                            },
                            fontSize: '1rem',
                            padding: '10px 20px',
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={step === 3}
                        variant="contained"
                        sx={{
                            backgroundColor: selectedOption ? '#333' : '#555',  // Lighter color when disabled
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: selectedOption ? '#444' : '#555',  // No hover effect if disabled
                            },
                            fontSize: '1rem',
                            padding: '10px 20px',
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default ServiceDrawer;

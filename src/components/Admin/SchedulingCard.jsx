"use client";
import React from 'react';
import { CardBody, StyledCard, CardHeading, ButtonLearnMore } from '../mui/AdminPkgs';
import {Typography, Box } from "@mui/material";

const SchedulingCard = () => {
    return (
        <StyledCard>
            <CardBody>
                <CardHeading>
                    Scheduling
                </CardHeading>

                <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '1.2rem', marginTop: '10px' }}>
                    Schedule and manage car cleaning services.
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <ButtonLearnMore>Manage Scheduling</ButtonLearnMore>
                </Box>
            </CardBody>
        </StyledCard>
    );
};

export default SchedulingCard;

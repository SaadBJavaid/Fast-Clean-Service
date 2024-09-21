import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { StyledCard, ButtonLearnMore, headingStyles, StyledPattern } from '../mui/AdminPkgs';

const CardOffer = ({ title, subtitle, backgroundColor }) => {
    return (
        <StyledCard sx={{ background: backgroundColor }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mr: 2 }}>
                {/* Title */}
                <Typography variant="h5" sx={{ color: 'black', fontWeight: 700 }}>
                    {title}
                </Typography>

                {/* Subtitle */}
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {subtitle}
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <ButtonLearnMore>Learn more</ButtonLearnMore>
                </Box>
            </Box>
            <StyledPattern />
        </StyledCard>
    );
};

const StatsCards = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="Number of Bookings"
                    subtitle="120"
                    backgroundColor="#FEF4C3"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="Work Scheduled"
                    subtitle="45"
                    backgroundColor="#E3D0FF"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="Queries Received"
                    subtitle="85"
                    backgroundColor="#C6F7E2"
                />
            </Grid>
        </Grid>
    );
};


export default StatsCards;

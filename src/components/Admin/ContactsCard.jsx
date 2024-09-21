"use client";
import React from 'react';
import { CardBody, StyledCard, CardHeading, ButtonLearnMore } from '../mui/AdminPkgs';
import { Typography, Box } from "@mui/material";

const ContactsCard = () => {
    return (
        <StyledCard>
            <CardBody>
                <CardHeading>
                    Contacts
                </CardHeading>

                <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '1.2rem', marginTop: '10px' }}>
                    View and manage all customer contacts.
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <ButtonLearnMore>Manage Contacts</ButtonLearnMore>
                </Box>
            </CardBody>
        </StyledCard>
    );
};

export default ContactsCard;
